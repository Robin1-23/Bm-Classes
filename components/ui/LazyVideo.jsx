'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';

// Muted looping preview that downloads nothing until it scrolls near the
// viewport, and pauses again when it leaves.
const LazyVideo = forwardRef(function LazyVideo({ src, className = '', ...props }, forwardedRef) {
  const localRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = localRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = localRef.current;
    if (!video || !loaded) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView, loaded]);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return (
    <video
      ref={setRefs}
      src={loaded ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      className={`bg-slate-900 ${className}`}
      {...props}
    />
  );
});

export default LazyVideo;
