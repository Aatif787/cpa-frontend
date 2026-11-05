# CPA Arora — Route Inventory & Navigation Strategy

This document specifies the routing architecture for the CPA Arora website rebuild, mapping legacy production endpoints, architectural decisions, and Next.js App Router implementations.

## 1. Executive Summary & Routing Principles

- **Architecture:** Next.js App Router (`app/` directory).
- **Format:** Fully multi-route static and server-rendered website (not a single-page hash application).
- **Legacy Route Preservation:** 100% preservation of all previously functional URLs to safeguard search engine indexing and external backlinks from government portal filings and tenders.
- **Projects 404 Resolution:** The legacy site returned an HTTP 404 at `/projects`. In this rebuild, `/projects` is established as an overarching **Projects Hub** that categorizes and routes visitors to ongoing, executed, and major landmark projects.

---

## 2. Route Mapping Matrix

| Route Path | Legacy Production Status | App Router File Location | Page Type / Role | Breadcrumb Structure |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `200 OK` | `app/page.tsx` | Main Homepage Shell | `Home` |
| `/about-us/company-profile` | `200 OK` | `app/about-us/company-profile/page.tsx` | Corporate Profile & Heritage | `Home / About Us / Company Profile` |
| `/about-us/board-of-directors` | `200 OK` | `app/about-us/board-of-directors/page.tsx` | Board & Executive Governance | `Home / About Us / Board of Directors` |
| `/about-us/core-team` | `200 OK` | `app/about-us/core-team/page.tsx` | Technical Team & Field Leadership | `Home / About Us / Core Team` |
| `/projects` | `404 Not Found` (Legacy) | `app/projects/page.tsx` | **New Projects Hub** (Resolves 404) | `Home / Projects Hub` |
| `/ongoing-projects` | `200 OK` | `app/ongoing-projects/page.tsx` | Active Road & Highway Works | `Home / Projects / Ongoing Projects` |
| `/executed-projects` | `200 OK` | `app/executed-projects/page.tsx` | Completed Pavement Deliverables | `Home / Projects / Executed Projects` |
| `/major-projects` | `200 OK` | `app/major-projects/page.tsx` | Flagship Landmark & Airport Works | `Home / Projects / Major Projects Done` |
| `/infrastructure` | `200 OK` | `app/infrastructure/page.tsx` | Plants, Fleet & Machinery | `Home / Infrastructure & Machinery` |
| `/registrations` | `200 OK` | `app/registrations/page.tsx` | Departmental Enlistments & Class-1 | `Home / Registrations & Enlistments` |
| `/contact-us` | `200 OK` | `app/contact-us/page.tsx` | Head Office, Phone & Inquiries | `Home / Contact Us` |
| `/financials` | `200 OK` | `app/financials/page.tsx` | Solvency, Banking & Capacity | `Home / Financials` |
| `/*` (Fallback) | `404 Not Found` | `app/not-found.tsx` | Branded 404 Error Page | N/A |

---

## 3. Legacy `/projects` 404 Analysis & Resolution

### Legacy Condition
On the legacy site (`https://cparora.com/projects`), entering the `/projects` URL resulted in a generic server 404 error page because projects were fractured across `/ongoing-projects`, `/executed-projects`, and `/major-projects` with no parent directory route.

### Solution Implemented
1. Created `app/projects/page.tsx` acting as an executive landing page and portfolio directory.
2. Grouped project branches clearly:
   - **Ongoing Contracts:** Active multi-lane widening and resurfacing.
   - **Executed Contracts:** Delivered airside and municipal works.
   - **Major Landmark Works:** High-value multi-crore infrastructure packages.
3. Preserved all legacy sub-routes (`/ongoing-projects`, `/executed-projects`, `/major-projects`) as first-class routes for complete backwards compatibility.
4. Header and Footer navigation structures link to both the Hub and individual sub-categories.

---

## 4. Navigation Architecture

### Header Shell
- Sticky top branding header with deep navy background (`#101D33`) and gold active accents (`#B89A5A`).
- Desktop dropdown navigation with keyboard accessible hover and click triggers.
- Mobile sliding drawer navigation with body scroll locking and Esc key handling.

### Breadcrumbs
- Accessible breadcrumb primitive (`components/layout/Breadcrumb.tsx`) rendered on all secondary routes.
- Schema markup readiness with `aria-label="Breadcrumb"` and `aria-current="page"`.

### Footer Shell
- Full corporate sitemap with quick links to every route.
- Verified headquarters details and official telephone lines.
- Class-I Civil Infrastructure Contractor credential badge.
