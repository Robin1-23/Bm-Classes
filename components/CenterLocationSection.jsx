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

  const centerAddress = "House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon, Haryana 122003";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Chemistry+classes+by+BM+sir+House+no+-+1411p,+1st+floor,+sec-45,+near+DPS-45+school+Gurgaon";
  const phoneUrl = "tel:+919899818241";
  const whatsappUrl = "https://wa.me/919899818241?text=Hi%20BM%20Sir%2C%20I%20would%20like%20to%20schedule%20a%20center%20visit%20at%20House%20no%20-%201411p%2C%201st%20floor%2C%20sec-45%2C%20near%20DPS-45%20school.";

  const shareText = encodeURIComponent(
    "Check out Chemistry classes by BM sir — Premier JEE Advanced, JEE Main & NEET coaching taught 100% directly by BM Sir & Senior Ex-HODs in capped 10-15 student micro-batches!\n\n📍 Center: House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon\n📞 Contact: +91 98998 18241"
  );
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(`Chemistry classes by BM sir\nAddress: ${centerAddress}\nPhone: +91 98998 18241`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="bg-black text-white py-20 sm:py-28 border-b border-zinc-900 relative overflow-hidden" id="location">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GURGAON ACADEMIC CENTER</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Visit Our <span className="font-serif italic font-normal text-cyan-300">Gurgaon Center</span>
          </h2>
          
          <p className="text-zinc-300 text-base sm:text-lg mt-3 font-medium leading-relaxed max-w-xl mx-auto">
            Conveniently located in Sector 45 Gurgaon near DPS-45 school. Easy access for students from Sushant Lok, Golf Course Road, Sector 46, 47 & 52.
          </p>
        </ScrollReveal>

        {/* INTERACTIVE CENTER MAP & DIRECTIONS CARD */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-16">
          
          {/* Left Details Card */}
          <ScrollReveal delay={150} direction="up" className="lg:col-span-6">
            <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-cyan-400 transition-all flex flex-col justify-between h-full">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    OFFICIAL ACADEMIC CENTER
                  </span>
                  <span className="text-xs font-black text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open Today 8am-8pm
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black text-white mb-3">
                  Chemistry classes by BM sir
                </h3>

                <div className="space-y-2.5 mb-6 text-xs font-semibold text-zinc-300">
                  <div className="bg-black border border-zinc-800 p-4 rounded-2xl">
                    <span className="text-[10px] font-black text-cyan-400 uppercase block mb-1">OFFICIAL CENTER ADDRESS</span>
                    <span className="leading-snug text-white font-extrabold text-sm block">House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon</span>
                    <span className="text-zinc-400 text-xs mt-1 block">Landmark: Near DPS-45 School</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-black border border-zinc-800 p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-cyan-400 uppercase">CONTACT DESK</div>
                      <div className="font-extrabold text-white text-[11px]">9899818241 / 9999495938</div>
                    </div>
                    <div className="bg-black border border-zinc-800 p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-cyan-400 uppercase">SOCIAL MEDIA</div>
                      <div className="flex items-center gap-2.5 mt-1.5">
                        <a href="https://www.facebook.com/share/1PFmnYsfRK/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <Facebook className="w-4 h-4 text-[#1877F2] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://youtube.com/watch?v=XDQq1L-ldP8&feature=shared" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                          <Youtube className="w-4 h-4 text-[#FF0000] hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.instagram.com/bm__classes?igsh=MTB3cjRtZHdwYTBocA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <Instagram className="w-4 h-4 text-[#E4405F] hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Actions */}
              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-black text-black" />
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href={phoneUrl}
                    className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Call Center</span>
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Interactive Embedded Map Container */}
          <ScrollReveal delay={200} direction="up" className="lg:col-span-6 h-full min-h-[350px]">
            <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-xl h-full flex flex-col relative group hover:border-cyan-400 transition-all">
              
              {/* Top Banner overlay */}
              <div className="bg-black border-b border-zinc-800 px-5 py-3.5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="font-heading font-black text-xs text-white">Sector 45 Center (Near DPS-45 School)</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-zinc-400">Gurgaon, Haryana</span>
              </div>

              {/* Embedded Google Map iFrame */}
              <div className="w-full h-full min-h-[300px] lg:min-h-[380px] relative bg-zinc-900">
                <iframe
                  title="Chemistry classes by BM sir Gurgaon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.123456789!2d77.08!3d28.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI2JzI0LjAiTiA3N8KwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05]"
                ></iframe>
              </div>

              {/* Bottom Quick Bar */}
              <div className="bg-black border-t border-zinc-800 px-5 py-3 flex items-center justify-between text-xs text-zinc-300 font-medium">
                <span>Near Huda City Centre Metro</span>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-extrabold flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* WHATSAPP QUICK SHARE CARD */}
        <ScrollReveal delay={200} direction="up" className="max-w-3xl mx-auto">
          <div className="bg-black border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-lg text-white">
                    Share Center Details with Parents on WhatsApp
                  </h4>
                  <p className="text-zinc-400 text-xs mt-0.5 font-medium">
                    Send exact location, contact numbers, and batch details to your parent or guardian.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                >
                  <Share2 className="w-3.5 h-3.5 text-white" />
                  <span>Share on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyDetails}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  {copied ? 'Copied!' : 'Copy Text'}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
