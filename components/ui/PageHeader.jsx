'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PageHeader({ badgeText, title, subtitle, breadcrumb }) {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden border-b border-indigo-900/50">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <ScrollReveal delay={100} direction="down">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 mb-4">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300">{breadcrumb || title}</span>
          </div>
        </ScrollReveal>

        {/* Badge & Title */}
        <ScrollReveal delay={150} direction="up">
          {badgeText && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl">
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
