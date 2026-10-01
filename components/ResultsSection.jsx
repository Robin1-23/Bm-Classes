'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, Trophy, Star, Play, X, Volume2, VolumeX, ArrowRight, ChevronLeft, ChevronRight, UserCheck, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import LazyVideo from '@/components/ui/LazyVideo';
import FoldText from '@/components/ui/FoldText';
import { useModal } from '@/context/ModalContext';
import { CENTER_INFO } from '@/data/contentData';

const REVIEWS_VIDEO_DATA = [
  {
    id: 1,
    name: 'Aaryan Jain',
    exam: 'JEE Main 99.48 Percentile',
    badge: 'AIR RANKER',
    file: '/videos/review1.mp4',
    quote: 'BM Sir\'s teaching helped me build a strong foundation and conceptual clarity.',
    badgeBg: 'from-indigo-500 to-indigo-600',
    borderColor: 'border-indigo-400/40',
    duration: '0:35',
  },
  {
    id: 2,
    name: 'Shaoni Mukherjee',
    exam: 'JEE Main & Advanced Qualifier',
    badge: 'JEE QUALIFIER',
    file: '/videos/review2.mp4',
    quote: 'Cleared all conceptual doubts and made Chemistry easy to understand.',
    badgeBg: 'from-emerald-500 to-indigo-600',
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
    badgeBg: 'from-indigo-500 to-amber-600',
    borderColor: 'border-indigo-400/40',
    duration: '0:40',
  },
  {
    id: 4,
    name: 'Abhay Rajvanshi',
    exam: 'JEE Main Ranker',
    badge: 'TOP RANKER',
    file: '/videos/review4.mp4',
    quote: 'One-on-one doubt solving sessions helped me achieve top score.',
    badgeBg: 'from-amber-500 to-amber-600',
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
    badgeBg: 'from-amber-500 to-emerald-600',
    borderColor: 'border-amber-400/40',
    duration: '0:38',
  },
  {
    id: 6,
    name: 'Class 12th Pinnacle Student',
    exam: 'AIR Top Ranker Review',
    badge: 'AIR TOP RANKER',
    file: '/videos/review6.mp4',
    quote: 'Small 10-15 student micro-batch attention made all the difference.',
    badgeBg: 'from-indigo-500 to-indigo-600',
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
    badgeBg: 'from-indigo-500 to-emerald-600',
    borderColor: 'border-indigo-400/40',
    duration: '0:36',
  },
];

const GoogleG = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
  </svg>
);

const DOTS = { backgroundImage: 'radial-gradient(rgba(15,23,42,0.07) 1px, transparent 1.3px)', backgroundSize: '14px 14px' };

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
    <section className="bg-[#f5f7ff] text-slate-950 py-20 lg:py-28 border-b border-[#e3e8f5] relative overflow-hidden" id="results">
      
      {/* Background Ambient Warm Cream Glows */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e3e8f5] text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <FoldText
              text="THE PROOF"
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
            <span className="sr-only">Ranks speak. Parents agree.</span>
            <FoldText
              text="Ranks speak. Parents agree."
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
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-semibold leading-relaxed max-w-2xl mx-auto">
            Real AIRs. Real Google reviews from Gurgaon parents.
          </p>
        </ScrollReveal>

        {/* AIR Rank Trophies: 2 Columns on Mobile, Flex Wrap on Desktop */}
        <ScrollReveal delay={150} direction="up">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-14 sm:mb-18 max-w-4xl mx-auto">
            {ranks.map((rank, idx) => (
              <div 
                key={idx}
                className="bg-white text-slate-950 px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl whitespace-nowrap font-heading font-extrabold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 border border-[#e3e8f5] shadow-xs hover:border-indigo-400 transition-all cursor-default text-center"
              >
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                <span className="text-slate-500 text-xs sm:text-xs">JEE ADV</span>
                <span className="text-indigo-600 font-bold">{rank}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>

      {/* Google reviews bento */}
      <ScrollReveal direction="up" className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={CENTER_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2 rounded-[28px] bg-[#c9d8e8] p-7 sm:p-9 flex flex-col min-h-[230px] text-[#14304f]"
            style={DOTS}
          >
            <GoogleG className="w-9 h-9" />
            <p className="font-heading text-3xl sm:text-4xl tracking-[-0.025em] leading-[1.1] mt-auto pt-8">
              Parents rate us
              <span className="block font-extrabold">{CENTER_INFO.googleRating} on Google</span>
            </p>
            <div className="flex items-center justify-between gap-4 mt-4">
              <span className="flex text-amber-500" aria-label={`${CENTER_INFO.googleRating} out of 5 stars`}>
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-5 h-5 fill-amber-400" />)}
              </span>
              <span className="text-sm font-semibold underline underline-offset-4 group-hover:no-underline">Read all reviews</span>
            </div>
          </a>

          <div className="rounded-[28px] bg-[#dccff7] p-7 sm:p-9 flex flex-col min-h-[230px] text-[#3b2370]" style={DOTS}>
            <div className="flex -space-x-2">
              {['/bm_sir.jpg', '/konika_mam.jpg', '/chumki_mam.jpeg'].map((src) => (
                <img key={src} src={src} alt="" loading="lazy" decoding="async" className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-[#dccff7]" />
              ))}
            </div>
            <p className="font-heading text-3xl tracking-[-0.025em] leading-[1.1] mt-auto pt-8">
              <span className="font-extrabold">{CENTER_INFO.googleReviewCount}</span> families
              <span className="block">reviewed us</span>
            </p>
            <a
              href={CENTER_INFO.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-fit h-10 px-4 inline-flex items-center rounded-full bg-white/80 hover:bg-white text-sm font-semibold transition-colors"
            >
              Write a review
            </a>
          </div>

          <div className="md:col-span-3 rounded-[28px] bg-[#d6e7c2] p-7 sm:p-9 grid md:grid-cols-[1fr_minmax(0,420px)] gap-6 items-center text-[#22401a]" style={DOTS}>
            <p className="font-heading text-3xl sm:text-4xl tracking-[-0.025em] leading-[1.1]">
              In their
              <span className="block font-extrabold">own words</span>
            </p>
            <figure className="bg-white rounded-2xl p-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.4)]">
              <span aria-hidden="true" className="font-heading font-extrabold text-4xl leading-none text-slate-300">“</span>
              <blockquote className="text-[15px] text-slate-700 leading-relaxed -mt-2">
                {WRITTEN_REVIEWS[0].quote.split('. ')[0]}.
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-slate-950">{WRITTEN_REVIEWS[0].author}</span>
                <span className="block text-slate-500">{WRITTEN_REVIEWS[0].sub}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </ScrollReveal>

      {/* Real Google Written Reviews — Infinite Moving Deck */}
      <ScrollReveal delay={200} direction="up" className="mb-16 sm:mb-20 w-full">
        <div className="overflow-hidden py-4 w-full">
          <div className="animate-marquee flex items-stretch gap-6">
            {[...WRITTEN_REVIEWS, ...WRITTEN_REVIEWS].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[310px] sm:w-[380px] lg:w-[410px] bg-white text-slate-950 border border-[#e3e8f5] hover:border-indigo-400 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.15)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between shrink-0 group cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold bg-[#eef1ff] text-slate-800 border border-[#e3e8f5] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-extrabold text-slate-950 text-sm group-hover:text-indigo-600 transition-colors">
                      {rev.author}
                    </div>
                    <div className="text-xs font-bold text-slate-600 mt-0.5">
                      {rev.sub}
                    </div>
                  </div>
                  <span className="text-slate-500 text-xs font-mono font-bold">5.0 ★</span>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Trophy className="w-4 h-4 text-indigo-600" />
              <span>STUDENT RANKER REELS (6 REELS)</span>
            </div>

            <h3 className="font-heading font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-tight">
              Watch Student <span className="text-indigo-600">Video Reviews</span>
            </h3>
          </div>

          {/* Desktop Laptop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left reviews"
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right reviews"
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs group"
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
                className={`snap-start shrink-0 w-[280px] sm:w-[310px] group/card relative bg-zinc-950 rounded-3xl overflow-hidden border ${rev.borderColor} hover:border-indigo-400/80 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/20 cursor-pointer flex flex-col h-[460px] sm:h-[480px]`}
              >
                {/* Background Video Preview (Silent Loop) */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
                  <LazyVideo
                    src={rev.file}
                    className="w-full h-full object-cover object-center transition-opacity duration-300 opacity-65 group-hover/card:opacity-85"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/60 pointer-events-none"></div>
                </div>

                {/* Top Duration Badge Overlay */}
                <div className="relative z-10 p-4 flex items-center justify-end">
                  <span className="text-xs font-bold text-zinc-300 bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10">
                    {rev.duration}
                  </span>
                </div>

                {/* Center Play Button Icon */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 text-white flex items-center justify-center group-hover/card:scale-115 group-hover/card:bg-indigo-400 group-hover/card:text-slate-950 group-hover/card:border-indigo-400 transition-all duration-300 shadow-2xl pl-1">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>

                {/* Bottom Info & CTA */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent flex flex-col gap-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-indigo-400" />
                    <span>{rev.name}</span>
                  </div>

                  <div className="text-xs font-bold text-zinc-300">
                    {rev.exam}
                  </div>

                  <div className="mt-1 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-white group-hover/card:text-indigo-300">
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current text-indigo-400" />
                      <span>Watch Review Reel</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover/card:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Swipe Indicator Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mt-2 px-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
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
                <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${activeReviewVideo.badgeBg} flex items-center justify-center font-bold text-xs text-white shadow-md`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{activeReviewVideo.name}</span>
                    <span className="text-xs px-1.5 py-0.2 rounded bg-indigo-400/20 text-indigo-300 font-semibold border border-indigo-400/30">
                      STUDENT REVIEW
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 font-bold">{activeReviewVideo.exam}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
                </button>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
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
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center shadow-2xl pl-1">
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
                className="w-full bg-indigo-400 hover:bg-indigo-300 text-slate-950 font-bold py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
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
