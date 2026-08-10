'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, Zap, ArrowRight, ShieldCheck, Award, Users, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';

export default function CalculatorSection({ onOpenRegister, onOpenSeatLock }) {
  const modal = useModal();
  const handleRegister = onOpenRegister || modal.openRegister;
  const handleSeatLock = onOpenSeatLock || modal.openSeatLock;
  const [cls, setCls] = useState('dropper');
  const [exam, setExam] = useState('advanced');
  const [mode, setMode] = useState('smallbatch');
  const [fee, setFee] = useState(110000);
  const [seats, setSeats] = useState(3);
  const [scholarship, setScholarship] = useState(15);

  useEffect(() => {
    let base = 65000;
    if (cls === '11') base = 85000;
    else if (cls === '12') base = 90000;
    else if (cls === 'dropper') base = 95000;

    if (exam === 'advanced') base += 15000;
    else if (exam === 'neet') base += 10000;

    if (mode === 'oneonone') base *= 1.6;

    setFee(Math.round(base));
    setSeats(cls === '11' ? 4 : cls === '12' ? 2 : 3);
    setScholarship(exam === 'advanced' ? 25 : 15);
  }, [cls, exam, mode]);

  const classOptions = [
    { id: '11', label: 'Class 11', sub: '2-Yr Foundation' },
    { id: '12', label: 'Class 12', sub: '1-Yr Target' },
    { id: 'dropper', label: 'Droppers', sub: 'Intensive Batch' },
  ];

  const examOptions = [
    { id: 'advanced', label: 'JEE Advanced', sub: 'Main + Advanced' },
    { id: 'main', label: 'JEE Main', sub: 'Main + BITSAT' },
    { id: 'neet', label: 'NEET UG', sub: 'Medical Excellence' },
  ];

  const modeOptions = [
    { id: 'smallbatch', label: 'Micro-Batch (Max 10-15)', icon: Users },
    { id: 'oneonone', label: '1-on-1 Mentorship', icon: Award },
  ];

  return (
    <section className="bg-[#090d16] text-white py-20 sm:py-28 relative overflow-hidden border-b border-slate-800" id="calculator">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader 
          dark
          badgeIcon={Calculator}
          badgeText="TRANSPARENT TUITION STUDIO"
          title="Calculate fee & seat matrix"
          subtitle="Transparent fee structure with early-bird scholarships and live micro-batch seat tracking."
        />

        {/* MODERN INTERACTIVE STUDIO CONSOLE */}
        <ScrollReveal delay={200} direction="up">
          <div className="max-w-5xl mx-auto bg-slate-900/90 border-2 border-slate-800 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Configuration Desk */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* 1. Class Selection Pills */}
                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                    <span>Target Academic Class</span>
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2.5">
                    {classOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCls(opt.id)}
                        className={`p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                          cls === opt.id
                            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                            : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="font-heading font-extrabold text-xs sm:text-sm">{opt.label}</div>
                        <div className={`text-[10px] font-medium mt-0.5 ${cls === opt.id ? 'text-indigo-200' : 'text-slate-500'}`}>{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Exam Focus Pills */}
                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                    <span>Target Exam Focus</span>
                  </label>

                  <div className="grid grid-cols-3 gap-2.5">
                    {examOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setExam(opt.id)}
                        className={`p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                          exam === opt.id
                            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                            : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="font-heading font-extrabold text-xs sm:text-sm">{opt.label}</div>
                        <div className={`text-[10px] font-medium mt-0.5 ${exam === opt.id ? 'text-indigo-200' : 'text-slate-500'}`}>{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Learning Format Pills */}
                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                    <span>Learning Format</span>
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {modeOptions.map((opt) => {
                      const ModeIcon = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setMode(opt.id)}
                          className={`p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer flex items-center gap-3 ${
                            mode === opt.id
                              ? 'bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 font-black border-cyan-300 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800/60'
                          }`}
                        >
                          <ModeIcon className={`w-4 h-4 shrink-0 ${mode === opt.id ? 'text-slate-950' : 'text-indigo-400'}`} />
                          <span className="text-xs font-extrabold">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Output Telemetry Vault */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-slate-950 border-2 border-indigo-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                      ESTIMATED TUITION
                    </span>
                    <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-2.5 py-0.5 rounded-md uppercase">
                      NO HIDDEN COSTS
                    </span>
                  </div>

                  {/* Dynamic Currency Counter */}
                  <div className="mb-4">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                      Annual All-Inclusive Fee
                    </span>
                    <div className="font-heading font-black text-4xl sm:text-5xl text-cyan-300 tracking-tight">
                      ₹{fee.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium block mt-1">
                      *Covers study materials, testing platform & daily doubts.
                    </span>
                  </div>

                  {/* Seat Availability Telemetry */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-6">
                    <div className="flex justify-between items-center text-xs font-extrabold mb-2">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-300 fill-cyan-400" />
                        Micro-Batch Seat Status
                      </span>
                      <span className="text-cyan-300">{seats} Seats Left</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-500"
                        style={{ width: `${(seats / 12) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium flex justify-between">
                      <span>Strictly Capped Batch</span>
                      <span>Intake Closing Soon</span>
                    </div>
                  </div>

                  {/* Included Perks Checklist */}
                  <div className="space-y-2.5 text-xs font-bold text-slate-200 mb-8 pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Direct Ex-HOD FIITJEE & VMC Faculty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Same-day board doubt clearing slots</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-300">
                      <Award className="w-4 h-4 text-cyan-300 shrink-0" />
                      <span>Eligible for up to {scholarship}% Ex-HOD Merit Scholarship</span>
                    </div>
                  </div>
                </div>

                {/* Main Action CTA */}
                <div>
                  <Button variant="accent" showArrow onClick={handleRegister} className="w-full">
                    Reserve Seat & Claim Scholarship
                  </Button>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
