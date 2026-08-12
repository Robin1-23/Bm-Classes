'use client';

import React from 'react';
import { Trophy, Star, GraduationCap, Award, ShieldCheck, PlayCircle, Quote, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeHallOfFame() {
  const { openVideo } = useModal();

  const hallOfFame = [
    {
      rank: 'AIR 18',
      name: 'Shreyas Gupta',
      exam: 'JEE Advanced',
      college: 'IIT Bombay (CS)',
      score: 'Math: 114/120 • Phys: 108/120',
      badgeBg: 'bg-cyan-400 text-black',
      bullets: [
        '1-on-1 Math pattern twist mentorship',
        'Direct guidance under Senior Ex-HOD Mentors',
        'Mastered 45-second question symmetry',
      ],
      school: 'DPS Gurgaon Sec 45',
    },
    {
      rank: 'AIR 22',
      name: 'Aryan Verma',
      exam: 'JEE Advanced',
      college: 'IIT Delhi (EE)',
      score: 'Chem: 112/120 • Math: 105/120',
      badgeBg: 'bg-cyan-400 text-black',
      bullets: [
        'Organic electron push mechanism mastery',
        'Chemistry jumped from 60% to 94% in 6 mos',
        'Direct mentorship under BM Sir',
      ],
      school: 'The Heritage School',
    },
    {
      rank: 'AIR 52',
      name: 'Kavya Sharma',
      exam: 'JEE Advanced',
      college: 'IIT Roorkee (CS)',
      score: 'Phys: 110/120 • Math: 102/120',
      badgeBg: 'bg-cyan-400 text-black',
      bullets: [
        'Capped 10-15 micro-batch environment',
        'Same-day live board doubt clearing',
        'Zero queue waiting with senior HODs',
      ],
      school: 'GD Goenka School',
    },
    {
      rank: 'AIR 102',
      name: 'Ananya Rao',
      exam: 'NEET-UG Medical',
      college: 'AIIMS New Delhi (MBBS)',
      score: 'Bio: 355/360 • Chem: 175/180',
      badgeBg: 'bg-cyan-400 text-black',
      bullets: [
        'Near-perfect score in NEET Biology',
        'Line-by-line NCERT drill modules',
        'Weekly full-length NEET pattern mocks',
      ],
      school: 'Amity Intl School',
    },
  ];

  const parentReviews = [
    {
      parentName: 'Rajshree Mohanty',
      locality: 'Verified Google Review',
      student: 'Parent · NEET Chemistry Batch',
      rating: 5,
      review: "Significant improvement in academic performance and enthusiasm to learn. Thank you BM Sir for invaluable guidance.",
    },
    {
      parentName: 'Shaurya Sisaudia',
      locality: 'Verified Google Review',
      student: 'Student · JEE Ranker',
      rating: 5,
      review: "Explains every concept with great clarity. 1-on-1 doubt sessions made a huge difference in securing my JEE rank.",
    },
    {
      parentName: 'Tanishka Patil',
      locality: 'Verified Google Review',
      student: 'Student · Biology NEET & Boards',
      rating: 5,
      review: "Konika Ma'am has great depth of knowledge. Helped me focus on NEET & Boards to score amazing marks.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        
        {/* HALL OF FAME CARDS */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>HALL OF FAME 2020-2026</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
              Verified Top AIR <span className="font-serif italic font-normal text-cyan-300">Ranker Case Studies</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hallOfFame.map((ranker, rIdx) => (
              <ScrollReveal key={rIdx} delay={150 * (rIdx + 1)} direction="up">
                <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-cyan-400 transition-all">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800 mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-base font-black px-3.5 py-1 rounded-xl ${ranker.badgeBg}`}>
                          {ranker.rank}
                        </span>
                        <div>
                          <h3 className="font-heading font-black text-white text-base sm:text-lg leading-tight">
                            {ranker.name}
                          </h3>
                          <p className="text-xs font-bold text-cyan-400">{ranker.exam} Ranker</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg">
                        {ranker.school}
                      </span>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 mb-4">
                      <div className="flex items-center justify-between text-xs font-black text-white">
                        <span className="text-cyan-300 flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 text-cyan-400" />
                          {ranker.college}
                        </span>
                      </div>
                      <p className="font-mono text-xs font-bold text-cyan-400 mt-1">
                        {ranker.score}
                      </p>
                    </div>

                    {/* Punchy Bullets */}
                    <div className="space-y-1.5 mb-4">
                      {ranker.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                          <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-extrabold">
                    <span className="text-zinc-400">Ex-HOD Mentored</span>
                    <button
                      onClick={() => openVideo(`${ranker.name} - AIR Ranker Journey`)}
                      className="text-cyan-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4 text-cyan-400" />
                      <span>Watch Interview</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* GURGAON PARENT REVIEWS */}
        <div className="bg-black text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-zinc-800 relative overflow-hidden">
          <ScrollReveal delay={100} direction="up" className="max-w-2xl mb-8">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PARENT TESTIMONIALS</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mt-2">
              Verified Gurgaon <span className="font-serif italic font-normal text-cyan-300">Parent Reviews</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {parentReviews.map((rev, pIdx) => (
              <ScrollReveal key={pIdx} delay={150 * (pIdx + 1)} direction="up">
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-400/60 transition-all">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-zinc-200 text-xs font-medium leading-relaxed italic mb-4">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800">
                    <h4 className="font-heading font-black text-white text-xs">{rev.parentName}</h4>
                    <p className="text-[11px] font-bold text-cyan-300">{rev.student}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
