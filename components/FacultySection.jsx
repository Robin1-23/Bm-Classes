'use client';

import React from 'react';
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function FacultySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  const cardThemes = [
    { bg: 'bg-[#f8fafc]', border: 'border-slate-200/90 hover:border-indigo-500', badge: 'bg-indigo-600 text-white' },
    { bg: 'bg-[#f0fdf4]', border: 'border-emerald-200/90 hover:border-emerald-500', badge: 'bg-emerald-600 text-white' },
    { bg: 'bg-[#eef2ff]', border: 'border-indigo-200/90 hover:border-indigo-500', badge: 'bg-indigo-600 text-white' },
    { bg: 'bg-[#faf5ff]', border: 'border-purple-200/90 hover:border-purple-500', badge: 'bg-purple-600 text-white' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80 relative overflow-hidden" id="faculty">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-50/80 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-cyan-50/80 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          badgeIcon={Sparkles}
          badgeText="100% EX-HOD DIRECT FACULTY"
          title="Mentored directly by Senior Ex-HODs"
          subtitle="Zero junior teaching assistants. Learn 100% directly from Ex-HODs of FIITJEE & VMC."
        />

        {/* FACULTY CARDS WITH 3D SHADOW & VERY LIGHT BACKGROUNDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-lg sm:max-w-none mx-auto">
          {MENTORS_DATA.map((mentor, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <ScrollReveal key={idx} delay={100 * (idx + 1)} direction="up">
                <div className={`${theme.bg} ${theme.border} border-2 rounded-3xl p-5 sm:p-5 flex flex-col justify-between shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08),0_8px_12px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_22px_45px_-10px_rgba(99,102,241,0.22)] hover:-translate-y-2.5 transition-all duration-300 h-full group relative overflow-hidden`}>
                  
                  <div>
                    {/* Top Avatar & Experience Row */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/70 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white font-heading font-black text-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          {mentor.initials}
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                      </div>

                      <span className={`inline-flex items-center gap-1 ${theme.badge} px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs`}>
                        <ShieldCheck className="w-3 h-3 text-white" />
                        {mentor.exp}
                      </span>
                    </div>

                    {/* Name, Role & Subject Header */}
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-0.5">
                        {mentor.role}
                      </span>

                      <h3 className="font-heading font-black text-base sm:text-lg text-slate-950 group-hover:text-indigo-600 transition-colors leading-snug mb-1.5">
                        {mentor.name}
                      </h3>

                      <p className="text-[11px] text-slate-800 font-extrabold bg-white border border-slate-200/90 px-2.5 py-1 rounded-xl inline-block shadow-2xs">
                        {mentor.subject}
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 mb-4">
                      {mentor.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="bg-white border border-slate-200/70 rounded-xl p-2 flex items-center gap-2 text-xs font-bold text-slate-800 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pedagogy Insight */}
                    <div className="bg-white border-l-3 border-indigo-600 p-2.5 rounded-r-xl mb-4 shadow-2xs">
                      <div className="text-[9px] font-black uppercase tracking-wider text-indigo-600 mb-0.5">
                        Pedagogy Insight
                      </div>
                      <p className="font-serif italic font-normal text-slate-700 text-xs leading-snug">
                        "{mentor.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pt-2 border-t border-slate-200/60">
                    <button
                      onClick={() => handleRegister(mentor.name)}
                      className="w-full bg-slate-950 hover:bg-indigo-600 text-white font-extrabold text-xs py-3 px-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer group-hover:bg-indigo-600"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>Book Counseling</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
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
