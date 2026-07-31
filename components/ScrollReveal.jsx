'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '50px 0px -20px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const getInitialClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100 pointer-events-auto';
    
    switch (direction) {
      case 'up': return 'opacity-0 translate-y-6 will-change-[transform,opacity]';
      case 'down': return 'opacity-0 -translate-y-6 will-change-[transform,opacity]';
      case 'left': return 'opacity-0 translate-x-6 will-change-[transform,opacity]';
      case 'right': return 'opacity-0 -translate-x-6 will-change-[transform,opacity]';
      case 'fade': return 'opacity-0 scale-95 will-change-[transform,opacity]';
      default: return 'opacity-0 translate-y-6 will-change-[transform,opacity]';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out transform-gpu ${getInitialClass()} ${className}`}
    >
      {children}
    </div>
  );
}
