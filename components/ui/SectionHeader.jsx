'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';

export default function SectionHeader({
  badgeText,
  badgeIcon: BadgeIcon = Sparkles,
  title,
  subtitle,
  dark = false,
  className = '',
}) {
  return (
    <ScrollReveal delay={100} direction="up" className={`text-center max-w-3xl mx-auto mb-14 sm:mb-18 ${className}`}>
      {badgeText && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs ${
          dark 
            ? 'bg-white/10 border border-white/10 text-cyan-300'
            : 'bg-indigo-50 border border-indigo-200/80 text-indigo-700'
        }`}>
          <BadgeIcon className={`w-3.5 h-3.5 ${dark ? 'text-cyan-300' : 'text-indigo-600'}`} />
          <FoldText
            text={badgeText}
            splitBy="char"
            hinge="top"
            trigger="scroll"
            duration={0.45}
            stagger={0.015}
            fontSize="12px"
            fontWeight={900}
            color={dark ? '#67e8f9' : '#4338ca'}
          />
        </div>
      )}
      
      {title && (
        <h2 className="font-heading leading-[1.15] tracking-tight mt-1 mb-2">
          <span className="sr-only">{title}</span>
          <FoldText
            text={title}
            splitBy="word"
            hinge="top"
            trigger="scroll"
            duration={0.6}
            stagger={0.04}
            fontSize="clamp(1.75rem, 4vw, 3rem)"
            fontWeight={900}
            color={dark ? '#ffffff' : '#020617'}
          />
        </h2>
      )}
      
      {subtitle && (
        <p className={`text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-xl mx-auto ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
