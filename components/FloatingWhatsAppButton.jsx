'use client';

import React from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:flex items-center gap-3 group">
      
      {/* Tooltip Badge on Hover */}
      <span className="bg-slate-950/95 text-white border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-2xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat directly with HOD on WhatsApp (+91 98998 18241)
      </span>

      {/* Floating Glowing Circular WhatsApp Button */}
      <div className="relative flex items-center justify-center">
        
        {/* Soft Glowing Backlight Aura */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-70 animate-pulse-glow"></div>

        {/* Floating Button Container */}
        <a
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with BmClasses Senior HOD"
          className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#20bd5a] via-[#25D366] to-[#34e778] text-white flex items-center justify-center shadow-[0_0_35px_rgba(37,211,102,0.65)] hover:shadow-[0_0_50px_rgba(37,211,102,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/40 shrink-0 z-10"
        >
          {/* Crisp White Official WhatsApp Vector SVG */}
          <WhatsAppIcon className="w-8 h-8 fill-white text-white drop-shadow-md shrink-0" />
        </a>

      </div>

    </div>
  );
}
