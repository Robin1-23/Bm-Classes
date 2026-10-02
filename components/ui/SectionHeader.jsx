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
    <ScrollReveal delay={100} direction="up" className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${className}`}>
      {badgeText && (
        <div className={`inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? 'text-amber-300' : 'text-indigo-700'
        }`}>
          <BadgeIcon className="w-3.5 h-3.5" />
          <span>{badgeText}</span>
        </div>
      )}

      {title && (
        <h2 className="font-heading font-extrabold tracking-[-0.03em] leading-[1.08]">
          <FoldText
            text={title}
            splitBy="word"
            hinge="top"
            trigger="scroll"
            duration={0.6}
            stagger={0.04}
            fontSize="clamp(2.1rem, 4.6vw, 3.5rem)"
            fontWeight={800}
            color={dark ? '#ffffff' : '#0b1020'}
          />
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg mt-4 leading-relaxed max-w-xl mx-auto ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
