'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PinnedNote from '@/components/ui/PinnedNote';
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

  return (
    <section className="bg-[#fafbfe] py-20 lg:py-28 border-b border-slate-200/80 relative overflow-hidden" id="admission-journey" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #e9edf6 39px 40px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeader 
          badgeText="HOW TO JOIN"
          title="Five steps from hello to the classroom."
          subtitle="No paperwork maze. You’ll know exactly what happens next, at every step."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10 max-w-6xl mx-auto pt-4">
          {steps.map((item, idx) => (
            <ScrollReveal key={item.title} delay={70 * (idx + 1)} direction="up">
              <PinnedNote index={idx} title={item.title}>{item.desc}</PinnedNote>
            </ScrollReveal>
          ))}
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
