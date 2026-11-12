"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  PLANTS_AND_MACHINERY,
  PlantMachineryItem,
  MACHINERY_SCHEDULE_LIST,
  MachineryScheduleItem,
} from "@/data/infrastructure";

interface PlantsAndMachinerySectionProps {
  className?: string;
  isFullPage?: boolean;
}

export const PlantsAndMachinerySection: React.FC<PlantsAndMachinerySectionProps> = ({
  className = "",
  isFullPage = false,
}) => {
  const [activeModalItem, setActiveModalItem] = useState<PlantMachineryItem | null>(null);
  const [showTableModal, setShowTableModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const leftItems = useMemo(
    () =>
      PLANTS_AND_MACHINERY.filter((item) => item.column === "left").sort(
        (a, b) => a.order - b.order
      ),
    []
  );
  const rightItems = useMemo(
    () =>
      PLANTS_AND_MACHINERY.filter((item) => item.column === "right").sort(
        (a, b) => a.order - b.order
      ),
    []
  );

  const filteredSchedule = useMemo(() => {
    if (!searchQuery.trim()) return MACHINERY_SCHEDULE_LIST;
    const q = searchQuery.toLowerCase();
    return MACHINERY_SCHEDULE_LIST.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.make.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalEquipmentCount = useMemo(
    () => MACHINERY_SCHEDULE_LIST.reduce((sum, item) => sum + item.nos, 0),
    []
  );

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
    setShowTableModal(false);
  }, []);

  // Handle ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (activeModalItem || showTableModal) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalItem, showTableModal, closeModal]);

  return (
    <section
      className={`relative w-full bg-[#042552] text-white overflow-hidden ${
        isFullPage
          ? "flex-1 py-6 sm:py-8 lg:py-12"
          : "py-10 sm:py-14 lg:py-20 border-y border-[#073674]"
      } ${className}`}
      aria-label="Our Plants & Machinery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================= */}
        {/* 1. TOP HEADER: TITLE POSITIONED ABOVE RIGHT COLUMN        */}
        {/* ========================================================= */}
        <div className="flex justify-end items-end mb-3 sm:mb-5">
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
            <h2 className="text-white text-base sm:text-xl md:text-2xl font-bold font-sans tracking-tight">
              Our Plants &amp; Machinery
            </h2>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. 2-COLUMN PHOTOGRAPHIC FLEET SHOWCASE (22 ITEMS)        */}
        {/* ========================================================= */}
        <div className="flex justify-between items-start">
          {/* Left Column (11 items) */}
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] space-y-4 sm:space-y-6 md:space-y-8">
            {leftItems.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <div className="min-h-[2rem] sm:min-h-[2.25rem] flex items-end mb-1 sm:mb-1.5">
                  <span className="text-[#e05353] font-sans font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide leading-tight transition-colors group-hover:text-[#f87171]">
                    {item.title}
                  </span>
                </div>
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

          {/* Right Column (11 items) */}
          <div className="w-[47%] sm:w-[45%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] space-y-4 sm:space-y-6 md:space-y-8">
            {rightItems.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <div className="min-h-[2rem] sm:min-h-[2.25rem] flex items-end mb-1 sm:mb-1.5">
                  <span className="text-[#e05353] font-sans font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide leading-tight transition-colors group-hover:text-[#f87171]">
                    {item.title}
                  </span>
                </div>
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

        {/* ========================================================= */}
        {/* 3. OFFICIAL "PLANT & MACHINERY LIST" SCHEDULE TABLE       */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-white/15">
          {/* Table Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-tight">
              Plant &amp; Machinery List
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1.5 font-sans">
              Comprehensive inventory of company-owned heavy civil engineering equipment, batch mix facilities &amp; transport fleets.
            </p>

            {/* Quick Status Bar: Search + Counter + Image Preview Button */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-[#031d42] p-3 rounded border border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-white/90">
                  Total Fleet: <strong className="text-white font-bold">{totalEquipmentCount}+ Units</strong> across 37 Categories
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter machinery or make..."
                  className="bg-[#052857] text-white placeholder-white/50 text-xs px-3 py-1.5 rounded border border-white/20 focus:outline-none focus:ring-1 focus:ring-[#e05353] w-full sm:w-56"
                />
                <button
                  type="button"
                  onClick={() => setShowTableModal(true)}
                  className="whitespace-nowrap px-3 py-1.5 bg-[#e05353] hover:bg-[#ee6c6c] text-white text-xs font-semibold rounded transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
                  title="View original scanned table image"
                >
                  View Scan
                </button>
              </div>
            </div>
          </div>

          {/* Clean Corporate Table Matching Original Peach-Header Styling */}
          <div className="w-full overflow-x-auto rounded-sm border border-[#304870] shadow-xl bg-white">
            <table className="w-full border-collapse text-left text-xs font-sans text-cpa-text-primary">
              <thead>
                <tr className="bg-[#f2bac0] text-cpa-navy font-bold border-b border-[#e2a0a8]">
                  <th className="py-2.5 px-3 border-r border-[#e2a0a8] text-center w-14 font-mono">
                    S.No
                  </th>
                  <th className="py-2.5 px-4 border-r border-[#e2a0a8] min-w-[220px]">
                    Name of Equipment
                  </th>
                  <th className="py-2.5 px-3 border-r border-[#e2a0a8] text-center w-16 font-mono">
                    Nos
                  </th>
                  <th className="py-2.5 px-4 border-r border-[#e2a0a8] min-w-[200px]">
                    Make
                  </th>
                  <th className="py-2.5 px-4 border-r border-[#e2a0a8] min-w-[120px]">
                    Model
                  </th>
                  <th className="py-2.5 px-3 text-center w-20">
                    Remark
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSchedule.length > 0 ? (
                  filteredSchedule.map((row, idx) => (
                    <tr
                      key={row.sNo}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-amber-50/50 transition-colors"
                          : "bg-[#fbfbfb] hover:bg-amber-50/50 transition-colors"
                      }
                    >
                      <td className="py-2 px-3 border-r border-gray-200 text-center font-mono text-gray-600 font-semibold">
                        {row.sNo}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-200 font-semibold text-cpa-navy">
                        {row.name}
                      </td>
                      <td className="py-2 px-3 border-r border-gray-200 text-center font-mono font-bold text-cpa-navy">
                        {row.nos}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-200 text-gray-700">
                        {row.make}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-200 font-mono text-gray-700">
                        {row.model}
                      </td>
                      <td className="py-2 px-3 text-center text-gray-400 font-mono">
                        {row.remark}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500 font-sans">
                      No machinery found matching &ldquo;{searchQuery}&rdquo;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. INTERACTIVE LIGHTBOX MODAL: PHOTO INSPECTION           */}
      {/* ========================================================= */}
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

      {/* ========================================================= */}
      {/* 5. INTERACTIVE MODAL: ORIGINAL SCANNED SCHEDULE IMAGE     */}
      {/* ========================================================= */}
      {showTableModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Original Plant & Machinery List Scan"
        >
          <div
            className="relative w-full max-w-5xl bg-[#042552] border border-white/20 rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/15 bg-[#031d42]">
              <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                Official Document: Plant &amp; Machinery List
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full overflow-auto bg-black/50 p-2">
              <div className="relative w-full h-[500px] sm:h-[650px]">
                <Image
                  src="/images/fleet/plant-machinery-list.png"
                  alt="Original Plant and Machinery List Document"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="px-5 py-2.5 border-t border-white/10 bg-[#031d42] flex items-center justify-between text-xs text-white/70 font-mono">
              <span>C P Arora Technical Schedule</span>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlantsAndMachinerySection;
