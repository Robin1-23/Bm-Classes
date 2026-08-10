'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { PROGRAMS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function ProgramsSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const handleSeatLock = onOpenSeatLock || modal.openSeatLock;
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all' 
    ? PROGRAMS_DATA 
    : PROGRAMS_DATA.filter(p => p.categoryTypes && p.categoryTypes.includes(activeTab));

  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 relative overflow-hidden border-b border-slate-200/80" id="programs">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader 
          badgeText="ACADEMIC PROGRAMS"
          title="Courses built for top ranks"
          subtitle="Classroom coaching, 1-on-1 mentoring, adaptive testing, and same-day doubt clearing."
        />

        {/* Filter Tabs by Course Category (JEE, NEET, Foundation, 1-on-1) */}
        <ScrollReveal delay={150} direction="up">
          <div className="flex items-center gap-2 mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center px-1">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'jee', label: 'JEE (Main & Advanced)' },
              { id: 'neet', label: 'NEET UG Medical' },
              { id: 'foundation', label: 'Class 9th & 10th Foundation' },
              { id: 'oneonone', label: '1-on-1 Mentorship' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-lg border border-slate-800'
                    : 'bg-white text-slate-800 border border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-lg sm:max-w-none mx-auto">
          {filteredPrograms.map((prog, idx) => {
            const IconComponent = prog.icon;
            
            if (prog.featured) {
              return (
                <ScrollReveal key={idx} delay={200} direction="up" className="lg:col-span-2">
                  <div className="bg-black text-white border-2 border-zinc-800 shadow-2xl rounded-3xl p-7 sm:p-8 lg:p-9 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300 h-full">
                    
                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800 mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 text-cyan-400 font-black flex items-center justify-center shadow-md">
                            <IconComponent className="w-6 h-6 text-cyan-400" />
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

                        <span className="bg-cyan-400 text-slate-950 text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                          {prog.badgeText}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors relative z-10">
                        {prog.title}
                      </h3>

                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6 font-bold max-w-xl relative z-10">
                        {prog.desc}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-6 relative z-10">
                        {prog.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-3.5 flex items-center gap-2.5 text-xs font-extrabold text-white shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 shadow-xs shadow-cyan-300"></span>
                            <span className="text-white">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 relative z-10 space-y-4">
                      {/* Tags List */}
                      <div className="flex flex-wrap gap-2">
                        {prog.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-extrabold bg-zinc-900 text-white border border-zinc-800 px-3 py-1 rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-end w-full">
                        <Button variant="accent" showArrow onClick={() => handleRegister(prog.title)} className="w-full sm:w-auto text-center justify-center">
                          {prog.linkText}
                        </Button>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
                <div className="bg-white/90 backdrop-blur-xl border-2 border-slate-200/90 rounded-3xl p-7 shadow-lg shadow-indigo-950/5 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 hover:border-indigo-400 transition-all duration-300 relative group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200/80 flex items-center justify-center shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {prog.badgeText}
                      </span>
                    </div>

                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block mb-1">
                      {prog.category}
                    </span>

                    <h3 className="font-heading text-xl font-black text-slate-950 mb-2.5 group-hover:text-indigo-600 transition-colors leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                      {prog.desc}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-3 border-t border-slate-100">
                      {prog.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Button variant="dark" showArrow onClick={() => handleRegister(prog.title)} className="w-full">
                      {prog.linkText}
                    </Button>
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
