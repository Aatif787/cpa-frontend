"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/layout/SectionContainer";

export const OurJourneySection: React.FC = () => {
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

  const milestones = [
    {
      year: "1974",
      title: "The Foundation:",
      desc: "Late Shri C P Arora starts civil contracting in Delhi, building our company step-by-step on hard work and uncompromising quality.",
    },
    {
      year: "1990s",
      title: "Arterial Expansion:",
      desc: "Expansion into Delhi PWD Division I, multi-lane ring roads, flyovers, and major city corridors.",
    },
    {
      year: "2000s",
      title: "Airfield Partnership:",
      desc: "GMR selects CPA for 24/7 runway and taxiway pavement maintenance at New Delhi's international airport.",
    },
    {
      year: "Today",
      title: "₹700 Cr Scale & Smart Highways:",
      desc: "16-lane expressways, automated sensor paving, and digital highway intelligence with VaiRaj EnginCo.",
    },
  ];

  return (
    <SectionContainer theme="white" padding="md" id="our-journey" className="relative border-t border-slate-100 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none animate-aura-glow" />

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Portrait of Late Shri. Chander Prakash Arora with Golden Halo Aura */}
        <div
          className={`lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[705/1000] border-2 sm:border-[3px] border-[#A84A38] bg-[#0C1A30] shadow-[0_16px_50px_rgba(212,175,55,0.25)] overflow-hidden rounded-xl ring-2 ring-cpa-gold/40 group">
            {/* Subtle vintage gold corner glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

            {/* Subtle Glint Sheen on Hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out pointer-events-none z-10" />

            <Image
              src="/images/team/chander-arora.jpg"
              alt="Late Shri. Chander Prakash Arora - Founder of C P Arora"
              fill
              quality={95}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 420px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Right Column: Narrative of the Journey & Animated Vertical Milestone Stepper */}
        <div
          className={`lg:col-span-7 space-y-4 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Section Heading */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B83B26] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B83B26] font-bold">
                Heritage &bull; Five Decades of Nation Building
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight font-sans uppercase leading-tight">
              <span className="text-[#B83B26]">OUR </span>
              <span className="text-[#101D33]">JOURNEY</span>
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-[#B83B26] mt-1 font-sans">
              Late Shri Chander Prakash Arora &bull; Founder &amp; Guiding Light
            </h3>
          </div>

          {/* Elegant Founder Quote Card with Shimmer Border */}
          <div className="p-4 sm:p-5 bg-[#FAF7F2] border-l-4 border-[#B83B26] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 text-6xl text-[#B83B26]/10 font-serif select-none pointer-events-none">
              &rdquo;
            </div>
            <p className="text-sm sm:text-base font-serif italic text-[#1E293B] leading-relaxed relative z-10">
              &ldquo;When you pave a road with honesty and precision, you build the foundation of an entire nation.&rdquo;
            </p>
            <span className="block text-xs font-mono uppercase tracking-wider text-[#B83B26] font-bold mt-2 relative z-10">
              &mdash; Late Shri Chander Prakash Arora, Founder
            </span>
          </div>

          {/* 4-Step Heritage Milestones with Cascading Ladder Animation & Connecting Line */}
          <div className="space-y-3 pt-1 relative">
            {/* Animated Connecting Vertical Line */}
            <div
              className={`absolute left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#B83B26] via-[#D4AF37] to-[#101D33] rounded-full transition-transform duration-1000 ease-out origin-top hidden sm:block ${
                isVisible ? "scale-y-100 opacity-60" : "scale-y-0 opacity-0"
              }`}
            />

            {milestones.map((milestone, idx) => (
              <div
                key={milestone.year}
                style={{
                  transitionDelay: isVisible ? `${200 + idx * 120}ms` : "0ms",
                }}
                className={`flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#D4AF37] hover:bg-white hover:shadow-md hover:translate-x-2 transition-all duration-300 group relative ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <span className="px-3 py-1 rounded-lg bg-[#101D33] text-[#F5B82E] font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#C2410C] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {milestone.year}
                </span>
                <p className="text-xs sm:text-sm text-[#475569] leading-snug">
                  <strong className="text-[#101D33] group-hover:text-[#B83B26] transition-colors">
                    {milestone.title}{" "}
                  </strong>
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Classical Corporate Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/about-us/board-of-directors"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#101D33] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#1a2f52] transition-all rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Meet Board of Directors &rarr;
            </Link>
            <Link
              href="/about-us/company-profile"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[#101D33]/30 text-[#101D33] text-xs sm:text-sm font-semibold tracking-wide uppercase hover:border-[#101D33] hover:bg-[#101D33]/5 transition-all rounded-lg"
            >
              Read Company Profile
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default OurJourneySection;
