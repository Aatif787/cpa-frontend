"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

interface OngoingKeyProject {
  id: string;
  title: string;
  originalLabel: string;
  category: "National Highway" | "Airport Runway" | "Expressways" | "City & State Roads";
  location: string;
  status: "Ongoing" | "Completed" | "Landmark";
  image: string;
  alt: string;
  description: string;
  badge: string;
  href: string;
}

const ONGOING_KEY_PROJECTS: OngoingKeyProject[] = [
  {
    id: "odisha-cpc-work",
    title: "Odisha CPC Works (NH-16)",
    originalLabel: "Odisha Cpc Work",
    category: "National Highway",
    location: "Odisha, India",
    status: "Completed",
    image: "/images/projects/project1.jpg",
    alt: "Highway roadbed preparation and compaction on NH-16 in Odisha",
    description:
      "Four-lane highway construction, foundation stabilization, and precision asphalt paving on the strategic NH-16 coastal corridor.",
    badge: "NH-16 Corridor",
    href: "/major-projects",
  },
  {
    id: "igi-airport-security",
    title: "IGI Airport Airside Civil Infrastructure",
    originalLabel: "IGI Airport",
    category: "Airport Runway",
    location: "New Delhi International Airport",
    status: "Landmark",
    image: "/images/projects/project2.jpg",
    alt: "Airside perimeter security watchtower and civil structures at IGI Airport",
    description:
      "Airside perimeter watchtowers, boundary security infrastructure, and heavy stormwater drainage networks at Indira Gandhi International Airport.",
    badge: "Airside Security",
    href: "/major-projects",
  },
  {
    id: "apmd-igi-airport",
    title: "APMD IGI Airport Runway Paving",
    originalLabel: "APMD IGI Airport",
    category: "Airport Runway",
    location: "IGI Airport, New Delhi",
    status: "Landmark",
    image: "/images/projects/project3.jpg",
    alt: "Heavy asphalt sensor paver laying anti-skid surface on IGI Airport runway",
    description:
      "Precision asphalt sensor paver laying anti-skid friction courses on live runways during strictly controlled night airside windows.",
    badge: "Runway Resurfacing",
    href: "/major-projects",
  },
  {
    id: "south-west-road",
    title: "South West Road Corridors (Division I PWD)",
    originalLabel: "South West Road (Division I PWD)",
    category: "City & State Roads",
    location: "South West Delhi",
    status: "Completed",
    image: "/images/projects/project4.jpg",
    alt: "CPA Volvo vibratory roller executing road resurfacing for Delhi PWD",
    description:
      "Company-owned Volvo heavy vibratory rollers resurfacing high-capacity arterial routes for Delhi PWD Division I.",
    badge: "Delhi PWD Works",
    href: "/executed-projects",
  },
  {
    id: "dfvr-paschim-vihar",
    title: "DFVR-2 Paschim Vihar Arterial Road",
    originalLabel: "DFVR-2 Paschim Vihar",
    category: "City & State Roads",
    location: "Paschim Vihar, West Delhi",
    status: "Completed",
    image: "/images/projects/project5.jpg",
    alt: "Night-time asphalt paving and roller compaction on Outer Ring Road corridor",
    description:
      "Night-time wearing course resurfacing and heavy compaction executed with zero interruption to dense daytime metropolitan traffic.",
    badge: "Night Paving",
    href: "/executed-projects",
  },
  {
    id: "delhi-gurugram-16lane",
    title: "Delhi–Gurugram 16-Lane Expressway",
    originalLabel: "Delhi Gurugram 16-lane Highway",
    category: "Expressways",
    location: "Delhi NCR – Haryana Border",
    status: "Ongoing",
    image: "/images/projects/project6.jpg",
    alt: "Night sensor paver laying asphalt mat on Delhi-Gurugram Expressway",
    description:
      "High-output electronic sensor pavers laying dense bituminous concrete under live traffic conditions on India's highest-density corridor.",
    badge: "16-Lane Expressway",
    href: "/major-projects",
  },
  {
    id: "thrissur-edappally-nh544",
    title: "Thrissur to Edappally NH-544 (Kerala)",
    originalLabel: "Thrissur To Edapally NH-544 (Kerala)",
    category: "National Highway",
    location: "Central Kerala Corridor",
    status: "Landmark",
    image: "/images/projects/project7.jpg",
    alt: "Yellow dump truck feeding asphalt paver on NH-544 curved highway in Kerala",
    description:
      "Tropical rain-resistant bituminous concrete overlay engineered with slope drainage to endure extreme southwest monsoon downpours.",
    badge: "NH-544 Kerala",
    href: "/major-projects",
  },
  {
    id: "delhi-gurugram-nh8",
    title: "Delhi–Gurugram Section (NH-8)",
    originalLabel: "Delhi-Gurugram Section NH-8",
    category: "Expressways",
    location: "NH-8 Golden Quadrilateral",
    status: "Landmark",
    image: "/images/projects/project8.jpg",
    alt: "Daytime sensor paver operations laying smooth wearing course on NH-8",
    description:
      "Automated sensor paver operations laying glass-smooth wearing course under coordinated lane closures and stringent safety protocols.",
    badge: "NH-8 Section",
    href: "/major-projects",
  },
];

const CATEGORIES = [
  "All Projects",
  "National Highway",
  "Airport Runway",
  "Expressways",
  "City & State Roads",
] as const;

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [previewProject, setPreviewProject] = useState<OngoingKeyProject | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!previewProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProject]);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? ONGOING_KEY_PROJECTS
      : ONGOING_KEY_PROJECTS.filter((p) => p.category === selectedCategory);

  // Auto-scroll ticker: advances automatically every 3.2s
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const card = el.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 24 : 330;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects]);

  // Reset scroll position on category switch
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  const handleScrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 330;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  const handleScrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 330;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#FAF7F0] text-[#14171A] py-16 sm:py-20 lg:py-24 border-t-2 border-[#C2410C] overflow-hidden">
      {/* Light Cream Architectural Texture with Subtle Dark Orange Ambient Accents */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C2410C 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#C2410C]/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-[#9A3412]/[0.06] rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#E2D9CA]">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C] animate-pulse shadow-sm shadow-[#C2410C]/50" />
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] text-[#9A3412] uppercase">
                Active Field Operations &bull; 8 Strategic Corridors
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight font-sans text-[#14171A] uppercase leading-tight">
              <span className="text-[#C2410C]">ONGOING KEY </span>PROJECTS
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed font-sans">
              Verified on-site photographic documentation directly from our expressway packages, 24/7 airport tarmac contracts, and national highway widening projects across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/ongoing-projects"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-[#C2410C]/25 shrink-0"
            >
              Active Works Hub &rarr;
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-4 py-2.5 border-2 border-[#C2410C] hover:bg-[#C2410C] text-[#C2410C] hover:text-white bg-white text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-all shrink-0"
            >
              All Project Records
            </Link>
          </div>
        </div>

        {/* Category Filters & Auto-Scroll Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          {/* Category Filter Pills (Light Cream & Dark Orange Palette) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5" role="tablist" aria-label="Filter projects">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All Projects"
                  ? ONGOING_KEY_PROJECTS.length
                  : ONGOING_KEY_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] cursor-pointer ${
                    isActive
                      ? "bg-[#C2410C] text-white font-bold shadow-md shadow-[#C2410C]/25 border-2 border-[#9A3412]"
                      : "bg-white text-[#57534E] border border-[#DDD5C7] hover:border-[#C2410C] hover:text-[#14171A] hover:bg-[#F3EFE6]"
                  }`}
                >
                  {cat} <span className="opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Clean Navigation Arrows (Zero Auto-Scroll Text Mention) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleScrollPrev}
              aria-label="Previous project card"
              className="w-9 h-9 rounded-lg bg-white border border-[#DDD5C7] hover:border-[#C2410C] hover:bg-[#C2410C] hover:text-white text-stone-700 flex items-center justify-center text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={handleScrollNext}
              aria-label="Next project card"
              className="w-9 h-9 rounded-lg bg-white border border-[#DDD5C7] hover:border-[#C2410C] hover:bg-[#C2410C] hover:text-white text-stone-700 flex items-center justify-center text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Auto-Scrolling Track — Exactly 4 Visible Cards on Desktop ("Single Four") */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 flex flex-col gap-4 group transition-transform duration-300"
            >
              {/* Card 1: Standalone Photo Card — Full Sized 1:1, ZERO Crop, ZERO Text on Image */}
              <div
                onClick={() => setPreviewProject(project)}
                className="relative aspect-square w-full bg-white border-2 border-[#E2D9CA] group-hover:border-[#C2410C] rounded-xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#C2410C]/15 group-hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPreviewProject(project);
                  }
                }}
                aria-label={`Enlarge photo for ${project.title}`}
                title={`Click to inspect ${project.title}`}
              >
                {/* Diagonal Light Sheen on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out pointer-events-none z-10" />

                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={100}
                  unoptimized={true}
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card 2: Standalone Content Card — Separate From Image */}
              <div className="flex-1 flex flex-col justify-between bg-white border-2 border-[#E2D9CA] group-hover:border-[#C2410C] rounded-xl p-5 sm:p-6 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#C2410C]/15 group-hover:-translate-y-1.5">
                <div>
                  {/* Category Badge & Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#9A3412] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreviewProject(project)}
                      className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#C2410C] group-hover:text-white text-slate-700 flex items-center justify-center text-xs transition-all duration-300 group-hover:rotate-45 shrink-0 cursor-pointer"
                      aria-label="Inspect project photo"
                    >
                      ↗
                    </button>
                  </div>

                  {/* Project Location */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => setPreviewProject(project)}
                    className="text-base sm:text-lg font-bold text-[#101D33] font-sans leading-snug group-hover:text-[#C2410C] transition-colors mb-2.5 cursor-pointer line-clamp-2"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#C2410C] uppercase tracking-wider">
                  <button
                    type="button"
                    onClick={() => setPreviewProject(project)}
                    className="hover:underline flex items-center gap-1.5 cursor-pointer text-[#C2410C]"
                  >
                    <span>Inspect Field Record</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Sub-Navigation Strip (Light Cream & Dark Orange) */}
        <div className="mt-12 pt-6 border-t border-[#E2D9CA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#57534E]">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/ongoing-projects" className="text-[#44403C] hover:text-[#C2410C] transition-colors font-medium">
              &rarr; Ongoing National Highway Corridors
            </Link>
            <span className="text-[#A8A29E]">&bull;</span>
            <Link href="/executed-projects" className="text-[#44403C] hover:text-[#C2410C] transition-colors font-medium">
              &rarr; Completed Infrastructure
            </Link>
            <span className="text-[#A8A29E]">&bull;</span>
            <Link href="/major-projects" className="text-[#44403C] hover:text-[#C2410C] transition-colors font-medium">
              &rarr; Airfield Runway Overlays
            </Link>
          </div>
          <span className="text-[#9A3412] font-bold">
            Class-I Civil Enlistment &bull; ISO Certified Operations
          </span>
        </div>
      </Container>

      {/* Lightbox / Modal for Enlarged Photo Preview */}
      {previewProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewProject(null)}
        >
          <div
            className="relative bg-[#1A1816] border-2 border-[#C2410C] rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#141210] border-b border-[#C2410C]/40 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#C2410C] animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FB923C] font-bold">
                    {previewProject.category} &bull; {previewProject.location}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  {previewProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C2410C] hover:text-white text-white flex items-center justify-center text-lg transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                &times;
              </button>
            </div>

            {/* Enlarged Image Display */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={previewProject.image}
                alt={previewProject.alt}
                fill
                quality={100}
                unoptimized={true}
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0E0D0C] border-t border-[#292524] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <p className="text-[#D1D5DB] leading-relaxed max-w-xl font-sans">
                {previewProject.description}
              </p>
              <Link
                href={previewProject.href}
                className="shrink-0 px-4 py-2 bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold font-mono uppercase tracking-wider rounded-sm transition-colors text-xs shadow-md"
              >
                View Project Record &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjectsSection;
