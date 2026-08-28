'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, Trophy, Star, Play, X, Volume2, VolumeX, ArrowRight, ChevronLeft, ChevronRight, UserCheck, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FoldText from '@/components/ui/FoldText';
import { useModal } from '@/context/ModalContext';

const REVIEWS_VIDEO_DATA = [
  {
    id: 1,
    name: 'Aaryan Jain',
    exam: 'JEE Main 99.48 Percentile',
    badge: 'AIR RANKER',
    file: '/videos/review1.mp4',
    quote: 'BM Sir\'s teaching helped me build a strong foundation and conceptual clarity.',
    badgeBg: 'from-cyan-500 to-indigo-600',
    borderColor: 'border-cyan-400/40',
    duration: '0:35',
  },
  {
    id: 2,
    name: 'Shaoni Mukherjee',
    exam: 'JEE Main & Advanced Qualifier',
    badge: 'JEE QUALIFIER',
    file: '/videos/review2.mp4',
    quote: 'Cleared all conceptual doubts and made Chemistry easy to understand.',
    badgeBg: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-400/40',
    duration: '0:30',
  },
  {
    id: 3,
    name: 'Shaurya Sisodia',
    exam: 'JEE Main 99%+ Percentile',
    badge: '99%+ PERCENTILE',
    file: '/videos/review3.mp4',
    quote: 'Daily DPPs, regular mock tests and timely doubt clarity helped me a lot.',
    badgeBg: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400/40',
    duration: '0:40',
  },
  {
    id: 4,
    name: 'Abhay Rajvanshi',
    exam: 'JEE Main Ranker',
    badge: 'TOP RANKER',
    file: '/videos/review4.mp4',
    quote: 'One-on-one doubt solving sessions helped me achieve top score.',
    badgeBg: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-400/40',
    duration: '0:32',
  },
  {
    id: 5,
    name: 'JEE & NEET Top Ranker',
    exam: 'Best Result Success Story',
    badge: 'BEST RESULT',
    file: '/videos/review5.mp4',
    quote: 'Direct 1-on-1 Ex-HOD mentorship transformed my problem solving speed.',
    badgeBg: 'from-pink-500 to-emerald-600',
    borderColor: 'border-pink-400/40',
    duration: '0:38',
  },
  {
    id: 6,
    name: 'Class 12th Pinnacle Student',
    exam: 'AIR Top Ranker Review',
    badge: 'AIR TOP RANKER',
    file: '/videos/review6.mp4',
    quote: 'Small 10-15 student micro-batch attention made all the difference.',
    badgeBg: 'from-indigo-500 to-cyan-600',
    borderColor: 'border-indigo-400/40',
    duration: '0:42',
  },
  {
    id: 7,
    name: 'Class 12th Pinnacle Student',
    exam: 'JEE & NEET High Score Success Story',
    badge: 'STUDENT REVIEW',
    file: '/videos/review7.mp4',
    quote: 'First-principles teaching and zero-backlog doubt solving helped me excel.',
    badgeBg: 'from-cyan-500 to-emerald-600',
    borderColor: 'border-cyan-400/40',
    duration: '0:36',
  },
];

const WRITTEN_REVIEWS = [
  {
    quote: "We enrolled our son in BM Sir's Chemistry classes towards the end of Class XI, and it has been a wonderful decision. We have seen a significant improvement not only in his academic performance but, more importantly, in his enthusiasm to learn, practice, and continuously improve. Thank you, Sir, for your invaluable guidance and support.",
    author: "Rajshree Mohanty",
    sub: "Parent · NEET Chemistry Batch",
  },
  {
    quote: "Bighnaraj Sir is an excellent teacher who explains every concept with great clarity. His one-on-one doubt sessions were incredibly helpful and made a huge difference in my preparation. Thanks to his guidance and teaching, I was able to secure a good rank in JEE.",
    author: "Shaurya Sisaudia",
    sub: "Student · JEE Ranker",
  },
  {
    quote: "I was a student of Konika Ma'am for a year. She taught Biology. Had a great depth of knowledge and always cleared my concepts. It helped me to focus on competitive and boards exam and I was able to score amazing. Thank you for your support.",
    author: "Tanishka Patil",
    sub: "Student · Biology NEET & Boards",
  },
  {
    quote: "Bighnaraj Sir is a great teacher and mentor. My daughter started taking chemistry classes from sir a few months back. Her interest & understanding in the subject improved remarkably after attending classes. Sir gives personal attention to each child during classes and helps them in improving.",
    author: "Sunaina K",
    sub: "Parent · Chemistry Mentorship",
  },
  {
    quote: "Bighnaraj Sir is incredibly hardworking and dedicated, ensuring every student understands the subject thoroughly. His vast knowledge and clear explanations help build strong fundamentals, making complex concepts easy to grasp. These classes have significantly boosted my confidence.",
    author: "Aaryan Jain",
    sub: "Student · Concept Mastery",
  },
];

export default function ResultsSection() {
  const { openRegister } = useModal();
  const [activeReviewVideo, setActiveReviewVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);
  const reviewCarouselRef = useRef(null);

  const ranks = ['AIR 18', 'AIR 22', 'AIR 52', 'AIR 102', 'AIR 350', 'AIR 1146', 'AIR 2043'];

  const scrollLeft = () => {
    if (reviewCarouselRef.current) {
      reviewCarouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (reviewCarouselRef.current) {
      reviewCarouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleOpenReview = (rev) => {
    setActiveReviewVideo(rev);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleClose = () => {
    setActiveReviewVideo(null);
  };

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-black text-white py-20 sm:py-28 border-b border-zinc-900 relative overflow-hidden" id="results">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <FoldText
              text="REAL GOOGLE REVIEWS & STUDENT RANKERS"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.45}
              stagger={0.015}
              fontSize="12px"
              fontWeight={900}
              color="#22d3ee"
            />
          </div>
          
          <h2 className="font-heading tracking-tight leading-[1.15] mt-1 mb-2">
            <span className="sr-only">Clarity That Parents & Students Remember</span>
            <FoldText
              text="Clarity That Parents & Students Remember"
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.04}
              fontSize="clamp(1.75rem, 4vw, 3rem)"
              fontWeight={900}
              color="#ffffff"
            />
          </h2>
          
          <p className="text-zinc-300 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-2xl mx-auto">
            Authentic Google reviews from Gurgaon parents and top JEE & NEET rankers.
          </p>
        </ScrollReveal>

        {/* AIR Rank Trophies: 2 Columns on Mobile, Flex Wrap on Desktop */}
        <ScrollReveal delay={150} direction="up">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-14 sm:mb-18 max-w-4xl mx-auto">
            {ranks.map((rank, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-heading font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 border-2 border-zinc-800 hover:border-cyan-400 shadow-md hover:scale-105 transition-all cursor-default text-center"
              >
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                <span className="text-zinc-400 text-[10px] sm:text-xs">JEE ADV</span>
                <span className="text-cyan-300 font-extrabold">{rank}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>

      {/* Real Google Written Reviews — Infinite Moving Deck */}
      <ScrollReveal delay={200} direction="up" className="mb-16 sm:mb-20 w-full">
        <div className="overflow-hidden py-4 w-full">
          <div className="animate-marquee flex items-stretch gap-6">
            {[...WRITTEN_REVIEWS, ...WRITTEN_REVIEWS].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[310px] sm:w-[380px] lg:w-[410px] bg-zinc-950 text-white border-2 border-zinc-800 hover:border-cyan-400 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_50px_-10px_rgba(34,211,238,0.2)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between shrink-0 group cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium italic mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-black text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {rev.author}
                    </div>
                    <div className="text-[11px] font-bold text-cyan-400 mt-0.5">
                      {rev.sub}
                    </div>
                  </div>
                  <span className="text-zinc-400 text-xs font-mono font-bold">5.0 ★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* STUDENT RANKER REELS SECTION (EXACTLY MATCHING TEACHER REELS CAROUSEL) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Left/Right Laptop Control Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>STUDENT RANKER REELS (6 REELS)</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Watch Student <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Video Reviews</span>
            </h3>
          </div>

          {/* Desktop Laptop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left reviews"
              className="w-12 h-12 rounded-2xl bg-zinc-900 hover:bg-cyan-400 text-white hover:text-slate-950 border border-zinc-800 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right reviews"
              className="w-12 h-12 rounded-2xl bg-zinc-900 hover:bg-cyan-400 text-white hover:text-slate-950 border border-zinc-800 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* SWIPEABLE CAROUSEL CONTAINER (MARQUEE TOUCH SWIPE & DESKTOP ARROW SUPPORT) */}
        <div className="relative group/carousel">
          <div 
            ref={reviewCarouselRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 px-1 scroll-smooth"
          >
            {REVIEWS_VIDEO_DATA.map((rev, index) => (
              <div 
                key={rev.id}
                onClick={() => handleOpenReview(rev)}
                className={`snap-start shrink-0 w-[280px] sm:w-[310px] group/card relative bg-zinc-950 rounded-3xl overflow-hidden border ${rev.borderColor} hover:border-cyan-400/80 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 cursor-pointer flex flex-col h-[460px] sm:h-[480px]`}
              >
                {/* Background Video Preview (Silent Loop) */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
                  <video 
                    src={rev.file} 
                    muted 
                    loop 
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 opacity-65 group-hover/card:opacity-85"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/60 pointer-events-none"></div>
                </div>

                {/* Top Duration Badge Overlay */}
                <div className="relative z-10 p-4 flex items-center justify-end">
                  <span className="text-[11px] font-black text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {rev.duration}
                  </span>
                </div>

                {/* Center Play Button Icon */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 text-white flex items-center justify-center backdrop-blur-md group-hover/card:scale-115 group-hover/card:bg-cyan-400 group-hover/card:text-slate-950 group-hover/card:border-cyan-400 transition-all duration-300 shadow-2xl pl-1">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>

                {/* Bottom Info & CTA */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent flex flex-col gap-1.5">
                  <div className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                    <span>{rev.name}</span>
                  </div>

                  <div className="text-[11px] font-bold text-zinc-300">
                    {rev.exam}
                  </div>

                  <div className="mt-1 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-black text-white group-hover/card:text-cyan-300">
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current text-cyan-400" />
                      <span>Watch Review Reel</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/card:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Swipe Indicator Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mt-2 px-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Swipe left or use arrows to view all student reviews</span>
            </span>
          </div>
        </div>

      </div>

      {/* Fullscreen Vertical Reel Player Modal */}
      {activeReviewVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[800px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
            
            {/* Top Modal Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${activeReviewVideo.badgeBg} flex items-center justify-center font-black text-xs text-white shadow-md`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-white flex items-center gap-1.5">
                    <span>{activeReviewVideo.name}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-300 font-extrabold border border-cyan-400/30">
                      STUDENT REVIEW
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-300 font-bold">{activeReviewVideo.exam}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                </button>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Canvas */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={modalVideoRef}
                src={activeReviewVideo.file}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center cursor-pointer z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center backdrop-blur-md shadow-2xl pl-1">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Modal CTA Bar */}
            <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80 border-t border-zinc-800 relative z-30 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleClose();
                  if (openRegister) openRegister();
                }}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Book Free Trial Batch at BM Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
