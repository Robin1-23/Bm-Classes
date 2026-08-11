'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PROGRAMS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function ProgramsSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all' 
    ? PROGRAMS_DATA 
    : PROGRAMS_DATA.filter(p => p.categoryTypes && p.categoryTypes.includes(activeTab));

  return (
    <section className="bg-[#faf8f5] text-slate-900 py-20 sm:py-28 relative overflow-hidden border-b border-slate-200/80" id="programs">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="down" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>ACADEMIC PROGRAMS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Courses Built for <span className="font-serif italic font-normal text-indigo-700">Top AIR Ranks</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
            Classroom coaching, 1-on-1 mentoring, adaptive testing & same-day doubt clearing.
          </p>
        </ScrollReveal>

        {/* Filter Tabs by Course Category */}
        <ScrollReveal delay={150} direction="up">
          <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center px-1">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'jee', label: 'JEE Main & Advanced' },
              { id: 'neet', label: 'NEET UG Medical' },
              { id: 'foundation', label: 'Class 9th & 10th' },
              { id: 'oneonone', label: '1-on-1 Mentorship' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-lg border border-slate-800 scale-105'
                    : 'bg-white text-slate-800 border border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg sm:max-w-none mx-auto">
          {filteredPrograms.map((prog, idx) => {
            const IconComponent = prog.icon;
            
            if (prog.featured) {
              return (
                <ScrollReveal key={idx} delay={200} direction="up" className="lg:col-span-2">
                  <div className="bg-black text-white border-2 border-zinc-800 shadow-2xl rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300 h-full">
                    
                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800 mb-5 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 text-cyan-400 font-black flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase block">
                              {prog.category}
                            </span>
                            <span className="text-xs font-extrabold text-white">
                              Class 11, 12 & Droppers
                            </span>
                          </div>
                        </div>

                        <span className="bg-cyan-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-black" />
                          {prog.badgeText}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">
                        {prog.title}
                      </h3>

                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 font-medium max-w-xl relative z-10">
                        {prog.desc}
                      </p>

                      {/* Punchy Bullet Points */}
                      <div className="grid sm:grid-cols-2 gap-2.5 mb-5 relative z-10">
                        {prog.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 flex items-center gap-2 text-xs font-bold text-white">
                            <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 relative z-10 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {prog.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-extrabold bg-zinc-900 text-zinc-300 border border-zinc-800 px-2.5 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleRegister(prog.title)}
                        className="bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer ml-auto"
                      >
                        <span>{prog.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 text-slate-900 shadow-md hover:border-indigo-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/80 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded uppercase tracking-wider">
                        {prog.badgeText}
                      </span>
                    </div>

                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1">
                      {prog.category}
                    </span>

                    <h3 className="font-heading text-lg font-black text-slate-950 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed mb-4 font-medium">
                      {prog.desc}
                    </p>

                    {/* Punchy Bullets */}
                    <div className="space-y-2 mb-5 pt-2 border-t border-slate-100">
                      {prog.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                          <Zap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleRegister(prog.title)}
                      className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{prog.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
