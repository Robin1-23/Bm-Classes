'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
    <div className="fixed bottom-20 lg:bottom-8 right-4 sm:right-6 z-40 transition-all duration-300">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-black/90 hover:bg-slate-950 border-2 border-zinc-800 hover:border-cyan-400 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-transform" />
        
        {/* Tooltip on Hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-black px-2.5 py-1 rounded-md border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Back to Top
        </span>
      </button>
    </div>
  );
}
