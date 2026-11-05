import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "C P Arora | Civil Engineering, Highways & Airport Infrastructure",
    template: "%s | C P Arora Engineers & Contractors",
  },
  description:
    "C P Arora is a premier Indian infrastructure engineering and construction firm specializing in national highways, runway civil works, micro-surfacing, and asphalt technologies.",
  keywords: [
    "C P Arora",
    "Civil Engineering India",
    "Highway Construction",
    "Airport Infrastructure",
    "Micro Surfacing",
    "Slurry Seal",
    "PWD Contractor",
    "Road Construction Delhi",
    "Infrastructure Contractors",
  ],
  authors: [{ name: "C P Arora" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://cparora.com"),
  openGraph: {
    title: "C P Arora | Civil Engineering, Highways & Airport Infrastructure",
    description:
      "Premier Indian civil engineering contractor specializing in national highways, airport runway pavements, and modern asphalt technologies.",
    url: "https://cparora.com",
    siteName: "C P Arora",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "C P Arora Corporate Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#101D33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cpa-offwhite text-cpa-text-primary antialiased selection:bg-cpa-gold selection:text-cpa-navy font-sans">
        <ScrollProgress />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
