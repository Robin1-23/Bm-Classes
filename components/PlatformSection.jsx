'use client';

import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export default function PlatformSection() {
  return (
    <section className="bg-[#faf8f5] pt-10 pb-20 sm:pt-12 sm:pb-28 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Subtle Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>HYBRID LEARNING</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Classroom depth + AI test telemetry<span className="text-indigo-600">.</span>
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
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
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

            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
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

            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
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

        {/* Right Platform Analytics Dashboard Card */}
        <div className="lg:col-span-5 bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -right-16 -top-16 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 relative z-10">
            <div>
              <div className="font-heading font-extrabold text-white text-base">Student Telemetry Dashboard</div>
              <div className="text-[10px] text-indigo-300 font-semibold">Real-Time Performance Analytics</div>
            </div>
            <span className="text-[10px] font-black bg-cyan-400 text-slate-950 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
              LIVE TELEMETRY
            </span>
          </div>

          <div className="space-y-4 mb-6 relative z-10">
            <div>
              <div className="flex justify-between text-xs font-extrabold mb-1">
                <span className="text-slate-200">Rotational Dynamics Mastery</span>
                <span className="text-cyan-300">78%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full w-[78%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-extrabold mb-1">
                <span className="text-slate-200">Organic Reaction Mechanisms</span>
                <span className="text-cyan-300">92%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[92%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-extrabold mb-1">
                <span className="text-slate-200">Integral Calculus Practice</span>
                <span className="text-cyan-300">85%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 text-xs text-slate-200 border border-white/10 relative z-10 flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300">AI Weak Area Trigger:</strong> 15 targeted practice problems generated for tomorrow's review on "Moment of Inertia of Composite Bodies".
            </div>
          </div>

        </div>

        </div>{/* end grid */}

      </div>
    </section>
  );
}
