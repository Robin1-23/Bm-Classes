'use client';

import React from 'react';
import { Target, TrendingUp, Users, CheckCircle2, Sparkles, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';

export default function WhySection() {

  const pillars = [
    {
      lead: 'Fewer questions.',
      soft: 'Better ones.',
      desc: '15 hand-picked questions per chapter, each with the twist JEE and NEET love to test.',
      icon: Target,
      theme: 'indigo',
    },
    {
      lead: 'A check-up',
      soft: 'every week.',
      desc: 'A short weekly test, reviewed by the HOD with you and your parents.',
      icon: TrendingUp,
      theme: 'white',
    },
    {
      lead: 'Your teacher',
      soft: 'knows your name.',
      desc: 'Fifteen students at most, so the HOD knows your target and your pace.',
      icon: Users,
      theme: 'white',
    },
    {
      lead: 'Doubts solved',
      soft: 'the same day.',
      desc: 'Stuck after class? Sit with the HOD and leave with the answer.',
      icon: Zap,
      theme: 'navy',
    },
  ];

  const THEMES = {
    indigo: { card: 'bg-indigo-600 text-white border-indigo-600', soft: 'text-indigo-200', desc: 'text-indigo-100', btn: 'bg-white text-indigo-700', art: 'text-white/15' },
    navy: { card: 'bg-[#0b1020] text-white border-[#0b1020]', soft: 'text-slate-400', desc: 'text-slate-300', btn: 'bg-white text-slate-950', art: 'text-white/10' },
    white: { card: 'bg-white text-slate-950 border-slate-200', soft: 'text-slate-400', desc: 'text-slate-600', btn: 'bg-slate-950 text-white', art: 'text-indigo-100' },
  };


  return (
    <section className="relative bg-[#f5f7ff] text-slate-950 py-20 lg:py-28 border-b border-slate-200/80 overflow-hidden" id="why-bmclasses">
      
      {/* Background Soft Glows */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <FoldText
              text="WHY IT WORKS"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.45}
              stagger={0.015}
              fontSize="12px"
              fontWeight={600}
              color="#4338ca"
            />
          </div>
          
          <h2 className="font-heading font-extrabold tracking-[-0.03em] leading-[1.15] mt-1 mb-2">
            <span className="sr-only">Understand it once. Solve it forever.</span>
            <FoldText
              text="Understand it once. Solve it forever."
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.04}
              fontSize="clamp(2.1rem, 4.6vw, 3.5rem)"
              fontWeight={800}
              color="#020617"
            />
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-semibold leading-relaxed max-w-xl mx-auto">
            Big-institute rigour. Small-batch attention. Nobody gets left behind.
          </p>
        </ScrollReveal>

        {/* BESPOKE ACADEMIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-20">
          {pillars.map((p, idx) => {
            const t = THEMES[p.theme];
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.lead} delay={80 * idx} direction="up">
                <article className={`group relative overflow-hidden h-full min-h-[250px] rounded-[28px] border p-7 sm:p-9 flex flex-col ${t.card}`}>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className={`absolute -right-6 -bottom-6 w-44 h-44 sm:w-52 sm:h-52 ${t.art} transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105`}
                  />
                  <h3 className="relative font-heading font-semibold text-[30px] sm:text-[34px] leading-[1.08] tracking-[-0.025em] max-w-[13ch]">
                    {p.lead}
                    <span className={`block ${t.soft}`}>{p.soft}</span>
                  </h3>
                  <p className={`relative text-[15px] leading-relaxed mt-4 max-w-[30ch] ${t.desc}`}>{p.desc}</p>
                  <a href="/#book-demo" className="relative mt-auto pt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide w-fit">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center ${t.btn}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    See it in a demo
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>


      </div>
    </section>
  );
}
