"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/layout/SectionContainer";

export const AboutUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // progress from 0 (fully divided) to 1 (fully merged like doors closed)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Start merging when the section enters the bottom 92% of the viewport
      // Complete merge when it reaches the comfortable reading zone (top 32% of viewport)
      const start = windowHeight * 0.92;
      const end = windowHeight * 0.32;
      const range = start - end;

      let rawProgress = (start - rect.top) / range;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setProgress(clamped);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    // Initial check on mount
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Compute smooth offsets for the 50/50 doors based on scroll progress
  const distance = (1 - progress) * 260; // 260px outward when divided
  const angle = (1 - progress) * 7;      // 7deg 3D door swing when divided
  const opacity = Math.min(1, 0.15 + progress * 0.85);

  return (
    <SectionContainer theme="white" padding="md" id="about-us" className="relative overflow-hidden">
      <div ref={sectionRef} className="w-full [perspective:1400px] overflow-hidden">
        {/* ========================================================= */}
        {/* 1. Header & Quoted Tagline — Smooth Reveal as you scroll */}
        {/* ========================================================= */}
        <div
          className="mb-6 sm:mb-8 text-left transition-all duration-500 ease-out"
          style={{
            transform: `translate3d(0, ${-(1 - progress) * 16}px, 0)`,
            opacity: Math.min(1, 0.2 + progress * 0.8),
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9A3412] font-bold">
              Established 1974 &bull; Class-I Civil Infrastructure
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight font-sans uppercase leading-tight">
            <span className="text-[#C2410C]">ABOUT </span>
            <span className="text-[#101D33]">C P ARORA</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-serif italic text-[#C27D38] mt-1 tracking-normal font-normal">
            &ldquo;Quality Contracting On Time, Within Budget&rdquo;
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. ₹700 Crore Banner: Merges Left & Right with Scroll     */}
        {/* ========================================================= */}
        <div
          className="w-full bg-[#081224] text-cpa-white border-l-[6px] border-[#D4AF37] rounded-xl px-5 py-4 sm:px-8 sm:py-5 mb-8 sm:mb-10 shadow-lg border border-white/5 transition-all duration-500 ease-out overflow-hidden"
          style={{
            transform: `translate3d(0, ${(1 - progress) * 12}px, 0)`,
            opacity,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left 50% of Banner: ₹ 700 Crore */}
            <div
              className="flex items-baseline gap-2.5 shrink-0 transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(${- (1 - progress) * 80}px, 0, 0)`,
              }}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-[#F5B82E] tracking-tight">
                ₹ 700
              </span>
              <span className="text-base sm:text-lg font-bold text-[#F5B82E] uppercase tracking-wide">
                Crore
              </span>
              <div className="h-8 w-px bg-white/20 mx-3 self-center hidden sm:block" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#F5B82E] font-sans">
                ANNUAL TURNOVER
              </span>
            </div>

            {/* Right 50% of Banner: Verification & Audited Link */}
            <div
              className="flex items-center justify-between lg:justify-end gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(${(1 - progress) * 80}px, 0, 0)`,
              }}
            >
              <span className="text-xs text-slate-300 font-normal hidden sm:inline">
                Five decades &bull; Class-I PWD Verified
              </span>
              <Link
                href="/registrations"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#F5B82E] hover:text-[#081224] text-[11px] font-mono uppercase tracking-wider text-[#F5B82E] transition-all border border-[#F5B82E]/30 shrink-0"
              >
                <span>Class-I Registrations</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PERFECT 50 / 50 SPLIT: TWO HALVES MERGE TOGETHER AS YOU SCROLL DOWN   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* PART 1: EXACT 50% LEFT DOOR                               */}
          {/* Glides inward from Left to Center as you scroll down     */}
          {/* ========================================================= */}
          <div
            className="w-full space-y-5 transition-all duration-500 ease-out"
            style={{
              transform: `translate3d(${-distance}px, 0, 0) rotateY(${-angle}deg)`,
              opacity,
              transformOrigin: "left center",
              willChange: "transform, opacity",
            }}
          >
            {/* Lead Editorial Statement */}
            <p className="text-base sm:text-lg text-[#1E293B] font-medium leading-relaxed font-sans">
              For five decades, C P Arora has paved the roadways that keep India moving. From high-speed expressway corridors to the 24/7 live runways of New Delhi&rsquo;s international airport, we build infrastructure that stands strong against heavy traffic and extreme weather.
            </p>

            {/* 3 Engineering Pillar Cards */}
            <div className="space-y-3 pt-1">
              {/* Pillar 1 */}
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#D4AF37]/60 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#101D33] text-[#F5B82E] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#101D33] font-sans group-hover:text-[#C2410C] transition-colors">
                      Highways &amp; 16-Lane Expressways
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1">
                      High-output asphalt concrete paving, solid road base stabilization, and automatic sensor paver leveling built for heavy interstate freight traffic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#D4AF37]/60 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#101D33] text-[#F5B82E] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#101D33] font-sans group-hover:text-[#C2410C] transition-colors">
                      24/7 Mission-Critical Airfields
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1">
                      Trusted by GMR for continuous runway and taxiway resurfacing with zero disruption to live flights at Indira Gandhi International Airport.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#D4AF37]/60 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#101D33] text-[#F5B82E] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#101D33] font-sans group-hover:text-[#C2410C] transition-colors">
                      100% Owned Machinery Fleet
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1">
                      Direct ownership of advanced sensor pavers, asphalt mixing plants, and heavy rollers means immediate site mobilization and total quality control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation Badges Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#101D33] bg-[#E2E8F0]/60 border border-[#CBD5E1] rounded-md font-semibold">
                Class-I PWD Certified
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#101D33] bg-[#E2E8F0]/60 border border-[#CBD5E1] rounded-md font-semibold">
                National Highway Packages
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#101D33] bg-[#E2E8F0]/60 border border-[#CBD5E1] rounded-md font-semibold">
                Airfield Specialist
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#785E23] bg-[#FAF4E6] border border-[#D4AF37]/50 rounded-md font-semibold">
                ISO 9001:2015
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/about-us/company-profile"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#101D33] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#1a2f52] transition-colors rounded-lg shadow-sm"
              >
                Read Company Profile &rarr;
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#101D33]/30 text-[#101D33] text-xs sm:text-sm font-semibold tracking-wide uppercase hover:border-[#101D33] hover:bg-[#101D33]/5 transition-colors rounded-lg"
              >
                View Active Projects
              </Link>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PART 2: EXACT 50% RIGHT DOOR                              */}
          {/* Glides inward from Right to Center as you scroll down    */}
          {/* ========================================================= */}
          <div
            className="w-full space-y-5 transition-all duration-500 ease-out"
            style={{
              transform: `translate3d(${distance}px, 0, 0) rotateY(${angle}deg)`,
              opacity,
              transformOrigin: "right center",
              willChange: "transform, opacity",
            }}
          >
            {/* Airfield Partner Quote Card */}
            <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#C27D38] rounded-xl shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C27D38] font-bold block mb-1">
                Mission-Critical Airfield Partner
              </span>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                GMR, the operator of Indira Gandhi International Airport in New Delhi, trusts CPA for round-the-clock runway and taxiway maintenance. Our teams work 24/7, 365 days a year, keeping India&rsquo;s busiest airport safe for millions of travelers.
              </p>
            </div>

            {/* Framed Photograph — 100% Clean Image, Zero Text On Image, Rounded Corners */}
            <div className="p-2.5 sm:p-3 bg-white rounded-xl border-2 border-[#D4A59A]/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[16/11] rounded-lg overflow-hidden border border-[#D4AF37]/50 bg-[#0C1A30]">
                <Image
                  src="/images/projects/igia-terminal-tarmac.jpg"
                  alt="Indira Gandhi International Airport New Delhi Terminal & Apron Tarmac"
                  fill
                  quality={100}
                  unoptimized={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>

              {/* Elegant Caption Below Image */}
              <div className="pt-3 pb-1 px-1 border-t border-slate-100 mt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#101D33] font-sans">
                    Indira Gandhi International Airport, New Delhi
                  </span>
                  <span className="text-[#C27D38] font-mono text-[10px] uppercase font-bold tracking-wider">
                    Airside Pavements
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1 font-sans">
                  Precision night paving, rapid runway repair, and taxiway maintenance under continuous live air traffic.
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-[#475569]">
                  <span>Over 70M+ Passengers Yearly</span>
                  <span className="text-[#C2410C] font-bold">&bull; Zero Runway Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export const CorporateIntroSection = AboutUsSection;
export default AboutUsSection;
