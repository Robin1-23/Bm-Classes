'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';

export default function Header({ onOpenRegister, onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const modal = useModal();

  const handleRegister = onOpenRegister || modal.openRegister;
  const handleLogin = onOpenLogin || modal.openLogin;

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
      <header className="sticky top-0 z-40 bg-[#070a11]/95 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300 w-full max-w-full overflow-x-hidden text-white">
        
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          
          {/* Left Action Box (Matching ReferRush Left Action Button) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Center Brand Logo & Name (Matching ReferRush Logo Block) */}
          <Link href="/" className="flex items-center gap-2.5 font-heading text-base sm:text-lg font-black tracking-tight text-white group shrink-0">
            <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-400/60 text-cyan-400 font-heading font-black flex items-center justify-center text-xs shadow-md transition-colors">
              BM
            </span>
            <span className="font-extrabold tracking-tight text-white">BM CLASSES</span>
          </Link>

          {/* Centered-Right Rounded Nav Pill Container (Matching ReferRush Rounded Pill Nav) */}
          <nav className="hidden lg:flex items-center gap-4 bg-slate-900/80 border border-slate-800/90 rounded-full px-5 py-1.5 text-xs font-medium text-slate-300 shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-400 font-extrabold'
                      : 'hover:text-white text-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button (Matching ReferRush Right Action Button) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => handleRegister()}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800 text-white px-3.5 sm:px-4.5 py-1.5 rounded-xl font-extrabold text-xs transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Jump Bar */}
        <div className="lg:hidden bg-slate-950/90 border-t border-slate-800/60 overflow-x-auto no-scrollbar py-1.5 px-3 flex items-center gap-2 text-[11px] font-extrabold text-slate-300">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 px-3 py-1 rounded-full border transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-xs font-black'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-x-0 top-0 z-50 bg-[#090d16] border-b border-slate-800 shadow-2xl p-5 flex flex-col gap-4 text-white max-h-[90vh] overflow-y-auto rounded-b-3xl">
            
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 font-black flex items-center justify-center text-[10px]">
                  BM
                </span>
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
                    className={`py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-600 text-white font-black'
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
