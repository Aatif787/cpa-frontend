# C.P. Arora — Corporate Website Modernization

A modern, accessible, high-performance web platform for **C.P. Arora**, premier Indian civil engineering and infrastructure contractors specializing in national highways, runway pavements, and asphalt engineering.

---

## 1. Technology Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Version 14)
- **UI Engine:** [React 18](https://react.dev/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with centralized design tokens
- **Typography:** Next.js Google Fonts (`Plus Jakarta Sans` for body, `Space Mono` for technical metadata)

---

## 2. Getting Started & Development

### Prerequisites
- **Node.js:** v18.17+ or v20+ (tested on Node v24.8.0)
- **npm:** v9+ (or compatible package manager)

### Installation
Clone or navigate to the workspace directory and install dependencies:

```bash
npm install
```

### Running Locally
To launch the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Type Checking & Linting
Validate TypeScript types and code quality:

```bash
# TypeScript strict check
npm run type-check

# ESLint validation
npm run lint
```

### Production Build
Generate an optimized production build:

```bash
npm run build

# Preview production build locally
npm run start
```

---

## 3. Design Tokens & Visual Hierarchy

The design system embodies **corporate infrastructure engineering**: professional, elegant, spacious, and restrained.

| Design Token | Value | Tailwind Utility | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `#101D33` | `bg-cpa-navy`, `text-cpa-navy` | Primary ground, navigation bar, hero |
| **Secondary Navy** | `#192B46` | `bg-cpa-navy-secondary` | Dark surface borders, dropdowns |
| **White** | `#FFFFFF` | `bg-cpa-white`, `text-cpa-white` | Cards, primary containers |
| **Off-White** | `#F5F7FA` | `bg-cpa-offwhite` | Global body background |
| **Gold Accent** | `#B89A5A` | `bg-cpa-gold`, `text-cpa-gold` | Brand accents, badges, CTAs |
| **Primary Text** | `#172033` | `text-cpa-text-primary` | High contrast headings & titles |
| **Secondary Text** | `#626D7D` | `text-cpa-text-secondary` | Technical descriptions, body copy |

---

## 4. Route Structure & Compatibility

All legacy routes from the original website are preserved, alongside a newly introduced **Projects Hub** that resolves the legacy 404 error at `/projects`:

- `/` — Homepage Foundation Shell
- `/about-us/company-profile` — Corporate Profile & Heritage
- `/about-us/board-of-directors` — Board of Directors & Governance
- `/about-us/core-team` — Engineering Core Team
- `/projects` — **Projects Hub** (replaces legacy 404 with unified directory)
- `/ongoing-projects` — Active Road & Highway Contracts
- `/executed-projects` — Completed Pavement Works
- `/major-projects` — Flagship Works & Airfield Runway Projects
- `/infrastructure` — Plant Fleet, Sensor Pavers & Mix Units
- `/registrations` — Statutory Class-I & Class IA Enlistments & Approvals
- `/contact-us` — Corporate Headquarters & Official Telephones
- `/financials` — Solvency & Bidding Capacity

See [docs/route-inventory.md](docs/route-inventory.md) for full routing specifications.

---

## 5. Asset Preservation Policy

- Original assets in `assets/`, `site_assets/`, and `preserved_assets/` are permanent, read-only audit archives.
- Web-served branding assets are safely referenced from `public/` (`public/logo.png`, `public/logo.svg`).
- No original file has been renamed, overwritten, or destructively modified.
- See [docs/asset-usage-map.md](docs/asset-usage-map.md) for source-to-destination asset mappings.

---

## 6. Project Documentation

Detailed architecture specifications are located in the `docs/` folder:
- [docs/architecture.md](docs/architecture.md) — Technical stack, layout primitives, and accessibility.
- [docs/route-inventory.md](docs/route-inventory.md) — Legacy route mapping and URL preservation.
- [docs/asset-usage-map.md](docs/asset-usage-map.md) — Complete digital asset registry.
