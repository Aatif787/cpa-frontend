import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "We undertake construction, improvement and upgradation, and maintenance of various roads and highways.",
  keywords: [
    "C P Arora Projects",
    "Ongoing Projects",
    "Executed Projects",
    "List of Major Projects Done",
    "Highway Construction Contracts",
    "Road Maintenance India",
  ],
  openGraph: {
    title: "Projects | C P Arora Engineers & Contractors",
    description:
      "We undertake construction, improvement and upgradation, and maintenance of various roads and highways.",
    url: "https://cparora.com/projects",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/projects/terminal3-highway-hd.jpg",
        width: 1024,
        height: 725,
        alt: "C P Arora Projects — Terminal 3 Approach Highway",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsPage() {
  const projectSubheadings = [
    {
      title: "Ongoing Projects",
      href: "/ongoing-projects",
    },
    {
      title: "Executed Projects",
      href: "/executed-projects",
    },
    {
      title: "List of Major Projects Done",
      href: "/major-projects",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-white min-h-[calc(100vh-120px)] relative overflow-hidden">
      {/* Subtle Ambient Background Depth (matching Ongoing Projects & Core Team) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(251,202,195,0.12)_0%,rgba(4,37,82,0.4)_50%,transparent_75%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top Specular Sheen Line matching liquid navbar */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
      </div>

      <Container className="relative z-10 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 sm:mb-10">
          <Breadcrumb
            theme="dark"
            items={[{ label: "Projects" }]}
          />
        </div>

        {/* 2-Column Exact Layout Matching Reference Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto w-full">
          {/* Left Column: 3 Subheadings at Top, Projects Title & Description at Bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            {/* The 3 Exact Subheadings */}
            <div className="space-y-7 sm:space-y-9 mb-12 sm:mb-14">
              {projectSubheadings.map((sub, idx) => (
                <div key={idx}>
                  <Link
                    href={sub.href}
                    className="group inline-flex items-center gap-3 text-2xl sm:text-[28px] lg:text-[31px] font-sans font-normal text-white hover:text-cpa-gold transition-all duration-200"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-2">
                      {sub.title}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-cpa-gold text-2xl">
                      &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom: Projects Heading & Exact Paragraph */}
            <div className="pt-2 sm:pt-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-sans text-white tracking-tight mb-3">
                Projects
              </h1>
              <p className="text-base sm:text-lg lg:text-[19px] text-slate-200 font-light leading-relaxed max-w-md">
                We undertake construction, improvement and upgradation, and maintenance of various roads and highways.
              </p>
            </div>
          </div>

          {/* Right Column: Terminal 3 Highway Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[580px] aspect-[4/3] overflow-hidden shadow-2xl bg-black/40 border border-white/20 transition-all duration-500 hover:border-cpa-gold/50">
              <Image
                src="/images/projects/terminal3-highway-hd.jpg"
                alt="Terminal 3 Road Approach & Overhead Signage — CPA Projects"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
                priority
              />
              {/* Subtle sheen highlight on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
