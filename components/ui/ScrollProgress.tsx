"use client";

import React, { useEffect, useRef } from "react";

export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = winHeightPx > 0 ? Math.min(1, Math.max(0, scrollPx / winHeightPx)) : 0;
      
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-cpa-gold via-[#F5B82E] to-cpa-gold shadow-[0_0_8px_rgba(184,154,90,0.6)] origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ScrollProgress;
