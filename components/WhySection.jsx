'use client';

import React, { useState } from 'react';
import { Target, TrendingUp, Users, CheckCircle2, Sparkles, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';

export default function WhySection({ hidePedagogy = false }) {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const pillars = [
    {
      lead: 'Fewer questions.',
      soft: 'Better ones.',
      desc: '15 hand-picked questions per chapter, each with the twist JEE and NEET love to test.',
      icon: Target,
      theme: 'indigo',
    },
    {
      lead: 'A check-up',
      soft: 'every week.',
      desc: 'A short weekly test, reviewed by the HOD with you and your parents.',
      icon: TrendingUp,
      theme: 'white',
    },
    {
      lead: 'Your teacher',
      soft: 'knows your name.',
      desc: 'Fifteen students at most, so the HOD knows your target and your pace.',
      icon: Users,
      theme: 'white',
    },
    {
      lead: 'Doubts solved',
      soft: 'the same day.',
      desc: 'Stuck after class? Sit with the HOD and leave with the answer.',
      icon: Zap,
      theme: 'navy',
    },
  ];

  const THEMES = {
    indigo: { card: 'bg-indigo-600 text-white border-indigo-600', soft: 'text-indigo-200', desc: 'text-indigo-100', btn: 'bg-white text-indigo-700', art: 'text-white/15' },
    navy: { card: 'bg-[#0b1020] text-white border-[#0b1020]', soft: 'text-slate-400', desc: 'text-slate-300', btn: 'bg-white text-slate-950', art: 'text-white/10' },
    white: { card: 'bg-white text-slate-950 border-slate-200', soft: 'text-slate-400', desc: 'text-slate-600', btn: 'bg-slate-950 text-white', art: 'text-indigo-100' },
  };

  const dimensions = [
    {
      id: 'faculty',
      title: 'Faculty Delivery',
      subtitle: 'Who is standing at the board every single day?',
      bmclasses: {
        headline: '100% Taught Directly by Ex-HODs',
        details: 'BM Sir (Ex-VMC HOD) & Konika Ma’am (Ex-FIITJEE) teach every single lecture directly.',
        doubtSpeed: 'Same-Day Board Resolution',
        badge: 'EX-FIITJEE & VMC HODs',
      },
      factory: {
        headline: 'Senior Faculty Swapped for TAs',
        details: 'Senior faculty handle demos; daily lectures are delegated to junior assistants.',
        doubtSpeed: '2-3 Weeks Delay',
        badge: 'UNMONITORED ASSISTANTS',
      }
    },
    {
      id: 'batch',
      title: 'Batch Ecosystem',
      subtitle: 'How many students share your classroom?',
      bmclasses: {
        headline: 'Strictly Capped at 10–15 Aspirants',
        details: 'Every student is known by name, rank goal, speed, and specific subject weaknesses.',
        doubtSpeed: 'Immediate Board Clarification',
        badge: 'MICRO BATCH CAP',
      },
      factory: {
        headline: '150 to 200+ Crowded Lecture Halls',
        details: 'Students become anonymous numbers in mega halls with zero individual tracking.',
        doubtSpeed: 'Queued Counter Slots',
        badge: 'MASS HALLS',
      }
    },
    {
      id: 'doubts',
      title: 'Doubt Resolution',
      subtitle: 'What happens when you get stuck on a problem?',
      bmclasses: {
        headline: 'Same-Day Board Resolution with HODs',
        details: 'Doubts solved directly on the board on the exact same day — zero queue waiting.',
        doubtSpeed: 'Same Day Resolution',
        badge: 'BOARD RESOLUTION',
      },
      factory: {
        headline: 'Queued Doubt Counter Slots',
        details: 'Long queues at doubt counters with assistants struggling on Advanced twists.',
        doubtSpeed: '14-21 Days Delay',
        badge: 'QUEUED COUNTERS',
      }
    },
    {
      id: 'problem',
      title: 'Problem Curation',
      subtitle: 'How are daily practice problem sets chosen?',
      bmclasses: {
        headline: '15 High-Yield Advanced Twists / Topic',
        details: 'Hand-picked problem sets teaching conceptual twists and pattern recognition.',
        doubtSpeed: 'High Conceptual Depth',
        badge: 'HIGH YIELD CURATION',
      },
      factory: {
        headline: '200+ Repetitive Template Drills',
        details: 'Bulk mechanical near-duplicate drills that create fatigue without real mastery.',
        doubtSpeed: 'Rote Drills',
        badge: 'BULK DRILLS',
      }
    },
    {
      id: 'telemetry',
      title: 'Rank Telemetry',
      subtitle: 'How is student progress monitored and reviewed?',
      bmclasses: {
        headline: 'Weekly 1-on-1 Diagnostic Telemetry',
        details: 'Weekly chapter diagnostics, weak-area heatmaps, and 1-on-1 HOD progress reviews.',
        doubtSpeed: 'Weekly 1-on-1 Reviews',
        badge: 'LIVE TELEMETRY',
      },
      factory: {
        headline: 'Posted Rank Lists with Zero Feedback',
        details: 'Rank lists posted publicly on notice boards with zero diagnostic feedback.',
        doubtSpeed: 'End-of-Term Shocks',
        badge: 'UNREVIEWED MARKS',
      }
    },
  ];

  const currentDim = dimensions[selectedDimension];

  return (
    <section className="relative bg-[#f5f7ff] text-slate-950 py-20 lg:py-28 border-b border-slate-200/80 overflow-hidden" id="why-bmclasses">
      
      {/* Background Soft Glows */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <FoldText
              text="WHY IT WORKS"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.45}
              stagger={0.015}
              fontSize="12px"
              fontWeight={600}
              color="#4338ca"
            />
          </div>
          
          <h2 className="font-heading font-extrabold tracking-[-0.03em] leading-[1.15] mt-1 mb-2">
            <span className="sr-only">Understand it once. Solve it forever.</span>
            <FoldText
              text="Understand it once. Solve it forever."
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.04}
              fontSize="clamp(2.1rem, 4.6vw, 3.5rem)"
              fontWeight={800}
              color="#020617"
            />
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-semibold leading-relaxed max-w-xl mx-auto">
            Big-institute rigour. Small-batch attention. Nobody gets left behind.
          </p>
        </ScrollReveal>

        {/* BESPOKE ACADEMIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-20">
          {pillars.map((p, idx) => {
            const t = THEMES[p.theme];
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.lead} delay={80 * idx} direction="up">
                <article className={`group relative overflow-hidden h-full min-h-[250px] rounded-[28px] border p-7 sm:p-9 flex flex-col ${t.card}`}>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className={`absolute -right-6 -bottom-6 w-44 h-44 sm:w-52 sm:h-52 ${t.art} transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105`}
                  />
                  <h3 className="relative font-heading font-semibold text-[30px] sm:text-[34px] leading-[1.08] tracking-[-0.025em] max-w-[13ch]">
                    {p.lead}
                    <span className={`block ${t.soft}`}>{p.soft}</span>
                  </h3>
                  <p className={`relative text-[15px] leading-relaxed mt-4 max-w-[30ch] ${t.desc}`}>{p.desc}</p>
                  <a href="/#book-demo" className="relative mt-auto pt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide w-fit">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center ${t.btn}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    See it in a demo
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* INTERACTIVE PEDAGOGY COMPARISON DECK */}
        {!hidePedagogy && (
        <ScrollReveal delay={200} direction="up">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-slate-950 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.08)] relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase block mb-1">
                  SIDE BY SIDE
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Why Micro-Batches <span className="text-indigo-600">Outperform Mass Coaching</span>
                </h3>
              </div>

              {/* Dimension Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                {dimensions.map((dim, dIdx) => (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimension(dIdx)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedDimension === dIdx
                        ? 'bg-slate-950 text-white shadow-md'
                        : 'bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100'
                    }`}
                  >
                    {dim.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Side-by-Side Comparison Chambers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CHAMBER A: MASS FACTORY */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-7 text-slate-900 flex flex-col justify-between">
                <div>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                        A typical big institute
                      </span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <span>{currentDim.factory.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 mb-2">
                    {currentDim.factory.headline}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {currentDim.factory.details}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200/80">
                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-600 font-semibold">Doubt waiting time</span>
                    <span className="font-semibold text-slate-950">{currentDim.factory.doubtSpeed}</span>
                  </div>
                </div>

              </div>

              {/* CHAMBER B: BMCLASSES STANDARD */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
                
                <div>
                  <div className="space-y-2 mb-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase">
                        BM Classes
                      </span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-indigo-600 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{currentDim.bmclasses.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-2 relative z-10">
                    {currentDim.bmclasses.headline}
                  </h4>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium relative z-10">
                    {currentDim.bmclasses.details}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800 relative z-10">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-zinc-200 font-semibold">Doubt waiting time</span>
                    <span className="font-bold text-indigo-300 flex items-center gap-1 shrink-0">
                      <Zap className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400 shrink-0" />
                      <span>{currentDim.bmclasses.doubtSpeed}</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>
        )}

      </div>
    </section>
  );
}
