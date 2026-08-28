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
    <section className="bg-[#faf6f0] text-slate-950 py-20 sm:py-28 border-b border-[#ede6dd] relative overflow-hidden" id="location">
      
      {/* Background Ambient Warm Cream Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e8dfd5] text-indigo-700 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>GURGAON ACADEMIC CENTER</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Visit Our <span className="font-serif italic font-normal text-indigo-600">Gurgaon Center</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-semibold leading-relaxed max-w-xl mx-auto">
            Conveniently located in Sector 45 Gurgaon near DPS-45 school. Easy access for students from Sushant Lok, Golf Course Road, Sector 46, 47 & 52.
          </p>
        </ScrollReveal>

        {/* INTERACTIVE CENTER MAP & DIRECTIONS CARD */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-16">
          
          {/* Left Details Card */}
          <ScrollReveal delay={150} direction="up" className="lg:col-span-6">
            <div className="bg-white border border-[#e8dfd5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:border-indigo-400 transition-all flex flex-col justify-between h-full">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#f5efe6] text-indigo-700 border border-[#e2d8cc] px-3 py-1 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    OFFICIAL ACADEMIC CENTER
                  </span>
                  <span className="text-xs font-black text-emerald-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Today 8am-8pm
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black text-slate-950 mb-3">
                  Chemistry classes by BM sir
                </h3>

                <div className="space-y-2.5 mb-6 text-xs font-semibold text-slate-700">
                  <div className="bg-[#f5efe6] border border-[#e8dfd5] p-4 rounded-2xl">
                    <span className="text-[10px] font-black text-indigo-700 uppercase block mb-1">OFFICIAL CENTER ADDRESS</span>
                    <span className="leading-snug text-slate-950 font-extrabold text-sm block">House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon</span>
                    <span className="text-slate-600 text-xs mt-1 block">Landmark: Near DPS-45 School</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-[#f5efe6] border border-[#e8dfd5] p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-indigo-700 uppercase">CONTACT DESK</div>
                      <div className="font-extrabold text-slate-950 text-[11px]">9899818241 / 9999495938</div>
                    </div>
                    <div className="bg-[#f5efe6] border border-[#e8dfd5] p-2.5 rounded-xl">
                      <div className="text-[9px] font-black text-indigo-700 uppercase">SOCIAL MEDIA</div>
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
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs py-3 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-white text-white" />
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-extrabold text-xs py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href={phoneUrl}
                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-extrabold text-xs py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Call Center</span>
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Interactive Embedded Map Container */}
          <ScrollReveal delay={200} direction="up" className="lg:col-span-6 h-full min-h-[350px]">
            <div className="bg-white border border-[#e8dfd5] rounded-3xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] h-full flex flex-col relative group hover:border-indigo-400 transition-all">
              
              {/* Top Banner overlay */}
              <div className="bg-[#f5efe6] border-b border-[#e8dfd5] px-5 py-3.5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span className="font-heading font-black text-xs text-slate-950">Sector 45 Center (Near DPS-45 School)</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600">Gurgaon, Haryana</span>
              </div>

              {/* Embedded Google Map iFrame */}
              <div className="w-full h-full min-h-[300px] lg:min-h-[380px] relative bg-slate-100">
                <iframe
                  title="Chemistry classes by BM sir Gurgaon Location"
                  src="https://maps.google.com/maps?q=House+no+-+1411p,+1st+floor,+sec-45,+near+DPS-45+school,+Gurgaon&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
              <div className="bg-[#f5efe6] border-t border-[#e8dfd5] px-5 py-3 flex items-center justify-between text-xs text-slate-700 font-medium">
                <span>Near Huda City Centre Metro</span>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-extrabold flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-indigo-600" />
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* WHATSAPP QUICK SHARE CARD */}
        <ScrollReveal delay={200} direction="up" className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#e8dfd5] rounded-3xl p-6 sm:p-8 text-slate-950 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-lg text-slate-950">
                    Share Center Details with Parents on WhatsApp
                  </h4>
                  <p className="text-slate-600 text-xs mt-0.5 font-medium">
                    Send exact location, contact numbers, and batch details to your parent or guardian.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-full transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                >
                  <Share2 className="w-3.5 h-3.5 text-white" />
                  <span>Share on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyDetails}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold text-xs px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
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
