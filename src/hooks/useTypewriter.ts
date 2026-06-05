import { useState, useEffect } from 'react';

/**
 * Types out `text` character by character at `speed` ms per character.
 * Returns the currently-displayed string and whether typing is still in progress.
 */
export const useTypewriter = (text: string, speed = 70, startDelay = 0) => {
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setIsTyping(false);
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      let i = 0;
      setIsTyping(true);
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, isTyping };
};
