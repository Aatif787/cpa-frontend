import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departmental Registrations & Enlistments",
  description:
    "Verified statutory civil contractor enlistments, Class IA unlimited tendering capacity orders with Goa PWD, CPWD, MCD, and public sector infrastructure authorities.",
  keywords: [
    "C P Arora Registrations",
    "Goa PWD Class IA No Limit",
    "CPWD Class-1 Contractor",
    "MCD Class-1 Registration",
    "Statutory Contractor Approvals",
  ],
  openGraph: {
    title: "Registrations & Approvals | C P Arora Engineers & Contractors",
    description:
      "Verified statutory civil contractor enlistments, Class IA unlimited tendering capacity orders with Goa PWD, CPWD, MCD, and public sector infrastructure authorities.",
    url: "https://cparora.com/registrations",
    siteName: "C P Arora",
    images: [
      {
        url: "/images/certificates/pwd-goa.jpg",
        width: 1200,
        height: 800,
        alt: "Goa PWD Class IA Statutory Certificate",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RegistrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
