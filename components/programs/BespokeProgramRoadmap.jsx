'use client';

import React, { useState } from 'react';
import { Layers, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Lock, Award, Users, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeProgramRoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const { openSeatLock } = useModal();

  const phases = [
    {
      num: 'PHASE 01',
      title: 'First-Principles Concept & NCERT Mastery',
      months: 'Months 1 - 4',
      badge: 'FOUNDATION RIGOR',
      tagline: 'Eliminate conceptual gaps before touching advanced problem sets.',
      deliverables: [
        '100% derivation of core formulas in Physics & Chemistry',
        'NCERT Biology & Inorganic Chemistry line-by-line drills',
        'Weekly 1-on-1 diagnostic error analysis',
        'Board-level answer presentation techniques for Class 11/12',
      ],
    },
    {
      num: 'PHASE 02',
      title: 'Advanced Problem Twists & PYQ Matrix',
      months: 'Months 5 - 8',
      badge: 'PATTERN TWISTS',
      tagline: 'Master multi-concept questions and unseen JEE Advanced pattern twists.',
      deliverables: [
        '15 High-Yield Advanced problems solved per topic directly with HODs',
        '25-Year JEE Advanced & NEET Previous Year Question (PYQ) dissection',
        'Speed optimization for multi-correct & matrix-match questions',
        'Same-day board doubt resolution with zero queue waiting',
      ],
    },
    {
      num: 'PHASE 03',
      title: 'Telemetry Mocks & AIR Rank Precision',
      months: 'Months 9 - 12',
      badge: 'RANK PRECISION',
      tagline: 'Calibrate exam temperament under real NTA & JEE test conditions.',
      deliverables: [
        'Weekly Full-Length CBT (Computer Based Test) Mocks with AI Telemetry',
        'Question-wise time expenditure and negative marking reduction',
        'Personalized revision roadmaps tailored to individual weak topics',
        '1-on-1 strategy sessions with Director Dhirendra Pratap Singh',
      ],
    },
  ];

  const batchSchedules = [
    {
      batchName: 'Class XI 2-Year JEE Advanced Integrated',
      timing: '4:00 PM - 7:30 PM (Mon, Wed, Fri)',
      seatsLeft: '2 Seats Remaining out of 12',
      status: 'High Demand',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    },
    {
      batchName: 'Class XII 1-Year JEE Pinnacle Batch',
      timing: '4:00 PM - 7:30 PM (Tue, Thu, Sat)',
      seatsLeft: '1 Seat Remaining out of 12',
      status: 'Almost Capped',
      badgeBg: 'bg-amber-500/10 text-amber-800 border-amber-300',
    },
    {
      batchName: 'XII Pass / Droppers Intensive Ranker',
      timing: '09:30 AM - 01:30 PM (Daily Mon-Sat)',
      seatsLeft: '3 Seats Remaining out of 15',
      status: 'Morning Intensive',
      badgeBg: 'bg-indigo-500/10 text-indigo-700 border-indigo-300',
    },
    {
      batchName: 'NEET-UG Medical Excellence',
      timing: '10:00 AM - 01:30 PM (Tue, Thu, Sat)',
      seatsLeft: '2 Seats Remaining out of 12',
      status: 'NCERT Focus',
      badgeBg: 'bg-purple-500/10 text-purple-700 border-purple-300',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* 1. 3-PHASE PEDAGOGY ROADMAP */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
              PEDAGOGY ROADMAP
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-950 mt-3">
              The 3-Phase Academic Delivery Framework
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2">
              Every BmClasses coaching program follows a strict 3-phase progression engineered by Ex-HODs to guarantee top percentiles.
            </p>
          </ScrollReveal>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-6 rounded-2xl text-left border transition-all cursor-pointer relative flex flex-col justify-between ${
                  activePhase === idx
                    ? 'bg-slate-950 text-white border-slate-900 shadow-xl ring-2 ring-indigo-500/30'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-black ${activePhase === idx ? 'text-amber-400' : 'text-indigo-600'}`}>
                      {p.num}
                    </span>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${activePhase === idx ? 'bg-white/10 text-slate-200 border-white/10' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      {p.months}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-base sm:text-lg leading-snug">
                    {p.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/40 text-xs font-extrabold flex items-center gap-1.5">
                  <span>View Phase Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Display Card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md">
                  {phases[activePhase].badge}
                </span>
                <h3 className="font-heading text-2xl font-black text-slate-950 mt-2">
                  {phases[activePhase].title}
                </h3>
              </div>
              <span className="font-mono text-sm font-black bg-amber-400 text-slate-950 px-4 py-1.5 rounded-xl self-start sm:self-auto shadow-xs">
                {phases[activePhase].months}
              </span>
            </div>

            <p className="text-slate-600 text-sm font-semibold mb-6">
              {phases[activePhase].tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phases[activePhase].deliverables.map((item, dIdx) => (
                <div key={dIdx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. BATCH TIMETABLE & SEAT ALLOCATION STATUS */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-900/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>MICRO-BATCH CAP: 10-15 STUDENTS</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                Live Batch Allocation & Timetable Schedule
              </h3>
            </div>

            <button
              onClick={openSeatLock}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40 shrink-0"
            >
              <Lock className="w-4 h-4 text-amber-300" />
              <span>Lock Seat in Active Batch</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {batchSchedules.map((batch, bIdx) => (
              <div key={bIdx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-heading font-black text-base text-white">{batch.batchName}</span>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${batch.badgeBg}`}>
                      {batch.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-amber-300 font-mono font-bold mt-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{batch.timing}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold">
                  <span className="text-emerald-400">{batch.seatsLeft}</span>
                  <button onClick={openSeatLock} className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1">
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
