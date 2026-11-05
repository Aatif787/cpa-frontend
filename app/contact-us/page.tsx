"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";

interface FormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  scope: string;
  message: string;
}

const INQUIRY_SCOPES = [
  "Highway & Road Construction",
  "Airport Runway & Paving",
  "Road Maintenance & Repairs",
  "Road Resurfacing & Crack Sealing",
  "Machinery & Equipment Rental / Deployment",
  "Joint Venture / Partnership",
  "Tender Qualification & Certificates",
  "General Inquiry",
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    scope: INQUIRY_SCOPES[0],
    message: "",
  });

  const [botCheck, setBotCheck] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>("");

  const sanitizeHeader = (str: string): string => {
    return str.replace(/[\r\n\t]/g, " ").trim().slice(0, 150);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const generateEmailBody = (): string => {
    const cleanName = sanitizeHeader(formData.name);
    const cleanOrg = sanitizeHeader(formData.organization);
    const cleanEmail = sanitizeHeader(formData.email);
    const cleanPhone = sanitizeHeader(formData.phone);
    const cleanScope = sanitizeHeader(formData.scope);
    const cleanMessage = formData.message.trim().slice(0, 3000);

    return (
      `INQUIRY FOR C P ARORA ENGINEERS & CONTRACTORS\n` +
      `-----------------------------------------------------\n` +
      `Full Name: ${cleanName || "[Not Provided]"}\n` +
      `Company / Department: ${cleanOrg || "[Not Provided]"}\n` +
      `Email: ${cleanEmail || "[Not Provided]"}\n` +
      `Phone: ${cleanPhone || "[Not Provided]"}\n` +
      `Subject: ${cleanScope}\n` +
      `-----------------------------------------------------\n` +
      `Project Details & Message:\n${cleanMessage || "[No details provided]"}\n\n` +
      `Sent from cparora.com contact form.`
    );
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam bot check
    if (botCheck) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setValidationError("Please enter your full name and email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError("Please enter a valid email address (e.g. name@company.com).");
      return;
    }

    const cleanSubject = sanitizeHeader(
      `Inquiry: ${formData.scope} - ${formData.organization || formData.name}`
    );
    const subject = encodeURIComponent(cleanSubject);
    const body = encodeURIComponent(generateEmailBody());
    const mailtoUrl = `mailto:info@cparora.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  const handleCopyToClipboard = async () => {
    if (!formData.name.trim() && !formData.message.trim()) {
      setValidationError("Please fill in your details before copying.");
      return;
    }

    try {
      await navigator.clipboard.writeText(generateEmailBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setValidationError("Could not copy to clipboard. Please send an email directly to info@cparora.com.");
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. PAGE HEADER                                            */}
      {/* ========================================================= */}
      <PageHeader
        theme="navy"
        badge="Get In Touch"
        eyebrow="Contact Our Team"
        title="Contact C P Arora Engineers &amp; Contractors"
        description="Get in touch with our head office and project teams for government road contracts, airport runway work, joint ventures, or machinery deployment."
        breadcrumbs={[{ label: "Contact Us" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button href="/infrastructure" variant="gold" size="md">
              Our Machinery Fleet
            </Button>
            <Button
              href="/registrations"
              variant="outline"
              size="md"
              className="!border-white/40 !text-white hover:!border-cpa-gold hover:!text-cpa-gold"
            >
              Government Registrations
            </Button>
          </div>
        }
      />

      {/* ========================================================= */}
      {/* 2. VERIFIED CONTACT COORDINATES                           */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Registered Corporate Address */}
          <Card variant="elevated" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-2">
                Head Office
              </span>
              <h3 className="text-lg font-bold text-cpa-navy font-sans tracking-tight mb-3">
                Registered Head Office
              </h3>
              <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
                <strong className="text-cpa-navy block mb-1">
                  M/s C P Arora Engineers Contractors Pvt. Ltd.
                </strong>
                175, MIG Flats, Prasad Nagar,<br />
                Near Karol Bagh, New Delhi &ndash; 110005,<br />
                National Capital Territory of Delhi, India.
              </p>
              <div className="pt-3 border-t border-cpa-surface-border space-y-1 text-xs text-cpa-text-muted">
                <div>
                  <span className="font-mono uppercase text-[10px] text-cpa-text-secondary">
                    Registered Address:
                  </span>{" "}
                  As per official CPWD &amp; MCD records
                </div>
                <div>
                  <span className="font-mono uppercase text-[10px] text-cpa-text-secondary">
                    Operating Area:
                  </span>{" "}
                  All India / North India
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cpa-surface-border">
              <a
                href="https://maps.google.com/?q=Prasad+Nagar+Karol+Bagh+New+Delhi+110005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-wider text-cpa-gold hover:text-cpa-navy font-semibold inline-flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-cpa-gold"
              >
                <span>Open in Google Maps</span>
                <span>&rarr;</span>
              </a>
            </div>
          </Card>

          {/* Card 2: Direct Telephones */}
          <Card variant="elevated" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-2">
                Phone Numbers
              </span>
              <h3 className="text-lg font-bold text-cpa-navy font-sans tracking-tight mb-3">
                Phone &amp; Mobile Numbers
              </h3>
              <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
                Call our project and office teams directly:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-2.5 bg-cpa-offwhite rounded-sm border border-cpa-surface-border">
                  <span className="block text-[10px] font-mono uppercase text-cpa-text-muted mb-0.5">
                    Mobile (Tenders &amp; Business)
                  </span>
                  <a
                    href="tel:+919313271100"
                    className="text-sm font-mono font-bold text-cpa-navy hover:text-cpa-gold transition-colors block"
                  >
                    +91 93132 71100
                  </a>
                </div>

                <div className="p-2.5 bg-cpa-offwhite rounded-sm border border-cpa-surface-border">
                  <span className="block text-[10px] font-mono uppercase text-cpa-text-muted mb-0.5">
                    Mobile (Site &amp; Operations)
                  </span>
                  <a
                    href="tel:+919999666060"
                    className="text-sm font-mono font-bold text-cpa-navy hover:text-cpa-gold transition-colors block"
                  >
                    +91 99996 66060
                  </a>
                </div>

                <div className="p-2.5 bg-cpa-offwhite rounded-sm border border-cpa-surface-border">
                  <span className="block text-[10px] font-mono uppercase text-cpa-text-muted mb-0.5">
                    Office Landline
                  </span>
                  <a
                    href="tel:01145544126"
                    className="text-sm font-mono text-cpa-navy hover:text-cpa-gold transition-colors block"
                  >
                    011-45544126 / 27 / 28
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cpa-surface-border text-xs text-cpa-text-muted">
              <span>Available Monday to Saturday during office hours.</span>
            </div>
          </Card>

          {/* Card 3: Official Electronic Mail */}
          <Card variant="elevated" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-bold block mb-2">
                Email Us
              </span>
              <h3 className="text-lg font-bold text-cpa-navy font-sans tracking-tight mb-3">
                Official Email Addresses
              </h3>
              <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
                Send tender inquiries, project drawings, or general questions to:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-2.5 bg-cpa-offwhite rounded-sm border border-cpa-surface-border">
                  <span className="block text-[10px] font-mono uppercase text-cpa-text-muted mb-0.5">
                    Main Office Email
                  </span>
                  <a
                    href="mailto:info@cparora.com"
                    className="text-sm font-mono font-bold text-cpa-navy hover:text-cpa-gold transition-colors block break-all"
                  >
                    info@cparora.com
                  </a>
                </div>

                <div className="p-2.5 bg-cpa-offwhite rounded-sm border border-cpa-surface-border">
                  <span className="block text-[10px] font-mono uppercase text-cpa-text-muted mb-0.5">
                    Executive Emails
                  </span>
                  <div className="space-y-1">
                    <a
                      href="mailto:ckg@cpagroup.co.in"
                      className="text-xs font-mono text-cpa-text-secondary hover:text-cpa-navy block"
                    >
                      ckg@cpagroup.co.in
                    </a>
                    <a
                      href="mailto:krmv@cpagroup.co.in"
                      className="text-xs font-mono text-cpa-text-secondary hover:text-cpa-navy block"
                    >
                      krmv@cpagroup.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cpa-surface-border">
              <a
                href="mailto:info@cparora.com?subject=Inquiry%20-%20C%20P%20Arora"
                className="text-xs font-mono uppercase tracking-wider text-cpa-gold hover:text-cpa-navy font-semibold inline-flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-cpa-gold"
              >
                <span>Send Us an Email</span>
                <span>&rarr;</span>
              </a>
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 3. DIRECT INQUIRY & EMAIL COMPOSER                        */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" className="border-b border-cpa-surface-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-5">
            <Badge variant="gold">Send a Message</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cpa-navy font-sans tracking-tight leading-tight">
              Send Us a Project Inquiry
            </h2>
            <p className="text-sm text-cpa-text-secondary leading-relaxed">
              We value your privacy and security. We do not store or send sensitive project information through unverified third-party websites.
            </p>
            <p className="text-sm text-cpa-text-secondary leading-relaxed">
              Fill out this simple form to organize your project details and requirements. Clicking the button opens your email app with all details ready to send directly to <strong className="text-cpa-navy font-mono">info@cparora.com</strong>.
            </p>

            {/* Corporate facility verification photo — zero text on image */}
            <div className="rounded-sm overflow-hidden border border-cpa-surface-border shadow-sm mt-4 bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy">
                <Image
                  src="/images/corporate/office.jpg"
                  alt="C P Arora corporate office building exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-cpa-white border-t border-cpa-surface-border flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-wider text-cpa-gold-dark font-semibold text-[10px]">
                  Head Office
                </span>
                <span className="text-cpa-text-secondary text-xs">
                  New Delhi Office
                </span>
              </div>
            </div>
          </div>

          {/* Right Interactive Composer Column */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-6 sm:p-8 bg-cpa-white">
              <div className="flex items-center justify-between border-b border-cpa-surface-border pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-cpa-navy font-sans tracking-tight">
                    Project Inquiry Form
                  </h3>
                  <span className="text-xs font-mono text-cpa-text-muted">
                    Direct Email Generator
                  </span>
                </div>
                <Badge variant="gold">Direct Contact</Badge>
              </div>

              {validationError && (
                <div className="p-3 mb-5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                  {validationError}
                </div>
              )}

              {copied && (
                <div className="p-3 mb-5 bg-orange-50 border border-orange-200 text-[#9A3412] text-xs rounded-sm font-medium">
                  Message copied to clipboard! You can now paste it into your email.
                </div>
              )}

              <form onSubmit={handleLaunchEmailClient} className="space-y-4">
                {/* Honeypot Anti-bot Field (hidden from screen readers & humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp-field">Leave this empty</label>
                  <input
                    id="website-hp-field"
                    type="text"
                    name="_hp_website_check"
                    value={botCheck}
                    onChange={(e) => setBotCheck(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                    >
                      Company / Department Name *
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. State PWD / NHAI / Private Company"
                      className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98000 00000"
                      className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-scope"
                    className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                  >
                    Project Type / Subject *
                  </label>
                  <select
                    id="contact-scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors"
                  >
                    {INQUIRY_SCOPES.map((scope, idx) => (
                      <option key={idx} value={scope}>
                        {scope}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-cpa-navy mb-1.5"
                  >
                    Project Details &amp; Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please share project location, estimated timeline, required machinery, and any specific requirements..."
                    className="w-full px-3.5 py-2.5 bg-cpa-offwhite border border-cpa-surface-border rounded-sm text-sm text-cpa-text-primary focus:border-cpa-gold focus:outline-none focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto text-xs"
                  >
                    Open in Email App &rarr;
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleCopyToClipboard}
                    className="w-full sm:w-auto text-xs"
                  >
                    Copy Message
                  </Button>
                </div>

                <p className="text-[11px] text-cpa-text-muted leading-relaxed pt-2">
                  Note: Clicking &quot;Open in Email App&quot; will open your email app (like Outlook or Gmail) with your message already typed out and ready to send to <strong className="text-cpa-navy font-mono">info@cparora.com</strong>.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 4. CALL TO ACTION                                         */}
      {/* ========================================================= */}
      <CTASection
        title="Need Official Certificates for a Tender?"
        description="View our complete list of verified government certificates from CPWD, Goa PWD, Haryana PWD, and MCD Delhi."
        primaryAction={{ label: "View Registrations", href: "/registrations" }}
        secondaryAction={{ label: "View Major Projects", href: "/major-projects" }}
      />
    </div>
  );
}
