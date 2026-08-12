'use client';

import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, Trophy, Sparkles, GraduationCap, Flame, ArrowRight, CheckCircle2, Check, Star, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function HeroSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const handleSeatLock = onOpenSeatLock || modal.openSeatLock;
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
    <section className="relative bg-[#faf8f5] pt-32 xs:pt-36 sm:pt-40 lg:pt-44 xl:pt-48 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Background Soft Glow Radial Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] xs:w-[500px] sm:w-[700px] h-[320px] xs:h-[500px] sm:h-[700px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 pb-4 sm:pb-6 text-center lg:text-left">
          
          <ScrollReveal delay={100} direction="down">
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[10px] xs:text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 shrink-0" />
              <span>BM CLASSES — LEARN TODAY, LEAD TOMORROW</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Small batches.<br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-indigo-600 pr-1">
                Exceptional
              </span>{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                ranks.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={250} direction="up">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 max-w-xl mx-auto lg:mx-0 mb-5 tracking-tight leading-snug">
              Gurgaon’s <span className="font-serif italic font-normal text-indigo-600 text-xl sm:text-2xl lg:text-3xl">Best IIT JEE Coaching & Best NEET Coaching</span> Institute.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="up">
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 font-extrabold text-sm sm:text-base lg:text-lg text-slate-950">
                <Check className="w-5 h-5 text-emerald-500 stroke-[3] shrink-0" />
                <span>20+ Yrs Teaching Faculty</span>
              </div>
              <div className="flex items-center gap-3 font-extrabold text-sm sm:text-base lg:text-lg text-slate-950">
                <Check className="w-5 h-5 text-emerald-500 stroke-[3] shrink-0" />
                <span>Annual IITian Interaction</span>
              </div>
              <div className="flex items-center gap-3 font-extrabold text-sm sm:text-base lg:text-lg text-slate-950">
                <Check className="w-5 h-5 text-emerald-500 stroke-[3] shrink-0" />
                <span>Offline & Online Classes</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <button 
                onClick={handleRegister}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for Admissions</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link 
                href="/programs"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl transition-all border-2 border-slate-200 shadow-xs hover:border-slate-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Social Proof Line */}
          <ScrollReveal delay={500} direction="up">
            <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-600 font-bold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>20+ Yrs Exp Faculty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>Interactive Digital Boards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>4 Gurgaon Centers</span>
              </div>
              <div className="flex items-center gap-1 text-cyan-600">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-cyan-400 text-cyan-400 shrink-0" />
                <span className="text-slate-950 font-black">4.9/5</span> (120+ Parent Reviews)
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Graphic / Student Visual (Clean, Minimal & Ultra-Premium) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-6 lg:mt-0">
          <ScrollReveal delay={300} direction="left" className="w-full relative">
            {/* Subtle Soft Ambient Depth Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-indigo-600/10 rounded-3xl blur-2xl pointer-events-none"></div>

            {/* Clean, Minimalist Frame */}
            <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-950/10 border border-slate-200/90 bg-white p-1.5 sm:p-2 group">
              <img 
                src="/CELEBRATION_PHOTO.jpg" 
                alt="BM CLASSES Celebrating Top Rank Students" 
                loading="eager"
                decoding="async"
                className="w-full h-[320px] xs:h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top sm:object-center rounded-xl sm:rounded-2xl group-hover:scale-[1.015] transition-transform duration-700"
                onError={(e) => {
                  e.target.src = '/hero_students_celebrating.jpg';
                }}
              />
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Marquee Credential Belt (Pitch Dark Black Background & Pure White Bold Text) */}
      <div className="bg-black py-4 sm:py-5 relative z-30 shadow-2xl border-t border-zinc-800 overflow-hidden mt-8 sm:mt-16">
        
        {/* Left & Right Pure Black Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 xs:w-24 sm:w-36 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 xs:w-24 sm:w-36 bg-gradient-to-l from-black to-transparent z-20"></div>

        <div className="animate-marquee flex items-center gap-4 sm:gap-8 px-4">
          {marqueeItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3.5 bg-[#0a0a0a] border border-zinc-800 hover:border-cyan-400/60 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-white shrink-0 hover:bg-zinc-900 transition-all duration-300 group cursor-pointer shadow-md"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md">
                  <IconComp className="w-4 sm:w-5 h-4 sm:h-5 text-slate-950" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] bg-white/15 text-white font-black px-1.5 sm:px-2 py-0.5 rounded border border-white/30 whitespace-nowrap">
                      {item.metric}
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-xs text-white/90 font-bold mt-0.5 whitespace-nowrap">
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
