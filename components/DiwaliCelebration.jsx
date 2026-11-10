'use client';

import React, { useEffect, useRef, useState } from 'react';

// Festive welcome: fireworks + rising diya sparks for ~5s on first open, once per visit.
// Switches itself off at midnight IST after Bhai Dooj (12 Nov 2026).
const ENDS_AT = Date.parse('2026-11-12T00:00:00+05:30');
const SEEN_KEY = 'bm_diwali_2026_seen';
const DURATION = 5200;
const COLORS = ['#ffd166', '#ff9f1c', '#ff6b35', '#f72585', '#ffe8a3', '#ffffff', '#7bdff2'];

export default function DiwaliCelebration() {
  const [show, setShow] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (Date.now() >= ENDS_AT || window.location.pathname.startsWith('/admin')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch (err) {}
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const rockets = [];
    const sparks = [];
    const small = w < 640;

    const launch = () => {
      rockets.push({ x: rand(w * 0.12, w * 0.88), y: h + 10, vy: -rand(h * 0.0105, h * 0.0135), targetY: rand(h * 0.12, h * 0.42), color: pick(COLORS) });
    };
    const explode = (r) => {
      const count = small ? 55 : 90;
      const speed = rand(2.6, 4.2);
      for (let i = 0; i < count; i++) {
        const a = (Math.PI * 2 * i) / count + rand(-0.05, 0.05);
        const s = speed * rand(0.55, 1);
        sparks.push({ x: r.x, y: r.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(55, 85), max: 85, color: Math.random() < 0.25 ? '#fff6d5' : r.color, size: rand(1.4, 2.4) });
      }
    };
    // Diya sparks drifting up from the bottom edge
    const ember = () => sparks.push({ x: rand(0, w), y: h + 5, vx: rand(-0.3, 0.3), vy: -rand(0.8, 1.8), life: rand(90, 140), max: 140, color: pick(['#ffd166', '#ff9f1c', '#ffe8a3']), size: rand(1.2, 2.6), ember: true });

    const start = performance.now();
    let last = 0;
    let raf;
    const frame = (now) => {
      const t = now - start;
      const running = t < DURATION;
      if (running && now - last > (small ? 520 : 380)) {
        launch();
        last = now;
      }
      if (running && Math.random() < 0.5) ember();

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.22)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;
        ctx.fillStyle = r.color;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fill();
        if (r.y <= r.targetY) {
          explode(r);
          rockets.splice(i, 1);
        }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        if (!p.ember) {
          p.vx *= 0.975;
          p.vy = p.vy * 0.975 + 0.045;
        }
        p.life -= 1;
        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, p.life / p.max);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (running || rockets.length || sparks.length) raf = requestAnimationFrame(frame);
      else setShow(false);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[75] pointer-events-none" aria-hidden="true">
      {/* Brief night sky so the fireworks glow on the white page */}
      <div className="absolute inset-0 diwali-night" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Greeting: glows in, then fades with the fireworks */}
      <div className="absolute inset-x-0 top-[38%] flex justify-center px-4 diwali-greet">
        <div className="rounded-full bg-slate-950/80 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 shadow-[0_0_60px_rgba(255,159,28,0.45)] border border-amber-300/30 text-center">
          <p className="font-heading font-extrabold text-2xl sm:text-4xl tracking-[-0.02em] flex items-center justify-center gap-2">
            <span>🪔</span>
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">Happy Diwali</span>
            <span>🪔</span>
          </p>
          <p className="text-xs sm:text-sm text-amber-100/80 mt-1">Wishing you light, joy and success — BM Classes</p>
        </div>
      </div>
      {/* Row of glowing diyas along the bottom */}
      <div className="absolute inset-x-0 bottom-0 flex justify-around px-2 diwali-diyas">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="diwali-diya" style={{ animationDelay: `${i * 90}ms` }}>
            <span className="diwali-flame" />
          </span>
        ))}
      </div>
    </div>
  );
}
