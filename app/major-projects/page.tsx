import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  MAJOR_WORK_DONE_LIST,
  TOTAL_MAJOR_WORK_DONE_VALUE,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "List of Major Projects Done | C P Arora Engineers & Contractors",
  description:
    "Comprehensive track record of 44 major infrastructure contracts completed across national highways, airport runways, and urban road networks by C P Arora Engineers & Contractors Pvt. Ltd.",
};

export default function MajorProjectsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-white">
      {/* ========================================================= */}
      {/* 1. LIST OF MAJOR WORK DONE (HERO & COMPREHENSIVE SCHEDULE) */}
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
                { label: "List of Major Projects Done" },
              ]}
            />
          </div>

          {/* Section Heading — 1000% Liquid Glass Hero Capsule */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
            {/* Liquid Glass Capsule Chassis */}
            <div className="relative group inline-flex flex-col items-center px-8 sm:px-14 py-5 sm:py-7 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-3xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1.5px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:border-white/35">
              {/* Top Specular Rim Reflection Sheen */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none" />

              {/* Ambient Prismatic Glow Inside Glass */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-white/25 via-[#fbcac3]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Eyebrow Liquid Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#fbcac3] text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbcac3] animate-pulse" />
                <span>Historical Track Record &bull; 44 Landmark Contracts</span>
              </div>

              {/* The Heading */}
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]">
                List of major work done
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

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center">
              <span className="block text-[11px] font-mono uppercase text-[#fbcac3] tracking-wider mb-1">
                Total Documented Contracts
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                44 Projects
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center">
              <span className="block text-[11px] font-mono uppercase text-[#fbcac3] tracking-wider mb-1">
                Cumulative Gross Value
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#fbcac3] font-mono">
                ₹ 518.95 Cr
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center">
              <span className="block text-[11px] font-mono uppercase text-[#fbcac3] tracking-wider mb-1">
                Largest Single Contract
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                ₹ 100.67 Cr
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center">
              <span className="block text-[11px] font-mono uppercase text-[#fbcac3] tracking-wider mb-1">
                Key Government Clients
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                NHAI &bull; PWD &bull; DIAL
              </span>
            </div>
          </div>

          {/* Table Chassis Container */}
          <div className="w-full">
            <div className="relative rounded-2xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.45)] border-4 border-[#fbcac3] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[1000px]">
                  {/* Table Header with signature #fbcac3 pink styling matching slides */}
                  <thead>
                    <tr className="bg-gradient-to-r from-[#fedcd7] via-[#fbcac3] to-[#fedcd7] border-b-2 border-[#f2b5a9] text-[#042552]">
                      <th
                        scope="col"
                        className="py-4 px-3 sm:px-4 text-center font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs w-12 border-r border-[#042552]/15"
                      >
                        S.No
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-4 sm:px-6 font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs border-r border-[#042552]/15 min-w-[340px]"
                      >
                        Name Of Work/ Project &amp; Location
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-4 sm:px-6 font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs border-r border-[#042552]/15 min-w-[220px]"
                      >
                        Owner Or Sponsoring Organisation
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-4 sm:px-6 text-right font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs border-r border-[#042552]/15 min-w-[160px]"
                      >
                        Cost Of Work (In Rs. /Gross Work Done)
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-3 sm:px-4 text-center font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs border-r border-[#042552]/15 min-w-[110px]"
                      >
                        Date Of Commencement
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-3 sm:px-4 text-center font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs border-r border-[#042552]/15 min-w-[110px]"
                      >
                        Stipulated Date Of Completion
                      </th>
                      <th
                        scope="col"
                        className="py-4 px-3 sm:px-4 text-center font-sans font-extrabold text-[#042552] uppercase tracking-wider text-[11px] sm:text-xs min-w-[110px]"
                      >
                        Actual Date Of Completion
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body: 44 Rows */}
                  <tbody className="divide-y divide-[#042552]/10 bg-white">
                    {MAJOR_WORK_DONE_LIST.map((row, index) => (
                      <tr
                        key={row.sNo}
                        className={`transition-colors duration-150 hover:bg-[#fbcac3]/20 ${
                          index % 2 === 0 ? "bg-white" : "bg-[#fcf7f6]"
                        }`}
                      >
                        <td className="py-3 px-3 sm:px-4 text-center font-mono font-bold text-[#042552] border-r border-[#042552]/10 text-xs">
                          {row.sNo}
                        </td>
                        <td className="py-3 px-4 sm:px-5 font-normal text-[#1C1917] border-r border-[#042552]/10 leading-relaxed text-xs sm:text-[13px]">
                          {row.nameOfWork}
                        </td>
                        <td className="py-3 px-4 sm:px-5 font-medium text-[#042552] border-r border-[#042552]/10 leading-snug text-xs sm:text-[13px]">
                          {row.owner}
                        </td>
                        <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-[#042552] border-r border-[#042552]/10 whitespace-nowrap tabular-nums text-xs sm:text-[13px]">
                          ₹ {row.cost}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-center font-mono text-[#042552]/80 border-r border-[#042552]/10 whitespace-nowrap text-xs">
                          {row.commencementDate}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-center font-mono text-[#042552]/80 border-r border-[#042552]/10 whitespace-nowrap text-xs">
                          {row.stipulatedDate}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-center font-mono text-[#042552]/80 whitespace-nowrap text-xs">
                          {row.actualDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  {/* Table Footer with Aggregate Portfolio Total */}
                  <tfoot>
                    <tr className="bg-gradient-to-r from-[#fedcd7] via-[#fbcac3] to-[#fedcd7] border-t-2 border-[#f2b5a9] text-[#042552]">
                      <td
                        colSpan={3}
                        className="py-4 px-6 text-center sm:text-right font-sans font-black uppercase tracking-widest text-[#042552] text-xs sm:text-sm"
                      >
                        TOTAL (44 MAJOR PROJECTS):
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-black text-sm sm:text-base text-[#042552] whitespace-nowrap tabular-nums border-r border-[#042552]/15">
                        ₹ {TOTAL_MAJOR_WORK_DONE_VALUE}
                      </td>
                      <td
                        colSpan={3}
                        className="py-4 px-4 text-center font-mono font-bold text-[#042552]/80 text-xs sm:text-sm"
                      >
                        (518.95 Crore Cumulative Gross Work Done)
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Bottom Subtle Sheen */}
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#fbcac3]/40 to-transparent pointer-events-none" />
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="mt-3 text-center sm:hidden text-[11px] font-mono text-slate-400">
              &larr; Scroll horizontally to view complete table breakdown &rarr;
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
