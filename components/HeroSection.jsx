'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, Trophy, Sparkles, GraduationCap, Flame, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

import FoldText from '@/components/ui/FoldText';

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

          {/* Massive Display FoldText Heading from React Bits */}
          <ScrollReveal delay={200} direction="up">
            <div className="mb-6 leading-[1.06] tracking-tight">
              <h1 className="sr-only">Small batches. Exceptional ranks.</h1>
              <FoldText
                text={"Small batches.\nExceptional ranks."}
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.035}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize="clamp(2.4rem, 5.5vw, 4.5rem)"
                fontWeight={900}
                color="#090d16"
              />
            </div>
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

        {/* Right Graphic / Student Visual with Tactile 3D Depth Stack */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-6 lg:mt-0">
          <ScrollReveal delay={300} direction="left" className="w-full relative group">
            
            {/* 3D Layer 1: Ambient Floor Light Reflection */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-cyan-400/30 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-110"></div>

            {/* 3D Layer 2: Deep 3D Shadow Backdrop Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-400/30 rounded-[40px] blur-lg transform -rotate-3 scale-[1.03] pointer-events-none"></div>
            <div className="absolute -inset-2 bg-[#090d16] rounded-[34px] transform -rotate-[2.5deg] shadow-[0_30px_70px_rgba(0,0,0,0.4)] pointer-events-none opacity-95 border border-slate-800/90 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.01]"></div>

            {/* 3D Layer 3: Floating Top-Left Ranker Chip */}
            <div className="absolute -top-5 -left-4 z-30 bg-slate-950/95 backdrop-blur-md text-white text-[11px] sm:text-xs font-black px-4 py-2 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-cyan-400/50 flex items-center gap-2 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 hidden sm:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span>🏆 AIR 18, 22 & 52 PROVEN</span>
            </div>

            {/* 3D Layer 4: Floating Bottom-Right Batch Cap Chip */}
            <div className="absolute -bottom-5 -right-4 z-30 bg-white/95 backdrop-blur-md text-slate-950 text-[11px] sm:text-xs font-black px-4 py-2 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-slate-200/90 flex items-center gap-2 transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 hidden sm:flex">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs"></span>
              <span>⚡ CAPPED 10–15 BATCH</span>
            </div>

            {/* 3D Layer 5: Top Right Live Admissions Badge */}
            <div className="absolute top-4 right-4 z-30 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE BATCH 2026-27</span>
            </div>

            {/* Main 3D Card Frame */}
            <div className="relative z-20 overflow-hidden rounded-[28px] shadow-[0_30px_70px_-15px_rgba(15,23,42,0.35),0_15px_30px_-10px_rgba(99,102,241,0.25)] border-2 border-white bg-white p-2.5 transition-all duration-700 group-hover:shadow-[0_40px_90px_-15px_rgba(99,102,241,0.4)]">
              <img 
                src="/CELEBRATION_PHOTO.jpg" 
                alt="BM CLASSES Top Rank Student Celebration" 
                loading="eager"
                decoding="async"
                className="w-full h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[530px] object-cover object-center rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
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
