'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowUpRight, CalendarCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';

const TABS = [
  { id: 'all', label: 'All programs' },
  { id: 'jee', label: 'JEE' },
  { id: 'neet', label: 'NEET' },
  { id: 'foundation', label: 'Class 9 & 10' },
  { id: 'oneonone', label: '1-on-1' },
];

const PROGRAMS = [
  {
    id: 'integrated',
    tabs: ['jee', 'neet'],
    meta: 'Class 11 & 12 · JEE & NEET',
    title: 'JEE & NEET Integrated Programme',
    desc: 'Two years with the HODs, daily PYQ practice and same-day doubts.',
    tint: 'bg-[#f3f1ff]',
    faces: ['/bm_sir.jpg', '/konika_mam.jpg'],
    by: 'BM Sir & Konika Ma’am',
    note: 'Starts 6 April',
    applyAs: 'Class 11th & 12th Integrated JEE & NEET',
  },
  {
    id: 'biology',
    tabs: ['neet'],
    meta: 'Class 9–12 & NEET',
    title: 'Biology with Konika Ma’am',
    desc: 'NCERT line by line on a digital board. NEET, CBSE, ICSE and IB.',
    tint: 'bg-[#eef7ea]',
    faces: ['/konika_mam.jpg'],
    by: 'Konika Ma’am',
    note: '20 years teaching',
    applyAs: 'Biology Excellence Program',
  },
  {
    id: 'foundation',
    tabs: ['foundation'],
    meta: 'Class 9 & 10 · CBSE & Olympiad',
    title: 'Maths & Science Foundation',
    desc: 'Score well in boards now. Build the JEE and NEET habit early.',
    tint: 'bg-[#fdf4e6]',
    by: 'Small batches',
    note: 'Starts 12 & 14 March',
    applyAs: 'Class 9th & 10th Foundation',
  },
  {
    id: 'science-online',
    tabs: ['oneonone'],
    meta: 'Class 9–12 · Online',
    title: '1-on-1 Science with Chumki Ma’am',
    desc: '18 years at FIITJEE. Your pace, your syllabus, your doubts.',
    tint: 'bg-[#eef4ff]',
    faces: ['/chumki_mam.jpeg'],
    by: 'Chumki Ma’am',
    note: '1-on-1 or small group',
    applyAs: 'Science Teacher Online (9th-12th) + 1-on-1',
  },
  {
    id: 'doubts',
    tabs: ['oneonone', 'jee', 'neet'],
    meta: '1-on-1 · Boards & PYQs',
    title: 'Doubt clearing with the HODs',
    desc: 'Bring any question you’re stuck on. Leave with it solved.',
    tint: 'bg-[#fbf0ee]',
    faces: ['/bm_sir.jpg'],
    by: 'BM Sir & Ex-HODs',
    note: 'Daily slots',
    applyAs: '1-on-1 Doubt & PYQ Drills',
  },
];

function ProgramCard({ program, onApply }) {
  return (
    <article className="group h-full flex flex-col rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
      <button
        onClick={() => onApply(program.applyAs)}
        className={`flex-1 text-left rounded-[22px] ${program.tint} p-6 sm:p-7 flex flex-col min-h-[250px] cursor-pointer`}
      >
        <p className="text-sm font-semibold text-slate-700">{program.meta}</p>
        <h3 className="font-heading font-semibold text-[28px] leading-[1.12] tracking-[-0.025em] text-slate-900 mt-5 max-w-[15ch]">
          {program.title}
        </h3>
        <p className="text-[15px] text-slate-600 leading-relaxed mt-3 max-w-[34ch]">{program.desc}</p>
        <ArrowRight className="w-6 h-6 text-slate-900 mt-auto self-end transition-transform group-hover:translate-x-1" />
      </button>

      <div className="flex items-center gap-3 px-3 sm:px-4 py-3.5">
        {program.faces ? (
          <div className="flex -space-x-2 shrink-0">
            {program.faces.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-white" />
            ))}
          </div>
        ) : (
          <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-slate-600" />
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 leading-tight">{program.by}</p>
          <p className="text-sm text-slate-500 leading-tight mt-0.5">{program.note}</p>
        </div>
        <button
          onClick={() => onApply(program.applyAs)}
          className="ml-auto shrink-0 h-11 px-5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          Apply
        </button>
      </div>
    </article>
  );
}

// Fills the last grid slot: an invitation for families who aren't sure yet
function DemoCard() {
  return (
    <article className="h-full min-h-[330px] flex flex-col rounded-[28px] bg-[#0b1020] p-8 text-white">
      <CalendarCheck className="w-8 h-8 text-amber-300" />
      <h3 className="font-heading font-semibold text-[28px] leading-[1.12] tracking-[-0.025em] mt-5">
        Not sure which batch?
        <span className="block text-slate-400">Try a class first.</span>
      </h3>
      <a href="/#book-demo" className="mt-auto pt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide">
        <span className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </span>
        Book a free demo
      </a>
    </article>
  );
}

export default function ProgramsSection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeTab, setActiveTab] = useState('all');

  const visible = PROGRAMS.filter((p) => activeTab === 'all' || p.tabs.includes(activeTab));

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-[#e3e8f5]" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="PROGRAMS"
          title="Pick your batch. Chase your rank."
          subtitle="Every batch capped at 15. Every doubt solved the same day."
          className="!mb-10"
        />

        <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar sm:justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 h-10 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-950 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((program, idx) => (
            <ScrollReveal key={program.id} delay={70 * idx} direction="up">
              <ProgramCard program={program} onApply={handleRegister} />
            </ScrollReveal>
          ))}
          {activeTab === 'all' && (
            <ScrollReveal delay={350} direction="up">
              <DemoCard />
            </ScrollReveal>
          )}
        </div>

        <p className="text-center mt-10">
          <a href="/programs#timetable" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4">
            See batch timings and fees →
          </a>
        </p>
      </div>
    </section>
  );
}
