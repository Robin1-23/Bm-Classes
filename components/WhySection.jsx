'use client';

import React, { useState } from 'react';
import { Target, TrendingUp, Users, CheckCircle2, Sparkles, Zap, ShieldCheck, Gauge, ArrowRight, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function WhySection({ hidePedagogy = false }) {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const pillars = [
    {
      num: '01',
      icon: Target,
      tag: 'CONCEPTUAL DEPTH',
      title: 'First-principles mastery & high-yield problem solving',
      desc: 'Focus on 15 handpicked high-yield questions per chapter that teach deep conceptual application for JEE Advanced & NEET.',
      stats: '15 High-Yield Qs / Topic',
      versusText: 'Focus on conceptual twists & pattern recognition',
      highlights: [
        'Curated 15-question sets per chapter',
        'Focus on JEE Advanced pattern twists',
        'Deep conceptual application & derivation',
      ],
    },
    {
      num: '02',
      icon: TrendingUp,
      tag: 'PERSONAL DIAGNOSTICS',
      title: 'Weekly 1-on-1 diagnostic feedback',
      desc: 'Weekly diagnostic tests & 1-on-1 progress reviews with HODs to map calculation tendencies and chapter gaps.',
      stats: 'Weekly Diagnostic Feedback',
      versusText: 'Personal 1-on-1 parent & student reviews',
      highlights: [
        'Weekly diagnostic test reports',
        '1-on-1 parent & mentor reviews',
        'Personalized weak-area improvement plans',
      ],
    },
    {
      num: '03',
      icon: Users,
      tag: 'MICRO BATCH CAP',
      title: 'Small batches. Known by name & goals.',
      desc: 'Known individually by name, target exam, and learning pace. Doubts resolved directly on the board the same day.',
      stats: 'Capped 10-15 Batch Limit',
      versusText: 'Direct HOD access in every class',
      highlights: [
        'Strict 10-15 student batch limit',
        'Same-day board doubt solving',
        'Direct Ex-HOD mentor accessibility',
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
        details: 'Dhirendra Pratap Singh (Ex-FIITJEE HOD) & Bighnaraj Mishra (Ex-VMC HOD) teach every single lecture.',
        attentionScore: 98,
        doubtSpeed: 'Same-Day Board Resolution',
        badge: 'EX-FIITJEE & VMC HODs',
      },
      factory: {
        headline: 'Senior Faculty Swapped for TAs',
        details: 'Senior star faculty take demo sessions; daily syllabus is delegated to junior teaching assistants.',
        attentionScore: 18,
        doubtSpeed: '2-3 Weeks Queue Delay',
        badge: 'UNMONITORED ASSISTANTS',
      }
    },
    {
      id: 'batch',
      title: 'Batch Ecosystem',
      subtitle: 'How many students share your classroom air?',
      bmclasses: {
        headline: 'Strictly Capped at 10-15 Aspirants',
        details: 'Every student is known by name, target rank, learning speed, and specific subject weaknesses.',
        attentionScore: 100,
        doubtSpeed: 'Immediate Board Clarification',
        badge: 'MICRO BATCH CAP',
      },
      factory: {
        headline: '150 to 200+ Crowded Mass Halls',
        details: 'Students become anonymous roll numbers in mega lecture halls with zero personal tracking.',
        attentionScore: 8,
        doubtSpeed: 'Queued Counter Tickets',
        badge: 'MASS HALLS',
      }
    },
    {
      id: 'doubts',
      title: 'Doubt Resolution',
      subtitle: 'What happens when you get stuck on a problem?',
      bmclasses: {
        headline: 'Same-Day Board Resolution with HODs',
        details: 'Doubts are solved on the board on the exact same day directly with HODs — zero queue waiting.',
        attentionScore: 95,
        doubtSpeed: '0 Days (Same Day)',
        badge: 'BOARD RESOLUTION',
      },
      factory: {
        headline: 'Queued Doubt Counter Slots',
        details: 'Students queue at doubt counters weeks later with junior TAs who struggle on Advanced twists.',
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
        details: 'Hand-picked problem sets teaching conceptual twists and Advanced pattern recognition.',
        attentionScore: 92,
        doubtSpeed: 'High Conceptual Depth',
        badge: 'HIGH YIELD CURATION',
      },
      factory: {
        headline: '200+ Repetitive Template Drills',
        details: 'Bulk mechanical near-duplicate drills that create fatigue without teaching Advanced problem solving.',
        attentionScore: 28,
        doubtSpeed: 'Rote Mechanical Drills',
        badge: 'BULK DRILLS',
      }
    },
    {
      id: 'telemetry',
      title: 'Rank Telemetry',
      subtitle: 'How is student progress monitored and reviewed?',
      bmclasses: {
        headline: 'Weekly 1-on-1 Diagnostic Telemetry',
        details: 'Weekly chapter diagnostics, weak-area heatmaps, and 1-on-1 mentor & parent progress reviews.',
        attentionScore: 96,
        doubtSpeed: 'Weekly 1-on-1 Reviews',
        badge: 'LIVE TELEMETRY',
      },
      factory: {
        headline: 'Posted Rank Lists with Zero Feedback',
        details: 'Rank lists posted publicly on notice boards with zero diagnostic feedback or parent guidance.',
        attentionScore: 14,
        doubtSpeed: 'End-of-Term Shocks',
        badge: 'UNREVIEWED MARKS',
      }
    },
  ];

  const currentDim = dimensions[selectedDimension];

  return (
    <section className="relative bg-black text-white py-20 sm:py-28 border-b border-zinc-900 overflow-hidden" id="why-bmclasses">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PEDAGOGY DIFFERENCE</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Conceptual Depth Over <span className="font-serif italic font-normal text-cyan-300">Mechanical Drills</span>
          </h2>
          
          <p className="text-zinc-300 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-xl mx-auto">
            Premier institute rigor combined with the personal mentorship only a 10-15 student batch provides.
          </p>
        </ScrollReveal>

        {/* BESPOKE ACADEMIC MONOLITH CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg sm:max-w-none mx-auto mb-20">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-7 sm:p-8 text-white shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.2)] hover:-translate-y-1.5 hover:border-cyan-400 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden h-full">
                  
                  {/* Architectural Corner Tag */}
                  <div className="flex items-center justify-between pb-5 border-b border-zinc-800 mb-6">
                    <span className="text-[10px] font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-md">
                      {pillar.tag}
                    </span>
                    <span className="font-heading font-black text-zinc-400 text-sm">
                      #{pillar.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-2 text-xs font-black text-cyan-300 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
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
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800 mb-8">
              <div>
                <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase block mb-1">
                  PEDAGOGY COMPARISON DECK
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                  Why Micro-Batches <span className="font-serif italic font-normal text-cyan-300">Outperform Mass Coaching</span>
                </h3>
              </div>

              {/* Dimension Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                {dimensions.map((dim, dIdx) => (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimension(dIdx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                      selectedDimension === dIdx
                        ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                        : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white'
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
              <div className="bg-black border-2 border-zinc-800 rounded-2xl p-5 sm:p-7 text-white flex flex-col justify-between shadow-xl">
                <div>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-widest text-zinc-400 uppercase">
                        MASS FACTORY SYSTEM
                      </span>
                      <span className="text-[10px] font-extrabold text-zinc-400">Standard Industry</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-zinc-900 text-zinc-300 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        <span>{currentDim.factory.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-black text-lg sm:text-xl text-zinc-200 mb-2">
                    {currentDim.factory.headline}
                  </h4>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {currentDim.factory.details}
                  </p>
                </div>

                {/* Telemetry Meter */}
                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <div>
                    <div className="flex justify-between text-xs font-extrabold mb-1">
                      <span className="text-zinc-300">Individual Attention Score</span>
                      <span className="text-white font-black">{currentDim.factory.attentionScore}%</span>
                    </div>
                    <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-zinc-600 rounded-full transition-all duration-700" 
                        style={{ width: `${currentDim.factory.attentionScore}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-zinc-300 font-semibold">Doubt Delay Window:</span>
                    <span className="font-extrabold text-white">{currentDim.factory.doubtSpeed}</span>
                  </div>
                </div>

              </div>

              {/* CHAMBER B: BMCLASSES STANDARD */}
              <div className="bg-black border-2 border-zinc-800 rounded-2xl p-5 sm:p-7 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-cyan-400 transition-all">
                
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="space-y-2 mb-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-widest text-cyan-300 uppercase">
                        BMCLASSES STANDARD
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Verified Metric
                      </span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-cyan-400 text-black px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{currentDim.bmclasses.badge}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-black text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">
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
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700" 
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
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300 font-medium relative z-10">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Comparing Dimension: <strong className="text-white font-extrabold">{currentDim.subtitle}</strong></span>
              </div>
            </div>

          </div>
        </ScrollReveal>
        )}

      </div>
    </section>
  );
}
