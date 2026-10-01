'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';

export default function AdmissionJourneySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  const steps = [
    { title: 'Say hello', desc: 'Fill a short form or WhatsApp us. We call you back within 2 hours.' },
    { title: 'Meet a HOD', desc: 'Talk through your goals and syllabus, at the Gurgaon centre or online.' },
    { title: 'Take a short test', desc: 'A 30-minute check of your basics in Physics, Chemistry and Maths.' },
    { title: 'Try a class', desc: 'Sit in on a real class and get honest feedback on where you stand.' },
    { title: 'Join your batch', desc: 'Pick a timing that suits you and take your seat in a batch of 10–15.' },
  ];

  const NOTES = [
    { tint: 'bg-[#fff1e8]', ink: 'text-orange-500', pin: '#f97316', tilt: '-rotate-2' },
    { tint: 'bg-[#eef1ff]', ink: 'text-indigo-500', pin: '#4f46e5', tilt: 'rotate-[1.5deg]' },
    { tint: 'bg-[#f6ecff]', ink: 'text-violet-500', pin: '#7c3aed', tilt: '-rotate-1' },
    { tint: 'bg-[#fff1e8]', ink: 'text-orange-500', pin: '#f97316', tilt: 'rotate-2' },
    { tint: 'bg-[#eef1ff]', ink: 'text-indigo-500', pin: '#4f46e5', tilt: '-rotate-[1.5deg]' },
  ];

  return (
    <section className="bg-[#fafbfe] py-20 lg:py-28 border-b border-slate-200/80 relative overflow-hidden" id="admission-journey" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #e9edf6 39px 40px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeader 
          badgeText="HOW TO JOIN"
          title="Five steps from hello to the classroom."
          subtitle="No paperwork maze. You’ll know exactly what happens next, at every step."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10 max-w-6xl mx-auto pt-4">
          {steps.map((item, idx) => {
            const note = NOTES[idx % NOTES.length];
            return (
              <ScrollReveal key={item.title} delay={70 * (idx + 1)} direction="up">
                <li className={`relative list-none pt-4 ${note.tilt} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}>
                  {/* pin */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full shadow-[0_6px_10px_-2px_rgba(15,23,42,0.35)]"
                    style={{ background: `radial-gradient(circle at 35% 30%, #fff8 0 18%, ${note.pin} 40%)` }}
                  />
                  <div className="rounded-[22px] bg-white p-2 shadow-[0_22px_40px_-22px_rgba(15,23,42,0.45)] border border-slate-100">
                    <div className={`rounded-[16px] ${note.tint} px-5 pt-7 pb-6 min-h-[200px]`}>
                      <span className={`font-heading font-medium text-3xl tracking-tight ${note.ink}`}>{String(idx + 1).padStart(2, '0')}</span>
                      <h3 className="font-heading font-semibold text-xl tracking-[-0.015em] text-slate-950 mt-2">{item.title}</h3>
                      <p className="text-[15px] text-slate-600 leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            );
          })}
        </ol>

        <ScrollReveal delay={300} direction="up" className="text-center mt-14">
          <button
            onClick={() => handleRegister()}
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Start with step 1
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-sm text-slate-500 mt-3">Takes about 30 seconds.</p>
        </ScrollReveal>

      </div>
    </section>
  );
}
