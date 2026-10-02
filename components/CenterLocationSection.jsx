'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Share2, Copy, Check, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTRES } from '@/data/siteContent';
import { CENTER_INFO } from '@/data/contentData';

const TINTS = ['bg-[#f3f1ff]', 'bg-[#eef7ea]', 'bg-[#fdf4e6]'];
const visitWhatsApp = (centre) =>
  `https://wa.me/919899818241?text=${encodeURIComponent(`Hi BM Classes, I’d like to visit your ${centre.name} centre. When can I come?`)}`;

export default function CenterLocationSection() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const centre = CENTRES[active];

  const copyAddress = () => {
    navigator.clipboard?.writeText(`BM Classes, ${centre.name} centre\n${centre.address}\n${CENTER_INFO.phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `BM Classes, ${centre.name} centre (IIT JEE, NEET & boards coaching)\n${centre.address}\nCall: ${CENTER_INFO.phone}\nMap: ${centre.maps}`
  )}`;

  return (
    <section id="location" className="bg-[#f5f7ff] text-slate-950 py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={MapPin}
          badgeText="3 CENTRES IN GURUGRAM"
          title="Come say hello."
          subtitle="Sector 45, Malibu Towne (Sector 47) and Sector 46. Pick the centre closest to you."
        />

        <div className="grid lg:grid-cols-12 gap-5">
          <ScrollReveal direction="up" className="lg:col-span-5 flex flex-col gap-3">
            <div role="radiogroup" aria-label="Choose a centre" className="flex flex-col gap-3">
              {CENTRES.map((c, idx) => {
                const selected = idx === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setActive(idx)}
                    className={`text-left rounded-[24px] p-1.5 border transition-all cursor-pointer ${
                      selected ? 'bg-white border-slate-900 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]' : 'bg-white border-slate-200/70 hover:border-slate-400'
                    }`}
                  >
                    <span className={`flex items-center gap-4 rounded-[18px] ${TINTS[idx]} px-5 py-4`}>
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-heading font-bold ${selected ? 'bg-slate-950 text-white' : 'bg-white text-slate-700'}`}>
                        {idx + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                          {c.label}
                          {idx === 0 && (
                            <span className="inline-flex items-center gap-1 text-amber-700">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {CENTER_INFO.googleRating} on Google
                            </span>
                          )}
                        </span>
                        <span className="block font-heading font-semibold text-xl tracking-[-0.015em] leading-tight mt-0.5">{c.name}</span>
                        <span className="block text-sm text-slate-600 mt-0.5 truncate">{c.short}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-2 mt-1">
              <a href={centre.maps} target="_blank" rel="noopener noreferrer" className="h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors">
                <Navigation className="w-4 h-4" /> Directions
              </a>
              <a href={`tel:${CENTER_INFO.phoneRaw}`} className="h-12 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={visitWhatsApp(centre)} target="_blank" rel="noopener noreferrer" className="h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors">
                <WhatsAppIcon className="w-4 h-4" /> Visit
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={copyAddress} className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white border border-slate-200 text-sm font-semibold hover:border-slate-400 cursor-pointer">
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white border border-slate-200 text-sm font-semibold hover:border-slate-400">
                <Share2 className="w-4 h-4" /> Share
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up" className="lg:col-span-7">
            <div className="h-full rounded-[28px] bg-white p-2 border border-slate-200/70 flex flex-col">
              <iframe
                key={centre.id}
                title={`Map: BM Classes ${centre.name} centre, Gurugram`}
                src={centre.embed}
                className="w-full flex-1 min-h-[360px] rounded-[22px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="px-3 pt-3 pb-1.5 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Centre {active + 1}:</span> {centre.address}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
