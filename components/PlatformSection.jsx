'use client';

import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import FoldText from '@/components/ui/FoldText';

export default function PlatformSection() {
  return (
    <section className="bg-white pt-10 pb-20 sm:pt-12 sm:pb-28 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <FoldText
              text="HYBRID LEARNING"
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
          
          <h2 className="font-heading leading-[1.15] tracking-tight mt-1 mb-2">
            <span className="sr-only">Classroom depth + AI test telemetry.</span>
            <FoldText
              text="Classroom depth + AI test telemetry."
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
          
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium leading-relaxed">
            Classrooms build fundamental clarity. The platform tracks concept gaps, drills weak areas, and automates revision.
          </p>
        </div>

        {/* Grid: Feature Cards + Dashboard */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Feature Cards Column */}
        <div className="lg:col-span-7">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                01
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-slate-950 text-base">
                  Targeted Weak Area Removal
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                  Identifies concept gaps in weekly tests and generates instant practice problem sets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                02
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-slate-950 text-base">
                  Adaptive Difficulty Scaling
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                  Questions dynamically calibrate as you master concepts, unlocking harder Advanced problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                03
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-slate-950 text-base">
                  High-Priority Revision
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                  Surfaces highest-priority weak topics to revise as exam day approaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Platform Analytics Dashboard Card (Clean 3D Minimalist Light Style) */}
        <div className="lg:col-span-5 bg-white text-slate-950 border-2 border-white ring-1 ring-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12),0_8px_20px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_-15px_rgba(99,102,241,0.22)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 relative z-10">
            <div>
              <div className="font-heading font-black text-slate-950 text-base sm:text-lg">Student Telemetry Dashboard</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Real-Time Performance Analytics</div>
            </div>
            <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/90 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>LIVE TELEMETRY</span>
            </span>
          </div>

          <div className="space-y-4 mb-6 relative z-10">
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-extrabold mb-1.5">
                <span className="text-slate-900">Rotational Dynamics Mastery</span>
                <span className="text-indigo-600 font-black">78%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div className="h-full bg-indigo-600 rounded-full w-[78%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm font-extrabold mb-1.5">
                <span className="text-slate-900">Organic Reaction Mechanisms</span>
                <span className="text-indigo-600 font-black">92%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div className="h-full bg-indigo-600 rounded-full w-[92%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm font-extrabold mb-1.5">
                <span className="text-slate-900">Integral Calculus Practice</span>
                <span className="text-indigo-600 font-black">85%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div className="h-full bg-indigo-600 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-700 relative z-10 flex items-start gap-3 shadow-2xs">
            <Zap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-950 font-black">AI Weak Area Trigger:</strong> 15 targeted practice problems generated for tomorrow's review on "Moment of Inertia of Composite Bodies".
            </div>
          </div>

        </div>

        </div>{/* end grid */}

      </div>
    </section>
  );
}
