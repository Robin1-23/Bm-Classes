'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, Lock, Users, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';
import FoldText from '@/components/ui/FoldText';

export default function BespokeProgramRoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const { openSeatLock } = useModal();

  const phases = [
    {
      num: 'PHASE 01',
      title: 'First-Principles & NCERT Drills',
      months: 'Months 1 - 4',
      badge: 'FOUNDATION RIGOR',
      tagline: 'Zero formula memorization. Core derivation & NCERT line-by-line mastery.',
      deliverables: [
        '100% derivation of Physics & Chemistry concepts',
        'NCERT Biology & Inorganic Chemistry line-by-line drills',
        'Weekly 1-on-1 diagnostic error analysis',
        'Class 11/12 Board exam presentation mastery',
      ],
    },
    {
      num: 'PHASE 02',
      title: 'Advanced Twists & PYQ Dissection',
      months: 'Months 5 - 8',
      badge: 'PATTERN TWISTS',
      tagline: 'Master multi-concept questions and unseen JEE Advanced pattern twists.',
      deliverables: [
        '15 High-Yield Advanced problems per topic directly with HODs',
        '25-Year JEE Advanced & NEET PYQ dissection',
        'Multi-correct & matrix-match elimination speed',
        'Same-day board doubt resolution with zero queues',
      ],
    },
    {
      num: 'PHASE 03',
      title: 'AI Telemetry Mocks & Rank Precision',
      months: 'Months 9 - 12',
      badge: 'RANK PRECISION',
      tagline: 'Calibrate exam temperament under real CBT test conditions.',
      deliverables: [
        'Weekly Full-Length CBT Mocks with AI Telemetry',
        'Question-wise time & negative marking reduction',
        'Personalized weak-topic revision roadmaps',
        '1-on-1 strategy calls with Senior Ex-HOD Mentors',
      ],
    },
  ];

  const batchSchedules = [
    {
      batchName: 'Class 12th JEE & NEET (Starts 12th March)',
      timing: 'Dedicated JEE Advanced · Annual IITian Interaction',
      seatsLeft: '2 Seats Left of 12',
      status: 'Starts 12th March',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
    },
    {
      batchName: 'Class 11th JEE & NEET (Starts 6th April)',
      timing: 'Personalised Small Batches · Ex-HOD Taught',
      seatsLeft: '3 Seats Left of 12',
      status: 'Starts 6th April',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
    },
    {
      batchName: 'Class 10th Maths & Science (Starts 12th March)',
      timing: 'Competency-Based Learning · Updated NCERT',
      seatsLeft: '3 Seats Left of 15',
      status: 'Starts 12th March',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
    },
    {
      batchName: 'Class 9th Maths & Science (Starts 14th March)',
      timing: 'Updated NCERT Syllabus · Small Capped Batch',
      seatsLeft: '4 Seats Left of 15',
      status: 'Starts 14th March',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
    },
    {
      batchName: 'Biology Special — Konika Ma\'am (20 Yrs Exp)',
      timing: 'NEET Botany & CBSE/ICSE/IB · Interactive Digital Board',
      seatsLeft: '2 Seats Left of 12',
      status: '20 Yrs Exp',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14 relative z-10">
        
        {/* 1. 3-PHASE PEDAGOGY ROADMAP */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <FoldText
                text="CLEAR ADMISSION FLOW"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.45}
                stagger={0.015}
                fontSize="12px"
                fontWeight={900}
                color="#22d3ee"
              />
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              The 3-Phase <span className="font-serif italic font-normal text-cyan-300">Academic Framework</span>
            </h2>
          </ScrollReveal>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer relative flex flex-col justify-between ${
                  activePhase === idx
                    ? 'bg-black text-white border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                    : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-black ${activePhase === idx ? 'text-cyan-400' : 'text-zinc-400'}`}>
                      {p.num}
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${activePhase === idx ? 'bg-cyan-950 text-cyan-300 border-cyan-800/40' : 'bg-zinc-900 text-zinc-400 border-zinc-800'}`}>
                      {p.months}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-base leading-snug">
                    {p.title}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-zinc-800 text-xs font-extrabold flex items-center gap-1 text-cyan-400">
                  <span>Phase Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Display Card */}
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800 mb-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-md">
                  {phases[activePhase].badge}
                </span>
                <h3 className="font-heading text-xl font-black text-white mt-1.5">
                  {phases[activePhase].title}
                </h3>
              </div>
              <span className="font-mono text-xs font-black bg-cyan-400 text-black px-3 py-1 rounded-xl self-start sm:self-auto shadow-xs">
                {phases[activePhase].months}
              </span>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm font-semibold mb-5 leading-relaxed">
              {phases[activePhase].tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {phases[activePhase].deliverables.map((item, dIdx) => (
                <div key={dIdx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-zinc-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. BATCH TIMETABLE & SEAT ALLOCATION STATUS */}
        <div className="bg-black rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border-2 border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>MICRO-BATCH CAP: 10-15 STUDENTS</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-black text-white tracking-tight">
                Live Batch Seats & Timetable
              </h3>
            </div>

            <button
              onClick={openSeatLock}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs px-5 py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <Lock className="w-4 h-4 text-black" />
              <span>Lock Seat in Active Batch</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {batchSchedules.map((batch, bIdx) => (
              <div key={bIdx} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-400/60 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-heading font-black text-sm text-white">{batch.batchName}</span>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${batch.badgeBg}`}>
                      {batch.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono font-bold mt-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{batch.timing}</span>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-extrabold">
                  <span className="text-cyan-400">{batch.seatsLeft}</span>
                  <button onClick={openSeatLock} className="text-cyan-300 hover:text-white cursor-pointer flex items-center gap-1">
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400" />
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
