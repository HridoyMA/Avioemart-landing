import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  duration?: number;
  startOnMount?: boolean;
}

/**
 * Custom hook to animate a number from 0 to target value
 */
export const useCounter = (
  target: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, startOnMount = true } = options;
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnMount);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnMount) {
      // Use Intersection Observer to start animation when element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasStarted) {
              setHasStarted(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      observerRef.current = observer;

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [startOnMount, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target, duration, hasStarted]);

  return { count, elementRef };
};

