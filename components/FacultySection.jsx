'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

const PANEL_TINTS = ['bg-[#f3f1ff]', 'bg-[#eef7ea]', 'bg-[#fdf4e6]'];

// "Bighnaraj Mishra (BM Sir)" -> ["Bighnaraj Mishra", "BM Sir"]; "Konika Ma'am" -> ["Konika", "Ma'am"]
const splitName = (name) => {
  const m = name.match(/^(.*?)\s*\((.*)\)$/);
  if (m) return [m[1], m[2]];
  const i = name.lastIndexOf(' ');
  return i > 0 ? [name.slice(0, i), name.slice(i + 1)] : [name, ''];
};

export default function FacultySection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const videoUrls = [
    '/videos/learn3.mp4',
    '/videos/learning1.mp4',
    '/videos/learn4.mp4',
  ];

  return (
    <section className="bg-[#f5f7ff] py-20 lg:py-28 border-b border-[#e3e8f5] relative overflow-hidden" id="faculty">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          badgeIcon={Sparkles}
          badgeText="YOUR TEACHERS"
          title="The HODs teach. Every single class."
          subtitle="No junior assistants. No substitutes. Ex-HODs of FIITJEE & VMC, right at your desk."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {MENTORS_DATA.map((mentor, idx) => {
            const videoUrl = videoUrls[idx % videoUrls.length];
            return (
              <ScrollReveal key={mentor.id} delay={100 * (idx + 1)} direction="up" className="flex">
                <article className="group flex flex-col w-full bg-white border border-slate-200/70 rounded-[28px] p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]">
                  {/* Pastel panel: two-tone name top-left, portrait tucked bottom-right */}
                  <div className={`relative overflow-hidden rounded-[22px] ${PANEL_TINTS[idx % PANEL_TINTS.length]} h-[300px] sm:h-[320px]`}>
                    <div className="relative z-10 p-6 max-w-[62%]">
                      <p className="text-sm font-semibold text-slate-600">{mentor.role}</p>
                      <h3 className="font-heading font-semibold text-[28px] leading-[1.08] tracking-[-0.025em] text-slate-900 mt-3">
                        {splitName(mentor.name)[0]}
                        <span className="block text-slate-400">{splitName(mentor.name)[1]}</span>
                      </h3>
                      <p className="text-sm text-slate-600 mt-3">{mentor.exp} teaching</p>
                    </div>

                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute right-0 bottom-0 w-[52%] h-[78%] object-cover object-top rounded-tl-[40px] transition-transform duration-500 group-hover:scale-[1.04] origin-bottom-right"
                    />

                    <button
                      onClick={() => setActiveVideo({ mentor, videoUrl })}
                      aria-label={`Watch ${mentor.name} teach a class`}
                      className="absolute left-6 bottom-6 z-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-slate-900 cursor-pointer"
                    >
                      <span className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </span>
                      Watch
                    </button>
                  </div>

                  {/* White footer: subject, credentials, booking */}
                  <div className="flex flex-col flex-1 px-4 pt-5 pb-2">
                    <p className="text-[15px] text-slate-700 leading-relaxed">{mentor.approach}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {mentor.highlights.map((item) => (
                        <span key={item} className="text-xs font-medium text-slate-700 bg-slate-100 rounded-full px-3 py-1.5">{item}</span>
                      ))}
                    </div>
                    <div className="mt-auto pt-5 flex items-center gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 leading-tight">{mentor.subject.split(' · ')[0]}</p>
                        <p className="text-sm text-slate-500 leading-tight mt-0.5">1-on-1 or batch</p>
                      </div>
                      <button
                        onClick={() => handleRegister(mentor.name)}
                        className="ml-auto shrink-0 inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Book
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Teaching Sample Video Reel Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm sm:max-w-md h-[88vh] max-h-[780px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col">
            
            {/* Top Modal Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {activeVideo.mentor.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{activeVideo.mentor.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-400/20 text-indigo-300 font-semibold border border-indigo-400/30">
                      TEACHING REEL
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 font-bold">{activeVideo.mentor.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
                </button>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Canvas */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={activeVideo.videoUrl}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Modal CTA Bar */}
            <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80 border-t border-zinc-800 relative z-30 flex flex-col gap-3">
              <div>
                <div className="text-sm font-bold text-white">{activeVideo.mentor.name} — Teaching Sample</div>
                <div className="text-xs text-indigo-300 font-semibold mt-0.5">{activeVideo.mentor.subject}</div>
              </div>

              <button
                onClick={() => {
                  const mName = activeVideo.mentor.name;
                  setActiveVideo(null);
                  if (handleRegister) handleRegister(mName);
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Book a session with {activeVideo.mentor.name}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
