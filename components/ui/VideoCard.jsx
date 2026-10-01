'use client';

import React from 'react';
import { Play } from 'lucide-react';
import LazyVideo from '@/components/ui/LazyVideo';

// Framed video preview card shared by the student-review and teacher-reel carousels.
export default function VideoCard({ src, duration, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group snap-start shrink-0 w-[270px] sm:w-[300px] text-left rounded-[28px] bg-white p-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.4)] cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-900">
        <LazyVideo src={src} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

        {duration && (
          <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-semibold px-2.5 py-1 rounded-full">
            {duration}
          </span>
        )}

        <span className="absolute left-4 bottom-4 w-11 h-11 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-sm transition-transform group-hover:scale-110">
          <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
        </span>
      </div>

      <div className="flex items-center gap-3 px-3 pt-3.5 pb-2.5">
        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-slate-900 leading-tight truncate">{title}</p>
          {subtitle && <p className="text-sm text-slate-500 leading-tight mt-1 truncate">{subtitle}</p>}
        </div>
        <span className="ml-auto shrink-0 h-10 px-4 inline-flex items-center rounded-full bg-slate-950 group-hover:bg-indigo-600 text-white text-sm font-semibold transition-colors">
          Play
        </span>
      </div>
    </button>
  );
}
