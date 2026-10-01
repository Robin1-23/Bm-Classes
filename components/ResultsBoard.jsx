'use client';

import React, { useState } from 'react';
import { Trophy, Play, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONTENT } from '@/data/siteContent';

const TINTS = ['bg-[#f3f1ff]', 'bg-[#e4efdc]', 'bg-[#fcecd6]', 'bg-[#e3ecfb]', 'bg-[#f8e3df]'];

// "99.48 percentile" -> ["99.48", "percentile"]; "AIR 18" stays whole
const splitResult = (text) => {
  if (/^AIR\s/i.test(text)) return [text, ''];
  const i = text.indexOf(' ');
  return i > 0 ? [text.slice(0, i), text.slice(i + 1)] : [text, ''];
};

const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');

export default function ResultsBoard() {
  const { results } = SITE_CONTENT;
  const [year, setYear] = useState('all');
  const [video, setVideo] = useState(null);

  const years = [...new Set(results.map((r) => r.year).filter(Boolean))].sort((a, b) => b.localeCompare(a));
  const shown = results.filter((r) => year === 'all' || r.year === year);

  return (
    <section id="toppers" className="bg-white py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={Trophy}
          badgeText="OUR STUDENTS"
          title="Real students. Real results."
          subtitle="Every name here studied at BM Classes. Tap a card to hear it from them."
          className="!mb-10"
        />

        {years.length > 0 && (
          <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar sm:justify-center">
            {['all', ...years].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`shrink-0 h-10 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  year === y ? 'bg-slate-950 text-white' : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {y === 'all' ? 'All years' : y}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {shown.map((r, idx) => {
            const accent = idx === 0;
            const [lead, soft] = splitResult(r.result || r.exam);
            const Card = r.video ? 'button' : 'div';
            return (
              <Card
                key={r.id}
                onClick={r.video ? () => setVideo(r) : undefined}
                className={`group relative overflow-hidden text-left rounded-[28px] p-5 sm:p-6 min-h-[250px] sm:min-h-[280px] flex flex-col transition-all duration-300 ${
                  accent ? 'bg-indigo-600 text-white' : `${TINTS[idx % TINTS.length]} text-slate-900`
                } ${r.video ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.4)]' : ''}`}
              >
                {r.photo ? (
                  <img
                    src={r.photo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute right-0 bottom-0 w-[48%] h-[55%] object-cover object-top rounded-tl-[32px]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className={`absolute -right-3 -bottom-8 font-heading font-extrabold text-[120px] sm:text-[140px] leading-none tracking-[-0.06em] select-none transition-transform duration-500 group-hover:-rotate-6 ${
                      accent ? 'text-white/15' : 'text-slate-900/[0.07]'
                    }`}
                  >
                    {initials(r.name)}
                  </span>
                )}

                <p className={`relative text-xs sm:text-sm font-semibold ${accent ? 'text-indigo-100' : 'text-slate-600'}`}>
                  {[r.exam, r.year].filter(Boolean).join(' · ')}
                </p>
                <p className="relative font-heading font-semibold text-[30px] sm:text-[36px] leading-[1.02] tracking-[-0.03em] mt-3">
                  {lead}
                  {soft && <span className={`block ${accent ? 'text-indigo-200' : 'text-slate-400'}`}>{soft}</span>}
                </p>

                <div className="relative mt-auto pt-6">
                  <p className="text-sm sm:text-[15px] font-semibold">{r.name}</p>
                  {r.video && (
                    <span className="inline-flex items-center gap-2 mt-3 text-xs font-semibold uppercase tracking-wide">
                      <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${accent ? 'bg-white text-indigo-700' : 'bg-slate-950 text-white'}`}>
                        <Play className={`w-3 h-3 ml-0.5 ${accent ? 'fill-indigo-700' : 'fill-white'}`} />
                      </span>
                      Watch
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {video && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideo(null)}
          role="dialog"
          aria-label={`${video.name} video review`}
        >
          <div className="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideo(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <video src={video.video} controls autoPlay playsInline className="w-full max-h-[80vh] rounded-2xl bg-black" />
            <p className="text-white text-sm font-semibold mt-3">{video.name} · {video.result}</p>
          </div>
        </div>
      )}
    </section>
  );
}
