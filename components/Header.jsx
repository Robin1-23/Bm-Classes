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
    { label: 'Courses', href: '/programs' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Reviews', href: '/results' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BM%20CLASSES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  return (
    <>
      {/* Fixed Outer Container */}
      <header className="fixed top-0 inset-x-0 z-50 w-full px-3 sm:px-6 py-3 transition-all duration-300 pointer-events-none">
        
        {/* Floating Glassmorphism Navbar Island */}
        <div className={`max-w-7xl mx-auto rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 pointer-events-auto ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-2xl border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.1)]' 
            : 'bg-white/80 backdrop-blur-xl border-slate-200/80 shadow-[0_6px_20px_-5px_rgba(0,0,0,0.05)]'
        }`}>

          {/* Left Side: Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950 p-0.5 overflow-hidden shadow-xs border border-slate-200 group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/logo.jpg" 
                alt="BM Classes Gurgaon" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>

            <span className="text-base sm:text-lg font-heading font-black text-slate-950 tracking-tight uppercase">
              BM CLASSES
            </span>
          </Link>

          {/* Center: Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-3 py-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-black tracking-wide transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Desktop Action Button & Mobile Menu Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => handleRegister()}
              className="hidden lg:flex bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs px-5 py-2.5 rounded-full items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer shadow-2xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-950" /> : <Menu className="w-5 h-5 text-slate-950" />}
            </button>
          </div>

        </div>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-x-3 top-3 z-50 bg-white border border-slate-200/90 shadow-2xl p-6 flex flex-col gap-4 text-slate-950 max-h-[90vh] overflow-y-auto rounded-3xl">
            
            <div className="pb-3.5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-950 text-white font-black flex items-center justify-center text-xs">
                  BM
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-950">
                  Navigation
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-950 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 font-black text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-2xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-950 text-white font-black shadow-xs'
                        : 'hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRegister();
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3.5 rounded-full flex items-center justify-center gap-2 text-xs shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Apply Now for Admission</span>
              </button>

              <a 
                href="tel:+919899818241" 
                className="w-full bg-slate-100 border border-slate-200/90 text-slate-900 text-center font-bold py-3 rounded-full flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-600" /> Call +91 98998 18241
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-emerald-600 text-white text-center font-bold py-3 rounded-full flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" /> WhatsApp Desk
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
