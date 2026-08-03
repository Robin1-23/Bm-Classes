'use client';

import React from 'react';
import { Clock, CheckCircle2, Zap, Target, BookOpen, ShieldCheck, Award, TrendingUp, Users, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function BespokeWhyUsDetails() {
  const dayTimeline = [
    {
      time: '08:30 AM - 11:30 AM',
      title: 'Classroom Conceptual Foundation',
      desc: '100% delivered directly by Ex-HODs of FIITJEE & VMC. Focus on core derivation, first-principles physical intuition, and Advanced pattern twists.',
      tag: '10-15 Micro Batch',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      time: '11:45 AM - 01:00 PM',
      title: 'High-Yield 15-Question Problem Curation',
      desc: 'Instead of 200+ repetitive template drills, students solve 15 carefully curated problems engineered to cover every possible exam variant.',
      tag: 'Zero Rote Learning',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      time: '02:30 PM - 04:30 PM',
      title: 'Same-Day Board Doubt Resolution',
      desc: 'Zero queue waiting time. Bring doubts from FIITJEE, VMC, Allen, Resonance, or Irodov. Solved live on the board directly with Ex-HODs.',
      tag: '0 Days Queue Delay',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      time: '05:00 PM - 06:30 PM',
      title: 'Weekly Rank Telemetry & Parent Review',
      desc: 'Weekly diagnostic tests analyzed with sub-topic accuracy heatmaps. 1-on-1 parent reviews keep your exact rank trajectory crystal clear.',
      tag: 'AIR Precision',
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    },
  ];

  const curationPillars = [
    {
      step: '01',
      title: 'Symmetry & Structural Recognition',
      desc: 'Ex-HOD Math lead Dhirendra Pratap Singh filters questions that teach students how to identify underlying mathematical symmetry in unseen JEE Advanced questions.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Electron Flow & Mechanism Depth',
      desc: 'Senior Chemistry lead Bighnaraj Mishra eliminates rote memorization in Organic and Inorganic by teaching electron push mechanisms and memory shortcuts.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Physical Intuition Bridge',
      desc: 'Physics faculty translates complex multi-body mechanics and modern physics into intuitive vector diagrams before writing equations.',
      icon: Award,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* 1. THE MICRO-BATCH MANIFESTO */}
        <ScrollReveal delay={100} direction="up">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-indigo-900/60 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>THE 10-15 MICRO-BATCH MANIFESTO</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-black tracking-tight leading-snug max-w-3xl">
              Why 150-Student Mass Coaching Halls Siphon Away Top Ranks
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 font-medium max-w-3xl">
              In mass coaching factories across India, students become anonymous roll numbers. Star HODs take demo lectures, and daily syllabus is delegated to unmonitored junior TAs. When doubts arise, students queue for hours at doubt counters only to receive shallow answers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-800">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-amber-400 font-mono text-xl font-black">10-15 Students</span>
                <h4 className="text-white font-extrabold text-sm mt-1">Known By Name & Specific Gaps</h4>
                <p className="text-slate-400 text-xs mt-1">Every student’s speed, calculation errors, and weak chapters are tracked daily by Ex-HODs.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-emerald-400 font-mono text-xl font-black">100% Ex-HOD Taught</span>
                <h4 className="text-white font-extrabold text-sm mt-1">Zero Faculty Swapping</h4>
                <p className="text-slate-400 text-xs mt-1">No junior TAs. Dhirendra Sir & Mishra Sir teach 100% of lectures from Day 1 to Final Exam.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-indigo-300 font-mono text-xl font-black">Same-Day Board Resolution</span>
                <h4 className="text-white font-extrabold text-sm mt-1">Zero Queue Delay</h4>
                <p className="text-slate-400 text-xs mt-1">Doubts are solved on the classroom board on the exact same day — never queued for weeks.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. 24-HOUR DAY IN THE LIFE TIMELINE */}
        <div>
          <ScrollReveal delay={150} direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full">
              DAILY ACADEMIC TIMELINE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              A Day in the Life of a BmClasses Ranker
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2">
              How our structured daily schedule transforms conceptual curiosity into examination temperament.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dayTimeline.map((item, idx) => (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-[#faf8f5] border border-slate-200 rounded-3xl p-6 h-full flex flex-col justify-between hover:border-indigo-500 hover:shadow-lg transition-all">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
                      <span className="font-mono text-xs font-black text-indigo-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        {item.time}
                      </span>
                      <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-slate-950 text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs font-bold text-indigo-600 flex items-center gap-1">
                    <span>Micro-Batch Focus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. EX-HOD 15-QUESTION CURATION METHODOLOGY */}
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-8 sm:p-12">
          <ScrollReveal delay={150} direction="up" className="max-w-2xl mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-amber-800 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
              CURATION METHODOLOGY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              The 15-Question High-Yield Curation Process
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2">
              Mass factories force students to complete 200+ repetitive near-duplicate drills that cause fatigue without teaching problem-solving intuition. Here is how Ex-HODs curate 15 high-yield problems per chapter.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curationPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pIdx} delay={150 * (pIdx + 1)} direction="up">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-400 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono font-black text-slate-300 text-xl">
                        #{pillar.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-slate-950 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
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
