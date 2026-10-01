import React from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ, faqJsonLd, JsonLd } from '@/data/seo';

// Visible FAQ + matching FAQPage data. Native <details> keeps every answer in the HTML.
export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28 border-b border-[#e3e8f5] scroll-mt-24">
      <JsonLd data={faqJsonLd()} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeIcon={HelpCircle}
          badgeText="QUESTIONS PARENTS ASK"
          title="Straight answers."
          subtitle="Fees, faculty, batch size, location. Everything families ask us before joining."
        />
        <div className="space-y-3">
          {FAQ.map(({ q, a }, i) => (
            <details
              key={q}
              open={i === 0}
              className="group rounded-[22px] border border-slate-200 bg-white open:bg-[#f5f7ff] open:border-[#e3e8f5] transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading font-semibold text-lg tracking-[-0.01em] text-slate-950">{q}</h3>
                <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 transition-transform group-open:rotate-45">
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <p className="px-6 pb-6 -mt-1 text-[15px] text-slate-700 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
