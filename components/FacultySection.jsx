'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { MENTORS_DATA } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

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
                <article className="group flex flex-col w-full bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.25)]">
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <button
                      onClick={() => setActiveVideo({ mentor, videoUrl })}
                      className="absolute left-4 bottom-4 inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-900 text-sm font-semibold pl-1.5 pr-4 py-1.5 rounded-full shadow-sm cursor-pointer"
                    >
                      <span className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </span>
                      Watch a class
                    </button>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm font-semibold text-indigo-700">{mentor.role} · {mentor.exp}</p>
                    <h3 className="font-heading font-extrabold text-2xl tracking-[-0.02em] text-slate-950 mt-1">{mentor.name}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{mentor.subject}</p>

                    <p className="text-[15px] text-slate-700 leading-relaxed mt-4">{mentor.approach}</p>

                    <ul className="mt-5 border-t border-slate-100 divide-y divide-slate-100 text-sm text-slate-700">
                      {mentor.highlights.map((item) => (
                        <li key={item} className="py-2.5">{item}</li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <button
                        onClick={() => handleRegister(mentor.name)}
                        className="flex items-center justify-center gap-2 w-full h-11 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold transition-colors group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white cursor-pointer"
                      >
                        Book a session
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
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
                </button>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
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
