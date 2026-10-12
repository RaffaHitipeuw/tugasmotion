export const handleSmoothScroll = (event, path, offset = 50) => {
  event.preventDefault();

  const elementId = path.split('#')[1];
  const element = document.getElementById(elementId || '');

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', path);
  } else {
    window.location.href = path;
  }
};

/**
 * Smooth-scrolls to a section using the shared Lenis instance so the nav
 * click animates from the CURRENT scroll position straight to the target
 * (no jump/glitch from a competing native `behavior: 'smooth'` scroll).
 *
 * @param {import('lenis').default | null} lenis - instance from useLenis()
 * @param {Event} event - the click event on the nav link
 * @param {string} path - e.g. '/#layanan'
 * @param {number} offset - px offset from the top (e.g. sticky navbar height)
 */
export const handleLenisScroll = (lenis, event, path, offset = 80) => {
  event.preventDefault();

  const elementId = path.split('#')[1];
  const element = document.getElementById(elementId || '');

  if (!element) {
    window.location.href = path;
    return;
  }

  if (lenis) {
    // Resize first: if content above the target shifted size since Lenis
    // last measured (images, fonts, layout), scrollTo can target a stale
    // position and the animation appears to stop short ("patah").
    lenis.resize();
    lenis.scrollTo(element, {
      offset: -offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      force: true, // don't let a residual wheel/touch event cancel this scroll
      lock: true, // ignore user scroll input until the animation finishes
    });
    window.history.pushState(null, '', path);
  } else {
    // Lenis not ready yet (e.g. first paint) — fall back to native smooth scroll.
    handleSmoothScroll(event, path, offset);
  }
};
