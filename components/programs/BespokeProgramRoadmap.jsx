'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowRight, Lock, Users, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';
import FoldText from '@/components/ui/FoldText';

export default function BespokeProgramRoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const { openRegister } = useModal();

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

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-950 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Ambient Glow */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14 relative z-10">
        
        {/* 1. 3-PHASE PEDAGOGY ROADMAP */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <FoldText
                text="HOW THE YEAR RUNS"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.45}
                stagger={0.015}
                fontSize="12px"
                fontWeight={600}
                color="#4338ca"
              />
            </span>
            <h2 className="font-heading font-extrabold tracking-[-0.03em] mt-3">
              <span className="sr-only">From first principles to exam day.</span>
              <FoldText
                text="From first principles to exam day."
                splitBy="word"
                hinge="top"
                trigger="scroll"
                duration={0.6}
                stagger={0.04}
                fontSize="clamp(1.75rem, 4vw, 2.5rem)"
                fontWeight={800}
                color="#020617"
              />
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
                    ? 'bg-slate-950 text-white border-2 border-slate-900 shadow-lg'
                    : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${activePhase === idx ? 'text-indigo-400' : 'text-slate-500'}`}>
                      {p.num}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${activePhase === idx ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-white text-slate-700 border-slate-200'}`}>
                      {p.months}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base leading-snug">
                    {p.title}
                  </h3>
                </div>

                <div className={`mt-3 pt-3 border-t text-xs font-semibold flex items-center gap-1 ${activePhase === idx ? 'border-slate-800 text-indigo-400' : 'border-slate-200/80 text-indigo-600'}`}>
                  <span>Phase Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Display Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-1 rounded-full">
                  {phases[activePhase].badge}
                </span>
                <h3 className="font-heading text-xl font-extrabold text-slate-950 mt-2">
                  {phases[activePhase].title}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold bg-slate-950 text-white px-3 py-1 rounded-xl self-start sm:self-auto shadow-xs">
                {phases[activePhase].months}
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-5 leading-relaxed">
              {phases[activePhase].tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {phases[activePhase].deliverables.map((item, dIdx) => (
                <div key={dIdx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. BATCH TIMETABLE & SEAT ALLOCATION STATUS */}

      </div>
    </section>
  );
}
