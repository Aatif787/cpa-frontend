import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cpa-navy text-cpa-text-inverse border-t-2 border-cpa-gold/40 mt-auto">
      {/* Main Footer Content */}
      <div className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Brand & Overview (4 cols) */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 bg-cpa-white rounded p-1 shadow-sm flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="C P Arora Logo"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="block text-xl font-bold tracking-tight text-cpa-white font-sans">
                      C P ARORA
                    </span>
                    <span className="block text-[10px] font-mono tracking-widest text-cpa-gold uppercase">
                      Engineers & Contractors
                    </span>
                  </div>
                </div>
              </Link>
              <p className="text-cpa-text-inverse-muted text-sm leading-relaxed mb-6 max-w-sm">
                A trusted Indian infrastructure contractor specializing in national highways,
                airport runways, road resurfacing, and major city road projects.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-cpa-gold">
                <span className="w-2 h-2 rounded-full bg-cpa-gold animate-pulse" />
                <span>Class-I Road &amp; Infrastructure Contractor</span>
              </div>
            </div>

            {/* Column 2: Navigation - About & Governance (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cpa-gold mb-4 pb-1 border-b border-cpa-navy-border inline-block">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/about-us/company-profile"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/board-of-directors"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Board of Directors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/core-team"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Core Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registrations"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Registrations &amp; Licenses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financials"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Financial Standing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation - Projects & Operations (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cpa-gold mb-4 pb-1 border-b border-cpa-navy-border inline-block">
                Our Projects
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/ongoing-projects"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Ongoing Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/executed-projects"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Executed Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/major-projects"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    List of Major Projects Done
                  </Link>
                </li>
                <li>
                  <Link
                    href="/infrastructure"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150"
                  >
                    Machinery Fleet
                  </Link>
                </li>
                <li>
                  <a
                    href="https://vairajec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cpa-text-inverse-muted hover:text-cpa-gold transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>VaiRaj EnginCo (ITS)</span>
                    <span className="text-[10px] text-cpa-gold font-mono">&nearr;</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified Contact Coordinates (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cpa-gold mb-4 pb-1 border-b border-cpa-navy-border inline-block">
                Headquarters
              </h3>
              <div className="space-y-3 text-sm text-cpa-text-inverse-muted">
                <div>
                  <span className="block text-xs font-mono text-cpa-text-inverse uppercase tracking-wider mb-0.5">
                    Corporate Office
                  </span>
                  <p className="leading-snug text-xs text-cpa-text-inverse-muted">
                    New Delhi, India
                  </p>
                </div>
                <div>
                  <span className="block text-xs font-mono text-cpa-text-inverse uppercase tracking-wider mb-0.5">
                    Phone Numbers
                  </span>
                  <a
                    href="tel:+919313271100"
                    className="block text-xs hover:text-cpa-gold transition-colors"
                  >
                    +91 93132 71100
                  </a>
                  <a
                    href="tel:+919999666060"
                    className="block text-xs hover:text-cpa-gold transition-colors"
                  >
                    +91 99996 66060
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-mono text-cpa-text-inverse uppercase tracking-wider mb-0.5">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@cparora.com"
                    className="text-xs hover:text-cpa-gold transition-colors"
                  >
                    info@cparora.com
                  </a>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cpa-gold hover:text-cpa-white transition-colors border border-cpa-gold/30 px-3 py-1.5 rounded-sm hover:border-cpa-gold"
                  >
                    <span>Contact Our Team</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Sub-Footer / Legal & System Metadata */}
      <div className="border-t border-cpa-navy-border py-6 bg-cpa-navy-darkest text-xs text-cpa-text-inverse-muted">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>
                &copy; {currentYear} C P Arora Engineers &amp; Contractors. All rights reserved.
              </span>
              <span className="hidden sm:inline text-cpa-navy-border">|</span>
              <span className="font-mono text-[11px] text-cpa-gold">
                Roads &bull; Highways &bull; Airport Runways
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <Link
                href="/registrations"
                className="hover:text-cpa-gold transition-colors"
              >
                Licenses
              </Link>
              <span>&bull;</span>
              <Link
                href="/contact-us"
                className="hover:text-cpa-gold transition-colors"
              >
                Contact Us
              </Link>
              <span>&bull;</span>
              <a
                href="#main-content"
                className="hover:text-cpa-gold transition-colors inline-flex items-center gap-1"
              >
                <span>Top</span>
                <span>&uarr;</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
