'use client';

import React, { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, Clock, CheckCircle2, Award, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CENTER_INFO, PROGRAMS_DATA } from '@/data/contentData';

export default function SeatLockModal({ isOpen, onClose }) {
  const [selectedBatch, setSelectedBatch] = useState(PROGRAMS_DATA[0]?.id || 'jee');
  const [studentName, setStudentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [marksPercentage, setMarksPercentage] = useState(90);
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [lockPassId, setLockPassId] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // 15-Minute Countdown Timer logic
  useEffect(() => {
    let timer;
    if (isLocked && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLocked, timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate Scholarship Waiver % based on marks
  const getScholarshipWaiver = (pct) => {
    if (pct >= 95) return 40;
    if (pct >= 90) return 30;
    if (pct >= 85) return 20;
    if (pct >= 80) return 15;
    return 10;
  };

  const currentProgram = PROGRAMS_DATA.find((p) => p.id === selectedBatch) || PROGRAMS_DATA[0];
  const scholarshipPercent = getScholarshipWaiver(marksPercentage);

  // Phone input handler (only digits up to 10 characters)
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(val);
    if (val.length > 0 && val.length < 10) {
      setPhoneError('Mobile number must be exactly 10 digits.');
    } else if (val.length === 10 && !/^[6-9]\d{9}$/.test(val)) {
      setPhoneError('Please enter a valid 10-digit mobile number starting with 6-9.');
    } else {
      setPhoneError('');
    }
  };

  // Email input handler
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (val.trim() && !emailRegex.test(val.trim())) {
      setEmailError('Please enter a valid email address (e.g. name@domain.com).');
    } else {
      setEmailError('');
    }
  };

  const handleLockSeat = async (e) => {
    e.preventDefault();
    
    // Strict Validation
    let hasError = false;
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number.');
      hasError = true;
    }

    const cleanEmail = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    }

    if (hasError || !studentName.trim()) return;

    setSubmitting(true);
    const passCode = `BM-HOD-${Math.floor(1000 + Math.random() * 9000)}`;

    const payload = {
      studentName: studentName.trim(),
      phoneNumber: cleanPhone,
      email: cleanEmail,
      selectedProgram: `${currentProgram.title} (${currentProgram.category || 'JEE & NEET'})`,
      marksPercentage,
      lockPassId: passCode,
      source: 'Seat Lock Studio',
    };

    // 1. Post to API route for persistent server storage
    let serverApp = null;
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.application) {
        serverApp = data.application;
      }
    } catch (err) {
      console.error('Failed to submit application to server API:', err);
    }

    // 2. Save Lead to localStorage as offline fallback
    try {
      const existing = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const newLead = serverApp || {
        id: `LOCK-${Date.now()}`,
        ...payload,
        status: 'New Lead',
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      };
      // Prevent duplicates in local storage
      const filtered = existing.filter(
        (item) => !(item.phoneNumber === newLead.phoneNumber && item.studentName === newLead.studentName)
      );
      filtered.unshift(newLead);
      localStorage.setItem('bmclasses_registrations', JSON.stringify(filtered));
    } catch (err) {
      console.error('Failed to save lead locally:', err);
    }

    setSubmitting(false);
    setLockPassId(passCode);
    setIsLocked(true);
    setTimeLeft(900);
  };

  const handleSendWhatsAppLock = () => {
    const textMessage = `*🔒 EX-HOD SEAT LOCK PASS #${lockPassId}*\n\n` +
      `*Student Name:* ${studentName}\n` +
      `*Mobile Number:* ${phoneNumber}\n` +
      `*Email Address:* ${email}\n` +
      `*Program Selected:* ${currentProgram.title} (${currentProgram.category || 'JEE & NEET'})\n` +
      `*Class Score:* ${marksPercentage}%\n` +
      `*Merit Scholarship:* ${scholarshipPercent}% Waiver Applied\n` +
      `*Center:* Ardee City, Sector 52, Gurgaon\n\n` +
      `Hi BmClasses Senior HOD, I have locked a micro-batch seat on the website. Please confirm my diagnostic session and seat reservation.`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/919899818241?text=${encoded}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl border border-slate-200 text-slate-900 animate-float my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-20 cursor-pointer"
          aria-label="Close Seat Lock Studio"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden border-b border-zinc-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
            <span>Ex-HOD 10-15 Micro-Batch Lock Studio</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-black leading-tight tracking-tight">
            Reserve & Lock Your <span className="text-cyan-300">Ex-HOD Batch Seat</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 max-w-lg">
            Strictly capped at 10–15 students per batch for maximum individual attention directly under Ex-HODs of FIITJEE & VMC.
          </p>

          {/* Live Timer Status if Locked */}
          {isLocked && (
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-4 bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0"></div>
                <span className="text-xs font-extrabold text-emerald-300">Seat Temporarily Locked & Saved</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-sm font-black bg-slate-900 px-3 py-1 rounded-xl text-cyan-300 border border-cyan-400/30">
                <Clock className="w-4 h-4 text-cyan-300" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {!isLocked ? (
            /* STEP 1: Interactive Seat Lock Form */
            <form onSubmit={handleLockSeat} className="space-y-5">
              
              {/* Batch Selector Grid */}
              <div>
                <label className="block text-xs font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Select Target Program & Batch</span>
                  <span className="text-[10px] text-cyan-900 font-extrabold bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                    Micro-Batch Limit: 10-15
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROGRAMS_DATA.map((prog, pIdx) => {
                    const isSelected = selectedBatch === prog.id;
                    const seatsLeftText = prog.seatsLeft || '2 Seats Left';
                    const batchCap = prog.badgeText?.includes('15') ? '15' : '12';

                    return (
                      <button
                        type="button"
                        key={pIdx}
                        onClick={() => setSelectedBatch(prog.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected 
                            ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-600/20 shadow-md' 
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-black text-slate-950">{prog.title}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                          </div>
                          <p className="text-[11px] text-slate-600 font-semibold leading-snug mb-2">{prog.category || 'JEE & NEET Coaching'}</p>
                        </div>

                        {/* Seat Availability Counter Bar */}
                        <div className="pt-2 border-t border-slate-200/80">
                          <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-700 mb-1">
                            <span className="text-cyan-800 font-black">{seatsLeftText}</span>
                            <span>Cap: {batchCap}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-full" style={{ width: '83%' }}></div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Student Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-900 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-indigo-600 font-extrabold bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 mb-1">Mobile (10 Digits) *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="e.g. 9899818241"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none font-extrabold ${
                      phoneError ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white'
                    }`}
                  />
                  {phoneError && <p className="text-[10px] font-bold text-red-600 mt-0.5">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-900 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="e.g. rahul@gmail.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none font-extrabold ${
                      emailError ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white'
                    }`}
                  />
                  {emailError && <p className="text-[10px] font-bold text-red-600 mt-0.5">{emailError}</p>}
                </div>
              </div>

              {/* Merit Scholarship Calculator Slider */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-600 shrink-0" />
                    <div>
                      <span className="text-xs font-black text-slate-950 block">Ex-HOD Merit Scholarship Waiver</span>
                      <span className="text-[10px] text-slate-600 font-medium">Based on Class X/XI Board Marks</span>
                    </div>
                  </div>
                  <span className="text-base font-black text-indigo-700 bg-white px-3 py-1 rounded-xl shadow-xs border border-indigo-100">
                    {scholarshipPercent}% Waiver
                  </span>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="60"
                    max="99"
                    value={marksPercentage}
                    onChange={(e) => setMarksPercentage(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>60% Marks</span>
                    <span className="font-black text-indigo-600">{marksPercentage}% Expected/Achieved</span>
                    <span>99% Marks</span>
                  </div>
                </div>
              </div>

              {/* Lock Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-indigo-200 cursor-pointer flex items-center justify-center gap-2 text-base disabled:opacity-50"
              >
                <Lock className="w-5 h-5 text-cyan-300" />
                <span>{submitting ? 'Saving Application...' : 'Lock Seat & Save Application'}</span>
              </button>

            </form>
          ) : (
            /* STEP 2: Digital Seat Lock Confirmation Pass */
            <div className="space-y-6 animate-fade-in">
              
              {/* Pass Card Container */}
              <div className="bg-black text-white p-6 sm:p-7 rounded-3xl border-2 border-cyan-400/40 shadow-2xl relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-xs">
                      Bm
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-black text-white">OFFICIAL EX-HOD SEAT LOCK PASS</h4>
                      <p className="text-[10px] text-cyan-300 font-bold">BmClasses Gurgaon Center • Sector 52</p>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-black text-cyan-300 bg-zinc-900 px-3 py-1 rounded-xl border border-zinc-800">
                    #{lockPassId}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 py-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">STUDENT NAME</span>
                    <span className="font-black text-white text-sm">{studentName}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">CONTACT PHONE</span>
                    <span className="font-black text-white text-sm">{phoneNumber}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">EMAIL ADDRESS</span>
                    <span className="font-black text-white text-xs truncate block">{email}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">SELECTED BATCH</span>
                    <span className="font-black text-indigo-300">{currentProgram?.title || 'JEE / NEET Batch'}</span>
                  </div>
                </div>

                {/* Center Guarantee Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Application Saved to Admin Database</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">{scholarshipPercent}% Waiver Applied</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleSendWhatsAppLock}
                  className="w-full flex-1 bg-[#25D366] hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-emerald-200 cursor-pointer flex items-center justify-center gap-2 text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                  <span>Confirm Reservation on WhatsApp</span>
                </button>

                <button
                  onClick={() => setIsLocked(false)}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold px-6 py-4 rounded-2xl transition-all text-xs cursor-pointer"
                >
                  Change Batch
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
