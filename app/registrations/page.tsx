"use client";

import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CertificateCard from "@/components/ui/CertificateCard";
import LogoStrip from "@/components/ui/LogoStrip";
import CTASection from "@/components/ui/CTASection";
import CertificateModal from "@/components/registrations/CertificateModal";
import {
  STATUTORY_CERTIFICATES,
  CLIENT_PARTNERS,
  type CertificateItem,
} from "@/data/registrations";

export default function RegistrationsPage() {
  const [activeCertificate, setActiveCertificate] =
    useState<CertificateItem | null>(null);

  const partnersForStrip = CLIENT_PARTNERS.map((p) => ({
    name: p.name,
    src: p.logo,
  }));

  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. PAGE HEADER                                            */}
      {/* ========================================================= */}
      <PageHeader
        theme="navy"
        badge="Government Approvals"
        eyebrow="Government Approvals &amp; Licenses"
        title="Government Registrations &amp; Licenses"
        description="Official contractor certificates and Class-I registrations from Central PWD, Goa PWD, Haryana PWD, Municipal Corporation of Delhi (MCD), and Delhi Metro (DMRC)."
        breadcrumbs={[{ label: "Registrations & Enlistments" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button href="/infrastructure" variant="gold" size="md">
              View Machinery Fleet
            </Button>
            <Button
              href="/about-us/company-profile"
              variant="outline"
              size="md"
              className="!border-white/40 !text-white hover:!border-cpa-gold hover:!text-cpa-gold"
            >
              Company Profile
            </Button>
          </div>
        }
      />

      {/* ========================================================= */}
      {/* 2. STATUTORY AUTHORITY OVERVIEW                           */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="default" className="border-l-4 border-l-cpa-gold p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-1">
              Central Government
            </span>
            <h3 className="text-base font-bold text-cpa-navy mb-2">
              Central PWD (CPWD)
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
              Registered as Class-I (Civil Road) contractor by the Directorate General, CPWD, New Delhi.
            </p>
            <span className="inline-block text-[11px] font-mono text-cpa-navy font-semibold bg-cpa-offwhite px-2 py-1 rounded-sm border border-cpa-surface-border">
              Class-I (Civil Road)
            </span>
          </Card>

          <Card variant="default" className="border-l-4 border-l-cpa-gold p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-1">
              State Governments
            </span>
            <h3 className="text-base font-bold text-cpa-navy mb-2">
              Goa PWD &amp; Haryana PWD
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
              Approved for projects with no financial limit in Goa (Class IA) and Haryana (Class-I across all circles).
            </p>
            <span className="inline-block text-[11px] font-mono text-cpa-navy font-semibold bg-cpa-offwhite px-2 py-1 rounded-sm border border-cpa-surface-border">
              Class IA (No Financial Limit)
            </span>
          </Card>

          <Card variant="default" className="border-l-4 border-l-cpa-gold p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-1">
              Delhi Municipal Zones
            </span>
            <h3 className="text-base font-bold text-cpa-navy mb-2">
              Municipal Corp. of Delhi
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
              Class-I registered contractor with a ₹20 Crore tender limit across South, North, and East Delhi.
            </p>
            <span className="inline-block text-[11px] font-mono text-cpa-navy font-semibold bg-cpa-offwhite px-2 py-1 rounded-sm border border-cpa-surface-border">
              Category-I (₹20 Cr)
            </span>
          </Card>

          <Card variant="default" className="border-l-4 border-l-cpa-gold p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-1">
              Public Sector &amp; Metro
            </span>
            <h3 className="text-base font-bold text-cpa-navy mb-2">
              NBCC &amp; Delhi Metro (DMRC)
            </h3>
            <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
              Empaneled contractor for NBCC projects (₹25 Cr–₹50 Cr) and pre-qualified for Delhi Metro (DMRC) civil work.
            </p>
            <span className="inline-block text-[11px] font-mono text-cpa-navy font-semibold bg-cpa-offwhite px-2 py-1 rounded-sm border border-cpa-surface-border">
              Empaneled Contractor
            </span>
          </Card>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 3. VERIFIED STATUTORY CERTIFICATES GRID                   */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Official Certificates"
          title="Verified Government Certificates"
          description="Click on any certificate below to view the full original document, registration numbers, and official government stamps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STATUTORY_CERTIFICATES.map((cert) => (
            <CertificateCard
              key={cert.id}
              title={cert.title}
              issuingAuthority={cert.issuingAuthority}
              classification={cert.classification}
              referenceNo={cert.referenceNo}
              validity={cert.validity}
              imageUrl={cert.imageUrl}
              onPreview={() => setActiveCertificate(cert)}
            />
          ))}
        </div>

        {/* Modal for viewing certificate document */}
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      </SectionContainer>

      {/* ========================================================= */}
      {/* 4. STATUTORY COMPLIANCE & TRANSPARENCY NOTICE             */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <div className="max-w-4xl mx-auto bg-cpa-offwhite border border-cpa-surface-border rounded-sm p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cpa-gold/20 flex items-center justify-center shrink-0 text-cpa-navy font-bold text-lg">
              !
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-cpa-navy font-sans">
                Certificate Verification &amp; Transparency Notice
              </h4>
              <p className="text-xs sm:text-base text-cpa-text-secondary leading-relaxed">
                All certificates shown on this website are genuine scans of official registration letters and orders issued to M/s C P Arora Engineers Contractors Pvt. Ltd. by government departments.
              </p>
              <p className="text-xs text-cpa-text-muted leading-relaxed">
                Updated renewal letters, bank solvency certificates, GST filings, and other tender documents can be shared directly upon request.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 5. JOINT VENTURE & CLIENT PARTNER NETWORK                 */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Our Clients &amp; Working Partners"
          description="Reputed government bodies and major infrastructure companies we have proudly worked with."
        />

        <LogoStrip
          logos={partnersForStrip}
          title="Trusted by Government Departments and Industry Leaders"
        />
      </SectionContainer>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION                                         */}
      {/* ========================================================= */}
      <CTASection
        title="Need Official Certificates for an Upcoming Tender?"
        description="Our team can provide verified copies of our registration certificates, tax records, and audited financial reports for tender submissions."
        primaryAction={{ label: "Contact Our Team", href: "/contact-us" }}
        secondaryAction={{ label: "View Our Projects", href: "/projects" }}
      />
    </div>
  );
}
