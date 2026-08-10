'use client';

import React from 'react';
import { Play, Sparkles, Trophy, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function ResultsSection({ onOpenVideo }) {
  const modal = useModal();
  const handleVideo = onOpenVideo || modal.openVideo;
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
      quote: "We enrolled our son in BM Sir's Chemistry classes towards the end of Class XI, and it has been a wonderful decision. We have seen a significant improvement not only in his academic performance but, more importantly, in his enthusiasm to learn, practice, and continuously improve. Thank you, Sir, for your invaluable guidance and support.",
      author: "Rajshree Mohanty",
      sub: "Parent · NEET Chemistry Batch",
      featured: true,
    },
    {
      quote: "Bighnaraj Sir is an excellent teacher who explains every concept with great clarity. His one-on-one doubt sessions were incredibly helpful and made a huge difference in my preparation. Thanks to his guidance and teaching, I was able to secure a good rank in JEE.",
      author: "Shaurya Sisaudia",
      sub: "Student · JEE Ranker",
      featured: false,
    },
    {
      quote: "I was a student of Konika Ma'am for a year. She taught Biology. Had a great depth of knowledge and always cleared my concepts. It helped me to focus on competitive and boards exam and I was able to score amazing. Thank you for your support.",
      author: "Tanishka Patil",
      sub: "Student · Biology NEET & Boards",
      featured: true,
    },
    {
      quote: "Bighnaraj Sir is a great teacher and mentor. My daughter started taking chemistry classes from sir a few months back. Her interest & understanding in the subject improved remarkably after attending classes. Sir gives personal attention to each child during classes and helps them in improving.",
      author: "Sunaina K",
      sub: "Parent · Chemistry Mentorship",
      featured: false,
    },
    {
      quote: "Bighnaraj Sir is incredibly hardworking and dedicated, ensuring every student understands the subject thoroughly. His vast knowledge and clear explanations help build strong fundamentals, making complex concepts easy to grasp. These classes have significantly boosted my confidence.",
      author: "Aaryan Jain",
      sub: "Student · Concept Mastery",
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
            <span>REAL GOOGLE REVIEWS</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Clarity that parents & students remember<span className="text-indigo-600">.</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-2xl mx-auto">
            Authentic Google reviews from Gurgaon parents and top JEE & NEET rankers.
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
                <Trophy className="w-4 h-4 text-cyan-300" />
                <span>JEE ADVANCED</span>
                <span className="text-cyan-300">{rank}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Real Reviews Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg sm:max-w-none mx-auto mb-14 sm:mb-18">
          {writtenReviews.map((rev, idx) => (
            <ScrollReveal key={idx} delay={120 * (idx + 1)} direction="up">
              <div 
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border shadow-md hover:-translate-y-1.5 h-full ${
                  rev.featured 
                    ? 'bg-slate-950 text-white border-indigo-500/40 shadow-2xl' 
                    : 'bg-white border-slate-200/90 text-slate-950 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium italic ${
                    rev.featured ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between">
                  <div>
                    <div className={`font-heading font-black text-sm ${
                      rev.featured ? 'text-cyan-300' : 'text-slate-950'
                    }`}>
                      {rev.author}
                    </div>
                    <div className={`text-[11px] font-bold ${
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
                onClick={() => handleVideo(v.title + ' — ' + v.rank)}
                className="relative bg-slate-950 rounded-3xl overflow-hidden aspect-video cursor-pointer group flex items-center justify-center border border-slate-800 shadow-xl hover:border-indigo-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl z-10 border-2 border-white/20">
                  <Play className="w-6 h-6 fill-slate-950 ml-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                  <div className="font-heading font-black text-white text-base group-hover:text-cyan-300 transition-colors">
                    {v.title}
                  </div>
                  <div className="text-xs text-cyan-300 font-bold mt-0.5">
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
