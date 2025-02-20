import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [lastScroll, setLastScroll] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      setPastHero(position > windowHeight * 0.8);
      setScrollPosition(position);
      
      if (position > lastScroll) {
        setDirection('down');
      } else {
        setDirection('up');
      }
      setLastScroll(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return { scrollPosition, direction, pastHero };
}