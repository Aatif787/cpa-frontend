"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Container from "../layout/Container";

export type CTATheme = "navy" | "gold" | "white";

export interface CTAAction {
  label: string;
  href: string;
}

export interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  theme?: CTATheme;
  className?: string;
}

const themeStyles: Record<CTATheme, {
  container: string;
  title: string;
  description: string;
  eyebrow: string;
  border: string;
}> = {
  navy: {
    container: "bg-[#0A1322] text-cpa-white",
    title: "text-cpa-white",
    description: "text-cpa-text-inverse-muted",
    eyebrow: "text-cpa-gold border-cpa-gold/40 bg-cpa-gold/10",
    border: "border-t-2 border-b-2 border-cpa-gold",
  },
  gold: {
    container: "bg-[#FAF7F0] text-cpa-navy",
    title: "text-cpa-navy",
    description: "text-cpa-text-secondary",
    eyebrow: "text-cpa-navy border-cpa-navy/30 bg-cpa-navy/10",
    border: "border-y border-cpa-gold/40",
  },
  white: {
    container: "bg-cpa-white text-cpa-navy",
    title: "text-cpa-navy",
    description: "text-cpa-text-secondary",
    eyebrow: "text-cpa-gold border-cpa-gold/30 bg-cpa-gold/10",
    border: "border-y border-cpa-surface-border",
  },
};

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  theme = "navy",
  className = "",
}) => {
  const styles = themeStyles[theme];
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${styles.container} ${styles.border} ${className}`}
    >
      {/* Architectural subtle ambient background for navy theme */}
      {theme === "navy" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Breathing Animated Radial Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cpa-gold/15 rounded-full blur-3xl pointer-events-none animate-aura-glow" />
          <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-[#C2410C]/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <Container className="relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center flex flex-col items-center transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {eyebrow && (
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono uppercase tracking-widest font-bold mb-5 shadow-sm ${styles.eyebrow}`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cpa-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cpa-gold" />
              </span>
              <span>{eyebrow}</span>
            </div>
          )}

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight font-sans leading-tight mb-4 ${styles.title}`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-normal ${styles.description}`}
            >
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary Action with Animated Shimmer Light Beam */}
            <div className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-all">
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 animate-beam pointer-events-none" />
              <Button
                href={primaryAction.href}
                variant={theme === "navy" ? "gold" : "primary"}
                size="lg"
                className="relative z-10"
              >
                {primaryAction.label} &rarr;
              </Button>
            </div>

            {secondaryAction && (
              <Button
                href={secondaryAction.href}
                variant={theme === "navy" ? "outline-light" : "outline"}
                size="lg"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
