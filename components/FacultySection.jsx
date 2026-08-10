'use client';

import React from 'react';
import { MessageCircle, ShieldCheck, Award, GraduationCap, Trophy, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function FacultySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  return (
    <section className="bg-[#070a11] py-20 sm:py-28 border-b border-slate-800/90 relative overflow-hidden text-white" id="faculty">
      
      {/* Ambient Radial Atmosphere Glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          dark
          badgeIcon={Sparkles}
          badgeText="100% EX-HOD DIRECT FACULTY"
          title="Mentored directly by Senior Ex-HODs"
          subtitle="Zero junior teaching assistants. Learn 100% directly from Ex-HODs of FIITJEE & VMC."
        />

        {/* ULTRA-PREMIUM FACULTY DOSSIER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-lg sm:max-w-none mx-auto">
          {MENTORS_DATA.map((mentor, idx) => (
            <ScrollReveal key={idx} delay={120 * (idx + 1)} direction="up">
              <div className="bg-gradient-to-b from-[#0e1626] via-[#090d16] to-[#090d16] border-2 border-slate-800/90 hover:border-cyan-400/60 rounded-3xl p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden">
                
                {/* Top Subtle Ambient Glow */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/20 transition-all"></div>

                <div>
                  {/* Top Avatar & Experience Row */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-5 relative z-10">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-cyan-400 to-teal-300 text-slate-950 font-heading font-black text-xl flex items-center justify-center shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform">
                        {mentor.initials}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full"></span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      {mentor.exp}
                    </span>
                  </div>

                  {/* Name, Role & Subject Header */}
                  <div className="mb-5 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 block mb-1">
                      {mentor.role}
                    </span>

                    <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors leading-tight mb-2">
                      {mentor.name}
                    </h3>

                    <p className="text-xs text-slate-300 font-semibold bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl inline-block">
                      {mentor.subject}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5 relative z-10">
                    {mentor.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-2.5 flex items-center gap-2.5 text-xs font-bold text-slate-200 group-hover:border-slate-700 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Editorial Teaching Insight in Instrument Serif */}
                  <div className="bg-cyan-950/20 border-l-2 border-cyan-400 pl-3 py-2 pr-2 rounded-r-xl mb-6 relative z-10">
                    <div className="text-[9px] font-black uppercase tracking-wider text-cyan-400 mb-0.5">
                      Pedagogy Insight
                    </div>
                    <p className="font-serif italic font-normal text-slate-200 text-sm leading-snug">
                      "{mentor.tagline}"
                    </p>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2 relative z-10">
                  <button
                    onClick={() => handleRegister(mentor.name)}
                    className="w-full bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-black text-xs py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-950/60 cursor-pointer group-hover:shadow-cyan-400/20"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>Book Counseling with Mentor</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
