'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2 } from 'lucide-react';

// Shown on 20–21 Oct 2026 only; hides itself at midnight IST on 22 Oct.
const ENDS_AT = Date.parse('2026-10-22T00:00:00+05:30');
const SEEN_KEY = 'bm_dussehra_2026_seen';
const GESTURES = ['pointerup', 'keydown'];

export default function DussehraGreeting() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (Date.now() >= ENDS_AT) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch (err) {}
    setActive(true);
  }, []);

  // Browsers only allow sound after the visitor interacts, so open on their first tap/click/key
  // and start playback inside that gesture.
  useEffect(() => {
    if (!active || open) return;
    const start = () => {
      GESTURES.forEach((g) => window.removeEventListener(g, start, true));
      const v = videoRef.current;
      setOpen(true);
      if (!v) return;
      v.muted = false;
      v.play().catch(() => {
        v.muted = true;
        setMuted(true);
        v.play().catch(() => {});
      });
    };
    GESTURES.forEach((g) => window.addEventListener(g, start, true));
    return () => GESTURES.forEach((g) => window.removeEventListener(g, start, true));
  }, [active, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const unmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setMuted(false);
  };

  const close = () => {
    videoRef.current?.pause();
    setOpen(false);
    setActive(false);
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch (err) {}
  };

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm items-center justify-center p-4 ${open ? 'flex' : 'hidden'}`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Happy Dussehra from BM Classes"
    >
      <div className="relative w-full max-w-sm rounded-[28px] bg-white p-2 shadow-2xl" onClick={(e) => { e.stopPropagation(); if (muted) unmute(); }}>
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center cursor-pointer hover:bg-slate-50"
        >
          <X className="w-4 h-4" />
        </button>
        <video
          ref={videoRef}
          src="/videos/dussehra_greet.mp4"
          preload="auto"
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          playsInline
          loop
          controls
          className="w-full max-h-[70vh] rounded-[22px] bg-black object-contain"
        />
        {muted && (
          <button
            onClick={unmute}
            className="absolute left-1/2 -translate-x-1/2 top-6 h-10 px-4 rounded-full bg-white/95 text-slate-900 text-sm font-semibold shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" /> Tap for sound
          </button>
        )}
        <p className="font-heading font-extrabold text-xl tracking-[-0.02em] text-slate-950 text-center pt-3 pb-1.5">
          Happy Dussehra <span className="text-slate-400">from BM Classes</span>
        </p>
      </div>
    </div>
  );
}
