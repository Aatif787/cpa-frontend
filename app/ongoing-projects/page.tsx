import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  WORK_ORDER_SCHEDULE_PART_1,
  WORK_ORDER_SCHEDULE_PART_2,
  TOTAL_WORK_ORDER_VALUE,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "Active civil engineering works, national highway widening, and ongoing bituminous asphalt paving contracts executed by C P Arora across India.",
  keywords: [
    "C P Arora Ongoing Projects",
    "Active Highway Works",
    "Road Widening Projects",
    "Asphalt Paving Contracts India",
    "MoRTH Section 500 Paving",
  ],
  openGraph: {
    title: "Ongoing Projects | C P Arora Engineers & Contractors",
    description:
      "Active civil engineering works, national highway widening, and ongoing bituminous asphalt paving contracts executed by C P Arora across India.",
    url: "https://cparora.com/ongoing-projects",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/projects/project1.jpg",
        width: 2400,
        height: 2400,
        alt: "C P Arora On Going Key Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

interface KeyOngoingProject {
  title: string;
  image: string;
  alt: string;
  projectCost?: string;
  workOrderDate: string;
  client: string;
}

const KEY_ONGOING_PROJECTS: KeyOngoingProject[] = [
  // Slide 1 - Key On Going Projects
  {
    title:
      "Six/Four Laning of NH-5 (New NH 16) from Puintola to Tangi (Km. 284.00 to Km 355.00) in the state of Odisha on EPC Mode.",
    image: "/images/projects/project1.jpg",
    alt: "Six/Four Laning of NH-5 (New NH 16) from Puintola to Tangi in the state of Odisha on EPC Mode",
    projectCost: "438.00 Crore",
    workOrderDate: "04-06-2021",
    client: "NHAI/ Punj Llyod Ltd, Gurugram",
  },
  {
    title:
      "Construction of various security Structures at Airside at IGI Airport New Delhi",
    image: "/images/projects/project2.jpg",
    alt: "Construction of various security Structures at Airside at IGI Airport New Delhi",
    workOrderDate: "07-01-2021",
    client: "GMR, DIAL,IGI Airport New Delhi",
  },
  {
    title:
      "ARMO Contract for Road works in Landside Area at IGI Airport, New Delhi New Delhi",
    image: "/images/projects/project3.jpg",
    alt: "ARMO Contract for Road works in Landside Area at IGI Airport, New Delhi New Delhi",
    workOrderDate: "07-01-2021",
    client: "GMR, DIAL,IGI Airport New Delhi.",
  },
  // Slide 2 - Key On Going Projects ("and then this")
  {
    title:
      "Annual rate contract of Road Marking Road furniture work in Land Site Area of T1,T2 and T3 of IGI Airport, New Delhi",
    image: "/images/projects/igi-terminal-furniture.jpg",
    alt: "Annual rate contract of Road Marking Road furniture work in Land Site Area of T1,T2 and T3 of IGI Airport, New Delhi",
    workOrderDate: "14-12-2021",
    client: "GMR, DIAL,IGI Airport New Delhi",
  },
  {
    title:
      "Strengthening of Pankha Road Bhagwan Mahavir Mandir Marg (KaliMata Mandir To Dabri Flyover) and Shani Bazar Road (Shri Radha Krishna Thakur Marg (ID-1160) from Vidya Marg to Dabri road Janakpuri under Division WR-1, Janakpuri,New Delhi",
    image: "/images/projects/janakpuri-under-division.jpg",
    alt: "Strengthening of Pankha Road Bhagwan Mahavir Mandir Marg and Shani Bazar Road Janakpuri under Division WR-1, New Delhi",
    workOrderDate: "26-05-2020",
    client: "PWD, Delhi",
  },
  {
    title:
      "Comprehensive Maintenance various road under South west Road Division-- 2 PWD, New Delhi (SH: Civil works cleaning of Roads including carriage way, Footpaths, Central Verge, Service Road etc. within the right way)",
    image: "/images/projects/project4.jpg",
    alt: "Comprehensive Maintenance various road under South west Road Division-- 2 PWD, New Delhi",
    workOrderDate: "14-02-2020",
    client: "PWD, Delhi",
  },
  // Slide 3 - Key On Going Projects ("add this also in ongoing projects and perfectly align")
  {
    title:
      "Strengthening of roads of pankha road (ID 1155) underPWD,SWR-II Division New Delhi .B Strengthening of roads of Pt. Vishnu Dutt Marg (ID 1224) and Connecting road (ID 1225) at Janak Puri under PWD SWR-II division New Delhi. Strengthening of Palam Dabri Road",
    image: "/images/projects/pankha-swr2-roller.jpg",
    alt: "Strengthening of roads of pankha road under PWD SWR-II Division New Delhi",
    workOrderDate: "09-01-2020",
    client: "PWD, Delhi",
  },
];

export default function OngoingProjectsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-[#14171A]">
      {/* ========================================================= */}
      {/* 1. ON GOING KEY PROJECTS (FIRST SHOWCASE SECTION)         */}
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
                { label: "Ongoing Projects" },
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
                <span>Active Infrastructure</span>
              </div>

              {/* The Heading */}
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]">
                On Going Key Projects
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
            {KEY_ONGOING_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className={`group flex flex-col h-full ${
                  idx === 6
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2 flex justify-center"
                    : ""
                }`}
              >
                <div className={`w-full flex flex-col h-full ${idx === 6 ? "md:max-w-[calc(50%-1rem)] lg:max-w-none" : ""}`}>
                  {/* Framed Image with exact #fbcac3 border */}
                  <div className="relative aspect-square w-full border-[6px] border-[#fbcac3] shadow-2xl overflow-hidden bg-black/40">
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 3}
                    />
                  </div>

                  {/* Text Description & Metadata Below Image */}
                  <div className="mt-5 sm:mt-6 flex flex-col flex-1 justify-between">
                    {/* Title with matching min-height so metadata baselines align perfectly */}
                    <div className={idx < 3 ? "min-h-[64px] sm:min-h-[72px]" : "min-h-[120px] sm:min-h-[135px]"}>
                      <h2 className="text-white text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                        {proj.title}
                      </h2>
                    </div>

                    {/* Metadata block pinned uniformly at the bottom */}
                    <div className="mt-5 pt-3.5 border-t border-white/10 space-y-1 sm:space-y-1.5 text-xs sm:text-[13px] font-sans text-slate-100 min-h-[68px] flex flex-col justify-end">
                      {proj.projectCost && (
                        <p className="leading-snug">
                          <span className="font-semibold text-slate-200">PROJECT COST: </span>
                          <span className="text-white font-medium">{proj.projectCost}</span>
                        </p>
                      )}
                      <p className="leading-snug">
                        <span className="font-semibold text-slate-200">DATE OF WORK ORDER: </span>
                        <span className="text-white font-medium">{proj.workOrderDate}</span>
                      </p>
                      <p className="leading-snug">
                        <span className="font-semibold text-slate-200">CLIENT : </span>
                        <span className="text-white font-medium">{proj.client}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* 1.1 WORK ORDER & CONTRACT SCHEDULE (EXACT FROM SLIDE)     */}
          {/* ========================================================= */}
          <div className="mt-20 sm:mt-24 pt-12 border-t-2 border-[#fbcac3]/30">
            {/* Dignified Table Header */}
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 flex flex-col items-center">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)] mb-3">
                Work Order &amp; Contract Schedule
              </h2>

              {/* Accent Divider */}
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fbcac3]" />
                <div className="w-2 h-2 rotate-45 bg-[#fbcac3] shadow-[0_0_8px_#fbcac3]" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#fbcac3]" />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl text-center font-light leading-relaxed">
                Official statement of major ongoing and active civil engineering contracts, highway packages, and airport works executed with verified government and institutional work orders.
              </p>
            </div>

            {/* Table Container — 1000% Liquid Glass & Cream White Chassis */}
            <div className="relative rounded-3xl bg-[#FAF7F0]/95 backdrop-blur-3xl border-2 border-white/80 shadow-[0_30px_90px_rgba(0,0,0,0.5),0_12px_30px_rgba(4,37,82,0.4),inset_0_2px_2px_0_rgba(255,255,255,1),inset_0_-2px_4px_0_rgba(251,202,195,0.4)] overflow-hidden">
              {/* Top Specular Rim Reflection Sheen */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-20" />

              {/* Ambient Prismatic Top Glow Inside Glass */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-white/40 via-[#fbcac3]/15 to-transparent rounded-full blur-xl pointer-events-none" />

              {/* Responsive Scroll Wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[980px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#fbcac3] via-[#ffd5ce] to-[#fbcac3] text-[#042552] border-b-2 border-[#f2b5a9] font-mono font-bold text-xs uppercase tracking-wider">
                      <th scope="col" className="py-4 px-4 text-center w-16 border-r border-[#042552]/15 font-black">
                        S.no
                      </th>
                      <th scope="col" className="py-4 px-5 w-64 border-r border-[#042552]/15 font-black">
                        Name of Principal
                      </th>
                      <th scope="col" className="py-4 px-5 w-64 border-r border-[#042552]/15 font-black">
                        Data of Workorder/Contract
                      </th>
                      <th scope="col" className="py-4 px-5 border-r border-[#042552]/15 font-black">
                        Description of Work
                      </th>
                      <th scope="col" className="py-4 px-6 text-right w-52 whitespace-nowrap font-black">
                        Value (In Rs.)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#042552]/10 text-xs sm:text-[13px] font-sans">
                    {/* ================================================= */}
                    {/* PART 1: S.NO 1 TO 11                              */}
                    {/* ================================================= */}
                    {WORK_ORDER_SCHEDULE_PART_1.map((row, idx) => (
                      <tr
                        key={row.sNo}
                        className={`transition-colors duration-150 hover:bg-[#fbcac3]/30 ${
                          idx % 2 === 0 ? "bg-[#FAF7F0]" : "bg-white"
                        }`}
                      >
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-[#042552] border-r border-[#042552]/10">
                          {row.sNo}
                        </td>
                        <td className="py-3.5 px-5 font-bold text-[#042552] border-r border-[#042552]/10 leading-snug">
                          {row.principal}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-[#9A3412] font-semibold border-r border-[#042552]/10 text-[11px] sm:text-xs leading-relaxed">
                          {row.workOrderRef}
                        </td>
                        <td className="py-3.5 px-5 text-[#1C1917] font-normal leading-relaxed border-r border-[#042552]/10">
                          {row.description}
                        </td>
                        <td className="py-3.5 px-6 text-right font-mono font-black text-[#042552] whitespace-nowrap tabular-nums">
                          ₹ {row.value}
                        </td>
                      </tr>
                    ))}

                    {/* ================================================= */}
                    {/* PART 2 HEADER (EXACT FROM SLIDE AFTER S.NO 11)     */}
                    {/* ================================================= */}
                    <tr className="bg-gradient-to-r from-[#fbcac3] via-[#ffd5ce] to-[#fbcac3] text-[#042552] border-t-4 border-b-2 border-[#f2b5a9] font-mono font-bold text-xs uppercase tracking-wider shadow-sm">
                      <th scope="col" className="py-4 px-4 text-center w-16 border-r border-[#042552]/15 font-black">
                        S.no
                      </th>
                      <th scope="col" className="py-4 px-5 w-64 border-r border-[#042552]/15 font-black">
                        Name of Principal
                      </th>
                      <th scope="col" className="py-4 px-5 w-64 border-r border-[#042552]/15 font-black">
                        Data of Workorder/Contract
                      </th>
                      <th scope="col" className="py-4 px-5 border-r border-[#042552]/15 font-black">
                        Description of Work
                      </th>
                      <th scope="col" className="py-4 px-6 text-right w-52 whitespace-nowrap font-black">
                        Value (In Rs.)
                      </th>
                    </tr>

                    {/* ================================================= */}
                    {/* PART 2: S.NO 12 TO 16                             */}
                    {/* ================================================= */}
                    {WORK_ORDER_SCHEDULE_PART_2.map((row, idx) => (
                      <tr
                        key={row.sNo}
                        className={`transition-colors duration-150 hover:bg-[#fbcac3]/30 ${
                          idx % 2 === 0 ? "bg-[#FAF7F0]" : "bg-white"
                        }`}
                      >
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-[#042552] border-r border-[#042552]/10">
                          {row.sNo}
                        </td>
                        <td className="py-3.5 px-5 font-bold text-[#042552] border-r border-[#042552]/10 leading-snug">
                          {row.principal}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-[#9A3412] font-semibold border-r border-[#042552]/10 text-[11px] sm:text-xs leading-relaxed">
                          {row.workOrderRef}
                        </td>
                        <td className="py-3.5 px-5 text-[#1C1917] font-normal leading-relaxed border-r border-[#042552]/10">
                          {row.description}
                        </td>
                        <td className="py-3.5 px-6 text-right font-mono font-black text-[#042552] whitespace-nowrap tabular-nums">
                          ₹ {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gradient-to-r from-[#fbcac3] via-[#ffd5ce] to-[#fbcac3] border-t-2 border-[#f2b5a9] text-[#042552]">
                      <td colSpan={4} className="py-4 px-6 text-center sm:text-right font-mono font-black uppercase tracking-widest text-[#042552] text-xs sm:text-sm">
                        TOTAL:
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-black text-sm sm:text-base text-[#042552] whitespace-nowrap tabular-nums border-l border-[#042552]/15">
                        ₹ {TOTAL_WORK_ORDER_VALUE}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Bottom Subtle Glass Sheen */}
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#fbcac3]/40 to-transparent pointer-events-none" />
            </div>

            {/* Micro Scroll Hint for Mobile */}
            <div className="mt-3 text-center sm:hidden text-[11px] font-mono text-slate-400">
              &larr; Scroll horizontally to view complete contract breakdown &rarr;
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
