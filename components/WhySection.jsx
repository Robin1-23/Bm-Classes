'use client';

import React, { useState } from 'react';
import { Target, TrendingUp, Users, CheckCircle2, Sparkles, Zap, ShieldCheck, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';

export default function WhySection({ hidePedagogy = false }) {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const pillars = [
    {
      num: '01',
      icon: Target,
      tag: 'CONCEPTUAL DEPTH',
      title: 'First-principles problem solving',
      desc: '15 handpicked high-yield questions per chapter teaching deep conceptual twists for JEE Advanced & NEET.',
      stats: '15 High-Yield Qs / Topic',
      highlights: [
        'Curated 15-question chapter sets',
        'Focus on Advanced pattern twists',
        'Deep derivation & concept mastery',
      ],
    },
    {
      num: '02',
      icon: TrendingUp,
      tag: 'PERSONAL DIAGNOSTICS',
      title: 'Weekly 1-on-1 diagnostic feedback',
      desc: 'Weekly diagnostic tests & HOD progress reviews to systematically remove calculation & concept errors.',
      stats: 'Weekly Diagnostic Feedback',
      highlights: [
        'Weekly diagnostic reports',
        '1-on-1 parent & HOD reviews',
        'Targeted weak-area action plans',
      ],
    },
    {
      num: '03',
      icon: Users,
      tag: 'MICRO BATCH CAP',
      title: 'Capped 10–15 batch precision',
      desc: 'Known individually by name, target rank, and learning pace. Doubts resolved directly on the board.',
      stats: 'Strict 10-15 Batch Limit',
      highlights: [
        'Capped 10–15 student batches',
        'Same-day board doubt solving',
        'Direct Ex-HOD accessibility',
      ],
    },
  ];

  const dimensions = [
    {
      id: 'faculty',
      title: 'Faculty Delivery',
      subtitle: 'Who is standing at the board every single day?',
      bmclasses: {
        headline: '100% Taught Directly by Ex-HODs',
        details: 'BM Sir (Ex-VMC HOD) & Konika Ma’am (Ex-FIITJEE) teach every single lecture directly.',
        attentionScore: 98,
        doubtSpeed: 'Same-Day Board Resolution',
        badge: 'EX-FIITJEE & VMC HODs',
      },
      factory: {
        headline: 'Senior Faculty Swapped for TAs',
        details: 'Senior faculty handle demos; daily lectures are delegated to junior assistants.',
        attentionScore: 18,
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
        attentionScore: 100,
        doubtSpeed: 'Immediate Board Clarification',
        badge: 'MICRO BATCH CAP',
      },
      factory: {
        headline: '150 to 200+ Crowded Lecture Halls',
        details: 'Students become anonymous numbers in mega halls with zero individual tracking.',
        attentionScore: 8,
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
        attentionScore: 95,
        doubtSpeed: 'Same Day Resolution',
        badge: 'BOARD RESOLUTION',
      },
      factory: {
        headline: 'Queued Doubt Counter Slots',
        details: 'Long queues at doubt counters with assistants struggling on Advanced twists.',
        attentionScore: 20,
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
        attentionScore: 92,
        doubtSpeed: 'High Conceptual Depth',
        badge: 'HIGH YIELD CURATION',
      },
      factory: {
        headline: '200+ Repetitive Template Drills',
        details: 'Bulk mechanical near-duplicate drills that create fatigue without real mastery.',
        attentionScore: 28,
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
        attentionScore: 96,
        doubtSpeed: 'Weekly 1-on-1 Reviews',
        badge: 'LIVE TELEMETRY',
      },
      factory: {
        headline: 'Posted Rank Lists with Zero Feedback',
        details: 'Rank lists posted publicly on notice boards with zero diagnostic feedback.',
        attentionScore: 14,
        doubtSpeed: 'End-of-Term Shocks',
        badge: 'UNREVIEWED MARKS',
      }
    },
  ];

  const currentDim = dimensions[selectedDimension];

  return (
    <section className="relative bg-white text-slate-950 py-20 sm:py-28 border-b border-slate-200/80 overflow-hidden" id="why-bmclasses">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <FoldText
              text="PEDAGOGY DIFFERENCE"
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
          
          <h2 className="font-heading tracking-tight leading-[1.15] mt-1 mb-2">
            <span className="sr-only">Conceptual Depth Over Mechanical Drills</span>
            <FoldText
              text="Conceptual Depth Over Mechanical Drills"
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
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-semibold leading-relaxed max-w-xl mx-auto">
            Premier institute rigor combined with the personal mentorship only a 10–15 student batch provides.
          </p>
        </ScrollReveal>

        {/* BESPOKE ACADEMIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg sm:max-w-none mx-auto mb-20">
          {pillars.map((pillar, idx) => {
            return (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 text-slate-950 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(15,23,42,0.1)] hover:border-slate-300 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden h-full">
                  
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                    <span className="text-[10px] font-black tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                    <span className="font-heading font-black text-slate-400 text-sm">
                      #{pillar.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-black text-slate-900 bg-slate-50 border border-slate-200/80 px-3.5 py-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>{pillar.stats}</span>
                    </div>
                  </div>

                </div>
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
                <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase block mb-1">
                  PEDAGOGY COMPARISON DECK
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-950">
                  Why Micro-Batches <span className="font-serif italic font-normal text-indigo-600">Outperform Mass Coaching</span>
                </h3>
              </div>

              {/* Dimension Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                {dimensions.map((dim, dIdx) => (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimension(dIdx)}
                    className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
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
                      <span className="text-[11px] font-black tracking-wider text-slate-500 uppercase">
                        MASS FACTORY SYSTEM
                      </span>
                      <span className="text-[10px] font-extrabold text-slate-500">Standard Industry</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        <span>{currentDim.factory.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-black text-lg sm:text-xl text-slate-950 mb-2">
                    {currentDim.factory.headline}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {currentDim.factory.details}
                  </p>
                </div>

                {/* Telemetry Meter */}
                <div className="space-y-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <div className="flex justify-between text-xs font-extrabold mb-1">
                      <span className="text-slate-600">Individual Attention Score</span>
                      <span className="text-slate-950 font-black">{currentDim.factory.attentionScore}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-400 rounded-full transition-all duration-700" 
                        style={{ width: `${currentDim.factory.attentionScore}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-600 font-semibold">Doubt Delay Window:</span>
                    <span className="font-extrabold text-slate-950">{currentDim.factory.doubtSpeed}</span>
                  </div>
                </div>

              </div>

              {/* CHAMBER B: BMCLASSES STANDARD */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
                
                <div>
                  <div className="space-y-2 mb-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-wider text-cyan-300 uppercase">
                        BMCLASSES STANDARD
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Verified Metric
                      </span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-indigo-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{currentDim.bmclasses.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-black text-lg sm:text-xl text-white mb-2 relative z-10">
                    {currentDim.bmclasses.headline}
                  </h4>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium relative z-10">
                    {currentDim.bmclasses.details}
                  </p>
                </div>

                {/* Telemetry Meter */}
                <div className="space-y-4 pt-4 border-t border-zinc-800 relative z-10">
                  <div>
                    <div className="flex justify-between text-xs font-extrabold mb-1">
                      <span className="text-zinc-200">Individual Attention Score</span>
                      <span className="text-cyan-300 font-black">{currentDim.bmclasses.attentionScore}%</span>
                    </div>
                    <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-700" 
                        style={{ width: `${currentDim.bmclasses.attentionScore}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-zinc-200 font-semibold">Doubt Clearing Speed:</span>
                    <span className="font-black text-cyan-300 flex items-center gap-1 shrink-0">
                      <Zap className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400 shrink-0" />
                      <span>{currentDim.bmclasses.doubtSpeed}</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Deck Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium relative z-10">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Comparing Dimension: <strong className="text-slate-950 font-extrabold">{currentDim.subtitle}</strong></span>
              </div>
            </div>

          </div>
        </ScrollReveal>
        )}

      </div>
    </section>
  );
}
