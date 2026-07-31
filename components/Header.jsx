'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Lock } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Header({ onOpenRegister, onOpenLogin, onOpenSeatLock }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BmClasses%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300 w-full max-w-full overflow-x-hidden">
        
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Brand Logo & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6 text-slate-950" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-slate-950" />}
            </button>
            
            <a href="#" className="flex items-center gap-1.5 sm:gap-2 font-heading text-lg sm:text-2xl font-black tracking-tight text-slate-950 group">
              <span className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black flex items-center justify-center text-sm sm:text-base shadow-md group-hover:scale-105 transition-transform">
                Bm
              </span>
              <span className="tracking-tight">Classes</span>
              <span className="hidden xs:inline-block text-[9px] sm:text-[10px] bg-amber-400 text-slate-950 px-1.5 sm:px-2 py-0.5 rounded-md font-extrabold ml-0.5 border border-black/10 shadow-xs">
                EX-FIITJEE & VMC HODs
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-bold text-slate-700">
            <a href="#why-bmclasses" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Why Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#programs" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Programs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faculty" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Ex-HOD Mentors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#calculator" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Fee Estimator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#results" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Top Ranks & Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors py-1 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={onOpenSeatLock}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-black text-[11px] sm:text-xs transition-all shadow-sm cursor-pointer flex items-center gap-1 border border-emerald-400/40 animate-pulse"
            >
              <Lock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white shrink-0" />
              <span>Lock Seat (2 Left)</span>
            </button>

            <button 
              onClick={onOpenLogin}
              className="bg-amber-400 text-slate-950 hover:bg-amber-300 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-extrabold text-[11px] sm:text-xs transition-all shadow-xs cursor-pointer hidden xs:inline-block"
            >
              Login
            </button>

            <button 
              onClick={onOpenRegister}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-extrabold text-[11px] sm:text-xs transition-all shadow-md shadow-indigo-200 cursor-pointer flex items-center gap-1 sm:gap-1.5"
            >
              <span>Apply</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Jump Bar */}
        <div className="lg:hidden bg-slate-100/90 border-t border-slate-200/60 overflow-x-auto no-scrollbar py-1.5 px-3 flex items-center gap-2 text-[11px] font-extrabold text-slate-700">
          <a href="#why-bmclasses" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            ⚡ Why Us
          </a>
          <a href="#programs" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            📚 Programs
          </a>
          <a href="#faculty" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            🎓 Ex-HODs
          </a>
          <a href="#calculator" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            🧮 Fee Calculator
          </a>
          <a href="#results" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            🏆 AIR Ranks
          </a>
          <a href="#contact" className="shrink-0 bg-white px-3 py-1 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            📍 Center Map
          </a>
        </div>

      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 top-[90px] bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-x-0 top-[90px] z-50 bg-white border-b border-slate-200 shadow-2xl p-6 flex flex-col gap-4 text-slate-900 max-h-[80vh] overflow-y-auto">
            
            <div className="text-[10px] font-black uppercase tracking-widest text-indigo-600 pb-1 border-b border-slate-100 flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="text-[9px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black">Gurgaon Center</span>
            </div>

            <nav className="flex flex-col gap-2 font-extrabold text-sm">
              <a 
                href="#why-bmclasses" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Why Small Batch Coaching</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-black">10-15 Cap</span>
              </a>

              <a 
                href="#programs" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Programs (JEE & NEET)</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-black">Class 11-12</span>
              </a>

              <a 
                href="#faculty" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Ex-HOD Faculty Mentors</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">FIITJEE/VMC</span>
              </a>

              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Fee & Batch Estimator</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black">Calculate</span>
              </a>

              <a 
                href="#results" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Top AIR Ranks & Reviews</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">AIR 18, 22</span>
              </a>

              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
              >
                <span>Gurgaon Center & Location</span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-black">Ardee City</span>
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a 
                href="tel:+919899818241" 
                className="w-full bg-slate-950 text-white text-center font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" /> Call +91 98998 18241
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-emerald-700 text-white text-center font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-200" /> WhatsApp Counseling
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
