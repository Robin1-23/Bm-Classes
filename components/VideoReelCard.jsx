'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Star } from 'lucide-react';

export default function VideoReelCard({ file, name, exam, result, quote }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay when card enters viewport, pause when it leaves
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="group relative bg-black rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-cyan-400 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_-8px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col">

      {/* 9:16 Vertical Reel Video */}
      <div className="relative aspect-[9/16] bg-zinc-950 overflow-hidden">
        <video
          ref={videoRef}
          src={file}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Mute/Unmute Button overlay */}
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 border border-zinc-700 hover:border-cyan-400 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
        >
          {muted
            ? <VolumeX className="w-3.5 h-3.5 text-white" />
            : <Volume2 className="w-3.5 h-3.5 text-cyan-300" />
          }
        </button>

        {/* Gradient fade at bottom for readability */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Info Footer */}
      <div className="p-4 border-t border-zinc-800 flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <div className="font-heading font-black text-white text-sm group-hover:text-cyan-300 transition-colors leading-tight">
              {name}
            </div>
            <div className="text-[10px] font-bold text-cyan-400 mt-0.5">
              {exam} · <span className="text-emerald-400">{result}</span>
            </div>
          </div>
          <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <p className="text-white/60 text-[11px] leading-relaxed font-medium italic">
          {quote}
        </p>
      </div>

    </div>
  );
}
