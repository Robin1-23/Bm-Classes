'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
        
        {/* Tooltip on Hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs font-bold px-2.5 py-1 rounded-md border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Back to Top
        </span>
      </button>
    </div>
  );
}
