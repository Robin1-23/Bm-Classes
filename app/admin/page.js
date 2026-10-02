'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { COURSES, courseName } from '@/data/siteContent';
import { 
  ShieldCheck, Download, Search, Trash2, Phone, Mail, CheckCircle2, Lock, 
  Sparkles, RefreshCw, MessageSquare, Plus, Edit3, X, Filter, UserPlus, 
  StickyNote, ChevronDown, Check, User, Globe, Cloud, Database, Upload, LogOut,
  Key, Eye, EyeOff
} from 'lucide-react';

const PROGRAM_OPTIONS = [...COURSES.map(courseName), 'General enquiry / free demo'];

// Attach the admin session token to API calls
const authFetch = (url, options = {}) => {
  let token = '';
  try {
    token = sessionStorage.getItem('bm_admin_token') || '';
  } catch (err) {}
  return fetch(url, { ...options, headers: { ...options.headers, Authorization: `Bearer ${token}` } });
};

// Neutralise spreadsheet formula injection from public form input
const csvCell = (value) => `"${String(value ?? '').replace(/^[=+\-@\t\r]/, "'$&").replace(/"/g, '""')}"`;

const STATUS_OPTIONS = [
  { value: 'New Lead', label: 'New Lead', color: 'bg-[#eef4ff] text-sky-800 border-sky-200' },
  { value: 'Contacted', label: 'Contacted', color: 'bg-[#f3f1ff] text-indigo-700 border-indigo-200' },
  { value: 'Counseling Booked', label: 'Counseling Booked', color: 'bg-[#fdf4e6] text-amber-800 border-amber-200' },
  { value: 'Admitted', label: 'Admitted', color: 'bg-[#eef7ea] text-emerald-700 border-emerald-200' },
  { value: 'Follow Up', label: 'Follow Up', color: 'bg-[#fbf0ee] text-rose-700 border-rose-200' },
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
      if (token) {
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
      const res = await authFetch('/api/applications', { cache: 'no-store' });
      if (res.status === 401) {
        try {
          sessionStorage.removeItem('bm_admin_token');
        } catch (err) {}
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
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
      await authFetch(`/api/applications?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
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
      await authFetch('/api/applications', {
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
      await authFetch('/api/applications', {
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
    if (cleanEmail && !emailRegex.test(cleanEmail)) {
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
      const res = await authFetch('/api/applications', {
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
          await authFetch('/api/applications', {
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
      app.id,
      app.studentName,
      app.phoneNumber,
      app.email,
      app.selectedProgram,
      app.marksPercentage ? app.marksPercentage + '%' : 'N/A',
      app.lockPassId || 'N/A',
      app.source || 'Website Submission',
      app.status || 'New Lead',
      app.notes,
      app.submittedAt,
    ].map(csvCell));

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

  const field = 'w-full h-11 px-4 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition';
  const fieldLabel = 'block text-xs font-semibold text-slate-600 mb-1.5';
  const ghostBtn = 'h-11 px-4 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-900 text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer';
  const pillBtn = 'h-11 px-5 rounded-full bg-slate-950 hover:bg-indigo-600 disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer';
  const closeBtn = 'absolute top-4 right-4 w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center cursor-pointer';
  const overlay = 'fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4 overflow-y-auto';
  const sheet = 'w-full bg-white rounded-t-[28px] sm:rounded-[28px] p-2 shadow-2xl max-h-[94vh] overflow-y-auto';
  const mist = { backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 39px, #eef1f8 39px 40px)' };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-4 pt-28 sm:pt-36 pb-16" style={mist}>
        <div className="w-full max-w-md rounded-[28px] bg-white p-2 border border-slate-200/70 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)]">
          <div className="rounded-[22px] bg-[#f3f1ff] p-6 sm:p-7">
            <span className="w-12 h-12 rounded-2xl bg-white text-indigo-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 mt-6">Admission desk</p>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.05] text-slate-950 mt-2">
              Welcome back.
              <span className="block text-slate-400">Unlock your leads.</span>
            </h1>
          </div>

          <form onSubmit={handleLogin} className="px-4 sm:px-5 pt-6 pb-4 space-y-4">
            <div>
              <label htmlFor="admin-passkey" className={fieldLabel}>Admin passkey</label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="admin-passkey"
                  type={showPasscode ? 'text' : 'password'}
                  required
                  autoFocus
                  autoComplete="current-password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passkey"
                  className={`${field} h-12 pl-11 pr-12 ${passError ? 'border-red-300' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  aria-label={showPasscode ? 'Hide passkey' : 'Show passkey'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full text-slate-500 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                >
                  {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passError && (
                <p className="text-sm font-semibold text-red-600 mt-2" role="alert">{passErrorMsg || 'Incorrect passkey. Please try again.'}</p>
              )}
            </div>

            <button type="submit" disabled={isAuthenticating} className={`${pillBtn} w-full h-12`}>
              {isAuthenticating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Checking…
                </>
              ) : (
                <>
                  Unlock admin panel <ShieldCheck className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 text-center">Staff only. Sessions expire after 12 hours.</p>
          </form>
        </div>
      </div>
    );
  }

  const countBy = (pred) => applications.filter(pred).length;
  const STATS = [
    { label: 'All leads', value: applications.length, tint: 'bg-[#f3f1ff]', ink: 'text-indigo-700' },
    { label: 'New, to call', value: countBy((a) => (a.status || 'New Lead') === 'New Lead'), tint: 'bg-[#eef4ff]', ink: 'text-sky-700' },
    { label: 'Follow up', value: countBy((a) => a.status === 'Follow Up' || a.status === 'Counseling Booked'), tint: 'bg-[#fdf4e6]', ink: 'text-amber-700' },
    { label: 'Admitted', value: countBy((a) => a.status === 'Admitted'), tint: 'bg-[#eef7ea]', ink: 'text-emerald-700' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7ff] text-slate-950 pt-24 sm:pt-32 pb-20 px-4 sm:px-8" style={mist}>
      {/* Toast */}
      {toastMessage && (
        <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] bg-slate-950 text-white pl-3 pr-5 h-12 rounded-full shadow-2xl flex items-center gap-2.5 text-sm font-semibold">
          <span className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </span>
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-5">
        {/* Header */}
        <div className="rounded-[28px] bg-white p-2 border border-slate-200/70">
          <div className="rounded-[22px] bg-[#f3f1ff] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                Admission desk{lastSyncTime && <span className="text-slate-500 normal-case tracking-normal font-medium"> · updated {lastSyncTime}</span>}
              </p>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.02] mt-2">
                Student leads.
                <span className="block text-slate-400">Call, follow up, admit.</span>
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => setIsAddModalOpen(true)} className={pillBtn}>
                <Plus className="w-4 h-4" /> Add lead
              </button>
              <button onClick={fetchApplications} className={ghostBtn} title="Reload leads">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> {loading ? 'Loading…' : 'Refresh'}
              </button>
              <button onClick={handleExportExcel} className={ghostBtn}>
                <Download className="w-4 h-4" /> Export CSV
              </button>
              <button onClick={() => setIsBackupModalOpen(true)} className={`${ghostBtn} px-3.5`} title="Backup & import" aria-label="Backup and import">
                <Database className="w-4 h-4" />
              </button>
              <button onClick={handleLogout} className={`${ghostBtn} px-3.5 text-red-600 hover:border-red-300`} title="Log out" aria-label="Log out">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] bg-white p-1.5 border border-slate-200/70">
              <div className={`rounded-[18px] ${s.tint} px-5 py-4`}>
                <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${s.ink}`}>{s.label}</span>
                <span className="block font-heading font-extrabold text-4xl tracking-[-0.03em] mt-1">{s.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leads by course */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {PROGRAM_OPTIONS.map((p) => {
            const n = countBy((a) => a.selectedProgram === p);
            return (
              <button
                key={p}
                onClick={() => setSearchQuery(searchQuery === p ? '' : p)}
                className={`shrink-0 h-9 px-4 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  searchQuery === p ? 'bg-slate-950 border-slate-950 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                }`}
              >
                {p} <span className={searchQuery === p ? 'text-white/60' : 'text-slate-400'}>{n}</span>
              </button>
            );
          })}
        </div>

        {/* Table card */}
        <div className="rounded-[28px] bg-white border border-slate-200/70 overflow-hidden">
          {/* Search + status filter */}
          <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-3 border-b border-slate-100">
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, course or notes"
                aria-label="Search leads"
                className={`${field} pl-11`}
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar lg:ml-auto">
              {[{ value: 'all', label: 'All' }, ...STATUS_OPTIONS].map((st) => {
                const count = st.value === 'all' ? applications.length : countBy((a) => (a.status || 'New Lead') === st.value);
                const active = statusFilter === st.value;
                return (
                  <button
                    key={st.value}
                    onClick={() => setStatusFilter(st.value)}
                    className={`shrink-0 h-9 px-3.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      active ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st.label} <span className={active ? 'text-white/60' : 'text-slate-400'}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {loading ? (
            <div className="p-14 text-center text-slate-500 text-sm flex flex-col items-center gap-3">
              <RefreshCw className="w-6 h-6 text-indigo-500 animate-spin" />
              Loading leads…
            </div>
          ) : filteredApps.length === 0 ? (
            <div className="p-14 text-center">
              <span className="w-14 h-14 rounded-2xl bg-[#f3f1ff] text-indigo-600 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </span>
              <p className="font-heading font-bold text-xl tracking-[-0.02em] mt-4">No leads here yet</p>
              <p className="text-sm text-slate-500 mt-1">Try another filter, or add a walk-in with “Add lead”.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-[0.08em]">
                  <tr>
                    <th className="px-5 py-3">Student</th>
                    <th className="px-5 py-3">Contact</th>
                    <th className="px-5 py-3">Course</th>
                    <th className="px-5 py-3">Received</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredApps.map((app, idx) => {
                    const waText = encodeURIComponent(
                      `Hi ${app.studentName}, thank you for your interest in ${app.selectedProgram} at BM Classes, Gurugram. When is a good time for a quick call?`
                    );
                    const waUrl = `https://wa.me/91${app.phoneNumber}?text=${waText}`;
                    const currentStatusObj = STATUS_OPTIONS.find((s) => s.value === (app.status || 'New Lead')) || STATUS_OPTIONS[0];

                    return (
                      <tr key={app.id || idx} className="hover:bg-[#fafbff] transition-colors align-top">
                        <td className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#f3f1ff] text-indigo-700 font-heading font-bold flex items-center justify-center shrink-0">
                              {(app.studentName || '?').trim().charAt(0).toUpperCase()}
                            </span>
                            <div className="min-w-0">
                              <span className="font-semibold text-slate-950 block whitespace-nowrap">{app.studentName}</span>
                              <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                                  {app.source || 'Website'}
                                </span>
                                {app.marksPercentage && (
                                  <span className="text-[11px] font-semibold text-indigo-700 bg-[#eef4ff] px-2 py-0.5 rounded-full">{app.marksPercentage}%</span>
                                )}
                                {app.notes && (
                                  <button
                                    onClick={() => openNotesModal(app)}
                                    className="text-[11px] font-semibold text-amber-700 bg-[#fdf4e6] px-2 py-0.5 rounded-full inline-flex items-center gap-1 cursor-pointer hover:bg-amber-100"
                                  >
                                    <StickyNote className="w-3 h-3" /> Note
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap">
                          <a href={`tel:+91${app.phoneNumber}`} className="font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-slate-400" /> +91 {app.phoneNumber}
                          </a>
                          {app.email && (
                            <a href={`mailto:${app.email}`} className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1.5 mt-1">
                              <Mail className="w-3.5 h-3.5 text-slate-400" /> {app.email}
                            </a>
                          )}
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-slate-700 block min-w-[150px] max-w-[220px]">{app.selectedProgram}</span>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-500">
                          {app.submittedAt}
                          <span className="block font-mono text-slate-400 mt-0.5">{app.id}</span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="relative inline-block">
                            <select
                              value={app.status || 'New Lead'}
                              onChange={(e) => handleStatusChange(app.id, e.target.value)}
                              aria-label={`Status for ${app.studentName}`}
                              className={`appearance-none h-8 pl-3 pr-8 rounded-full border text-xs font-semibold cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-900/5 ${currentStatusObj.color}`}
                            >
                              {STATUS_OPTIONS.map((st) => (
                                <option key={st.value} value={st.value}>{st.label}</option>
                              ))}
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-9 px-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                            </a>
                            <button
                              onClick={() => openNotesModal(app)}
                              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 flex items-center justify-center cursor-pointer"
                              title="Notes"
                              aria-label={`Notes for ${app.studentName}`}
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(app.id)}
                              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-red-300 hover:bg-red-50 text-red-600 flex items-center justify-center cursor-pointer"
                              title="Delete"
                              aria-label={`Delete ${app.studentName}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="px-5 py-3 text-xs text-slate-500 border-t border-slate-100">
                Showing {filteredApps.length} of {applications.length} leads
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ADD LEAD MODAL */}
      {isAddModalOpen && (
        <div className={overlay} onClick={() => setIsAddModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="add-lead-title">
          <div className={`${sheet} sm:max-w-xl`} onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-[22px] bg-[#eef7ea] p-6 sm:p-7">
              <button onClick={() => setIsAddModalOpen(false)} aria-label="Close" className={closeBtn}>
                <X className="w-4 h-4" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Manual entry</p>
              <h2 id="add-lead-title" className="font-heading font-extrabold text-3xl tracking-[-0.03em] leading-[1.05] mt-2 pr-10">
                Add a lead.
                <span className="block text-slate-400">Calls, walk-ins, referrals.</span>
              </h2>
            </div>

            <form onSubmit={handleAddSubmit} className="px-4 sm:px-6 pt-6 pb-4 space-y-4">
              {addError && <p className="text-sm font-semibold text-red-600" role="alert">{addError}</p>}

              <div>
                <label className={fieldLabel}>Student name *</label>
                <input type="text" required value={addForm.studentName} onChange={(e) => setAddForm({ ...addForm, studentName: e.target.value })} placeholder="Full name" className={field} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={fieldLabel}>Mobile number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    value={addForm.phoneNumber}
                    onChange={(e) => setAddForm({ ...addForm, phoneNumber: e.target.value.replace(/\D/g, '') })}
                    placeholder="10-digit number"
                    className={field}
                  />
                </div>
                <div>
                  <label className={fieldLabel}>Email</label>
                  <input type="email" value={addForm.email} onChange={(e) => setAddForm({ ...addForm, email: e.target.value })} placeholder="Optional" className={field} />
                </div>
              </div>

              <div>
                <label className={fieldLabel}>Course *</label>
                <select value={addForm.selectedProgram} onChange={(e) => setAddForm({ ...addForm, selectedProgram: e.target.value })} className={field}>
                  {PROGRAM_OPTIONS.map((prog) => (
                    <option key={prog} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className={fieldLabel}>Last score %</label>
                  <input type="number" min={0} max={100} value={addForm.marksPercentage} onChange={(e) => setAddForm({ ...addForm, marksPercentage: e.target.value })} placeholder="e.g. 92" className={field} />
                </div>
                <div>
                  <label className={fieldLabel}>Status</label>
                  <select value={addForm.status} onChange={(e) => setAddForm({ ...addForm, status: e.target.value })} className={field}>
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st.value} value={st.value}>{st.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={fieldLabel}>Source</label>
                  <input type="text" value={addForm.source} onChange={(e) => setAddForm({ ...addForm, source: e.target.value })} placeholder="Walk-in, call…" className={field} />
                </div>
              </div>

              <div>
                <label className={fieldLabel}>Notes</label>
                <textarea
                  rows={2}
                  value={addForm.notes}
                  onChange={(e) => setAddForm({ ...addForm, notes: e.target.value })}
                  placeholder="Parent notes, preferred timing, follow-up date…"
                  className={`${field} h-auto py-3`}
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className={ghostBtn}>Cancel</button>
                <button type="submit" disabled={isSaving} className={pillBtn}>
                  {isSaving ? 'Saving…' : 'Save lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NOTES MODAL */}
      {activeNotesApp && (
        <div className={overlay} onClick={() => setActiveNotesApp(null)} role="dialog" aria-modal="true" aria-labelledby="notes-title">
          <div className={`${sheet} sm:max-w-md`} onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-[22px] bg-[#fdf4e6] p-6">
              <button onClick={() => setActiveNotesApp(null)} aria-label="Close" className={closeBtn}>
                <X className="w-4 h-4" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Counselling notes</p>
              <h2 id="notes-title" className="font-heading font-extrabold text-2xl tracking-[-0.03em] mt-2 pr-10">{activeNotesApp.studentName}</h2>
              <p className="text-sm text-slate-600 mt-1">{activeNotesApp.selectedProgram} · {activeNotesApp.phoneNumber}</p>
            </div>

            <form onSubmit={handleSaveNotes} className="px-4 sm:px-5 pt-5 pb-4 space-y-4">
              <textarea
                rows={5}
                autoFocus
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                aria-label="Notes"
                placeholder="Call feedback, preferred timing, parent requirements…"
                className={`${field} h-auto py-3`}
              />
              <div className="flex items-center justify-end gap-2">
                <button type="button" onClick={() => setActiveNotesApp(null)} className={ghostBtn}>Cancel</button>
                <button type="submit" disabled={isSavingNotes} className={pillBtn}>
                  {isSavingNotes ? 'Saving…' : 'Save notes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BACKUP / IMPORT MODAL */}
      {isBackupModalOpen && (
        <div className={overlay} onClick={() => setIsBackupModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="backup-title">
          <div className={`${sheet} sm:max-w-lg`} onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-[22px] bg-[#eef4ff] p-6">
              <button onClick={() => setIsBackupModalOpen(false)} aria-label="Close" className={closeBtn}>
                <X className="w-4 h-4" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Backup & import</p>
              <h2 id="backup-title" className="font-heading font-extrabold text-2xl tracking-[-0.03em] leading-tight mt-2 pr-10">
                Move leads as JSON.
                <span className="block text-slate-400">Copy out, or paste in.</span>
              </h2>
            </div>

            <div className="px-4 sm:px-5 pt-5 pb-4 space-y-4">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(applications, null, 2));
                  showToast('Copied all leads as JSON');
                }}
                className={`${ghostBtn} w-full justify-center`}
              >
                <Download className="w-4 h-4" /> Copy current leads ({applications.length})
              </button>
              <textarea
                rows={6}
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                aria-label="JSON to import"
                placeholder='Paste a JSON array, e.g. [{"studentName":"Rahul","phoneNumber":"98…"}]'
                className={`${field} h-auto py-3 font-mono text-xs`}
              />
              <div className="flex items-center justify-end gap-2">
                <button type="button" onClick={() => setIsBackupModalOpen(false)} className={ghostBtn}>Close</button>
                <button type="button" onClick={handleImportJson} className={pillBtn}>
                  <Upload className="w-4 h-4" /> Import
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
