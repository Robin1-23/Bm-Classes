'use client';

import React, { useEffect, useRef, useState } from 'react';

// Diwali welcome: a short fireworks display over a dusk sky, a few clay diyas and a quiet greeting.
// Plays once per visit and switches itself off at midnight IST on 12 Nov 2026 (after Bhai Dooj).
const ENDS_AT = Date.parse('2026-11-12T00:00:00+05:30');
const SEEN_KEY = 'bm_diwali_2026_seen';
const SHOW_MS = 6000;

// Real firework chemistry colours: sodium gold, strontium red, copper blue, barium green, magnesium white
const PALETTE = [
  ['#ffcf70', '#ffb347'],
  ['#ff5e3a', '#ff8a5c'],
  ['#ffe9b0', '#fff6dc'],
  ['#ff4f8b', '#ffc2d6'],
  ['#6fd3ff', '#c9f0ff'],
  ['#9dff8a', '#e3ffd9'],
];

// Diyas placed by hand, like lamps on a doorstep: [left %, size px, flicker seed]
const DIYAS = [
  [4, 44, 0.9], [11, 34, 1.3], [17, 40, 0.7],
  [83, 38, 1.1], [89, 46, 0.8], [95.5, 32, 1.4],
];

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
    const scale = Math.min(1, w / 1200) * 0.6 + 0.4; // smaller bursts on phones
    const rockets = [];
    const sparks = [];

    // Irregular launch times, like a real show: a few singles, then a small volley
    const schedule = [];
    let t = 250;
    while (t < SHOW_MS - 2600) {
      schedule.push(t);
      if (Math.random() < 0.3) schedule.push(t + rand(90, 220));
      t += rand(380, 820);
    }

    const launch = () => {
      const x = rand(w * 0.1, w * 0.9);
      const peak = rand(h * 0.08, h * 0.32);
      rockets.push({
        x,
        y: h + 4,
        vx: rand(-0.4, 0.4),
        vy: -Math.sqrt(2 * 0.12 * (h - peak)), // reaches its peak (~1s), then bursts
        colors: pick(PALETTE),
        type: pick(['peony', 'peony', 'willow', 'ring', 'crackle']),
        depth: rand(0.65, 1.15),
      });
    };

    const burst = (r) => {
      const [c1, c2] = r.colors;
      const size = r.depth * scale;
      const n = Math.round((r.type === 'ring' ? 56 : r.type === 'willow' ? 85 : 115) * size);
      const tilt = rand(0, Math.PI);
      for (let i = 0; i < n; i++) {
        const a = r.type === 'ring' ? (Math.PI * 2 * i) / n : rand(0, Math.PI * 2);
        let s = (r.type === 'ring' ? 3.2 : rand(0.6, 1) ** 0.5 * rand(2.4, 3.6)) * size;
        let vx = Math.cos(a) * s;
        let vy = Math.sin(a) * s;
        if (r.type === 'ring') vy *= Math.abs(Math.cos(tilt)) * 0.7 + 0.3;
        const willow = r.type === 'willow';
        sparks.push({
          x: r.x,
          y: r.y,
          vx,
          vy,
          drag: willow ? 0.955 : 0.968,
          gravity: willow ? 0.028 : 0.05,
          life: willow ? rand(95, 125) : rand(60, 90),
          max: willow ? 125 : 90,
          color: willow ? '#ffc970' : Math.random() < 0.7 ? c1 : c2,
          width: rand(1.4, 2.4) * size,
          crackle: r.type === 'crackle',
        });
      }
      // brief flash at the centre of the burst
      sparks.push({ x: r.x, y: r.y, vx: 0, vy: 0, drag: 1, gravity: 0, life: 7, max: 7, color: '#fff7e0', width: 26 * size, flash: true });
    };

    const start = performance.now();
    let raf;
    const frame = (now) => {
      const elapsed = now - start;
      while (schedule.length && schedule[0] <= elapsed) {
        schedule.shift();
        launch();
      }

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.12;
        // the rising shell: a faint gold streak with a few falling embers
        ctx.strokeStyle = 'rgba(255, 214, 150, 0.85)';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(r.x - r.vx * 3, r.y - r.vy * 3);
        ctx.lineTo(r.x, r.y);
        ctx.stroke();
        if (Math.random() < 0.6) {
          sparks.push({ x: r.x, y: r.y, vx: rand(-0.3, 0.3), vy: rand(0, 0.6), drag: 0.96, gravity: 0.03, life: rand(14, 26), max: 26, color: '#ffbe6b', width: 1 });
        }
        if (r.vy >= -0.6) {
          burst(r);
          rockets.splice(i, 1);
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        let alpha = Math.min(1, (p.life / p.max) * 2);
        if (p.crackle && p.life < p.max * 0.45) alpha *= Math.random() < 0.5 ? 1 : 0.1; // glittering tail
        if (p.flash) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.width);
          g.addColorStop(0, `rgba(255, 247, 224, ${0.5 * alpha})`);
          g.addColorStop(1, 'rgba(255, 247, 224, 0)');
          ctx.fillStyle = g;
          ctx.fillRect(p.x - p.width, p.y - p.width, p.width * 2, p.width * 2);
          continue;
        }
        // motion streak (longer when fast) with a soft halo, like a long-exposure photo
        ctx.strokeStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(p.x - p.vx * 3.2, p.y - p.vy * 3.2);
        ctx.lineTo(p.x, p.y);
        ctx.globalAlpha = alpha * 0.22;
        ctx.lineWidth = p.width * 3.2;
        ctx.stroke();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = p.width;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (elapsed < SHOW_MS + 1200 && (schedule.length || rockets.length || sparks.length)) raf = requestAnimationFrame(frame);
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
      <div className="absolute inset-0 diwali-dusk" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-x-0 top-[54%] -translate-y-1/2 text-center px-6 diwali-greet">
        <p lang="hi" className="diwali-hindi text-[2.6rem] sm:text-6xl leading-tight text-[#fff1d6]">
          शुभ दीपावली
        </p>
        <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#f3d6a4]/80">
          Happy Diwali · BM Classes
        </p>
      </div>

      {DIYAS.map(([left, size, seed], i) => (
        <span
          key={left}
          className={`absolute bottom-[86px] lg:bottom-3 diwali-diya ${i % 3 === 1 ? 'hidden sm:block' : ''}`}
          style={{ left: `${left}%`, width: size, '--seed': seed, animationDelay: `${150 + i * 110}ms` }}
        >
          <span className="diwali-glow" />
          <span className="diwali-flame" />
          <svg viewBox="0 0 64 30" className="relative block w-full">
            <defs>
              <linearGradient id={`clay-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#c8642c" />
                <stop offset="1" stopColor="#7a3216" />
              </linearGradient>
            </defs>
            {/* lamp bowl with the pinched spout on the right, as hand-pressed clay diyas have */}
            <path d="M2 9 C 6 26, 44 30, 54 16 L 62 9 C 50 12, 20 12, 2 9 Z" fill={`url(#clay-${i})`} />
            <path d="M4 9.5 C 20 12.5, 48 12, 61 9.2" fill="none" stroke="#e9a066" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
            <ellipse cx="30" cy="10.6" rx="22" ry="1.6" fill="#3a1606" opacity="0.55" />
          </svg>
        </span>
      ))}
    </div>
  );
}
