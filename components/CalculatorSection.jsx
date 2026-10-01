'use client';

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';

const CLASSES = [
  { id: '11', label: 'Class 11', sub: '2-year programme', base: 85000 },
  { id: '12', label: 'Class 12', sub: '1-year programme', base: 90000 },
  { id: 'dropper', label: 'Droppers', sub: 'Intensive batch', base: 95000 },
];

const EXAMS = [
  { id: 'advanced', label: 'JEE Advanced', sub: 'Main + Advanced', extra: 15000, scholarship: 25 },
  { id: 'main', label: 'JEE Main', sub: 'Main + BITSAT', extra: 0, scholarship: 15 },
  { id: 'neet', label: 'NEET UG', sub: 'Medical', extra: 10000, scholarship: 15 },
];

const MODES = [
  { id: 'batch', label: 'Batch of 10–15', factor: 1 },
  { id: 'oneonone', label: '1-on-1 mentorship', factor: 1.6 },
];

const INCLUDED = ['Study material and test series', 'Same-day doubt sessions', 'Taught by the Ex-HODs themselves'];

const rupees = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

function Choice({ step, title, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">{step}</span>
        {title}
      </legend>
      <div className={`grid gap-2.5 mt-4 ${options.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {options.map((o) => {
          const active = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.id)}
              className={`text-left rounded-2xl px-4 py-3.5 border transition-colors cursor-pointer ${
                active ? 'bg-white text-black border-white' : 'bg-white/[0.04] text-white border-white/10 hover:border-white/30'
              }`}
            >
              <span className="block font-heading font-bold text-[15px] leading-tight">{o.label}</span>
              {o.sub && <span className={`block text-xs mt-1 ${active ? 'text-black/60' : 'text-white/50'}`}>{o.sub}</span>}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function CalculatorSection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [cls, setCls] = useState('dropper');
  const [exam, setExam] = useState('advanced');
  const [mode, setMode] = useState('batch');

  const c = CLASSES.find((x) => x.id === cls);
  const e = EXAMS.find((x) => x.id === exam);
  const m = MODES.find((x) => x.id === mode);
  const fee = Math.round((c.base + e.extra) * m.factor);
  const afterScholarship = fee * (1 - e.scholarship / 100);

  return (
    <section
      id="calculator"
      className="bg-[#0a0a0a] text-white py-20 lg:py-28"
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1.2px)', backgroundSize: '6px 6px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          dark
          badgeIcon={Calculator}
          badgeText="NO HIDDEN FEES"
          title="Know your fee in 10 seconds."
          subtitle="Pick your class and exam. See your fee and your scholarship instantly."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Choices */}
          <div className="lg:col-span-7 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-8">
            <Choice step="1" title="Your class" options={CLASSES} value={cls} onChange={setCls} />
            <Choice step="2" title="Your exam" options={EXAMS} value={exam} onChange={setExam} />
            <Choice step="3" title="How you’d like to learn" options={MODES} value={mode} onChange={setMode} />
          </div>

          {/* Result */}
          <div className="lg:col-span-5 rounded-[28px] bg-white text-black p-6 sm:p-8 flex flex-col">
            <p className="text-sm font-semibold text-black/60">
              {c.label} · {e.label} · {m.label}
            </p>
            <p className="font-heading font-extrabold text-5xl sm:text-6xl tracking-[-0.04em] mt-4" aria-live="polite">
              {rupees(fee)}
            </p>
            <p className="text-sm text-black/60 mt-1">per year, all inclusive</p>

            <div className="mt-6 rounded-2xl bg-[#f3f1ff] p-4">
              <p className="text-sm text-black/70">With up to {e.scholarship}% merit scholarship</p>
              <p className="font-heading font-bold text-2xl tracking-[-0.02em] mt-0.5">as low as {rupees(afterScholarship)}</p>
            </div>

            <ul className="mt-6 space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <button
                onClick={() => handleRegister(`${c.label} ${e.label} (${m.label})`)}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-black hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Reserve a seat at this fee <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-white/40 text-center mt-6">
          Scholarship depends on your Class X/XI marks. We confirm the final fee at counselling.
        </p>
      </div>
    </section>
  );
}
