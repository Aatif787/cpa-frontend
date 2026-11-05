import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StatisticCard from "@/components/ui/StatisticCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Corporate background, technical credentials, and operational capabilities of C P Arora — Class-I Civil Infrastructure Contractor in India.",
  keywords: [
    "C P Arora Company Profile",
    "Civil Infrastructure Contractor",
    "Class-I PWD Contractor",
    "Highway Construction Company India",
    "Runway Resurfacing Specialist",
    "Micro-Surfacing Contractor India",
    "CPWD Enlisted Contractor",
  ],
  openGraph: {
    title: "Company Profile | C P Arora Engineers & Contractors",
    description:
      "Corporate background, technical credentials, and operational capabilities of C P Arora — Class-I Civil Infrastructure Contractor in India.",
    url: "https://cparora.com/about-us/company-profile",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/corporate/office.jpg",
        width: 1267,
        height: 787,
        alt: "C P Arora Corporate Headquarters",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function CompanyProfilePage() {
  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. HERO: COMPANY PROFILE & OUR LEGENDARY INSPIRATION      */}
      {/* ========================================================= */}
      <section className="bg-[#042552] border-b-2 border-cpa-gold/30 text-white relative overflow-hidden py-8 sm:py-12 lg:py-16">
        {/* Dynamic Ambient Glow Orbs */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#E5989B]/15 blur-3xl pointer-events-none animate-float-slow"
        />
        <div
          className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 rounded-full bg-cpa-gold/15 blur-3xl pointer-events-none animate-float-reverse"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 35%, rgba(229, 152, 155, 0.25) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 sm:mb-8">
            <Breadcrumb
              theme="dark"
              items={[
                { label: "About Us", href: "/about-us/company-profile" },
                { label: "Company Profile" },
              ]}
            />
          </div>

          {/* Centered Heading: Company Profile — 1000% Liquid Glass Hero Capsule */}
          <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
            {/* Liquid Glass Capsule Chassis */}
            <div className="relative group inline-flex flex-col items-center px-8 sm:px-14 py-5 sm:py-7 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-white/[0.02] backdrop-blur-3xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1.5px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:border-white/35">
              {/* Top Specular Rim Reflection Sheen */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none" />

              {/* Ambient Prismatic Glow Inside Glass */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-white/25 via-[#E5989B]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Eyebrow Liquid Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#E5989B] text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5989B] animate-pulse" />
                <span>Corporate Identity</span>
              </div>

              {/* The Heading */}
              <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)] font-sans">
                Company Profile
              </h1>

              {/* Liquid Divider Bar */}
              <div className="relative z-10 flex items-center justify-center gap-2.5 mt-3 sm:mt-4">
                <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#E5989B]" />
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rotate-45 bg-[#E5989B] shadow-[0_0_10px_#e5989b]" />
                  <div className="absolute inset-0 rotate-45 bg-white/60 animate-ping opacity-40" />
                </div>
                <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#E5989B]" />
              </div>

              {/* Bottom Liquid Edge Line */}
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Left: Framed Portrait of Late Shri Lalit Kumar Sahni with Ambient Peach Glow & Hover Tilt */}
            <div className="md:col-span-5 flex justify-center">
              <div className="group relative w-full max-w-[280px] sm:max-w-[320px] p-2 border-[3px] border-[#F4B2A6] rounded-xs bg-[#042552] shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-peach-glow cursor-default overflow-hidden">
                {/* Subtle photo sheen light sweep */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/team/lalit-shahni.jpg"
                    alt="Late Shri Lalit Kumar Sahni — President &amp; Inspiration, C P Arora"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Tribute Content */}
            <div className="md:col-span-7 flex flex-col justify-center text-left">
              {/* Main Title & Subtitle */}
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-[#E5989B] uppercase font-sans leading-tight">
                  OUR LEGENDARY
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-light tracking-[0.06em] sm:tracking-[0.1em] text-[#E5989B]/90 font-sans mt-0.5">
                  Primate &amp; Inspiration
                </p>
              </div>

              {/* Dignitary Name */}
              <div className="mb-4 sm:mb-5">
                <span className="block text-xs sm:text-sm font-semibold tracking-wider text-[#E5989B] uppercase mb-0.5">
                  Late Shri
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#E5989B] tracking-tight">
                  Lalit Kumar Sahni
                </h3>
              </div>

              {/* Tribute Narrative */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-normal text-justify sm:text-left mb-6">
                Since its inception, the company has greatly benefitted from the able leadership of Mr. Lalit Kumar Sahni. Serving as the President of the company, he has dealt with every project carefully to ensure perfect execution. Through visionary skills and eye for crucial details, Mr. Sahni had shaped the growth of the company by strengthening it as a backbone. Thanks to him, every project execution process goes through a strict and detailed scrutiny to assess merits, demerits, practical viability, and risks. Without Mr. Sahni&apos;s dedicated contributions, the company would not have scaled so high and thrived on great achievements.
              </p>

              {/* Action Buttons with Interactive Micro-Interactions */}
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact-us" variant="gold" size="md">
                  Contact Our Team &rarr;
                </Button>
                <Button href="/projects" variant="outline-light" size="md">
                  View Our Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR OFFICE GMR DIAL — PROJECT AT IGI AIRPORT           */}
      {/* ========================================================= */}
      <section className="bg-[#042552] border-b-2 border-cpa-gold/30 text-white relative overflow-hidden py-10 sm:py-14 lg:py-16">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(229, 152, 155, 0.25) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading matching reference screenshot */}
          <div className="mb-6 sm:mb-8 text-left">
            <span className="block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#E5989B]">
              OUR
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase text-[#E5989B] mt-0.5 leading-tight">
              OFFICE GMR DIAL
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5989B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5989B]" />
              </span>
              <p className="text-xs sm:text-sm font-light tracking-wide text-[#E5989B]/90">
                Project At IGI Airport
              </p>
            </div>
          </div>

          {/* 6 Photo Grid: 3 columns x 2 rows with signature peach border & dynamic hover elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {/* Photo 1: Executive Cabin */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-1.jpg"
                  alt="C P Arora GMR DIAL Project Office - Executive Discussion Cabin, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>

            {/* Photo 2: Corridor / Waiting Area */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-2.jpg"
                  alt="C P Arora GMR DIAL Project Office - Waiting Lounge & Corridor, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>

            {/* Photo 3: Senior Executive Workstation */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-3.jpg"
                  alt="C P Arora GMR DIAL Project Office - Senior Executive Desk, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>

            {/* Photo 4: Operations Manager Desk */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-4.jpg"
                  alt="C P Arora GMR DIAL Project Office - Operations Manager Workstation, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>

            {/* Photo 5: Site Engineering Team */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-5.jpg"
                  alt="C P Arora GMR DIAL Project Office - Site Engineering Team, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>

            {/* Photo 6: Project Administration Desk */}
            <div className="group relative border-[3px] border-[#F4B2A6] rounded-xs overflow-hidden bg-[#042552] shadow-xl transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(244,178,166,0.35)] hover:-translate-y-1.5 cursor-default">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/office/gmr-office-6.jpg"
                  alt="C P Arora GMR DIAL Project Office - Project Administration Desk, IGI Airport"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORPORATE OVERVIEW & HERITAGE                          */}
      {/* ========================================================= */}
      <SectionContainer theme="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative Overview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border border-cpa-gold/30 bg-cpa-gold/10 text-cpa-gold text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold" />
              <span>Company Background</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-cpa-navy font-sans leading-tight mb-6">
              Reliable Construction Built on Quality &amp; Government Trust
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-cpa-text-secondary leading-relaxed font-normal">
              <p>
                <strong className="text-cpa-navy font-semibold">C P Arora</strong> is an
                established Indian civil engineering and road construction company with over
                50 years of experience. We hold the highest <strong className="text-cpa-navy font-semibold">Class-I and Class IA registrations</strong> with
                the Central Public Works Department (CPWD), Municipal Corporation of Delhi (MCD),
                NBCC (India) Limited, and state departments. We deliver national highway expansions,
                city underpasses, and airport runway resurfacing projects.
              </p>
              <p>
                From initial ground preparation to laying the final smooth layer of asphalt,
                we control quality at every step. We use our own machines, test materials in our
                own laboratories, and follow national highway and road safety guidelines.
              </p>
              <p>
                Because we own our road pavers, asphalt mixing plants, and heavy rollers,
                we can start work immediately without waiting for rental equipment and keep
                projects moving forward smoothly.
              </p>
            </div>

            {/* Departmental Enlistment List */}
            <div className="mt-8 pt-6 border-t border-cpa-surface-border">
              <span className="text-xs font-mono uppercase tracking-widest text-cpa-navy font-bold block mb-3">
                Key Government Registrations:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-cpa-text-primary">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold shrink-0" />
                  <span>Central Public Works Department (CPWD) — Class-I Civil (Road Only)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold shrink-0" />
                  <span>Municipal Corporation of Delhi (MCD) — Class-1 Civil</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold shrink-0" />
                  <span>NBCC (India) Limited — Approved Infrastructure Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold shrink-0" />
                  <span>State Public Works Departments (Haryana, Delhi &amp; Goa PWD)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dual Visual Showcase (5 cols) — 100% clean photos, zero text on images */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Photograph */}
            <div className="rounded-sm overflow-hidden border border-cpa-surface-border shadow-card bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy">
                <Image
                  src="/images/corporate/office.jpg"
                  alt="C P Arora Corporate Headquarters Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-cpa-white border-t border-cpa-surface-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-gold-dark font-semibold block">
                  Corporate Head Office
                </span>
                <span className="text-xs text-cpa-text-secondary font-medium">
                  Main Office &amp; Project Management Team
                </span>
              </div>
            </div>

            {/* Plant & Mobilization Facility Photograph */}
            <div className="rounded-sm overflow-hidden border border-cpa-surface-border shadow-card bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy">
                <Image
                  src="/images/corporate/office-out.jpg"
                  alt="C P Arora Plant Operations Yard and Mobilization Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-cpa-white border-t border-cpa-surface-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-gold-dark font-semibold block">
                  Operations &amp; Equipment Yard
                </span>
                <span className="text-xs text-cpa-text-secondary font-medium">
                  Machinery Staging, Transport Fleet &amp; Maintenance Yard
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* ========================================================= */}
      {/* 4. OPERATIONAL STRENGTH & CREDENTIAL MATRIX               */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" padding="md">
        <SectionHeading
          eyebrow="Company Strengths"
          title="Our Strengths at a Glance"
          description="Verified government approvals, strict quality standards, and our own equipment fleet."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatisticCard
            value="Class-I / IA"
            label="Government Registrations"
            caption="Top contractor tier with Central and State Public Works Departments"
            variant="navy"
          />

          <StatisticCard
            value="100%"
            label="Quality Standards Met"
            caption="Strictly following national road and highway specifications"
            trend="MoRTH / IRC"
            variant="gold"
          />

          <StatisticCard
            value="Airside"
            label="Airport Runway Work"
            caption="Smooth runway paving finished during scheduled night hours"
            variant="default"
          />

          <StatisticCard
            value="20+"
            label="Owned Heavy Machines"
            caption="Road pavers, asphalt plants, and heavy compaction rollers"
            variant="default"
          />
        </div>
      </SectionContainer>



      {/* ========================================================= */}
      {/* 5. QUALITY ASSURANCE & TESTING                            */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" padding="lg">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border border-cpa-gold/30 bg-cpa-gold/10 text-cpa-gold text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold" />
            <span>Quality Testing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-cpa-navy font-sans leading-tight mb-4">
            Thorough Quality Testing on Every Project
          </h2>
          <p className="text-sm sm:text-base text-cpa-text-secondary leading-relaxed font-normal">
            Every layer of our road work is tested carefully, both in our plant laboratories
            and directly on the construction site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="elevated">
            <div className="w-10 h-10 rounded-sm bg-cpa-navy text-cpa-gold flex items-center justify-center font-mono font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-cpa-navy font-sans mb-2">
              Stone &amp; Asphalt Testing
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed">
              We test stone strength, size, and shape, as well as asphalt grade and purity,
              to ensure materials meet all Indian road standards.
            </p>
          </Card>

          <Card variant="elevated">
            <div className="w-10 h-10 rounded-sm bg-cpa-navy text-cpa-gold flex items-center justify-center font-mono font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-cpa-navy font-sans mb-2">
              Asphalt Mix Design &amp; Strength
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed">
              We design and test exact asphalt recipes to resist heavy truck loads, prevent
              cracking, and guarantee long pavement life.
            </p>
          </Card>

          <Card variant="elevated">
            <div className="w-10 h-10 rounded-sm bg-cpa-navy text-cpa-gold flex items-center justify-center font-mono font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-cpa-navy font-sans mb-2">
              Field Density &amp; Road Smoothness
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed">
              We take core samples to verify road thickness, monitor hot asphalt temperatures
              while laying, and ensure a smooth, safe ride.
            </p>
          </Card>
        </div>

        {/* Corporate Leadership Navigation Strip */}
        <div className="mt-12 p-6 bg-cpa-white border border-cpa-surface-border rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cpa-gold block font-semibold">
              Our Leadership Team
            </span>
            <span className="text-sm font-bold text-cpa-navy">
              Meet our Board of Directors and senior engineering team
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href="/about-us/board-of-directors" variant="outline" size="sm">
              Board of Directors &rarr;
            </Button>
            <Button href="/about-us/core-team" variant="outline" size="sm">
              Core Technical Team &rarr;
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION SECTION                                 */}
      {/* ========================================================= */}
      <CTASection
        eyebrow="Work With Us &bull; Partnerships"
        title="Partner with Us on Road &amp; Highway Projects"
        description="Contact our team for highway tenders, airport runway resurfacing, and road construction contracts across India."
        primaryAction={{
          label: "Contact Our Team",
          href: "/contact-us",
        }}
        secondaryAction={{
          label: "View Our Projects",
          href: "/projects",
        }}
        theme="navy"
      />
    </div>
  );
}
