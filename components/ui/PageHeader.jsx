'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PageHeader({ badgeText, title, subtitle, breadcrumb }) {
  return (
    <div className="bg-[#0b1020] text-white pt-28 pb-14 sm:pt-36 sm:pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-zinc-900">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <ScrollReveal delay={100} direction="down">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
            <Link href="/" className="hover:text-indigo-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-indigo-300">{breadcrumb || title}</span>
          </div>
        </ScrollReveal>

        {/* Badge & Title */}
        <ScrollReveal delay={150} direction="up">
          {badgeText && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-amber-300 text-xs font-semibold uppercase tracking-[0.18em] mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-300" />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="font-heading font-extrabold tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mt-3 max-w-2xl">
              {subtitle}
            </p>
          )}
        </ScrollReveal>

      </div>
    </div>
  );
}
