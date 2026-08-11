import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    // Strict Type Checking
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid payload structure.' },
        { status: 400 }
      );
    }

    const { passcode } = body;

    // Enforce string type check
    if (typeof passcode !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Passcode must be a valid string.' },
        { status: 400 }
      );
    }

    const trimmedPasscode = passcode.trim();
    if (!trimmedPasscode) {
      return NextResponse.json(
        { success: false, message: 'Passcode cannot be empty.' },
        { status: 400 }
      );
    }

    // Read passcode dynamically from environment variable process.env.ADMIN_PASSCODE
    const expectedPasscode = (process.env.ADMIN_PASSCODE || '').trim();

    if (!expectedPasscode) {
      console.error('Server Configuration Warning: ADMIN_PASSCODE environment variable is not set.');
      return NextResponse.json(
        { success: false, message: 'Server configuration error: ADMIN_PASSCODE environment variable is missing.' },
        { status: 500 }
      );
    }

    // Strict equality comparison
    if (trimmedPasscode === expectedPasscode) {
      // Generate a secure session token timestamp hash
      const authHeaderToken = `BM_AUTH_${Buffer.from(`BM_SESSION_${Date.now()}_${expectedPasscode}`).toString('base64')}`;

      return NextResponse.json({
        success: true,
        message: 'Authentication successful.',
        token: authHeaderToken,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Incorrect admin passcode.' },
        { status: 401 }
      );
    }
  } catch (err) {
    console.error('Admin authentication API error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
