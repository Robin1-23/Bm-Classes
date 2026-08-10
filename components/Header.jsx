'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';

export default function Header({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const modal = useModal();

  const handleRegister = onOpenRegister || modal.openRegister;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Why Us', href: '/why-us' },
    { label: 'Programs', href: '/programs' },
    { label: 'Ex-HOD Mentors', href: '/faculty' },
    { label: 'Fee Estimator', href: '/calculator' },
    { label: 'AIR Ranks', href: '/results' },
    { label: 'Contact', href: '/contact' },
  ];

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BM%20CLASSES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  return (
    <>
      {/* Fixed Sticky Outer Container */}
      <header className="fixed top-0 inset-x-0 z-50 w-full px-2 sm:px-4 py-2 sm:py-3 transition-all duration-300 pointer-events-none">
        
        {/* Floating Glassmorphism Island Container */}
        <div className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl border transition-all duration-300 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3 relative pointer-events-auto ${
          scrolled 
            ? 'bg-[#060911]/90 backdrop-blur-2xl border-cyan-500/30 shadow-2xl shadow-cyan-950/50' 
            : 'bg-[#070a13]/85 backdrop-blur-xl border-slate-800/90 shadow-xl'
        }`}>

          {/* Left Action Box (WhatsApp Desk with Pulsating Status Dot) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 bg-[#0d1424] border border-slate-800/90 hover:border-emerald-400/50 hover:bg-[#111a2e] px-3.5 py-1.5 rounded-2xl text-xs font-extrabold text-slate-200 transition-all cursor-pointer shadow-xs group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Center Brand Logo & Name (Flared Rounded Vintage Display Font matching "FRIDAY" screenshot) */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <div className="w-10 h-10 rounded-[14px] bg-gradient-to-b from-[#111c35] via-[#090d16] to-[#04070d] flex items-center justify-center relative overflow-hidden border border-white/20 shadow-inner">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/15 to-transparent pointer-events-none"></div>
                
                {/* Monogram Icon in Calistoga Flared Serif */}
                <span className="font-logo font-normal text-sm sm:text-base text-[#fffdf5] tracking-tight relative z-10 drop-shadow-xs">
                  BM
                </span>
                
                {/* Micro Sparkle Beacon */}
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-300 border border-white/40"></span>
              </div>
            </div>

            <span className="font-logo font-normal text-2xl sm:text-3xl tracking-tight text-[#fffdf5] group-hover:text-cyan-300 transition-colors drop-shadow-md">
              BM CLASSES
            </span>
          </Link>

          {/* Centered-Right Nav Capsule */}
          <nav className="hidden lg:flex items-center gap-5 bg-[#0b1120]/90 border border-slate-800/90 rounded-full px-5 py-1.5 text-xs font-bold text-slate-300 shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-black bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 rounded-full'
                      : 'hover:text-white text-slate-300 hover:scale-105'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button (Electric Gradient Pill) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => handleRegister()}
              className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 text-slate-950 font-black text-xs px-3.5 sm:px-4.5 py-2 rounded-2xl flex items-center gap-1.5 shadow-lg shadow-cyan-950/60 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

        </div>

      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-x-2 top-2 z-50 bg-[#090d16] border border-slate-800 shadow-2xl p-5 flex flex-col gap-4 text-white max-h-[90vh] overflow-y-auto rounded-3xl">
            
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-black flex items-center justify-center text-xs">
                  BM
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                  BM CLASSES Navigation
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-900 text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-slate-800"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 font-extrabold text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-black shadow-md'
                        : 'hover:bg-slate-900 hover:text-cyan-300 text-slate-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[9px] bg-cyan-400 text-slate-950 px-2 py-0.5 rounded font-black">
                        Active Page
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a 
                href="tel:+919899818241" 
                className="w-full bg-slate-900 border border-slate-800 text-white text-center font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-cyan-400" /> Call +91 98998 18241
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-emerald-700 text-white text-center font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-200" /> WhatsApp Desk
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
