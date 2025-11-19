(() => {
  const OPTIONS = {
    animationDuration: 600,
    bottomThreshold: 50,
    particleCount: 5,
    // colors: ['#ff7a18', '#ffd018', '#4ecdc4'],
  };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const triggerConfetti = () => {
    // Track confetti event in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'confetti_triggered', {
        'event_category': 'engagement',
        'event_label': 'scroll_to_bottom'
      });
    }
    
    // Also track in Universal Analytics (if still in use)
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'engagement', 'confetti_triggered', 'scroll_to_bottom');
    }

    const animationEnd = Date.now() + OPTIONS.animationDuration;
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const gravity = timeLeft < 1000 ? 1.5 : 0.7;
      const fire = (originX) =>
        confetti({
          particleCount: OPTIONS.particleCount,
          angle: originX < 0.5 ? randomInRange(55, 85) : randomInRange(95, 125),
          spread: randomInRange(50, 70),
          origin: { x: originX, y: 1 },
          colors: OPTIONS.colors,
          gravity,
          drift: randomInRange(-0.5, 0.5),
          ticks: 200,
          scalar: randomInRange(0.8, 1.2),
        });

      fire(0.1);
      fire(0.9);
    }, 50);
  };

  let lastScroll = 0;
  let locked = false;

  const handleScroll = () => {
    const winH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const atBottom = winH + scrollTop >= docH - OPTIONS.bottomThreshold;
    const scrollingDown = scrollTop > lastScroll;
    lastScroll = scrollTop;

    if (atBottom && scrollingDown && !locked) {
      locked = true;
      triggerConfetti();
      setTimeout(() => (locked = false), OPTIONS.animationDuration + 500);
    }
  };

  window.addEventListener('scroll', handleScroll);
})();

