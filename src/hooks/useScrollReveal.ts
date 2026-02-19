import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Adds `.visible` class to matching elements when they enter the viewport.
 */
export function useScrollReveal(
  selector: string = '.reveal, .reveal-left, .reveal-right',
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const targets = containerRef.current
      ? containerRef.current.querySelectorAll(selector)
      : document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);

  return containerRef;
}

/**
 * Hook for animating a single element with a ref.
 */
export function useElementReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
