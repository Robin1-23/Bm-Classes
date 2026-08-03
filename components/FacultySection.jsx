'use client';

import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function FacultySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 border-b border-slate-200/80 relative overflow-hidden" id="faculty">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader 
          badgeText="EX-HOD FACULTY"
          title="Mentored directly by Ex-HODs"
          subtitle="No junior assistants. Learn 100% directly from Ex-HODs with 40+ years experience."
        />

        {/* SENIOR MENTOR CREDENTIAL DOSSIER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-lg sm:max-w-none mx-auto">
          {MENTORS_DATA.map((mentor, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div className="bg-white border-2 border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  {/* Dark Banner Header */}
                  <div className="bg-[#090d16] text-white p-6 relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-heading font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                        {mentor.initials}
                      </div>

                      <div>
                        <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border mb-1 ${mentor.badgeBg}`}>
                          {mentor.role}
                        </span>
                        <h3 className="font-heading font-black text-lg text-white group-hover:text-amber-400 transition-colors leading-tight">
                          {mentor.name}
                        </h3>
                        <p className="text-[11px] font-medium text-slate-300 mt-0.5">
                          {mentor.subject}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Card Body */}
                  <div className="p-6">
                    {/* Credentials Grid */}
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {mentor.credentials.map((cred, cIdx) => {
                        const CredIcon = cred.icon;
                        return (
                          <div 
                            key={cIdx}
                            className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2 text-[11px] font-extrabold text-slate-900"
                          >
                            <CredIcon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span className="truncate">{cred.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium mb-5">
                      {mentor.bio}
                    </p>

                    {/* Ex-HOD Pedagogy Quote Block */}
                    <div className="bg-[#fefce8] border border-amber-200/90 rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                        <span>HOD Pedagogy Insight</span>
                      </div>
                      <p className="text-slate-800 text-xs italic font-medium leading-relaxed">
                        "{mentor.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="p-6 pt-0">
                  <Button variant="dark" icon={MessageCircle} onClick={handleRegister} className="w-full">
                    Book Counseling with Mentor
                  </Button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
