/**
 * Bottom Scroll Confetti Hook
 * 
 * A complete, self-contained solution for triggering confetti from bottom corners
 * when users scroll to the bottom of the page (only when scrolling down).
 * 
 * DEPENDENCIES REQUIRED:
 * - canvas-confetti: npm install canvas-confetti
 * - React (useState, useEffect, useRef)
 * 
 * USAGE INSTRUCTIONS:
 * 
 * 1. Install the dependency:
 *    npm install canvas-confetti
 * 
 * 2. Copy this entire file to your project (e.g., src/hooks/useBottomScrollConfetti.tsx)
 * 
 * 3. Import and use in your component:
 *    import { useBottomScrollConfetti } from '@/hooks/useBottomScrollConfetti';
 * 
 *    function MyComponent() {
 *      const { hasReachedBottom } = useBottomScrollConfetti();
 *      
 *      return (
 *        <div>
 *          {hasReachedBottom && <p>You've reached the bottom! 🎉</p>}
 *          // Your scrollable content here
 *        </div>
 *      );
 *    }
 * 
 * 4. Customize the confetti (optional):
 *    Pass options to the hook:
 *    useBottomScrollConfetti({
 *      animationDuration: 3000,  // Duration in milliseconds (default: 2000)
 *      colors: ['#ff0000', '#00ff00'],  // Custom colors
 *      particleCount: 5,  // Particles per burst (default: 3)
 *      bottomThreshold: 50  // Pixels from bottom to trigger (default: 50)
 *    })
 * 
 * FEATURES:
 * - Only triggers when scrolling DOWN to the bottom (not when scrolling up)
 * - 2-second confetti animation from both bottom corners
 * - Confetti arcs upward then falls down near the end
 * - Prevents multiple simultaneous triggers
 * - Returns hasReachedBottom state for conditional UI rendering
 */

import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";

// Configuration types
interface ConfettiOptions {
  animationDuration?: number;  // Duration of the confetti animation in ms
  colors?: string[];           // Array of color hex codes
  particleCount?: number;      // Number of particles per burst
  bottomThreshold?: number;    // Pixels from bottom to trigger
}

// Default configuration
const DEFAULT_OPTIONS = {
  animationDuration: 2000,
  colors: ['#a855f7', '#ec4899', '#fbbf24', '#3b82f6', '#10b981'],
  particleCount: 3,
  bottomThreshold: 50,
};

// Utility function for random values
const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

/**
 * Triggers the confetti animation from bottom corners
 */
const triggerBottomConfetti = (options: Required<ConfettiOptions>) => {
  const { animationDuration, colors, particleCount } = options;
  const animationEnd = Date.now() + animationDuration;
  
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    
    // Left corner confetti - shoots up, then falls down
    confetti({
      particleCount,
      angle: randomInRange(55, 85),
      spread: randomInRange(50, 70),
      origin: { x: 0.1, y: 1 },
      colors,
      gravity: timeLeft < 1000 ? 1.5 : 0.7, // Increase gravity in last second
      drift: randomInRange(-0.5, 0.5),
      ticks: 200,
      scalar: randomInRange(0.8, 1.2),
    });

    // Right corner confetti - shoots up, then falls down
    confetti({
      particleCount,
      angle: randomInRange(95, 125),
      spread: randomInRange(50, 70),
      origin: { x: 0.9, y: 1 },
      colors,
      gravity: timeLeft < 1000 ? 1.5 : 0.7, // Increase gravity in last second
      drift: randomInRange(-0.5, 0.5),
      ticks: 200,
      scalar: randomInRange(0.8, 1.2),
    });
  }, 50);
};

/**
 * React hook for bottom scroll confetti detection
 */
export const useBottomScrollConfetti = (customOptions?: ConfettiOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const confettiTriggeredRef = useRef(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const isAtBottom = windowHeight + scrollTop >= documentHeight - options.bottomThreshold;
      const isScrollingDown = scrollTop > lastScrollTop.current;
      
      lastScrollTop.current = scrollTop;
      
      // Only trigger when scrolling DOWN and reaching the bottom
      if (isAtBottom && isScrollingDown && !confettiTriggeredRef.current) {
        confettiTriggeredRef.current = true;
        setHasReachedBottom(true);
        triggerBottomConfetti(options);
        
        // Reset after animation completes + buffer
        setTimeout(() => {
          confettiTriggeredRef.current = false;
        }, options.animationDuration + 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [options]);

  return { hasReachedBottom };
};

/**
 * Standalone function (non-React) - call this to initialize scroll detection
 * Useful if you want to use this outside of React
 */
export const initBottomScrollConfetti = (customOptions?: ConfettiOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  let confettiTriggered = false;
  let lastScrollTop = 0;

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const isAtBottom = windowHeight + scrollTop >= documentHeight - options.bottomThreshold;
    const isScrollingDown = scrollTop > lastScrollTop;
    
    lastScrollTop = scrollTop;
    
    if (isAtBottom && isScrollingDown && !confettiTriggered) {
      confettiTriggered = true;
      triggerBottomConfetti(options);
      
      setTimeout(() => {
        confettiTriggered = false;
      }, options.animationDuration + 500);
    }
  };

  window.addEventListener("scroll", handleScroll);
  
  // Return cleanup function
  return () => window.removeEventListener("scroll", handleScroll);
};

/**
 * Manual trigger function - call this anywhere to trigger the confetti
 */
export const manualTriggerConfetti = (customOptions?: ConfettiOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  triggerBottomConfetti(options);
};
