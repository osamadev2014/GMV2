# Rebuild order.sa Home Page (Arabic / RTL) as GoMenu

Goal: reconstruct the order.sa home page with the highest visual fidelity, rebranded as **GoMenu**, on this project's TanStack Start + React + TS + Tailwind v4 + Framer Motion stack (Next.js isn't supported here — component code and visuals remain equivalent).

Scope: **home page only**, **Arabic-only (RTL)**, on-scroll animations, responsive across desktop/laptop/tablet/mobile. No backend, no other routes.

## Approach

1. **Scrape reference** – use `fetch_website` (and if needed the Firecrawl connector) to pull the full home HTML, computed styles snapshot, and every image asset from `order.sa`. Store images under `src/assets/order-clone/` via `lovable-assets` so the repo stays light.
2. **Rebrand pass** – swap the wordmark logo for a new **GoMenu** SVG logo, replace the domain string "order.sa" → "gomenu" wherever it appears in copy, keep every other visible pixel, illustration, dashboard mock, and floating card identical.
3. **Global setup**
   - Set `<html lang="ar" dir="rtl">` in `__root.tsx` shell.
   - Load **IBM Plex Sans Arabic** (weights 300/400/500/600/700) via `<link>` tags in the root head (never `@import` a URL in `styles.css`).
   - Extend `src/styles.css` `@theme` with the reference palette (primary purple `~#6E3AFF`, accent magenta/pink underline, muted lavender bg, neutral grays), radius scale, and shadow tokens sampled from the screenshot.
   - Update root `head()` metadata to GoMenu title/description/OG.
4. **Component architecture** (all under `src/components/site/`):
   - `Navbar` – rounded pill, sticky, scroll-shadow, active link underline, EN language pill, GoMenu logo on the right (RTL).
   - `Hero` – purple "no commissions" badge, large headline with pink hand-drawn underline strokes, subcopy, primary + secondary CTA, layered dashboard mock with floating sales-report card, new-order card, and rewards card. Reveal + subtle float animations via Framer Motion.
   - `ValueProp` – "نساعدك على زيادة أرباحك" intro + delivery/pickup illustration pair.
   - `Features` / `Services` grid – icon cards from reference.
   - `Sectors` – industry chips/cards.
   - `Pricing` – tier cards matching reference layout.
   - `Stats` – animated counters.
   - `Testimonials` – carousel/grid as on reference.
   - `FAQ` – accordion (shadcn Accordion, restyled).
   - `Contact` teaser + `Footer` (columns, socials, country list, copyright, rounded top).
   - Shared primitives: `Container`, `SectionHeading`, `PillBadge`, `GradientButton`, `FloatingCard`, `MotionReveal` wrapper.
5. **Motion** – Framer Motion for: page-load fade/slide-up on hero, `whileInView` reveal with stagger for section content, gentle infinite `y` float on hero floating cards, hover scale/shadow on CTAs and cards, navbar background/shadow transition on scroll.
6. **Responsive** – match reference breakpoints (≥1280 desktop, 1024 laptop, 768 tablet, ≤640 mobile): nav collapses to hamburger sheet, hero stacks, floating cards reposition/scale down, footer columns collapse.
7. **Assembly** – rewrite `src/routes/index.tsx` to render the full home page (replacing the placeholder) with proper Arabic head metadata.
8. **Verification loop** – after each major section, run headless Playwright to screenshot the local build at 1440 / 1024 / 768 / 390 widths and diff visually against the saved order.sa screenshots; iterate until differences are imperceptible.

## Content & branding rules

- Keep all Arabic marketing copy from the reference verbatim (you own it), except: brand name "أوردر" / "order" → "GoMenu"; any `order.sa` URL → `gomenu` equivalent.
- Reuse the reference's dashboard mock, food emoji cards, and illustrations as-is (owned assets).
- No new sections, no simplifications, no re-ordering.

## Out of scope for this plan

- Other pages (services, pricing detail, contact form page, blog) — can be a follow-up.
- English variant / language switch behavior (EN pill is visual only for now).
- CMS, forms backend, analytics.

## Technical notes

- Stack constraint: TanStack Start (not Next.js App Router). Server Components ≈ route loaders; there's no dynamic data on this page so everything renders statically.
- Tailwind v4: tokens go in `src/styles.css` under `@theme` / `@theme inline`; no `tailwind.config.js`.
- Fonts: `<link>` in `__root.tsx` head, then `--font-sans: "IBM Plex Sans Arabic", ...` in `@theme`.
- RTL: set `dir="rtl"` on `<html>`; use logical Tailwind utilities (`ps-*`/`pe-*`, `start-*`/`end-*`) so mirroring is automatic.
- Assets: uploaded via `lovable-assets create` and referenced through `.asset.json` pointers to keep the repo lean.
- Accessibility: semantic landmarks (`header`/`main`/`section`/`footer`), alt text on every image, focus-visible rings on all interactive elements, reduced-motion fallback on Framer Motion reveals.

## Deliverables

- New home page at `/` matching order.sa visually at 99%+ across 4 breakpoints.
- Reusable component library under `src/components/site/`.
- Extended design tokens in `src/styles.css`.
- Rebranded logo + updated head metadata.
