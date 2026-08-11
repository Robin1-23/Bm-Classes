'use client';

import React from 'react';
import { Clock, CheckCircle2, Zap, Target, ShieldCheck, Award, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function BespokeWhyUsDetails() {
  const dayTimeline = [
    {
      time: '08:30 AM - 11:30 AM',
      title: 'Ex-HOD Concept Foundation',
      desc: 'First-principles derivation with zero formula memorization.',
      tag: '10-15 Micro Batch',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
      bullets: ['100% Ex-HOD Taught', 'Zero TA Delegation'],
    },
    {
      time: '11:45 AM - 01:00 PM',
      title: '15 High-Yield Advanced Twists',
      desc: 'Curated 15 Advanced problems per chapter instead of 200+ drills.',
      tag: 'Zero Rote Drills',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
      bullets: ['Pattern Recognition', 'High-Yield Curation'],
    },
    {
      time: '02:30 PM - 04:30 PM',
      title: 'Same-Day Board Doubt Clearance',
      desc: 'Bring doubts from any material — solved live on the board with HODs.',
      tag: '0 Days Queue',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
      bullets: ['Same-Day Clearance', 'Live Board Solving'],
    },
    {
      time: '05:00 PM - 06:30 PM',
      title: 'Weekly AI Rank Telemetry Review',
      desc: 'Chapter accuracy heatmaps & 1-on-1 parent progress tracking.',
      tag: 'AIR Telemetry',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40',
      bullets: ['Weekly Diagnostic', '1-on-1 Parent Calls'],
    },
  ];

  const curationPillars = [
    {
      step: '01',
      title: 'Symmetry & Pattern Twists',
      desc: 'Spot hidden mathematical symmetry in unseen Advanced questions in 45 seconds.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Electron Push Mechanisms',
      desc: 'Master Organic reactions through fundamental electron push mechanisms.',
      icon: Zap,
    },
    {
      step: '03',
      title: '3D Physics Intuition',
      desc: 'Build physical intuition before writing differential calculus equations.',
      icon: Award,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* 1. THE MICRO-BATCH MANIFESTO */}
        <ScrollReveal delay={100} direction="up">
          <div className="bg-black rounded-3xl p-6 sm:p-10 text-white border-2 border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>THE 10-15 MICRO-BATCH MANIFESTO</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight max-w-3xl text-white">
              Why Mass Coaching Halls Fail JEE Ranks
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed mt-2 max-w-2xl">
              Mass factories create anonymous roll numbers. BmClasses caps batches at 10–15 students taught 100% directly by Senior Ex-HODs.
            </p>

            {/* Crisp Punchy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-4">
                <span className="text-cyan-400 font-mono text-base font-black block">10-15 Students</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Known By Name & Goals</h4>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Personal speed tracking</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Weak chapter heatmaps</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-4">
                <span className="text-cyan-400 font-mono text-base font-black block">100% Ex-HOD Taught</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Zero Junior TA Swaps</h4>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>FIITJEE & VMC HODs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Direct daily lectures</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800/90 rounded-2xl p-4">
                <span className="text-cyan-400 font-mono text-base font-black block">Same-Day Board Solve</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Zero Queue Waiting</h4>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Live board clearing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                    <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>Any study material</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. 24-HOUR DAY IN THE LIFE TIMELINE */}
        <div>
          <ScrollReveal delay={150} direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DAILY ACADEMIC TIMELINE</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Daily Ranker Routine at <span className="font-serif italic font-normal text-cyan-300">BmClasses</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dayTimeline.map((item, idx) => (
              <ScrollReveal key={idx} delay={120 * (idx + 1)} direction="up">
                <div className="group relative bg-zinc-950 border-2 border-zinc-800 hover:border-cyan-400 rounded-3xl p-6 h-full flex flex-col justify-between shadow-xl hover:-translate-y-2 transition-all duration-300">
                  
                  <div>
                    {/* Time & Tag Row */}
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                      <span className="font-mono text-xs font-black text-cyan-300 flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded-lg border border-zinc-800">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {item.time}
                      </span>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${item.badgeBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-black text-white text-base mb-1.5 group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-xs font-medium leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-1 pt-2 border-t border-zinc-800/80">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300">
                          <Zap className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Footer Accent */}
                  <div className="pt-3 mt-3 border-t border-zinc-800 text-xs font-black text-cyan-400 flex items-center justify-between">
                    <span>Micro-Batch Rigor</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. CURATION METHODOLOGY */}
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 text-white">
          <ScrollReveal delay={150} direction="up" className="max-w-2xl mb-6">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
              CURATION METHODOLOGY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mt-2">
              15 High-Yield Questions vs <span className="font-serif italic font-normal text-cyan-300">200 Duplicate Drills</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {curationPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pIdx} delay={150 * (pIdx + 1)} direction="up">
                  <div className="bg-black rounded-2xl p-4 sm:p-5 border border-zinc-800 relative group hover:border-cyan-400 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 font-black flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono font-black text-zinc-400 text-sm">
                        #{pillar.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-zinc-300 text-xs font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
