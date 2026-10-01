'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
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
    featured: true,
    audience: 'Class 11 & 12 · JEE Main, Advanced & NEET',
    title: 'JEE & NEET Integrated Programme',
    desc: 'Two years of Physics, Chemistry and Biology taught by the HODs themselves, with PYQ practice every day and doubts cleared the same day.',
    facts: [
      ['Starts', '6 April'],
      ['Batch size', '10–15 students'],
      ['Taught by', 'BM Sir & Konika Ma’am'],
      ['Track record', 'AIR 18 & AIR 22'],
    ],
    faces: ['/bm_sir.jpg', '/konika_mam.jpg'],
    seats: '3 seats left',
    applyAs: 'Class 11th & 12th Integrated JEE & NEET',
  },
  {
    id: 'biology',
    tabs: ['neet'],
    audience: 'Class 9–12 & NEET',
    title: 'Biology with Konika Ma’am',
    desc: 'NCERT, line by line, on an interactive digital board. Built for NEET Biology and for CBSE, ICSE and IB boards.',
    facts: [
      ['Covers', 'Botany & Zoology'],
      ['Boards', 'CBSE, ICSE, IB'],
    ],
    faces: ['/konika_mam.jpg'],
    seats: '2 seats left',
    applyAs: 'Biology Excellence Program',
  },
  {
    id: 'foundation',
    tabs: ['foundation'],
    audience: 'Class 9 & 10 · CBSE & Olympiad',
    title: 'Maths & Science Foundation',
    desc: 'Score well in boards now, and build the problem-solving habit JEE and NEET will ask for later.',
    facts: [
      ['Starts', '12 & 14 March'],
      ['Syllabus', 'Updated NCERT'],
    ],
    applyAs: 'Class 9th & 10th Foundation',
  },
  {
    id: 'science-online',
    tabs: ['oneonone'],
    audience: 'Class 9–12 · Online',
    title: '1-on-1 Science with Chumki Ma’am',
    desc: 'Personal online classes with a teacher who spent 18 years at FIITJEE. Your pace, your syllabus, your doubts.',
    facts: [
      ['Format', '1-on-1 or small group'],
      ['Experience', '22 years'],
    ],
    faces: ['/chumki_mam.jpeg'],
    applyAs: 'Science Teacher Online (9th-12th) + 1-on-1',
  },
  {
    id: 'doubts',
    tabs: ['oneonone', 'jee', 'neet'],
    audience: '1-on-1 · Boards & PYQs',
    title: 'Doubt clearing with the HODs',
    desc: 'Bring any question you’re stuck on. Sit with BM Sir or another Ex-HOD and leave with it solved, plus the PYQ shortcuts that go with it.',
    facts: [
      ['Slots', 'Daily'],
      ['Wait time', 'Same day'],
    ],
    applyAs: '1-on-1 Doubt & PYQ Drills',
  },
];

function ProgramCard({ program, wide, onApply }) {
  const dark = wide;
  return (
    <article
      className={`group h-full flex flex-col rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
        dark
          ? 'bg-[#0b1020] border-[#0b1020] text-white'
          : 'bg-white border-slate-200 text-slate-900 hover:border-indigo-300 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.25)]'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className={`text-sm font-semibold ${dark ? 'text-amber-300' : 'text-indigo-700'}`}>{program.audience}</p>
        {program.faces && (
          <div className="flex -space-x-2 shrink-0">
            {program.faces.map((src) => (
              <img loading="lazy" decoding="async"
                key={src}
                src={src}
                alt=""
                className={`w-9 h-9 rounded-full object-cover object-top ring-2 ${dark ? 'ring-[#0b1020]' : 'ring-white'}`}
              />
            ))}
          </div>
        )}
      </div>

      <h3 className={`font-heading font-extrabold tracking-[-0.02em] mt-2 ${wide ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
        {program.title}
      </h3>
      <p className={`leading-relaxed mt-3 ${wide ? 'text-base sm:text-lg max-w-xl' : 'text-[15px]'} ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {program.desc}
      </p>

      <dl className={`grid gap-x-6 gap-y-4 mt-6 pt-6 border-t ${wide ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'} ${dark ? 'border-white/10' : 'border-slate-100'}`}>
        {program.facts.map(([label, value]) => (
          <div key={label}>
            <dt className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</dt>
            <dd className="text-sm font-semibold mt-0.5">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-8 flex items-center justify-between gap-4">
        <span className={`text-sm font-medium ${dark ? 'text-amber-300' : 'text-amber-700'}`}>
          {program.seats || ''}
        </span>
        <button
          onClick={() => onApply(program.applyAs)}
          className={`inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
            dark
              ? 'bg-white text-slate-950 hover:bg-amber-300'
              : 'bg-slate-950 text-white hover:bg-indigo-600'
          }`}
        >
          Apply
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((program, idx) => {
            const wide = program.featured && activeTab === 'all';
            return (
              <ScrollReveal
                key={program.id}
                delay={80 * idx}
                direction="up"
                className={wide ? 'md:col-span-2' : ''}
              >
                <ProgramCard program={program} wide={wide} onApply={handleRegister} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
