"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "@/components/layout/Container";

interface StatItem {
  target: number;
  label: string;
  padZero?: boolean;
}

const stats: StatItem[] = [
  { target: 11, label: "PROJECTS AWARDED" },
  { target: 7, label: "STATES COVERED", padZero: true },
  { target: 9, label: "ATMS SUB-SYSTEMS", padZero: true },
  { target: 7, label: "CLIENTS SERVED", padZero: true },
];

const tags = [
  "ATMS & Traffic Management",
  "Multi-Lane Free Flow Tolling",
  "Toll Management Systems",
  "Variable Message Signs",
  "CCTV & Video Incident Detection",
  "Optical Fibre & Electrical Works",
];

// Animated Number Counter Component
const AnimatedCounter: React.FC<{ target: number; padZero?: boolean; active: boolean }> = ({
  target,
  padZero = false,
  active,
}) => {
  const [count, setCount] = useState(target);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!active || animatedRef.current) return;
    animatedRef.current = true;

    const duration = 1200; // 1.2s count up
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [active, target]);

  const display = padZero && count < 10 ? `0${count}` : `${count}`;
  return <span>{display}</span>;
};

export const VaiRajNewsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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
      id="group-news"
      className="relative w-full py-14 sm:py-18 lg:py-22 overflow-hidden"
      style={{
        backgroundColor: "#EDF2F7",
        background:
          "linear-gradient(145deg, #F8FAFC 0%, #EEF2F6 45%, #E2E8F0 100%)",
        boxShadow:
          "inset 0 4px 16px 0 rgba(255, 255, 255, 0.95), inset 0 -4px 16px 0 rgba(148, 163, 184, 0.22)",
        borderTop: "1px solid rgba(255, 255, 255, 0.9)",
        borderBottom: "1px solid rgba(203, 213, 225, 0.7)",
      }}
    >
      {/* Living Dynamic Ambient Glow Orbs for Optical Glass Refraction */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#DF7D74]/20 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 rounded-full bg-[#042552]/15 blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#DFBF62]/20 blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Subtle Refracted Architectural Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(4, 37, 82, 0.16) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="relative z-10">
        {/* Sculpted 3D Neumorphic + Frosted Glass Main Plate with Dynamic Light Sheen */}
        <div
          ref={ref}
          className="relative w-full p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/80 transition-all duration-300 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(248, 250, 252, 0.62) 100%)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow:
              "14px 14px 32px 0 rgba(148, 163, 184, 0.28), -14px -14px 32px 0 rgba(255, 255, 255, 0.95), inset 1px 1px 2px 0 rgba(255, 255, 255, 0.95)",
          }}
        >
          {/* Sweeping Specular Glass Sheen across the frosted surface */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-glass-sheen" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Group Announcement, Narrative, Chips & Link (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Badge: GROUP NEWS with Neumorphic Inset Pill & Live Radar Pulse */}
              <div>
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border border-[#DF7D74]/40 text-[#DF7D74] text-[11px] font-mono tracking-[0.2em] uppercase font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(241, 245, 249, 0.75) 100%)",
                    boxShadow:
                      "inset 2px 2px 4px rgba(148, 163, 184, 0.22), inset -2px -2px 4px rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DF7D74] opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DF7D74]" />
                  </span>
                  GROUP NEWS
                </span>
              </div>

              {/* Heading & Subtitle */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight leading-tight">
                  <span className="text-[#042552]">VAIRAJ ENGINCO </span>
                  <span className="text-[#DF7D74]">LIMITED</span>
                </h2>
                <p className="text-sm sm:text-base text-[#64748B] font-sans font-light tracking-wide mt-1">
                  A Part Of C P Arora Private Limited
                </p>
              </div>

              {/* Narrative Paragraphs matching reference text */}
              <div className="space-y-3 text-[13px] sm:text-[14px] text-[#475569] leading-relaxed">
                <p>
                  We are proud to announce that C P Arora Private Limited has taken over{" "}
                  <strong className="text-slate-900 font-semibold">VaiRaj EnginCo Limited</strong>, a
                  New Delhi based engineering company specialising in Intelligent Transportation
                  Systems (ITS), Advanced Traffic Management Systems (ATMS), highway safety solutions,
                  electrical infrastructure, optical fibre networks and surveillance systems.
                </p>
                <p>
                  VaiRaj designs, supplies, installs, tests, commissions and maintains complete
                  highway technology packages for EPC and HAM contractors on Bharatmala Pariyojana,
                  NHDP and NH(O) corridors, and manufactures its own Variable Message Sign systems
                  in-house.
                </p>
                <p>
                  Together, our civil construction strength and VaiRaj&apos;s intelligent
                  infrastructure expertise let us deliver roads that are not only built to last, but
                  also smart, safe and connected.
                </p>
              </div>

              {/* Category Chips / Tags with Sculpted Neumorphic + Glass Emboss & Tactile Hover */}
              <div className="flex flex-wrap gap-2.5 pt-1 pb-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs text-[#1E293B] font-medium px-3.5 py-1.5 rounded-md transition-all duration-200 cursor-default hover:text-[#042552] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#DF7D74]/50 hover:shadow-[4px_4px_12px_rgba(148,163,184,0.32),-3px_-3px_8px_rgba(255,255,255,0.95)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.75) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.85)",
                      boxShadow:
                        "3px 3px 8px rgba(148, 163, 184, 0.22), -3px -3px 8px rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Minimalist Neumorphic Link: Visit vairajec.com -> with Interactive Hover Motion */}
              <div className="pt-2">
                <a
                  href="https://vairajec.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm sm:text-[15px] font-semibold text-[#DF7D74] transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[6px_6px_14px_rgba(148,163,184,0.32),-4px_-4px_12px_rgba(255,255,255,0.98)] active:shadow-[inset_2px_2px_5px_rgba(148,163,184,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(241, 245, 249, 0.8) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    boxShadow:
                      "4px 4px 10px rgba(148, 163, 184, 0.25), -4px -4px 10px rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <span>Visit vairajec.com</span>
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: 2x2 Metric Stats Grid with Tactile 3D Neumorphic Navy Tiles */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative py-7 sm:py-9 px-4 sm:px-6 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 ease-out group hover:-translate-y-2 hover:shadow-[12px_12px_28px_rgba(148,163,184,0.45),-8px_-8px_20px_rgba(255,255,255,0.95)] overflow-hidden cursor-default"
                    style={{
                      background:
                        "linear-gradient(135deg, #072e63 0%, #042552 50%, #031b3d 100%)",
                      boxShadow:
                        "8px 8px 20px rgba(148, 163, 184, 0.35), -6px -6px 16px rgba(255, 255, 255, 0.85), inset 1px 1px 1px rgba(255, 255, 255, 0.25), inset -1px -1px 2px rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    {/* Subtle card sheen on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>

                    <span className="text-4xl sm:text-5xl font-black text-[#DFBF62] tracking-tight font-sans drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(223,191,98,0.7)]">
                      <AnimatedCounter target={stat.target} padZero={stat.padZero} active={isVisible} />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-widest mt-2 leading-tight transition-colors duration-300 group-hover:text-amber-100">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VaiRajNewsSection;
