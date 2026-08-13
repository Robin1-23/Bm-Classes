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
    { label: 'Reviews', href: '/results' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BM%20CLASSES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.";

  return (
    <>
      {/* Fixed Sticky Outer Container */}
      <header className="fixed top-0 inset-x-0 z-50 w-full px-2 sm:px-4 py-2 sm:py-3 transition-all duration-300 pointer-events-none">
        
        {/* Pitch Dark Black Floating Glassmorphism Island Container */}
        <div className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl border transition-all duration-300 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3 relative pointer-events-auto ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-2xl border-cyan-500/40 shadow-2xl shadow-cyan-950/80' 
            : 'bg-black/90 backdrop-blur-xl border-zinc-800 shadow-2xl'
        }`}>

          {/* Left Side: Official BM Classes Logo Image */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-0.5 overflow-hidden shadow-xl border border-cyan-400/40 group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/logo.jpg" 
                alt="BM Classes Gurgaon" 
                className="w-full h-full object-contain" 
              />
            </div>

            <span 
              className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors drop-shadow-md tracking-tight uppercase"
              style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
            >
              BM CLASSES
            </span>
          </Link>

          {/* Center: Desktop Nav Capsule with Pure White Text (Increased Font Size) */}
          <nav className="hidden xl:flex items-center gap-6 bg-[#0a0a0a] border border-zinc-800 rounded-full px-6 py-2 text-sm font-extrabold text-white shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-black bg-white/15 border border-white/30 px-3.5 py-1 rounded-full shadow-xs'
                      : 'text-white hover:text-cyan-300 hover:scale-105'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Desktop Action Buttons & Mobile/Tablet Hamburger Icon */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Apply Now Button */}
            <button 
              onClick={() => handleRegister()}
              className="hidden xl:flex bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs px-3.5 sm:px-4.5 py-2.5 rounded-2xl items-center gap-1.5 shadow-md shadow-cyan-950/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            {/* Mobile & Tablet Hamburger Toggle Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-black border border-zinc-800 text-white hover:text-cyan-300 transition-colors cursor-pointer shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>

      </header>

      {/* Mobile & Tablet Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed inset-x-2 top-2 z-50 bg-black border border-zinc-800 shadow-2xl p-5 flex flex-col gap-4 text-white max-h-[90vh] overflow-y-auto rounded-3xl">
            
            <div className="pb-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 font-black flex items-center justify-center text-xs">
                  BM
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  BM CLASSES Navigation
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-800"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 font-black text-base">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-white/20 text-white font-black border border-white/30 shadow-md'
                        : 'hover:bg-zinc-900 hover:text-cyan-300 text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded font-black">
                        Active Page
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <a 
                href="tel:+919899818241" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white text-center font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
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
