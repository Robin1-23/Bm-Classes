// Instant new-lead alerts. Each channel turns on when its environment variables are set in Vercel:
//   Telegram: TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID (comma-separate several chat IDs)
//   Email (Resend): RESEND_API_KEY + LEAD_ALERT_EMAIL (comma-separate several addresses), optional LEAD_ALERT_FROM
// Never throws: a failed alert must not block saving the lead.

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function notifyLead(lead, { repeat = false } = {}) {
  const wa = `https://wa.me/91${lead.phoneNumber}?text=${encodeURIComponent(
    `Hi ${lead.studentName}, this is BM Classes. Thank you for your enquiry about ${lead.selectedProgram}. When is a good time to call?`
  )}`;
  const rows = [
    ['Student', lead.studentName],
    ['Phone', `+91 ${lead.phoneNumber}`],
    ['Email', lead.email],
    ['Course', lead.selectedProgram],
    ['Form', lead.source],
    ['Notes', lead.notes],
    ['Time', lead.submittedAt],
  ].filter(([, v]) => v);
  const title = `${repeat ? '🔁 Repeat enquiry' : '🔔 New enquiry'}: ${lead.studentName}`;

  const jobs = [];
  const timeout = () => AbortSignal.timeout(5000);

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const text = [`<b>${esc(title)}</b>`, '', ...rows.map(([k, v]) => `<b>${k}:</b> ${esc(v)}`)].join('\n');
    for (const chatId of TELEGRAM_CHAT_ID.split(',').map((s) => s.trim()).filter(Boolean)) {
      jobs.push(
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: timeout(),
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [[{ text: '💬 WhatsApp student', url: wa }]],
            },
          }),
        })
      );
    }
  }

  const { RESEND_API_KEY, LEAD_ALERT_EMAIL, LEAD_ALERT_FROM } = process.env;
  if (RESEND_API_KEY && LEAD_ALERT_EMAIL) {
    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:520px">
        <h2 style="margin:0 0 12px">${esc(title)}</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap">${k}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`).join('')}
        </table>
        <p style="margin:20px 0 0">
          <a href="tel:+91${esc(lead.phoneNumber)}" style="background:#0a0a0a;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-weight:600">Call now</a>
          &nbsp;
          <a href="${esc(wa)}" style="background:#25D366;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-weight:600">WhatsApp</a>
        </p>
      </div>`;
    jobs.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        signal: timeout(),
        body: JSON.stringify({
          from: LEAD_ALERT_FROM || 'BM Classes Leads <onboarding@resend.dev>',
          to: LEAD_ALERT_EMAIL.split(',').map((s) => s.trim()).filter(Boolean),
          subject: `${title} — ${lead.selectedProgram}`,
          html,
        }),
      })
    );
  }

  const results = await Promise.allSettled(jobs);
  for (const r of results) {
    if (r.status === 'rejected') console.error('Lead alert failed:', r.reason);
    else if (!r.value.ok) console.error('Lead alert failed:', r.value.status, await r.value.text().catch(() => ''));
  }
}
