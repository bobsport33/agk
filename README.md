# AGK portfolio

Next.js Pages Router portfolio based on the approved Playbook direction. The homepage follows `mockups/homepage-copy-review.html`. Creative Portfolio follows `mockups/creative-portfolio-review.html`, with the approved Time magazine addition and orange Found Fable section. The other pages retain the `mockups/06-playbook.html` implementation.

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
- Keep natural artwork proportions in homepage previews. The seven-project portfolio mosaic uses three equal desktop columns with varied tile heights: four medium images flank the square TIME slot, with shorter Cox and Web tiles above and below it. Tablets use paired cards and a closing landscape tile; phones use one column. TIME Magazine keeps a square artwork placeholder until its image is supplied.

## Content and routes

- Overview routes: `/`, `/creative-work`, `/books`, `/contact`, `/resume`.
- Case studies: `/creative-work/harley-davidson`, `/creative-work/city-of-chicago`, `/creative-work/cox-communications`, `/creative-work/converse`, `/creative-work/thunder-valley`, `/creative-work/recent-web-projects`.
- The six former root-level project URLs permanently redirect to their nested equivalents.
- `src/data/projects.ts` owns mosaic placements, descriptions, local case-study destinations, and the external TIME100 x Target article link. The Creative Portfolio URL remains `/creative-work`.
- `src/content/portfolio.ts` owns the approved portfolio intro and 22 client logos. The client section displays three keyboard-accessible logo sheets.
- `src/content/home.ts` owns the approved homepage copy, including the requested third-fact placeholder. `src/content/site.ts` and `src/content/books.ts` own campaign media and book details; placeholder prose on other overview pages remains pending final copy.
- `src/content/playbook-assets.ts` records mockup asset provenance. Fonts and images are served locally.

## Contact integration

`/contact?topic=creative` and `/contact?topic=books` initialize the corresponding inquiry type. The form posts JSON, including `topic`, to the existing `/.netlify/functions/contact` endpoint. This repository does not contain that handler. Confirm the deployed handler accepts the added field and verify actual delivery before release. Local verification intercepts requests; it does not send messages.

## Handoff

See `docs/playbook-migration-plan.md` for the approved plan and `docs/playbook-implementation.md` for implementation, review, verification, and release dependencies.

The November 20 homepage update is documented in `docs/homepage-implementation.md`.
The November 20 Creative Portfolio update is documented in `docs/creative-portfolio-implementation.md`.
