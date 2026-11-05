import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executed Projects",
  description:
    "Completed civil infrastructure, national highway segments, municipal underpasses, and arterial road deliverables successfully handed over by C P Arora.",
  keywords: [
    "C P Arora Executed Projects",
    "Completed Highway Works",
    "Municipal Underpass Janakpuri",
    "MoRTH Road Deliverables",
    "Civil Infrastructure Handover",
  ],
  openGraph: {
    title: "Executed Projects | C P Arora Engineers & Contractors",
    description:
      "Completed civil infrastructure, national highway segments, municipal underpasses, and arterial road deliverables successfully handed over by C P Arora.",
    url: "https://cparora.com/executed-projects",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/projects/janakpuri-under-division.jpg",
        width: 600,
        height: 755,
        alt: "Janakpuri Urban Grade Separator Approach",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ExecutedProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
