# Current State

## What Was Built

A client-ready premium furniture business website template for `Oak & Ivory Living`. It includes a sticky navbar, editorial hero with a rotating slideshow, featured collections, product showcase grid, why-choose-us section, showroom inspiration section, consultation CTA, testimonials, and footer.

## Folder Path

```bash
web-template-project/templates/furniture-website
```

This path was used because the prompt's exact `Web Templates Projects/` folder did not exist, while `web-template-project/` did.

## Main Design Decisions

- Built as a Vite + React + TypeScript + Tailwind project for easy duplication across future templates.
- Used a warm premium palette: ivory, linen, beige, charcoal, walnut, bronze, clay, and restrained sage.
- Used `Libre Caslon Display` for display typography and `Manrope` for body text.
- Centralized replacement content in `src/data/siteContent.ts`.
- Used real remote interior/furniture images as safe placeholders, with CSS fallback panels if images fail.
- Added subtle motion through hover lifts, image zooms, sticky glass navigation, restrained reveal animation, and an auto-rotating hero carousel with manual arrows and dots.

## Refinements Completed

- Removed the previous region-specific references, including local phone/address details and local-currency pricing.
- Repositioned the brand as a premium UK/US furniture company with London, Manchester, New York, and Chicago references.
- Changed product pricing to dollar placeholders using `$`.
- Reworked the hero section around a premium editorial image carousel with automatic rotation, pause-on-hover behavior, arrow controls, and dot navigation.
- Refined the hero carousel image layering so each slide fills the full card instead of appearing as a cropped strip, and moved the editorial note below the image card for better readability.
- Replaced visible template-style copy with real showroom-facing copy.
- Improved product-card spacing, price treatment, hover borders, focus states, and mobile stacking.
- Polished the consultation CTA and footer copy so the page feels client-ready rather than scaffolded.

## Components Created

- `Navbar`
- `Hero`
- `HeroCarousel`
- `SectionHeader`
- `CollectionCard`
- `ProductCard`
- `FeatureCard`
- `ShowroomCard`
- `TestimonialCard`
- `ConsultationCTA`
- `Footer`
- `ButtonLink`
- `ImageFrame`

## How To Run

```bash
npm install
npm run dev
```

## How To Build

```bash
npm run build
```

## Remaining Improvements

- Replace placeholder remote images with real client showroom and product photography.
- Connect the consultation CTA to a CRM form, appointment scheduler, or booking page.
- Add optional catalogue filtering if a client has a larger inventory.
- Add SEO metadata and Open Graph images for a production client launch.

## Files Changed In Latest Refinement

- `src/data/siteContent.ts`
- `src/components/Hero.tsx`
- `src/components/HeroCarousel.tsx`
- `src/components/ProductCard.tsx`
- `src/components/ConsultationCTA.tsx`
- `src/components/Footer.tsx`
- `src/App.tsx`
- `src/index.css`
- `tailwind.config.js`
- `CURRENT_STATE.md`

## Upgrade Pass - 2026-06-11

### What Was Improved

- Added a premium reveal-on-scroll system across collections, products, features, showroom stories, CTA, and testimonials.
- Improved showroom image sizing on mobile while keeping immersive desktop imagery.
- Preserved the showroom/editorial direction and avoided changing the established furniture design language.

### Files Changed

- `src/App.tsx`
- `src/index.css`
- `src/components/Reveal.tsx`
- `src/components/ShowroomCard.tsx`

### Responsive Fixes Made

- Showroom story cards now use smaller mobile heights and larger desktop heights.
- Motion wrappers preserve clean stacking across mobile and tablet.

### Motion / Interaction Improvements Added

- Added Intersection Observer reveal animations with staggered timing.
- Added reduced-motion support.

### Known Issues Remaining

- No ecommerce/cart or product detail flow is connected.
- Placeholder images should be replaced with real showroom/product photography.

### Suggested Next Improvements

- Add product detail pages, fabric/material swatches, room packages, and an inquiry form.
