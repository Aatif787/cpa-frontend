"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PLANTS_AND_MACHINERY, PlantMachineryItem } from "@/data/infrastructure";

interface PlantsAndMachinerySectionProps {
  className?: string;
  isFullPage?: boolean;
}

export const PlantsAndMachinerySection: React.FC<PlantsAndMachinerySectionProps> = ({
  className = "",
  isFullPage = false,
}) => {
  const [activeModalItem, setActiveModalItem] = useState<PlantMachineryItem | null>(null);

  const leftItems = PLANTS_AND_MACHINERY.filter((item) => item.column === "left").sort(
    (a, b) => a.order - b.order
  );
  const rightItems = PLANTS_AND_MACHINERY.filter((item) => item.column === "right").sort(
    (a, b) => a.order - b.order
  );

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (activeModalItem) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalItem, closeModal]);

  return (
    <section
      className={`relative w-full bg-[#042552] text-white overflow-hidden ${
        isFullPage
          ? "flex-1 py-6 sm:py-8 lg:py-10"
          : "py-10 sm:py-12 lg:py-16 border-y border-[#073674]"
      } ${className}`}
      aria-label="Our Plants & Machinery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Row: Title positioned above the Right Column matching original layout */}
        <div className="flex justify-end items-end mb-3 sm:mb-5">
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
            <h2 className="text-white text-base sm:text-xl md:text-2xl font-bold font-sans tracking-tight">
              Our Plants &amp; Machinery
            </h2>
          </div>
        </div>

        {/* 2-Column Side-by-Side Layout matching screenshot */}
        <div className="flex justify-between items-start">
          {/* Left Column (4 items) */}
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] space-y-4 sm:space-y-6 md:space-y-8">
            {leftItems.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <span className="text-[#e05353] font-sans font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide mb-1 sm:mb-1.5 transition-colors group-hover:text-[#f87171] truncate">
                  {item.title}
                </span>
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-[#061e3f] shadow-md cursor-pointer border border-white/5 group-hover:border-white/20 transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem(item);
                    }
                  }}
                  title={`Click to view ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 47vw, 360px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (4 items) */}
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] space-y-4 sm:space-y-6 md:space-y-8">
            {rightItems.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <span className="text-[#e05353] font-sans font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide mb-1 sm:mb-1.5 transition-colors group-hover:text-[#f87171] truncate">
                  {item.title}
                </span>
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-[#061e3f] shadow-md cursor-pointer border border-white/5 group-hover:border-white/20 transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem(item);
                    }
                  }}
                  title={`Click to view ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 47vw, 360px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal for Full View */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
        >
          <div
            className="relative w-full max-w-4xl bg-[#042552] border border-white/20 rounded-md shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/15 bg-[#031d42]">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e05353]" />
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#e05353]"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/40">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-[#031d42] flex items-center justify-between text-xs text-white/70 font-mono">
              <span>C P Arora &bull; Industrial Plants &amp; Machinery</span>
              <span>Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlantsAndMachinerySection;
