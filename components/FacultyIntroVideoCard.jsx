'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function FacultyIntroVideoCard() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // IntersectionObserver for auto-play (unmuted) on viewport enter & auto-pause on exit
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let userInteracted = false;

    // Listen for any user interaction on document to enable unmuted audio
    const unlockAudio = () => {
      userInteracted = true;
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (!videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };

    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Attempt unmuted play first
          video.muted = false;
          setIsMuted(false);

          video.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // If browser blocks unmuted autoplay on initial load, fallback to muted play until first tap
              if (!userInteracted) {
                video.muted = true;
                setIsMuted(true);
                video.play().then(() => setIsPlaying(true)).catch(() => {});
              }
            });
        } else {
          // Autopause when scrolled to other sections
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };
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
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.05] text-slate-950">
              Meet your mentors.
              <span className="block text-slate-400">BM Sir &amp; Konika Ma’am, in 3 minutes.</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {['20+ years teaching', '10–15 per batch', 'Same-day doubts'].map((t) => (
                <span key={t} className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-2 border border-slate-200/70 shadow-[0_28px_50px_-34px_rgba(15,23,42,0.4)]">
            <div className="relative aspect-video rounded-[22px] overflow-hidden bg-slate-900 group cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src="/videos/introductory_video.mp4"
                playsInline
                loop
                preload="none"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 fill-black ml-1" />
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center hover:bg-white cursor-pointer"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleFullScreen}
                  className="w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center hover:bg-white cursor-pointer"
                  aria-label="Full screen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white/95 text-slate-900 text-sm font-semibold hover:bg-white cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-slate-900" /> : <Play className="w-3.5 h-3.5 fill-slate-900" />}
                {isPlaying ? 'Pause' : 'Play intro'}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
