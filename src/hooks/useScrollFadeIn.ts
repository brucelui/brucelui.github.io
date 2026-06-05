import { useLayoutEffect } from 'react';

/**
 * Fades in matched elements as they scroll into view.
 * - On case study pages: applies to .projectSectionRight (child of .projectSection)
 *   to avoid stacking-context conflicts with position:sticky title borders.
 * - On other pages (e.g. homepage .mainWorkBox): applies directly to the element.
 *
 * Uses CSS tokens --duration-long and --ease-standard, and the @keyframes
 * fadeInUp defined in style.css.
 *
 * Uses useLayoutEffect (runs before paint) so the initial opacity:0 is
 * committed in the same frame as the component mount — no flash.
 */
export const useScrollFadeIn = (selector = '.projectSection') => {
  useLayoutEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(selector));
    let observer: IntersectionObserver | null = null;
    let rafId: number;

    const computedStyle = getComputedStyle(document.documentElement);
    const duration = computedStyle.getPropertyValue('--duration-long').trim();
    const ease = computedStyle.getPropertyValue('--ease-standard').trim();

    const getTarget = (section: HTMLElement) =>
      section.querySelector<HTMLElement>('.projectSectionRight') ?? section;

    const reveal = (target: HTMLElement) => {
      // Clear the inline hidden state and start the CSS animation.
      // @keyframes always begins from the 'from' state, so there are
      // no transition-timing issues regardless of when this is called.
      target.style.opacity = '';
      target.style.transform = '';
      target.style.animation = `fadeInUp ${duration} ${ease} both`;

      // Once the animation completes, clear it entirely so CSS-defined
      // transitions (hover effects etc.) are fully restored.
      target.addEventListener('animationend', () => {
        target.style.animation = '';
      }, { once: true });
    };

    const inView: HTMLElement[] = [];
    const belowFold: HTMLElement[] = [];

    // useLayoutEffect runs before the browser paints, so setting opacity:0
    // here means it's committed with the initial render — no visible flash.
    sections.forEach((section) => {
      const target = getTarget(section);
      target.style.opacity = '0';
      target.style.transform = 'translateY(24px)';

      if (section.getBoundingClientRect().top < window.innerHeight) {
        inView.push(section);
      } else {
        belowFold.push(section);
      }
    });

    // In-view elements: start the animation on the next frame (after the
    // browser has painted opacity:0).
    rafId = requestAnimationFrame(() => {
      inView.forEach((section) => reveal(getTarget(section)));
    });

    // Below-fold elements: animate when they scroll into view.
    // IntersectionObserver fires asynchronously after layout+paint, so
    // the 'from' state is always visible before the animation starts.
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(getTarget(entry.target as HTMLElement));
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    belowFold.forEach((el) => observer!.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [selector]);
};
