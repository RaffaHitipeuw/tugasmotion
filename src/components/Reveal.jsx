import { useReveal } from '@/lib/useReveal';

/**
 * Wraps children in a fade-up reveal that plays once, when scrolled
 * into view. `delay` lets siblings stagger (Apple rarely animates a
 * whole group at once — items settle in a quick, quiet sequence).
 *
 * <Reveal delay={80}><h2>Title</h2></Reveal>
 */
function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  variant = 'up', // 'up' | 'fade'
  threshold,
  rootMargin,
  children,
  ...props
}) {
  const { ref, isVisible } = useReveal({ threshold, rootMargin });
  const base = variant === 'fade' ? 'reveal-fade' : 'reveal';

  return (
    <Tag
      ref={ref}
      className={`${base} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...props}>
      {children}
    </Tag>
  );
}

export default Reveal;
