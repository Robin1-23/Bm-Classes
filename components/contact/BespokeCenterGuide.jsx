'use client';

import React from 'react';
import { MapPin, Navigation, Clock, Phone, ShieldCheck, CheckCircle2, Calendar, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function BespokeCenterGuide() {
  const { openRegister, openSeatLock } = useModal();

  const diagnosticSteps = [
    {
      step: '01',
      title: '30-Minute Subject Diagnostic Test',
      desc: 'Student takes a short 30-minute diagnostic test evaluating fundamental conceptual clarity in Physics, Chemistry & Math.',
      icon: Calendar,
    },
    {
      step: '02',
      title: '1-on-1 Heatmap Review with Senior HOD',
      desc: 'Director Dhirendra Pratap Singh or Mishra Sir conducts a 1-on-1 review mapping exact calculation tendencies and weak chapters.',
      icon: UserCheck,
    },
    {
      step: '03',
      title: 'Customized Rank Roadmap & Seat Lock',
      desc: 'Receive a personalized study schedule and reserve your seat in the capped 10-15 student micro-batch for the 2026-27 academic session.',
      icon: ShieldCheck,
    },
  ];

  const landmarks = [
    {
      from: 'From Huda City Centre Metro Station',
      dist: '7 Minutes Drive (2.8 km)',
      desc: 'Drive straight via Sector 52 Main Road into Ardee City Gate 1. Take first left to Block B 38 Ground Floor.',
    },
    {
      from: 'From Golf Course Road / Sector 56',
      dist: '10 Minutes Drive (4.2 km)',
      desc: 'Head south towards Sector 52/53 road. Enter Ardee City Gate 2, near Ardee Mall.',
    },
    {
      from: 'From Sohna Road / Subhash Chowk',
      dist: '12 Minutes Drive (5.5 km)',
      desc: 'Take Netaji Subhash Marg towards Sector 52 Ardee City. Ample dedicated parent parking available.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* 1-ON-1 DIAGNOSTIC SESSION AGENDA */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CENTER COUNSELING PROCESS</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              What Happens During Your <span className="font-serif italic font-normal text-cyan-300">Center Visit?</span>
            </h2>
            <p className="text-zinc-300 text-sm font-medium mt-2">
              Book a 1-on-1 diagnostic counseling session at our Ardee City, Gurgaon center.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnosticSteps.map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={sIdx} delay={150 * (sIdx + 1)} direction="up">
                  <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-400 hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.2)] transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-cyan-400 border border-zinc-800 font-black flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xl font-black text-zinc-400">
                          #{step.step}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-white text-lg mb-2">
                        {step.title}
                      </h3>

                      <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-zinc-800 text-xs font-extrabold text-cyan-400 flex items-center gap-1">
                      <span>Ex-HOD Direct Session</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* DIRECTIONS & LANDMARKS CARD */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>GURGAON STUDIO DIRECTIONS</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                How to Reach <span className="font-serif italic font-normal text-cyan-300">BmClasses Ardee City</span>
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed">
                Located on the Ground Floor of B 38, Ardee City, Sector 52. Conveniently accessible from all major Gurgaon hubs with dedicated parent parking.
              </p>

              <div className="pt-4 space-y-3">
                <a
                  href={CENTER_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-black" />
                  <span>Open 1-Tap Google Maps Navigation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {landmarks.map((lm, lIdx) => (
                <div key={lIdx} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-1 hover:border-cyan-400/60 transition-all">
                  <div className="flex items-center justify-between text-xs font-black text-cyan-300">
                    <span>{lm.from}</span>
                    <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/80">
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
