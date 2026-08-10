'use client';

import React from 'react';
import { Award, GraduationCap, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeFacultyBios() {
  const { openRegister } = useModal();

  const mentors = [
    {
      name: 'Dhirendra Pratap Singh',
      role: 'Director & HOD Mathematics',
      pedagogyFocus: 'JEE Advanced Math & Structural Symmetry',
      experience: '15+ Yrs Exp',
      exRole: 'Ex-HOD FIITJEE Gurgaon',
      education: 'IIT Graduate Alumni',
      topRanks: 'AIR 22, AIR 52, AIR 114',
      badgeBg: 'bg-indigo-600 text-white',
      bio: '15+ years cracking JEE Advanced math. Trains students to spot hidden structural symmetry in unseen exam questions within 45 seconds.',
      methods: [
        'Curates 15 high-yield Advanced Qs per chapter',
        'Elimination techniques for multi-correct Qs',
        'Weekly 1-on-1 math speed telemetry reviews',
      ],
      quote: '"Math in JEE Advanced is about recognizing structural symmetry in unseen questions in 45 seconds."',
    },
    {
      name: 'Bighnaraj Mishra',
      role: 'Senior HOD Chemistry',
      pedagogyFocus: 'Organic Mechanisms & Inorganic Mnemonics',
      experience: '20+ Yrs Exp',
      exRole: 'Ex-HOD VMC Gurgaon',
      education: 'NIT Rourkela Alumni',
      topRanks: 'AIR 18, AIR 102, AIR 350',
      badgeBg: 'bg-cyan-400 text-slate-950',
      bio: '20+ years mastering Chemistry. Eliminates rote memorization through first-principles electron push mechanisms & inorganic shortcuts.',
      methods: [
        'First-principles Organic reaction mechanisms',
        'NCERT Inorganic memory shortcuts & mnemonics',
        'Physical Chemistry numerical shortcut matrices',
      ],
      quote: '"Organic chemistry clicks the moment you understand electron flow. Stop memorizing reaction tables."',
    },
    {
      name: 'Abhimanyu Jangra',
      role: 'Senior Physics Faculty Lead',
      pedagogyFocus: 'Classical Mechanics & Electrodynamics',
      experience: '12+ Yrs Exp',
      exRole: 'Ex-FIITJEE Senior Faculty',
      education: 'NIT Graduate Alumni',
      topRanks: 'AIR 350, AIR 1146',
      badgeBg: 'bg-emerald-500 text-white',
      bio: '12+ years building physical intuition. Trains students to visualize 3D physics scenarios before applying calculus or vector algebra.',
      methods: [
        '3D multi-body vector diagram techniques',
        'High-yield numerical problem solving',
        'Same-day board resolution for complex physics',
      ],
      quote: '"Physics is physical intuition backed by mathematical precision. If you cannot visualize motion, formulas won’t save you."',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* SECTION HEADER */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-black tracking-widest uppercase text-cyan-900 bg-cyan-100 border border-cyan-200 px-3.5 py-1.5 rounded-full">
            FACULTY PEDAGOGY BREAKDOWN
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 mt-3">
            Learn Directly from Senior Ex-HODs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
            Zero junior TAs. Zero demo swaps. Dhirendra Sir & Mishra Sir teach 100% of lectures.
          </p>
        </ScrollReveal>

        {/* DETAILED MENTOR CARDS */}
        <div className="space-y-8">
          {mentors.map((m, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div className="bg-[#faf8f5] border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden group hover:border-indigo-400 transition-all">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Avatar & Credentials (4 cols) */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 text-cyan-300 font-heading font-black text-lg flex items-center justify-center shadow-xs">
                        {m.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${m.badgeBg}`}>
                          {m.exRole}
                        </span>
                        <h3 className="font-heading font-black text-slate-950 text-lg mt-0.5 leading-snug">
                          {m.name}
                        </h3>
                        <p className="text-xs font-bold text-indigo-600">{m.role}</p>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-2 text-xs font-bold text-slate-700 shadow-xs">
                      <div className="flex items-center gap-2 text-slate-900">
                        <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{m.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-900">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{m.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-900">
                        <Trophy className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{m.topRanks}</span>
                      </div>
                    </div>

                    <button
                      onClick={openRegister}
                      className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Book Call with {m.name.split(' ')[0]} Sir</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right Column: Bio & Pedagogy Methods (8 cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-indigo-600 block mb-0.5">
                        PEDAGOGY FOCUS
                      </span>
                      <h4 className="font-heading font-black text-slate-950 text-base mb-1.5">
                        {m.pedagogyFocus}
                      </h4>
                      <p className="text-slate-600 text-xs font-medium leading-relaxed">
                        {m.bio}
                      </p>
                    </div>

                    {/* Quote Box */}
                    <div className="bg-black text-white rounded-xl p-4 border border-zinc-800">
                      <p className="text-xs font-semibold italic text-cyan-300">
                        {m.quote}
                      </p>
                    </div>

                    {/* Core Teaching Methods */}
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">
                        Direct Delivery Pillars:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {m.methods.map((method, mIdx) => (
                          <div key={mIdx} className="bg-white border border-slate-200 rounded-lg p-2.5 text-[11px] font-bold text-slate-800 flex items-start gap-1.5 shadow-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
