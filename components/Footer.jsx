'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';

export default function Footer({ onOpenRegister, onOpenLogin }) {
  const modal = useModal();
  const [contactInput, setContactInput] = useState('');
  const [inputError, setInputError] = useState('');

  const handleRegister = onOpenRegister || modal.openRegister;
  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BmClasses%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = contactInput.trim();
    if (!val) {
      setInputError('Please enter your 10-digit mobile number or email address.');
      return;
    }

    if (val.includes('@')) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(val)) {
        setInputError('Please enter a valid email address (e.g. name@domain.com).');
        return;
      }
      setInputError('');
      handleRegister(null, val);
    } else {
      const digits = val.replace(/\D/g, '');
      if (digits.length !== 10 || !/^[6-9]\d{9}$/.test(digits)) {
        setInputError('Please enter a valid 10-digit mobile number starting with 6-9.');
        return;
      }
      setInputError('');
      handleRegister(null, digits);
    }
  };

  return (
    <footer className="relative bg-[#5b1ce6] text-white pt-20 pb-12 overflow-hidden font-sans" id="contact">
      
      {/* Top Left Organic Yellow Accent Shape */}
      <div 
        className="absolute -top-16 -left-16 w-64 h-64 sm:w-80 sm:h-80 bg-amber-400 rounded-[100%] pointer-events-none"
        style={{ borderRadius: '0% 0% 100% 0% / 0% 0% 100% 0%' }}
      ></div>

      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP HERO CTA SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Join Gurgaon's #1 Academy <br className="hidden sm:inline" /> at speed + scale.
          </h2>
          <p className="text-purple-100 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            BM Classes' cutting edge Ex-HOD technology & micro-batches seamlessly match students with top rankers.
          </p>

          {/* Email / Mobile Quick Action Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Enter 10-digit phone or email"
                value={contactInput}
                onChange={(e) => {
                  setContactInput(e.target.value);
                  if (inputError) setInputError('');
                }}
                className={`w-full sm:w-72 bg-white/20 text-white placeholder-purple-200 border ${
                  inputError ? 'border-amber-300 ring-2 ring-amber-300' : 'border-white/30'
                } rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all`}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#f5a623] hover:bg-[#e09516] text-slate-950 font-black text-sm px-7 py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                Contact Me
              </button>
            </form>
            {inputError && (
              <p className="text-amber-300 text-xs font-bold mt-2.5 text-center animate-pulse">
                ⚠️ {inputError}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM 4-COLUMN FOOTER LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 pt-8 pb-12 border-b border-white/20">
          
          {/* Col 1: Brand Logo & Tagline (4 cols) */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 font-heading text-2xl font-black tracking-tight text-white mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400 p-1 flex items-center justify-center shadow-md shrink-0">
                <span className="font-heading font-black text-slate-950 text-xl">BM</span>
              </div>
              <span className="text-2xl font-heading font-black tracking-tight text-white uppercase">
                BM CLASSES
              </span>
            </Link>

            <p className="text-purple-100 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              BM Classes uses Ex-HOD tech + humans to help students scale their IIT JEE & NEET preparation needs across Gurgaon seamlessly.
            </p>
          </div>

          {/* Col 2: Company Links (2.5 cols) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white text-sm tracking-wide mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-purple-100">
              <li>
                <Link href="/programs" className="hover:text-amber-300 transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-amber-300 transition-colors">
                  Why Micro-Batches
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-amber-300 transition-colors">
                  Ex-HOD Mentors
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-amber-300 transition-colors">
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: More Links (2.5 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-sm tracking-wide mb-5">
              More Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-purple-100">
              <li>
                <Link href="/results" className="hover:text-amber-300 transition-colors">
                  For IIT JEE Aspirants
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-amber-300 transition-colors">
                  Become A Ranker
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Gurgaon Academic Hub
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-amber-300 hover:text-amber-200 font-bold transition-colors inline-flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin Panel</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-sm tracking-wide mb-5">
              Contact Details
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-medium text-purple-100">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a href="mailto:info@bm-classes.com" className="hover:text-amber-300 transition-colors">
                  info@bm-classes.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <a href="tel:+919899818241" className="hover:text-amber-300 transition-colors">
                  +91 98998 18241
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR WITH SOCIAL ICONS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-purple-200">
          <div>
            © {new Date().getFullYear()} BM Classes Gurgaon. All rights reserved.
          </div>

          {/* Brand Colored Social Media Handle Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1PFmnYsfRK/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(24,119,242,0.4)]"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(255,0,0,0.4)]"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f89b29] via-[#ff0069] to-[#7638fa] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(255,0,105,0.4)]"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(37,211,102,0.4)]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
