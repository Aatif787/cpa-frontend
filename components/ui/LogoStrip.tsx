"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface LogoItem {
  name: string;
  src: string;
  href?: string;
}

export interface LogoStripProps {
  title?: string;
  logos: LogoItem[];
  theme?: "light" | "dark";
  className?: string;
}

export const LogoStrip: React.FC<LogoStripProps> = ({
  title,
  logos,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const [isPaused, setIsPaused] = useState(false);

  // Repeat logos 4 times to ensure a seamless continuous infinite loop on all screen widths
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className={`w-full py-6 sm:py-8 overflow-hidden relative ${className}`}>
      {title && (
        <p
          className={`text-center text-xs font-mono uppercase tracking-widest font-semibold mb-6 ${
            isDark ? "text-cpa-text-inverse-muted" : "text-cpa-text-secondary"
          }`}
        >
          {title}
        </p>
      )}

      {/* Edge Gradient Mask for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track with Smooth Pause on Hover */}
      <div
        className="flex w-max gap-6 sm:gap-10 animate-marquee"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
          animationDuration: "28s",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {marqueeLogos.map((logo, index) => {
          const itemKey = `${logo.name}-${index}`;
          const content = (
            <div
              className={`relative h-16 w-36 sm:w-44 px-4 py-2.5 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDark
                  ? "bg-cpa-navy-secondary/90 border-white/10 hover:border-cpa-gold hover:bg-cpa-navy"
                  : "bg-white border-[#E2E8F0] hover:border-[#C2410C]/60 hover:shadow-[0_8px_25px_rgba(194,65,12,0.08)] shadow-xs"
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className="max-h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={itemKey}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.name}
                className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={itemKey} title={logo.name} className="shrink-0">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoStrip;
