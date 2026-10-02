'use client';

import React from 'react';
import { ArrowRight, MessageCircle, UserRound, ClipboardCheck, Presentation, GraduationCap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useModal } from '@/context/ModalContext';
import { CENTER_INFO } from '@/data/contentData';

const STEPS = [
  { title: 'Say hello', desc: 'Fill a short form or WhatsApp us. We call you back within 2 hours.', icon: MessageCircle, tint: 'bg-[#f3f1ff]', ink: 'text-indigo-600' },
  { title: 'Meet a HOD', desc: 'Talk through your goals and syllabus, at a centre near you or online.', icon: UserRound, tint: 'bg-[#eef7ea]', ink: 'text-emerald-600' },
  { title: 'Take a short test', desc: 'A 30-minute check of your basics in your subject, so the advice is about you.', icon: ClipboardCheck, tint: 'bg-[#fdf4e6]', ink: 'text-amber-600' },
  { title: 'Try a class', desc: 'Sit in on a real class and get honest feedback on where you stand.', icon: Presentation, tint: 'bg-[#fbf0ee]', ink: 'text-rose-600' },
  { title: 'Join your batch', desc: 'Pick a timing that suits you and take your seat in a batch of 10–15.', icon: GraduationCap, final: true },
];

function StepCard({ step, idx }) {
  const Icon = step.icon;
  if (step.final) {
    return (
      <article className="h-full rounded-[28px] bg-[#0a0a0a] text-white p-6 flex flex-col">
        <span className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 mt-6">Step {idx + 1}</p>
        <h3 className="font-heading font-semibold text-2xl tracking-[-0.02em] mt-1">{step.title}</h3>
        <p className="text-[15px] text-white/70 leading-relaxed mt-2">{step.desc}</p>
      </article>
    );
  }
  return (
    <article className="h-full rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
      <div className={`h-full rounded-[22px] ${step.tint} p-5 flex flex-col`}>
        <span className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center ${step.ink}`}>
          <Icon className="w-6 h-6" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mt-6">Step {idx + 1}</p>
        <h3 className="font-heading font-semibold text-2xl tracking-[-0.02em] text-slate-950 mt-1">{step.title}</h3>
        <p className="text-[15px] text-slate-600 leading-relaxed mt-2">{step.desc}</p>
      </div>
    </article>
  );
}

export default function AdmissionJourneySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  return (
    <section
      id="admission-journey"
      className="bg-[#fafbfe] py-20 lg:py-28 border-b border-slate-200/80"
      style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #eef1f8 39px 40px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="HOW TO JOIN"
          title="Five steps from hello to the classroom."
          subtitle="No paperwork maze. You’ll know exactly what happens next, at every step."
        />

        {/* Desktop: numbered track above the cards */}
        <div className="hidden xl:grid grid-cols-5 gap-5 mb-5" aria-hidden="true">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="relative flex items-center">
              <span className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm ${step.final ? 'bg-amber-300 text-black' : 'bg-slate-950 text-white'}`}>
                {idx + 1}
              </span>
              {idx < STEPS.length - 1 && <span className="absolute left-10 right-[-1.25rem] h-0.5 bg-[repeating-linear-gradient(to_right,#cbd5e1_0_8px,transparent_8px_14px)]" />}
            </div>
          ))}
        </div>

        {/* Cards: a grid on desktop, a vertical timeline on smaller screens */}
        <ol className="grid xl:grid-cols-5 gap-5 relative">
          <span className="xl:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-[repeating-linear-gradient(to_bottom,#cbd5e1_0_8px,transparent_8px_14px)]" aria-hidden="true" />
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.title} delay={70 * idx} direction="up">
              <li className="list-none h-full flex gap-4 xl:block">
                <span className={`xl:hidden relative z-10 w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-heading font-bold text-sm mt-4 ${step.final ? 'bg-amber-300 text-black' : 'bg-slate-950 text-white'}`}>
                  {idx + 1}
                </span>
                <div className="flex-1 h-full">
                  <StepCard step={step} idx={idx} />
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal delay={200} direction="up">
          <div className="mt-12 rounded-[28px] bg-white border border-slate-200/70 p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-slate-950 leading-tight">
                Ready for step 1?
                <span className="text-slate-400"> It takes about 30 seconds.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleRegister()}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Start with step 1 <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={CENTER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
