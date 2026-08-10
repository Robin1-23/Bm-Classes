'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { PROGRAMS_DATA, CENTER_INFO } from '@/data/contentData';

export default function Modals({
  registerOpen,
  loginOpen,
  videoTitle,
  preselectedProgram,
  onClose,
}) {
  const [studentName, setStudentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(`${PROGRAMS_DATA[0]?.title} (${PROGRAMS_DATA[0]?.category})`);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProgram && registerOpen) {
      const match = PROGRAMS_DATA.find(
        (p) =>
          p.id === preselectedProgram ||
          p.title.toLowerCase().includes(preselectedProgram.toLowerCase()) ||
          preselectedProgram.toLowerCase().includes(p.title.toLowerCase())
      );
      if (match) {
        setSelectedProgram(`${match.title} (${match.category})`);
      } else {
        setSelectedProgram(preselectedProgram);
      }
    }
  }, [preselectedProgram, registerOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !phoneNumber) return;

    // 1. Save Lead to localStorage for persistent local retrieval
    const newLead = {
      id: `REG-${Date.now()}`,
      studentName,
      phoneNumber,
      selectedProgram,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      existing.unshift(newLead);
      localStorage.setItem('bmclasses_registrations', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save lead locally:', err);
    }

    // 2. Format WhatsApp Instant Message
    const textMessage = `*📋 NEW BMCLASSES ADMISSION REGISTRATION*\n\n` +
      `*Student Name:* ${studentName}\n` +
      `*Phone Number:* ${phoneNumber}\n` +
      `*Target Program:* ${selectedProgram}\n` +
      `*Center:* Ardee City, Sector 52, Gurgaon\n\n` +
      `Hi BmClasses, I have submitted my admission registration on the website. Please contact me for my diagnostic session and counseling call.`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/919991239374?text=${encoded}`, '_blank');

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStudentName('');
    setPhoneNumber('');
    onClose();
  };

  return (
    <>
      {/* REGISTER MODAL */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto relative shadow-2xl border border-slate-200 text-slate-900 animate-float my-auto">
            
            {/* Modal Header Banner */}
            <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden">
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={handleReset}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Close Registration Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Ex-HOD Diagnostic & Counseling Call</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black leading-tight tracking-tight text-white">
                Register for <span className="text-cyan-300">BmClasses</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Book your 1-on-1 diagnostic session directly with Senior Ex-HODs of FIITJEE & VMC.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Input 1: Student Full Name */}
                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Student Full Name</span>
                      <span className="text-cyan-600 font-black text-[10px]">* Required</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-4 pr-4 py-3.5 rounded-2xl border-2 border-slate-200/90 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-extrabold text-slate-900 bg-slate-50/80 focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Input 2: Parent Phone Number */}
                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Parent Mobile Number</span>
                      <span className="text-cyan-600 font-black text-[10px]">* Required</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        required 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. 9899818241"
                        className="w-full pl-4 pr-4 py-3.5 rounded-2xl border-2 border-slate-200/90 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-extrabold text-slate-900 bg-slate-50/80 focus:bg-white transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Input 3: Target Program */}
                  <div>
                    <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Target Program & Course</span>
                      <span className="text-indigo-600 font-black text-[10px]">Capped 10-15 Batch</span>
                    </label>
                    <select 
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200/90 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-extrabold text-slate-900 bg-slate-50/80 focus:bg-white transition-all shadow-xs cursor-pointer"
                    >
                      {PROGRAMS_DATA.map((prog, pIdx) => (
                        <option key={pIdx} value={`${prog.title} (${prog.category})`}>
                          {prog.title} — {prog.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit CTA Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black py-4 rounded-2xl transition-all text-sm sm:text-base shadow-xl shadow-indigo-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-indigo-400/30"
                  >
                    <span>Submit & Forward to Ex-HOD Counselor</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                  </button>

                  {/* Trust Micro Footer */}
                  <div className="pt-2 text-center text-[11px] font-extrabold text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Privacy Guaranteed • Direct Ex-HOD Counseling Session</span>
                  </div>

                </form>
              ) : (
                <div className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md border-4 border-emerald-50">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      APPLICATION RECEIVED
                    </span>
                    <h3 className="font-heading text-2xl font-black text-slate-950 mt-2">Registration Submitted!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm mx-auto mt-1">
                      Thank you, <strong className="text-slate-900">{studentName}</strong>. Your details have been collected and forwarded directly to our Senior HOD counselor at Ardee City Center.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-bold text-slate-800 space-y-1.5 text-left">
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-500">Target Program:</span>
                      <span className="text-indigo-700 font-extrabold">{selectedProgram}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="text-slate-900 font-extrabold">{phoneNumber}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-slate-500">Destination Counselor:</span>
                      <span className="text-emerald-700 font-black">+91 99912 39374</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <a 
                      href="https://wa.me/919991239374?text=Hi%20BmClasses%2C%20I%20have%20submitted%20my%20registration%20form%20on%20the%20website." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" /> Connect Directly on WhatsApp (+91 99912 39374)
                    </a>

                    <button 
                      onClick={handleReset}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-3 rounded-2xl transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-[92%] max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-100">
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 mb-1">Student & Parent Login</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Access your tests, analytics dashboard, and study materials.</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Redirecting to your BmClasses student portal...');
              onClose();
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">Registration ID / Mobile</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter ID or mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">Password</label>
                <input 
                  type="password" 
                  required 
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all text-sm shadow-md mt-2 cursor-pointer"
              >
                Login to Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoTitle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-950 text-white rounded-3xl p-6 max-w-2xl w-[94%] relative shadow-2xl border border-slate-800">
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-base sm:text-lg font-black mb-4 pr-8">{videoTitle}</h3>

            <div className="bg-black/80 rounded-2xl h-64 sm:h-80 flex flex-col items-center justify-center border border-white/10 p-4">
              <div className="text-4xl mb-3 text-cyan-300">🎬</div>
              <p className="font-black text-sm sm:text-base text-center">Playing Student Interview</p>
              <p className="text-xs text-slate-400 mt-1 text-center font-medium">IIT Delhi JEE Advanced Top Ranker Journey</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
