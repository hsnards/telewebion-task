"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const THRESHOLD = 2; // Minimum scroll distance to trigger direction change
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < THRESHOLD) {
        ticking = false;
        return;
      }

      setIsScrollingDown(scrollY > lastScrollY);
      setLastScrollY(scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return { isScrollingDown, lastScrollY };
}
