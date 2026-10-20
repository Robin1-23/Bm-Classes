'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// Shown on 20–21 Oct 2026 only; hides itself at midnight IST on 22 Oct.
const ENDS_AT = Date.parse('2026-10-22T00:00:00+05:30');
const SEEN_KEY = 'bm_dussehra_2026_seen';

export default function DussehraGreeting() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (Date.now() >= ENDS_AT) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch (err) {}
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch (err) {}
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Happy Dussehra from BM Classes"
    >
      <div className="relative w-full max-w-sm rounded-[28px] bg-white p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center cursor-pointer hover:bg-slate-50"
        >
          <X className="w-4 h-4" />
        </button>
        <video
          src="/videos/dussehra_greet.mp4"
          autoPlay
          muted
          playsInline
          loop
          controls
          className="w-full max-h-[70vh] rounded-[22px] bg-black object-contain"
        />
        <p className="font-heading font-extrabold text-xl tracking-[-0.02em] text-slate-950 text-center pt-3 pb-1.5">
          Happy Dussehra <span className="text-slate-400">from BM Classes</span>
        </p>
      </div>
    </div>
  );
}
