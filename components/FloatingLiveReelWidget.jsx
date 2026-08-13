'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Volume2, VolumeX, Maximize2, Sparkles, RefreshCw } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const FLOATING_REELS = [
  {
    id: 1,
    title: 'NCERT Biology Mastery Hacks',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology (20 Yrs Exp)',
    videoUrl: '/videos/learning1.mp4',
  },
  {
    id: 2,
    title: 'NEET High-Yield Concept Tricks',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology & Chemistry',
    videoUrl: '/videos/learning2.mp4',
  },
  {
    id: 3,
    title: 'Organic Chemistry Reaction Hacks',
    faculty: 'BM Sir',
    role: 'Ex-FIITJEE & VMC HOD Chemistry',
    videoUrl: '/videos/learn3.mp4',
  },
  {
    id: 4,
    title: 'Biology Concept Breakdown',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology & Chemistry',
    videoUrl: '/videos/learn4.mp4',
  },
  {
    id: 5,
    title: 'NCERT Biology & Chemistry Tips',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology (20 Yrs Exp)',
    videoUrl: '/videos/learn5.mp4',
  },
  {
    id: 6,
    title: 'Physical Chemistry Numerical Hacks',
    faculty: 'BM Sir',
    role: 'Ex-HOD Chemistry (20+ Yrs Exp)',
    videoUrl: '/videos/learn6.mp4',
  },
  {
    id: 7,
    title: 'JEE Advanced Problem Solving',
    faculty: 'BM Sir',
    role: 'Senior HOD Chemistry',
    videoUrl: '/videos/learn7.mp4',
  },
];

export default function FloatingLiveReelWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef(null);
  const { openVideo } = useModal();

  const currentReel = FLOATING_REELS[currentIndex];

  // Auto-shuffle to next video reel every 8 seconds
  useEffect(() => {
    if (isClosed || isMinimized) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLOATING_REELS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isClosed, isMinimized]);

  // Handle video end to shuffle immediately
  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % FLOATING_REELS.length);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleExpand = (e) => {
    e.stopPropagation();
    if (openVideo) {
      openVideo(currentReel.videoUrl, `${currentReel.faculty} - ${currentReel.title}`);
    }
  };

  if (isClosed) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-24 right-3 lg:bottom-28 lg:right-8 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-black/90 hover:bg-black text-white border border-cyan-400/50 px-3 py-2 rounded-full shadow-2xl flex items-center gap-2 group hover:scale-105 transition-all cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="text-[11px] font-black tracking-wide text-white">Live Classroom Reel</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-3 lg:bottom-28 lg:right-8 z-40 w-36 sm:w-40 lg:w-44 transition-all duration-300">
      
      {/* Floating Card Container */}
      <div 
        onClick={handleExpand}
        className="relative bg-slate-950 border-2 border-cyan-400/60 hover:border-cyan-300 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer group transition-all transform hover:-translate-y-1"
      >
        
        {/* Top Badges Header Bar */}
        <div className="absolute top-1.5 left-1.5 right-1.5 z-20 flex items-center justify-between pointer-events-none">
          {/* Live Pulsing Badge */}
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-red-500/50 text-[9px] font-black text-white shadow-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            <span>LIVE DEMO</span>
          </div>

          {/* Close & Minimize Actions */}
          <div className="flex items-center gap-1 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="p-1 rounded-full bg-black/75 hover:bg-black text-white transition-colors cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-2.5 h-2.5 text-zinc-300" /> : <Volume2 className="w-2.5 h-2.5 text-cyan-400" />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsClosed(true);
              }}
              className="p-1 rounded-full bg-black/75 hover:bg-red-600 text-white transition-colors cursor-pointer"
              title="Close widget"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* Video Player Box (Aspect 9:13 compact vertical format) */}
        <div className="relative aspect-[9/13] bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            autoPlay
            loop={false}
            muted={isMuted}
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

          {/* Center Play Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Bottom Title Bar */}
        <div className="p-2 bg-slate-950 border-t border-slate-800">
          <div className="flex items-center justify-between text-[9px] text-cyan-400 font-extrabold mb-0.5">
            <span>{currentReel.faculty}</span>
            <span className="flex items-center gap-1 text-zinc-400 text-[8px]">
              <RefreshCw className="w-2 h-2 animate-spin text-cyan-400" />
              Auto-shuffle
            </span>
          </div>

          <p className="text-[11px] font-bold text-white leading-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">
            {currentReel.title}
          </p>

          <div className="mt-1 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8.5px] font-black text-slate-300">
            <span className="text-cyan-400 uppercase tracking-wider">Tap to Expand</span>
            <span className="text-emerald-400">Classroom Reel ➔</span>
          </div>
        </div>

      </div>
    </div>
  );
}
