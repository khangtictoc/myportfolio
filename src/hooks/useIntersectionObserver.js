import { useEffect, useRef } from 'react';

/**
 * Custom hook for tracking element intersection with viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Threshold for triggering intersection (0-1)
 * @param {string} options.root - Element used as viewport for checking visibility
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Object} Reference to attach to element
 */
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Initialize options inside useEffect to avoid creating new object on every render
    const observerOptions = {
      threshold: 0,
      root: null,
      rootMargin: '0px',
      ...options
    };

    const observer = new IntersectionObserver(([entry]) => {
      // We apply a data attribute to mark elements as visible when they intersect
      if (entry.isIntersecting) {
        element.setAttribute('data-visible', 'true');
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]); // options as a dependency is okay since it's passed as a parameter

  return elementRef;
};

export default useIntersectionObserver; 