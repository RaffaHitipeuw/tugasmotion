import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

/**
 * Wrap the app with this once (in main.jsx / App.jsx).
 * It creates a single Lenis instance, drives it with requestAnimationFrame,
 * and exposes it via useLenis() so any component (e.g. the navbar) can
 * trigger a smooth, non-glitchy scroll to a section.
 */
export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    let rafId;
    let cancelled = false;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      autoRaf: false,
    });

    function raf(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Let layout/fonts/images settle for one tick before exposing the
    // instance, otherwise an immediate scrollTo() can measure a wrong
    // document height and cut the animation short mid-way (the "patah").
    const readyId = requestAnimationFrame(() => {
      if (cancelled) return;
      instance.resize();
      setLenis(instance);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(readyId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

/**
 * Returns the shared Lenis instance (or null before it's ready).
 */
export function useLenis() {
  return useContext(LenisContext);
}

