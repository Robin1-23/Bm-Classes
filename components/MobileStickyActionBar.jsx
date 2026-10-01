'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO } from '@/data/contentData';
import { useModal } from '@/context/ModalContext';

// The single sticky action bar on mobile: Call · WhatsApp · Apply
export default function MobileStickyActionBar() {
  const { openRegister } = useModal();
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  const item = 'flex-1 h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]';

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <a href={`tel:${CENTER_INFO.phoneRaw}`} className={`${item} bg-slate-100 text-slate-900 hover:bg-slate-200`}>
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>
        <a
          href={CENTER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} bg-[#25D366] text-white hover:bg-[#1ebe5a]`}
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <button onClick={() => openRegister()} className={`${item} bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer`}>
          <span>Apply</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
