'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, DollarSign, HelpCircle, Lock, ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useModal } from '@/context/ModalContext';

export default function BespokeFeeBreakdown() {
  const { openSeatLock, openRegister } = useModal();

  const scholarshipTiers = [
    {
      range: '95% to 99% Marks',
      waiver: '40% Fee Waiver',
      tierName: 'Presidential Ex-HOD Scholar',
      badge: 'TOP MERIT TIER',
      badgeBg: 'bg-cyan-400 text-slate-950',
    },
    {
      range: '90% to 94% Marks',
      waiver: '30% Fee Waiver',
      tierName: 'Director’s Distinction Scholar',
      badge: 'HIGH HONORS',
      badgeBg: 'bg-indigo-600 text-white',
    },
    {
      range: '85% to 89% Marks',
      waiver: '20% Fee Waiver',
      tierName: 'Senior Academic Scholar',
      badge: 'MERIT TIER',
      badgeBg: 'bg-emerald-600 text-white',
    },
    {
      range: '80% to 84% Marks',
      waiver: '15% Fee Waiver',
      tierName: 'Academic Excellence Tier',
      badge: 'HONORS',
      badgeBg: 'bg-slate-800 text-slate-200',
    },
    {
      range: '60% to 79% Marks',
      waiver: '10% Fee Waiver',
      tierName: 'Diagnostic Foundation Scholar',
      badge: 'FOUNDATION',
      badgeBg: 'bg-slate-200 text-slate-800',
    },
  ];

  const feeInclusions = [
    '100% Direct Classroom Coaching by Senior Ex-HODs',
    'Curated 15 High-Yield Advanced Problem Modules per Topic',
    'Same-Day Board Doubt Resolution Slots with HODs',
    'Weekly AI-Powered Rank Telemetry Diagnostic Platform Access',
    '25-Year JEE Advanced & NEET Previous Year Question Bank',
    'Personalized 1-on-1 Monthly Parent & Mentor Progress Reviews',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* SCHOLARSHIP TIER MATRIX TABLE */}
        <div>
          <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-cyan-900 bg-cyan-100 border border-cyan-200 px-3.5 py-1.5 rounded-full">
              TRANSPARENT SCHOLARSHIP MATRIX
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-slate-950 mt-3">
              Official Ex-HOD Merit Scholarship Policy
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2">
              Scholarships are awarded transparently based on your expected or achieved Class X/XI Board Exam marks.
            </p>
          </ScrollReveal>

          <div className="bg-black rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-black uppercase tracking-wider text-slate-400">
                    <th className="pb-4 px-4">Board Mark Range</th>
                    <th className="pb-4 px-4">Scholarship Waiver %</th>
                    <th className="pb-4 px-4">Scholar Tier Category</th>
                    <th className="pb-4 px-4 text-right">Batch Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-sm">
                  {scholarshipTiers.map((tier, tIdx) => (
                    <tr key={tIdx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-mono font-bold text-slate-200">
                        {tier.range}
                      </td>
                      <td className="py-4 px-4 font-black text-cyan-300 text-base">
                        {tier.waiver}
                      </td>
                      <td className="py-4 px-4 font-extrabold text-white">
                        <div className="flex items-center gap-2">
                          <span>{tier.tierName}</span>
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded ${tier.badgeBg}`}>
                            {tier.badge}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={openSeatLock}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs px-3.5 py-2 rounded-xl transition-all inline-flex items-center gap-1 cursor-pointer shadow-sm border border-emerald-400/40"
                        >
                          <Lock className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Lock Waiver</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FEE INCLUSIONS & ZERO HIDDEN COSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* 100% Fee Inclusions Box */}
          <div className="bg-[#faf8f5] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-black uppercase tracking-widest mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% INCLUSIVE ACADEMIC PACKAGE</span>
              </div>
              <h3 className="font-heading text-2xl font-black text-slate-950 mb-4">
                What is Included in Your Course Fee?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
                Zero surprise charges. Your single course fee covers all physical study material, board solving slots, diagnostic testing, and parent reviews.
              </p>

              <div className="space-y-3">
                {feeInclusions.map((inc, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0 mt-1.5"></span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-extrabold text-slate-700">
              <span>Flexible Installments Available</span>
              <span className="text-indigo-600">3-Part Payment Schedule</span>
            </div>
          </div>

          {/* Zero Hidden Costs Guarantee */}
          <div className="bg-black text-white rounded-3xl p-8 border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                <span>EX-HOD TRANSPARENCY PROMISE</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                Zero Hidden Costs. 100% Fee Clarity.
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mt-3">
                Unlike mass institutes that charge extra for test series, doubt counters, or registration fees mid-session, BmClasses provides complete fee transparency upfront.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm font-bold text-slate-200">
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>No separate test series or exam portal charges</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>No additional doubt counter fees</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>No mid-session study material price hikes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={openRegister}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply & Lock Your Scholarship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
