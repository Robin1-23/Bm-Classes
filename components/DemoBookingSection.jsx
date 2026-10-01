'use client';

import React, { useState } from 'react';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CENTER_INFO } from '@/data/contentData';

const SUBJECTS = ['Chemistry', 'Physics', 'Maths', 'Biology'];
const CLASSES = ['Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper'];
// ponytail: fixed slot list; move into the admin content store if timings change often
const SLOTS = ['10–11 AM', '12–1 PM', '4–5 PM', '6–7 PM'];

const toISO = (d) => d.toISOString().slice(0, 10);

export default function DemoBookingSection() {
  const tomorrow = new Date(Date.now() + 86400000);
  const maxDate = new Date(Date.now() + 30 * 86400000);

  const [form, setForm] = useState({ name: '', phone: '', cls: 'Class 11', subject: 'Chemistry', date: '', slot: '' });
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(null);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = form.phone.replace(/\D/g, '');
    if (!form.name.trim()) return setError('Enter the student’s name.');
    if (!/^[6-9]\d{9}$/.test(phone)) return setError('Enter a valid 10-digit mobile number.');
    if (!form.date) return setError('Pick a date.');
    if (!form.slot) return setError('Pick a time slot.');

    const when = new Date(`${form.date}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    const summary = `Free demo · ${form.subject} · ${form.cls} · ${when}, ${form.slot}`;

    // Open WhatsApp before the network call so popup blockers allow it
    const text = encodeURIComponent(
      `Hi BM Classes, I'd like to book a free demo class.\n\nStudent: ${form.name.trim()}\nClass: ${form.cls}\nSubject: ${form.subject}\nPreferred: ${when}, ${form.slot}\nPhone: ${phone}`
    );
    const waUrl = `https://wa.me/${CENTER_INFO.phoneRaw.replace(/\D/g, '')}?text=${text}`;
    const popup = window.open(waUrl, '_blank');

    setSending(true);
    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentName: form.name.trim(), phoneNumber: phone, selectedProgram: summary, source: 'Demo Class Booking' }),
      });
    } catch (err) {
      console.error('Demo booking save failed:', err);
    }
    setSending(false);
    setDone({ when, slot: form.slot, waUrl, popupBlocked: !popup });
  };

  const field = 'w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-[15px] text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20';

  return (
    <section id="book-demo" className="bg-[#f5f7ff] py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <SectionHeader
          badgeIcon={CalendarCheck}
          badgeText="FREE DEMO CLASS"
          title="Sit in on a class before you decide."
          subtitle="Pick a subject and a time. We’ll confirm your seat on WhatsApp, and you’ll meet the HOD who teaches it."
          className="!text-left !mx-0 lg:sticky lg:top-28"
        />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          {done ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-heading font-extrabold text-2xl tracking-[-0.02em] text-slate-950 mt-4">Request sent</h3>
              <p className="text-slate-600 mt-2">
                We’ll confirm your demo for {done.when}, {done.slot} on WhatsApp shortly.
              </p>
              {done.popupBlocked && (
                <a href={done.waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 h-11 px-6 items-center rounded-full bg-[#25D366] text-white text-sm font-semibold">
                  Send on WhatsApp
                </a>
              )}
              <button onClick={() => setDone(null)} className="block mx-auto mt-5 text-sm font-semibold text-indigo-700 cursor-pointer">
                Book another demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">Student name</span>
                  <input className={field} value={form.name} onChange={set('name')} placeholder="Rahul Sharma" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">Mobile number</span>
                  <input className={field} value={form.phone} onChange={set('phone')} placeholder="98765 43210" inputMode="numeric" autoComplete="tel" maxLength={14} />
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">Class</span>
                  <select className={field} value={form.cls} onChange={set('cls')}>
                    {CLASSES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">Subject</span>
                  <select className={field} value={form.subject} onChange={set('subject')}>
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-semibold text-slate-800 mb-1.5">Date</span>
                <input type="date" className={field} value={form.date} onChange={set('date')} min={toISO(tomorrow)} max={toISO(maxDate)} />
              </label>

              <fieldset>
                <legend className="block text-sm font-semibold text-slate-800 mb-1.5">Time</legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => set('slot')({ target: { value: slot } })}
                      aria-pressed={form.slot === slot}
                      className={`h-11 rounded-xl border text-sm font-semibold transition-colors cursor-pointer ${
                        form.slot === slot ? 'bg-slate-950 border-slate-950 text-white' : 'bg-white border-slate-200 text-slate-800 hover:border-slate-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </fieldset>

              {error && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold transition-colors cursor-pointer"
              >
                {sending ? 'Sending…' : 'Book my free demo'}
              </button>
              <p className="text-xs text-slate-500 text-center">Opens WhatsApp so we can confirm your slot.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
