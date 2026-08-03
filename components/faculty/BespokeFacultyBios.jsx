'use client';

import React from 'react';
import { Award, GraduationCap, Clock, Trophy, ShieldCheck, CheckCircle2, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeFacultyBios() {
  const { openRegister } = useModal();

  const mentors = [
    {
      name: 'Dhirendra Pratap Singh',
      role: 'Director & HOD Mathematics',
      pedagogyFocus: 'JEE Advanced Mathematics & Structural Symmetry',
      experience: '15+ Years Direct HOD Experience',
      exRole: 'Ex-HOD FIITJEE Gurgaon',
      education: 'IIT Graduate Alumni',
      topRanks: 'AIR 22, AIR 52, AIR 114 Mentored',
      badgeBg: 'bg-indigo-600 text-white',
      bio: 'Dhirendra Sir has dedicated 15+ years to cracking the code of JEE Advanced mathematics. His teaching philosophy eliminates mindless formula memorization, training students to decode the hidden structural symmetry in unseen exam questions.',
      methods: [
        'Curates 15 high-yield Advanced questions per chapter',
        'Teaches rapid elimination techniques for multi-correct questions',
        'Conducts 1-on-1 math speed telemetry reviews weekly',
      ],
      quote: '"Math in JEE Advanced is not about how many questions you solve, but about recognizing the underlying pattern in unseen questions within 45 seconds."',
    },
    {
      name: 'Bighnaraj Mishra',
      role: 'Senior HOD Chemistry',
      pedagogyFocus: 'Physical, Organic & Inorganic Mechanisms',
      experience: '20+ Years Senior Teaching Lead',
      exRole: 'Ex-HOD VMC Gurgaon',
      education: 'NIT Rourkela Alumni',
      topRanks: 'AIR 18, AIR 102, AIR 350 Mentored',
      badgeBg: 'bg-amber-400 text-slate-950',
      bio: 'With over two decades of experience, Mishra Sir is renowned across Gurgaon for transforming Organic Chemistry from a dreaded subject into a guaranteed scoring section through electron push mechanisms and memory shortcuts.',
      methods: [
        'Teaches Organic reaction mechanisms from first principles',
        'Provides NCERT line-by-line Inorganic memory mnemonics',
        'Physical Chemistry numerical shortcut matrices',
      ],
      quote: '"Organic chemistry clicks the moment you understand electron flow. Stop memorizing reaction tables — master the movement of electrons."',
    },
    {
      name: 'Abhimanyu Jangra',
      role: 'Senior Physics Faculty Lead',
      pedagogyFocus: 'Classical Mechanics, Electrodynamics & Modern Physics',
      experience: '12+ Years Physics Lead',
      exRole: 'Ex-FIITJEE Senior Faculty',
      education: 'NIT Graduate Alumni',
      topRanks: 'AIR 350, AIR 1146 Mentored',
      badgeBg: 'bg-emerald-500 text-white',
      bio: 'Abhimanyu Sir bridges the gap between physical intuition and mathematical equations. He trains students to visualize physical scenarios in 3D before applying differential calculus or vector algebra.',
      methods: [
        'Visual multi-body vector diagram techniques',
        'High-yield numerical problem-solving for JEE & NEET',
        'Same-day board resolution for complex physics problems',
      ],
      quote: '"Physics is physical intuition backed by mathematical precision. If you cannot visualize the motion, no formula will save you."',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* SECTION HEADER */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-widest uppercase text-amber-800 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
            FACULTY PEDAGOGY BREAKDOWN
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-950 mt-3">
            Deep-Dive Into Our Ex-HOD Mentorship Philosophy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium mt-2 leading-relaxed">
            At BmClasses, you are taught 100% directly by senior HODs who have mentored top AIR 18, 22, and 52 ranks. Zero junior TAs, zero demo swaps.
          </p>
        </ScrollReveal>

        {/* DETAILED MENTOR CARDS */}
        <div className="space-y-12">
          {mentors.map((m, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div className="bg-gradient-to-br from-[#faf8f5] via-white to-indigo-50/40 border-2 border-slate-200/90 rounded-3xl p-7 sm:p-10 shadow-lg relative overflow-hidden group hover:border-indigo-400 transition-all">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Avatar & Credentials (4 cols) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 font-heading font-black text-xl flex items-center justify-center shadow-md">
                        {m.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${m.badgeBg}`}>
                          {m.exRole}
                        </span>
                        <h3 className="font-heading font-black text-slate-950 text-xl mt-1 leading-snug">
                          {m.name}
                        </h3>
                        <p className="text-xs font-bold text-indigo-600">{m.role}</p>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5 text-xs font-bold text-slate-700 shadow-xs">
                      <div className="flex items-center gap-2 text-slate-900">
                        <Award className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{m.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-900">
                        <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{m.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-900">
                        <Trophy className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{m.topRanks}</span>
                      </div>
                    </div>

                    <button
                      onClick={openRegister}
                      className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Book Diagnostic Call with {m.name.split(' ')[0]} Sir</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right Column: Detailed Bio & Pedagogy Methods (8 cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">
                        SUBJECT PEDAGOGY FOCUS
                      </span>
                      <h4 className="font-heading font-black text-slate-950 text-lg sm:text-xl mb-3">
                        {m.pedagogyFocus}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                        {m.bio}
                      </p>
                    </div>

                    {/* Quote Box */}
                    <div className="bg-indigo-950 text-white rounded-2xl p-5 border border-indigo-800/80 shadow-md">
                      <p className="text-xs sm:text-sm font-semibold italic text-amber-300">
                        {m.quote}
                      </p>
                    </div>

                    {/* Core Teaching Methods */}
                    <div>
                      <h5 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                        Direct Classroom Delivery Pillars:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {m.methods.map((method, mIdx) => (
                          <div key={mIdx} className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs font-bold text-slate-800 flex items-start gap-2 shadow-xs">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
