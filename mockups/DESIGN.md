# AGK — Round 2 design studies

Scope: HTML concepts for the existing Next.js Pages Router frontend. Mode: Experience. These options are not a selected production design system.

## Direction contract

The first round was rejected as generic and too neutral. The second brief explicitly calls for eccentric layouts, substantial bright color, creative ambition and three distinct options. That request takes precedence over restrained neutral-surface defaults in the installed design skills and the reference handoff's suggested color ratios.

Product truth remains unchanged: creative direction and copywriting, Found Fable Creative Co., children's picture books, Bertha's supplied publication details, and the existing portfolio projects. No article publication credits have been inferred.

## Shared tokens

| Token | Value |
|---|---|
| Coral | #FF8C61 |
| Teal | #5BBFCC |
| Limoncello | #E8D44A |
| Ink | #1A1A1A |
| Paper | #FEFCFA |
| Soft | #F3EDE5 |
| Display | Bricolage Grotesque, 600 and 800 |
| Body | DM Sans, 400 and 500 |
| Gutter | clamp(24px, 4vw, 64px) |
| Mobile breakpoint | 767px |
| Tablet breakpoint | 1024px |
| Motion | 200–400ms hover/press; reduced-motion override |

Display scale deliberately exceeds normal product UI scales to meet the poster/gallery brief. CSS uses semantic surfaces and one authored SVG arrow. All images and fonts are embedded for portable review.

## The Type Poster

Coral typography becomes the main composition; portrait photography interrupts the lettering. Black and teal audience paths follow immediately. Campaigns use an asymmetric gallery, with larger features spanning both columns. Yellow gives the freelance section a separate presence. Mobile flattens the stagger while retaining the typographic hierarchy.

## After Hours Gallery

Charcoal is a deliberate exhibition backdrop for the campaign artwork. Coral names the creative and teal identifies the books path. The campaign hero has three explicit selectors; both the image and outgoing project link update. There is no autoplay. The portfolio uses alternating wide image spreads. Books shift to yellow and teal surfaces.

## The Creative Playbook

Teal supports an editorial photographic collage. Flat coral and yellow plates, intentional static rotations, large lettering and ruled project spreads form the visual grammar. The mobile collage is recomposed into a contained vertical layout. Rotations are authored composition, not pointer-following animation.

## Content and implementation boundaries

- Home, Creative work, Books and Contact are hash-routed review views in each standalone HTML.
- Campaign case-study links open the existing live site. A Next.js implementation will retain the repository's local project routes.
- Contact forms validate locally and show a preview confirmation. They do not transmit data.
- Final book cover, illustrator credits, article titles/URLs and confirmed event information remain content dependencies.
- The current raster logo is retained; request the matching production SVG.
- The old round and its content/route review are preserved in `round1-review.html` and the original three HTML files.

## Verification

Reviewed desktop and 390px mobile renders of Home, Creative work, Books and Contact for all three concepts. Checked desktop document overflow and broken images, the gallery's campaign selection and destination link, and the contact-preview behavior. Checked embedded script syntax and packaged relative links.

The Impeccable context executable could not initialize its engine in the restricted cache location; source instructions were used directly. Visual QA used the available browser tools. No skill-runner certification is claimed.

## Option 6 palette refinement

User selected the Playbook composition and requested a more connected palette inspired by option 4. All content, typography, rotations, dimensions and navigation remain unchanged. Warm coral #EFA17F leads, softened teal #99C2BF groups book content, cream #F7EBDD frames photographs, and warm sand #F0DEBC supports longer reading. Charcoal unifies the campaign grid instead of assigning arbitrary colors to individual projects. Original version retained in review/06-playbook-original.html. This palette is a review proposal for option 6 only.

Palette refinement verified in desktop and 390px mobile browser renders across Home, Creative work, Books and Contact. Source comparison confirms that option 6 changed only within CSS; content and interaction scripts are identical.


## Option 6 pacing revision

User requested less repeated content and more restraint in consecutive bold sections. Home now contains the collage, two campaign previews (Harley-Davidson and Converse), compact freelance content and the book feature. Removed the duplicate name band, repeated voices heading, second portrait/bio block and oversized footer invitation. Full portfolio and biography remain under Creative work. Cream connects routing, projects and freelance; coral leads and teal marks the book feature. Heading scales below the hero are reduced. Comparison opens on option 6. Desktop home transitions and all four mobile views were visually reviewed.


## Purpose and hierarchy revision

Option 6 only: removed the duplicate header name and CSS black logo backing; navigation now uses paper. Removed the routing strip and placed compact destination links in the hero. Home previews use actual Harley ads and Converse social executions at capped sizes, with excerpts from existing project copy. Found Fable is a distinct dark-teal hiring panel with services and a tested Discuss a project route to the creative inquiry state. Bertha is retained. Creative work is the parent heading (48–68px desktop, 46px mobile), project titles are 26–32px, the first separator is removed, and View all creative work follows the projects. Reviewed desktop home sequence and all four mobile views, including the middle of Home.
