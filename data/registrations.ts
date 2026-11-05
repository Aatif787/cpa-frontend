export interface CertificateItem {
  id: string;
  title: string;
  issuingAuthority: string;
  classification: string;
  referenceNo: string;
  validity: string;
  imageUrl: string;
  statusBadge: "Active Enlistment" | "Documented Record" | "Empanelment";
  notes: string;
  officialEntity: string;
  tenderingLimit?: string;
  jurisdiction: string;
}

export const STATUTORY_CERTIFICATES: CertificateItem[] = [
  {
    id: "goa-pwd-class-ia",
    title: "Goa PWD Class IA 'No Limit' Enlistment",
    issuingAuthority: "Public Works Department, Government of Goa",
    classification: "Class IA (Roads, Bridges and Land Development - RBLD)",
    referenceNo: "Reg. No. 6-3/PCE-PWD/EO/RBLD/IA-167/2020",
    validity: "01/12/2020 to 30/11/2025",
    imageUrl: "/images/certificates/pwd-goa.jpg",
    statusBadge: "Active Enlistment",
    tenderingLimit: "NO LIMIT (Any Amount)",
    jurisdiction: "State of Goa / All Circles",
    officialEntity: "C P Arora Engineers Contractors Pvt. Ltd.",
    notes:
      "Official order from the Principal Chief Engineer, Goa PWD. Approves C P Arora to bid on roads and bridge projects with no financial limit across Goa.",
  },
  {
    id: "cpwd-class-1-reval",
    title: "CPWD Class-I Enlistment Revalidation",
    issuingAuthority: "Central Public Works Department (CPWD)",
    classification: "Class-I (Civil Road Only)",
    referenceNo: "0017 (Civil Road Only) / Office Order No. 19",
    validity: "Office Order dt. 27.09.2013 (5-Year Term)",
    imageUrl: "/images/certificates/cpwd-certificate1.jpg",
    statusBadge: "Documented Record",
    tenderingLimit: "Class-I National Civil Tendering",
    jurisdiction: "Pan-India / CPWD Circles",
    officialEntity: "M/s C P Arora Engineers Contractors Pvt. Ltd.",
    notes:
      "Official order from CPWD Directorate General, New Delhi. Revalidates Class-I (Civil Road) registration for central government road projects across India.",
  },
  {
    id: "cpwd-provisional-ext",
    title: "CPWD Class-I Revalidation Provisional Extension",
    issuingAuthority: "Central Public Works Department (CPWD)",
    classification: "Class-I (Civil Road Only Category)",
    referenceNo: "File No. C/14-03/2007-I/Civil Road Only",
    validity: "Order dt. 27/01/2018 (Under Enlistment Rules 2017)",
    imageUrl: "/images/certificates/cpwd-certificate2.jpg",
    statusBadge: "Documented Record",
    tenderingLimit: "Class-I Roads Works",
    jurisdiction: "Northern Region & Pan-India",
    officialEntity: "M/s C P Arora Engineers Contractors Pvt. Ltd.",
    notes:
      "Official extension letter from CPWD, New Delhi, extending Class-I registration under the 2017 rules.",
  },
  {
    id: "mcd-class-1",
    title: "MCD Class-I Contractor Registration",
    issuingAuthority: "South Delhi Municipal Corporation (SDMC / MCD)",
    classification: "Category-I (Civil - Road Only)",
    referenceNo: "Reg. No. 30305 / B&R / 2018 / CL-I",
    validity: "22.01.2018 to 21.01.2023",
    imageUrl: "/images/certificates/mcd-certificate.jpg",
    statusBadge: "Documented Record",
    tenderingLimit: "₹20,00,00,000/- (₹20 Crores)",
    jurisdiction: "National Capital Territory of Delhi (SDMC, NDMC, EDMC)",
    officialEntity: "M/s C P Arora Engineers Contractors Pvt. Ltd.",
    notes:
      "Official registration certificate from MCD, Civic Centre, New Delhi. Grants Category-I status with a ₹20 Crore bidding limit across all Delhi municipal zones.",
  },
  {
    id: "haryana-pwd-class-1",
    title: "Haryana PWD (B&R) Class-I Contractor Enlistment",
    issuingAuthority: "Haryana Public Works Department (B&R)",
    classification: "Class-I (Any Limit) - Roads Works",
    referenceNo: "Enlistment No. 4846 / Endst. No. 3191/Genl",
    validity: "Dated 27-7-2015 (Valid upto 31.03.2018 on record)",
    imageUrl: "/images/certificates/pwd-certificate1.jpg",
    statusBadge: "Documented Record",
    tenderingLimit: "Class-I (Any Limit)",
    jurisdiction: "All Circles in Haryana PWD B&R Branch",
    officialEntity: "C P Arora Engineer Contractor Pvt. Ltd.",
    notes:
      "Official registration from Haryana PWD, Chandigarh. Grants Class-I (Any Limit) status for highway and road projects throughout Haryana.",
  },
  {
    id: "nbcc-prequalification",
    title: "NBCC Pre-Qualification Empanelment",
    issuingAuthority: "NBCC (India) Limited (Govt. of India Enterprise)",
    classification: "Category C-2 (Road / Highways & Fencing Works)",
    referenceNo: "NBCC/ED/PQ_CONTRACTORS/2014-15/119",
    validity: "Dated 16.03.2015 (Valid up to 30.11.2015 on record)",
    imageUrl: "/images/certificates/nbcc-certificate1.jpg",
    statusBadge: "Empanelment",
    tenderingLimit: "Group GP-III (₹25 Crs to ₹50 Crs)",
    jurisdiction: "NBCC Infrastructure & Institutional Packages",
    officialEntity: "M/s C P Arora Engineers-Contractors Pvt. Ltd.",
    notes:
      "Empanelment letter from NBCC, New Delhi. Approves C P Arora in Group-III (₹25 Cr to ₹50 Cr) for major road and infrastructure work.",
  },
  {
    id: "dmrc-empanelment",
    title: "DMRC List of Qualified Applicants (Category III)",
    issuingAuthority: "Delhi Metro Rail Corporation (DMRC)",
    classification: "Category III Civil Works",
    referenceNo: "Empanelment Serial No. 27",
    validity: "Documented Technical Pre-Qualification",
    imageUrl: "/images/certificates/nbcc-certificate2.jpg",
    statusBadge: "Empanelment",
    tenderingLimit: "Works costing above ₹5 Crore & upto ₹10 Crore",
    jurisdiction: "Delhi Metro Civil Packages & Feeder Corridors",
    officialEntity: "C P Arora Engineers-Contractors Pvt. Ltd.",
    notes:
      "Official document from Delhi Metro Rail Corporation (DMRC) pre-qualifying C P Arora for Category III civil construction packages.",
  },
];

export const CLIENT_PARTNERS = [
  { name: "KMC Construction Limited", logo: "/images/partners/kmc.jpg", role: "Joint Venture Partner" },
  { name: "Rock-Tech Projects", logo: "/images/partners/rock-tech.jpg", role: "Specialized Concrete Partner" },
  { name: "Unitech Limited", logo: "/images/partners/unitech.jpg", role: "Civil Works Client" },
  { name: "Unity Infraprojects Limited", logo: "/images/partners/unity.jpg", role: "Joint Venture Partner" },
];
