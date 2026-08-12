'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, X, Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const STORIES = [
  {
    id: 1,
    title: 'Physics Mechanics',
    tag: 'BM SIR',
    subtitle: 'JEE Advanced Problem Hack',
    videoUrl: '/videos/learning1.mp4',
    badgeColor: 'from-cyan-500 to-indigo-600',
    avatarText: 'BM',
    role: 'Ex-FIITJEE HOD Physics',
  },
  {
    id: 2,
    title: 'Chemistry NCERT',
    tag: 'KONIKA MAM',
    subtitle: 'NEET Organic Reaction Trick',
    videoUrl: '/videos/learning2.mp4',
    badgeColor: 'from-purple-500 to-pink-600',
    avatarText: 'KM',
    role: 'Ex-VMC HOD Chemistry',
  },
  {
    id: 3,
    title: 'Micro-Batch Doubt',
    tag: '1-ON-1 CLASS',
    subtitle: 'Individual Doubt Resolution',
    videoUrl: '/videos/learn3.mp4',
    badgeColor: 'from-emerald-500 to-teal-600',
    avatarText: '10x',
    role: '10-15 Student Capped Batch',
  },
  {
    id: 4,
    title: 'AIR Rank Formula',
    tag: 'EX-HOD METHOD',
    subtitle: 'Concept Mastery & Speed',
    videoUrl: '/videos/learn4.mp4',
    badgeColor: 'from-amber-500 to-orange-600',
    avatarText: 'AIR',
    role: '20+ Yrs Teaching Excellence',
  },
];

export default function ClassroomStories() {
  const { openRegister } = useModal();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const activeStory = activeIndex !== null ? STORIES[activeIndex] : null;

  // Handle Video Time Progress
  useEffect(() => {
    let interval;
    if (activeStory && isPlaying && videoRef.current) {
      interval = setInterval(() => {
        if (videoRef.current) {
          const current = videoRef.current.currentTime || 0;
          const duration = videoRef.current.duration || 1;
          const pct = (current / duration) * 100;
          setProgress(pct);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [activeStory, isPlaying]);

  const handleOpenStory = (index) => {
    setActiveIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleClose = () => {
    setActiveIndex(null);
    setProgress(0);
  };

  const handleNext = () => {
    if (activeIndex < STORIES.length - 1) {
      setActiveIndex(activeIndex + 1);
      setProgress(0);
      setIsPlaying(true);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Instagram Stories Section Bar */}
      <section className="bg-slate-950 border-y border-zinc-800 py-6 px-4 relative overflow-hidden">
        
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Header Title */}
          <div className="flex items-center gap-3 text-center md:text-left shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-slate-950 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-400 text-[10px] font-black uppercase tracking-wider mb-0.5">
                <span>CLASSROOM REELS</span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-black text-white tracking-tight">
                See BM Sir & Konika Mam Teaching Live
              </h3>
            </div>
          </div>

          {/* Story Bubbles Carousel */}
          <div className="flex items-center gap-4 xs:gap-6 overflow-x-auto pb-2 pt-1 w-full md:w-auto scrollbar-none justify-start md:justify-end">
            {STORIES.map((story, index) => (
              <button
                key={story.id}
                onClick={() => handleOpenStory(index)}
                className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer focus:outline-none"
              >
                {/* Gradient Story Ring */}
                <div className={`p-0.5 rounded-full bg-gradient-to-tr ${story.badgeColor} shadow-lg group-hover:scale-105 transition-all duration-300 relative`}>
                  
                  {/* Outer Pulsing Glow */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-sm group-hover:blur-md transition-all"></div>

                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-slate-950 p-0.5 relative z-10 flex items-center justify-center overflow-hidden border border-zinc-800">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${story.badgeColor} flex items-center justify-center font-black text-xs text-white shadow-inner`}>
                      {story.avatarText}
                    </div>
                    {/* Overlay Play Icon */}
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-md pl-0.5">
                        <Play className="w-3 h-3 fill-slate-950" />
                      </div>
                    </div>
                  </div>

                  {/* LIVE Badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full border border-slate-950 tracking-wider shadow-sm">
                    REEL
                  </div>
                </div>

                {/* Bubble Text Label */}
                <div className="text-center max-w-[80px]">
                  <div className="text-[11px] font-extrabold text-white leading-tight truncate group-hover:text-cyan-300 transition-colors">
                    {story.title}
                  </div>
                  <div className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider truncate">
                    {story.tag}
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Full-Screen Vertical Reel Story Viewer Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4">
          
          {/* Main Reel Container (9:16 Aspect Ratio) */}
          <div className="relative w-full max-w-sm sm:max-w-md h-[88vh] max-h-[780px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
            
            {/* Top Story Progress Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex flex-col gap-2">
              <div className="flex gap-1.5">
                {STORIES.map((s, idx) => (
                  <div key={s.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 transition-all duration-100 ease-linear"
                      style={{
                        width:
                          idx < activeIndex
                            ? '100%'
                            : idx === activeIndex
                            ? `${progress}%`
                            : '0%',
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Story Header Info */}
              <div className="flex items-center justify-between text-white mt-1">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${activeStory.badgeColor} flex items-center justify-center font-black text-xs text-white shadow-md`}>
                    {activeStory.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>{activeStory.tag}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-300 font-extrabold border border-cyan-400/30">
                        TEACHING REEL
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-300 font-bold">{activeStory.role}</div>
                  </div>
                </div>

                {/* Controls: Mute, Pause, Close */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={activeStory.videoUrl}
                autoPlay
                playsInline
                muted={isMuted}
                onEnded={handleNext}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Pause Overlay Indicator */}
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

              {/* Navigation Left / Right Taps */}
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md disabled:opacity-30 cursor-pointer z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md cursor-pointer z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Floating Reel CTA Banner */}
            <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/70 border-t border-zinc-800/80 relative z-30 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-white">{activeStory.title}</div>
                  <div className="text-[11px] text-cyan-300 font-extrabold">{activeStory.subtitle}</div>
                </div>
                <div className="text-[10px] text-emerald-400 font-black bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/60">
                  10-15 Student Micro-Batch
                </div>
              </div>

              <button
                onClick={() => {
                  handleClose();
                  if (openRegister) openRegister();
                }}
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black py-3 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Book Free Trial Batch with {activeStory.tag}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
