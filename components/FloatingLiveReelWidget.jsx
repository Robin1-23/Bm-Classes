'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Volume2, VolumeX, Maximize2, Sparkles, ArrowRight, Award } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const FLOATING_REELS = [
  {
    id: 1,
    title: 'NCERT Biology Mastery & Diagram Hacks',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology (20 Yrs Exp)',
    videoUrl: '/videos/learning1.mp4',
    badgeColor: 'from-pink-500 to-emerald-600',
    btnColor: 'bg-pink-500 text-white hover:bg-pink-400',
  },
  {
    id: 2,
    title: 'NEET High-Yield Concept Tricks',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology & Chemistry',
    videoUrl: '/videos/learning2.mp4',
    badgeColor: 'from-emerald-500 to-teal-600',
    btnColor: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
  },
  {
    id: 3,
    title: 'Organic Chemistry Reaction Hacks',
    faculty: 'BM Sir',
    role: 'Ex-FIITJEE & VMC HOD Chemistry',
    videoUrl: '/videos/learn3.mp4',
    badgeColor: 'from-cyan-500 to-indigo-600',
    btnColor: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
  },
  {
    id: 4,
    title: 'Biology Concept Breakdown',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology & Chemistry',
    videoUrl: '/videos/learn4.mp4',
    badgeColor: 'from-pink-500 to-purple-600',
    btnColor: 'bg-pink-500 text-white hover:bg-pink-400',
  },
  {
    id: 5,
    title: 'NCERT Biology & Chemistry Tips',
    faculty: 'Konika Ma\'am',
    role: 'Head of Biology (20 Yrs Exp)',
    videoUrl: '/videos/learn5.mp4',
    badgeColor: 'from-pink-500 to-purple-600',
    btnColor: 'bg-pink-500 text-white hover:bg-pink-400',
  },
  {
    id: 6,
    title: 'Physical Chemistry Numerical Hacks',
    faculty: 'BM Sir',
    role: 'Ex-HOD Chemistry (20+ Yrs Exp)',
    videoUrl: '/videos/learn6.mp4',
    badgeColor: 'from-cyan-500 to-indigo-600',
    btnColor: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
  },
  {
    id: 7,
    title: 'JEE Advanced Problem Solving',
    faculty: 'BM Sir',
    role: 'Senior HOD Chemistry',
    videoUrl: '/videos/learn7.mp4',
    badgeColor: 'from-cyan-500 to-indigo-600',
    btnColor: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
  },
];

export default function FloatingLiveReelWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIsPlaying, setModalIsPlaying] = useState(true);
  const [modalIsMuted, setModalIsMuted] = useState(false);

  const videoRef = useRef(null);
  const fullModalVideoRef = useRef(null);
  const { openRegister } = useModal();

  const currentReel = FLOATING_REELS[currentIndex];

  // Auto-shuffle to next video reel every 8 seconds when modal is NOT open
  useEffect(() => {
    if (isClosed || isMinimized || isModalOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLOATING_REELS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isClosed, isMinimized, isModalOpen]);

  // Handle video end to shuffle immediately
  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % FLOATING_REELS.length);
  };

  const handleExpand = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(true);
    setModalIsPlaying(true);
    setModalIsMuted(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleModalPlay = () => {
    if (fullModalVideoRef.current) {
      if (modalIsPlaying) {
        fullModalVideoRef.current.pause();
      } else {
        fullModalVideoRef.current.play();
      }
      setModalIsPlaying(!modalIsPlaying);
    }
  };

  const toggleModalMute = () => {
    if (fullModalVideoRef.current) {
      fullModalVideoRef.current.muted = !modalIsMuted;
      setModalIsMuted(!modalIsMuted);
    }
  };

  if (isClosed) return null;

  return (
    <>
      {/* 1. FLOATING MINI WIDGET */}
      {isMinimized ? (
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
      ) : (
        <div className="fixed bottom-24 right-3 lg:bottom-28 lg:right-8 z-40 w-36 sm:w-40 lg:w-44 transition-all duration-300">
          <div 
            onClick={handleExpand}
            className="relative bg-slate-950 border-2 border-cyan-400/60 hover:border-cyan-300 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer group transition-all transform hover:-translate-y-1"
          >
            {/* Top Header Bar */}
            <div className="absolute top-1.5 left-1.5 right-1.5 z-20 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-red-500/50 text-[9px] font-black text-white shadow-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
                <span>LIVE DEMO</span>
              </div>

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

            {/* Video Canvas Box */}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Title Bar */}
            <div className="p-2 bg-slate-950 border-t border-slate-800">
              <div className="text-[9px] text-cyan-400 font-extrabold mb-0.5">
                <span>{currentReel.faculty}</span>
              </div>

              <p className="text-[11px] font-bold text-white leading-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">
                {currentReel.title}
              </p>

              <div className="mt-1 pt-1 border-t border-slate-800/80 text-[8.5px] font-black text-slate-300 text-center">
                <span className="text-cyan-400 uppercase tracking-wider">Tap to Expand ➔</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. FULL-SCREEN EXPANDED REEL PLAYER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-sm sm:max-w-md bg-slate-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[85vh] sm:h-[88vh]">
            
            {/* Top Modal Header */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${currentReel.badgeColor} flex items-center justify-center font-black text-xs text-white shadow-md`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-white flex items-center gap-1.5">
                    <span>{currentReel.faculty}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-300 font-extrabold border border-cyan-400/30">
                      LIVE CLASSROOM REEL
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-300 font-bold">{currentReel.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleModalMute}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  {modalIsMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Canvas */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={fullModalVideoRef}
                src={currentReel.videoUrl}
                autoPlay
                playsInline
                loop
                muted={modalIsMuted}
                onClick={toggleModalPlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {!modalIsPlaying && (
                <div 
                  onClick={toggleModalPlay}
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
              <div className="text-xs font-bold text-slate-200 line-clamp-1">
                {currentReel.title}
              </div>

              <button
                onClick={() => {
                  handleCloseModal();
                  if (openRegister) openRegister();
                }}
                className={`w-full ${currentReel.btnColor} font-black py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer`}
              >
                <span>Book Free Trial Batch with {currentReel.faculty}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
