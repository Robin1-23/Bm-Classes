'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Share2, Copy, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { BUSINESS } from '@/data/seo';
import { CENTER_INFO } from '@/data/contentData';

const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode}`;
const VISIT_WHATSAPP = `https://wa.me/919899818241?text=${encodeURIComponent('Hi BM Classes, I’d like to visit your Sector 45 centre. When can I come?')}`;
const SHARE_WHATSAPP = `https://api.whatsapp.com/send?text=${encodeURIComponent(
  `BM Classes (Chemistry By Bighnaraj Sir), IIT JEE & NEET coaching\n${FULL_ADDRESS}\nCall: ${CENTER_INFO.phone}\nMap: ${BUSINESS.googleProfile}`
)}`;

function Tile({ href, onClick, icon: Icon, label, value, className, external }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group rounded-[22px] p-5 flex flex-col justify-between min-h-[140px] text-left transition-transform hover:-translate-y-0.5 cursor-pointer ${className}`}
    >
      <Icon className="w-6 h-6" />
      <span>
        <span className="block text-sm opacity-70">{label}</span>
        <span className="block font-heading font-bold text-lg tracking-[-0.01em] leading-tight mt-0.5">{value}</span>
      </span>
    </Tag>
  );
}

export default function CenterLocationSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard?.writeText(`BM Classes (Chemistry By Bighnaraj Sir)\n${FULL_ADDRESS}\n${CENTER_INFO.phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="bg-[#f5f7ff] text-slate-950 py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={MapPin}
          badgeText="VISIT US"
          title="Come say hello."
          subtitle="Sector 45, Gurugram, near Delhi Public School. Easy to reach from Sushant Lok, Golf Course Road and Sectors 46 and 47."
        />

        <div className="grid lg:grid-cols-12 gap-5">
          <ScrollReveal direction="up" className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-[28px] bg-white p-2 border border-slate-200/70">
              <div className="rounded-[22px] bg-[#f3f1ff] p-6">
                <p className="text-sm font-semibold text-slate-600">BM Classes · on Google as “{BUSINESS.googleName}”</p>
                <address className="not-italic font-heading font-semibold text-xl leading-snug tracking-[-0.015em] mt-3">
                  Flat no 303, Ayyachi Apartment, Block C
                  <span className="block text-slate-500">Uday Nagar, Sector 45, Gurugram 122003</span>
                </address>
                <p className="text-sm text-slate-600 mt-3">Landmark: near Delhi Public School, Sector 45</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-3">
                <button onClick={copyAddress} className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-slate-300 text-sm font-semibold hover:border-slate-500 cursor-pointer">
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
                <a href={SHARE_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-slate-300 text-sm font-semibold hover:border-slate-500">
                  <Share2 className="w-4 h-4" /> Share
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Tile href={BUSINESS.googleProfile} external icon={Navigation} label="Directions" value="Open in Maps" className="bg-indigo-600 text-white" />
              <Tile href={`tel:${CENTER_INFO.phoneRaw}`} icon={Phone} label="Call" value={CENTER_INFO.phone.replace('+91 ', '')} className="bg-[#0a0a0a] text-white" />
              <Tile href={VISIT_WHATSAPP} external icon={WhatsAppIcon} label="WhatsApp" value="Plan a visit" className="bg-[#dcf8e6] text-[#0b5132]" />
              <Tile href={BUSINESS.googleProfile} external icon={MapPin} label="Google rating" value={`${CENTER_INFO.googleRating} from ${CENTER_INFO.googleReviewCount} reviews`} className="bg-[#fdf4e6] text-slate-900" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up" className="lg:col-span-7">
            <div className="h-full rounded-[28px] bg-white p-2 border border-slate-200/70">
              <iframe
                title="Map: BM Classes, Sector 45, Gurugram"
                src={`https://maps.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=16&output=embed`}
                className="w-full h-full min-h-[360px] lg:min-h-[100%] rounded-[22px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
