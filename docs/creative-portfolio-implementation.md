# Creative Portfolio implementation

Updated November 24, 2026. `/creative-work` implements the approved `mockups/creative-portfolio-review.html`, with TIME Magazine added and Found Fable on its primary orange background. The HTML mockup remains unchanged.

## Layout and content

- The compact coral hero, approved biography, resume link, typography, and client-logo sheets retain their approved treatment.
- Seven projects occupy three equal desktop columns. Harley Davidson and Converse form the left column; City of Chicago and Thunder Valley form the right. Shorter Cox and Web tiles frame the square TIME slot in the middle. No card occupies half the gallery width.
- Gallery height is bounded between 800 and 960px on desktop. At a 1440px viewport the gallery is approximately 1325 by 912px, with 428px-wide cards. This replaces the rejected layout with three oversized squares.
- Tablets use three paired rows and a restrained closing landscape Web tile. Phones use one column. DOM and keyboard focus follow the visual starting positions.
- Cards reveal the existing project descriptions on hover and keyboard focus. Phone and touch layouts expose descriptions without requiring hover. Short desktop tiles have tailored padding and type sizes so the full copy fits.
- The 22 approved client marks remain in three stable, keyboard-accessible sheets. The homepage and other route layouts were not changed by this refinement.
- Found Fable uses its current primary peach/orange, `#ffb080`, verified against the official site's `--color-peach-400` token. The earlier `#ff914d` was taken from decorative artwork and was incorrect. The three services now form one aligned list above the existing external action. AGK's global palette is unchanged.

## TIME artwork

TIME Magazine appears once, as the seventh project, with a square, clearly labeled `Image coming soon` placeholder. Its existing service labels and article destination are retained. No substitute image is displayed.

Set `imageUrl` on the TIME record in `src/data/projects.ts` when the approved square image arrives. The normal image and hover treatment will replace the placeholder automatically.

`public/assets/time-target.jpg` is an unused reference downloaded during the earlier implementation from Found Fable's `Time%26Target.webp` URL. It is not rendered on this page. All six displayed project images, 22 client marks, AGK logos, and fonts retain their existing local sources.

## Verification

- Production build, including TypeScript and all 13 static routes, passes. Lint has zero errors and the existing unused `sectionContent2` warning in `src/pages/creative-work/converse.tsx`.
- Real production-browser checks and captures cover 320, 390, 768, 1024, 1025, 1440, and 1904px. The 1024px capture also uses reduced motion.
- Checks cover exact copy and links, loaded media, no horizontal overflow, non-overlapping tiles, shared container edges, a square TIME slot, readable overlay bounds and keyboard focus, stable client sheets and their controls, responsive navigation, and the correct studio/footer colors.
- Before/after layout detector scans report no findings. The independent layout critique informed the proportions; a fresh visual finish review examined the rendered captures and returned ship with no material issues in scope. Mechanical checks were not treated as proof of design quality.
- The desktop Cox crop retains the mark while trimming the phone form. The pending TIME artwork remains visibly empty by design; review its crop when the actual image is supplied.

Ignored review evidence is in `.tmp/portfolio-refinement/`. Browser checks were injected by a temporary QA proxy, not added to production code. The gray QA receipt in review captures is not part of the application. No deployment or external message was sent.

All task-owned preview and browser processes were closed. Cleanup verification found no remaining owned processes or listeners on the recorded preview and browser-debugging ports.
