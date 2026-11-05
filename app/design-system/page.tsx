import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionContainer from "@/components/layout/SectionContainer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProjectStatusBadge from "@/components/ui/ProjectStatusBadge";
import ProjectCard from "@/components/ui/ProjectCard";
import StatisticCard from "@/components/ui/StatisticCard";
import ImageWithCaption from "@/components/ui/ImageWithCaption";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import LogoStrip from "@/components/ui/LogoStrip";
import CertificateCard from "@/components/ui/CertificateCard";
import EmptyState from "@/components/ui/EmptyState";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Design System & Component Showcase (Internal Dev)",
  description: "Internal design system documentation and component library for CPA Arora rebuild.",
  robots: {
    index: false,
    follow: false,
  },
};

const COLOR_SWATCHES = [
  { name: "Primary Navy", hex: "#101D33", role: "Primary brand ground, headings, header shell", bgClass: "bg-[#101D33]", textDark: false },
  { name: "Secondary Navy", hex: "#192B46", role: "Sub-headers, dark surface borders, hover states", bgClass: "bg-[#192B46]", textDark: false },
  { name: "White", hex: "#FFFFFF", role: "Card surfaces, primary contrast, inverse text", bgClass: "bg-[#FFFFFF] border border-gray-200", textDark: true },
  { name: "Off-White", hex: "#F5F7FA", role: "Global application background ground", bgClass: "bg-[#F5F7FA] border border-gray-200", textDark: true },
  { name: "Accent Gold", hex: "#B89A5A", role: "Brand accents, badges, CTAs, focus indicators", bgClass: "bg-[#B89A5A]", textDark: true },
  { name: "Primary Text", hex: "#172033", role: "High-contrast headings, body typography", bgClass: "bg-[#172033]", textDark: false },
  { name: "Secondary Text", hex: "#626D7D", role: "Body copy, captions, engineering descriptions", bgClass: "bg-[#626D7D]", textDark: false },
];

const PARTNER_LOGOS = [
  { name: "KMC Infrastructure", src: "/images/partners/kmc.jpg" },
  { name: "Rock-Tech Engineering", src: "/images/partners/rock-tech.jpg" },
  { name: "Unitech Civil", src: "/images/partners/unitech.jpg" },
  { name: "Unity Group", src: "/images/partners/unity.jpg" },
];

export default function DesignSystemPage() {
  return (
    <div className="bg-cpa-offwhite min-h-screen">
      {/* Dev-only Banner */}
      <div className="bg-amber-500 text-cpa-navy px-4 py-2.5 text-xs font-mono font-bold flex items-center justify-between border-b border-amber-600">
        <div className="flex items-center gap-2">
          <span className="bg-cpa-navy text-amber-400 px-2 py-0.5 rounded text-[10px] uppercase">
            Development Only
          </span>
          <span>
            Phase 3 Design System &amp; Component Library Showcase &bull; Not for public navigation
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] opacity-80">
          Robots: noindex, nofollow
        </span>
      </div>

      {/* Page Header Primitive Showcase */}
      <PageHeader
        title="Corporate Design System"
        eyebrow="C P Arora Infrastructure"
        badge="Phase 3 Specification"
        description="A unified, accessible, and high-performance component library engineered for heavy civil contracting, national highways, and airport infrastructure."
        breadcrumbs={[
          { label: "Internal Dev", href: "/design-system" },
          { label: "Design System Showcase" },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <Button href="#colors" variant="outline" size="sm">Colors</Button>
            <Button href="#components" variant="gold" size="sm">Components</Button>
          </div>
        }
      />

      <Container className="py-12 sm:py-16 space-y-20">
        {/* 1. Color Palette Tokens */}
        <section id="colors">
          <SectionHeading
            eyebrow="Tokens / 01"
            title="Color Palette &amp; Contrast Matrix"
            description="The approved corporate palette maintains an authoritative balance between deep naval authority and restrained architectural gold."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COLOR_SWATCHES.map((swatch) => (
              <div
                key={swatch.hex}
                className="bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden shadow-subtle flex flex-col justify-between"
              >
                <div
                  className={`h-28 w-full flex items-end p-3 ${swatch.bgClass}`}
                >
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      swatch.textDark ? "bg-black/10 text-cpa-navy" : "bg-black/30 text-white"
                    }`}
                  >
                    {swatch.hex}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-cpa-navy font-sans">
                    {swatch.name}
                  </h4>
                  <p className="text-xs text-cpa-text-secondary mt-1 leading-snug">
                    {swatch.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section id="typography">
          <SectionHeading
            eyebrow="Tokens / 02"
            title="Typography Hierarchy"
            description="Set in Plus Jakarta Sans for primary text and Space Mono for technical metadata and government classifications."
          />

          <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6 sm:p-8 space-y-8">
            <div className="border-b border-cpa-surface-border/60 pb-6">
              <span className="text-[11px] font-mono text-cpa-gold uppercase">H1 Display / Hero &bull; text-4xl sm:text-5xl lg:text-6xl</span>
              <div className="text-3xl sm:text-5xl font-extrabold text-cpa-navy tracking-tight font-sans mt-1">
                National Highway Corridors &amp; Airfield Infrastructure
              </div>
            </div>

            <div className="border-b border-cpa-surface-border/60 pb-6">
              <span className="text-[11px] font-mono text-cpa-gold uppercase">H2 Section Heading &bull; text-2xl sm:text-3xl lg:text-4xl</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-cpa-navy tracking-tight font-sans mt-1">
                Class-I &amp; Class IA Civil Engineering
              </h2>
            </div>

            <div className="border-b border-cpa-surface-border/60 pb-6">
              <span className="text-[11px] font-mono text-cpa-gold uppercase">H3 Sub-section &bull; text-xl sm:text-2xl</span>
              <h3 className="text-xl sm:text-2xl font-bold text-cpa-navy font-sans mt-1">
                High-Stability Asphalt Batch Mix &amp; Friction Courses
              </h3>
            </div>

            <div className="border-b border-cpa-surface-border/60 pb-6">
              <span className="text-[11px] font-mono text-cpa-gold uppercase">Body Lead &bull; text-base sm:text-lg</span>
              <p className="text-base sm:text-lg text-cpa-text-primary leading-relaxed mt-1 font-light">
                Continuous computer-metered micro-surfacing and slurry seal spreaders deployed across central highway tenders with complete IRC standard adherence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-[11px] font-mono text-cpa-gold uppercase">Regular Body &bull; text-sm</span>
                <p className="text-sm text-cpa-text-secondary leading-relaxed mt-1">
                  Decades of proven execution in heavy civil works, classified as Class-I / Class IA contractor across major public sector undertakings.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-cpa-gold uppercase">Technical Monospace &bull; font-mono text-xs</span>
                <p className="font-mono text-xs text-cpa-navy mt-1 bg-cpa-offwhite p-3 rounded-sm border border-cpa-surface-border">
                  REG_NO: PWD/CLASS-1/SS/2026 &bull; TOLERANCE: +/- 2.0MM &bull; SPEC: MORTH 500
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Button Matrix */}
        <section id="components">
          <SectionHeading
            eyebrow="Primitives / 03"
            title="Interactive Buttons &amp; States"
            description="Button primitives supporting primary, secondary, outline, ghost, and gold variants with icon slots, focus states, and loading indicators."
          />

          <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6 sm:p-8 space-y-6">
            <div>
              <span className="block text-xs font-mono text-cpa-text-muted uppercase mb-3">
                Button Variants (Size: Medium)
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary Navy</Button>
                <Button variant="secondary">Secondary Navy</Button>
                <Button variant="gold">Accent Gold</Button>
                <Button variant="outline">Outline Navy</Button>
                <Button variant="ghost">Ghost State</Button>
              </div>
            </div>

            <div className="bg-cpa-navy p-6 rounded-sm">
              <span className="block text-xs font-mono text-cpa-gold uppercase mb-3">
                Buttons on Dark Backgrounds
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="gold">Gold Action &rarr;</Button>
                <Button variant="outline-light">Outline Light</Button>
                <Button variant="secondary">Secondary Navy</Button>
              </div>
            </div>

            <div>
              <span className="block text-xs font-mono text-cpa-text-muted uppercase mb-3">
                Button Sizes &amp; Icons
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small Button
                </Button>
                <Button variant="primary" size="md">
                  Medium Button
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<span>&rarr;</span>}
                >
                  Large with Right Icon
                </Button>
                <Button
                  variant="gold"
                  size="md"
                  leftIcon={<span>&#9733;</span>}
                >
                  With Left Icon
                </Button>
                <Button variant="primary" size="md" isLoading>
                  Processing
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled State
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Badges & Status Indicators */}
        <section>
          <SectionHeading
            eyebrow="Primitives / 04"
            title="Status Badges &amp; Category Chips"
            description="Restrained status indicators for active projects, executed works, and landmark aviation achievements."
          />

          <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-cpa-navy mb-3">
                  Project Status Indicators
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <ProjectStatusBadge status="Ongoing" />
                  <ProjectStatusBadge status="Completed" />
                  <ProjectStatusBadge status="Landmark" />
                  <ProjectStatusBadge status="Under Bidding" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-cpa-navy mb-3">
                  Technical Category Badges
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="gold">Class-I / Class IA</Badge>
                  <Badge variant="navy">Airside Civil Works</Badge>
                  <Badge variant="surface">Micro-Surfacing</Badge>
                  <Badge variant="outline">MoRTH Standards</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Statistics & Metrics */}
        <section>
          <SectionHeading
            eyebrow="Components / 05"
            title="Corporate Statistics &amp; Metrics"
            description="Authoritative metric cards with large tabular numerics, subtle gold accents, and verified technical captions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatisticCard
              value="40+"
              label="Years of Engineering Heritage"
              caption="Continuous civil operations since incorporation"
              variant="default"
            />
            <StatisticCard
              value="100%"
              label="Quality &amp; Safety Compliance"
              caption="Strict adherence to MoRTH and IRC standards"
              trend="Audit Clean"
              variant="gold"
            />
            <StatisticCard
              value="Class-I"
              label="Departmental Enlistment"
              caption="Central &amp; state public works departments"
              variant="navy"
            />
            <StatisticCard
              value="21+"
              label="Heavy Fleet Machinery"
              caption="Company-owned sensor pavers &amp; batch plants"
              variant="default"
            />
          </div>
        </section>

        {/* 6. Corporate Cards */}
        <section>
          <SectionHeading
            eyebrow="Components / 06"
            title="Corporate Card Variants"
            description="Structured card primitives with controlled hover elevation and border accents."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <span className="text-xs font-mono text-cpa-gold uppercase">Standard Card</span>
              <h4 className="text-lg font-bold text-cpa-navy mt-1 mb-2">
                Pavement Engineering
              </h4>
              <p className="text-xs text-cpa-text-secondary leading-relaxed">
                Specialized in high-performance bituminous concrete, friction surface courses, and heavy-axle load corridors.
              </p>
            </Card>

            <Card variant="gold-outline">
              <span className="text-xs font-mono text-cpa-gold-dark uppercase font-semibold">Featured Card</span>
              <h4 className="text-lg font-bold text-cpa-navy mt-1 mb-2">
                Airport Runway Works
              </h4>
              <p className="text-xs text-cpa-text-secondary leading-relaxed">
                Precision friction overlays delivered during rapid night closures at major international civil aviation airfields.
              </p>
            </Card>

            <Card variant="navy">
              <span className="text-xs font-mono text-cpa-gold uppercase">Dark Corporate</span>
              <h4 className="text-lg font-bold text-cpa-white mt-1 mb-2">
                Batching Plant Fleet
              </h4>
              <p className="text-xs text-cpa-text-inverse-muted leading-relaxed">
                High-output computer controlled hot mix plants and imported sensor pavers ensuring uniform pre-compaction.
              </p>
            </Card>
          </div>
        </section>

        {/* 7. Project Cards with Real Assets */}
        <section>
          <SectionHeading
            eyebrow="Components / 07"
            title="Project Cards (Real Asset Showcase)"
            description="Editorial project showcase components utilizing original photographic assets copied safely into public storage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="National Highway Widening &amp; Resurfacing"
              category="Highway Infrastructure"
              location="Northern Regional Corridors"
              client="Public Works Department"
              status="Ongoing"
              imageUrl="/images/projects/key-pro-1.jpg"
              imageAlt="Sensor paver laying bituminous concrete on highway corridor"
              href="/ongoing-projects"
              stats={[
                { label: "Pavement Type", value: "DBM & BC" },
                { label: "Execution Method", value: "Sensor Paver" },
              ]}
            />

            <ProjectCard
              title="Indira Gandhi International Airport Airside Pavements"
              category="Aviation Civil Works"
              location="New Delhi, India"
              client="DIAL / Aviation Authorities"
              status="Landmark"
              imageUrl="/images/projects/gmr1.jpg"
              imageAlt="Airport runway pavement works at Delhi Airport"
              href="/major-projects"
              stats={[
                { label: "Scope", value: "Runway Overlay" },
                { label: "Window", value: "Night Closures" },
              ]}
            />

            <ProjectCard
              title="High-Density Municipal Underpass &amp; Corridors"
              category="Urban Transport"
              location="National Capital Region"
              client="Municipal Authorities"
              status="Completed"
              imageUrl="/images/projects/key-pro-1.jpg"
              imageAlt="Completed urban corridor and civil road works"
              href="/executed-projects"
              stats={[
                { label: "Infrastructure", value: "RCC & Pavement" },
                { label: "Delivery", value: "Commissioned" },
              ]}
            />
          </div>
        </section>

        {/* 8. Certificate Card */}
        <section>
          <SectionHeading
            eyebrow="Components / 08"
            title="Official Certificate Card"
            description="Displays verified statutory contractor enlistments with official watermark branding and document preview slot."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificateCard
              title="Central Public Works Department (CPWD)"
              issuingAuthority="Government of India"
              classification="Class-I (Civil Road Only)"
              referenceNo="CPWD/CLASS-I/ROAD/CERT"
              validity="Regular Government Enlistment"
              imageUrl="/images/certificates/cpwd-certificate1.jpg"
            />
          </div>
        </section>

        {/* 9. Image With Caption */}
        <section>
          <SectionHeading
            eyebrow="Components / 09"
            title="Image Treatment &amp; Captions"
            description="Semantic figure and figcaption primitives preserving aspect ratios with subtle hover zoom."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageWithCaption
              src="/images/fleet/m1.jpg"
              alt="Heavy asphalt batch mixing plant facility"
              caption="High-capacity computer-controlled asphalt batch mix plant in operations."
              credit="CPA Arora Machinery Fleet"
              aspectRatio="16/9"
            />

            <ImageWithCaption
              src="/images/projects/key-pro-1.jpg"
              alt="Highway sensor paver laying bituminous concrete"
              caption="Precision sensor paver delivering uniform asphalt mat thickness."
              credit="On-site Project Execution"
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* 10. Partner Logo Strip */}
        <section>
          <SectionHeading
            eyebrow="Components / 10"
            title="Client &amp; Joint-Venture Logo Strip"
            description="Corporate logo grid with clean background framing and full-color presentation."
          />

          <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6">
            <LogoStrip
              title="Associated Joint-Venture Partners &amp; Project Authorities"
              logos={PARTNER_LOGOS}
              theme="light"
            />
          </div>
        </section>

        {/* 11. Empty State & Loading Skeletons */}
        <section>
          <SectionHeading
            eyebrow="Components / 11"
            title="Empty States &amp; Shimmer Skeletons"
            description="Fallback and loading states designed for asynchronous data retrieval."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6">
              <span className="block text-xs font-mono text-cpa-text-muted uppercase mb-4">
                Empty State Component
              </span>
              <EmptyState
                title="No Tender Notices Currently Active"
                description="All active contract bids for this procurement cycle have closed. Subscribe to receive future RFPs."
                action={{
                  label: "Contact Tender Desk",
                  href: "/contact-us",
                }}
              />
            </div>

            <div className="bg-cpa-white border border-cpa-surface-border rounded-sm p-6 space-y-4">
              <span className="block text-xs font-mono text-cpa-text-muted uppercase mb-2">
                Loading Shimmer Skeletons
              </span>
              <LoadingSkeleton variant="card" />
              <LoadingSkeleton variant="text" />
            </div>
          </div>
        </section>

        {/* 12. Section Layout & CTA Banner */}
        <section>
          <SectionHeading
            eyebrow="Components / 12"
            title="Call to Action (CTA) Primitive"
            description="High-contrast corporate banner for tender inquiries, joint ventures, and department communications."
          />

          <div className="rounded-sm overflow-hidden border border-cpa-navy-border shadow-card">
            <CTASection
              eyebrow="Government Tendering &bull; Joint Ventures"
              title="Mobilizing Advanced Pavement Infrastructure Across India"
              description="Connect with our technical engineering division for airport runway projects, national highway maintenance, and public sector tenders."
              primaryAction={{
                label: "Contact Tender Department",
                href: "/contact-us",
              }}
              secondaryAction={{
                label: "Explore Projects Hub",
                href: "/projects",
              }}
              theme="navy"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
