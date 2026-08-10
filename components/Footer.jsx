'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Clock, Star, ShieldCheck, CheckCircle2, Facebook, Youtube, Instagram } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';

export default function Footer({ onOpenRegister, onOpenLogin }) {
  const [callbackPhone, setCallbackPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modal = useModal();

  const handleRegister = onOpenRegister || modal.openRegister;
  const handleLogin = onOpenLogin || modal.openLogin;

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BmClasses%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (callbackPhone.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setCallbackPhone('');
    }
  };

  return (
    <footer className="bg-[#070a11] text-slate-400 py-16 sm:py-24 border-t border-slate-800/90 relative overflow-hidden" id="contact">
      
      {/* Subtle Background Watermark Typography */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] xs:text-[140px] sm:text-[180px] lg:text-[220px] font-heading font-black text-white/[0.02] tracking-tighter pointer-events-none select-none whitespace-nowrap">
        BMCLASSES
      </div>

      {/* Subtle Glow Accents */}
      <div className="absolute -left-20 top-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 bottom-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP CTA BANNER CARD */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-black uppercase tracking-widest mb-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>DIRECT EX-HOD COUNSELING</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to secure your micro-batch seat?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 font-medium max-w-xl">
              Book a direct 1-on-1 counseling session with Ex-HOD faculty or visit our Gurgaon center today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleRegister}
              className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Institute Identity (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 font-heading text-2xl font-black tracking-tight text-white mb-2">
              <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 font-black flex items-center justify-center text-base shadow-md">
                BM
              </span>
              <span>CLASSES</span>
            </Link>

            <span className="inline-block text-[11px] font-black text-cyan-300 uppercase tracking-widest mb-3">
              Learn Today, Lead Tomorrow
            </span>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-sm mb-5 font-medium">
              100% Ex-HOD taught. Small capped batches. Dedicated JEE Advanced & NEET preparation in Gurgaon.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl text-xs font-bold text-slate-200">
              <div className="flex items-center text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-cyan-400" />
                ))}
              </div>
              <span className="text-white font-black">4.9/5 Rating</span>
              <span className="text-slate-400 text-[10px] font-semibold">(120+ Parent Reviews)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-white text-xs uppercase tracking-widest mb-5">
              Quick Pages
            </h4>
            <ul className="space-y-3 text-xs font-extrabold text-slate-300">
              <li>
                <Link href="/why-us" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Why Small Batch Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Academic Programs (JEE & NEET)</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Ex-HOD Faculty Mentors</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Fee & Scholarship Estimator</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Top AIR Ranks & Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>Gurgaon Center Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Center Address & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-white text-xs uppercase tracking-widest mb-5">
              Gurgaon Centers
            </h4>
            
            <div className="space-y-3 text-xs font-semibold text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Sec 45 (Near DPS) · Sec 47 (Malibu Towne) · Sec 46 · Sec 52 (Ardee City)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-300 shrink-0" />
                <a href="tel:+919899818241" className="text-white font-extrabold hover:text-cyan-300 transition-colors">+91 98998 18241 / 99994 95938</a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-extrabold hover:underline">
                  +91 98998 18241 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.facebook.com/share/1PFmnYsfRK/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Request HOD Callback Box (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-white text-xs uppercase tracking-widest mb-5">
              Quick Callback
            </h4>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-[11px] text-slate-300 mb-3 font-medium">
                Enter mobile number for an immediate Ex-HOD callback.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-2.5 rounded-xl text-[11px] font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Callback requested!</span>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-2">
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-extrabold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    Request Call
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 BmClasses Coaching Institute. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={handleRegister} className="hover:text-cyan-300 transition-colors cursor-pointer">Admissions</button>
            <span>·</span>
            <button onClick={handleLogin} className="hover:text-cyan-300 transition-colors cursor-pointer">Student Portal</button>
            <span>·</span>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">Ardee City Sector 52 Gurgaon</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
