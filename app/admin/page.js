'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, Download, Search, Trash2, Phone, Mail, CheckCircle2, Lock, 
  Sparkles, RefreshCw, MessageSquare, Plus, Edit3, X, Filter, UserPlus, 
  StickyNote, ChevronDown, Check, User, Globe, Cloud, Database, Upload, LogOut,
  Key, Eye, EyeOff
} from 'lucide-react';

const PROGRAM_OPTIONS = [
  '2-Year JEE Advanced & Main Integrated Batch (Class 11)',
  '1-Year JEE Main & Advanced Pinnacle Batch (Class 12)',
  'XII Pass / Droppers Intensive Ranker Batch',
  'NEET UG Medical Excellence Batch (Class 11 & 12)',
  'Class 9th & 10th Foundation & Olympiad Batch',
  'General Inquiry / Diagnostic Session'
];

const STATUS_OPTIONS = [
  { value: 'New Lead', label: 'New Lead', color: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60' },
  { value: 'Contacted', label: 'Contacted', color: 'bg-blue-950/80 text-blue-400 border-blue-800/60' },
  { value: 'Counseling Booked', label: 'Counseling Booked', color: 'bg-purple-950/80 text-purple-400 border-purple-800/60' },
  { value: 'Admitted', label: 'Admitted', color: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60' },
  { value: 'Follow Up', label: 'Follow Up', color: 'bg-amber-950/80 text-amber-400 border-amber-800/60' },
];

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [passError, setPassError] = useState(false);
  
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [lastSyncTime, setLastSyncTime] = useState('');

  // Add Application Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    studentName: '',
    phoneNumber: '',
    email: '',
    selectedProgram: PROGRAM_OPTIONS[0],
    marksPercentage: '',
    source: 'Admin Manual Entry',
    status: 'New Lead',
    notes: '',
  });
  const [addError, setAddError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Edit Notes Modal state
  const [activeNotesApp, setActiveNotesApp] = useState(null);
  const [notesText, setNotesText] = useState('');
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  // JSON Import/Export Backup Modal state
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const [passErrorMsg, setPassErrorMsg] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Check session token on mount
  useEffect(() => {
    try {
      const token = sessionStorage.getItem('bm_admin_token');
      if (token && typeof token === 'string' && token.startsWith('BM_AUTH_')) {
        setIsAuthenticated(true);
      }
    } catch (err) {}
  }, []);

  // Secure Server-side Admin Passcode authentication check with strict type checking
  const handleLogin = async (e) => {
    e.preventDefault();
    setPassError(false);
    setPassErrorMsg('');

    // Enforce strict string type check
    if (typeof passcode !== 'string' || !passcode.trim()) {
      setPassError(true);
      setPassErrorMsg('Please enter a valid non-empty passcode.');
      return;
    }

    setIsAuthenticating(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode: String(passcode).trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success && typeof data.token === 'string') {
        try {
          sessionStorage.setItem('bm_admin_token', data.token);
        } catch (err) {}
        setIsAuthenticated(true);
        setPasscode('');
        setPassError(false);
        fetchApplications();
      } else {
        setPassError(true);
        setPassErrorMsg(data.message || 'Incorrect passcode. Please try again.');
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setPassError(true);
      setPassErrorMsg('Server error during authentication. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('bm_admin_token');
    } catch (err) {}
    setIsAuthenticated(false);
    setPasscode('');
    router.push('/');
  };

  // Fetch applications from Cloud Store API + merge with local storage
  const fetchApplications = async () => {
    setLoading(true);
    let serverApps = [];
    try {
      const res = await fetch('/api/applications', { cache: 'no-store' });
      const data = await res.json();
      if (data.success && Array.isArray(data.applications)) {
        serverApps = data.applications;
        setLastSyncTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));
      }
    } catch (err) {
      console.error('Error fetching cloud applications:', err);
    }

    // Combine with localStorage leads on device
    let localApps = [];
    try {
      localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
    } catch (err) {}

    // Deduplicate by ID / Phone & Name
    const combined = [...serverApps];
    localApps.forEach((local) => {
      if (!combined.some((c) => c.id === local.id || (c.phoneNumber === local.phoneNumber && c.studentName === local.studentName))) {
        combined.push(local);
      }
    });

    setApplications(combined);

    // Sync back to local device storage
    try {
      localStorage.setItem('bmclasses_registrations', JSON.stringify(combined));
    } catch (err) {}

    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
      // Auto refresh telemetry every 30 seconds for live mobile/desktop updates
      const interval = setInterval(() => {
        fetchApplications();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Delete an application cleanly from Cloud Store and local storage
  const handleDelete = async (id) => {
    const targetApp = applications.find((a) => a.id === id);
    const targetName = targetApp?.studentName || 'this application';
    
    if (!confirm(`Are you sure you want to delete the record for "${targetName}"?`)) return;

    try {
      await fetch(`/api/applications?id=${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error('API delete error:', err);
    }
    
    setApplications((prev) => prev.filter((a) => a.id !== id));
    
    try {
      const localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const filtered = localApps.filter(
        (a) => a.id !== id && !(targetApp && a.phoneNumber === targetApp.phoneNumber && a.studentName === targetApp.studentName)
      );
      localStorage.setItem('bmclasses_registrations', JSON.stringify(filtered));
    } catch (err) {}

    showToast(`Deleted record for ${targetName}`);
  };

  // Update Status in real-time
  const handleStatusChange = async (id, newStatus) => {
    // Optimistic update
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );

    try {
      await fetch('/api/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (err) {
      console.error('Error updating status:', err);
    }

    // Sync to localStorage
    try {
      const localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const updated = localApps.map((a) => (a.id === id ? { ...a, status: newStatus } : a));
      localStorage.setItem('bmclasses_registrations', JSON.stringify(updated));
    } catch (err) {}

    showToast(`Status updated to "${newStatus}"`);
  };

  // Open Notes Modal
  const openNotesModal = (app) => {
    setActiveNotesApp(app);
    setNotesText(app.notes || '');
  };

  // Save Notes
  const handleSaveNotes = async (e) => {
    e.preventDefault();
    if (!activeNotesApp) return;
    setIsSavingNotes(true);

    const id = activeNotesApp.id;
    const cleanNotes = notesText.trim();

    // Optimistic update
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, notes: cleanNotes } : app))
    );

    try {
      await fetch('/api/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, notes: cleanNotes }),
      });
    } catch (err) {
      console.error('Error saving notes:', err);
    }

    // Sync to localStorage
    try {
      const localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      const updated = localApps.map((a) => (a.id === id ? { ...a, notes: cleanNotes } : a));
      localStorage.setItem('bmclasses_registrations', JSON.stringify(updated));
    } catch (err) {}

    setIsSavingNotes(false);
    setActiveNotesApp(null);
    showToast('Notes saved successfully');
  };

  // Handle Add Application Form Submit
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setAddError('');

    const { studentName, phoneNumber, email, selectedProgram, marksPercentage, source, status, notes } = addForm;

    if (!studentName.trim()) {
      setAddError('Student name is required.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setAddError('Please enter a valid 10-digit Indian mobile number starting with 6-9.');
      return;
    }

    const cleanEmail = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setAddError('Please enter a valid email address.');
      return;
    }

    setIsSaving(true);

    const payload = {
      studentName: studentName.trim(),
      phoneNumber: cleanPhone,
      email: cleanEmail,
      selectedProgram,
      marksPercentage: marksPercentage ? parseFloat(marksPercentage) : null,
      source: source || 'Admin Manual Entry',
      status: status || 'New Lead',
      notes: notes.trim(),
    };

    let createdApp = null;
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success && data.application) {
        createdApp = data.application;
      }
    } catch (err) {
      console.error('Error adding application:', err);
    }

    const newApplication = createdApp || {
      id: `APP-${Date.now()}`,
      ...payload,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      timestamp: Date.now(),
    };

    setApplications((prev) => [newApplication, ...prev]);

    // Save to local storage as fallback
    try {
      const localApps = JSON.parse(localStorage.getItem('bmclasses_registrations') || '[]');
      localApps.unshift(newApplication);
      localStorage.setItem('bmclasses_registrations', JSON.stringify(localApps));
    } catch (err) {}

    setIsSaving(false);
    setIsAddModalOpen(false);
    setAddForm({
      studentName: '',
      phoneNumber: '',
      email: '',
      selectedProgram: PROGRAM_OPTIONS[0],
      marksPercentage: '',
      source: 'Admin Manual Entry',
      status: 'New Lead',
      notes: '',
    });

    showToast(`Successfully added student application for "${newApplication.studentName}"`);
  };

  // Import JSON Backup
  const handleImportJson = async () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (!Array.isArray(parsed)) {
        alert('Invalid format. Please paste a valid array of application objects.');
        return;
      }
      
      for (const item of parsed) {
        if (item.studentName && item.phoneNumber) {
          await fetch('/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
          });
        }
      }

      await fetchApplications();
      setIsBackupModalOpen(false);
      setImportJsonText('');
      showToast('Successfully imported application records!');
    } catch (err) {
      alert('Error parsing JSON text. Please check formatting.');
    }
  };

  // 1-Click Export to Excel / CSV (Robust Blob Download)
  const handleExportExcel = () => {
    if (applications.length === 0) {
      alert('No application submissions to export yet.');
      return;
    }

    const headers = [
      'Application ID',
      'Student Name',
      'Mobile Number',
      'Email Address',
      'Target Course / Program',
      'Marks %',
      'Lock Pass ID',
      'Lead Source',
      'Status',
      'Notes',
      'Submission Date'
    ];
    
    const rows = applications.map((app) => [
      `"${app.id || ''}"`,
      `"${(app.studentName || '').replace(/"/g, '""')}"`,
      `"${app.phoneNumber || ''}"`,
      `"${(app.email || '').replace(/"/g, '""')}"`,
      `"${(app.selectedProgram || '').replace(/"/g, '""')}"`,
      `"${app.marksPercentage ? app.marksPercentage + '%' : 'N/A'}"`,
      `"${app.lockPassId || 'N/A'}"`,
      `"${(app.source || 'Website Submission').replace(/"/g, '""')}"`,
      `"${(app.status || 'New Lead').replace(/"/g, '""')}"`,
      `"${(app.notes || '').replace(/"/g, '""')}"`,
      `"${app.submittedAt || ''}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `BM_Classes_Student_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Exported applications to Excel CSV file');
  };

  // Filter & Search Logic
  const filteredApps = applications.filter((app) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      (app.studentName || '').toLowerCase().includes(query) ||
      (app.phoneNumber || '').includes(query) ||
      (app.email || '').toLowerCase().includes(query) ||
      (app.selectedProgram || '').toLowerCase().includes(query) ||
      (app.source || '').toLowerCase().includes(query) ||
      (app.notes || '').toLowerCase().includes(query);

    const matchesStatus = statusFilter === 'all' || (app.status || 'New Lead') === statusFilter;

    return matchesQuery && matchesStatus;
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
            Enter passkey to view, manage, add, and sync student course applications across mobile & desktop.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Admin Passkey</span>
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none"
                >
                  <Key className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{showPasscode ? 'Hide Password' : 'Show Password'}</span>
                </button>
              </label>

              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 pointer-events-none">
                  <Key className="w-4 h-4 text-cyan-400" />
                </div>

                <input
                  type={showPasscode ? 'text' : 'password'}
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter admin passcode..."
                  className="w-full pl-10 pr-11 py-3 rounded-2xl bg-black border-2 border-zinc-800 text-white font-extrabold text-sm focus:outline-none focus:border-cyan-400 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-300 transition-colors cursor-pointer p-1"
                  title={showPasscode ? 'Hide Password' : 'Show Password'}
                >
                  {showPasscode ? (
                    <EyeOff className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-zinc-400 hover:text-cyan-400" />
                  )}
                </button>
              </div>

              {passError && (
                <p className="text-xs font-bold text-red-400 mt-1">{passErrorMsg || 'Incorrect passcode. Please try again.'}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-black py-3.5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {isAuthenticating ? (
                <>
                  <RefreshCw className="w-4 h-4 text-black animate-spin" />
                  <span>Verifying Passcode...</span>
                </>
              ) : (
                <span>Unlock Admin Panel</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-32 pb-20 px-4 sm:px-8">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-950 border-2 border-cyan-500 text-cyan-200 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-xs animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Bar */}
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>CROSS-DEVICE CLOUD SYNC ACTIVE</span>
              </span>
              {lastSyncTime && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-bold">
                  <span>Synced: {lastSyncTime}</span>
                </span>
              )}
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Student Application <span className="font-serif italic font-normal text-cyan-300">Admin Panel</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
              Live admission telemetry persistent across all mobile phones, tablets, and laptops.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs px-5 py-3 rounded-2xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-black stroke-[3]" />
              <span>+ Add Lead</span>
            </button>

            <button
              onClick={fetchApplications}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-extrabold text-xs px-4 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
              title="Force Sync Cloud Data"
            >
              <RefreshCw className={`w-4 h-4 text-cyan-400 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Syncing...' : 'Cloud Sync'}</span>
            </button>

            <button
              onClick={handleExportExcel}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-extrabold text-xs px-4 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setIsBackupModalOpen(true)}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-extrabold text-xs px-3.5 py-3 rounded-2xl transition-all cursor-pointer"
              title="Backup & Transfer Data"
            >
              <Database className="w-4 h-4 text-purple-400" />
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 font-extrabold text-xs px-4 py-3 rounded-2xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              title="Logout & Return to Home Screen"
            >
              <LogOut className="w-4 h-4 text-red-400" />
              <span>Logout</span>
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

        {/* Search & Status Filter Controls */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student name, phone, email, program or notes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-cyan-400 text-black shadow-md'
                  : 'bg-black text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All ({applications.length})
            </button>

            {STATUS_OPTIONS.map((st) => {
              const count = applications.filter((a) => (a.status || 'New Lead') === st.value).length;
              return (
                <button
                  key={st.value}
                  onClick={() => setStatusFilter(st.value)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    statusFilter === st.value
                      ? 'bg-zinc-800 text-white border border-zinc-700 font-black'
                      : 'bg-black text-zinc-400 hover:text-white border border-zinc-900'
                  }`}
                >
                  {st.label} ({count})
                </button>
              );
            })}
          </div>

          <span className="text-xs font-bold text-zinc-400 shrink-0">
            Showing <strong className="text-white">{filteredApps.length}</strong> of {applications.length} Submissions
          </span>
        </div>

        {/* Applications Data Table */}
        <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-12 text-center text-zinc-400 text-sm font-bold flex flex-col items-center justify-center gap-3">
              <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin" />
              <span>Syncing live student applications from cloud database...</span>
            </div>
          ) : filteredApps.length === 0 ? (
            <div className="p-12 text-center text-zinc-400 text-sm font-medium">
              No application records match your filter criteria.
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
                    <th className="p-4">Target Program</th>
                    <th className="p-4 text-center">Score / Lock Pass</th>
                    <th className="p-4 text-center">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {filteredApps.map((app, idx) => {
                    const waText = encodeURIComponent(
                      `Hi ${app.studentName}, thank you for registering for ${app.selectedProgram} at BM CLASSES Gurgaon! We would like to schedule your 1-on-1 Ex-HOD diagnostic session.`
                    );
                    const waUrl = `https://wa.me/91${app.phoneNumber}?text=${waText}`;

                    const currentStatusObj = STATUS_OPTIONS.find((s) => s.value === (app.status || 'New Lead')) || STATUS_OPTIONS[0];

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
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                              {app.source || 'Website Submission'}
                            </span>
                            {app.notes && (
                              <button
                                onClick={() => openNotesModal(app)}
                                className="text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer hover:bg-amber-900/60"
                                title="View Notes"
                              >
                                <StickyNote className="w-3 h-3 text-amber-400" />
                                <span>Note</span>
                              </button>
                            )}
                          </div>
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

                        {/* Target Program */}
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

                        {/* Status Select Badge */}
                        <td className="p-4 text-center">
                          <div className="relative inline-block">
                            <select
                              value={app.status || 'New Lead'}
                              onChange={(e) => handleStatusChange(app.id, e.target.value)}
                              className={`appearance-none font-extrabold text-[11px] px-3 py-1.5 rounded-xl border transition-all cursor-pointer focus:outline-none ${currentStatusObj.color}`}
                            >
                              {STATUS_OPTIONS.map((st) => (
                                <option key={st.value} value={st.value} className="bg-zinc-950 text-white font-bold">
                                  {st.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openNotesModal(app)}
                              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 p-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                              title="Edit Internal Notes"
                            >
                              <StickyNote className="w-3.5 h-3.5 text-amber-400" />
                            </button>

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

      {/* ADD APPLICATION MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-auto">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-[10px] font-black uppercase tracking-wider">
                <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
                <span>MANUAL ENTRY</span>
              </span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-black text-white">Add Student Application</h2>
            <p className="text-zinc-400 text-xs mt-1 mb-6">Record phone calls, walk-ins, or manual course registrations directly into the admin desk.</p>

            {addError && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-800 rounded-2xl text-red-300 text-xs font-bold">
                {addError}
              </div>
            )}

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Student Name *</label>
                <input
                  type="text"
                  required
                  value={addForm.studentName}
                  onChange={(e) => setAddForm({ ...addForm, studentName: e.target.value })}
                  placeholder="Full name of student..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={addForm.phoneNumber}
                    onChange={(e) => setAddForm({ ...addForm, phoneNumber: e.target.value.replace(/\D/g, '') })}
                    placeholder="10-digit number..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={addForm.email}
                    onChange={(e) => setAddForm({ ...addForm, email: e.target.value })}
                    placeholder="name@email.com..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Target Program / Course *</label>
                <select
                  value={addForm.selectedProgram}
                  onChange={(e) => setAddForm({ ...addForm, selectedProgram: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                >
                  {PROGRAM_OPTIONS.map((prog, idx) => (
                    <option key={idx} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Class Score / Marks %</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={addForm.marksPercentage}
                    onChange={(e) => setAddForm({ ...addForm, marksPercentage: e.target.value })}
                    placeholder="e.g. 92"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Initial Status</label>
                  <select
                    value={addForm.status}
                    onChange={(e) => setAddForm({ ...addForm, status: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st.value} value={st.value}>{st.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Lead Source</label>
                <input
                  type="text"
                  value={addForm.source}
                  onChange={(e) => setAddForm({ ...addForm, source: e.target.value })}
                  placeholder="e.g. Phone Call, Walk-In, Referral..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">Internal Notes</label>
                <textarea
                  rows={2}
                  value={addForm.notes}
                  onChange={(e) => setAddForm({ ...addForm, notes: e.target.value })}
                  placeholder="Counseling preferences, parent notes, follow-up date..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs shadow-lg cursor-pointer flex items-center gap-2"
                >
                  {isSaving ? 'Saving Application...' : 'Save Student Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT INTERNAL NOTES MODAL */}
      {activeNotesApp && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl max-w-md w-full p-6 relative shadow-2xl my-auto">
            <button
              onClick={() => setActiveNotesApp(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 border border-amber-800 text-amber-400 text-[10px] font-black uppercase tracking-wider">
                <StickyNote className="w-3.5 h-3.5 text-amber-400" />
                <span>INTERNAL COUNSELING NOTES</span>
              </span>
            </div>

            <h2 className="font-heading text-lg font-black text-white">{activeNotesApp.studentName}</h2>
            <p className="text-zinc-400 text-xs mt-0.5 mb-4">{activeNotesApp.selectedProgram} • {activeNotesApp.phoneNumber}</p>

            <form onSubmit={handleSaveNotes} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">Notes & Remarks</label>
                <textarea
                  rows={4}
                  value={notesText}
                  onChange={(e) => setNotesText(e.target.value)}
                  placeholder="Enter counseling feedback, preferred timing, diagnostic test marks, parent requirements..."
                  className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white font-medium text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveNotesApp(null)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingNotes}
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs cursor-pointer"
                >
                  {isSavingNotes ? 'Saving Notes...' : 'Save Notes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* JSON BACKUP & TRANSFER MODAL */}
      {isBackupModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-auto">
            <button
              onClick={() => setIsBackupModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-400 text-[10px] font-black uppercase tracking-wider">
                <Database className="w-3.5 h-3.5 text-purple-400" />
                <span>CROSS-DEVICE DATA SYNC & BACKUP</span>
              </span>
            </div>

            <h2 className="font-heading text-xl font-black text-white">Import / Backup JSON Leads</h2>
            <p className="text-zinc-400 text-xs mt-1 mb-4">Copy your JSON data to transfer leads to another phone or paste JSON to import leads.</p>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Paste JSON Array to Import</label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(JSON.stringify(applications, null, 2));
                      showToast('Copied all JSON applications to clipboard!');
                    }}
                    className="text-xs font-bold text-cyan-400 hover:underline cursor-pointer"
                  >
                    Copy Current JSON ({applications.length})
                  </button>
                </div>
                <textarea
                  rows={6}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder='Paste JSON array here e.g. [{"studentName":"Rahul", "phoneNumber":"9899818241", ...}]'
                  className="w-full px-4 py-3 rounded-2xl bg-black border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBackupModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleImportJson}
                  className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-black text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5 text-black" />
                  <span>Import Records</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
