'use client';

import React from 'react';
import { Sparkles, Trophy, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';
import VideoReelCard from '@/components/VideoReelCard';

export default function ResultsSection({ onOpenVideo }) {
  const modal = useModal();
  const handleVideo = onOpenVideo || modal.openVideo;
  const ranks = [
    'AIR 18', 'AIR 22', 'AIR 52', 'AIR 102', 'AIR 350', 'AIR 1146', 'AIR 2043'
  ];

  const videoCards = [
    {
      file: '/videos/review1.mp4',
      name: 'Aaryan Jain',
      exam: 'JEE Main',
      result: '99.48 Percentile',
      quote: '"BM Sir\'s teaching helped me build a strong foundation and conceptual clarity of the subject."',
    },
    {
      file: '/videos/review2.mp4',
      name: 'Shaoni Mukherjee',
      exam: 'JEE Main & Advanced',
      result: 'JEE Qualifier',
      quote: '"Cleared all conceptual doubts and made Chemistry easy to understand."',
    },
    {
      file: '/videos/review3.mp4',
      name: 'Shaurya Sisodia',
      exam: 'JEE Main',
      result: '99%+ Percentile',
      quote: '"Daily DPPs, regular mock tests and timely doubt clarity helped me a lot."',
    },
    {
      file: '/videos/review4.mp4',
      name: 'Abhay Rajvanshi',
      exam: 'JEE Main',
      result: 'JEE Qualifier',
      quote: '"One-on-one doubt solving sessions helped me a lot."',
    },
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

      </div>{/* end max-w-7xl */}

      {/* Real Google Reviews — Full Viewport Width Infinite Moving Deck */}
      <ScrollReveal delay={200} direction="up" className="mb-14 sm:mb-18 w-full">
        <div className="overflow-hidden py-4 w-full">
          <div className="animate-marquee flex items-stretch gap-6">
            {[...writtenReviews, ...writtenReviews].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[310px] sm:w-[380px] lg:w-[410px] bg-black text-white border-2 border-zinc-800 hover:border-cyan-400 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(34,211,238,0.25)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between shrink-0 group cursor-pointer relative"
              >
                <div>
                  {/* Header Row: Stars & Google Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>

                  {/* Quote Text in Pure White */}
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium italic mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-black text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {rev.author}
                    </div>
                    <div className="text-[11px] font-bold text-cyan-400 mt-0.5">
                      {rev.sub}
                    </div>
                  </div>
                  <span className="text-slate-400 text-xs font-mono font-bold">5.0 ★</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Real Student Video Testimonials — Reel Format */}
        <ScrollReveal delay={150} direction="up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {videoCards.map((v, idx) => (
              <VideoReelCard
                key={idx}
                file={v.file}
                name={v.name}
                exam={v.exam}
                result={v.result}
                quote={v.quote}
              />
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
