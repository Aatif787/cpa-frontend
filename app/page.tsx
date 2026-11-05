import React from "react";
import type { Metadata } from "next";
import {
  HeroSection,
  ConstructionAnimation,
  AboutUsSection,
  VaiRajNewsSection,
  OurJourneySection,
  FeaturedProjectsSection,
  TheJobsSection,
  FleetSection,
  ClientLogosSection,
} from "@/components/home";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "C P Arora | Civil Engineering, Highways & Airport Infrastructure",
  description:
    "Class-I Civil Infrastructure Contractor in India. Specialized in national highway construction, airport runway pavements, micro-surfacing, and heavy civil works.",
  keywords: [
    "C P Arora",
    "Civil Engineering India",
    "Highway Construction Contractor",
    "Airport Runway Infrastructure",
    "Micro Surfacing India",
    "Slurry Seal",
    "Class-I PWD Contractor",
    "Asphalt Concrete Pavements",
    "Delhi Infrastructure Contractor",
  ],
  openGraph: {
    title: "C P Arora | Civil Engineering, Highways & Airport Infrastructure",
    description:
      "Premier Indian civil infrastructure contractor delivering national highways, airfield runway pavements, and specialized asphalt solutions.",
    url: "https://cparora.com",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/hero/cpa-banner5.jpg",
        width: 1920,
        height: 1080,
        alt: "C P Arora Highway Infrastructure Construction & Asphalt Plant Operations",
      },
      {
        url: "/images/hero/cpa-banner6.jpg",
        width: 1920,
        height: 1080,
        alt: "C P Arora Heavy Stone Aggregate Crushing & Screening Plant Operations",
      },
      {
        url: "/images/hero/cpa-banner7.jpg",
        width: 1920,
        height: 1080,
        alt: "C P Arora Apollo Asphalt Batching Plant & Fleet Dispatch Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 1.5. C P Arora Heavy Infrastructure Construction Animation */}
      <ConstructionAnimation />

      {/* 2. ABOUT US Section */}
      <AboutUsSection />

      {/* 3. Group News: VaiRaj EnginCo Acquisition & ITS Division */}
      <VaiRajNewsSection />

      {/* 4. OUR JOURNEY: Founder Late Shri. Chander Prakash Arora */}
      <OurJourneySection />

      {/* 5. Selected Projects */}
      <FeaturedProjectsSection />

      {/* The Jobs We Undertake */}
      <TheJobsSection />

      {/* 6. Brief Infrastructure & Fleet Preview */}
      <FleetSection />

      {/* 7. Client & Joint-Venture Partner Logos */}
      <ClientLogosSection />

      {/* 8. Tendering & Contact Call to Action */}
      <CTASection
        eyebrow="Tendering &bull; Joint Ventures &bull; Strategic Partnerships"
        title="Ready to Build India's Next Landmark Corridor?"
        description="Partner with five decades of verified civil engineering capability, an audited ₹700 Cr annual financial scale, and 100% company-owned heavy paving equipment ready for rapid mobilization."
        primaryAction={{
          label: "Discuss a Project or Tender",
          href: "/contact-us",
        }}
        secondaryAction={{
          label: "Inspect Our Machinery Fleet",
          href: "/infrastructure",
        }}
        theme="navy"
      />
    </div>
  );
}
