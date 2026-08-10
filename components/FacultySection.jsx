'use client';

import React from 'react';
import { MessageCircle, CheckCircle2, Award, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function FacultySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 border-b border-slate-200/80 relative overflow-hidden" id="faculty">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          badgeText="EX-HOD FACULTY"
          title="Mentored directly by Ex-HODs"
          subtitle="No junior assistants. Learn 100% directly from Ex-HODs with 20+ years experience."
        />

        {/* SENIOR MENTOR DOSSIER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-lg sm:max-w-none mx-auto">
          {MENTORS_DATA.map((mentor, idx) => (
            <ScrollReveal key={idx} delay={100 * (idx + 1)} direction="up">
              <div className="bg-white border-2 border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between group h-full">
                
                <div>
                  {/* Dark Banner Header */}
                  <div className="bg-[#090d16] text-white p-5 relative overflow-hidden">
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 font-heading font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                        {mentor.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${mentor.badgeBg}`}>
                            {mentor.exp}
                          </span>
                        </div>

                        <h3 className="font-heading font-black text-base text-white group-hover:text-cyan-300 transition-colors leading-snug truncate">
                          {mentor.name}
                        </h3>

                        <p className="text-[10px] font-bold text-cyan-400/90 truncate">
                          {mentor.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Card Body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Subject Tag */}
                    <div className="bg-indigo-50/80 border border-indigo-100 p-2.5 rounded-xl text-center">
                      <span className="text-[11px] font-extrabold text-indigo-950 block">
                        {mentor.subject}
                      </span>
                    </div>

                    {/* Punchy Key Highlights List */}
                    <div className="space-y-2">
                      {mentor.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* One-Line Teaching Insight */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-[11px] font-medium text-slate-700 leading-relaxed italic">
                      "{mentor.tagline}"
                    </div>

                  </div>
                </div>

                {/* Action CTA */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleRegister(mentor.name)}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Book Counseling</span>
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
