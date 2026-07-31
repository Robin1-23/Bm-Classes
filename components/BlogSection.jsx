import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function BlogSection() {
  const blogs = [
    {
      tag: 'Exam Guide',
      title: 'JEE, BITSAT and Beyond: A Complete Guide to Engineering Admissions in India',
      excerpt: 'A complete guide to engineering admissions — JEE Main, JEE Advanced, BITSAT, JoSAA counselling, and the year-long timeline.',
    },
    {
      tag: 'Delhi NCR Admission',
      title: 'How Engineering Admissions Work in Delhi: JoSAA, JAC Delhi, IPU and CUET',
      excerpt: 'Four separate admission routes, one JEE rank, and the domicile rule every Gurgaon family needs to understand.',
    },
    {
      tag: 'CUET & B.Tech',
      title: 'CUET for Engineering and Beyond: The Complete Guide',
      excerpt: 'What CUET is, how the exam is built, and how to think about it for engineering aspirants and central university admissions.',
    },
  ];

  return (
    <section className="bg-[#faf8f5] py-20 sm:py-28 border-b border-slate-200/80" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <ScrollReveal delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 mb-2.5 block">
            Articles & Exam Guides
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Writing for the road to JEE & NEET<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-slate-600 text-base mt-3 font-medium">
            Conceptual deep-dives, study strategies, and local engineering college admission roadmaps.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-lg md:max-w-none mx-auto">
          {blogs.map((b, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)} direction="up">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-indigo-600 mb-3 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md inline-block">
                    {b.tag}
                  </div>
                  <h3 className="font-heading font-black text-lg text-slate-950 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {b.excerpt}
                  </p>
                </div>
                <a href="#" className="text-xs font-black text-indigo-600 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
