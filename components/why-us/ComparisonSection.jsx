import React from 'react';
import { Scale, X, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

const ROWS = [
  { topic: 'Who teaches', big: 'Senior faculty for the demo, juniors for daily classes', us: 'The HODs teach every class' },
  { topic: 'Batch size', big: '150 or more students in a hall', us: '10–15 students' },
  { topic: 'Doubts', big: 'A queue at the doubt counter', us: 'Solved the same day, on the board' },
  { topic: 'Practice', big: 'Hundreds of repetitive problems', us: '15 hand-picked questions per chapter' },
  { topic: 'Feedback', big: 'A rank list on the notice board', us: 'A weekly check-up with you and your parents' },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#f5f7ff] py-20 lg:py-28 border-b border-[#e3e8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Scale}
          badgeText="SIDE BY SIDE"
          title="Big coaching vs BM Classes."
          subtitle="Same syllabus. A very different year."
        />
        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal direction="up">
            <div className="h-full rounded-[28px] bg-white border border-slate-200/70 p-7 sm:p-9">
              <p className="text-sm font-semibold text-slate-500">A typical big institute</p>
              <ul className="mt-6 divide-y divide-slate-100">
                {ROWS.map((r) => (
                  <li key={r.topic} className="py-4 flex gap-4 md:min-h-[96px]">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">{r.topic}</p>
                      <p className="text-[15px] text-slate-500 mt-1">{r.big}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="up">
            <div className="h-full rounded-[28px] bg-[#0a0a0a] text-white p-7 sm:p-9">
              <p className="text-sm font-semibold text-amber-300">BM Classes</p>
              <ul className="mt-6 divide-y divide-white/10">
                {ROWS.map((r) => (
                  <li key={r.topic} className="py-4 flex gap-4 md:min-h-[96px]">
                    <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">{r.topic}</p>
                      <p className="text-[15px] font-semibold mt-1">{r.us}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
