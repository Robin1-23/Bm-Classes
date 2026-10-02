import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { CENTER_INFO } from '@/data/contentData';

const FACES = ['/bm_sir.jpg', '/konika_mam.jpg', '/chumki_mam.jpeg'];

// Inner-page banner: pastel panel with a two-tone title on the left and fact tiles on the right.
export default function PageHeader({
  breadcrumb,
  badgeText,
  title,
  soft,
  subtitle,
  tint = 'bg-[#f3f1ff]',
  facts = [],
  wide,
  ctaHref = '#book-demo',
}) {
  const [primary, secondary] = facts;
  const WideTag = wide?.href ? 'a' : 'div';

  return (
    <section className="bg-white px-3 sm:px-6 pt-24 sm:pt-28 pb-4">
      <div className={`max-w-7xl mx-auto rounded-[32px] ${tint} px-6 sm:px-10 lg:px-14 py-10 sm:py-14 grid lg:grid-cols-12 gap-10 items-center`}>
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-medium">{breadcrumb}</span>
          </nav>
          {badgeText && <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">{badgeText}</p>}
          <h1 className="font-heading font-extrabold text-[2.6rem] sm:text-6xl lg:text-[4.2rem] tracking-[-0.035em] leading-[1.02] text-slate-950 mt-3">
            {title}
            {soft && <span className="block text-slate-400">{soft}</span>}
          </h1>
          {subtitle && <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-5 max-w-xl">{subtitle}</p>}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={ctaHref} className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors">
              Book a free demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`tel:${CENTER_INFO.phoneRaw}`} className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold border border-slate-200 transition-colors">
              <Phone className="w-4 h-4" /> Call us
            </a>
          </div>
        </div>

        {(primary || wide) && (
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {primary && (
              <div className="rounded-[22px] bg-indigo-600 text-white p-5 sm:p-6 min-h-[140px] flex flex-col justify-end">
                <p className="text-sm text-indigo-100">{primary.label}</p>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-none mt-1.5">{primary.value}</p>
              </div>
            )}
            {secondary && (
              <div className="rounded-[22px] bg-white p-5 sm:p-6 min-h-[140px] flex flex-col justify-end">
                <p className="text-sm text-slate-500">{secondary.label}</p>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-none text-slate-950 mt-1.5">{secondary.value}</p>
              </div>
            )}
            {wide && (
              <WideTag
                {...(wide.href ? { href: wide.href } : {})}
                className="col-span-2 rounded-[22px] bg-white p-5 sm:p-6 flex items-center gap-4"
              >
                {wide.faces && (
                  <div className="flex -space-x-2.5 shrink-0">
                    {FACES.map((src) => (
                      <img key={src} src={src} alt="" className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-white" />
                    ))}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">{wide.label}</p>
                  <p className="font-heading font-bold text-lg sm:text-xl tracking-[-0.015em] text-slate-950 leading-tight mt-0.5">{wide.value}</p>
                </div>
              </WideTag>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
