import crypto from 'crypto';

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

function secret() {
  return (process.env.ADMIN_PASSCODE || '').trim();
}

function sign(payload) {
  return crypto.createHmac('sha256', secret()).update(payload).digest('hex');
}

function safeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export function checkPasscode(passcode) {
  return Boolean(secret()) && safeEqual(passcode, secret());
}

// Token = "<expiry>.<hmac>" signed with the passcode; changing ADMIN_PASSCODE revokes all tokens.
export function createToken() {
  const expiry = String(Date.now() + TOKEN_TTL_MS);
  return `${expiry}.${sign(expiry)}`;
}

export function isAuthorized(req) {
  if (!secret()) return false;
  const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  const [expiry, sig] = token.split('.');
  if (!expiry || !sig || Number(expiry) < Date.now()) return false;
  return safeEqual(sig, sign(expiry));
}
