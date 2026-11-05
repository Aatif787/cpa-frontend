import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure & Fleet",
  description:
    "Company-owned heavy civil machinery fleet: electronic sensor pavers, computer-metered asphalt batch mix plants, mobile slurry spreaders, and field testing laboratories.",
  keywords: [
    "C P Arora Infrastructure",
    "Heavy Civil Machinery Fleet",
    "Electronic Sensor Pavers",
    "Asphalt Batch Mix Plants",
    "Pavement Testing Laboratories",
  ],
  openGraph: {
    title: "Infrastructure & Fleet | C P Arora Engineers & Contractors",
    description:
      "Company-owned heavy civil machinery fleet: electronic sensor pavers, computer-metered asphalt batch mix plants, mobile slurry spreaders, and field testing laboratories.",
    url: "https://cparora.com/infrastructure",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/machinery/m1.jpg",
        width: 1200,
        height: 800,
        alt: "C P Arora Heavy Asphalt Mixing Plant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
