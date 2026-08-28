'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap, Target, Stethoscope, Users, HelpCircle, TrendingUp, Award, Clock, Star, Flame, Check, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PROGRAMS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function ProgramsSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all' 
    ? PROGRAMS_DATA 
    : PROGRAMS_DATA.filter(p => p.categoryTypes && p.categoryTypes.includes(activeTab));

  return (
    <section className="bg-[#f2f4f7] text-slate-900 py-20 sm:py-28 relative overflow-hidden border-b border-slate-200/80" id="programs">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="down" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>ACADEMIC PROGRAMS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Courses Built for <span className="font-black text-slate-950">Top AIR Ranks</span>
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
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-400 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Dashboard Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* ========================================================= */}
          {/* BENTO CARD 1: LIGHT LUXURY HERO CARD (Spans 7 cols on lg) */}
          {/* ========================================================= */}
          <ScrollReveal delay={200} direction="up" className="lg:col-span-7 flex">
            <div className="bg-white text-slate-900 border-2 border-indigo-200/90 border-b-4 border-b-indigo-500/80 rounded-[28px] p-6 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-[0_15px_35px_-5px_rgba(99,102,241,0.1),0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_55px_-10px_rgba(99,102,241,0.25),0_12px_24px_rgba(0,0,0,0.06)] hover:border-b-indigo-600 hover:-translate-y-2 transition-all duration-300 w-full group">
              
              {/* Top Soft Ambient Glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                {/* Header Pills Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center font-black shadow-xs">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-indigo-700 uppercase block">
                        STARTS 6TH APRIL · FLAGSHIP
                      </span>
                      <span className="text-xs font-extrabold text-slate-600">
                        Classes 11th, 12th & XI Pass Droppers
                      </span>
                    </div>
                  </div>

                  <span className="bg-indigo-600 text-white text-[10px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Flame className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Capped 10–15 Batch</span>
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mb-3 group-hover:text-indigo-600 transition-colors relative z-10 leading-tight">
                  Class 11th & 12th Integrated JEE Main, Advanced & NEET Master Program
                </h3>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-bold max-w-xl relative z-10 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/70">
                  🎯 Target Top 500 AIR Ranks with 100% Ex-HOD direct teaching, 15 daily PYQ drills & zero-queue doubt solving.
                </p>

                {/* Neumorphic Mini-Stat Widgets Inside Hero Card */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-7 relative z-10">
                  <div className="bg-indigo-50/80 border border-indigo-100/90 rounded-2xl p-3.5 text-left shadow-xs">
                    <div className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider">Batch Cap</div>
                    <div className="text-base sm:text-lg font-black text-slate-950 mt-0.5">10–15 Max</div>
                    <div className="text-[9.5px] font-semibold text-slate-600 mt-0.5">Zero Crowd Halls</div>
                  </div>

                  <div className="bg-emerald-50/80 border border-emerald-100/90 rounded-2xl p-3.5 text-left shadow-xs">
                    <div className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">Faculty Guarantee</div>
                    <div className="text-base sm:text-lg font-black text-slate-950 mt-0.5">100% Ex-HODs</div>
                    <div className="text-[9.5px] font-semibold text-slate-600 mt-0.5">Zero Junior TAs</div>
                  </div>

                  <div className="bg-amber-50/80 border border-amber-100/90 rounded-2xl p-3.5 text-left col-span-2 sm:col-span-1 shadow-xs">
                    <div className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider">Proven Ranks</div>
                    <div className="text-base sm:text-lg font-black text-slate-950 mt-0.5">AIR 18 & 22</div>
                    <div className="text-[9.5px] font-semibold text-slate-600 mt-0.5">JEE & NEET Top 500</div>
                  </div>
                </div>

                {/* Faculty Portrait Avatars */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 relative z-10 shadow-xs">
                  <div className="flex -space-x-3 overflow-hidden">
                    <img src="/bm_sir.jpg" alt="BM Sir" className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-500 object-cover" />
                    <img src="/konika_mam.jpg" alt="Konika Ma'am" className="inline-block h-10 w-10 rounded-full ring-2 ring-emerald-500 object-cover" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-700">
                    Direct Mentorship by <span className="text-indigo-700 font-black">BM Sir (Chemistry HOD)</span> & <span className="text-emerald-700 font-black">Konika Ma'am (Biology Head)</span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-100 relative z-10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-700">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>Only 3 Seats Remaining for 2024–25 Session</span>
                </div>

                <button
                  onClick={() => handleRegister('Class 11th & 12th Integrated JEE & NEET')}
                  className="bg-slate-950 hover:bg-indigo-600 text-white font-black text-xs px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-xl flex items-center gap-2 cursor-pointer ml-auto"
                >
                  <span>Apply Class 11th & 12th Batch</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* ========================================================= */}
          {/* BENTO CARD 2: BIOLOGY EXCELLENCE CARD (Spans 5 cols on lg) */}
          {/* ========================================================= */}
          <ScrollReveal delay={250} direction="up" className="lg:col-span-5 flex">
            <div className="bg-white border-2 border-slate-200/90 border-b-4 border-b-emerald-500/80 rounded-[28px] p-6 sm:p-8 text-slate-900 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-10px_rgba(16,185,129,0.22),0_12px_24px_rgba(0,0,0,0.06)] hover:border-b-emerald-600 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center font-black shadow-xs">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase block">
                        KONIKA MA'AM · 20 YRS EXP
                      </span>
                      <span className="text-xs font-bold text-slate-500">NEET Botany & Boards</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-black bg-emerald-100/80 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    360/360 NEET BIO
                  </span>
                </div>

                <h3 className="font-heading text-xl font-black text-slate-950 mb-2 group-hover:text-emerald-600 transition-colors leading-snug">
                  Biology Excellence (Class 9th–12th & NEET UG)
                </h3>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-bold bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                  🧬 Score 360/360 in NEET Bio with Konika Ma'am's NCERT line-by-line digital board classes.
                </p>

                {/* Micro Dashboard Tint Box */}
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 mb-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NCERT line-by-line diagram mastery</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High-speed NEET Botany & Zoology drills</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero-error assertion & reasoning training</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                  <img src="/konika_mam.jpg" alt="Konika Ma'am" className="h-9 w-9 rounded-full ring-2 ring-emerald-500 object-cover shrink-0" />
                  <div className="text-[11px] font-bold text-slate-700">
                    Guided by <strong className="text-slate-950 font-black">Konika Ma'am</strong> (Ex-FIITJEE KVPY Batch)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleRegister('Biology Excellence Program')}
                  className="w-full bg-slate-950 hover:bg-emerald-600 text-white font-black text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Apply Biology Program</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================= */}
          {/* BENTO CARD 3: 1-ON-1 ONLINE SCIENCE TEACHER (Spans 4 cols) */}
          {/* ========================================================= */}
          <ScrollReveal delay={300} direction="up" className="lg:col-span-4 flex">
            <div className="bg-white border-2 border-slate-200/90 border-b-4 border-b-pink-500/80 rounded-[28px] p-6 text-slate-900 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-10px_rgba(236,72,153,0.22),0_12px_24px_rgba(0,0,0,0.06)] hover:border-b-pink-600 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-pink-50 border border-pink-200/80 text-pink-600 flex items-center justify-center font-black shadow-xs">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black bg-pink-100 text-pink-800 border border-pink-200 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    22 YRS EXP
                  </span>
                </div>

                <span className="text-[10px] font-black tracking-widest text-pink-600 uppercase block mb-1">
                  CHUMKI MA'AM · EX-FIITJEE
                </span>

                <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-pink-600 transition-colors leading-snug">
                  Science Teacher | Online (9th–12th) + 1-on-1
                </h3>

                <p className="text-slate-700 text-xs leading-relaxed mb-4 font-bold bg-pink-50/60 p-2.5 rounded-xl border border-pink-100">
                  💻 Dedicated 1-on-1 online mentoring & small-batch Science drills by Chumki Ma'am (18 Yrs FIITJEE).
                </p>

                <div className="bg-pink-50/70 border border-pink-100 rounded-2xl p-3.5 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <Zap className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                    <span>Dedicated 1-on-1 online mentoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <Zap className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                    <span>Class 9th to 12th Science Foundation</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                  <img src="/chumki_mam.jpeg" alt="Chumki Ma'am" className="h-8 w-8 rounded-full ring-2 ring-pink-400 object-cover shrink-0" />
                  <div className="text-[10.5px] font-bold text-slate-700">
                    Taught by <strong className="text-slate-950 font-black">Chumki Ma'am</strong> (18 Yrs FIITJEE)
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleRegister('Science Teacher Online (9th-12th) + 1-on-1')}
                  className="w-full bg-slate-950 hover:bg-pink-600 text-white font-black text-xs py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Book 1-on-1 Online Class</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================= */}
          {/* BENTO CARD 4: CLASS 9TH & 10TH FOUNDATION (Spans 4 cols)  */}
          {/* ========================================================= */}
          <ScrollReveal delay={350} direction="up" className="lg:col-span-4 flex">
            <div className="bg-white border-2 border-slate-200/90 border-b-4 border-b-indigo-500/80 rounded-[28px] p-6 text-slate-900 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-10px_rgba(99,102,241,0.22),0_12px_24px_rgba(0,0,0,0.06)] hover:border-b-indigo-600 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center font-black shadow-xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black bg-indigo-100 text-indigo-800 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    STARTS 12TH MARCH
                  </span>
                </div>

                <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase block mb-1">
                  CLASSES 9TH & 10TH · CBSE & OLYMPIAD
                </span>

                <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  Class 9th & 10th Maths & Science Foundation
                </h3>

                <p className="text-slate-700 text-xs leading-relaxed mb-4 font-bold bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-100">
                  🚀 Build early JEE & NEET analytical thinking + 100% CBSE Board competency mastery.
                </p>

                <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-3.5 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Competency-based board paper mastery</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Early IIT JEE & NEET analytical mindset</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleRegister('Class 9th & 10th Foundation')}
                  className="w-full bg-slate-950 hover:bg-indigo-600 text-white font-black text-xs py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Apply Class 9th/10th Batch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================================= */}
          {/* BENTO CARD 5: 1-ON-1 DOUBT & PYQ DRILLS (Spans 4 cols)    */}
          {/* ========================================================= */}
          <ScrollReveal delay={400} direction="up" className="lg:col-span-4 flex">
            <div className="bg-white border-2 border-slate-200/90 border-b-4 border-b-amber-500/80 rounded-[28px] p-6 text-slate-900 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06),0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-10px_rgba(245,158,11,0.22),0_12px_24px_rgba(0,0,0,0.06)] hover:border-b-amber-600 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center font-black shadow-xs">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    SAME-DAY DOUBTS
                  </span>
                </div>

                <span className="text-[10px] font-black tracking-widest text-amber-600 uppercase block mb-1">
                  1-ON-1 DOUBTS & BOARD PYQS
                </span>

                <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                  1-on-1 Board Doubt Clearing & PYQ Shortcut Drills
                </h3>

                <p className="text-slate-700 text-xs leading-relaxed mb-4 font-bold bg-amber-50/60 p-2.5 rounded-xl border border-amber-100">
                  ⚡ Zero-queue daily 1-on-1 doubt solving directly with BM Sir & Senior Ex-HODs.
                </p>

                <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-3.5 space-y-2 mb-4">
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

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleRegister('1-on-1 Doubt & PYQ Drills')}
                  className="w-full bg-slate-950 hover:bg-amber-500 text-white font-black text-xs py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Book Doubt Session Slot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
