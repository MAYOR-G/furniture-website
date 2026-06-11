# Current State

## What Was Built

A client-ready premium furniture business website template for `Oak & Ivory Living`. It includes a sticky navbar, editorial hero, featured collections, product showcase grid, why-choose-us section, showroom inspiration section, consultation CTA, testimonials, and footer.

## Folder Path

```bash
web-template-project/templates/furniture-website
```

This path was used because the prompt's exact `Web Templates Projects/` folder did not exist, while `web-template-project/` did.

## Main Design Decisions

- Built as a Vite + React + TypeScript + Tailwind project for easy duplication across future templates.
- Used a warm premium palette: ivory, linen, beige, charcoal, walnut, bronze, clay, and restrained sage.
- Used `Cormorant Garamond` for display typography and `Manrope` for body text.
- Centralized replacement content in `src/data/siteContent.ts`.
- Used real remote interior/furniture images as safe placeholders, with CSS fallback panels if images fail.
- Added subtle motion through hover lifts, image zooms, sticky glass navigation, and restrained reveal animation.

## Components Created

- `Navbar`
- `Hero`
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
- Connect the consultation CTA to WhatsApp, Calendly, a CRM form, or a booking page.
- Add optional catalogue filtering if a client has a larger inventory.
- Add SEO metadata and Open Graph images for a production client launch.
