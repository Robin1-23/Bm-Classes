'use client';

import React, { useState, useRef } from 'react';
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
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
    <section className="bg-white py-16 sm:py-24 border-b border-slate-200/80 relative overflow-hidden" id="faculty">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          badgeIcon={Sparkles}
          badgeText="100% EX-HOD DIRECT FACULTY"
          title="Mentored directly by Senior Ex-HODs"
          subtitle="Zero junior teaching assistants. Learn 100% directly from Ex-HODs of FIITJEE & VMC."
        />

        {/* ULTRA-CLEAN FACULTY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {MENTORS_DATA.map((mentor, idx) => {
            const videoUrl = videoUrls[idx % videoUrls.length];
            return (
              <ScrollReveal key={idx} delay={100 * (idx + 1)} direction="up">
                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12)] hover:border-slate-300 transition-all duration-300 h-full relative group">
                  
                  <div>
                    {/* Top Avatar & Experience Row */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                      <div className="relative">
                        {mentor.image ? (
                          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-slate-200 group-hover:ring-indigo-500/50 transition-all duration-300 bg-slate-950">
                            <img 
                              src={mentor.image} 
                              alt={mentor.name} 
                              className="w-full h-full object-cover object-top" 
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-slate-950 text-white font-heading font-black text-2xl flex items-center justify-center shadow-md border-2 border-white ring-2 ring-slate-200 group-hover:ring-indigo-500/50 transition-all">
                            {mentor.initials}
                          </div>
                        )}
                        <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-900 border border-slate-200/90 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wide">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                        {mentor.exp}
                      </span>
                    </div>

                    {/* Name, Role & Subject Header */}
                    <div className="mb-5">
                      <span className="text-xs font-black uppercase tracking-wider text-indigo-600 block mb-1">
                        {mentor.role}
                      </span>

                      <h3 className="font-heading font-black text-xl text-slate-950 mb-1 leading-snug">
                        {mentor.name}
                      </h3>

                      <p className="text-xs text-slate-600 font-bold">
                        {mentor.subject}
                      </p>
                    </div>

                    {/* Minimalist Teaching Reel Trigger */}
                    <button
                      onClick={() => setActiveVideo({ mentor, videoUrl })}
                      className="w-full mb-5 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs py-3 px-4 rounded-full shadow-xs flex items-center justify-center gap-2.5 transition-all cursor-pointer group/vid"
                    >
                      <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center pl-0.5 shrink-0 group-hover/vid:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-slate-950" />
                      </div>
                      <span>Watch 30s Teaching Sample</span>
                    </button>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 mb-5">
                      {mentor.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pedagogy Insight */}
                    <div className="bg-slate-50 border-l-2 border-indigo-600 p-3.5 rounded-r-2xl mb-6 min-h-[64px] flex flex-col justify-center">
                      <div className="text-[10px] font-black uppercase tracking-wider text-indigo-600 mb-0.5">
                        Pedagogy Insight
                      </div>
                      <p className="font-serif italic font-normal text-slate-700 text-xs leading-relaxed">
                        "{mentor.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleRegister(mentor.name)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>Book Counseling with {mentor.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>

                </div>
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
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-md">
                  {activeVideo.mentor.initials}
                </div>
                <div>
                  <div className="text-xs font-black text-white flex items-center gap-1.5">
                    <span>{activeVideo.mentor.name}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-extrabold border border-cyan-400/30">
                      TEACHING REEL
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-300 font-bold">{activeVideo.mentor.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
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
                <div className="text-sm font-black text-white">{activeVideo.mentor.name} — Teaching Sample</div>
                <div className="text-xs text-cyan-300 font-extrabold mt-0.5">{activeVideo.mentor.subject}</div>
              </div>

              <button
                onClick={() => {
                  const mName = activeVideo.mentor.name;
                  setActiveVideo(null);
                  if (handleRegister) handleRegister(mName);
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-3.5 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Book Free Trial Batch with {activeVideo.mentor.name}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
