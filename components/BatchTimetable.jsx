'use client';

import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from '@/context/ModalContext';
import { SITE_CONTENT } from '@/data/siteContent';

const Value = ({ children }) =>
  children ? <span className="text-slate-900">{children}</span> : <span className="text-slate-400">Ask us</span>;

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

        {/* Desktop: table */}
        <div className="hidden md:block bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="font-semibold px-6 py-3.5">Batch</th>
                <th className="font-semibold px-4 py-3.5">Starts</th>
                <th className="font-semibold px-4 py-3.5">Timing</th>
                <th className="font-semibold px-4 py-3.5">Mode</th>
                <th className="font-semibold px-4 py-3.5">Fee</th>
                <th className="px-6 py-3.5"><span className="sr-only">Apply</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {batches.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-950">{b.name}</td>
                  <td className="px-4 py-4"><Value>{b.start}</Value></td>
                  <td className="px-4 py-4"><Value>{b.timing}</Value></td>
                  <td className="px-4 py-4"><Value>{b.mode}</Value></td>
                  <td className="px-4 py-4 font-semibold"><Value>{b.fee}</Value></td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => openRegister(b.name)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer"
                    >
                      Apply <ArrowRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: cards */}
        <div className="md:hidden space-y-3">
          {batches.map((b) => (
            <article key={b.id} className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-heading font-extrabold text-lg tracking-[-0.01em] text-slate-950">{b.name}</h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 text-sm">
                {[['Starts', b.start], ['Timing', b.timing], ['Mode', b.mode], ['Fee', b.fee]].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="font-semibold mt-0.5"><Value>{value}</Value></dd>
                  </div>
                ))}
              </dl>
              <button
                onClick={() => openRegister(b.name)}
                className="mt-5 w-full h-11 rounded-full bg-slate-950 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply for this batch <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>

        <p className="text-sm text-slate-500 text-center mt-6">
          Fees shown are starting prices before merit scholarships of up to 40%.
        </p>
      </div>
    </section>
  );
}
