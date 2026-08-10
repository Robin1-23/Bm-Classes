import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 text-slate-950 px-3 sm:px-6 py-2 border-b border-cyan-500/20 shadow-xs relative z-50 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">
        
        {/* Tagline & Badge */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-full">
          <span className="inline-flex items-center gap-1.5 bg-slate-950 text-cyan-300 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Admissions Open 2026-27
          </span>
          <span className="text-slate-950 text-xs sm:text-sm font-extrabold tracking-tight">
            Small-Batch JEE Advanced, Main & NEET Coaching · Max 10-15 Seats per Intake
          </span>
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-2 text-xs font-black shrink-0">
          <a 
            href={`tel:${CENTER_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-1.5 bg-slate-950 text-white hover:bg-slate-800 px-3.5 py-1 rounded-full transition-all shadow-xs text-xs whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>+91 98998 18241</span>
          </a>

          <a 
            href={CENTER_INFO.whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-1 rounded-full transition-all shadow-xs text-xs whitespace-nowrap"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </div>
  );
}
