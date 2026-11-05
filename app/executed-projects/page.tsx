import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { KEY_EXECUTED_PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Executed Projects | C P Arora Engineers & Contractors",
  description:
    "Verified completed highway, runway, airport, and urban infrastructure projects delivered by C P Arora Engineers & Contractors Pvt. Ltd.",
};

export default function ExecutedProjectsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-white">
      {/* ========================================================= */}
      {/* 1. EXECUTED KEY PROJECTS (HERO SHOWCASE SECTION)          */}
      {/* ========================================================= */}
      <section className="relative bg-[#042552] text-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b-4 border-[#fbcac3]/40 overflow-hidden">
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

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 sm:mb-8">
            <Breadcrumb
              theme="dark"
              items={[
                { label: "Projects", href: "/projects" },
                { label: "Executed Projects" },
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
                <span>Verified Handover &bull; Certified Performance</span>
              </div>

              {/* The Heading */}
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]">
                Executed Key Projects
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

          {/* 3-Column Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16 items-stretch">
            {KEY_EXECUTED_PROJECTS.map((proj, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                <div className="w-full flex flex-col h-full">
                  {/* Framed Image with exact #fbcac3 border */}
                  <div className="relative aspect-[4/5] w-full border-[6px] border-[#fbcac3] shadow-2xl overflow-hidden bg-[#042552] flex items-center justify-center">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-1.5 transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Text Description & Metadata Below Image */}
                  <div className="mt-5 sm:mt-6 flex flex-col flex-1 justify-between">
                    {/* Title with uniform min-height */}
                    <div className="min-h-[120px] sm:min-h-[145px]">
                      {proj.title ? (
                        <h2 className="text-white text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                          {proj.title}
                        </h2>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>

                    {/* Metadata block pinned uniformly at the bottom */}
                    <div className="mt-5 pt-3.5 border-t border-white/10 space-y-1 sm:space-y-1.5 text-xs sm:text-[13px] font-sans text-slate-100 min-h-[96px] flex flex-col justify-end">
                      <p className="leading-snug">
                        <span className="font-semibold text-slate-200">PROJECT COST: </span>
                        <span className="text-white font-medium whitespace-pre-line">{proj.projectCost}</span>
                      </p>
                      <p className="leading-snug">
                        <span className="font-semibold text-slate-200">DATE OF WORK ORDER: </span>
                        <span className="text-white font-medium whitespace-pre-line">{proj.workOrderDate}</span>
                      </p>
                      <p className="leading-snug">
                        <span className="font-semibold text-slate-200">CLIENT : </span>
                        <span className="text-white font-medium whitespace-pre-line">{proj.client}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
