'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// Switches between the default light theme and "charcoal" (black with film grain).
// The choice is saved per browser; the inline script in app/layout.js applies it before first paint.
export default function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('theme-charcoal'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('theme-charcoal', next);
    try {
      localStorage.setItem('bm-theme', next ? 'charcoal' : 'light');
    } catch (err) {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to charcoal theme'}
      aria-pressed={dark}
      title={dark ? 'Light theme' : 'Charcoal theme'}
      className={`relative w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer ${className}`}
    >
      <Sun className={`w-[18px] h-[18px] absolute transition-all duration-300 ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
      <Moon className={`w-[18px] h-[18px] absolute transition-all duration-300 ${dark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
    </button>
  );
}
