'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, X, Volume2, VolumeX, Sparkles, ArrowRight, Award, ShieldCheck, Trophy, Flame, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

const REELS = [
  {
    id: 1,
    title: 'Physics Mechanics & Vectors',
    faculty: 'BM SIR',
    role: 'Ex-FIITJEE HOD Physics (20+ Yrs Exp)',
    subtitle: 'JEE Advanced High-Yield Problem Hacks',
    videoUrl: '/videos/learning1.mp4',
    badgeColor: 'from-cyan-500 to-indigo-600',
    borderColor: 'border-cyan-400/40',
    accentText: 'text-cyan-400',
    btnColor: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
    tag: 'PHYSICS',
    duration: '0:30',
  },
  {
    id: 2,
    title: 'Organic Chemistry Reactions',
    faculty: 'KONIKA MAM',
    role: 'Ex-VMC HOD Chemistry (18+ Yrs Exp)',
    subtitle: 'NEET UG Organic Mechanisms & NCERT Mastery',
    videoUrl: '/videos/learning2.mp4',
    badgeColor: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-400/40',
    accentText: 'text-purple-400',
    btnColor: 'bg-purple-500 text-white hover:bg-purple-400',
    tag: 'CHEMISTRY',
    duration: '0:35',
  },
  {
    id: 3,
    title: '1-on-1 Individual Doubt Clearing',
    faculty: 'MICRO-BATCH CLASS',
    role: 'Strictly Capped 10-15 Students Per Batch',
    subtitle: 'Real Classroom Doubt Resolution Live',
    videoUrl: '/videos/learn3.mp4',
    badgeColor: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-400/40',
    accentText: 'text-emerald-400',
    btnColor: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
    tag: 'PEDAGOGY',
    duration: '0:40',
  },
  {
    id: 4,
    title: 'AIR Top Rank Formula',
    faculty: 'EX-HOD METHOD',
    role: 'Mentored AIR 18, 22, 52 & 102 Ranks',
    subtitle: 'Speed & Accuracy Strategy for JEE & NEET',
    videoUrl: '/videos/learn4.mp4',
    badgeColor: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-400/40',
    accentText: 'text-amber-400',
    btnColor: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
    tag: 'RANK STRATEGY',
    duration: '0:32',
  },
];

export default function ReelShowcaseSection() {
  const { openRegister } = useModal();
  const [activeReel, setActiveReel] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);

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
    <section className="py-20 sm:py-28 bg-[#04060c] text-white relative overflow-hidden border-b border-zinc-900">
      
      {/* Background Ambient Lighting Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <ScrollReveal delay={100} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>TEACHING METHODOLOGY IN ACTION</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              See BM Sir & Konika Mam <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Teaching Live</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Watch 30-second classroom teaching clips to experience how our Senior Ex-HODs make complex JEE & NEET concepts crystal clear in 10-15 student micro-batches.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Reel Cards Grid (9:16 Aspect Ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {REELS.map((reel, index) => (
            <ScrollReveal key={reel.id} delay={200 + index * 100} direction="up">
              <div 
                onClick={() => handleOpenReel(reel)}
                className={`group relative bg-zinc-950 rounded-3xl overflow-hidden border ${reel.borderColor} hover:border-cyan-400/80 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 cursor-pointer flex flex-col h-[460px] sm:h-[480px]`}
              >
                {/* Background Video Preview (Silent Loop) */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
                  <video 
                    src={reel.videoUrl} 
                    muted 
                    loop 
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-65 group-hover:opacity-85"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/60 pointer-events-none"></div>
                </div>

                {/* Top Badge Overlay */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border ${reel.borderColor} backdrop-blur-md text-[11px] font-black text-white`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${reel.badgeColor} animate-pulse`}></div>
                    <span>{reel.tag}</span>
                  </div>

                  <span className="text-[11px] font-black text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {reel.duration}
                  </span>
                </div>

                {/* Center Play Button Icon */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 text-white flex items-center justify-center backdrop-blur-md group-hover:scale-115 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-300 shadow-2xl pl-1">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>

                {/* Bottom Info & CTA */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent flex flex-col gap-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{reel.faculty}</span>
                  </div>

                  <h3 className="font-heading text-base font-black text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {reel.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-bold line-clamp-2 leading-relaxed">
                    {reel.subtitle}
                  </p>

                  <div className="mt-2 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-black text-white group-hover:text-cyan-300">
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current text-cyan-400" />
                      <span>Watch Teaching Reel</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Fullscreen Vertical Reel Player Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[800px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
            
            {/* Top Modal Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${activeReel.badgeColor} flex items-center justify-center font-black text-xs text-white shadow-md`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-white flex items-center gap-1.5">
                    <span>{activeReel.faculty}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-300 font-extrabold border border-cyan-400/30">
                      CLASSROOM REEL
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-300 font-bold">{activeReel.role}</div>
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
              <div>
                <div className="text-sm font-black text-white">{activeReel.title}</div>
                <div className="text-xs text-cyan-300 font-extrabold mt-0.5">{activeReel.subtitle}</div>
              </div>

              <button
                onClick={() => {
                  handleClose();
                  if (openRegister) openRegister();
                }}
                className={`w-full ${activeReel.btnColor} font-black py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer`}
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
