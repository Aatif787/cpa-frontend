import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/ui/CTASection";
import { getMajorProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Major Landmark Projects",
  description:
    "Flagship civil infrastructure achievements: Indira Gandhi International Airport runway overlays, NH-16 Odisha corridor, and Delhi–Gurugram Expressway modernization.",
  keywords: [
    "C P Arora Major Projects",
    "Delhi Airport Runway Overlays",
    "NH-16 Odisha Widening",
    "Delhi Gurugram Expressway Paving",
    "Landmark Civil Engineering",
  ],
  openGraph: {
    title: "Major Landmark Projects | C P Arora Engineers & Contractors",
    description:
      "Flagship civil infrastructure achievements: Indira Gandhi International Airport runway overlays, NH-16 Odisha corridor, and Delhi–Gurugram Expressway modernization.",
    url: "https://cparora.com/major-projects",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/projects/gmr1.jpg",
        width: 795,
        height: 534,
        alt: "Delhi Airport Runway Pavement Overlays",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MajorProjectsPage() {
  const majorProjects = getMajorProjects();
  const featuredFlagships = majorProjects.slice(0, 2);
  const supportingLandmarks = majorProjects.slice(2);

  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. SHARED PAGE HEADER                                     */}
      {/* ========================================================= */}
      <PageHeader
        theme="navy"
        badge="Landmark Projects"
        eyebrow="Major Achievements"
        title="List of Major Projects Done"
        description="Our flagship road construction achievements, airport runway resurfacing under night hours, and high-capacity national highway corridors across India."
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: "List of Major Projects Done" },
        ]}
        actions={
          <>
            <Button href="/contact-us" variant="gold" size="md">
              Contact Our Team &rarr;
            </Button>
            <Button href="/projects" variant="outline-light" size="md">
              View All Projects
            </Button>
          </>
        }
      />

      {/* ========================================================= */}
      {/* 2. EDITORIAL FEATURED FLAGSHIP SHOWCASE                    */}
      {/* ========================================================= */}
      <SectionContainer theme="white" padding="lg">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Major Infrastructure Projects"
          description="High-precision airport runway works and multi-lane national expressway widening."
        />

        <div className="space-y-12">
          {featuredFlagships.map((project, idx) => (
            <Card
              key={project.id}
              variant="default"
              className="p-6 sm:p-8 lg:p-10 border border-cpa-surface-border hover:border-cpa-gold/60 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Media Column (5 cols) — 100% clean photo, zero text on image */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-cpa-navy shadow-card border border-cpa-surface-border">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details Column (7 cols) */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-wider text-[11px] font-bold rounded-sm bg-[#FAF4E6] text-[#785E23] border border-cpa-gold/50 px-2.5 py-0.5">
                      <span className="text-cpa-gold text-xs leading-none">&#9733;</span>
                      <span>Landmark</span>
                    </span>
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-cpa-navy/5 text-cpa-navy border border-cpa-surface-border rounded-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-1">
                    {project.location}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-cpa-navy font-sans tracking-tight mb-4">
                    {project.title}
                  </h2>

                  <p className="text-sm sm:text-base text-cpa-text-secondary leading-relaxed mb-6 font-normal">
                    {project.summary}
                  </p>

                  <div className="mb-6 p-4 rounded-sm bg-cpa-offwhite border border-cpa-surface-border">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cpa-navy font-bold block mb-2">
                      Key Work Done:
                    </span>
                    <ul className="space-y-1.5 text-xs text-cpa-text-primary">
                      {project.technicalScope.map((scope, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-cpa-gold font-bold">&bull;</span>
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-cpa-surface-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cpa-text-muted">
                    {project.client && (
                      <div>
                        <span className="text-cpa-text-muted uppercase">Client / Authority: </span>
                        <span className="text-cpa-navy font-semibold">{project.client}</span>
                      </div>
                    )}
                    {project.specification && (
                      <div>
                        <span className="text-cpa-text-muted uppercase">Standard: </span>
                        <span className="text-cpa-navy font-semibold">{project.specification}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 3. SUPPORTING LANDMARK INFRASTRUCTURE CONTRACTS           */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" padding="lg">
        <SectionHeading
          eyebrow="More Projects"
          title="More Landmark Road &amp; Airport Works"
          description="Major expressway repairs and airport taxiway civil works."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingLandmarks.map((project) => (
            <div key={project.id} className="flex flex-col">
              <ProjectCard
                title={project.title}
                category={project.category}
                location={project.location}
                client={project.client}
                status={project.status}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                stats={project.stats}
              />
              <div className="bg-cpa-white border-x border-b border-cpa-surface-border p-4 rounded-b-sm -mt-1 flex-1 flex flex-col justify-between">
                <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
                  {project.summary}
                </p>
                <div className="pt-2 border-t border-cpa-surface-border flex items-center justify-between text-[11px] font-mono text-cpa-text-muted">
                  <span>Standard:</span>
                  <span className="text-cpa-navy font-semibold">{project.specification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Navigation */}
        <div className="mt-12 pt-6 border-t border-cpa-surface-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cpa-text-secondary">
          <div className="flex items-center gap-4">
            <Link href="/projects" className="hover:text-cpa-gold transition-colors">
              &larr; All Projects
            </Link>
            <span>&bull;</span>
            <Link href="/ongoing-projects" className="hover:text-cpa-gold transition-colors">
              &rarr; Ongoing Projects
            </Link>
            <span>&bull;</span>
            <Link href="/executed-projects" className="hover:text-cpa-gold transition-colors">
              &rarr; Completed Projects
            </Link>
          </div>
          <span className="text-cpa-text-muted">Class-I Quality &amp; Safety Standards</span>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 4. INSTITUTIONAL CALL TO ACTION                           */}
      {/* ========================================================= */}
      <CTASection
        eyebrow="Work With Us &bull; Partnerships"
        title="Partner with Us on Major Road Projects"
        description="Contact our engineering team for highway tenders, airport runway resurfacing, and road construction projects across India."
        primaryAction={{
          label: "Contact Our Team",
          href: "/contact-us",
        }}
        secondaryAction={{
          label: "View All Projects",
          href: "/projects",
        }}
        theme="navy"
      />
    </div>
  );
}
