'use client';

import React, { useState, useRef } from 'react';
import { Play, X, Volume2, VolumeX, Sparkles, ArrowRight, Award, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import VideoCard from '@/components/ui/VideoCard';
import FoldText from '@/components/ui/FoldText';
import { useModal } from '@/context/ModalContext';

const REELS = [
  {
    id: 1,
    title: 'NCERT Biology Mastery & Diagram Hacks',
    faculty: 'KONIKA MAM',
    role: 'Head of Biology (20 Yrs Exp)',
    videoUrl: '/videos/learning1.mp4',
    badgeColor: 'from-amber-500 to-emerald-600',
    borderColor: 'border-amber-400/40',
    accentText: 'text-amber-400',
    btnColor: 'bg-amber-500 text-white hover:bg-amber-400',
    tag: 'BIOLOGY',
    duration: '0:30',
  },
  {
    id: 2,
    title: 'NEET High-Yield Concepts & NCERT Tricks',
    faculty: 'KONIKA MAM',
    role: 'Head of Biology & Chemistry',
    videoUrl: '/videos/learning2.mp4',
    badgeColor: 'from-emerald-500 to-indigo-600',
    borderColor: 'border-emerald-400/40',
    accentText: 'text-emerald-400',
    btnColor: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
    tag: 'NEET BIOLOGY',
    duration: '0:35',
  },
  {
    id: 3,
    title: 'Organic & Physical Chemistry Reaction Hacks',
    faculty: 'BM SIR',
    role: 'Ex-FIITJEE & VMC HOD Chemistry (20+ Yrs Exp)',
    videoUrl: '/videos/learn3.mp4',
    badgeColor: 'from-indigo-500 to-indigo-600',
    borderColor: 'border-indigo-400/40',
    accentText: 'text-indigo-400',
    btnColor: 'bg-indigo-400 text-slate-950 hover:bg-indigo-300',
    tag: 'CHEMISTRY',
    duration: '0:40',
  },
  {
    id: 4,
    title: 'Biology & Chemistry Teaching Reel',
    faculty: 'KONIKA MAM',
    role: 'Head of Biology & Chemistry (20 Yrs Exp)',
    videoUrl: '/videos/learn4.mp4',
    badgeColor: 'from-amber-500 to-indigo-600',
    borderColor: 'border-amber-400/40',
    accentText: 'text-amber-400',
    btnColor: 'bg-amber-500 text-white hover:bg-amber-400',
    tag: 'KONIKA MAM',
    duration: '0:32',
  },
  {
    id: 5,
    title: 'Biology & Chemistry Concept Hacks',
    faculty: 'KONIKA MAM',
    role: 'Head of Biology & Chemistry (20 Yrs Exp)',
    videoUrl: '/videos/learn5.mp4',
    badgeColor: 'from-amber-500 to-indigo-600',
    borderColor: 'border-amber-400/40',
    accentText: 'text-amber-400',
    btnColor: 'bg-amber-500 text-white hover:bg-amber-400',
    tag: 'KONIKA MAM',
    duration: '0:38',
  },
  {
    id: 6,
    title: 'Organic & Physical Chemistry Hacks',
    faculty: 'BM SIR',
    role: 'Ex-FIITJEE & VMC HOD Chemistry (20+ Yrs Exp)',
    videoUrl: '/videos/learn6.mp4',
    badgeColor: 'from-indigo-500 to-indigo-600',
    borderColor: 'border-indigo-400/40',
    accentText: 'text-indigo-400',
    btnColor: 'bg-indigo-400 text-slate-950 hover:bg-indigo-300',
    tag: 'BM SIR',
    duration: '0:34',
  },
  {
    id: 7,
    title: 'JEE Advanced Chemistry Problem Solving',
    faculty: 'BM SIR',
    role: 'Ex-Academic Head VMC & Ex-FIITJEE',
    videoUrl: '/videos/learn7.mp4',
    badgeColor: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-400/40',
    accentText: 'text-amber-400',
    btnColor: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
    tag: 'BM SIR',
    duration: '0:42',
  },
];

export default function ReelShowcaseSection() {
  const { openRegister } = useModal();
  const [activeReel, setActiveReel] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleOpenReel = (reel) => {
    setActiveReel(reel);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleClose = () => {
    setActiveReel(null);
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
    <section className="py-20 lg:py-28 bg-white text-slate-950 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Background Ambient Lighting Orbs */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Left/Right Laptop Control Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-center md:text-left max-w-2xl">
            <ScrollReveal delay={100} direction="down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <FoldText
                  text="INSIDE THE CLASSROOM"
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
            </ScrollReveal>

            <ScrollReveal delay={150} direction="up">
              <h2 className="font-heading font-extrabold tracking-[-0.03em] leading-tight">
                <FoldText
                  text="Sit in on a class. Right now."
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
            </ScrollReveal>
          </div>

          {/* Desktop Laptop Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left reels"
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right reels"
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* SWIPEABLE CAROUSEL CONTAINER (MARQUEE TOUCH SWIPE & DESKTOP ARROW SUPPORT) */}
        <div className="relative group/carousel">
          <div 
            ref={carouselRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 px-1 scroll-smooth"
          >
            {REELS.map((reel, index) => (
              <VideoCard key={reel.id} src={reel.videoUrl} duration={reel.duration} title={reel.title} subtitle={reel.role} onClick={() => handleOpenReel(reel)} />
            ))}
          </div>

          {/* Swipe Indicator Bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mt-2 px-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>Swipe left or use arrows to view all teaching reels</span>
            </span>
          </div>
        </div>

      </div>

      {/* Fullscreen Vertical Reel Player Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[800px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
            
            {/* Top Modal Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${activeReel.badgeColor} flex items-center justify-center font-bold text-xs text-white shadow-md`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{activeReel.faculty}</span>
                    <span className="text-xs px-1.5 py-0.2 rounded bg-indigo-400/20 text-indigo-300 font-semibold border border-indigo-400/30">
                      CLASSROOM REEL
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 font-bold">{activeReel.role}</div>
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
                src={activeReel.videoUrl}
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
                className={`w-full ${activeReel.btnColor} font-bold py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer`}
              >
                <span>Book Free Trial Batch with {activeReel.faculty}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
