import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, ChevronDown } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import DemoBookingSection from '@/components/DemoBookingSection';
import { COURSES, CENTRES, courseName } from '@/data/siteContent';
import { FACULTY, JsonLd, breadcrumbJsonLd, courseJsonLd, pageMetadata } from '@/data/seo';
import { LOCAL_PAGES } from '@/data/localPages';

const TINTS = ['bg-[#f3f1ff]', 'bg-[#eef7ea]', 'bg-[#fdf4e6]'];

export const localMetadata = (slug) => {
  const p = LOCAL_PAGES[slug];
  return { ...pageMetadata({ title: p.metaTitle, description: p.metaDescription, path: p.path }), title: { absolute: p.metaTitle } };
};

// Server-rendered keyword landing page (JEE / NEET / Chemistry in Gurgaon)
export default function LocalLanding({ slug }) {
  const p = LOCAL_PAGES[slug];
  const courses = p.courseIds.map((id) => COURSES.find((c) => c.id === id)).filter(Boolean);
  const faculty = FACULTY.filter((f) => p.faculty.includes(f.name));
  const others = Object.entries(LOCAL_PAGES).filter(([key]) => key !== slug);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(p.nav, p.path)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: p.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        }}
      />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: courses.map((c, i) => ({ '@type': 'ListItem', position: i + 1, item: courseJsonLd(c) })) }} />

      <PageHeader
        breadcrumb={p.nav}
        badgeText={p.badge}
        title={p.title}
        soft={p.soft}
        subtitle={p.subtitle}
        tint={p.tint}
        facts={p.facts}
        wide={{ label: '3 centres in Gurugram', value: 'Sector 45 · Malibu Towne · Sector 46', faces: true }}
      />

      {/* Intro + comparison */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.08] text-slate-950">{p.intro.heading}</h2>
            {p.intro.paras.map((t) => (
              <p key={t.slice(0, 20)} className="text-slate-600 leading-relaxed mt-5">{t}</p>
            ))}
          </div>
          <div className="lg:col-span-7 rounded-[28px] bg-white p-2 border border-slate-200/70">
            <div className="rounded-[22px] bg-[#f5f7ff] p-5 sm:p-7">
              <h3 className="font-heading font-bold text-xl tracking-[-0.02em] text-slate-950">What to compare before you choose</h3>
              <dl className="mt-5 divide-y divide-slate-200/70">
                {p.compare.map(([k, v]) => (
                  <div key={k} className="py-3.5 grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4">
                    <dt className="text-sm font-semibold text-slate-950 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" /> {k}
                    </dt>
                    <dd className="text-sm text-slate-600 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-[#f5f7ff] py-16 lg:py-24 border-y border-[#e3e8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-slate-950">
            Courses running now. <span className="text-slate-400">Online or in Gurugram.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {courses.map((c) => (
              <article key={c.id} className="rounded-[28px] bg-white p-2 border border-slate-200/70">
                <div className={`h-full rounded-[22px] ${c.tint} p-6 flex flex-col`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{c.kind}</p>
                  <h3 className="font-heading font-bold text-2xl tracking-[-0.02em] text-slate-950 mt-2">{courseName(c)}</h3>
                  <ul className="text-sm text-slate-600 mt-4 space-y-1.5 flex-1">
                    <li>{c.teacher}</li>
                    <li>{c.hours} · {c.tests}</li>
                    <li>{c.mode}</li>
                    <li>Starts: {c.start}</li>
                  </ul>
                  <Link href="/programs" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-indigo-600">
                    Course details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-slate-950">
            Your teachers. <span className="text-slate-400">Not their assistants.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {faculty.map((f, i) => (
              <article key={f.name} className="rounded-[28px] bg-white p-2 border border-slate-200/70">
                <div className={`h-full rounded-[22px] ${TINTS[i % 3]} p-6 flex gap-4`}>
                  <img src={f.image} alt={`${f.alternateName}, ${f.jobTitle} at BM Classes Gurugram`} className="w-16 h-16 rounded-2xl object-cover object-top shrink-0" loading="lazy" />
                  <div>
                    <h3 className="font-heading font-bold text-xl tracking-[-0.02em] text-slate-950">{f.alternateName}</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{f.jobTitle}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2">{f.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Link href="/faculty" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-indigo-600">
            Meet all the faculty <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Centres */}
      <section className="bg-[#f5f7ff] py-16 lg:py-24 border-y border-[#e3e8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-slate-950">
            3 centres in Gurugram. <span className="text-slate-400">Pick the closest.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {CENTRES.map((c, i) => (
              <a key={c.id} href={c.maps} target="_blank" rel="noopener noreferrer" className="rounded-[28px] bg-white p-2 border border-slate-200/70 hover:border-slate-400 transition-colors">
                <span className={`block h-full rounded-[22px] ${TINTS[i]} p-6`}>
                  <MapPin className="w-5 h-5 text-slate-700" />
                  <span className="block font-heading font-bold text-xl tracking-[-0.02em] text-slate-950 mt-3">{c.name}</span>
                  <span className="block text-sm text-slate-600 mt-1">{c.address}</span>
                  <span className="block text-sm font-semibold text-slate-950 mt-4">Get directions →</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-slate-950">Questions parents ask</h2>
          <div className="mt-8 space-y-3">
            {p.faq.map(({ q, a }) => (
              <details key={q} className="group rounded-[22px] bg-[#f5f7ff] px-5 py-4 open:bg-white open:ring-1 open:ring-slate-200">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-slate-950">
                  <h3>{q}</h3>
                  <ChevronDown className="w-5 h-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-slate-600 leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
          <nav aria-label="Related pages" className="mt-10 flex flex-wrap gap-2">
            {others.map(([key, o]) => (
              <Link key={key} href={o.path} className="h-10 px-4 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-sm font-semibold text-slate-900 inline-flex items-center">
                {o.nav}
              </Link>
            ))}
            <Link href="/results" className="h-10 px-4 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-sm font-semibold text-slate-900 inline-flex items-center">
              Student results
            </Link>
          </nav>
        </div>
      </section>

      <DemoBookingSection />
    </>
  );
}
