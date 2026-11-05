# CPA Arora — Frontend Architecture & Design System Foundation

## 1. Technical Stack Overview

| Layer | Selection | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `^14.2.15` (App Router) | Multi-route static generation, modern metadata API, streaming layouts, zero-runtime CSS. |
| **UI Library** | React | `^18.3.1` | Concurrent rendering, stable hooks, compatible ecosystem. |
| **Language** | TypeScript | `^5.6.3` (Strict Mode) | Complete type safety across components, props, layouts, and route definitions. |
| **Styling** | Tailwind CSS | `^3.4.14` | Design token synchronization, utility-first CSS, purge optimizations, no runtime overhead. |
| **Typography** | `next/font/google` | Plus Jakarta Sans & Space Mono | Zero layout shift (CLS), self-hosted at build time. |
| **Asset Engine** | Next.js Image | Standard `<Image />` | Responsive srcset, lazy loading, and dimension reservation. |

---

## 2. Design Token System

The design aesthetic is **Corporate Heavy Civil Infrastructure**: professional, authoritative, elegant, and restrained.

### Color Tokens

| Token Name | Hex Value | Semantic Role | Tailwind Utility Class |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `#101D33` | Primary brand ground, header, hero dark mode, major cards | `bg-cpa-navy`, `text-cpa-navy` |
| **Secondary Navy** | `#192B46` | Nav hover states, sub-headers, dark element borders | `bg-cpa-navy-secondary`, `border-cpa-navy-border` |
| **White** | `#FFFFFF` | Card surfaces, modals, contrast typography | `bg-cpa-white`, `text-cpa-white` |
| **Off-White** | `#F5F7FA` | Page background, subtle neutral contrast | `bg-cpa-offwhite` |
| **Gold Accent** | `#B89A5A` | Brand emblems, category badges, CTAs, focus indicators | `bg-cpa-gold`, `text-cpa-gold`, `border-cpa-gold` |
| **Primary Text** | `#172033` | Headings, high-contrast body content | `text-cpa-text-primary` |
| **Secondary Text** | `#626D7D` | Body copy, descriptions, secondary metadata | `text-cpa-text-secondary` |

### Typography Tokens
- **Primary Sans Serif:** `Plus Jakarta Sans` (`--font-sans`) — Modern, engineered geometric sans with high legibility across technical specifications.
- **Technical Monospace:** `Space Mono` (`--font-mono`) — Precision metadata tags, tender numbers, class designations, and coordinate telemetry.

### Spacing & Layout Tokens
- **Maximum Container Width:** `1240px` (`max-w-container`)
- **Responsive Container Padding:** `px-4 sm:px-6 lg:px-8`
- **Border Radii:** Clean architectural corners (`rounded-sm: 3px`, `DEFAULT: 4px`, `rounded-md: 6px`)
- **Focus Indicator:** Accessible 2px solid `#B89A5A` with 3px offset (`:focus-visible`).

---

## 3. Directory Structure

```
├── app/
│   ├── about-us/
│   │   ├── board-of-directors/page.tsx
│   │   ├── company-profile/page.tsx
│   │   └── core-team/page.tsx
│   ├── contact-us/page.tsx
│   ├── executed-projects/page.tsx
│   ├── financials/page.tsx
│   ├── globals.css
│   ├── infrastructure/page.tsx
│   ├── layout.tsx
│   ├── major-projects/page.tsx
│   ├── not-found.tsx
│   ├── ongoing-projects/page.tsx
│   ├── page.tsx
│   ├── projects/page.tsx
│   └── registrations/page.tsx
├── components/
│   ├── layout/
│   │   ├── Breadcrumb.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── docs/
│   ├── architecture.md
│   ├── asset-usage-map.md
│   └── route-inventory.md
├── public/
│   ├── logo.png
│   └── logo.svg
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Layout & Accessibility Foundations

1. **Root Layout (`app/layout.tsx`):**
   - Implements semantic HTML5 structure (`<html lang="en">`, `<Header />`, `<main id="main-content">`, `<Footer />`).
   - Integrated keyboard skip link targeting `#main-content`.
   - Global SEO metadata base, OpenGraph declarations, and viewport settings.
2. **Accessible Navigation Shell (`components/layout/Header.tsx`):**
   - Supports keyboard tab navigation and focus indicators.
   - Mobile drawer with body scroll lock and escape-key dismissal.
   - Distinct active states based on `next/navigation`'s `usePathname()`.
3. **Motion Sensitivity:**
   - Global media query `@media (prefers-reduced-motion: reduce)` in `globals.css` collapsing animations and transitions for users requesting reduced motion.
