"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us/company-profile",
    children: [
      {
        label: "Company Profile",
        href: "/about-us/company-profile",
        description: "Our company history, core values, and engineering approach.",
      },
      {
        label: "Board of Directors",
        href: "/about-us/board-of-directors",
        description: "Our leadership team and company directors.",
      },
      {
        label: "Core Team",
        href: "/about-us/core-team",
        description: "Our senior engineers and on-site project managers.",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      {
        label: "Ongoing Projects",
        href: "/ongoing-projects",
      },
      {
        label: "Executed Projects",
        href: "/executed-projects",
      },
      {
        label: "List of Major Projects Done",
        href: "/major-projects",
      },
    ],
  },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Registrations", href: "/registrations" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Utility Bar — Sleek Frosted Liquid Glass */}
      <div className="relative bg-[#031326]/85 backdrop-blur-2xl text-slate-300 text-[11px] font-mono border-b border-white/10 py-1.5 hidden sm:block overflow-hidden shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.06)]">
        {/* Subtle Specular Sheen Line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cpa-gold/40 to-transparent pointer-events-none" />
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-cpa-gold font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold animate-pulse" />
                Class-I Road &amp; Infrastructure Contractor
              </span>
              <span className="text-white/20">|</span>
              <span className="hidden md:inline text-slate-300">Highways &bull; Airport Runways &bull; Modern Paving</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+919313271100"
                className="hover:text-cpa-gold transition-colors flex items-center gap-1"
              >
                <span className="text-slate-400">Tel:</span>
                <span className="text-white font-medium">+91 93132 71100</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:info@cparora.com"
                className="hover:text-cpa-gold transition-colors text-slate-300"
              >
                info@cparora.com
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Sticky Header — 1000% Liquid Glass */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 relative ${
          scrolled
            ? "bg-white/45 backdrop-blur-3xl backdrop-saturate-[220%] shadow-[0_20px_50px_-15px_rgba(4,37,82,0.14),inset_0_1.5px_0_0_rgba(255,255,255,0.95),inset_0_-1px_0_0_rgba(255,255,255,0.3)] border-b border-white/45"
            : "bg-white/50 backdrop-blur-2xl backdrop-saturate-[200%] shadow-[0_10px_35px_-8px_rgba(4,37,82,0.08),inset_0_1.5px_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(255,255,255,0.25)] border-b border-white/40"
        }`}
        style={{
          WebkitBackdropFilter: scrolled
            ? "blur(32px) saturate(220%) contrast(102%)"
            : "blur(26px) saturate(200%) contrast(102%)",
          backdropFilter: scrolled
            ? "blur(32px) saturate(220%) contrast(102%)"
            : "blur(26px) saturate(200%) contrast(102%)",
        }}
      >
        {/* Top Razor-Thin Specular Reflection Rim */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none opacity-95 z-20" />
        {/* Bottom Liquid Refraction Edge */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-20" />
        {/* Ambient Liquid Glass Glow Flares */}
        <div className="absolute -top-10 left-1/4 w-[500px] h-20 bg-white/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -top-10 right-1/4 w-[400px] h-20 bg-cpa-gold/15 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Lockup with Liquid Glass Hover Capsule */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold p-2 px-3 rounded-2xl transition-all duration-300 bg-white/35 hover:bg-white/55 backdrop-blur-xl border border-white/60 hover:border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_4px_16px_rgba(4,37,82,0.05)] shrink-0"
              aria-label="C P Arora - Home"
            >
              <div className="relative w-12 h-10 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(4,37,82,0.18)]">
                <Image
                  src="/logo.png"
                  alt="C P Arora Corporate Emblem"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-cpa-navy leading-none font-sans drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  C P ARORA
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-700 font-semibold mt-1">
                  Civil Engineering &amp; Infrastructure
                </span>
              </div>
            </Link>

            {/* Desktop Navigation — Floating Liquid Capsule Island */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_0_rgba(255,255,255,0.2),0_8px_24px_-4px_rgba(4,37,82,0.06)] shrink-0"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive =
                  pathname === item.href ||
                  (item.children &&
                    item.children.some((child) => pathname === child.href));

                if (hasChildren) {
                  const isOpen = activeDropdown === item.label;
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      onFocus={() => handleMouseEnter(item.label)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setActiveDropdown(isOpen ? null : item.label)
                        }
                        className={`whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold ${
                          isActive
                            ? "bg-white/90 text-cpa-navy font-extrabold shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,1),0_4px_14px_rgba(4,37,82,0.1)] border border-white"
                            : isOpen
                            ? "bg-white/80 text-cpa-navy shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.95),0_2px_8px_rgba(4,37,82,0.06)] border border-white/80"
                            : "text-[#0e1d33] hover:text-cpa-navy hover:bg-white/60 hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] border border-transparent hover:border-white/70"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-cpa-gold" : "text-cpa-navy/60"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu — Pure Floating Liquid Glass */}
                      {isOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2.5 z-50">
                          <div
                            className="relative bg-white/75 backdrop-blur-3xl backdrop-saturate-[220%] border border-white/80 rounded-2xl shadow-[0_24px_64px_-10px_rgba(4,37,82,0.22),inset_0_1.5px_0_0_rgba(255,255,255,0.95),inset_0_-1px_0_0_rgba(255,255,255,0.3)] p-2 overflow-hidden"
                            style={{
                              WebkitBackdropFilter: "blur(32px) saturate(220%)",
                              backdropFilter: "blur(32px) saturate(220%)",
                            }}
                          >
                            {/* Dropdown Top Specular Highlight */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cpa-gold/80 to-transparent pointer-events-none" />

                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-3.5 py-2.5 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold ${
                                    isChildActive
                                      ? "bg-gradient-to-r from-cpa-gold/20 via-white/80 to-white/90 border-l-2 border-cpa-gold shadow-sm font-extrabold"
                                      : "hover:bg-white/60 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_2px_8px_rgba(4,37,82,0.03)]"
                                  }`}
                                >
                                  <div
                                    className={`text-xs font-bold ${
                                      isChildActive
                                        ? "text-cpa-gold-dark font-extrabold"
                                        : "text-cpa-navy"
                                    }`}
                                  >
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-[11px] text-slate-600 mt-0.5 leading-normal font-sans">
                                      {child.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold ${
                      isActive
                        ? "bg-white/90 text-cpa-navy font-extrabold shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,1),0_4px_14px_rgba(4,37,82,0.1)] border border-white"
                        : "text-[#0e1d33] hover:text-cpa-navy hover:bg-white/60 hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] border border-transparent hover:border-white/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions — Liquid Glass Pill Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-br from-[#0c264a] via-[#041a35] to-[#020e1f] hover:from-[#113566] hover:to-[#051c3b] backdrop-blur-xl rounded-full transition-all duration-300 shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.5),0_8px_20px_rgba(4,37,82,0.25)] border border-white/35 hover:border-cpa-gold/60 hover:shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.7),0_12px_28px_rgba(223,191,98,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold shrink-0 whitespace-nowrap overflow-hidden"
              >
                {/* Liquid Prismatic Sheen Sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center gap-1.5 font-bold">
                  <span>Contact Us</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button — Liquid Glass Pill */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/65 backdrop-blur-xl border border-white/70 text-cpa-navy hover:bg-white/85 transition-all shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.95),0_4px_14px_rgba(4,37,82,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Menu Drawer — 1000% Floating Liquid Glass Sheet */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden fixed inset-x-0 top-[116px] sm:top-20 bottom-0 z-40 bg-cpa-navy/30 backdrop-blur-md p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="bg-white/80 backdrop-blur-3xl backdrop-saturate-[220%] border border-white/75 rounded-3xl shadow-[0_30px_70px_rgba(4,37,82,0.25),inset_0_1.5px_0_0_rgba(255,255,255,0.95)] max-h-[calc(100vh-140px)] overflow-y-auto p-5"
              style={{
                WebkitBackdropFilter: "blur(32px) saturate(220%)",
                backdropFilter: "blur(32px) saturate(220%)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/40 pb-2.5"
                  >
                    {item.children ? (
                      <div>
                        <div className="font-mono text-xs uppercase tracking-wider text-cpa-gold font-bold mb-2">
                          {item.label}
                        </div>
                        <div className="flex flex-col space-y-1.5 pl-2">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`py-2 px-3 rounded-xl text-sm font-medium min-h-[44px] flex items-center transition-all ${
                                  isChildActive
                                    ? "bg-gradient-to-r from-cpa-gold/20 via-white/80 to-white/90 text-cpa-gold-dark font-bold border-l-2 border-cpa-gold shadow-sm"
                                    : "text-cpa-navy hover:bg-white/50"
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-2 px-3 rounded-xl text-sm font-semibold min-h-[44px] flex items-center transition-all ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-cpa-gold/20 via-white/80 to-white/90 text-cpa-gold-dark font-bold border-l-2 border-cpa-gold shadow-sm"
                            : "text-cpa-navy hover:bg-white/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 pt-3 space-y-3">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-br from-[#0c2447] via-[#041a35] to-[#020e1f] rounded-full shadow-[inset_0_1.5px_1px_0_rgba(255,255,255,0.45),0_8px_20px_rgba(4,37,82,0.25)] border border-white/30 min-h-[44px]"
                >
                  Contact Our Team &rarr;
                </Link>
                <div className="text-center font-mono text-xs text-cpa-navy/70 pt-2">
                  <a href="tel:+919313271100" className="hover:text-cpa-navy font-medium">
                    Direct Tel: +91 93132 71100
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
