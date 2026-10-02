'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ArrowUpRight, CalendarCheck, ImageIcon, X, Clock, FileText, CalendarDays } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';
import { COURSES, courseName } from '@/data/siteContent';

const TABS = [
  { id: 'all', label: 'All courses' },
  { id: 'boards', label: '12th Boards' },
  { id: 'jee', label: 'JEE Main' },
  { id: 'neet', label: 'NEET' },
  { id: 'class10', label: 'Class 10' },
  { id: 'oneonone', label: '1-on-1' },
];

function CourseCard({ course, onApply, onPoster }) {
  const facts = [
    [Clock, course.hours],
    [FileText, course.tests],
    [CalendarDays, course.start === 'Anytime' ? 'Start anytime' : `Starts ${course.start}`],
  ];
  return (
    <article className="group h-full flex flex-col rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
      <div className={`flex-1 rounded-[22px] ${course.tint} p-6 sm:p-7 flex flex-col`}>
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-slate-700">{course.kind}</p>
          {course.poster ? (
            <button
              onClick={() => onPoster(course)}
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/80 hover:bg-white text-xs font-semibold text-slate-800 cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" /> Poster
            </button>
          ) : null}
        </div>
        <h3 className="font-heading font-semibold text-[30px] leading-[1.06] tracking-[-0.03em] text-slate-900 mt-5">
          {course.title}
          <span className="block text-slate-400">{course.subject}</span>
        </h3>
        <ul className="mt-6 space-y-2.5">
          {facts.map(([Icon, text]) => (
            <li key={text} className="flex items-center gap-2.5 text-[15px] text-slate-800">
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-slate-600" />
              </span>
              {text}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 leading-relaxed mt-auto pt-6">{course.focus}</p>
      </div>

      <div className="flex items-center gap-3 px-3 sm:px-4 py-3.5">
        {course.faces && (
          <img src={course.faces[0]} alt="" loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-white shrink-0" />
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 leading-tight">{course.teacher ? `By ${course.teacher}` : 'BM Classes'}</p>
          <p className="text-sm text-slate-500 leading-tight mt-0.5">{course.mode}</p>
        </div>
        <button
          onClick={() => onApply(courseName(course))}
          className="ml-auto shrink-0 h-11 px-5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          Join now
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
        Not sure which course?
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

function PosterModal({ course, onClose, onApply }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-label={`${courseName(course)} poster`}>
      <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close poster" className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer">
          <X className="w-5 h-5" />
        </button>
        <div className="relative w-full aspect-[1100/1424] max-h-[78vh] rounded-2xl overflow-hidden bg-black">
          <Image src={course.poster} alt={`${courseName(course)} ${course.kind.toLowerCase()} poster`} fill sizes="(max-width: 480px) 100vw, 448px" className="object-contain" />
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => { onClose(); onApply(courseName(course)); }}
            className="flex-1 h-12 rounded-full bg-white text-slate-950 text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Join this course <ArrowRight className="w-4 h-4" />
          </button>
          <a href={course.poster} download className="h-12 px-5 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center">
            Save
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProgramsSection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeTab, setActiveTab] = useState('all');
  const [poster, setPoster] = useState(null);

  const visible = COURSES.filter((c) => activeTab === 'all' || c.tabs.includes(activeTab));

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-[#e3e8f5]" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="COURSES 2026–27"
          title="Pick your course. Chase your score."
          subtitle="Short, focused courses for the 2027 boards, JEE Main and NEET, plus 1-on-1 Science."
          className="!mb-10"
        />

        <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar sm:justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 h-10 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === tab.id ? 'bg-slate-950 text-white' : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((course, idx) => (
            <ScrollReveal key={course.id} delay={70 * idx} direction="up">
              <CourseCard course={course} onApply={handleRegister} onPoster={setPoster} />
            </ScrollReveal>
          ))}
          {activeTab === 'all' && (
            <ScrollReveal delay={350} direction="up">
              <DemoCard />
            </ScrollReveal>
          )}
        </div>
      </div>

      {poster && <PosterModal course={poster} onClose={() => setPoster(null)} onApply={handleRegister} />}
    </section>
  );
}
