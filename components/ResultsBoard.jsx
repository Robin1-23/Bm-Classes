'use client';

import React, { useState } from 'react';
import { Trophy, Play, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONTENT } from '@/data/siteContent';

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {shown.map((r) => {
            const Card = r.video ? 'button' : 'div';
            return (
              <Card
                key={r.id}
                onClick={r.video ? () => setVideo(r) : undefined}
                className={`group text-left bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                  r.video ? 'cursor-pointer hover:border-indigo-300 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.25)]' : ''
                }`}
              >
                <div className="relative aspect-square bg-[#eef1ff] flex items-center justify-center overflow-hidden">
                  {r.photo ? (
                    <img src={r.photo} alt={r.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="font-heading font-extrabold text-4xl text-indigo-700/80 tracking-tight">{initials(r.name)}</span>
                  )}
                  {r.video && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-white/95 text-slate-900 text-xs font-semibold pl-1 pr-3 py-1 rounded-full shadow-sm">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <Play className="w-3 h-3 fill-white ml-0.5" />
                      </span>
                      Watch
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <p className="font-heading font-extrabold text-xl sm:text-2xl tracking-[-0.02em] text-slate-950 leading-tight">
                    {r.result || r.exam}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mt-2">{r.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{[r.exam, r.year].filter(Boolean).join(' · ')}</p>
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
