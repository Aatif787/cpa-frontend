import React from "react";
import type { Metadata } from "next";
import { MAJOR_WORK_DONE_LIST } from "@/data/projects";

export const metadata: Metadata = {
  title: "List of Major Projects Done | C P Arora Engineers & Contractors",
  description:
    "Comprehensive track record of 44 major infrastructure contracts completed across national highways, airport runways, and urban road networks by C P Arora Engineers & Contractors Pvt. Ltd.",
};

export default function MajorProjectsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#042552] text-white min-h-screen">
      <main className="w-full py-8 sm:py-12 px-2 sm:px-4 lg:px-6">
        {/* Centered Clean Title Matching Reference */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-center text-white mb-6 sm:mb-8 tracking-tight">
          List of major work done
        </h1>

        {/* Clean Responsive Table Chassis Matching Reference Slide */}
        <div className="w-full overflow-x-auto shadow-2xl border border-black/40">
          <table className="w-full text-left border-collapse bg-white text-black min-w-[1020px]">
            {/* Signature Peach/Pink Header */}
            <thead>
              <tr className="bg-[#fbcac3] text-black border-b border-black/60 font-sans font-semibold text-xs sm:text-[13px]">
                <th
                  scope="col"
                  className="py-2.5 px-2 text-center border border-black/40 w-12"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-3 text-center border border-black/40 min-w-[340px]"
                >
                  Name Of Work/ Project &amp; Location
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-3 text-center border border-black/40 min-w-[220px]"
                >
                  Owner Or Sponsoring Organisation
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-3 text-center border border-black/40 min-w-[140px]"
                >
                  Cost Of Work (In Rs. /Gross Work Done)
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-2 text-center border border-black/40 min-w-[110px]"
                >
                  Date Of Commencement
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-2 text-center border border-black/40 min-w-[110px]"
                >
                  Stipulated Date Of Completion
                </th>
                <th
                  scope="col"
                  className="py-2.5 px-2 text-center border border-black/40 min-w-[110px]"
                >
                  Actual Date Of Completion
                </th>
              </tr>
            </thead>

            {/* 44 Rows Data */}
            <tbody className="text-black text-xs sm:text-[12.5px] font-sans">
              {MAJOR_WORK_DONE_LIST.map((row) => (
                <tr
                  key={row.sNo}
                  className="hover:bg-[#fbcac3]/15 transition-colors"
                >
                  <td className="py-2 px-2 text-center border border-black/30 font-medium">
                    {row.sNo}
                  </td>
                  <td className="py-2 px-3 border border-black/30 leading-snug">
                    {row.nameOfWork}
                  </td>
                  <td className="py-2 px-3 border border-black/30 leading-snug">
                    {row.owner}
                  </td>
                  <td className="py-2 px-3 text-right border border-black/30 whitespace-nowrap font-medium tabular-nums">
                    {row.cost}
                  </td>
                  <td className="py-2 px-2 text-center border border-black/30 whitespace-nowrap">
                    {row.commencementDate}
                  </td>
                  <td className="py-2 px-2 text-center border border-black/30 whitespace-nowrap">
                    {row.stipulatedDate}
                  </td>
                  <td className="py-2 px-2 text-center border border-black/30 whitespace-nowrap">
                    {row.actualDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
