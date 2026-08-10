'use client';

import React from 'react';
import { MessageSquare, Calendar, Target, CheckCircle2, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';

export default function AdmissionJourneySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  const steps = [
    {
      step: '01',
      title: 'Quick Enquiry',
      desc: 'Submit student details or WhatsApp us. Our academic desk contacts you within 2 hours.',
      icon: MessageSquare,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      step: '02',
      title: '1-on-1 Counseling',
      desc: 'Meet Ex-HOD mentors at our Gurgaon center or online to discuss target goals & syllabus.',
      icon: UserCheck,
      color: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    },
    {
      step: '03',
      title: 'Diagnostic Test',
      desc: '30-minute diagnostic test evaluating fundamental conceptual clarity in Physics, Chemistry & Math.',
      icon: Target,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      step: '04',
      title: 'Demo Class & Feedback',
      desc: 'Experience our small-batch digital board pedagogy and receive a detailed diagnostic feedback report.',
      icon: Calendar,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      step: '05',
      title: 'Micro-Batch Admission',
      desc: 'Select preferred timing and complete enrolment in our capped 10-15 student micro-batch.',
      icon: CheckCircle2,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80 relative overflow-hidden" id="admission-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeader 
          badgeText="CLEAR ADMISSION FLOW"
          title="Simple 5-step journey to your target rank"
          subtitle="No complex procedures. Know exactly what to expect from first contact to batch enrolment."
        />

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-10">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} delay={100 * (idx + 1)} direction="up">
                <div className="bg-white/80 backdrop-blur-xl border-2 border-slate-200/90 rounded-3xl p-5 flex flex-col justify-between shadow-lg shadow-indigo-950/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-500 hover:bg-white/95 transition-all h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-black shadow-xs ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-400">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-base text-slate-950 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200/60 text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <span>Phase {idx + 1}</span>
                    {idx < steps.length - 1 && <ArrowRight className="w-3 h-3 text-indigo-500" />}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Bar */}
        <ScrollReveal delay={300} direction="up" className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-slate-950 text-white p-4 sm:p-5 rounded-2xl sm:rounded-full border border-slate-800 shadow-xl max-w-2xl mx-auto w-full">
            <span className="text-xs sm:text-sm font-extrabold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Ready to start Step 1? Takes only 30 seconds.</span>
            </span>
            <button
              onClick={() => handleRegister()}
              className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              Start Free Enquiry
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
