'use client';

import React from 'react';
import { Award, ShieldCheck, Trophy, Sparkles, GraduationCap, Flame, ArrowRight, CheckCircle2, Star, Lock } from 'lucide-react';
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

          <ScrollReveal delay={300} direction="up">
            <p className="text-base sm:text-lg lg:text-xl font-extrabold max-w-xl leading-snug mx-auto lg:mx-0 mb-6 sm:mb-8 tracking-tight">
              <span className="text-slate-950 font-black">20+ Yrs Teaching Faculty.</span>{' '}
              <span className="text-indigo-600 font-black">Annual IITian Interaction.</span>{' '}
              <span className="text-cyan-600 font-black">Offline & Online Classes.</span>
            </p>
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

              <button 
                onClick={() => handleRegister('Free Academic Counseling')}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl transition-all border-2 border-slate-200 shadow-xs hover:border-slate-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Free Counseling</span>
              </button>
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

        {/* Right Graphic / Student Visual */}
        <div className="lg:col-span-5 relative w-full h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[480px] flex items-end justify-center mt-2 lg:mt-0 overflow-hidden max-w-full">
          
          <ScrollReveal delay={300} direction="left" className="w-full flex items-end justify-center">
            {/* Vertical Purple Accent Card */}
            <div className="absolute top-0 right-2 xs:right-4 sm:right-8 w-[180px] xs:w-[240px] sm:w-[300px] lg:w-[330px] h-[105%] bg-gradient-to-b from-indigo-600 via-purple-600 to-slate-900 rounded-t-[100px] xs:rounded-t-[140px] z-0 shadow-2xl"></div>

            {/* Glowing Cyan Circle */}
            <div className="absolute top-6 xs:top-10 sm:top-14 right-0 sm:right-4 w-[160px] xs:w-[210px] sm:w-[270px] lg:w-[300px] h-[160px] xs:h-[210px] sm:h-[270px] lg:h-[300px] bg-cyan-400 rounded-full z-10 shadow-[0_0_80px_rgba(34,211,238,0.4)] border-4 border-cyan-300/40"></div>

            {/* Main Visual Image Cutout */}
            <div className="relative z-20 w-full max-w-[270px] xs:max-w-[340px] sm:max-w-[420px] filter drop-shadow-[0_25px_35px_rgba(15,23,42,0.25)] hover:scale-[1.02] transition-transform duration-500 animate-float-slow">
              <img 
                src="/hero_student_laptop.jpg" 
                alt="BmClasses Student Learning Visual" 
                loading="eager"
                decoding="async"
                className="w-full h-auto rounded-2xl xs:rounded-3xl block border-2 xs:border-4 border-white shadow-2xl gpu-accelerate"
              />
              
              {/* Floating Glassmorphism Live Badge */}
              <div className="absolute bottom-2 xs:bottom-4 left-2 xs:left-4 bg-slate-950/80 backdrop-blur-xl text-white border border-slate-700/80 px-3 xs:px-4 py-2 xs:py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 xs:gap-3">
                <div className="w-8 xs:w-10 h-8 xs:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-300 text-slate-950 font-black flex items-center justify-center text-xs xs:text-sm shrink-0 shadow-md">
                  AIR 18
                </div>
                <div>
                  <div className="text-xs xs:text-sm font-black text-white leading-tight">Top Rank Proven</div>
                  <div className="text-[9px] xs:text-[11px] text-cyan-300 font-extrabold leading-tight">100% Ex-FIITJEE HOD Direct Mentorship</div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* Marquee Credential Belt */}
      <div className="bg-slate-950 py-4 sm:py-5 relative z-30 shadow-2xl border-t border-indigo-500/20 overflow-hidden mt-8 sm:mt-16">
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 xs:w-24 sm:w-36 bg-gradient-to-r from-slate-950 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 xs:w-24 sm:w-36 bg-gradient-to-l from-slate-950 to-transparent z-20"></div>

        <div className="animate-marquee flex items-center gap-4 sm:gap-8 px-4">
          {marqueeItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3.5 bg-white/5 border border-white/10 hover:border-cyan-400/50 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-white shrink-0 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md">
                  <IconComp className="w-4 sm:w-5 h-4 sm:h-5 text-slate-950" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] bg-cyan-400/20 text-cyan-300 font-extrabold px-1.5 sm:px-2 py-0.5 rounded border border-cyan-400/30 whitespace-nowrap">
                      {item.metric}
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-xs text-indigo-200/70 font-medium mt-0.5 whitespace-nowrap">
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
