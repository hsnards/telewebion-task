'use client';

import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      setIsScrollingDown(scrollY > lastScrollY);
      setLastScrollY(scrollY);
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return { isScrollingDown, lastScrollY };
}
