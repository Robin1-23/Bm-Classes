'use client';

import React, { useState } from 'react';
import { MapPin, ShieldCheck, ChevronDown, Sparkles, CheckCircle2, Award, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';

const LOCAL_FAQS = [
  {
    question: 'Where is Chemistry classes by BM sir located in Gurgaon?',
    answer: 'Chemistry classes by BM sir is located at House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon, Haryana 122003. It features 100% direct teaching by BM Sir & Senior Ex-HODs of FIITJEE & VMC in capped 10-15 student micro-batches, producing top AIR 18, 22, 52 & 102 ranks.',
  },
  {
    question: 'Which is the best NEET coaching institute in Gurgaon for Class 11, 12 & Droppers?',
    answer: 'Chemistry classes by BM sir offers Gurgaon’s top-rated NEET UG Medical Excellence batch taught by Senior Ex-FIITJEE & VMC Biology & Chemistry HODs. With 350+ NEET score track records and NCERT line-by-line mastery, personalized doubt clearing is provided for medical aspirants at Sector 45 Gurgaon near DPS-45 school.',
  },
  {
    question: 'What makes BmClasses different from mass coaching centers in Gurgaon like FIITJEE, VMC & Allen?',
    answer: 'Unlike factory coaching institutes with 80+ student crowded halls and junior teaching assistants, BmClasses strictly caps every batch to 10-15 students max. Every single lecture, doubt session, and test analysis is handled 100% directly by 20+ years experienced Senior Ex-HODs.',
  },
  {
    question: 'What coaching courses are available at BmClasses Gurgaon?',
    answer: 'BmClasses offers Class 6th, 7th & 8th Junior Science foundation, Class 9th & 10th Foundation/Olympiad batches, Class 11th 2-Year Integrated JEE & NEET batches, Class 12th 1-Year Pinnacle batches, and XII Pass / Dropper Intensive Ranker batches.',
  },
  {
    question: 'Do Senior Ex-HODs teach every single lecture, or are classes delegated to junior assistants?',
    answer: 'At BM Classes, 100% of lectures, doubt-solving sessions, and test reviews are conducted personally by BM Sir, Konika Ma\'am & Chumki Ma\'am. We maintain a strict zero junior assistant policy.',
  },
  {
    question: 'Are Online (9th–12th) & 1-on-1 personalized Science classes available?',
    answer: 'Yes! Chumki Ma\'am (22 Years Exp — 18 Yrs FIITJEE, 2 Yrs NIIT e-Gurucool, 2 Yrs PMT OASIS) is our Senior Science Teacher offering Online (9th–12th) + 1-on-1 personalized classes.',
  },
  {
    question: 'Why does BM Classes strictly cap batch sizes at 10–15 students max?',
    answer: 'Unlike crowded factory coaching halls with 80–100 students, our 10-15 student micro-batch model guarantees that every student gets direct 1-on-1 mentor interaction, personalized speed tracking, and instant same-day doubt resolution.',
  },
];

export default function LocalSeoKeywordsSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-950 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <ScrollReveal delay={100} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              <FoldText
                text="GURGAON #1 RANKED IIT JEE & NEET ACADEMY"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.45}
                stagger={0.015}
                fontSize="12px"
                fontWeight={900}
                color="#4338ca"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <h2 className="font-heading tracking-tight leading-tight mb-4">
              <span className="sr-only">Best IIT JEE Coaching & Best NEET Coaching in Gurgaon Sector 52</span>
              <FoldText
                text="Best IIT JEE Coaching & Best NEET Coaching in Gurgaon Sector 52"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                duration={0.6}
                stagger={0.04}
                fontSize="clamp(1.75rem, 4vw, 3rem)"
                fontWeight={900}
                color="#020617"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <p className="text-slate-700 text-base sm:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              Serving students across Sector 52, Ardee City, Sector 45, Sector 46, Sector 47, Sushant Lok, Golf Course Extension Road & DLF Gurgaon.
            </p>
          </ScrollReveal>
        </div>

        {/* Local Target Search Keywords — Dual-Row Smooth Marquee Ticker */}
        <ScrollReveal delay={250} direction="up" className="mb-16 -mx-4 sm:-mx-6">
          <div className="overflow-hidden py-2 space-y-3.5 w-full">
            {/* Row 1: Leftward Marquee */}
            <div className="flex overflow-hidden group">
              <div className="flex shrink-0 animate-marquee items-center gap-3">
                {[
                  'Best IIT JEE Coaching in Gurgaon',
                  'Best NEET Coaching in Gurgaon',
                  'Best IIT JEE Coaching in Sector 52 Gurgaon',
                  'Best NEET Coaching in Sector 52 Gurgaon',
                  'Top IIT JEE Coaching Institute Ardee City',
                  'JEE Main & Advanced Coaching Gurgaon',
                  'Best IIT JEE Coaching in Gurgaon',
                  'Best NEET Coaching in Gurgaon',
                  'Best IIT JEE Coaching in Sector 52 Gurgaon',
                  'Best NEET Coaching in Sector 52 Gurgaon',
                  'Top IIT JEE Coaching Institute Ardee City',
                  'JEE Main & Advanced Coaching Gurgaon',
                ].map((kw, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-slate-200/90 hover:border-indigo-500 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold text-slate-900 shadow-2xs hover:shadow-md transition-all flex items-center gap-2 shrink-0 cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Rightward Marquee (Reverse) */}
            <div className="flex overflow-hidden group">
              <div className="flex shrink-0 animate-marquee-reverse items-center gap-3">
                {[
                  'NEET UG Medical Coaching Gurgaon',
                  'Class 11 & 12 Integrated Coaching Gurgaon',
                  'Class 12 Pass Dropper Ranker Batch Gurgaon',
                  'Class 9th & 10th Foundation Coaching Gurgaon',
                  'Ex-FIITJEE & VMC HOD Coaching Gurgaon',
                  'Chemistry classes by BM sir Gurgaon',
                  'NEET UG Medical Coaching Gurgaon',
                  'Class 11 & 12 Integrated Coaching Gurgaon',
                  'Class 12 Pass Dropper Ranker Batch Gurgaon',
                  'Class 9th & 10th Foundation Coaching Gurgaon',
                  'Ex-FIITJEE & VMC HOD Coaching Gurgaon',
                  'Chemistry classes by BM sir Gurgaon',
                ].map((kw, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-950 text-white border border-slate-800 hover:border-indigo-400 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold shadow-sm transition-all flex items-center gap-2 shrink-0 cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion Section for Rich Search Snippets */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={300} direction="up">
            <div className="text-center mb-8">
              <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                Frequently Asked Questions — Gurgaon Admissions
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {LOCAL_FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} delay={300 + idx * 80} direction="up">
                <div className="bg-white border-2 border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-heading font-black text-sm sm:text-base text-slate-950 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180 bg-indigo-600 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
