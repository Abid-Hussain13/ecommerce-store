import { useEffect, useRef, useCallback } from 'react';

export const useScrollReveal = (options?: IntersectionObserverInit) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsToObserve = useRef<HTMLElement[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options || { threshold: 0.01 });

    // Observe any elements that were added before the observer was ready
    elementsToObserve.current.forEach(el => observerRef.current?.observe(el));
    elementsToObserve.current = [];

    return () => {
      observerRef.current?.disconnect();
    };
  }, [options]);

  const addToRef = useCallback((el: HTMLElement | null) => {
    if (el) {
      if (observerRef.current) {
        observerRef.current.observe(el);
      } else {
        elementsToObserve.current.push(el);
      }
    }
  }, []);

  return addToRef;
};
