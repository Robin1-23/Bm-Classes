'use client';

import React from 'react';
import { Play, Sparkles, Trophy, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ResultsSection({ onOpenVideo }) {
  const ranks = [
    'AIR 18', 'AIR 22', 'AIR 52', 'AIR 102', 'AIR 350', 'AIR 1146', 'AIR 2043'
  ];

  const videoCards = [
    { title: 'Agrim Gupta — IIT Delhi', rank: 'JEE Advanced AIR 350' },
    { title: 'Chinmay Tuteja — IIT Delhi', rank: 'JEE Advanced AIR 1146' },
    { title: 'Ditya Goel — IIT Delhi', rank: 'JEE Advanced AIR 2043' },
  ];

  const writtenReviews = [
    {
      quote: "What you taught was something I was looking for — a personal touch which is simply not possible at big branded coaching factories.",
      author: "Mrigank Shekhar",
      sub: "Student · BmClasses",
      featured: false,
    },
    {
      quote: "Thanks to his guidance, I got admission into NSUT Main Campus (ITNS branch). Strong conceptual clarity and motivation throughout my preparation.",
      author: "Piya Saha",
      sub: "Student · NSUT Main Campus",
      featured: true,
    },
    {
      quote: "Pays personal attention to all students and clears all doubts. Focus on concept clarity and quality of questions results in stress-free preparation.",
      author: "Vansh Dua",
      sub: "Student · BmClasses",
      featured: false,
    },
  ];

  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 border-b border-slate-200/80 relative overflow-hidden" id="results">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>PROVEN TRACK RECORD</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Clarity that parents & students remember<span className="text-indigo-600">.</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-2xl mx-auto">
            Top ranks and admissions achieved by students under our Ex-HOD faculty mentorship.
          </p>
        </ScrollReveal>

        {/* AIR Rank Trophies */}
        <ScrollReveal delay={150} direction="up">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 sm:mb-18">
            {ranks.map((rank, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 text-white px-5 sm:px-6 py-3 rounded-2xl font-heading font-black text-xs sm:text-sm tracking-wide flex items-center gap-2.5 border border-slate-800 shadow-md hover:scale-105 transition-transform"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>JEE ADVANCED</span>
                <span className="text-amber-400">{rank}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg sm:max-w-none mx-auto mb-14 sm:mb-18">
          {writtenReviews.map((rev, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div 
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border shadow-md hover:-translate-y-1.5 h-full ${
                  rev.featured 
                    ? 'bg-slate-950 text-white border-indigo-500/40 shadow-2xl' 
                    : 'bg-white border-slate-200/90 text-slate-950 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                    rev.featured ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between">
                  <div>
                    <div className={`font-heading font-extrabold text-sm ${
                      rev.featured ? 'text-amber-400' : 'text-slate-950'
                    }`}>
                      {rev.author}
                    </div>
                    <div className={`text-[11px] font-semibold ${
                      rev.featured ? 'text-indigo-300' : 'text-indigo-600'
                    }`}>
                      {rev.sub}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg sm:max-w-none mx-auto">
          {videoCards.map((v, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div
                onClick={() => onOpenVideo(v.title + ' — ' + v.rank)}
                className="relative bg-slate-950 rounded-3xl overflow-hidden aspect-video cursor-pointer group flex items-center justify-center border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl z-10 border-2 border-white/20">
                  <Play className="w-6 h-6 fill-slate-950 ml-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <div className="font-heading font-black text-white text-base group-hover:text-amber-400 transition-colors">
                    {v.title}
                  </div>
                  <div className="text-xs text-amber-400 font-bold mt-0.5">
                    {v.rank}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
