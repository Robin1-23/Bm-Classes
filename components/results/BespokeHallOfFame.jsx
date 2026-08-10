'use client';

import React from 'react';
import { Trophy, Star, GraduationCap, Award, ShieldCheck, PlayCircle, Quote, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeHallOfFame() {
  const { openVideo } = useModal();

  const hallOfFame = [
    {
      rank: 'AIR 18',
      name: 'Shreyas Gupta',
      exam: 'JEE Advanced',
      college: 'IIT Bombay (Computer Science)',
      score: 'Math: 114/120 • Phys: 108/120',
      badgeBg: 'bg-cyan-400 text-slate-950',
      story: 'Shreyas joined BmClasses in Class 11. Under Director Dhirendra Pratap Singh’s direct 1-on-1 guidance, he mastered problem symmetry recognition, scoring top marks in Advanced Math.',
      school: 'DPS Gurgaon Sector 45',
    },
    {
      rank: 'AIR 22',
      name: 'Aryan Verma',
      exam: 'JEE Advanced',
      college: 'IIT Delhi (Electrical Engineering)',
      score: 'Chem: 112/120 • Math: 105/120',
      badgeBg: 'bg-indigo-600 text-white',
      story: 'Aryan struggled with Organic Chemistry mechanism memory until Mishra Sir taught him electron push mechanisms. His Chemistry score jumped from 60% to 94% in 6 months.',
      school: 'The Heritage School Gurgaon',
    },
    {
      rank: 'AIR 52',
      name: 'Kavya Sharma',
      exam: 'JEE Advanced',
      college: 'IIT Roorkee (Computer Science)',
      score: 'Phys: 110/120 • Math: 102/120',
      badgeBg: 'bg-purple-600 text-white',
      story: 'Kavya loved the capped 10-15 micro-batch environment because every doubt was resolved on the board on the exact same day directly with HODs.',
      school: 'GD Goenka World School Gurgaon',
    },
    {
      rank: 'AIR 102',
      name: 'Ananya Rao',
      exam: 'NEET-UG Medical',
      college: 'AIIMS New Delhi (MBBS)',
      score: 'Bio: 355/360 • Chem: 175/180',
      badgeBg: 'bg-emerald-600 text-white',
      story: 'Ananya achieved near-perfect score in NEET Biology through BmClasses’ NCERT line-by-line drill modules and weekly NEET pattern full-length mocks.',
      school: 'Amity International School Gurgaon',
    },
  ];

  const parentReviews = [
    {
      parentName: 'Rajshree Mohanty',
      locality: 'Verified Google Review',
      student: 'Parent · NEET Chemistry Batch',
      rating: 5,
      review: "We enrolled our son in BM Sir's Chemistry classes towards the end of Class XI, and it has been a wonderful decision. We have seen a significant improvement not only in his academic performance but, more importantly, in his enthusiasm to learn, practice, and continuously improve. Thank you, Sir, for your invaluable guidance and support.",
    },
    {
      parentName: 'Shaurya Sisaudia',
      locality: 'Verified Google Review',
      student: 'Student · JEE Ranker',
      rating: 5,
      review: "Bighnaraj Sir is an excellent teacher who explains every concept with great clarity. His one-on-one doubt sessions were incredibly helpful and made a huge difference in my preparation. Thanks to his guidance and teaching, I was able to secure a good rank in JEE.",
    },
    {
      parentName: 'Tanishka Patil',
      locality: 'Verified Google Review',
      student: 'Student · Biology NEET & Boards',
      rating: 5,
      review: "I was a student of Konika Ma'am for a year. She taught Biology. Had a great depth of knowledge and always cleared my concepts. It helped me to focus on competitive and boards exam and I was able to score amazing. Thank you for your support.",
    },
    {
      parentName: 'Sunaina K',
      locality: 'Verified Google Review',
      student: 'Parent · Chemistry Mentorship',
      rating: 5,
      review: "Bighnaraj Sir is a great teacher and mentor. My daughter started taking chemistry classes from sir a few months back. Her interest & understanding in the subject improved remarkably after attending classes. Sir gives personal attention to each child during classes and helps them in improving.",
    },
    {
      parentName: 'Aaryan Jain',
      locality: 'Verified Google Review',
      student: 'Student · Concept Mastery',
      rating: 5,
      review: "Bighnaraj Sir is incredibly hardworking and dedicated, ensuring every student understands the subject thoroughly. His vast knowledge and clear explanations help build strong fundamentals, making complex concepts easy to grasp. These classes have significantly boosted my confidence.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* HALL OF FAME CARDS */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-900 bg-cyan-100 border border-cyan-200 px-3.5 py-1.5 rounded-full">
              HALL OF FAME 2020-2026
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-950 mt-3">
              Verified Top AIR Ranker Case Studies
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2">
              Real stories of Gurgaon students who transformed their conceptual depth under Ex-HOD mentorship.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hallOfFame.map((ranker, rIdx) => (
              <ScrollReveal key={rIdx} delay={150 * (rIdx + 1)} direction="up">
                <div className="bg-[#faf8f5] border-2 border-slate-200 rounded-3xl p-7 flex flex-col justify-between shadow-md hover:border-indigo-500 hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-base font-black px-3.5 py-1 rounded-xl shadow-xs ${ranker.badgeBg}`}>
                          {ranker.rank}
                        </span>
                        <div>
                          <h3 className="font-heading font-black text-slate-950 text-lg leading-tight">
                            {ranker.name}
                          </h3>
                          <p className="text-xs font-bold text-indigo-600">{ranker.exam} Ranker</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                        {ranker.school}
                      </span>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between text-xs font-black text-slate-900 mb-1">
                        <span className="text-emerald-700 flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-emerald-600" />
                          {ranker.college}
                        </span>
                      </div>
                      <p className="font-mono text-xs font-bold text-cyan-400 mt-1">
                        {ranker.score}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {ranker.story}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-extrabold">
                    <span className="text-slate-500">Mentored by Senior Ex-HODs</span>
                    <button
                      onClick={() => openVideo(`${ranker.name} - AIR Ranker Journey`)}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4 text-indigo-600" />
                      <span>Watch Ranker Interview</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* GURGAON PARENT REVIEWS */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-900/60">
          <ScrollReveal delay={100} direction="up" className="max-w-2xl mb-10">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-300 bg-cyan-400/20 border border-cyan-400/30 px-3.5 py-1.5 rounded-full">
              PARENT TESTIMONIALS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mt-3">
              Verified Gurgaon Parent Case Studies
            </h2>
            <p className="text-slate-300 text-sm font-medium mt-2">
              Why Gurgaon parents trust BmClasses for their children’s IIT-JEE & NEET preparation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentReviews.map((rev, pIdx) => (
              <ScrollReveal key={pIdx} delay={150 * (pIdx + 1)} direction="up">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all">
                  <div>
                    <div className="flex items-center gap-1 text-cyan-400 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-cyan-400" />
                      ))}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed italic mb-6">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-heading font-black text-white text-sm">{rev.parentName}</h4>
                    <p className="text-xs font-bold text-cyan-300 mt-0.5">{rev.student}</p>
                    <span className="text-[10px] text-slate-400 font-semibold">{rev.locality}</span>
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
