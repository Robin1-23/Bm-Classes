import React from 'react';
import { CalendarCheck, Car } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import PinnedNote from '@/components/ui/PinnedNote';

const STEPS = [
  { title: 'Meet the HOD', desc: 'Sit down with BM Sir or Konika Ma’am and talk through your goals, school and syllabus.' },
  { title: 'A short check of your basics', desc: 'A 30-minute check in Physics, Chemistry and Maths, so the advice is about you, not a brochure.' },
  { title: 'Your plan and batch', desc: 'Leave with a study plan, and the right course and batch timing for you.' },
];

const ROUTES = [
  { from: 'Sector 45 centre', how: 'Head towards Delhi Public School, Sector 45. Ayyachi Apartment is in Uday Nagar, Block C. Look for Flat 303.', tint: 'bg-[#f3f1ff]' },
  { from: 'Malibu Towne centre', how: 'OD-55, inside Malibu Towne, Sector 47. Pick this centre above and tap Directions.', tint: 'bg-[#eef7ea]' },
  { from: 'Sector 46 centre', how: 'House 2423, Sector 46. Pick this centre above and tap Directions for turn-by-turn navigation.', tint: 'bg-[#fdf4e6]' },
];

export default function VisitGuide() {
  return (
    <>
      <section
        className="bg-[#fafbfe] py-20 lg:py-28 border-b border-slate-200/80"
        style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #e9edf6 39px 40px)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badgeIcon={CalendarCheck}
            badgeText="YOUR FIRST VISIT"
            title="What happens when you visit."
            subtitle="Three steps, one visit. Book a time on WhatsApp before you come."
          />
          <ol className="grid md:grid-cols-3 gap-x-8 gap-y-10 pt-4">
            {STEPS.map((s, idx) => (
              <ScrollReveal key={s.title} delay={80 * idx} direction="up">
                <PinnedNote index={idx} title={s.title}>{s.desc}</PinnedNote>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f5f7ff] py-20 lg:py-28 border-b border-[#e3e8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badgeIcon={Car}
            badgeText="GETTING HERE"
            title="How to reach us."
            subtitle="Three centres close to each other in south Gurugram. Choose whichever is nearest."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {ROUTES.map((r, idx) => (
              <ScrollReveal key={r.from} delay={80 * idx} direction="up">
                <article className="h-full rounded-[28px] bg-white p-2 border border-slate-200/70">
                  <div className={`h-full rounded-[22px] ${r.tint} p-6`}>
                    <h3 className="font-heading font-semibold text-xl tracking-[-0.015em] text-slate-900">{r.from}</h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed mt-3">{r.how}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
