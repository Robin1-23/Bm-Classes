'use client';

import React from 'react';
import { Phone, Lock, UserPlus } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

export default function MobileStickyActionBar({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const handleSeatLock = onOpenSeatLock || modal.openSeatLock;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-2.5 px-3 shadow-[0_-10px_25px_rgba(0,0,0,0.4)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-1.5 xs:gap-2">
        
        {/* Direct Call Center */}
        <a 
          href={`tel:${CENTER_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-2.5 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-white rounded-xl font-extrabold text-[11px] xs:text-xs flex items-center justify-center gap-1 transition-all active:scale-95 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* Lock Seat Button */}
        <button
          onClick={handleSeatLock}
          className="flex-[1.2] py-2.5 px-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black text-[11px] xs:text-xs flex items-center justify-center gap-1 transition-all active:scale-95 shadow-md border border-emerald-400/40 cursor-pointer animate-pulse"
        >
          <Lock className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
          <span className="truncate">Lock Seat</span>
        </button>

        {/* WhatsApp */}
        <a 
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2.5 bg-[#25D366] hover:bg-emerald-600 text-white rounded-xl font-extrabold text-[11px] xs:text-xs flex items-center justify-center gap-1 transition-all active:scale-95 shadow-sm"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="truncate">Chat</span>
        </a>

        {/* Apply Admission */}
        <button
          onClick={handleRegister}
          className="flex-1 py-2.5 px-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-[11px] xs:text-xs flex items-center justify-center gap-1 transition-all active:scale-95 shadow-md shadow-indigo-500/25 cursor-pointer"
        >
          <UserPlus className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="truncate">Apply</span>
        </button>

      </div>
    </div>
  );
}
