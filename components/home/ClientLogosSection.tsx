import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import LogoStrip from "@/components/ui/LogoStrip";

const PARTNER_LOGOS = [
  { name: "KMC Construction Limited", src: "/images/partners/kmc.jpg" },
  { name: "Rock-Tech Projects", src: "/images/partners/rock-tech.jpg" },
  { name: "Unitech Limited", src: "/images/partners/unitech.jpg" },
  { name: "Unity Infraprojects Limited", src: "/images/partners/unity.jpg" },
];

export const ClientLogosSection: React.FC = () => {
  return (
    <SectionContainer theme="white" padding="md" className="border-t border-slate-100 relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#B83B26] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B83B26] font-bold">
            Trust &bull; Joint Ventures
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#101D33] font-sans">
          Institutional Clients &amp; Joint-Venture Partners
        </h3>
        <p className="text-xs text-slate-500 font-sans mt-1">
          Delivering critical public highway infrastructure alongside leading engineering consortia
        </p>
      </div>
      <LogoStrip
        logos={PARTNER_LOGOS}
        theme="light"
      />
    </SectionContainer>
  );
};

export default ClientLogosSection;
