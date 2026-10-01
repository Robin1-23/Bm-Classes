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

// Real brand marks in brand colours, on white tiles
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA==',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <defs>
          <linearGradient id="footer-ig" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#feda75" />
            <stop offset="0.3" stopColor="#fa7e1e" />
            <stop offset="0.6" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <path fill="url(#footer-ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect x="0.5" y="4" width="23" height="16" rx="4.5" fill="#FF0000" />
        <path d="M9.75 8.5v7l6-3.5z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1PFmnYsfRK/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: CENTER_INFO.whatsappUrl,
    icon: <WhatsAppIcon className="w-6 h-6 fill-[#25D366] text-[#25D366]" />,
  },
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
    <footer
      id="contact"
      className="relative bg-[#0a0a0a] text-white rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden pb-24 lg:pb-0"
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1.2px)', backgroundSize: '6px 6px' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 sm:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Call-back block */}
          <div className="lg:col-span-5">
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] leading-[1.02]">
              Your rank starts
              <span className="block text-white/40">with one call.</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-sm leading-relaxed">
              Leave your number. We’ll call you back to plan your preparation.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-7 flex items-center gap-2 bg-white rounded-full p-1.5 max-w-md">
              <label htmlFor="footer-contact" className="sr-only">Mobile number or email</label>
              <input
                id="footer-contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Your phone or email"
                className="flex-1 min-w-0 bg-transparent px-4 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button type="submit" className="h-11 px-5 rounded-full bg-[#0a0a0a] text-white text-sm font-semibold inline-flex items-center gap-1.5 shrink-0 hover:bg-indigo-600 transition-colors cursor-pointer">
                Call me <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {error && <p className="text-sm text-amber-300 mt-2" role="alert">{error}</p>}
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-10">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-heading font-bold text-sm uppercase tracking-[0.12em] text-white">{col.title}</h3>
                <ul className="mt-5 space-y-3.5">
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
          </div>
        </div>

        {/* Bottom row: socials, address, copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 grid gap-6 md:grid-cols-3 md:items-center">
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:scale-105"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <address className="not-italic text-sm text-white/60 leading-relaxed md:text-center">
            {CENTER_INFO.centres[0].address}
            <br />
            <a href={`tel:${CENTER_INFO.phoneRaw}`} className="hover:text-white">{CENTER_INFO.phone}</a>
          </address>
          <p className="text-sm text-white/40 md:text-right">
            © {new Date().getFullYear()} BM Classes ·{' '}
            <Link href="/admin" className="hover:text-white/70">Admin</Link>
          </p>
        </div>
      </div>

      {/* Giant wordmark, scaled to the footer width, with the sticker sitting on it */}
      <div className="relative mt-12 sm:mt-16 px-3 sm:px-6">
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-14 w-24 h-24 sm:w-32 sm:h-32 rotate-[-12deg] z-10">
          <Sticker />
        </div>
        <svg viewBox="0 0 1000 150" className="block w-full translate-y-[14%]" role="img" aria-label="BM Classes">
          <text x="0" y="140" textLength="1000" lengthAdjust="spacingAndGlyphs" className="font-heading" fontWeight="900" fontSize="176" fill="#ffffff">
            BM CLASSES
          </text>
        </svg>
      </div>
    </footer>
  );
}
