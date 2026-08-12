'use client';

import React from 'react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function InspirationalQuoteBanner() {
  const { openRegister } = useModal();

  return (
    <section className="py-14 sm:py-20 bg-[#060810] text-white relative overflow-hidden border-y border-amber-500/20">
      
      {/* Golden & Cyan Ambient Glowing Light Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <ScrollReveal delay={150} direction="up">
          <h2 className="font-serif italic text-2xl sm:text-4xl lg:text-5xl font-normal text-amber-100 tracking-tight leading-tight sm:leading-snug max-w-4xl mx-auto mb-6">
            “Arise, awake, and stop not till the goal is reached.”
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="font-heading font-black text-base sm:text-lg text-amber-400 tracking-wide uppercase">
              — Swami Vivekananda
            </span>

            <div className="pt-4">
              <button
                onClick={openRegister}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm px-7 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-amber-500/25 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Start Your JEE & NEET Preparation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
