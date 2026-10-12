import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once when it scrolls into view — the quiet,
 * fade-up pattern Apple uses across apple.com sections.
 *
 * Usage:
 *   const { ref, isVisible } = useReveal();
 *   <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
 *
 * @param {object} options
 * @param {number} options.threshold - fraction of the element visible before it triggers (default 0.15)
 * @param {string} options.rootMargin - shrinks/grows the trigger area (default pulls the trigger line up slightly)
 * @param {boolean} options.once - only animate the first time it enters view (default true)
 */
export function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver isn't available for some reason, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
