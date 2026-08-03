'use client';

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PROGRAMS_DATA } from '@/data/contentData';

export default function Modals({
  registerOpen,
  loginOpen,
  videoTitle,
  onClose,
}) {
  return (
    <>
      {/* REGISTER MODAL */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-[92%] max-h-[90vh] overflow-y-auto relative shadow-2xl animate-float border border-slate-100">
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 mb-1">Register for BmClasses</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Fill in your details for a free diagnostic session & counseling call.</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for registering with BmClasses! Our academic counselor will contact you at +91 98998 18241 shortly.');
              onClose();
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">Student Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter student's full name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">Target Program & Exam</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-indigo-600 font-extrabold text-slate-900 bg-white">
                  {PROGRAMS_DATA.map((prog, pIdx) => (
                    <option key={pIdx} value={prog.id}>
                      {prog.title} ({prog.category})
                    </option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-xl transition-all text-sm shadow-md mt-2 cursor-pointer"
              >
                Submit Application
              </button>
            </form>
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
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all text-sm shadow-md mt-2 cursor-pointer"
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
              <div className="text-4xl mb-3 text-amber-400">🎬</div>
              <p className="font-black text-sm sm:text-base text-center">Playing Student Interview</p>
              <p className="text-xs text-slate-400 mt-1 text-center font-medium">IIT Delhi JEE Advanced Top Ranker Journey</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
