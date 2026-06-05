import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  startDelay?: number;
  onComplete?: () => void;
}

export const CountUp = ({ value, suffix = '', decimals = 0, duration = 1800, startDelay = 100, onComplete }: CountUpProps) => {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          setTimeout(() => {
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(eased * value);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              onComplete?.();
            }
          };

          requestAnimationFrame(tick);
          }, startDelay);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {displayed.toFixed(decimals)}{suffix}
    </span>
  );
};
