# SteadFlow Energies — Website (Phase 1: Corporate Site)

This is a complete, working front-end build of the Phase 1 corporate website described in the
product documentation: static HTML/CSS/JS, no build step required. Open `index.html` in a
browser, or serve the folder with any static server.

## What's included

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, problem, four pillars, how it works, impact stats, testimonials |
| `about.html` | Company story, mission, vision, leadership |
| `solar-solutions.html` | SME packages, load calculator, assessment request form |
| `marketplace.html` | SteadFlow Market categories, sample listings, vendor registration |
| `steadflow-iq.html` | AI dashboard mockup, predictive maintenance, AI assistant demo |
| `impact.html` | Impact stats, SDG alignment |
| `partner.html` | Investor/supplier/NGO info, installer registration, contact form |
| `contact.html` | General contact form and details |
| `styles.css` | Shared design system (tokens, layout, components) |
| `script.js` | Shared interactions (nav, scroll reveal, counters, demo forms, calculator) |

All forms are client-side demo forms (`data-demo-form`) — they show a confirmation message but
don't submit anywhere yet. Wire them to your backend or a form service (see below).

## Design system

- **Colors** — Canopy green (`--canopy-600 #1b5e44`), Dusk blue (`--dusk-700 #0b2e4a`), Amber
  (`--amber-500 #f4b93e`), on a warm sand background (`--sand-100 #faf7f0`).
- **Type** — Fraunces (display/headlines), Inter (body/UI), JetBrains Mono (stats, data, labels).
- **Signature motif** — the "steady flow" waveform: an erratic red line (grid power) resolving
  into a smooth amber line (SteadFlow solar), used in the homepage hero and the logo mark.

All content marked "illustrative" or "sample" (impact numbers, dashboard readings, product
listings) is placeholder — swap in real figures as they become available.

## Recommended path to Phase 2–4 (per the product doc)

The doc specifies a full platform (marketplace with checkout, customer/vendor/admin dashboards,
AI energy platform, IoT integration) — that's a multi-month backend build, not something to
fake with static files. Suggested path:

1. **Migrate this frontend into Next.js + Tailwind** (as recommended in the doc) once dynamic
   routing, auth-gated dashboards, and SSR/SEO are needed. The current HTML/CSS maps cleanly to
   components — the design tokens in `styles.css` can become a Tailwind config or CSS variables
   file directly.
2. **Backend**: Node.js/Express or NestJS + PostgreSQL, per the doc's schema (`users`,
   `products`, `orders`, `solar_installation`, `energy_data`). Start with `users` + assessment
   requests to replace the demo forms with real lead capture.
3. **Auth**: JWT-based, with roles (customer, vendor, installer, admin) as specified.
4. **Payments**: Paystack/Flutterwave integration when the marketplace goes live (Phase 2).
5. **AI/IoT**: SteadFlow IQ's live dashboard and assistant depend on device telemetry — this is
   realistically a Phase 3 item once installations are generating real data.

I scoped this build to the corporate site (Phase 1) because that's what's buildable and
demonstrable right now; the marketplace/dashboards/AI layers need real backend infrastructure
and decisions (hosting, DB, IoT protocol) that are worth making deliberately rather than
stubbing out. Happy to help build any of those next — e.g. the Express/PostgreSQL API for lead
capture and the assessment form would be a good next step.
