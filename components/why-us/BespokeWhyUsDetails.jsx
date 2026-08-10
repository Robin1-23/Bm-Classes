'use client';

import React from 'react';
import { Clock, CheckCircle2, Zap, Target, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function BespokeWhyUsDetails() {
  const dayTimeline = [
    {
      time: '08:30 AM - 11:30 AM',
      title: 'Ex-HOD Concept Foundation',
      desc: '100% taught directly by Ex-HODs of FIITJEE & VMC. First-principles derivation with zero rote learning.',
      tag: '10-15 Micro Batch',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      time: '11:45 AM - 01:00 PM',
      title: '15 High-Yield Advanced Twists',
      desc: 'Master 15 curated Advanced problems per chapter instead of solving 200+ duplicate template drills.',
      tag: 'Zero Rote Drills',
      badgeBg: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    },
    {
      time: '02:30 PM - 04:30 PM',
      title: 'Same-Day Board Doubt Clearance',
      desc: 'Zero queue delay. Bring doubts from any material — solved live on the classroom board with HODs.',
      tag: '0 Days Queue',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      time: '05:00 PM - 06:30 PM',
      title: 'Weekly AI Rank Telemetry Review',
      desc: 'Chapter accuracy heatmaps & 1-on-1 parent reviews keep your exact AIR trajectory clear.',
      tag: 'AIR Telemetry',
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    },
  ];

  const curationPillars = [
    {
      step: '01',
      title: 'Symmetry & Pattern Recognition',
      desc: 'Dhirendra Sir trains students to spot hidden mathematical symmetry in unseen Advanced questions in 45 seconds.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Electron Push Mechanisms',
      desc: 'Mishra Sir eliminates Organic reaction memorization by teaching fundamental electron push mechanisms.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Physical Intuition Bridge',
      desc: 'Abhimanyu Sir builds 3D physical intuition before writing differential calculus equations.',
      icon: Award,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* 1. THE MICRO-BATCH MANIFESTO */}
        <ScrollReveal delay={100} direction="up">
          <div className="bg-black rounded-3xl p-6 sm:p-10 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>THE 10-15 MICRO-BATCH MANIFESTO</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight max-w-3xl">
              Why 150-Student Mass Coaching Halls Fail JEE Ranks
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mt-2 max-w-2xl">
              Mass factories turn students into anonymous roll numbers with swapped junior TAs. BmClasses caps batches at 10–15 students taught 100% by Senior Ex-HODs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-cyan-300 font-mono text-lg font-black block">10-15 Students</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Known By Name & Specific Gaps</h4>
                <p className="text-slate-400 text-[11px] mt-1 font-medium">Personal speed & weak chapter tracking every single day.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-emerald-400 font-mono text-lg font-black block">100% Ex-HOD Taught</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Zero Junior TA Swaps</h4>
                <p className="text-slate-400 text-[11px] mt-1 font-medium">FIITJEE & VMC HODs teach 100% of lectures from Day 1.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-indigo-300 font-mono text-lg font-black block">Same-Day Board Solve</span>
                <h4 className="text-white font-extrabold text-xs mt-1">Zero Queue Waiting</h4>
                <p className="text-slate-400 text-[11px] mt-1 font-medium">Doubts cleared live on the board on the exact same day.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. 24-HOUR DAY IN THE LIFE TIMELINE */}
        <div>
          <ScrollReveal delay={150} direction="up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
              DAILY ACADEMIC TIMELINE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              Daily Ranker Routine at BmClasses
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dayTimeline.map((item, idx) => (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-[#faf8f5] border border-slate-200 rounded-3xl p-5 h-full flex flex-col justify-between hover:border-indigo-500 hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
                      <span className="font-mono text-xs font-black text-indigo-700 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        {item.time}
                      </span>
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-slate-950 text-base mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 text-[11px] font-extrabold text-indigo-600 flex items-center gap-1">
                    <span>Micro-Batch Focus</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. EX-HOD 15-QUESTION CURATION METHODOLOGY */}
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-6 sm:p-10">
          <ScrollReveal delay={150} direction="up" className="max-w-2xl mb-8">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-900 bg-cyan-100 border border-cyan-200 px-3 py-1 rounded-full">
              CURATION METHODOLOGY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              15 High-Yield Questions vs 200 Duplicate Drills
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curationPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pIdx} delay={150 * (pIdx + 1)} direction="up">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-indigo-400 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono font-black text-slate-300 text-lg">
                        #{pillar.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-slate-950 text-base mb-1.5 group-hover:text-indigo-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-medium leading-relaxed">
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
