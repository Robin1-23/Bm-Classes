import { ImageResponse } from 'next/og';

export const alt = 'BM Classes: IIT JEE & NEET coaching in Sector 45, Gurugram';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

// Branded share card used when the site is shared on WhatsApp, Google, LinkedIn, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: '#ffffff', color: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800 }}>
            BM
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 2 }}>BM CLASSES · GURUGRAM</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Small batches.</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: '#8a8a8a' }}>Exceptional ranks.</div>
          <div style={{ fontSize: 32, marginTop: 28, color: '#d4d4d4' }}>
            IIT JEE & NEET coaching by former HODs of FIITJEE & VMC
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['AIR 18 · 22 · 52', '10–15 per batch', 'Rated 4.9 on Google', 'Sector 45, Gurugram'].map((t) => (
            <div key={t} style={{ display: 'flex', fontSize: 24, padding: '12px 22px', borderRadius: 999, background: '#ffffff', color: '#0a0a0a', fontWeight: 600 }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
