'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, User, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';
import { COURSES, courseName } from '@/data/siteContent';

const GENERAL = 'General enquiry / free demo';
const OPTIONS = [...COURSES.map((c) => ({ value: courseName(c), title: c.title, sub: c.subject })), { value: GENERAL, title: 'Not sure yet', sub: 'Help me choose' }];
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Modals({ registerOpen, preselectedProgram, prefilledPhone, onClose }) {
  const [studentName, setStudentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(GENERAL);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(null);

  // Pre-select the course the visitor clicked on
  useEffect(() => {
    if (!registerOpen || !preselectedProgram) return;
    const wanted = preselectedProgram.toLowerCase();
    const match = OPTIONS.find((o) => o.value.toLowerCase() === wanted || wanted.includes(o.value.toLowerCase()));
    setCourse(match ? match.value : GENERAL);
  }, [preselectedProgram, registerOpen]);

  // Carry over the phone or email typed into the hero / footer box
  useEffect(() => {
    if (!registerOpen || !prefilledPhone) return;
    const val = prefilledPhone.trim();
    if (val.includes('@')) setEmail(val);
    else setPhoneNumber(val.replace(/\D/g, '').slice(0, 10));
  }, [prefilledPhone, registerOpen]);

  // Close on Escape and stop the page scrolling behind the sheet
  useEffect(() => {
    if (!registerOpen) return;
    const onKey = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [registerOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    setDone(null);
    setError('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = phoneNumber.replace(/\D/g, '');
    const cleanEmail = email.trim();
    if (!studentName.trim()) return setError('Enter the student’s name.');
    if (!/^[6-9]\d{9}$/.test(phone)) return setError('Enter a valid 10-digit mobile number.');
    if (cleanEmail && !EMAIL_RE.test(cleanEmail)) return setError('That email doesn’t look right. You can also leave it empty.');

    // Open WhatsApp before any network call so popup blockers allow it
    const text = encodeURIComponent(
      `Hi BM Classes, I'd like a call back about ${course}.\n\nStudent: ${studentName.trim()}\nPhone: ${phone}${cleanEmail ? `\nEmail: ${cleanEmail}` : ''}`
    );
    const waUrl = `https://wa.me/${CENTER_INFO.phoneRaw.replace(/\D/g, '')}?text=${text}`;
    const popup = window.open(waUrl, '_blank');

    setSubmitting(true);
    const payload = { studentName: studentName.trim(), phoneNumber: phone, email: cleanEmail, selectedProgram: course, source: 'Registration Modal' };
    try {
      await fetch('/api/applications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } catch (err) {
      console.error('Failed to submit application:', err);
    }
    // Local copy so the admin desk on this device still sees it if the network failed
    try {
      const existing = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const rest = existing.filter((r) => !(r.phoneNumber === phone && r.studentName === payload.studentName));
      rest.unshift({ id: `REG-${Date.now()}`, ...payload, status: 'New Lead', submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) });
      localStorage.setItem('bmclasses_registrations', JSON.stringify(rest));
    } catch (err) {}

    setSubmitting(false);
    setDone({ waUrl, popupBlocked: !popup });
    setStudentName('');
    setEmail('');
  };

  if (!registerOpen) return null;

  const input = 'w-full h-12 pl-11 pr-4 rounded-2xl border border-slate-200 bg-white text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition';

  return (
    <div
      className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-title"
    >
      <div
        className="w-full sm:max-w-xl max-h-[94vh] overflow-y-auto bg-white rounded-t-[28px] sm:rounded-[28px] p-2 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header panel */}
        <div className="relative rounded-[22px] bg-[#f3f1ff] p-6 sm:p-7">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">Free counselling call</p>
          <h2 id="register-title" className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.05] text-slate-950 mt-3 pr-10">
            Join BM Classes.
            <span className="block text-slate-400">We’ll call you back.</span>
          </h2>
          <div className="flex items-center gap-3 mt-5">
            <div className="flex -space-x-2">
              {['/bm_sir.jpg', '/konika_mam.jpg', '/chumki_mam.jpeg'].map((src) => (
                <img key={src} src={src} alt="" className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-[#f3f1ff]" />
              ))}
            </div>
            <p className="text-sm text-slate-600">Talk to the HOD who’ll teach you</p>
          </div>
        </div>

        {done ? (
          <div className="px-5 sm:px-7 py-10 text-center">
            <span className="w-16 h-16 rounded-full bg-[#eef7ea] text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </span>
            <h3 className="font-heading font-extrabold text-2xl tracking-[-0.02em] text-slate-950 mt-5">Request sent</h3>
            <p className="text-slate-600 mt-2">We’ll reply on WhatsApp and call you back soon.</p>
            {done.popupBlocked && (
              <a href={done.waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-full bg-[#25D366] text-white text-sm font-semibold">
                <WhatsAppIcon className="w-4 h-4" /> Send on WhatsApp
              </a>
            )}
            <button onClick={handleClose} className="block mx-auto mt-5 text-sm font-semibold text-slate-700 underline underline-offset-4 cursor-pointer">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-4 sm:px-6 pt-6 pb-4 space-y-6">
            <fieldset>
              <legend className="text-sm font-semibold text-slate-900 mb-3">Which course?</legend>
              <div role="radiogroup" className="grid grid-cols-2 gap-2">
                {OPTIONS.map((o) => {
                  const active = o.value === course;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => {
                        setCourse(o.value);
                        setError('');
                      }}
                      className={`text-left rounded-2xl border px-3.5 py-2.5 transition-colors cursor-pointer ${
                        active ? 'bg-slate-950 border-slate-950 text-white' : 'bg-white border-slate-200 text-slate-900 hover:border-slate-400'
                      }`}
                    >
                      <span className="block text-sm font-semibold leading-tight">{o.title}</span>
                      <span className={`block text-xs mt-0.5 ${active ? 'text-white/70' : 'text-slate-500'}`}>{o.sub}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold text-slate-900 mb-3">Your details</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="relative block">
                  <span className="sr-only">Student name</span>
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className={input} value={studentName} onChange={(e) => { setStudentName(e.target.value); setError(''); }} placeholder="Student’s name" autoComplete="name" />
                </label>
                <label className="relative block">
                  <span className="sr-only">Mobile number</span>
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    className={input}
                    value={phoneNumber}
                    onChange={(e) => { setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10)); setError(''); }}
                    placeholder="Mobile number"
                    inputMode="numeric"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label className="relative block">
                <span className="sr-only">Email (optional)</span>
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input className={input} value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} placeholder="Email (optional)" type="email" autoComplete="email" />
              </label>
            </fieldset>

            {error && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-full bg-slate-950 hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {submitting ? 'Sending…' : 'Request a call back'}
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> Opens WhatsApp so we can reach you faster. Your number is only used to contact you.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
