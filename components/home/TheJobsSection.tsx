"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";

export interface JobItem {
  title: string;
  href: string;
  code: string;
}

const JOBS: JobItem[] = [
  {
    title: "Construction of Roads and other allied works",
    href: "/projects",
    code: "01",
  },
  {
    title: "Maintenance of Runway & Taxiways",
    href: "/major-projects",
    code: "02",
  },
  {
    title: "Micro Surfacing works",
    href: "/infrastructure",
    code: "03",
  },
  {
    title: "Operation and Maintenance of BOT Roads",
    href: "/ongoing-projects",
    code: "04",
  },
  {
    title: "External Development including landscaping",
    href: "/projects",
    code: "05",
  },
  {
    title: "Mechanized Road Sweeping",
    href: "/infrastructure",
    code: "06",
  },
];

export const TheJobsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const highwayRef = useRef<HTMLDivElement>(null);
  const [highwayVisible, setHighwayVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = highwayRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighwayVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B1528] text-white pt-14 sm:pt-18 lg:pt-20 pb-12 sm:pb-16 border-t border-b border-[#1A2844] relative overflow-hidden"
    >
      {/* Subtle Ambient Texture with Animated Glow */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5A894]/[0.04] rounded-full blur-3xl pointer-events-none animate-aura-glow" />
      <div className="absolute bottom-10 left-1/5 w-80 h-80 bg-[#C2410C]/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Header and 6 Job Cards (in Container) */}
      <Container>
        {/* Header Block with Animated Entrance & Underline */}
        <div
          className={`mb-8 sm:mb-10 text-left transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5A894] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5A894] font-bold">
              Core Capabilities &bull; Civil Contracting
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-wider text-white font-sans uppercase leading-tight">
            THE JOBS
          </h2>
          <p className="text-base sm:text-lg text-[#F5A894] font-serif italic tracking-wide mt-1.5 sm:mt-2 font-normal">
            &ldquo;We Undertake Primarily&rdquo;
          </p>

          {/* Animated decorative accent line */}
          <div
            className={`h-0.5 w-24 bg-gradient-to-r from-[#F5A894] to-transparent mt-3 rounded-full transition-all duration-1000 ease-out origin-left ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </div>

        {/* 6-Card Dual Column Grid with Staggered Cascading Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {JOBS.map((job, idx) => {
            const isLeftCol = idx % 2 === 0;
            return (
              <div
                key={job.title}
                style={{
                  transitionDelay: isVisible ? `${120 + idx * 80}ms` : "0ms",
                }}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : isLeftCol
                    ? "opacity-0 -translate-x-8 translate-y-4"
                    : "opacity-0 translate-x-8 translate-y-4"
                }`}
              >
                <Link
                  href={job.href}
                  className="bg-white rounded-xl border-2 border-[#F5A894] hover:border-[#E28B75] py-3.5 sm:py-4 px-5 sm:px-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between min-h-[58px] sm:min-h-[64px] group relative overflow-hidden"
                >
                  {/* Subtle Light Sheen reflection on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#F5A894]/20 to-transparent transition-transform duration-700 ease-out pointer-events-none" />

                  {/* Left Index Badge */}
                  <span className="w-6 h-6 rounded-md bg-[#0B1528] text-[#F5A894] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 group-hover:bg-[#C2410C] group-hover:text-white transition-colors duration-200">
                    {job.code}
                  </span>

                  {/* Centered Job Title */}
                  <span className="text-[#101D33] group-hover:text-[#0A1322] font-bold text-sm sm:text-base font-sans leading-snug transition-colors flex-1 text-center px-3">
                    {job.title}
                  </span>

                  {/* Right Animated Arrow */}
                  <span className="text-[#F5A894] group-hover:text-[#C2410C] font-mono text-sm transition-transform duration-200 group-hover:translate-x-1 shrink-0">
                    &rarr;
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Framed Highway Showcase with Luminous Border and Zoom Reveal */}
      <div
        ref={highwayRef}
        className={`w-full mt-10 sm:mt-14 px-4 sm:px-8 lg:px-12 max-w-[940px] mx-auto transition-all duration-1000 ease-out transform ${
          highwayVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-8"
        }`}
      >
        <div className="w-full relative aspect-[16/7] sm:aspect-[21/8] lg:aspect-[2.52/1] rounded-xl overflow-hidden border-2 sm:border-[3px] border-[#F5A894] shadow-[0_16px_50px_rgba(0,0,0,0.6)] bg-black group">
          {/* Subtle Corner Light Flare */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#F5A894]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700 z-10" />

          <Image
            src="/images/projects/the-jobs-highway.jpg"
            alt="Multi-lane national highway and expressway infrastructure delivered by C P Arora"
            fill
            quality={100}
            unoptimized={true}
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TheJobsSection;
