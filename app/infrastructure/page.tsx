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
import {
  FLEET_ITEMS,
  FLEET_CATEGORIES,
  PLANT_FACILITIES,
} from "@/data/infrastructure";

export default function InfrastructurePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFleet =
    selectedCategory === "all"
      ? FLEET_ITEMS
      : FLEET_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex-1 flex flex-col bg-cpa-offwhite">
      {/* ========================================================= */}
      {/* 1. PAGE HEADER                                            */}
      {/* ========================================================= */}
      <PageHeader
        theme="navy"
        badge="Our Equipment"
        eyebrow="Our Machinery &amp; Facilities"
        title="Our Modern Road Machinery &amp; Asphalt Plants"
        description="Our own fleet of computer-controlled asphalt mixing plants, modern road pavers, heavy rollers, and airport runway paving equipment."
        breadcrumbs={[{ label: "Infrastructure & Machinery" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button href="/projects" variant="gold" size="md">
              View Our Projects
            </Button>
            <Button
              href="/contact-us"
              variant="outline"
              size="md"
              className="!border-white/40 !text-white hover:!border-cpa-gold hover:!text-cpa-gold"
            >
              Contact Our Team
            </Button>
          </div>
        }
      />

      {/* ========================================================= */}
      {/* 2. FLEET OWNERSHIP                                        */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="gold">Company-Owned Equipment</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-cpa-navy font-sans tracking-tight leading-tight">
              We Own and Operate Our Own Machinery
            </h2>
            <p className="text-cpa-text-secondary text-sm sm:text-base leading-relaxed">
              C P Arora owns and operates its own road pavers, asphalt mixing plants, and heavy compaction rollers. Direct ownership means we do not depend on rented machines. We can start immediately, control asphalt quality and temperature directly, and keep paving moving without interruption.
            </p>
            <p className="text-cpa-text-secondary text-sm sm:text-base leading-relaxed">
              With our own machinery fleet, we quickly set up on national highways, state roads, city flyovers, and 24/7 airport runway projects where high precision is required.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm overflow-hidden border border-cpa-surface-border shadow-md bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy">
                <Image
                  src="/images/fleet/m2.jpg"
                  alt="Vögele Super 1800-3 tracked sensor paver stenciled C P Arora"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="p-4 bg-cpa-white border-t border-cpa-surface-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold-dark font-semibold block">
                    Highway Paving Machine
                  </span>
                  <h3 className="text-base font-bold text-cpa-navy font-sans mt-0.5">
                    Vögele Super 1800-3 Sensor Paver
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase text-cpa-text-muted bg-cpa-surface-subtle px-2 py-1 rounded-sm border border-cpa-surface-border">
                  Owned Asset
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 3. VERIFIED FLEET & MACHINERY INVENTORY                   */}
      {/* ========================================================= */}
      <SectionContainer theme="offwhite" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Machinery &amp; Equipment Fleet"
          description="Photos of our road pavers, asphalt plants, heavy rollers, and transport trucks working on active project sites."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-cpa-surface-border overflow-x-auto">
          {FLEET_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-cpa-gold ${
                selectedCategory === cat.id
                  ? "bg-cpa-navy text-cpa-gold font-bold shadow-sm"
                  : "bg-cpa-white text-cpa-text-secondary hover:bg-cpa-navy/5 hover:text-cpa-navy border border-cpa-surface-border"
              }`}
            >
              {cat.label}
              {cat.id === "all" ? (
                <span className="ml-1.5 opacity-70">({FLEET_ITEMS.length})</span>
              ) : (
                <span className="ml-1.5 opacity-70">
                  (
                  {
                    FLEET_ITEMS.filter((item) => item.category === cat.id)
                      .length
                  }
                  )
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFleet.map((item) => (
            <Card
              key={item.id}
              variant="elevated"
              className="flex flex-col justify-between overflow-hidden group hover:border-cpa-gold/60 transition-all duration-300"
            >
              <div>
                {/* Photo Container — 100% clean photo, zero text on image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy/10 border-b border-cpa-surface-border">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="mb-2">
                    <Badge variant="gold">{item.categoryLabel}</Badge>
                  </div>
                  <h3 className="text-base font-bold text-cpa-navy font-sans tracking-tight mb-2 group-hover:text-cpa-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cpa-text-secondary leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Compact Technical Badges */}
                  <div className="pt-2.5 border-t border-cpa-surface-border/80 flex flex-wrap gap-1.5">
                    {item.verifiedDetails.slice(0, 2).map((detail, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-[11px] font-mono bg-cpa-offwhite text-cpa-navy px-2 py-0.5 rounded border border-cpa-surface-border"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 4. CORPORATE & PRODUCTION FACILITIES                      */}
      {/* ========================================================= */}
      <SectionContainer theme="white" className="border-b border-cpa-surface-border">
        <SectionHeading
          eyebrow="Company Locations"
          title="Offices &amp; Equipment Yards"
          description="Our corporate office and equipment staging yards supporting road construction projects across Northern India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PLANT_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-cpa-offwhite border border-cpa-surface-border rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-cpa-navy/20 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-cpa-navy font-sans tracking-tight mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cpa-gold font-semibold block mb-1">
                      Facility Role:
                    </span>
                    <ul className="space-y-1 text-xs text-cpa-text-primary">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cpa-gold font-bold">&bull;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ========================================================= */}
      {/* 5. CALL TO ACTION                                         */}
      {/* ========================================================= */}
      <CTASection
        title="Ready to Work with Us on Road &amp; Highway Projects?"
        description="Contact our engineering team to discuss joint ventures, equipment availability, or tender partnerships."
        primaryAction={{ label: "Contact Our Team", href: "/contact-us" }}
        secondaryAction={{ label: "Read Company Profile", href: "/about-us/company-profile" }}
        theme="navy"
      />
    </div>
  );
}
