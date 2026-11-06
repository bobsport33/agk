# AGK portfolio

Next.js Pages Router portfolio based on the approved `mockups/06-playbook.html` direction. Creative Work retains the original six-project mosaic.

## Local development

With dependencies installed:

```sh
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

Development and production builds use webpack to avoid the Windows/Turbopack junction failure observed in this checkout. Production route types are checked; `tsconfig.json` excludes duplicate generated development route validators when both build directories exist.

## Design system

- `src/styles/tokens.css`: palette, hover/active/disabled colors, semantic foreground/background pairs, type sizes, spacing, and layout variables.
- `src/styles/globals.css`: local font faces, global h1–h6/body typography, named hero variants, links, controls, focus, and reduced motion.
- Desktop: 1025px and up. Tablet: 641–1024px. Mobile: 640px and below. The same variable names are overridden per tier; layout queries use matching thresholds in `src/styles/breakpoints.ts`.
- Keep natural artwork proportions in homepage previews. The mosaic has its own preserved 12-column desktop geometry, two-column tablet fallback, and one-column mobile fallback.

## Content and routes

- Overview routes: `/`, `/creative-work`, `/books`, `/contact`, `/resume`.
- Case studies: `/creative-work/harley-davidson`, `/creative-work/city-of-chicago`, `/creative-work/cox-communications`, `/creative-work/converse`, `/creative-work/thunder-valley`, `/creative-work/recent-web-projects`.
- The six former root-level project URLs permanently redirect to their nested equivalents.
- `src/data/projects.ts` owns mosaic placements and local case-study destinations.
- `src/content/site.ts` and `src/content/books.ts` own preview and book details; overview placeholder prose is intentional pending final copy.
- `src/content/playbook-assets.ts` records mockup asset provenance. Fonts and images are served locally.

## Contact integration

`/contact?topic=creative` and `/contact?topic=books` initialize the corresponding inquiry type. The form posts JSON, including `topic`, to the existing `/.netlify/functions/contact` endpoint. This repository does not contain that handler. Confirm the deployed handler accepts the added field and verify actual delivery before release. Local verification intercepts requests; it does not send messages.

## Handoff

See `docs/playbook-migration-plan.md` for the approved plan and `docs/playbook-implementation.md` for implementation, review, verification, and release dependencies.
