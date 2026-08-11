import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'registrations.json');

// Helper to read registrations from JSON file
function readRegistrations() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      // Ensure directory exists
      const dir = path.dirname(dataFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileData || '[]');
  } catch (err) {
    console.error('Error reading registrations file:', err);
    return [];
  }
}

// Helper to write registrations to JSON file
function writeRegistrations(data) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing registrations file:', err);
  }
}

// GET: Fetch all application submissions (for Admin Panel)
export async function GET() {
  const registrations = readRegistrations();
  return NextResponse.json({ success: true, count: registrations.length, applications: registrations });
}

// POST: Save a new student application
export async function POST(req) {
  try {
    const body = await req.json();
    const { studentName, phoneNumber, email, selectedProgram, marksPercentage, lockPassId, source } = body;

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

    const newApplication = {
      id: `APP-${Date.now()}`,
      studentName: studentName.trim(),
      phoneNumber: cleanPhone,
      email: cleanEmail,
      selectedProgram: selectedProgram || 'General Inquiry',
      marksPercentage: marksPercentage || null,
      lockPassId: lockPassId || null,
      source: source || 'Website Registration Modal',
      status: 'New Lead',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      timestamp: Date.now(),
    };

    const registrations = readRegistrations();
    registrations.unshift(newApplication);
    writeRegistrations(registrations);

    return NextResponse.json({ success: true, message: 'Application submitted successfully!', application: newApplication });
  } catch (err) {
    console.error('API Error saving application:', err);
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

    let registrations = readRegistrations();
    registrations = registrations.filter((app) => app.id !== id);
    writeRegistrations(registrations);

    return NextResponse.json({ success: true, message: 'Application deleted successfully' });
  } catch (err) {
    console.error('API Error deleting application:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
