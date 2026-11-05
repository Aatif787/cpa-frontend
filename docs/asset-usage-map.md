# CPA Arora — Web Asset Usage & Source-to-Destination Map

This document establishes the official policy and mapping for utilizing original company assets in the Next.js website rebuild, guaranteeing that preserved original archives remain 100% untouched.

---

## 1. Asset Preservation & Protection Policy

1. **Preserved Folders (Read-Only Vault):**
   - `assets/` (106 original files) — **Untouched**
   - `site_assets/` (106 original mirror files) — **Untouched**
   - `preserved_assets/` (Original archives & recovered vector brand assets) — **Untouched**
2. **Web Serving Location (`public/`):**
   - Derived or web-served assets are copied to `public/` preserving their original identifiers or transparent semantic aliases.
   - No destructive compression or downscaling is applied to the original source files.
   - Next.js Image component handles runtime format optimization (WebP/AVIF) dynamically without altering source files.

---

## 2. Shared Brand Assets (Phase 2 Deployed)

| Target Web Path | Source Original Location | File Type | Resolution / Format | Usage in Rebuild |
| :--- | :--- | :--- | :--- | :--- |
| `public/logo.png` | `assets/logo.png` | PNG | 400x400 (RGB) | Header brand lockup, Footer, and metadata OpenGraph fallback |
| `public/logo.svg` | `preserved_assets/supplementary_brand_assets/logo.svg` | SVG | Vector | Scalable vector logo alternative for high-DPI displays |

---

## 2.1 Phase 3 Component Library Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Component Usage |
| :--- | :--- | :--- | :--- |
| `public/images/projects/key-pro-1.jpg` | `assets/key-pro-1.jpg` | JPEG | `ProjectCard` showcase (Highway Widening) |
| `public/images/projects/gmr1.jpg` | `assets/gmr1.jpg` | JPEG | `ProjectCard` showcase (Airside Runway Overlays) |
| `public/images/certificates/cpwd-certificate1.jpg` | `assets/cpwd-certificate1.jpg` | JPEG | `CertificateCard` showcase (CPWD Class-1) |
| `public/images/fleet/m1.jpg` | `assets/m1.jpg` | JPEG | `ImageWithCaption` showcase (Batch Mix Plant) |
| `public/images/partners/kmc.jpg` | `assets/kmc.jpg` | JPEG | `LogoStrip` partner showcase |
| `public/images/partners/rock-tech.jpg` | `assets/rock-tech.jpg` | JPEG | `LogoStrip` partner showcase |
| `public/images/partners/unitech.jpg` | `assets/unitech.jpg` | JPEG | `LogoStrip` partner showcase |
| `public/images/partners/unity.jpg` | `assets/unity.jpg` | JPEG | `LogoStrip` partner showcase |

---

## 2.2 Phase 4 Homepage Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Homepage Section |
| :--- | :--- | :--- | :--- |
| `public/images/hero/cpa-banner5.jpg` | `assets/cpa-banner5.jpg` | JPEG | Hero Section background (1920x900) |
| `public/images/corporate/office.jpg` | `assets/office.jpg` | JPEG | Corporate Introduction section (1267x787) |
| `public/images/projects/janakpuri-under-division.jpg` | `assets/janakpuri-under-division.jpg` | JPEG | Featured Projects & Urban Civil Works (600x600) |
| `public/images/fleet/m2.jpg` | `assets/m2.jpg` | JPEG | Infrastructure Fleet showcase (Sensor Paver) |
| `public/images/fleet/m7.jpg` | `assets/m7.jpg` | JPEG | Infrastructure Fleet showcase (Compaction Roller) |
| `public/images/certificates/mcd-certificate.jpg` | `assets/mcd-certificate.jpg` | JPEG | Registrations & Credentials (MCD Class-1) |
| `public/images/certificates/nbcc-certificate1.jpg` | `assets/nbcc-certificate1.jpg` | JPEG | Registrations & Credentials (NBCC Enlistment) |
| `public/images/team/chander-arora.jpg` | `assets/chander-arora.jpg` | JPEG | Leadership Preview (C.P. Arora - Founder & MD) |
| `public/images/team/karun-arora.jpg` | `assets/karun-arora.jpg` | JPEG | Leadership Preview (Karun Arora - Director) |
| `public/images/team/vansh-arora.jpg` | `assets/vansh-arora.jpg` | JPEG | Leadership Preview (Vansh Arora - Director) |
| `public/images/team/ridhima-arora.jpg` | `assets/ridhima-arora.jpg` | JPEG | Leadership Preview (Ridhima Arora - Director) |
## 2.3 Phase 5A Company Profile Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Page Section |
| :--- | :--- | :--- | :--- |
| `public/images/corporate/office-out.jpg` | `assets/office-out.jpg` | JPEG | Company Profile facilities & site mobilization yard |

## 2.4 Phase 5B Board of Directors & Core Team Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Page Section |
| :--- | :--- | :--- | :--- |
| `public/images/team/arun-sahoo.jpg` to `yogesh-kumar.jpg` (21 portraits) | `assets/{arun-sahoo...yogesh-kumar}.jpg` | JPEG | Core Technical Team member portraits |
| `public/images/team/{chander-arora, karun-arora, vansh-arora, ridhima-arora}.jpg` | `assets/{chander-arora, karun-arora, vansh-arora, ridhima-arora}.jpg` | JPEG | Board of Directors leadership portraits |

## 2.5 Phase 5C Projects Hub & Project Listing Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Page Section |
| :--- | :--- | :--- | :--- |
| `public/images/projects/{gmr2, gmr3, gmr4}.jpg` | `assets/{gmr2, gmr3, gmr4}.jpg` | JPEG | Airport runways & taxiway rehabilitation |
| `public/images/projects/{key-pro-2, key-pro-3, key-pro-4}.jpg` | `assets/{key-pro-2, key-pro-3, key-pro-4}.jpg` | JPEG | Ongoing highway widening & sensor paver works |
| `public/images/projects/{key-pro-12, key-pro-13, key-pro-14, project5}.jpg` | `assets/{key-pro-12...project5}.jpg` | JPEG | Executed municipal roads & urban underpasses |
| `public/images/projects/{highway1, highway2, banner1}.jpg` | `assets/{highway1, highway2, banner1}.jpg` | JPEG | Major projects (NH-16, Delhi-Gurugram NH-8, NH-544) |

## 2.6 Phase 5D Infrastructure & Registrations Derived Assets

| Target Web Path | Source Original Location | File Type | Purpose / Page Section |
| :--- | :--- | :--- | :--- |
| `public/images/fleet/m1.jpg` – `m12.jpg` (12 files) | `assets/m1.jpg` – `m12.jpg` | JPEG | Complete plant & fleet machinery photographic catalog |
| `public/images/fleet/machinery2.jpg` – `machinery10.jpg` (9 files) | `assets/machinery2.jpg` – `machinery10.jpg` | JPEG | Batching plants, chillers, crushers & concrete mixers |
| `public/images/certificates/cpwd-certificate1.jpg` | `assets/cpwd-certificate1.jpg` | JPEG | CPWD Class-I Civil Road Office Order 19 document scan |
| `public/images/certificates/cpwd-certificate2.jpg` | `assets/cpwd-certificate2.jpg` | JPEG | CPWD Class-I Civil Road provisional extension scan |
| `public/images/certificates/pwd-certificate1.jpg` | `assets/pwd-certificate1.jpg` | JPEG | Haryana PWD Class-I (Any Limit) Roads Works document scan |
| `public/images/certificates/pwd-goa.jpg` | `assets/pwd-goa.jpg` | JPEG | Goa PWD Class IA (No Limit) RBLD registration scan |
| `public/images/certificates/nbcc-certificate1.jpg` | `assets/nbcc-certificate1.jpg` | JPEG | NBCC Group GP-III pre-qualification letter scan |
| `public/images/certificates/nbcc-certificate2.jpg` | `assets/nbcc-certificate2.jpg` | JPEG | DMRC Category III Qualified Applicants list scan (legacy name) |
| `public/images/certificates/mcd-certificate.jpg` | `assets/mcd-certificate.jpg` | JPEG | South Delhi Municipal Corporation Class-I order scan |

---

## 3. Sectional Asset Usage Mapping (Phase 3+ Implementation Plan)

### A. Brand & Hero Assets
| Intended Route | Source Asset Pattern | Count | Description / Role |
| :--- | :--- | :--- | :--- |
| `/` (Homepage Hero) | `assets/banner1.jpg`, `assets/cpa-banner5.jpg`, `assets/cpa-banner6.jpg` | 6 | High-resolution arterial highway and machinery banners |
| `/` & Corporate Shell | `assets/logo.png`, `preserved_assets/.../logo.svg` | 2 | Primary brand mark |

### B. About Us & Leadership Assets
| Intended Route | Source Asset Pattern | Count | Key Individuals / Files |
| :--- | :--- | :--- | :--- |
| `/about-us/board-of-directors` | `assets/{chander-arora, karun-arora, vansh-arora, ridhima-arora}.jpg` | 4 | Executive board members and directors |
| `/about-us/core-team` | `assets/{arun-sahoo, arun-singh, chandan-ghandhi, deepak-arora, dinesh-kumar, lalit-shahni, love-kumar, mohit-sahni, nitish-saini, rajnish-chouhan, rakesh-kumar, rakesh-puri, rakesh-shokeen, sachin-dhawan, sachin-khanna, saroj-mishra, sasank, sb-tripathi, shamim-alam, yogesh-kumar}.jpg` | 21 | Chief engineers, project directors, QA heads, and plant managers |
| `/about-us/company-profile` | `assets/office.jpg`, `assets/office-out.jpg` | 2 | Corporate headquarters exterior and plant operations yard |

### C. Projects & Civil Infrastructure Works
| Intended Route | Source Asset Pattern | Count | Description / Role |
| :--- | :--- | :--- | :--- |
| `/ongoing-projects` | `assets/key-pro-1.jpg` – `key-pro-10.jpg`, `project1.jpg` – `project4.jpg` | 14 | Active highway paving, sensor paver laying, and asphalt resurfacing |
| `/executed-projects` | `assets/key-pro-12.jpg` – `key-pro-19.jpg`, `project5.jpg` – `project8.jpg`, `assets/janakpuri-under-division.jpg` | 13 | Successfully completed urban underpasses, highway stretches, and municipal roads |
| `/major-projects` | `assets/gmr1.jpg` – `assets/gmr12.jpg` | 12 | Strategic airside and runway friction courses at Delhi IGI Airport (GMR / DIAL) |

### D. Plant, Machinery & Infrastructure Fleet
| Intended Route | Source Asset Pattern | Count | Machinery Types |
| :--- | :--- | :--- | :--- |
| `/infrastructure` | `assets/m1.jpg` – `assets/m12.jpg` | 12 | Asphalt batch mix plants, cold milling machines, and automated bitumen distributors |
| `/infrastructure` | `assets/machinery2.jpg` – `assets/machinery10.jpg` | 9 | Hydrostatic sensor pavers, pneumatic tyre rollers, vibratory tandem rollers |

### E. Registrations & Approvals
| Intended Route | Source Asset Pattern | Count | Statutory Credentials |
| :--- | :--- | :--- | :--- |
| `/registrations` | `assets/cpwd-certificate1.jpg`, `assets/cpwd-certificate2.jpg` | 2 | Central Public Works Department Class-I Enlistment Revalidation |
| `/registrations` | `assets/haryana-pwd.jpg`, `assets/pwd-certificate1.jpg`, `assets/pwd-goa.jpg` | 3 | Haryana PWD, Delhi PWD, and Goa PWD Contractor Registrations |
| `/registrations` | `assets/mcd-certificate.jpg` | 1 | Municipal Corporation of Delhi (MCD) Class-1 Enlistment |
| `/registrations` | `assets/nbcc-certificate1.jpg`, `assets/nbcc-certificate2.jpg` | 2 | NBCC (India) Limited Contractor Enlistment |

### F. Joint Ventures & Client Partners
| Intended Route | Source Asset Pattern | Count | Partners |
| :--- | :--- | :--- | :--- |
| `/` & `/about-us` | `assets/kmc.jpg`, `assets/rock-tech.jpg`, `assets/unitech.jpg`, `assets/unity.jpg` | 4 | Joint-venture partner and client organization logos |

---

## 4. Rule on Missing Source Files

The Phase 1 audit revealed two source gaps in historical sequences:
1. `key-pro-11.jpg` is missing from the legacy source directory.
2. `machinery1.jpg` is missing from the legacy source directory (compensated by the complete `m1.jpg` through `m12.jpg` series).

**Policy:** Do not synthesize or AI-generate fake replacements. The application code will explicitly skip missing indices in loops and utilize only verified photographic assets.
