'use client';

import React, { useEffect, useRef, useState } from 'react';

const OFFSETS = {
  up: 'translate-y-4',
  down: '-translate-y-4',
  left: 'translate-x-4',
  right: '-translate-x-4',
  fade: '',
};

// Content is visible in the server HTML. Only elements that start below the fold
// are hidden on mount and faded in when scrolled to, so nothing above the fold
// ever waits on JavaScript.
export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [state, setState] = useState('static'); // static | hidden | shown

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setState('hidden');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motion =
    state === 'hidden'
      ? `opacity-0 ${OFFSETS[direction] ?? OFFSETS.up}`
      : state === 'shown'
        ? 'opacity-100 translate-x-0 translate-y-0'
        : '';

  return (
    <div
      ref={ref}
      style={state === 'shown' ? { transitionDelay: `${Math.min(delay, 160)}ms` } : undefined}
      className={`${state === 'static' ? '' : 'transition-[opacity,transform] duration-500 ease-out'} ${motion} ${className}`}
    >
      {children}
    </div>
  );
}
