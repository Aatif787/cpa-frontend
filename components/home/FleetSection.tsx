"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";

interface MachineCard {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  aspect: string;
  colSpan?: string;
}

const FLEET_MACHINES: MachineCard[] = [
  {
    src: "/images/fleet/m1.jpg",
    alt: "High capacity asphalt batch mix plant",
    caption: "Computer-controlled Asphalt Mixing Plant",
    credit: "CPA Fleet",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/fleet/m2.jpg",
    alt: "Sensor paver in operation on highway site",
    caption: "Modern Sensor Paver Laying Highway Asphalt",
    credit: "CPA Fleet",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/fleet/m7.jpg",
    alt: "Vibratory tandem roller for asphalt compaction",
    caption: "Heavy Rollers Pressing Road to Required Strength",
    credit: "CPA Fleet",
    aspect: "aspect-[21/9]",
    colSpan: "sm:col-span-2",
  },
];

export const FleetSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
    <SectionContainer theme="offwhite" padding="lg" className="relative overflow-hidden">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Industrial Narrative & Equipment Capabilities */}
        <div
          className={`lg:col-span-5 transition-all duration-800 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Animated Status Pill with Dual Concentric Beacon */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cpa-gold/40 bg-cpa-gold/10 text-cpa-gold-dark text-[11px] font-mono uppercase tracking-widest font-bold mb-4 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cpa-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cpa-gold" />
            </span>
            <span>Capital Assets &bull; 100% Owned Fleet</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-cpa-navy font-sans leading-tight mb-4">
            Industrial Power: Our Owned Machinery Fleet
          </h2>

          <p className="text-sm sm:text-base text-cpa-text-secondary leading-relaxed mb-6 font-normal">
            We do not depend on rented machinery. Direct ownership of modern paving trains and computerized asphalt plants means immediate mobilization, strict temperature control, and zero delays on national highway and airport projects.
          </p>

          {/* Interactive Feature Cards */}
          <div className="space-y-3 mb-6 text-xs sm:text-sm text-cpa-text-primary">
            {[
              {
                title: "Electronic Sensor Pavers (Vögele & Volvo)",
                desc: "Automatic grade and slope sensors lay glass-smooth, level asphalt courses built to withstand continuous heavy freight.",
                code: "01",
              },
              {
                title: "Computer-Controlled Asphalt Batch Plants",
                desc: "High-capacity mixing facilities with eco-friendly bag-house air filtration and precise aggregate temperature monitoring.",
                code: "02",
              },
              {
                title: "High-Tonnage Tandem & Vibratory Rollers",
                desc: "Heavy tandem steel-drum and pneumatic-tyred compaction rollers ensure maximum road density and long-term durability.",
                code: "03",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                style={{
                  transitionDelay: isVisible ? `${200 + idx * 100}ms` : "0ms",
                }}
                className={`p-3.5 bg-cpa-white border border-cpa-surface-border rounded-xl hover:border-cpa-gold hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[#101D33] text-[#F5B82E] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C2410C] group-hover:text-white transition-colors">
                    {item.code}
                  </span>
                  <div>
                    <span className="font-bold text-cpa-navy block group-hover:text-[#C2410C] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs text-cpa-text-secondary mt-1 block leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-navy bg-white px-2.5 py-1 rounded-md border border-cpa-surface-border font-semibold shadow-xs">
              Zero Rental Delays
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-navy bg-white px-2.5 py-1 rounded-md border border-cpa-surface-border font-semibold shadow-xs">
              Direct Temperature Control
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-gold-dark bg-cpa-gold/10 px-2.5 py-1 rounded-md border border-cpa-gold/30 font-semibold shadow-xs">
              Immediate Mobilization
            </span>
          </div>

          <Button href="/infrastructure" variant="primary" size="md">
            View Complete Machinery Inventory &rarr;
          </Button>
        </div>

        {/* Right Column: Cascading Machinery Photographic Showcase */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FLEET_MACHINES.map((machine, idx) => (
            <div
              key={machine.src}
              style={{
                transitionDelay: isVisible ? `${150 + idx * 140}ms` : "0ms",
              }}
              className={`${machine.colSpan || ""} transition-all duration-800 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <figure className="group bg-white border-2 border-cpa-surface-border hover:border-cpa-gold/70 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`relative w-full overflow-hidden bg-[#0C1A30] ${machine.aspect}`}>
                  {/* Subtle Light Beam Reflection on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out pointer-events-none z-10" />

                  <Image
                    src={machine.src}
                    alt={machine.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <figcaption className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs">
                  <span className="text-cpa-navy font-bold leading-snug group-hover:text-[#C2410C] transition-colors">
                    {machine.caption}
                  </span>
                  <span className="text-[10px] font-mono text-cpa-gold font-bold shrink-0 uppercase tracking-widest bg-cpa-gold/10 px-2 py-0.5 rounded-sm">
                    {machine.credit}
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FleetSection;
