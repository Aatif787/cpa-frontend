"use client";

import React from "react";
import { PlantsAndMachinerySection } from "@/components/home";

export default function InfrastructurePage() {
  return (
    <main className="flex-1 flex flex-col bg-[#042552] min-h-[calc(100vh-140px)]">
      <PlantsAndMachinerySection isFullPage />
    </main>
  );
}
