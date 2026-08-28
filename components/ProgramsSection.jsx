'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap, Target, Stethoscope, Users, HelpCircle, TrendingUp, Award, Clock, Star, Flame, Check, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PROGRAMS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';
import FoldText from '@/components/ui/FoldText';

export default function ProgramsSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeTab, setActiveTab] = useState('all');

  const isVisible = (categories) => {
    if (activeTab === 'all') return true;
    return categories.includes(activeTab);
  };

  const getColSpan = (cardId) => {
    if (activeTab === 'all') {
      if (cardId === 1) return 'lg:col-span-7';
      if (cardId === 2) return 'lg:col-span-5';
      return 'lg:col-span-4';
    }
    if (activeTab === 'foundation') {
      return 'lg:col-span-8 lg:col-start-3';
    }
    if (activeTab === 'jee' || activeTab === 'oneonone') {
      return 'lg:col-span-6';
    }
    if (activeTab === 'neet') {
      return 'lg:col-span-4';
    }
    return 'lg:col-span-6';
  };

  return (
    <section className="bg-[#faf6f0] text-slate-900 py-20 sm:py-28 relative overflow-hidden border-b border-[#ede6dd]" id="programs">
      
      {/* Background Ambient Warm Cream Glow Blobs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="down" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e8dfd5] text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <FoldText
              text="ACADEMIC PROGRAMS"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.45}
              stagger={0.015}
              fontSize="12px"
              fontWeight={900}
              color="#4338ca"
            />
          </div>
          <h2 className="font-heading leading-tight tracking-tight mt-1 mb-2">
            <span className="sr-only">Courses Built for Top AIR Ranks</span>
            <FoldText
              text="Courses Built for Top AIR Ranks"
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.04}
              fontSize="clamp(1.75rem, 4vw, 3rem)"
              fontWeight={900}
              color="#020617"
            />
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
            100% Ex-HOD taught micro-batches (Capped 10–15 students max) with same-day board doubt resolution.
          </p>
        </ScrollReveal>

        {/* Neumorphic Filter Category Tabs */}
        <ScrollReveal delay={150} direction="up">
          <div className="flex items-center gap-2 mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center px-1">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'jee', label: 'JEE Main & Advanced' },
              { id: 'neet', label: 'NEET UG Medical' },
              { id: 'foundation', label: 'Class 9th & 10th Foundation' },
              { id: 'oneonone', label: '1-on-1 Mentorship' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-lg border border-slate-800 scale-105'
                    : 'bg-white text-slate-700 border border-[#e8dfd5] hover:border-indigo-300 hover:bg-white shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Dashboard Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto transition-all duration-300">
          
          {/* ========================================================= */}
          {/* BENTO CARD 1: LIGHT LUXURY HERO CARD */}
          {/* ========================================================= */}
          {isVisible(['jee', 'neet']) && (
            <ScrollReveal delay={200} direction="up" className={`${getColSpan(1)} flex transition-all duration-300`}>
              <div className="bg-white text-slate-900 border border-slate-200/80 rounded-[32px] p-6 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_45px_-10px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_65px_-12px_rgba(99,102,241,0.22),0_12px_24px_rgba(0,0,0,0.04)] hover:border-indigo-400/80 hover:-translate-y-2 transition-all duration-300 w-full group">
              
              {/* Top Soft Ambient Glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                {/* Top Row: Circular Icon (Left) & Saved/Badge Tag (Right) */}
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/80 text-indigo-700 flex items-center justify-center font-black shadow-2xs group-hover:scale-105 transition-transform">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-indigo-700 uppercase block">
                        FLAGSHIP BATCH
                      </span>
                      <span className="text-xs font-extrabold text-slate-500">
                        Starts 6th April · Classes 11th, 12th & Droppers
                      </span>
                    </div>
                  </div>

                  <span className="bg-slate-100 text-slate-800 border border-slate-200/80 text-[10px] font-black px-3.5 py-1.5 rounded-xl uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                    <Flame className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                    <span>Capped 10–15 Batch</span>
                  </span>
                </div>

                {/* Subtitle & Main Title */}
                <div className="text-xs font-bold text-slate-500 mb-1 relative z-10">
                  JEE Main, Advanced & NEET UG
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mb-3 group-hover:text-indigo-600 transition-colors relative z-10 leading-tight tracking-tight">
                  Class 11th & 12th Integrated Master Program
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-semibold relative z-10 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
                  🎯 Target Top 500 AIR Ranks with 100% Ex-HOD direct teaching, 15 daily PYQ drills & zero-queue doubt solving.
                </p>

                {/* Pill Badges Row */}
                <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200/60">
                    Max 10–15 Students
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200/60">
                    100% Ex-HOD Taught
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-indigo-100">
                    AIR 18 & 22 Proven
                  </span>
                </div>

                {/* Faculty Portrait Avatars */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 relative z-10 shadow-2xs">
                  <div className="flex -space-x-3 overflow-hidden">
                    <img src="/bm_sir.jpg" alt="BM Sir" className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-500 object-cover" />
                    <img src="/konika_mam.jpg" alt="Konika Ma'am" className="inline-block h-10 w-10 rounded-full ring-2 ring-emerald-500 object-cover" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-700">
                    Direct Mentorship by <span className="text-indigo-700 font-black">BM Sir (Chemistry HOD)</span> & <span className="text-emerald-700 font-black">Konika Ma'am (Biology Head)</span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA Row matching uploaded image */}
              <div className="pt-4 border-t border-slate-100 relative z-10 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-heading font-black text-slate-950 text-lg">Limited Seats</div>
                  <div className="text-xs text-slate-500 font-bold">Only 3 Seats Remaining for 2024–25</div>
                </div>

                <button
                  onClick={() => handleRegister('Class 11th & 12th Integrated JEE & NEET')}
                  className="bg-slate-950 hover:bg-indigo-600 text-white font-black text-xs px-6 py-3 rounded-2xl transition-all shadow-sm flex items-center gap-2 cursor-pointer ml-auto"
                >
                  <span>Apply now</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>

            </div>
          </ScrollReveal>
          )}

          {/* ========================================================= */}
          {/* BENTO CARD 2: BIOLOGY EXCELLENCE CARD */}
          {/* ========================================================= */}
          {isVisible(['neet']) && (
            <ScrollReveal delay={250} direction="up" className={`${getColSpan(2)} flex transition-all duration-300`}>
              <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 text-slate-900 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_65px_-12px_rgba(16,185,129,0.22),0_12px_24px_rgba(0,0,0,0.04)] hover:border-emerald-400/80 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200/80 text-emerald-600 flex items-center justify-center font-black shadow-2xs group-hover:scale-105 transition-transform">
                        <Stethoscope className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase block">
                          KONIKA MA'AM · 20 YRS EXP
                        </span>
                        <span className="text-xs font-bold text-slate-500">NEET Botany & Boards</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-black bg-slate-100 text-slate-800 border border-slate-200/80 px-3 py-1 rounded-xl uppercase tracking-wider shadow-2xs">
                      360/360 BIO
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-500 mb-1">
                    Class 9th–12th & NEET UG
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 mb-2 group-hover:text-emerald-600 transition-colors leading-snug tracking-tight">
                    Biology Excellence Master Batch
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-semibold bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                    🧬 Score 360/360 in NEET Bio with Konika Ma'am's NCERT line-by-line digital board classes.
                  </p>

                  {/* Pill Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-xl border border-slate-200/60">
                      NCERT Line-by-Line
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-xl border border-slate-200/60">
                      Botany & Zoology
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-xl border border-emerald-100">
                      Zero-Error Drills
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5">
                    <img src="/konika_mam.jpg" alt="Konika Ma'am" className="h-9 w-9 rounded-full ring-2 ring-emerald-500 object-cover shrink-0" />
                    <div className="text-[11px] font-bold text-slate-700">
                      Guided by <strong className="text-slate-950 font-black">Konika Ma'am</strong> (Ex-FIITJEE KVPY Batch)
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Row matching uploaded image */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-heading font-black text-slate-950 text-lg">NEET Medical</div>
                    <div className="text-xs text-slate-500 font-bold">100% NCERT Mastery</div>
                  </div>

                  <button
                    onClick={() => handleRegister('Biology Excellence Program')}
                    className="bg-slate-950 hover:bg-emerald-600 text-white font-black text-xs px-5 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Apply now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ========================================================= */}
          {/* BENTO CARD 3: 1-ON-1 ONLINE SCIENCE TEACHER */}
          {/* ========================================================= */}
          {isVisible(['oneonone']) && (
            <ScrollReveal delay={300} direction="up" className={`${getColSpan(3)} flex transition-all duration-300`}>
              <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 text-slate-900 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_65px_-12px_rgba(236,72,153,0.22),0_12px_24px_rgba(0,0,0,0.04)] hover:border-pink-400/80 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200/80 text-pink-600 flex items-center justify-center font-black shadow-2xs group-hover:scale-105 transition-transform">
                      <UserCheck className="w-5 h-5 text-pink-600" />
                    </div>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-800 border border-slate-200/80 px-3 py-1 rounded-xl uppercase tracking-wider shadow-2xs">
                      22 YRS EXP
                    </span>
                  </div>

                  <div className="text-[10px] font-black tracking-widest text-pink-600 uppercase block mb-1">
                    CHUMKI MA'AM · EX-FIITJEE
                  </div>

                  <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-pink-600 transition-colors leading-snug tracking-tight">
                    Science Teacher | Online (9th–12th) + 1-on-1
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-semibold bg-slate-50 p-2.5 rounded-2xl border border-slate-200/60">
                    💻 Dedicated 1-on-1 online mentoring & small-batch Science drills by Chumki Ma'am.
                  </p>

                  {/* Pill Badges Row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      1-on-1 Mentoring
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      Class 9th–12th
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4">
                    <img src="/chumki_mam.jpeg" alt="Chumki Ma'am" className="h-8 w-8 rounded-full ring-2 ring-pink-400 object-cover shrink-0" />
                    <div className="text-[10.5px] font-bold text-slate-700">
                      Taught by <strong className="text-slate-950 font-black">Chumki Ma'am</strong> (18 Yrs FIITJEE)
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Row matching uploaded image */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-heading font-black text-slate-950 text-base">1-on-1 Online</div>
                    <div className="text-[11px] text-slate-500 font-bold">Personalized Pace</div>
                  </div>

                  <button
                    onClick={() => handleRegister('Science Teacher Online (9th-12th) + 1-on-1')}
                    className="bg-slate-950 hover:bg-pink-600 text-white font-black text-xs px-4 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Apply now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ========================================================= */}
          {/* BENTO CARD 4: CLASS 9TH & 10TH FOUNDATION */}
          {/* ========================================================= */}
          {isVisible(['foundation']) && (
            <ScrollReveal delay={350} direction="up" className={`${getColSpan(4)} flex transition-all duration-300`}>
              <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 text-slate-900 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_65px_-12px_rgba(99,102,241,0.22),0_12px_24px_rgba(0,0,0,0.04)] hover:border-indigo-400/80 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200/80 text-indigo-600 flex items-center justify-center font-black shadow-2xs group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-800 border border-slate-200/80 px-3 py-1 rounded-xl uppercase tracking-wider shadow-2xs">
                      STARTS 12TH MARCH
                    </span>
                  </div>

                  <div className="text-[10px] font-black tracking-widest text-indigo-600 uppercase block mb-1">
                    CLASSES 9TH & 10TH · CBSE & OLYMPIAD
                  </div>

                  <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-indigo-600 transition-colors leading-snug tracking-tight">
                    Class 9th & 10th Maths & Science Foundation
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-semibold bg-slate-50 p-2.5 rounded-2xl border border-slate-200/60">
                    🚀 Build early JEE & NEET analytical thinking + 100% CBSE Board competency mastery.
                  </p>

                  {/* Pill Badges Row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      CBSE Competency
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      Olympiad Drills
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Board competency paper mastery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Early IIT JEE & NEET analytical mindset</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Row matching uploaded image */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-heading font-black text-slate-950 text-base">Class 9th / 10th</div>
                    <div className="text-[11px] text-slate-500 font-bold">Foundation Batch</div>
                  </div>

                  <button
                    onClick={() => handleRegister('Class 9th & 10th Foundation')}
                    className="bg-slate-950 hover:bg-indigo-600 text-white font-black text-xs px-4 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Apply now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* ========================================================= */}
          {/* BENTO CARD 5: 1-ON-1 DOUBT & PYQ DRILLS */}
          {/* ========================================================= */}
          {isVisible(['oneonone', 'jee', 'neet']) && (
            <ScrollReveal delay={400} direction="up" className={`${getColSpan(5)} flex transition-all duration-300`}>
              <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 text-slate-900 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_65px_-12px_rgba(245,158,11,0.22),0_12px_24px_rgba(0,0,0,0.04)] hover:border-amber-400/80 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200/80 text-amber-600 flex items-center justify-center font-black shadow-2xs group-hover:scale-105 transition-transform">
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-800 border border-slate-200/80 px-3 py-1 rounded-xl uppercase tracking-wider shadow-2xs">
                      SAME-DAY DOUBTS
                    </span>
                  </div>

                  <div className="text-[10px] font-black tracking-widest text-amber-600 uppercase block mb-1">
                    1-ON-1 DOUBTS & BOARD PYQS
                  </div>

                  <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-amber-600 transition-colors leading-snug tracking-tight">
                    1-on-1 Board Doubt Clearing & PYQ Shortcut Drills
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 font-semibold bg-slate-50 p-2.5 rounded-2xl border border-slate-200/60">
                    ⚡ Zero-queue daily 1-on-1 doubt solving directly with BM Sir & Senior Ex-HODs.
                  </p>

                  {/* Pill Badges Row */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      Zero Queue
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-xl border border-slate-200/60">
                      Ex-HOD Mentors
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Same-day board doubt resolution</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Direct Ex-HOD 1-on-1 interaction</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Row matching uploaded image */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-heading font-black text-slate-950 text-base">Doubt Session</div>
                    <div className="text-[11px] text-slate-500 font-bold">1-on-1 Slot</div>
                  </div>

                  <button
                    onClick={() => handleRegister('1-on-1 Doubt & PYQ Drills')}
                    className="bg-slate-950 hover:bg-amber-500 text-white font-black text-xs px-4 py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Apply now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

        </div>

      </div>
    </section>
  );
}
