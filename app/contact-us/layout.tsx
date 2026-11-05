import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Official contact channels, corporate headquarters address, tender desk communications, and pre-qualification inquiries for C P Arora Engineers & Contractors.",
  keywords: [
    "Contact C P Arora",
    "C P Arora Office Address",
    "Tender Desk Contact",
    "Civil Infrastructure Inquiries",
    "Delhi Office Address",
  ],
  openGraph: {
    title: "Contact Us | C P Arora Engineers & Contractors",
    description:
      "Official contact channels, corporate headquarters address, tender desk communications, and pre-qualification inquiries for C P Arora Engineers & Contractors.",
    url: "https://cparora.com/contact-us",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/corporate/office.jpg",
        width: 1267,
        height: 787,
        alt: "C P Arora Corporate Office",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
