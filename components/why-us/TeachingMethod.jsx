import React from 'react';
import { Lightbulb } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const METHODS = [
  {
    subject: 'Maths',
    lead: 'Spot the pattern',
    soft: 'before you solve.',
    desc: 'Learn to see the hidden symmetry in an unseen JEE Advanced question, so the solving takes seconds, not pages.',
    tint: 'bg-[#f3f1ff]',
  },
  {
    subject: 'Chemistry',
    lead: 'Follow the electrons,',
    soft: 'skip the tables.',
    desc: 'Organic reactions taught through how electrons move. Understand one mechanism and dozens of reactions make sense.',
    tint: 'bg-[#eef7ea]',
  },
  {
    subject: 'Physics',
    lead: 'Picture it first,',
    soft: 'then write equations.',
    desc: 'Build the physical intuition for a problem before reaching for calculus, so you know which equation to write.',
    tint: 'bg-[#fdf4e6]',
  },
];

export default function TeachingMethod() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#e3e8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Lightbulb}
          badgeText="HOW WE TEACH"
          title="Understand it. Don’t memorise it."
          subtitle="Every subject starts from first principles, so a twist in the exam doesn’t throw you."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {METHODS.map((m, idx) => (
            <ScrollReveal key={m.subject} delay={80 * idx} direction="up">
              <article className="h-full rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
                <div className={`h-full rounded-[22px] ${m.tint} p-7 flex flex-col min-h-[300px]`}>
                  <p className="text-sm font-semibold text-slate-700">{m.subject}</p>
                  <h3 className="font-heading font-semibold text-[28px] leading-[1.1] tracking-[-0.025em] text-slate-900 mt-5">
                    {m.lead}
                    <span className="block text-slate-400">{m.soft}</span>
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed mt-auto pt-6">{m.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
