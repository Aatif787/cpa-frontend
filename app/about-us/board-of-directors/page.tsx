import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Executive board and corporate leadership of C P Arora — Ms Ridhima Arora (Chair Person), Mr. Karun Arora (Managing Director), Vansh Karun Arora (Director), and Mr. Shamim Alam (Director).",
  keywords: [
    "C P Arora Board of Directors",
    "Ms Ridhima Arora",
    "Mr. Karun Arora",
    "Vansh Karun Arora",
    "Mr. Shamim Alam",
    "Infrastructure Leadership India",
    "Civil Engineering Directors",
  ],
  openGraph: {
    title: "Board of Directors | C P Arora Engineers & Contractors",
    description:
      "Executive board and corporate leadership of C P Arora — Ms Ridhima Arora (Chair Person), Mr. Karun Arora (Managing Director), Vansh Karun Arora (Director), and Mr. Shamim Alam (Director).",
    url: "https://cparora.com/about-us/board-of-directors",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/team/karun-arora.jpg",
        width: 705,
        height: 1000,
        alt: "Mr. Karun Arora — Managing Director",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

interface Director {
  name: string;
  designation: string;
  image: string;
  paragraphs: string[];
}

const DIRECTORS: Director[] = [
  {
    name: "Ms Ridhima Arora",
    designation: "Chair Person",
    image: "/images/team/ridhima-arora.jpg",
    paragraphs: [
      "The lady at the top of the company, while being in the capacity of the Chair Person of this organisation is Mrs. Ridhima Arora. The company acknowledge the contribution of our Chair Person in having managed the overall performance of the company by keeping a constant vigil over the performance of the company at all fronts while primarily looking into the financial outcome of the company from the various projects being undertaken by giving its valuable suggestion in handling the liquid asset of the company from time to time.",
    ],
  },
  {
    name: "Mr. Karun Arora",
    designation: "Managing Director",
    image: "/images/team/karun-arora.jpg",
    paragraphs: [
      "Mr. Karun Arora, the Managing Director of our company, has remained associated with this company from the last more than 18 years while being at the age when he was merely 21 years old. However, since the time of his joining this company he remained actively involved in understanding the various activity of the company engaged in either the execution of the various road projects or in the production of the bituminous or non bituminous material required for execution of such project but after the sudden demise of Mr. C.P. Arora in the year 2007, the founder of our company, our managing director became more than busy in discharging the entire responsibility which came of his shoulder after he took the charge of the chair of Late Mr. C.P. Arora after him.",
      "One of the important mantra, our managing director understood very clearly from his father was that sky was the limit to the quality and the only way out to the success of every project with the best quality was sincere and hard work without having any shortcut for this and this is what is being tried to be implemented in our company at everything we undertake.",
    ],
  },
  {
    name: "Vansh Karun Arora",
    designation: "Director",
    image: "/images/team/vansh-arora.jpg",
    paragraphs: [
      "As a young and aspiring entrepreneur, Mr. Vansh Karun Arora ,son of Mr. Karun Arora has contributed greatly to the growth of the company with his dedication and hard work. Currently pursuing BBA, he has been instrumental in helping the organization grow exponentially. Using the right blend of business skills, confidence and determination, he has effectively collaborated with other team members to ensure timely achievement of the organization's goals.",
    ],
  },
  {
    name: "Mr. Shamim Alam",
    designation: "Director",
    image: "/images/team/shamim-alam.jpg",
    paragraphs: [
      "Mr. Shamim Alam is one of the directors on-board. With vast experience in the construction industry, he contributed well to strengthen the company as a market leader in its field. The day when he associated, his guidance paved the way for the success to the company. His passion for excellence achieved heights of success.",
    ],
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#020e1f] text-white relative overflow-hidden">
      {/* Ambient Lighting & Geometric Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top radial ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(223,191,98,0.12)_0%,rgba(4,37,82,0.3)_45%,transparent_75%)]" />
        {/* Subtle executive grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Vignette edge shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020e1f]/50 to-[#020e1f]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Dignified Executive Header — 1000% Liquid Glass Hero */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
              <li>
                <Link href="/" className="hover:text-cpa-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link href="/about-us/company-profile" className="hover:text-cpa-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-cpa-gold font-semibold">Board of Directors</li>
            </ol>
          </nav>

          {/* Liquid Glass Capsule Chassis */}
          <div className="relative group inline-flex flex-col items-center px-8 sm:px-14 py-6 sm:py-8 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-3xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1.5px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:border-white/35 max-w-3xl">
            {/* Top Specular Rim Reflection Sheen */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none" />

            {/* Ambient Prismatic Glow Inside Glass */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-white/25 via-cpa-gold/15 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Eyebrow Liquid Badge */}
            <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-cpa-gold text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold animate-pulse" />
              <span>Executive Governance</span>
            </div>

            {/* Title */}
            <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)] mb-3 leading-tight">
              Board of Directors
            </h1>

            {/* Gold Accent Rule */}
            <div className="relative z-10 flex items-center justify-center gap-2.5 mb-3.5">
              <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-cpa-gold" />
              <div className="relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 rotate-45 bg-cpa-gold shadow-[0_0_10px_#e5a93c]" />
                <div className="absolute inset-0 rotate-45 bg-white/60 animate-ping opacity-40" />
              </div>
              <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-cpa-gold" />
            </div>

            {/* Subtitle */}
            <p className="relative z-10 text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-xl mx-auto text-center">
              Directing strategic growth, modern highway machinery fleet investments, and civil infrastructure excellence across India.
            </p>

            {/* Bottom Liquid Edge Line */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* The 4 Executive Director Cards */}
        <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto">
          {DIRECTORS.map((director, index) => (
            <article
              key={director.name}
              className="group relative rounded-xl bg-gradient-to-br from-[#061e3d]/80 via-[#031429]/90 to-[#020d1c]/95 border border-white/10 hover:border-cpa-gold/50 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:shadow-black/60 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start"
            >
              {/* Corner Gold Accent Flairs */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cpa-gold/20 rounded-tr-xl group-hover:border-cpa-gold/60 transition-colors pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cpa-gold/20 rounded-bl-xl group-hover:border-cpa-gold/60 transition-colors pointer-events-none" />

              {/* Executive Framed Portrait */}
              <div className="shrink-0 relative">
                {/* Layered Framing with Gold Hairline & Soft Shadow */}
                <div className="relative p-1.5 rounded-lg bg-gradient-to-br from-white/15 via-cpa-gold/20 to-transparent border border-white/20 group-hover:border-cpa-gold/70 shadow-2xl transition-all duration-500">
                  <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-md overflow-hidden bg-cpa-navy">
                    <Image
                      src={director.image}
                      alt={`${director.name} — ${director.designation}`}
                      fill
                      sizes="(max-width: 640px) 192px, 224px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 2}
                    />
                    {/* Subtle internal vignette for photographic depth */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Director Index Indicator */}
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded bg-[#020e1f] border border-cpa-gold/40 text-[10px] font-mono text-cpa-gold shadow-md">
                  0{index + 1}
                </div>
              </div>

              {/* Bio Content & Hierarchy */}
              <div className="flex-1 flex flex-col justify-start text-center sm:text-left w-full">
                {/* Designation Pill Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold text-cpa-gold bg-cpa-gold/10 border border-cpa-gold/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold" />
                    <span>{director.designation}</span>
                  </span>
                </div>

                {/* Name */}
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight mb-3 group-hover:text-cpa-gold transition-colors duration-300">
                  {director.name}
                </h2>

                {/* Hairline Divider with Gold Glow */}
                <div className="w-full h-px bg-gradient-to-r from-cpa-gold/40 via-white/10 to-transparent mb-4 sm:mb-5 mx-auto sm:mx-0" />

                {/* Exact Biographical Text */}
                <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-normal">
                  {director.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-justify sm:text-left">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
