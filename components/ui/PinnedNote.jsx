import React from 'react';

const NOTES = [
  { tint: 'bg-[#fff1e8]', ink: 'text-orange-500', pin: '#f97316', tilt: '-rotate-2' },
  { tint: 'bg-[#eef1ff]', ink: 'text-indigo-500', pin: '#4f46e5', tilt: 'rotate-[1.5deg]' },
  { tint: 'bg-[#f6ecff]', ink: 'text-violet-500', pin: '#7c3aed', tilt: '-rotate-1' },
  { tint: 'bg-[#fff1e8]', ink: 'text-orange-500', pin: '#f97316', tilt: 'rotate-2' },
  { tint: 'bg-[#eef1ff]', ink: 'text-indigo-500', pin: '#4f46e5', tilt: '-rotate-[1.5deg]' },
];

// Pastel note with a coloured pin and a slight tilt. Used for steps and phases.
export default function PinnedNote({ index, label, title, children }) {
  const note = NOTES[index % NOTES.length];
  return (
    <li className={`relative list-none pt-4 h-full ${note.tilt} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}>
      <span
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full shadow-[0_6px_10px_-2px_rgba(15,23,42,0.35)]"
        style={{ background: `radial-gradient(circle at 35% 30%, #fff8 0 18%, ${note.pin} 40%)` }}
      />
      <div className="h-[calc(100%-1rem)] rounded-[22px] bg-white p-2 shadow-[0_22px_40px_-22px_rgba(15,23,42,0.45)] border border-slate-100">
        <div className={`h-full rounded-[16px] ${note.tint} px-5 pt-7 pb-6 min-h-[200px]`}>
          <span className={`font-heading tracking-tight ${label ? 'text-base font-semibold' : 'text-3xl font-medium'} ${note.ink}`}>
            {label ?? String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading font-semibold text-xl tracking-[-0.015em] text-slate-950 mt-2">{title}</h3>
          <div className="text-[15px] text-slate-600 leading-relaxed mt-2">{children}</div>
        </div>
      </div>
    </li>
  );
}
