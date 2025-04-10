import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for tracking element intersection with viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Threshold for triggering intersection (0-1)
 * @param {string} options.root - Element used as viewport for checking visibility
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isIntersecting, entry] - Reference to attach to element, boolean for intersection state, and the full IntersectionObserverEntry
 */
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  const defaultOptions = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
  };

  const observerOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, observerOptions.threshold, observerOptions.root, observerOptions.rootMargin]);

  return elementRef;
};

export default useIntersectionObserver; 