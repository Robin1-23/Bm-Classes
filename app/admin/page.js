'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Download, Search, Trash2, Phone, Mail, CheckCircle2, Lock, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);
  
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Admin Security passcode check
  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'bmclasses2026' || passcode === 'bmclasses') {
      setIsAuthenticated(true);
      setPassError(false);
      fetchApplications();
    } else {
      setPassError(true);
    }
  };

  // Fetch applications from server API + merge with local storage
  const fetchApplications = async () => {
    setLoading(true);
    let serverApps = [];
    try {
      const res = await fetch('/api/applications');
      const data = await res.json();
      if (data.success && Array.isArray(data.applications)) {
        serverApps = data.applications;
      }
    } catch (err) {
      console.error('Error fetching server applications:', err);
    }

    // Combine with localStorage leads if offline
    let localApps = [];
    try {
      localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
    } catch (err) {}

    // Deduplicate by ID / Phone
    const combined = [...serverApps];
    localApps.forEach((local) => {
      if (!combined.some((c) => c.phoneNumber === local.phoneNumber && c.studentName === local.studentName)) {
        combined.push(local);
      }
    });

    setApplications(combined);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated]);

  // Delete an application
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this application record?')) return;
    try {
      await fetch(`/api/applications?id=${id}`, { method: 'DELETE' });
    } catch (err) {}
    
    setApplications((prev) => prev.filter((a) => a.id !== id));
    try {
      const localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const filtered = localApps.filter((a) => a.id !== id);
      localStorage.setItem('bmclasses_registrations', JSON.stringify(filtered));
    } catch (err) {}
  };

  // 1-Click Export to Excel (CSV format)
  const handleExportExcel = () => {
    if (applications.length === 0) {
      alert('No application submissions to export yet.');
      return;
    }

    // Create CSV Header
    const headers = ['Application ID', 'Student Name', 'Mobile Number', 'Email Address', 'Target Course / Program', 'Marks %', 'Lock Pass ID', 'Submission Date', 'Status'];
    
    // Format rows
    const rows = applications.map((app) => [
      `"${app.id || ''}"`,
      `"${(app.studentName || '').replace(/"/g, '""')}"`,
      `"${app.phoneNumber || ''}"`,
      `"${(app.email || '').replace(/"/g, '""')}"`,
      `"${(app.selectedProgram || '').replace(/"/g, '""')}"`,
      `"${app.marksPercentage ? app.marksPercentage + '%' : 'N/A'}"`,
      `"${app.lockPassId || 'N/A'}"`,
      `"${app.submittedAt || ''}"`,
      `"${app.status || 'New Lead'}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `BM_Classes_Student_Applications_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Search & Filtered Applications
  const filteredApps = applications.filter((app) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      (app.studentName || '').toLowerCase().includes(query) ||
      (app.phoneNumber || '').includes(query) ||
      (app.email || '').toLowerCase().includes(query) ||
      (app.selectedProgram || '').toLowerCase().includes(query);

    return matchesQuery;
  });

  // Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 pt-28 sm:pt-36 pb-16">
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative overflow-hidden my-auto">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 font-black flex items-center justify-center mb-6">
            <Lock className="w-6 h-6 text-cyan-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ADMISSION DESK PANEL</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            BM CLASSES <span className="text-cyan-400">Admin Portal</span>
          </h1>
          <p className="text-zinc-400 text-xs mt-1 font-medium mb-6">
            Enter passkey to view, manage and export student course applications.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-1.5">
                Admin Passkey
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode..."
                className="w-full px-4 py-3 rounded-2xl bg-black border-2 border-zinc-800 text-white font-extrabold text-sm focus:outline-none focus:border-cyan-400 transition-all"
              />
              {passError && (
                <p className="text-xs font-bold text-red-400 mt-1">Incorrect passcode. Please try again.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-black py-3.5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Unlock Admin Panel</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Bar */}
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>LIVE ADMISSION TELEMETRY</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono font-bold">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>Queries Routed To: +91 98998 18241</span>
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Student Application <span className="font-serif italic font-normal text-cyan-300">Admin Panel</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
              View, search, and 1-click export all student course applications to Microsoft Excel / CSV format.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={fetchApplications}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-extrabold text-xs px-4 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 text-cyan-400" />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportExcel}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs px-5 py-3 rounded-2xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Export to Excel (CSV)</span>
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-extrabold text-xs px-3.5 py-3 rounded-2xl transition-all cursor-pointer"
            >
              Lock
            </button>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        {(() => {
          let jeeCount = 0;
          let neetCount = 0;
          let foundationCount = 0;

          applications.forEach((a) => {
            const prog = (a.selectedProgram || '').toLowerCase();
            if (prog.includes('9th') || prog.includes('10th') || prog.includes('foundation') || prog.includes('pre-nurture')) {
              foundationCount++;
            } else if (prog.includes('neet') && !prog.includes('jee')) {
              neetCount++;
            } else if (prog.includes('jee')) {
              jeeCount++;
            } else if (prog.includes('neet') || prog.includes('medical') || prog.includes('biology')) {
              neetCount++;
            }
          });

          return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">TOTAL APPLICATIONS</span>
                <span className="font-mono text-3xl font-black text-cyan-400 mt-1 block">{applications.length}</span>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">JEE MAIN & ADVANCED</span>
                <span className="font-mono text-3xl font-black text-white mt-1 block">{jeeCount}</span>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">NEET UG MEDICAL</span>
                <span className="font-mono text-3xl font-black text-emerald-400 mt-1 block">{neetCount}</span>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">CLASS 9TH & 10TH</span>
                <span className="font-mono text-3xl font-black text-purple-400 mt-1 block">{foundationCount}</span>
              </div>
            </div>
          );
        })()}

        {/* Search & Filter Bar */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name, phone, email or course..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
            />
          </div>

          <span className="text-xs font-bold text-zinc-400 shrink-0">
            Showing <strong className="text-white">{filteredApps.length}</strong> of {applications.length} Student Submissions
          </span>
        </div>

        {/* Applications Data Table */}
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-12 text-center text-zinc-400 text-sm font-bold">Loading student applications...</div>
          ) : filteredApps.length === 0 ? (
            <div className="p-12 text-center text-zinc-400 text-sm font-medium">
              No application records match your search criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-black border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-black text-[10px]">
                  <tr>
                    <th className="p-4">App ID & Date</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Mobile Number</th>
                    <th className="p-4">Email Address</th>
                    <th className="p-4">Target Course / Program</th>
                    <th className="p-4 text-center">Marks / Lock Pass</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {filteredApps.map((app, idx) => {
                    const waText = encodeURIComponent(
                      `Hi ${app.studentName}, thank you for registering for ${app.selectedProgram} at BM CLASSES Gurgaon! We would like to schedule your 1-on-1 Ex-HOD diagnostic session.`
                    );
                    const waUrl = `https://wa.me/91${app.phoneNumber}?text=${waText}`;

                    return (
                      <tr key={idx} className="hover:bg-zinc-900/60 transition-colors">
                        
                        {/* App ID & Date */}
                        <td className="p-4 font-mono">
                          <span className="text-cyan-400 font-bold block">{app.id}</span>
                          <span className="text-[10px] text-zinc-500 font-medium block mt-0.5">{app.submittedAt}</span>
                        </td>

                        {/* Student Name */}
                        <td className="p-4">
                          <span className="font-heading font-black text-white text-sm block">{app.studentName}</span>
                          <span className="text-[10px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded inline-block mt-0.5">
                            {app.source || 'Website Submission'}
                          </span>
                        </td>

                        {/* Mobile Number */}
                        <td className="p-4 font-mono">
                          <a href={`tel:+91${app.phoneNumber}`} className="text-white font-extrabold hover:text-cyan-300 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>+91 {app.phoneNumber}</span>
                          </a>
                        </td>

                        {/* Email Address */}
                        <td className="p-4">
                          <a href={`mailto:${app.email}`} className="text-zinc-300 font-bold hover:text-cyan-300 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{app.email || 'N/A'}</span>
                          </a>
                        </td>

                        {/* Target Course */}
                        <td className="p-4">
                          <span className="font-extrabold text-cyan-300 block max-w-xs">{app.selectedProgram}</span>
                        </td>

                        {/* Marks / Lock Pass */}
                        <td className="p-4 text-center">
                          {app.marksPercentage ? (
                            <span className="inline-block bg-cyan-950 text-cyan-300 border border-cyan-800 px-2.5 py-1 rounded-lg text-[10px] font-black">
                              {app.marksPercentage}% Marks
                            </span>
                          ) : (
                            <span className="text-zinc-500 font-mono text-[10px]">Standard</span>
                          )}
                          {app.lockPassId && (
                            <span className="block font-mono text-[10px] text-emerald-400 mt-1 font-bold">
                              #{app.lockPassId}
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="hidden sm:inline">WhatsApp</span>
                            </a>

                            <button
                              onClick={() => handleDelete(app.id)}
                              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 p-2 rounded-xl transition-all cursor-pointer"
                              title="Delete Record"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
