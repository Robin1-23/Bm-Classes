import React from 'react';
import { Route } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import PinnedNote from '@/components/ui/PinnedNote';

const PHASES = [
  {
    months: 'Months 1–4',
    title: 'Build the foundations',
    points: ['Derive every Physics and Chemistry concept', 'NCERT Biology and Inorganic Chemistry, line by line', 'A weekly check of your mistakes', 'Board-exam answer writing'],
  },
  {
    months: 'Months 5–8',
    title: 'Learn the exam’s tricks',
    points: ['15 hand-picked JEE Advanced problems per topic', '25 years of JEE and NEET past papers, dissected', 'Multi-correct and matrix-match speed', 'Same-day doubt solving'],
  },
  {
    months: 'Months 9–12',
    title: 'Sharpen for exam day',
    points: ['Weekly full-length mock tests', 'Cut time loss and negative marking, question by question', 'A personal revision plan for weak topics', '1-on-1 strategy calls with the HODs'],
  },
];

export default function YearRoadmap() {
  return (
    <section
      className="bg-[#fafbfe] py-20 lg:py-28 border-b border-slate-200/80"
      style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #e9edf6 39px 40px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Route}
          badgeText="HOW THE YEAR RUNS"
          title="From first principles to exam day."
          subtitle="Three phases, each with a clear goal, so you always know what this month is for."
        />
        <ol className="grid md:grid-cols-3 gap-x-8 gap-y-10 pt-4">
          {PHASES.map((p, idx) => (
            <ScrollReveal key={p.title} delay={80 * idx} direction="up">
              <PinnedNote index={idx} label={p.months} title={p.title}>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </PinnedNote>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
