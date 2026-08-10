'use client';

import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function StickyMobileCTA({ onOpenRegister }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/90 p-3 shadow-2xl transition-all">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CENTER_INFO.phoneRaw}`}
          className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 border border-slate-700/80 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Call Desk</span>
        </a>

        <a
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleRegister()}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1 transition-all shadow-md text-center"
        >
          <span>Apply</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
