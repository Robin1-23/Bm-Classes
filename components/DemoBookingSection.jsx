'use client';

import React, { useMemo, useState } from 'react';
import { CalendarCheck, CheckCircle2, User, Phone, ArrowRight, Clock } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';

const CLASSES = ['Class 9', 'Class 10', 'Class 11', 'Class 12'];
const SUBJECTS = ['Chemistry', 'Biology', 'Science', 'Maths'];
// ponytail: fixed slot list; move into data/siteContent.js if timings change often
const SLOTS = ['10–11 AM', '12–1 PM', '4–5 PM', '6–7 PM'];
const PERKS = ['A real class with the HOD, not a sales pitch', 'Honest feedback on where you stand', 'No fee, no obligation to join'];

// Next 7 days in the visitor's local time, starting tomorrow
function nextDays() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + i + 1);
    return {
      key: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
      weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
      day: d.getDate(),
      month: d.toLocaleDateString('en-IN', { month: 'short' }),
      label: d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }),
    };
  });
}

function Chips({ options, value, onChange, label }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o)}
            className={`h-10 px-4 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
              active ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <div>
      <p className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 mb-3">
        <span className="w-6 h-6 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center">{n}</span>
        {title}
      </p>
      {children}
    </div>
  );
}

export default function DemoBookingSection() {
  const days = useMemo(nextDays, []);
  const [form, setForm] = useState({ name: '', phone: '', cls: 'Class 12', subject: 'Chemistry', day: '', slot: '' });
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(null);

  const set = (key) => (value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = form.phone.replace(/\D/g, '');
    if (!form.name.trim()) return setError('Enter the student’s name.');
    if (!/^[6-9]\d{9}$/.test(phone)) return setError('Enter a valid 10-digit mobile number.');
    if (!form.day) return setError('Pick a day.');
    if (!form.slot) return setError('Pick a time.');

    const when = days.find((d) => d.key === form.day).label;
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
    setDone({ when, slot: form.slot, subject: form.subject, waUrl, popupBlocked: !popup });
  };

  const input = 'w-full h-12 pl-11 pr-4 rounded-2xl border border-slate-200 bg-white text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition';

  return (
    <section id="book-demo" className="bg-white py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: pitch */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHeader
            badgeIcon={CalendarCheck}
            badgeText="FREE DEMO CLASS"
            title="Sit in on a class before you decide."
            subtitle="Pick a subject and a time. We’ll confirm your seat on WhatsApp."
            className="!text-left !mx-0 !mb-8"
          />
          <ul className="space-y-3">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-slate-700">
                <span className="w-6 h-6 rounded-full bg-[#eef7ea] text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {['/bm_sir.jpg', '/konika_mam.jpg', '/chumki_mam.jpeg'].map((src) => (
                <img key={src} src={src} alt="" loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-white" />
              ))}
            </div>
            <p className="text-sm text-slate-600">Taught by the HODs themselves</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7 rounded-[28px] bg-white p-2 border border-slate-200/70 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]">
          {done ? (
            <div className="rounded-[22px] bg-[#eef7ea] p-8 sm:p-10 text-center">
              <span className="w-16 h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </span>
              <h3 className="font-heading font-extrabold text-3xl tracking-[-0.03em] text-slate-950 mt-5">You’re almost in.</h3>
              <p className="text-slate-700 mt-2">
                {done.subject} demo · {done.when}, {done.slot}. We’ll confirm on WhatsApp shortly.
              </p>
              {done.popupBlocked && (
                <a href={done.waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-full bg-[#25D366] text-white text-sm font-semibold">
                  <WhatsAppIcon className="w-4 h-4" /> Send on WhatsApp
                </a>
              )}
              <button onClick={() => setDone(null)} className="block mx-auto mt-5 text-sm font-semibold text-slate-700 underline underline-offset-4 cursor-pointer">
                Book another demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="rounded-[22px] bg-[#f5f7ff] p-5 sm:p-7 space-y-7">
                <Step n="1" title="Who’s coming?">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="relative block">
                      <span className="sr-only">Student name</span>
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input className={input} value={form.name} onChange={(e) => set('name')(e.target.value)} placeholder="Student’s name" autoComplete="name" />
                    </label>
                    <label className="relative block">
                      <span className="sr-only">Mobile number</span>
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input className={input} value={form.phone} onChange={(e) => set('phone')(e.target.value)} placeholder="Mobile number" inputMode="numeric" autoComplete="tel" maxLength={14} />
                    </label>
                  </div>
                </Step>

                <Step n="2" title="Class and subject">
                  <Chips label="Class" options={CLASSES} value={form.cls} onChange={set('cls')} />
                  <div className="h-3" />
                  <Chips label="Subject" options={SUBJECTS} value={form.subject} onChange={set('subject')} />
                </Step>

                <Step n="3" title="Pick a day">
                  <div role="radiogroup" aria-label="Day" className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {days.map((d) => {
                      const active = d.key === form.day;
                      return (
                        <button
                          key={d.key}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          aria-label={d.label}
                          onClick={() => set('day')(d.key)}
                          className={`rounded-2xl py-2.5 border text-center transition-colors cursor-pointer ${
                            active ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          <span className={`block text-xs ${active ? 'text-white/70' : 'text-slate-500'}`}>{d.weekday}</span>
                          <span className="block font-heading font-bold text-xl leading-tight">{d.day}</span>
                          <span className={`block text-xs ${active ? 'text-white/70' : 'text-slate-500'}`}>{d.month}</span>
                        </button>
                      );
                    })}
                  </div>
                </Step>

                <Step n="4" title="Pick a time">
                  <div role="radiogroup" aria-label="Time" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SLOTS.map((slot) => {
                      const active = slot === form.slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => set('slot')(slot)}
                          className={`h-12 rounded-2xl border text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                            active ? 'bg-slate-950 text-white border-slate-950' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          <Clock className={`w-3.5 h-3.5 ${active ? 'text-white/70' : 'text-slate-400'}`} />
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-3 sm:px-5 py-4">
                <p className="text-sm text-slate-500 flex items-center gap-2 sm:mr-auto">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> We confirm your slot on WhatsApp
                </p>
                {error && <p className="text-sm font-semibold text-red-600 sm:order-first sm:mr-auto" role="alert">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="h-12 px-6 rounded-full bg-slate-950 hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {sending ? 'Sending…' : 'Book my free demo'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
