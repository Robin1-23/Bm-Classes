'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Share2, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, Facebook, Youtube, Instagram } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function CenterLocationSection({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const [copied, setCopied] = useState(false);

  const centerAddress = "B 38, Ground Floor, Ardee City, Sector 52, Gurgaon, Haryana 122003";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=BmClasses+Ardee+City+Sector+52+Gurgaon";
  const phoneUrl = "tel:+919899818241";
  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BmClasses%2C%20I%20would%20like%20to%20schedule%20a%20center%20visit%20at%20Ardee%20City%20Sector%2052.";

  const shareText = encodeURIComponent(
    "Check out BmClasses Gurgaon — Premier JEE Advanced, JEE Main & NEET coaching taught 100% directly by Ex-HODs of FIITJEE & VMC in capped 10-15 student micro-batches!\n\n📍 Center: B 38, Ardee City, Sector 52, Gurgaon\n📞 Contact: +91 98998 18241"
  );
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(`BmClasses Gurgaon\nAddress: ${centerAddress}\nPhone: +91 98998 18241`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 border-b border-slate-200/80 relative overflow-hidden" id="location">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>GURGAON CENTER LOCATION</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Visit our Ardee City center<span className="text-indigo-600">.</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-xl mx-auto">
            Conveniently located in Sector 52, Gurgaon. Easy access for students from Sushant Lok, Golf Course Road, and Huda City Centre.
          </p>
        </ScrollReveal>

        {/* FEATURE 4: INTERACTIVE ARDEE CITY CENTER MAP & DIRECTIONS CARD */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-16">
          
          {/* Left Details Card */}
          <ScrollReveal delay={150} direction="up" className="lg:col-span-6">
            <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    MAIN ACADEMIC CAMPUS
                  </span>
                  <span className="text-xs font-black text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Today 8am-8pm
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black text-slate-950 mb-3">
                  BM CLASSES Gurgaon Hubs
                </h3>

                <div className="space-y-2.5 mb-6 text-xs font-semibold text-slate-700">
                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                    <span className="text-[10px] font-black text-indigo-700 uppercase block">CENTRE 1 (MAIN hub)</span>
                    <span className="leading-snug text-slate-900 font-extrabold block">303, Ayyachi Apartment, Sector 45, Gurgaon (Near DPS)</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                    <span className="text-[10px] font-black text-cyan-800 uppercase block">CENTRE 2 (MALIBU TOWNE)</span>
                    <span className="leading-snug text-slate-900 font-extrabold block">OD-55, Malibu Towne, Sector 47, Gurgaon</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                    <span className="text-[10px] font-black text-purple-700 uppercase block">CENTRE 3 & 4</span>
                    <span className="leading-snug text-slate-900 font-extrabold block">2423, Sector 46 & B 38 Ground Floor, Ardee City, Sector 52</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-indigo-50/70 border border-indigo-100 p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-indigo-700 uppercase">CONTACT DESK</div>
                      <div className="font-extrabold text-slate-900 text-[11px]">9899818241 / 9999495938</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-cyan-400 uppercase">SOCIAL MEDIA</div>
                      <div className="flex items-center gap-2.5 mt-1.5">
                        <a href="https://www.facebook.com/share/1PFmnYsfRK/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Facebook">
                          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="YouTube">
                          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA==" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f89b29] via-[#ff0069] to-[#7638fa] text-white flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram">
                          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Access Perks */}
                <div className="space-y-2 mb-6 text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interactive Digital Boards & PYQ Drill Library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Ample parent parking near DPS Gurgaon</span>
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <a
                    href={phoneUrl}
                    className="py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs rounded-2xl flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call 9899818241</span>
                  </a>
                </div>

                <button
                  onClick={handleRegister}
                  className="w-full py-3.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs rounded-2xl transition-all shadow-sm cursor-pointer"
                >
                  Schedule Personal Center Tour & Counseling
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Interactive Embedded Google Maps Visual */}
          <ScrollReveal delay={250} direction="up" className="lg:col-span-6">
            <div className="bg-slate-950 border-2 border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
              
              {/* Google Maps Iframe */}
              <iframe
                title="BmClasses Gurgaon Ardee City Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2045812975936!2d77.07548907629654!3d28.443248392645607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f5cb599981%3A0x6b8764268e3b2e59!2sArdee%20City%2C%20Sector%2052%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Live Center Pin Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/95 border border-slate-700 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <div className="font-heading font-black text-xs text-white">Ardee City Sector 52</div>
                  <div className="text-[10px] text-cyan-300 font-semibold">Gurgaon Academic Center</div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* FEATURE 5: ONE-CLICK PARENT WHATSAPP BROCHURE SHARE CARD */}
        <ScrollReveal delay={300} direction="up">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 border-2 border-indigo-500/50 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg">
                <WhatsAppIcon className="w-8 h-8 fill-white text-white" />
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                  PARENT WHATSAPP QUICK SHARE
                </span>
                <h4 className="font-heading font-black text-lg sm:text-xl text-white">
                  Forward program details to family on WhatsApp
                </h4>
                <p className="text-slate-300 text-xs mt-0.5 font-medium max-w-md">
                  One-click share link for parents to forward Ex-HOD micro-batch details and center address directly to spouse or relatives.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-white" />
                <span>Share via WhatsApp</span>
              </a>

              <button
                onClick={handleCopyDetails}
                className="py-3.5 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-extrabold text-xs rounded-2xl transition-all cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Info'}
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
