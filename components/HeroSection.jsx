'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';
import { CENTER_INFO } from '@/data/contentData';
import FoldText from '@/components/ui/FoldText';
export default function HeroSection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [mobileNum, setMobileNum] = useState('');
  const [heroError, setHeroError] = useState('');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    const val = mobileNum.trim();
    if (!val) {
      setHeroError('Please enter your 10-digit mobile number or email address.');
      return;
    }

    if (val.includes('@')) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(val)) {
        setHeroError('Please enter a valid email address (e.g. name@domain.com).');
        return;
      }
      setHeroError('');
      if (handleRegister) handleRegister('Hero Quick Application', val);
    } else {
      const digits = val.replace(/\D/g, '');
      if (digits.length !== 10 || !/^[6-9]\d{9}$/.test(digits)) {
        setHeroError('Please enter a valid 10-digit mobile number starting with 6-9.');
        return;
      }
      setHeroError('');
      if (handleRegister) handleRegister('Hero Quick Application', digits);
    }
  };

  // True, checkable facts only. Rating and review count follow CENTER_INFO.
  const credentials = [
    { value: 'AIR 18 · 22 · 52', label: 'JEE Advanced ranks', tint: 'bg-[#f3f1ff]' },
    { value: '20+ yrs', label: 'former VMC Academic Head', tint: 'bg-[#eef7ea]' },
    { value: '18 yrs', label: 'at FIITJEE', tint: 'bg-[#fdf4e6]' },
    { value: '10–15', label: 'students per batch', tint: 'bg-[#fbf0ee]' },
    { value: `${CENTER_INFO.googleRating} ★`, label: `${CENTER_INFO.googleReviewCount} Google reviews`, tint: 'bg-[#eef4ff]' },
    { value: '3 centres', label: 'in Gurugram', tint: 'bg-[#fefbe8]' },
    { value: 'Hybrid', label: 'online + offline', tint: 'bg-[#eef7ea]' },
  ];
  const marqueeItems = [...credentials, ...credentials];

  return (
    <section className="relative bg-white pt-28 xs:pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Column Text & CTAs (Amplemarket Clean Minimal Style) */}
        <div className="lg:col-span-7 pb-4 text-center lg:text-left">
          
          {/* Top Eyebrow Tag with Geometric Accent */}
          <ScrollReveal delay={100} direction="down">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm inline-block"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                IIT JEE & NEET COACHING · SECTOR 45, GURUGRAM
              </span>
            </div>
          </ScrollReveal>

          {/* Massive Display FoldText Heading from React Bits */}
          <ScrollReveal delay={200} direction="up">
            <div className="mb-6 font-heading leading-[1.02] tracking-[-0.035em]">
              <h1 className="sr-only">IIT JEE &amp; NEET coaching in Gurugram: small batches, exceptional ranks.</h1>
              <FoldText
                text={"Small batches.\nExceptional ranks."}
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.035}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize="clamp(2.5rem, 6.4vw, 5.4rem)"
                fontWeight={800}
                color="#0b1020"
              />
            </div>
          </ScrollReveal>

          {/* Subheading Copy (Short & Punchy) */}
          <ScrollReveal delay={250} direction="up">
            <p className="text-slate-700 font-semibold text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              No crowds. No junior tutors. Just the Ex-HODs of FIITJEE & VMC teaching you by name.
            </p>
          </ScrollReveal>

          {/* Amplemarket Style Quick Application Form Capsule */}
          <ScrollReveal delay={300} direction="up">
            <form onSubmit={handleQuickSubmit} className="max-w-md mx-auto lg:mx-0 mb-6">
              <div className={`flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white border ${
                heroError ? 'border-red-400 ring-2 ring-red-200' : 'border-slate-200'
              } rounded-full shadow-xs hover:border-slate-300 transition-colors`}>
                <input
                  type="text"
                  placeholder="Enter 10-digit phone or email"
                  value={mobileNum}
                  onChange={(e) => {
                    setMobileNum(e.target.value);
                    if (heroError) setHeroError('');
                  }}
                  className="w-full bg-transparent px-5 py-3 text-sm font-semibold text-slate-950 placeholder-slate-400 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {heroError && (
                <p className="text-red-600 text-xs font-semibold mt-2 ml-4" role="alert">
                  {heroError}
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Alternative Secondary Action Button */}
          <ScrollReveal delay={350} direction="up">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Link 
                href="/#book-demo"
                className="text-sm font-semibold text-slate-800 hover:text-indigo-600 flex items-center gap-1.5 transition-colors underline underline-offset-4"
              >
                <span>Or book a free demo class →</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Amplemarket Gartner-Style Trust Rating Line */}
          <ScrollReveal delay={400} direction="up">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-slate-950 font-bold ml-1">4.9/5 Rating</span>
              </div>
              <span className="text-slate-300">•</span>
              <a href={CENTER_INFO.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline-offset-4 hover:underline">{CENTER_INFO.googleReviewCount} Google reviews</a>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-bold">Sector 45, Gurugram</span>
            </div>
          </ScrollReveal>

        </div>

        {/* Right: real celebration photo */}
        <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
          <ScrollReveal delay={300} direction="left" className="w-full relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#e3e8f5] shadow-premium bg-white">
                <Image
                  src="/CELEBRATION_PHOTO.jpg"
                  alt="BM Classes students celebrating their IIT JEE results with faculty"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Credentials strip: pastel pills, gently scrolling (pauses on hover) */}
      <div className="relative mt-12 sm:mt-16 overflow-hidden py-2" aria-label="Highlights">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <ul className="animate-marquee flex items-center gap-3 px-3">
          {marqueeItems.map((item, idx) => (
            <li
              key={idx}
              aria-hidden={idx >= credentials.length}
              className={`shrink-0 inline-flex items-baseline gap-2.5 rounded-full ${item.tint} px-5 py-3 border border-white`}
            >
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-[-0.02em] text-slate-950">{item.value}</span>
              <span className="text-sm text-slate-600 whitespace-nowrap">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
