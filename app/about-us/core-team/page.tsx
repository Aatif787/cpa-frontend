import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Core Team",
  description:
    "Core engineering, operational, and site management professionals driving civil execution and highway paving at C P Arora.",
  keywords: [
    "C P Arora Core Team",
    "Civil Engineering Team",
    "Highway Project Managers",
    "Quality Control Engineers",
    "Asphalt Plant Technicians",
  ],
  openGraph: {
    title: "Core Team | C P Arora Engineers & Contractors",
    description:
      "Core engineering, operational, and site management professionals driving civil execution and highway paving at C P Arora.",
    url: "https://cparora.com/about-us/core-team",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/team/jay-prakash.jpg",
        width: 566,
        height: 600,
        alt: "C P Arora Core Team",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

interface TeamMember {
  id: string;
  name: string;
  image: string;
}

// Exactly 19 verified core team portraits in the exact order of company slides
const CORE_TEAM_MEMBERS: TeamMember[] = [
  // Slide 1
  { id: "cpa-01", name: "Jay Prakash", image: "/images/team/jay-prakash.jpg" },
  { id: "cpa-02", name: "Rakesh Shokeen", image: "/images/team/rakesh-shokeen.jpg" },
  { id: "cpa-03", name: "Rajnish Chouhan", image: "/images/team/rajnish-chouhan.jpg" },
  { id: "cpa-04", name: "Mohit Sahni", image: "/images/team/mohit-sahni.jpg" },
  { id: "cpa-05", name: "Sachin Dhawan", image: "/images/team/sachin-dhawan.jpg" },
  { id: "cpa-06", name: "Dharmendar Kumar", image: "/images/team/dharmendar-kumar.jpg" },
  { id: "cpa-07", name: "Sasank", image: "/images/team/sasank.jpg" },
  { id: "cpa-08", name: "Saroj Mishra", image: "/images/team/saroj-mishra.jpg" },
  // Slide 2
  { id: "cpa-09", name: "Arun Sahoo", image: "/images/team/arun-sahoo.jpg" },
  { id: "cpa-10", name: "Rakesh Puri", image: "/images/team/rakesh-puri.jpg" },
  { id: "cpa-11", name: "Arun Singh", image: "/images/team/arun-singh.jpg" },
  { id: "cpa-12", name: "Sachin Khanna", image: "/images/team/sachin-khanna.jpg" },
  { id: "cpa-13", name: "Chandan Ghandhi", image: "/images/team/chandan-ghandhi.jpg" },
  { id: "cpa-14", name: "Rakesh Kumar", image: "/images/team/rakesh-kumar.jpg" },
  { id: "cpa-15", name: "Nitish Saini", image: "/images/team/nitish-saini.jpg" },
  { id: "cpa-16", name: "Love Kumar", image: "/images/team/love-kumar.jpg" },
  // Slide 3
  { id: "cpa-17", name: "S.B. Tripathi", image: "/images/team/sb-tripathi.jpg" },
  { id: "cpa-18", name: "Yogesh Kumar", image: "/images/team/yogesh-kumar.jpg" },
  { id: "cpa-19", name: "Debendra Kumar", image: "/images/team/debendra-kumar.jpg" },
];

export default function CoreTeamPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-white relative overflow-hidden">
      {/* Subtle Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(251,202,195,0.14)_0%,rgba(4,37,82,0.4)_50%,transparent_75%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative z-10 py-8 sm:py-12 lg:py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumb
            theme="dark"
            items={[
              { label: "About Us", href: "/about-us/company-profile" },
              { label: "Core Team" },
            ]}
          />
        </div>

        {/* Section Heading — 1000% Liquid Glass Hero Capsule */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          {/* Liquid Glass Capsule Chassis */}
          <div className="relative group inline-flex flex-col items-center px-8 sm:px-14 py-5 sm:py-7 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-3xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1.5px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:border-white/35">
            {/* Top Specular Rim Reflection Sheen */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none" />

            {/* Ambient Prismatic Glow Inside Glass */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-white/25 via-[#fbcac3]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Eyebrow Liquid Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#fbcac3] text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fbcac3] animate-pulse" />
              <span>Engineering Leadership</span>
            </div>

            {/* The Heading */}
            <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]">
              Core Team
            </h1>

            {/* Liquid Divider Bar */}
            <div className="relative z-10 flex items-center justify-center gap-2.5 mt-3 sm:mt-4">
              <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#fbcac3]" />
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 rotate-45 bg-[#fbcac3] shadow-[0_0_10px_#fbcac3]" />
                <div className="absolute inset-0 rotate-45 bg-white/60 animate-ping opacity-40" />
              </div>
              <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#fbcac3]" />
            </div>

            {/* Bottom Liquid Edge Line */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 4-Column Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {CORE_TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id}
              className="group relative"
              title={member.name}
            >
              {/* Framed Image with exact #fbcac3 border */}
              <div className="relative aspect-square w-full border-[6px] border-[#fbcac3] shadow-2xl overflow-hidden bg-black/40 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  priority={idx < 8}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
