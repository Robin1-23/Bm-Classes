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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-950 text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl border border-slate-800 shadow-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-xs shadow-cyan-300"></span>
                <span>20+ Yrs Teaching Faculty</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-950/90 text-indigo-200 font-extrabold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl border border-indigo-800/80 shadow-md">
                <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-xs shadow-indigo-300"></span>
                <span>Annual IITian Interaction</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/90 text-emerald-200 font-extrabold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl border border-emerald-800/80 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs shadow-emerald-300"></span>
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

        {/* Right Graphic / Student Visual (Bigger, Filled & Ultra-Premium) */}
        <div className="lg:col-span-5 relative w-full min-h-[340px] xs:min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] flex items-center justify-center mt-6 lg:mt-0">
          
          <ScrollReveal delay={300} direction="left" className="w-full relative flex items-center justify-center">
            {/* Ambient Background Blur Sphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-cyan-400/25 rounded-3xl sm:rounded-[40px] blur-2xl pointer-events-none"></div>

            {/* Glowing Accent Arch Card */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-purple-700 to-[#070a13] rounded-3xl sm:rounded-[36px] p-2 xs:p-3 sm:p-4 shadow-2xl shadow-indigo-950/50 border border-indigo-400/30"></div>

            {/* Main Visual Image (Full-Width, High Resolution) */}
            <div className="relative z-10 w-full p-2 xs:p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] shadow-2xl border-2 border-white/20 group">
                <img 
                  src="/hero_students_celebrating.jpg" 
                  alt="BM CLASSES Celebrating Top Rank Students" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-[320px] xs:h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/hero_student_laptop.jpg';
                  }}
                />

                {/* Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Floating Top-Right Badge: Ex-HOD Mentorship */}
                <div className="absolute top-3 right-3 bg-[#070a13]/90 backdrop-blur-xl border border-cyan-400/50 text-white px-3 sm:px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-300 text-slate-950 font-black flex items-center justify-center text-xs shrink-0 shadow-md">
                    <Award className="w-4 h-4 text-slate-950" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-black text-white leading-tight">100% Ex-HOD Faculty</div>
                    <div className="text-[9px] sm:text-[10px] text-cyan-300 font-extrabold leading-tight">FIITJEE & VMC Masters</div>
                  </div>
                </div>

                {/* Floating Bottom Live Rank Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#060911]/95 backdrop-blur-2xl text-white border border-slate-700/90 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                      <Trophy className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-white leading-tight">
                        Top Ranks Proven
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-cyan-300 font-extrabold leading-tight mt-0.5">
                        AIR 18, AIR 22, AIR 52 & AIR 102 Ranks
                      </div>
                    </div>
                  </div>

                  <div className="hidden xs:flex flex-col items-end shrink-0 border-l border-slate-800 pl-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Student Cap</span>
                    <span className="text-xs font-black text-emerald-400">10-15 Max</span>
                  </div>
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
