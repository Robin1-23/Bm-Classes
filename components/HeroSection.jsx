'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, Trophy, Sparkles, GraduationCap, Flame, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function HeroSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [mobileNum, setMobileNum] = useState('');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (handleRegister) {
      handleRegister('Hero Quick Application', mobileNum);
    }
  };

  const badges = [
    {
      metric: '15+ Yrs Exp',
      title: 'EX-FIITJEE HOD',
      sub: 'Math & Physics Lead',
      icon: Award,
    },
    {
      metric: '20+ Yrs Exp',
      title: 'EX-VMC HOD',
      sub: 'Chemistry HOD',
      icon: Flame,
    },
    {
      metric: 'AIR 18, 22, 52',
      title: 'TOP JEE ADVANCED',
      sub: 'AIR 18, 22, 52, 102 Ranks',
      icon: Trophy,
    },
    {
      metric: 'Max 10-15',
      title: 'MICRO BATCHES',
      sub: 'Strict Student Cap',
      icon: ShieldCheck,
    },
    {
      metric: 'IIT / NIT',
      title: 'ALUMNI FACULTY',
      sub: 'Direct Pedagogy',
      icon: GraduationCap,
    },
  ];

  const marqueeItems = [...badges, ...badges];

  return (
    <section className="relative bg-white pt-28 xs:pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Column Text & CTAs (Amplemarket Clean Minimal Style) */}
        <div className="lg:col-span-7 pb-4 text-center lg:text-left">
          
          {/* Top Eyebrow Tag with Geometric Accent */}
          <ScrollReveal delay={100} direction="down">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm inline-block"></span>
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest">
                EX-HOD FACULTY · CAPPED MICRO-BATCHES
              </span>
            </div>
          </ScrollReveal>

          {/* Massive Display Heading */}
          <ScrollReveal delay={200} direction="up">
            <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.06] tracking-tight mb-6">
              Small batches.<br />
              <span className="text-slate-950">Exceptional ranks.</span>
            </h1>
          </ScrollReveal>

          {/* Subheading Copy */}
          <ScrollReveal delay={250} direction="up">
            <p className="text-slate-600 font-medium text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Gurgaon’s Premier IIT JEE Coaching & NEET Coaching Institute. Taught 100% directly by Senior Ex-HODs (BM Sir & Konika Ma'am).
            </p>
          </ScrollReveal>

          {/* Amplemarket Style Quick Application Form Capsule */}
          <ScrollReveal delay={300} direction="up">
            <form onSubmit={handleQuickSubmit} className="max-w-md mx-auto lg:mx-0 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-full shadow-xs hover:border-slate-300 transition-colors">
                <input
                  type="tel"
                  placeholder="Enter Student Mobile Number"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                  className="w-full bg-transparent px-5 py-3 text-sm font-extrabold text-slate-950 placeholder-slate-400 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* Alternative Secondary Action Button */}
          <ScrollReveal delay={350} direction="up">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Link 
                href="/programs" 
                className="text-xs font-black text-slate-800 hover:text-indigo-600 flex items-center gap-1.5 transition-colors underline underline-offset-4"
              >
                <span>View All Academic Batches ➔</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Amplemarket Gartner-Style Trust Rating Line */}
          <ScrollReveal delay={400} direction="up">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-extrabold text-slate-600 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-slate-950 font-black ml-1">4.9/5 Rating</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>120+ Verified Parent Reviews</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-black">Gurgaon Sec-45</span>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Graphic / Student Visual with Tactile 3D Backing */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-6 lg:mt-0">
          <ScrollReveal delay={300} direction="left" className="w-full relative">
            
            {/* 3D Layer 1: Ambient Floor Reflection Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-gradient-to-tr from-indigo-500/25 via-purple-500/25 to-cyan-400/25 rounded-full blur-3xl pointer-events-none"></div>

            {/* 3D Layer 2: Tilted Backing Card Plate */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600/20 via-purple-500/15 to-cyan-400/20 rounded-[36px] blur-md transform rotate-[-3deg] pointer-events-none"></div>
            <div className="absolute -inset-1 bg-slate-900 rounded-[32px] transform rotate-[-2.5deg] shadow-2xl pointer-events-none opacity-95 border border-slate-800"></div>

            {/* 3D Layer 3: Floating Badge Chip 1 (Top Left) */}
            <div className="absolute -top-4 -left-4 z-20 bg-slate-950 text-white text-[11px] font-black px-4 py-2 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-cyan-400/40 flex items-center gap-2 transform -rotate-3 hover:scale-105 transition-transform hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>🏆 AIR 18 & 22 Proven</span>
            </div>

            {/* 3D Layer 4: Floating Badge Chip 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-white text-slate-950 text-[11px] font-black px-4 py-2 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-slate-200 flex items-center gap-2 transform rotate-2 hover:scale-105 transition-transform hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>⚡ 10-15 Student Cap</span>
            </div>

            {/* Main 3D Card Frame */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] border-2 border-white bg-white p-2 group transform hover:scale-[1.01] transition-all duration-500">
              <img 
                src="/CELEBRATION_PHOTO.jpg" 
                alt="BM CLASSES Top Rank Student Celebration" 
                loading="eager"
                decoding="async"
                className="w-full h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center rounded-2xl group-hover:scale-[1.015] transition-transform duration-700"
                onError={(e) => {
                  e.target.src = '/hero_students_celebrating.jpg';
                }}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Marquee Credential Belt */}
      <div className="bg-slate-950 py-4 sm:py-5 relative z-30 shadow-xl border-t border-slate-900 overflow-hidden mt-12 sm:mt-16">
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20"></div>

        <div className="animate-marquee flex items-center gap-4 sm:gap-8 px-4">
          {marqueeItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-xl text-white shrink-0 hover:bg-slate-850 transition-all cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <IconComp className="w-4 h-4 text-white" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-white">
                      {item.title}
                    </span>
                    <span className="text-[9px] bg-slate-800 text-slate-300 font-bold px-1.5 py-0.5 rounded border border-slate-700">
                      {item.metric}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold mt-0.5">
                    {item.sub}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
