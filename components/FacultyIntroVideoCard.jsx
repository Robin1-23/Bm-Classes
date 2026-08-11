'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ShieldCheck, Award, Maximize } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function FacultyIntroVideoCard({ title = "Meet Your Mentors: BM Sir & Konika Ma'am", subtitle = null }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // IntersectionObserver for auto-play on viewport enter & auto-pause on exit
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Unmute by default as requested
    video.muted = false;
    setIsMuted(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Browser autoplay policy fallback: if unmuted autoplay is blocked, play muted
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullScreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  return (
    <ScrollReveal delay={150} direction="up">
      <div className="max-w-5xl mx-auto my-10 sm:my-14 px-4 sm:px-6">
        
        {/* Sleek Pitch Dark Black Container Card */}
        <div className="bg-black border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] hover:border-zinc-700 transition-all relative">
          
          {/* Header Banner inside Video Card */}
          <div className="p-6 sm:p-8 border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>FACULTY INTRODUCTION</span>
              </div>
              <h3 className="font-heading font-black text-white text-xl sm:text-2xl lg:text-3xl tracking-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-zinc-300 text-xs sm:text-sm mt-1 font-medium max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Quick Badge */}
            <div className="hidden lg:flex flex-col items-end shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-black text-cyan-300">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>20+ Yrs Teaching Faculty</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-bold mt-1">2.5 Min HD Video</span>
            </div>
          </div>

          {/* 16:9 Widescreen Inline Player Container */}
          <div className="relative aspect-video bg-zinc-950 overflow-hidden group cursor-pointer" onClick={togglePlay}>
            
            <video
              ref={videoRef}
              src="/videos/introductory_video.mp4"
              playsInline
              loop
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Custom Play Overlay (shown when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center transition-all">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-all border-4 border-white/20">
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-black ml-1.5" />
                </div>
              </div>
            )}

            {/* Top Right Floating Controls Bar */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center hover:border-cyan-400 transition-all hover:scale-105"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-cyan-300" />}
              </button>

              <button
                onClick={handleFullScreen}
                className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-white flex items-center justify-center hover:border-cyan-400 transition-all hover:scale-105"
                aria-label="Full screen video"
              >
                <Maximize className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Bottom Play/Pause Overlay Toggle Indicator */}
            <div className="absolute bottom-4 left-4 z-20">
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md border border-zinc-700 hover:border-cyan-400 text-white px-4 py-2 rounded-full text-xs font-black transition-all hover:scale-105"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <span>Pause Video</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                    <span>Play 2.5 Min Intro</span>
                  </>
                )}
              </button>
            </div>

            {/* Dark Vignette Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>

          {/* Footer Highlights Row */}
          <div className="p-5 sm:p-6 bg-zinc-950 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-zinc-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% Senior Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Max 10-15 Student Cap</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Same-Day Board Doubts</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Annual IITian Interaction</span>
            </div>
          </div>

        </div>

      </div>
    </ScrollReveal>
  );
}
