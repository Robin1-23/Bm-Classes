'use client';

import React from 'react';
import { MapPin, Navigation, ShieldCheck, Calendar, UserCheck, ArrowRight, Sparkles, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { CENTER_INFO } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function BespokeCenterGuide() {
  const { openRegister } = useModal();

  const diagnosticSteps = [
    {
      step: '01',
      title: '30-Min Subject Diagnostic',
      desc: 'Evaluate core clarity in Physics, Chemistry & Math.',
      icon: Calendar,
      bullets: ['30-minute test', 'Identify gap areas'],
    },
    {
      step: '02',
      title: '1-on-1 Heatmap Review',
      desc: 'Director Dhirendra Sir or Mishra Sir maps calculation speed.',
      icon: UserCheck,
      bullets: ['Direct HOD review', 'Weak-topic heatmap'],
    },
    {
      step: '03',
      title: 'Rank Roadmap & Seat Lock',
      desc: 'Personalized schedule & reserve 10–15 batch seat.',
      icon: ShieldCheck,
      bullets: ['Custom study schedule', 'Reserve micro-batch seat'],
    },
  ];

  const landmarks = [
    {
      from: 'From Huda City Centre Metro',
      dist: '5 Mins (1.8 km)',
      desc: 'Drive via Sector 45 Main Road towards DPS-45 School. House no - 1411p, 1st floor.',
    },
    {
      from: 'From Golf Course Road / Sec 43',
      dist: '7 Mins (2.5 km)',
      desc: 'Head west via Golf Course Road into Sector 45. Located near DPS-45 School.',
    },
    {
      from: 'From Sohna Road / Subhash Chowk',
      dist: '10 Mins (4.0 km)',
      desc: 'Via Netaji Subhash Marg towards Sector 45. Dedicated parent parking available.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-950 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        
        {/* 1-ON-1 DIAGNOSTIC SESSION AGENDA */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>CENTER COUNSELING PROCESS</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              What Happens During Your <span className="font-serif italic font-normal text-indigo-600">Center Visit?</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosticSteps.map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={sIdx} delay={150 * (sIdx + 1)} direction="up">
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-indigo-400 transition-all shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)] h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 font-black flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-lg font-black text-slate-400">
                          #{step.step}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-slate-950 text-base mb-1">
                        {step.title}
                      </h3>

                      <p className="text-slate-600 text-xs font-medium leading-relaxed mb-3">
                        {step.desc}
                      </p>

                      {/* Bullets */}
                      <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                        {step.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <Zap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100 text-xs font-black text-indigo-600 flex items-center gap-1">
                      <span>Ex-HOD Direct Session</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* DIRECTIONS & LANDMARKS CARD */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-black uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>GURGAON CENTER DIRECTIONS</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                How to Reach <span className="font-serif italic font-normal text-cyan-300">Chemistry classes by BM sir</span>
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed">
                House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon. Easy access with dedicated parent parking.
              </p>

              <div className="pt-2">
                <a
                  href={CENTER_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs px-5 py-3.5 rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Open 1-Tap Google Maps Navigation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2.5">
              {landmarks.map((lm, lIdx) => (
                <div key={lIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 hover:border-slate-700 transition-all">
                  <div className="flex items-center justify-between text-xs font-black text-cyan-300 mb-0.5">
                    <span>{lm.from}</span>
                    <span className="font-mono text-[10px] text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {lm.dist}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-xs font-medium">
                    {lm.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
