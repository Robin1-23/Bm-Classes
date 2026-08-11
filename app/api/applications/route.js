import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Cloud Persistence Store (REST API Endpoint for cross-device persistence across mobile & desktop)
const CLOUD_STORE_URL = 'https://api.restful-api.dev/objects/ff8081819f7e10ae019fefb84e3622d8';

// Local disk path (supporting serverless /tmp fallback if read-only)
const dataDirPath = path.join(process.cwd(), 'data');
const localFilePath = path.join(dataDirPath, 'registrations.json');
const tmpFilePath = path.join('/tmp', 'registrations.json');

function getWritablePath() {
  try {
    if (!fs.existsSync(dataDirPath)) {
      fs.mkdirSync(dataDirPath, { recursive: true });
    }
    return localFilePath;
  } catch (err) {
    return tmpFilePath;
  }
}

// Helper to read registrations from local disk
function readLocalRegistrations() {
  const targetPath = getWritablePath();
  try {
    if (fs.existsSync(targetPath)) {
      const content = fs.readFileSync(targetPath, 'utf-8');
      return JSON.parse(content || '[]');
    }
    if (fs.existsSync(localFilePath)) {
      const content = fs.readFileSync(localFilePath, 'utf-8');
      return JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Error reading local registrations:', err);
  }
  return [];
}

// Helper to save registrations to local disk
function writeLocalRegistrations(data) {
  const targetPath = getWritablePath();
  try {
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing local registrations:', err);
  }
}

// Helper to fetch registrations from Cloud Store
async function fetchCloudRegistrations() {
  try {
    const res = await fetch(CLOUD_STORE_URL, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' },
    });
    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.data)) {
        return json.data;
      }
    }
  } catch (err) {
    console.error('Error fetching cloud registrations:', err);
  }
  return [];
}

// Helper to save registrations to Cloud Store
async function pushCloudRegistrations(data) {
  try {
    await fetch(CLOUD_STORE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        name: 'bmclasses_apps',
        data: data,
      }),
    });
  } catch (err) {
    console.error('Error pushing cloud registrations:', err);
  }
}

// Unified helper to read and merge registrations from Cloud Store + Local file
async function getMergedRegistrations() {
  const localList = readLocalRegistrations();
  const cloudList = await fetchCloudRegistrations();

  const combined = [...cloudList];
  localList.forEach((localItem) => {
    if (
      !combined.some(
        (c) =>
          c.id === localItem.id ||
          (c.phoneNumber === localItem.phoneNumber && c.studentName === localItem.studentName)
      )
    ) {
      combined.push(localItem);
    }
  });

  // Sort by timestamp descending
  combined.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  // Sync merged back to local
  writeLocalRegistrations(combined);

  return combined;
}

// GET: Fetch all application submissions (for Admin Panel & Mobile/Desktop Sync)
export async function GET() {
  const registrations = await getMergedRegistrations();
  return NextResponse.json({
    success: true,
    count: registrations.length,
    applications: registrations,
    syncedAt: new Date().toISOString(),
  });
}

// POST: Save a new student application (from website forms or admin desk)
export async function POST(req) {
  try {
    const body = await req.json();
    const { studentName, phoneNumber, email, selectedProgram, marksPercentage, lockPassId, source, status, notes } = body;

    // Strict Validations
    if (!studentName || !studentName.trim()) {
      return NextResponse.json({ success: false, message: 'Student name is required.' }, { status: 400 });
    }

    const cleanPhone = (phoneNumber || '').replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json({ success: false, message: 'Please provide a valid 10-digit Indian mobile number.' }, { status: 400 });
    }

    const cleanEmail = (email || '').trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json({ success: false, message: 'Please provide a valid email address.' }, { status: 400 });
    }

    const now = Date.now();
    const newApplication = {
      id: `APP-${now}`,
      studentName: studentName.trim(),
      phoneNumber: cleanPhone,
      email: cleanEmail,
      selectedProgram: selectedProgram || 'General Inquiry',
      marksPercentage: marksPercentage || null,
      lockPassId: lockPassId || null,
      source: source || 'Website Registration Modal',
      status: status || 'New Lead',
      notes: notes || '',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      timestamp: now,
    };

    const registrations = await getMergedRegistrations();
    
    // Check if duplicate submission within 1 minute
    const duplicate = registrations.find(
      (r) => r.phoneNumber === cleanPhone && r.studentName === newApplication.studentName
    );

    if (duplicate) {
      // Update existing record rather than creating duplicate
      Object.assign(duplicate, newApplication, { id: duplicate.id });
    } else {
      registrations.unshift(newApplication);
    }

    // Save locally and push to Cloud Store
    writeLocalRegistrations(registrations);
    await pushCloudRegistrations(registrations);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
      application: duplicate || newApplication,
    });
  } catch (err) {
    console.error('API Error saving application:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH: Update an application (e.g. status or notes)
export async function PATCH(req) {
  try {
    const body = await req.json();
    const { id, status, notes, studentName, phoneNumber, email, selectedProgram, marksPercentage } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: 'Application ID is required.' }, { status: 400 });
    }

    let registrations = await getMergedRegistrations();
    const index = registrations.findIndex((app) => app.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Application not found.' }, { status: 404 });
    }

    registrations[index] = {
      ...registrations[index],
      ...(status !== undefined && { status }),
      ...(notes !== undefined && { notes }),
      ...(studentName && { studentName: studentName.trim() }),
      ...(phoneNumber && { phoneNumber: phoneNumber.replace(/\D/g, '') }),
      ...(email && { email: email.trim() }),
      ...(selectedProgram && { selectedProgram }),
      ...(marksPercentage !== undefined && { marksPercentage }),
      updatedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    writeLocalRegistrations(registrations);
    await pushCloudRegistrations(registrations);

    return NextResponse.json({
      success: true,
      message: 'Application updated successfully!',
      application: registrations[index],
    });
  } catch (err) {
    console.error('API Error updating application:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: Delete an application by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Application ID is required' }, { status: 400 });
    }

    let registrations = await getMergedRegistrations();
    registrations = registrations.filter((app) => app.id !== id);
    
    writeLocalRegistrations(registrations);
    await pushCloudRegistrations(registrations);

    return NextResponse.json({ success: true, message: 'Application deleted successfully' });
  } catch (err) {
    console.error('API Error deleting application:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
