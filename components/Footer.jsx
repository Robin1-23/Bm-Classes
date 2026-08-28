'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, Star, ShieldCheck, Award, Lock } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';

export default function Footer({ onOpenRegister, onOpenLogin }) {
  const modal = useModal();

  const handleRegister = onOpenRegister || modal.openRegister;
  const handleLogin = onOpenLogin || modal.openLogin;

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BmClasses%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  return (
    <footer className="bg-slate-950 text-white py-16 sm:py-24 border-t border-slate-900 relative overflow-hidden" id="contact">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[100px] xs:text-[150px] sm:text-[200px] lg:text-[250px] font-heading font-black text-white/[0.02] tracking-tighter pointer-events-none select-none whitespace-nowrap">
        BMCLASSES
      </div>

      {/* Ambient Glow Accents */}
      <div className="absolute -left-24 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-24 bottom-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* PREMIUM CTA BANNER CARD */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden group transition-all">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-black uppercase tracking-wider mb-2.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>DIRECT EX-HOD MENTORSHIP</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to secure your micro-batch seat?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 font-medium max-w-xl leading-relaxed">
              Book a direct 1-on-1 counseling session with Ex-HOD faculty or visit our Gurgaon center today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
            <button
              onClick={handleRegister}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* REFINED 3-COLUMN ARCHITECTURAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-slate-900">
          
          {/* Col 1: Institute Brand & Quality Guarantee (5 cols) */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 font-heading text-2xl font-black tracking-tight text-white mb-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 overflow-hidden shadow-md border border-slate-200 shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="BM Classes Gurgaon" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <span className="text-xl sm:text-2xl font-heading font-black tracking-tight text-white uppercase">
                BM CLASSES
              </span>
            </Link>

            <div className="text-xs font-black text-indigo-400 uppercase tracking-wider mb-4">
              Learn Today, Lead Tomorrow
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 max-w-md mb-6 font-medium">
              100% Ex-HOD taught. Small capped micro-batches (Max 10–15 students). Dedicated JEE Advanced & NEET preparation hub in Gurgaon.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-full text-xs font-bold text-white shadow-xs">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white font-black ml-1">4.9/5 Rating</span>
                <span className="text-zinc-400 text-[10px] font-semibold">(120+ Parent Reviews)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3.5 py-2.5 rounded-full text-xs font-extrabold text-cyan-300">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Ex-HOD Mentors</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Quick Pages</span>
            </h4>
            <ul className="space-y-3.5 text-xs font-bold text-zinc-300">
              <li>
                <Link href="/why-us" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Why Small Batch Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Academic Programs (JEE & NEET)</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Ex-HOD Faculty Mentors</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Fee & Scholarship Estimator</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Top AIR Ranks & Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors"></span>
                  <span>Gurgaon Center Location</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-cyan-400 hover:text-cyan-300 font-black transition-colors flex items-center gap-2.5 group">
                  <Lock className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Admin Panel (Applications Desk)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Gurgaon Centers, Direct Phone & Social Media (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-black text-white text-xs uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Gurgaon Centers & Contact</span>
            </h4>
            
            <div className="space-y-4 text-xs font-semibold text-zinc-300">
              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed text-zinc-300 text-xs">
                  <strong className="text-white block font-bold mb-0.5">Official Center Address:</strong>
                  House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a 
                  href="tel:+919899818241" 
                  className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 rounded-2xl text-white font-extrabold hover:text-indigo-400 transition-all text-xs"
                >
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Call Admissions</span>
                </a>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-3 rounded-2xl text-emerald-400 font-extrabold transition-all text-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-400 text-emerald-400 shrink-0" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              {/* REAL BRAND SOCIAL MEDIA ICONS */}
              <div className="pt-2">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2.5">Follow Us On Social Media</div>
                <div className="flex items-center gap-3">
                  {/* Facebook Real Icon */}
                  <a
                    href="https://www.facebook.com/share/1PFmnYsfRK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(24,119,242,0.4)]"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* YouTube Real Icon */}
                  <a
                    href="https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(255,0,0,0.4)]"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                  {/* Instagram Real Icon */}
                  <a
                    href="https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f89b29] via-[#ff0069] to-[#7638fa] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_15px_rgba(255,0,105,0.4)]"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <div>
            © 2026 BmClasses Coaching Institute. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={handleRegister} className="hover:text-indigo-400 transition-colors cursor-pointer">Admissions</button>
            <span>·</span>
            <Link href="/admin" className="hover:text-[#22d3ee] text-cyan-300 font-bold transition-colors cursor-pointer flex items-center gap-1">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Admin Panel</span>
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-indigo-400 transition-colors">Sector 45 Gurgaon Center</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
