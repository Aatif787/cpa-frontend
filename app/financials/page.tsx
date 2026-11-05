import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Financial Standing & Bidding Capacity",
  description:
    "Documented departmental bidding limits, institutional banking frameworks, and official protocol for requesting audited financial statements for technical pre-qualification.",
  keywords: [
    "C P Arora Financials",
    "Contractor Bidding Capacity",
    "Class-I Tendering Solvency",
    "Goa PWD No Limit Contractor",
    "MCD Class-1 Contractor Solvency",
  ],
};

interface TenderingLimit {
  authority: string;
  classification: string;
  tenderingCeiling: string;
  referenceOrder: string;
  validityOnRecord: string;
  status: "Active Statutory Enlistment" | "Documented Order";
  notes: string;
}

const VERIFIED_TENDERING_LIMITS: TenderingLimit[] = [
  {
    authority: "Public Works Department, Goa",
    classification: "Class IA (Roads, Bridges & Land Development)",
    tenderingCeiling: "NO LIMIT (Any Amount)",
    referenceOrder: "Reg. No. 6-3/PCE-PWD/EO/RBLD/IA-167/2020",
    validityOnRecord: "01/12/2020 to 30/11/2025",
    status: "Active Statutory Enlistment",
    notes:
      "Statutory enlistment order issued by the Office of the Principal Chief Engineer, Panaji, authorizing participation in high-value tenders without monetary ceiling.",
  },
  {
    authority: "South Delhi Municipal Corporation (MCD)",
    classification: "Category-I (Civil - Road Only)",
    tenderingCeiling: "₹20,00,00,000/- (₹20 Crores)",
    referenceOrder: "Reg. No. 30305 / B&R / 2018 / CL-I",
    validityOnRecord: "22.01.2018 to 21.01.2023",
    status: "Documented Order",
    notes:
      "Issued by Engineering Dept. HQ, Dr. SPM Civic Centre, New Delhi. Valid across South, North, and East Delhi Municipal Corporations under reciprocal tendering rules.",
  },
  {
    authority: "NBCC (India) Limited",
    classification: "Category C-2 (Road / Highways & Fencing)",
    tenderingCeiling: "Group GP-III (₹25 Crs to ₹50 Crs)",
    referenceOrder: "No. NBCC/ED/PQ_CONTRACTORS/2014-15/119",
    validityOnRecord: "Dated 16.03.2015 (Valid to 30.11.2015 on record)",
    status: "Documented Order",
    notes:
      "Pre-qualification empanelment communication from NBCC Empanelment Division for multi-crore specialized highway and infrastructure packages.",
  },
  {
    authority: "Delhi Metro Rail Corporation (DMRC)",
    classification: "Category III Civil Infrastructure",
    tenderingCeiling: "₹5 Crore to ₹10 Crore Works",
    referenceOrder: "Empanelment Schedule (Serial No. 27)",
    validityOnRecord: "Documented Empanelment Record",
    status: "Documented Order",
    notes:
      "Empaneled contractor under DMRC List of Qualified Applicants for specialized transit civil works and arterial feeder corridors.",
  },
  {
    authority: "Haryana PWD (B&R) Branch",
    classification: "Class-I (Any Limit) - Roads Works",
    tenderingCeiling: "Class-I (Any Limit)",
    referenceOrder: "Enlistment No. 4846 / Endst. No. 3191/Genl",
    validityOnRecord: "Dated 27-7-2015 (Valid to 31.03.2018 on record)",
    status: "Documented Order",
    notes:
      "Statutory certificate issued by Engineer-in-Chief, Haryana PWD B&R Branch, Chandigarh, covering all departmental circles in Haryana.",
  },
  {
    authority: "Central Public Works Department (CPWD)",
    classification: "Class-I (Civil Road Only)",
    tenderingCeiling: "National Class-I Civil Tendering",
    referenceOrder: "Office Order 19 (File C/14-03/2007-I)",
    validityOnRecord: "Office Order dt. 27.09.2013 & Ext. dt. 27/01/2018",
    status: "Documented Order",
    notes:
      "National apex enlistment revalidation issued by Directorate General, CSQ Organisation, Nirman Bhawan, New Delhi.",
  },
];

export default function FinancialsPage() {
  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. PAGE HEADER                                            */}
      {/* ========================================================= */}
      <PageHeader
        theme="navy"
        badge="Financial Standing"
        eyebrow="Financial Strength &amp; Bidding Limits"
        title="Financial Standing &amp; Bidding Capacity"
        description="Official government bidding limits, bank support, and the process for requesting audited financial statements for tenders."
        breadcrumbs={[{ label: "Financials" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button href="/contact-us" variant="gold" size="md">
              Request Bid Documents &rarr;
            </Button>
            <Button
              href="/registrations"
              variant="outline"
              size="md"
              className="!border-white/40 !text-white hover:!border-cpa-gold hover:!text-cpa-gold"
            >
              Government Certificates
            </Button>
          </div>
        }
      />

      {/* ========================================================= */}
      {/* 2. STATUTORY BIDDING CAPACITY OVERVIEW                    */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Tendering Limits"
          title="Approved Government Bidding Capacities"
          description="Project limits granted to C P Arora by central and state government departments based on verified experience and financial strength."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VERIFIED_TENDERING_LIMITS.map((limit, idx) => (
            <Card
              key={idx}
              variant="elevated"
              className="p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-cpa-gold"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold">
                    {limit.authority}
                  </span>
                  <Badge variant={limit.status === "Active Statutory Enlistment" ? "gold" : "navy"}>
                    {limit.status === "Active Statutory Enlistment" ? "Active Limit" : "Documented"}
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-mono text-cpa-navy tracking-tight mt-1 mb-2">
                  {limit.tenderingCeiling}
                </h3>

                <div className="space-y-1.5 py-3 border-y border-cpa-surface-border my-3 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-cpa-text-muted block">
                      Classification
                    </span>
                    <span className="font-semibold text-cpa-navy">
                      {limit.classification}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-cpa-text-muted block">
                      Order Reference
                    </span>
                    <span className="font-mono text-cpa-text-secondary text-[11px] break-all">
                      {limit.referenceOrder}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-cpa-text-muted block">
                      Validity On Record
                    </span>
                    <span className="font-mono text-cpa-text-secondary">
                      {limit.validityOnRecord}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-cpa-text-secondary leading-relaxed">
                  {limit.notes}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-cpa-surface-border">
                <Link
                  href="/registrations"
                  className="text-[11px] font-mono uppercase tracking-wider text-cpa-gold hover:text-cpa-navy font-semibold inline-flex items-center gap-1.5"
                >
                  <span>View Certificate Scan</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 3. FINANCIAL DISCLOSURE & INTEGRITY POLICY                */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" className="border-b border-cpa-surface-border">
        <div className="max-w-4xl mx-auto bg-cpa-white border border-cpa-surface-border rounded-sm p-6 sm:p-10 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-cpa-navy text-cpa-gold flex items-center justify-center shrink-0 font-bold font-mono text-xl border border-cpa-gold/30">
              §
            </div>
            <div className="space-y-4">
              <Badge variant="gold">Transparency Policy</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-cpa-navy font-sans tracking-tight">
                Our Policy on Financial Figures &amp; Turnover
              </h3>
              <p className="text-sm text-cpa-text-secondary leading-relaxed">
                We believe in complete honesty and clear records. Here is how we handle financial figures:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cpa-text-primary">
                <li className="flex items-start gap-2.5">
                  <span className="text-cpa-gold font-bold">&#10003;</span>
                  <span>
                    <strong>Verified Turnover Figures:</strong> We do not publish unverified marketing turnover claims. All financial numbers shared for tenders are backed by official Chartered Accountant audit certificates.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cpa-gold font-bold">&#10003;</span>
                  <span>
                    <strong>Up-to-Date Records:</strong> We provide current, audited statements so clients and partners always have an accurate view of our financial strength.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cpa-gold font-bold">&#10003;</span>
                  <span>
                    <strong>Official Tender Documents:</strong> Audited balance sheets, CA Turnover Certificates with official UDIN numbers, and Bank Solvency letters are provided directly to government departments and project partners during tender bidding.
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="text-xs font-mono text-cpa-text-muted">
                  Official Record Guide: docs/financial-content-verification.md
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 4. INSTITUTIONAL BANKING & SOLVENCY FRAMEWORK            */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Banking Support"
          title="Banking Support &amp; Financial Health"
          description="Strong banking relationships and clean financial records that support multi-crore highway projects and airport works."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <Card variant="elevated" className="p-6 sm:p-7">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-semibold block mb-2">
              Bank Facilities
            </span>
            <h3 className="text-lg font-bold text-cpa-navy mb-2">
              Bank Guarantees &amp; Credit
            </h3>
            <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
              Strong credit ties with major banks providing Bank Guarantees (BG) for earnest money deposits, performance security, and project mobilization.
            </p>
            <div className="text-xs font-mono text-cpa-navy font-semibold pt-2 border-t border-cpa-surface-border">
              Facility: Bank Guarantees &amp; LCs
            </div>
          </Card>

          <Card variant="elevated" className="p-6 sm:p-7">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-semibold block mb-2">
              Audit Standards
            </span>
            <h3 className="text-lg font-bold text-cpa-navy mb-2">
              Audited by Chartered Accountants
            </h3>
            <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
              Every tender bid includes audited balance sheets and turnover certificates verified with official UDIN numbers from the Institute of Chartered Accountants of India.
            </p>
            <div className="text-xs font-mono text-cpa-navy font-semibold pt-2 border-t border-cpa-surface-border">
              Verified: ICAI UDIN Numbers
            </div>
          </Card>

          <Card variant="elevated" className="p-6 sm:p-7">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-semibold block mb-2">
              Tax &amp; Labor Compliance
            </span>
            <h3 className="text-lg font-bold text-cpa-navy mb-2">
              100% Tax &amp; Labor Compliant
            </h3>
            <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
              Clean and up-to-date filings for GST, Corporate Income Tax (ITR), Provident Fund (EPF), and Employee State Insurance (ESIC).
            </p>
            <div className="text-xs font-mono text-cpa-navy font-semibold pt-2 border-t border-cpa-surface-border">
              Status: Fully Cleared &amp; Up to Date
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 5. PROTOCOL FOR PROCURING BID DOCUMENTS                  */}
      {/* ========================================================= */}
      <SectionContainer theme="navy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <Badge variant="gold">Tender Document Desk</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cpa-white font-sans tracking-tight leading-tight">
              Request Tender &amp; Financial Documents
            </h2>
            <p className="text-cpa-text-inverse-muted text-sm sm:text-base leading-relaxed font-light">
              Government departments, tender committees, and project partners who need audited balance sheets, tax reports, or bank solvency certificates can request them directly from our office.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-cpa-navy-light/60 border border-cpa-gold/20 rounded-sm">
                <span className="block text-xs font-mono text-cpa-gold font-bold mb-1">
                  Step 1: Tender Details
                </span>
                <p className="text-xs text-cpa-text-inverse-muted leading-relaxed">
                  Share the tender reference number, client name, and required financial criteria.
                </p>
              </div>

              <div className="p-4 bg-cpa-navy-light/60 border border-cpa-gold/20 rounded-sm">
                <span className="block text-xs font-mono text-cpa-gold font-bold mb-1">
                  Step 2: CA Verification
                </span>
                <p className="text-xs text-cpa-text-inverse-muted leading-relaxed">
                  Our finance team prepares CA-certified turnover letters with official UDIN numbers.
                </p>
              </div>

              <div className="p-4 bg-cpa-navy-light/60 border border-cpa-gold/20 rounded-sm">
                <span className="block text-xs font-mono text-cpa-gold font-bold mb-1">
                  Step 3: Direct Delivery
                </span>
                <p className="text-xs text-cpa-text-inverse-muted leading-relaxed">
                  Sent directly by official email or sealed courier to the designated tender office.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 bg-cpa-navy-light/40 border border-cpa-gold/30 rounded-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-semibold block mb-2">
                Finance Desk
              </span>
              <h3 className="text-lg font-bold text-cpa-white mb-2">
                Tender Inquiries
              </h3>
              <p className="text-xs text-cpa-text-inverse-muted leading-relaxed mb-4">
                Handled directly by our contracts and finance directors in New Delhi.
              </p>
              <div className="space-y-2 mb-5">
                <a
                  href="mailto:info@cparora.com?subject=Tender%20Financial%20Request"
                  className="text-xs font-mono font-bold text-cpa-gold hover:text-cpa-white block"
                >
                  info@cparora.com
                </a>
                <a
                  href="tel:+919313271100"
                  className="text-xs font-mono text-cpa-white hover:text-cpa-gold block"
                >
                  +91 93132 71100
                </a>
              </div>
              <Button href="/contact-us" variant="gold" size="sm" className="w-full">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION                                         */}
      {/* ========================================================= */}
      <CTASection
        title="Ready to Work with Us on Road &amp; Highway Projects?"
        description="Explore our equipment fleet, completed projects, and government registrations."
        primaryAction={{ label: "View Our Machinery", href: "/infrastructure" }}
        secondaryAction={{ label: "View Our Projects", href: "/projects" }}
      />
    </div>
  );
}
