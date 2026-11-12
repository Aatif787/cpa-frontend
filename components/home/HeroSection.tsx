"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import HeroAssembleCanvas from "./HeroAssembleCanvas";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "asphalt-plant",
    image: "/images/hero/cpa-banner5.jpg",
    alt: "C P Arora Highway Infrastructure Construction & Computerized Asphalt Batching Plant Operations",
  },
  {
    id: "crusher-plant",
    image: "/images/hero/cpa-banner6.jpg",
    alt: "C P Arora Stone Aggregate Crushing & Screening Plant Operations",
  },
  {
    id: "apollo-batch-plant",
    image: "/images/hero/cpa-banner7.jpg",
    alt: "C P Arora Apollo Asphalt Batching Plant & Tipper Truck Dispatch Bay",
  },
];

const SLIDE_DURATION = 4200; // 4.2 seconds per slide continuous auto-scroll

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [targetSlide, setTargetSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ribbonVisible, setRibbonVisible] = useState(false);

  const ribbonRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = HERO_SLIDES.length;

  // Refs to prevent closure lag in the interval
  const currentSlideRef = useRef(currentSlide);
  const isTransitioningRef = useRef(isTransitioning);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // Complete transition callback from the canvas assemble engine
  const handleTransitionComplete = useCallback(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setTargetSlide((prevTarget) => {
      if (prevTarget !== null) {
        setCurrentSlide(prevTarget);
      }
      return null;
    });
    // Ensure React commits and paints the new slide in the DOM before hiding canvas
    requestAnimationFrame(() => {
      setIsTransitioning(false);
    });
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number, dir?: "next" | "prev") => {
      if (nextIndex === currentSlideRef.current || isTransitioningRef.current) return;
      const determinedDir =
        dir || (nextIndex > currentSlideRef.current ? "next" : "prev");

      setDirection(determinedDir);
      setTargetSlide(nextIndex);
      setIsTransitioning(true);

      // Safety failsafe: always force complete if canvas drops RAF
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = setTimeout(() => {
        handleTransitionComplete();
      }, 1600);
    },
    [handleTransitionComplete]
  );

  const goToNextSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    const nextIndex = (currentSlideRef.current + 1) % totalSlides;
    goToSlide(nextIndex, "next");
  }, [totalSlides, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    const prevIndex = (currentSlideRef.current - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex, "prev");
  }, [totalSlides, goToSlide]);

  // Guaranteed continuous auto-scroll interval
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioningRef.current && typeof document !== "undefined" && !document.hidden) {
        const nextIndex = (currentSlideRef.current + 1) % totalSlides;
        goToSlide(nextIndex, "next");
      }
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [totalSlides, goToSlide]);

  // Viewport intersection observer for stats ribbon animation
  useEffect(() => {
    const el = ribbonRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRibbonVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevSlide();
    } else if (e.key === "ArrowRight") {
      goToNextSlide();
    }
  };

  // Touch swipe support for responsive mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    touchStartX.current = null;
  };

  const allImageSrcs = HERO_SLIDES.map((s) => s.image);

  return (
    <section
      className="relative w-full overflow-hidden bg-cpa-navy"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="C P Arora Heavy Infrastructure & Machinery Showcase"
    >
      {/* Semantic accessible H1 for SEO and screen readers */}
      <h1 className="sr-only">
        C P Arora | Civil Engineering, Highways &amp; Airport Infrastructure
      </h1>

      {/* Hero Banner Carousel Container — Completely Clean, 100% Native Clarity */}
      <div
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[360px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] xl:min-h-[720px] select-none overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Base Underlying Native Image: Crystal Clear — Instant Handoff with No Secondary Fade */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <div className="w-full h-full relative">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1920px) 100vw, 2560px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          );
        })}

        {/* 8-Part Gear Shape 3D Flip & Assemble Canvas */}
        <HeroAssembleCanvas
          currentImageSrc={HERO_SLIDES[currentSlide].image}
          nextImageSrc={targetSlide !== null ? HERO_SLIDES[targetSlide].image : null}
          allImageSrcs={allImageSrcs}
          isTransitioning={isTransitioning}
          direction={direction}
          onTransitionComplete={handleTransitionComplete}
        />

        {/* Lateral Floating Prev Slide Arrow */}
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={isTransitioning}
          aria-label="Previous hero image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-[#DFBF62]/70 flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cpa-gold group disabled:opacity-50"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Lateral Floating Next Slide Arrow */}
        <button
          type="button"
          onClick={goToNextSlide}
          disabled={isTransitioning}
          aria-label="Next hero image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-[#DFBF62]/70 flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cpa-gold group disabled:opacity-50"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Sleek Executive Stats Ribbon */}
      <div
        ref={ribbonRef}
        className="w-full bg-[#07101E] border-t-2 border-cpa-gold/50 border-b border-white/10 shadow-xl relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Metric 1: Turnover */}
            <div
              style={{ transitionDelay: ribbonVisible ? "100ms" : "0ms" }}
              className={`flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 group cursor-default transition-all duration-700 ease-out ${
                ribbonVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-cpa-gold/30 flex items-center justify-center shrink-0 text-cpa-gold group-hover:bg-cpa-gold group-hover:text-cpa-navy group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                <span className="font-sans font-black text-lg">₹</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight group-hover:text-[#F5B82E] transition-colors">
                    700 Cr+
                  </span>
                  <span className="text-[10px] font-mono uppercase text-cpa-gold font-bold">
                    Turnover
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight mt-0.5">
                  Audited Class-I financial scale
                </p>
              </div>
            </div>

            {/* Metric 2: Legacy */}
            <div
              style={{ transitionDelay: ribbonVisible ? "220ms" : "0ms" }}
              className={`flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 group cursor-default transition-all duration-700 ease-out ${
                ribbonVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-cpa-gold/30 flex items-center justify-center shrink-0 text-cpa-gold group-hover:bg-cpa-gold group-hover:text-cpa-navy group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                <span className="font-mono font-bold text-sm">50</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight group-hover:text-[#F5B82E] transition-colors">
                    5 Decades
                  </span>
                  <span className="text-[10px] font-mono uppercase text-cpa-gold font-bold">
                    Legacy
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight mt-0.5">
                  Building Indian roads since 1974
                </p>
              </div>
            </div>

            {/* Metric 3: 100% Owned Fleet */}
            <div
              style={{ transitionDelay: ribbonVisible ? "340ms" : "0ms" }}
              className={`flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3 group cursor-default transition-all duration-700 ease-out ${
                ribbonVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-cpa-gold/30 flex items-center justify-center shrink-0 text-cpa-gold group-hover:bg-cpa-gold group-hover:text-cpa-navy group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight group-hover:text-[#F5B82E] transition-colors">
                    100% Owned
                  </span>
                  <span className="text-[10px] font-mono uppercase text-cpa-gold font-bold">
                    Fleet
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight mt-0.5">
                  Advanced sensor pavers &amp; plants
                </p>
              </div>
            </div>

            {/* Metric 4: 24/7 Airfield with Dual Concentric Beacon */}
            <div
              style={{ transitionDelay: ribbonVisible ? "460ms" : "0ms" }}
              className={`flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3 group cursor-default transition-all duration-700 ease-out ${
                ribbonVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-cpa-gold/30 flex items-center justify-center shrink-0 text-cpa-gold group-hover:bg-[#C2410C] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(194,65,12,0.5)] transition-all duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C2410C]" />
                </span>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight group-hover:text-[#FB923C] transition-colors">
                    24/7 Airfield
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#EA580C] font-bold">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-tight mt-0.5">
                  Trusted runway partner at IGI Airport
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
