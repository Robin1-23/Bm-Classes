'use client';

import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';
import { SITE_CONTENT } from '@/data/siteContent';

const TINTS = ['bg-[#f3f1ff]', 'bg-[#fdf4e6]', 'bg-[#eef7ea]', 'bg-[#eef4ff]', 'bg-[#fbf0ee]', 'bg-[#fefbe8]'];

// "Class 12 · JEE & NEET" -> ["Class 12", "JEE & NEET"]
const splitName = (name) => {
  const i = name.indexOf(' · ');
  return i > 0 ? [name.slice(0, i), name.slice(i + 3)] : [name, ''];
};

const Detail = ({ label, value }) => (
  <div>
    <dt className="text-xs text-slate-500">{label}</dt>
    <dd className={`text-sm font-semibold mt-0.5 ${value ? 'text-slate-900' : 'text-slate-400'}`}>{value || 'Ask us'}</dd>
  </div>
);

export default function BatchTimetable() {
  const { openRegister } = useModal();
  const { batches } = SITE_CONTENT;

  return (
    <section id="timetable" className="bg-[#f5f7ff] py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={CalendarDays}
          badgeText="TIMETABLE & FEES"
          title="When batches start, and what they cost."
          subtitle="Every batch is capped at 15 students. Fees include study material, tests and doubt sessions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {batches.map((b, idx) => {
            const [lead, soft] = splitName(b.name);
            return (
              <ScrollReveal key={b.id} delay={60 * idx} direction="up">
                <article className="group h-full flex flex-col rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
                  <button
                    onClick={() => openRegister(b.name)}
                    className={`flex-1 text-left rounded-[22px] ${TINTS[idx % TINTS.length]} p-6 flex flex-col min-h-[260px] cursor-pointer`}
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      {b.start ? `Starts ${b.start}` : 'Start date on request'}
                    </p>
                    <h3 className="font-heading font-semibold text-[30px] leading-[1.08] tracking-[-0.025em] text-slate-900 mt-4">
                      {lead}
                      {soft && <span className="block text-slate-400 text-[24px] mt-0.5">{soft}</span>}
                    </h3>
                    <dl className="grid grid-cols-2 gap-4 mt-auto pt-6">
                      <Detail label="Timing" value={b.timing} />
                      <Detail label="Mode" value={b.mode} />
                    </dl>
                  </button>

                  <div className="flex items-center gap-3 px-4 py-3.5">
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Fee</p>
                      <p className={`text-[15px] font-semibold leading-tight ${b.fee ? 'text-slate-900' : 'text-slate-400'}`}>
                        {b.fee || 'Ask us'}
                      </p>
                    </div>
                    <button
                      onClick={() => openRegister(b.name)}
                      className="ml-auto shrink-0 inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="text-sm text-slate-500 text-center mt-8">
          Fees shown are starting prices before merit scholarships of up to 40%.
        </p>
      </div>
    </section>
  );
}
