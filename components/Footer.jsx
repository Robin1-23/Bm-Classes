'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';
import { CENTER_INFO } from '@/data/contentData';

const COLUMNS = [
  {
    title: 'Programs',
    links: [
      ['JEE & NEET', '/programs'],
      ['Biology', '/programs'],
      ['Class 9 & 10', '/programs'],
      ['Timetable & fees', '/programs#timetable'],
    ],
  },
  {
    title: 'About',
    links: [
      ['Why us', '/why-us'],
      ['Faculty', '/faculty'],
      ['Results', '/results'],
      ['Fee calculator', '/calculator'],
    ],
  },
  {
    title: 'Visit',
    links: [
      ['Free demo class', '/#book-demo'],
      ['Directions', CENTER_INFO.googleReviewsUrl],
      ['Contact', '/contact'],
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA==', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'YouTube', href: 'https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1PFmnYsfRK/', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
];

// Round sticker badge with text running around the edge
function Sticker() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <defs>
        <path id="footer-sticker-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#ffffff" />
      <text className="font-heading" fontSize="11" fontWeight="700" fill="#0a0a0a">
        <textPath href="#footer-sticker-ring" textLength="272" lengthAdjust="spacing">EX-HOD FACULTY • SECTOR 45 •</textPath>
      </text>
      <text x="60" y="70" textAnchor="middle" className="font-heading" fontSize="30" fontWeight="800" fill="#0a0a0a">BM</text>
    </svg>
  );
}

export default function Footer() {
  const { openRegister } = useModal();
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = contact.trim();
    if (val.includes('@')) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) return setError('Enter a valid email address.');
      setError('');
      return openRegister(null, val);
    }
    const digits = val.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(digits)) return setError('Enter a 10-digit mobile number or an email.');
    setError('');
    openRegister(null, digits);
  };

  return (
    <footer id="contact" className="bg-[#f5f7ff] px-3 sm:px-6 pt-10 pb-3 sm:pb-6">
      <div
        className="relative max-w-[1400px] mx-auto rounded-[32px] bg-[#0a0a0a] text-white overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1.2px)', backgroundSize: '6px 6px' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 px-7 sm:px-12 pt-12 sm:pt-16">
          {COLUMNS.map((col) => (
            <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
              <h2 className="font-heading font-bold text-sm uppercase tracking-[0.12em] text-white">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/60 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 md:col-span-6 md:pl-6">
            <h2 className="font-heading font-bold text-sm uppercase tracking-[0.12em]">Get a call back</h2>
            <form onSubmit={handleSubmit} noValidate className="mt-5 flex items-center gap-2 bg-white rounded-full p-1.5 max-w-md">
              <label htmlFor="footer-contact" className="sr-only">Mobile number or email</label>
              <input
                id="footer-contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Your phone or email"
                className="flex-1 min-w-0 bg-transparent px-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button type="submit" aria-label="Request a call back" className="w-10 h-10 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center shrink-0 hover:bg-indigo-600 transition-colors cursor-pointer">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {error && <p className="text-sm text-amber-300 mt-2" role="alert">{error}</p>}

            <div className="flex items-center gap-5 mt-7">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white/80 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d={s.path} /></svg>
                </a>
              ))}
              <a href={CENTER_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/80 hover:text-white transition-colors">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </a>
            </div>

            <address className="not-italic text-sm text-white/60 leading-relaxed mt-7 max-w-md">
              {CENTER_INFO.centres[0].address}
              <br />
              <a href={`tel:${CENTER_INFO.phoneRaw}`} className="hover:text-white">{CENTER_INFO.phone}</a>
            </address>

            <p className="text-xs text-white/40 mt-4">
              © {new Date().getFullYear()} BM Classes ·{' '}
              <Link href="/admin" className="hover:text-white/70">Admin</Link>
            </p>
          </div>
        </div>

        {/* Giant wordmark, scaled to the panel width, with the sticker sitting on it */}
        <div className="relative mt-10 sm:mt-14 px-4 sm:px-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-14 w-24 h-24 sm:w-32 sm:h-32 rotate-[-12deg] z-10">
            <Sticker />
          </div>
          <svg viewBox="0 0 1000 150" className="block w-full translate-y-[14%]" role="img" aria-label="BM Classes">
            <text x="0" y="140" textLength="1000" lengthAdjust="spacingAndGlyphs" className="font-heading" fontWeight="900" fontSize="176" fill="#ffffff">
              BM CLASSES
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
