# AGK portfolio → Creative Playbook migration plan

Implementation completed locally. See [implementation handoff](playbook-implementation.md) for delivered work, review results, verification, and remaining release dependencies.

Site kind: personal creative-services and author portfolio.

Reference: `mockups/06-playbook.html`, as it exists on November 6, 2026, including its final palette, pacing, and purpose/hierarchy overrides. This is an implementation plan; it does not change the production site.

## 1. Direction and scope

Use the mockup's current homepage composition: paper navigation, coral collage hero, paper editorial project previews, dark teal Found Fable panel, teal book feature, and compact paper footer. Preserve the deliberate static rotations, cream photo frames, large Bricolage Grotesque headings, thin rules, and restrained hover responses.

**Creative Work is the explicit exception:** keep the mockup's introductory hero, then use the existing site's mosaic. Do not implement the mockup's equal two-column project-card grid or its padded, fixed-height thumbnail frames. The homepage's two editorial campaign previews are a separate component and remain part of the selected homepage direction.

Headings and descriptive prose on the new overview pages can use lorem ipsum while final copy is developed. Keep meaningful navigation, project names, button labels, form labels, alt text, and accessibility messages. Keep the owner's name, existing case-study narratives, resume facts, credits, and project assets unless separately revised. Placeholder headings should approximate the mockup's length and line count, with a highlighted phrase available in the home hero.

Keep Next.js Pages Router, TypeScript, Emotion, React Hook Form, and Zod. This migration does not require a framework change, CMS, new animation library, or rebuilding existing case-study media layouts.

## 2. Existing implementation and migration map

| Existing source | Current role | Planned change |
|---|---|---|
| `src/pages/index.tsx` | Intro plus six-project mosaic | Extract the mosaic before replacing this page with the Playbook homepage. |
| `src/modules/DisplayCard/Index.tsx` | Image-fill tile, gradient label overlay, rounded frame | Reuse for the mosaic; make media fit/focal point configurable and adapt visual tokens without changing tile placement. |
| `src/modules/Header/Index.tsx` | AGK logo, Resume/Contact, mobile dropdown | Paper header with Home/Creative work/Books/Contact; preserve resume access elsewhere and existing keyboard/outside-click handling. |
| `src/pages/_app.tsx` | Global CSS, shared header, default description | Add the shared layout/footer and skip link; establish a consistent main-content target. |
| `src/pages/_document.tsx` | Google font links for Playfair Display, DM Sans, Michroma | Load Bricolage Grotesque 400/600/800 and DM Sans 400/500; remove obsolete font requests after auditing usage. |
| `src/styles/globals.css` | Large neutral/primary/secondary/accent scales; body gutters | Introduce the Playbook token system and reset. Move horizontal padding from body to content containers so section backgrounds run edge to edge. |
| `src/styles/breakpoints.ts` | 1440/1024/640/420 breakpoints | Standardize desktop ≥1025px, tablet 641–1024px, mobile ≤640px across tokens and components. |
| `src/components/Button/Index.tsx` | Small rounded button with hardcoded colors | Use semantic colors and square outlined/filled variants; support native button attributes, including explicit submit type. |
| `src/components/Link/Index.tsx` | Animated navigation link | Use semantic link color; current default references undefined `--secondary`. Separate navigation and arrow-link appearances. |
| `src/pages/contact.tsx` | Validated contact form posting to Netlify | Recompose to mockup layout; retain validation and submission behavior, add inquiry topic and accessible request states. |
| `src/pages/resume.tsx` | Styled experience timeline | Retain content/structure and route; align typography, colors, borders, spacing, and shared shell. |
| `src/components/projectComponents/*` | Existing case-study system | Retain content, media sequencing, lightbox, and playback. Apply shared tokens and update return navigation. |
| `src/pages/recent-web-projects.tsx` | Custom editorial project list | Preserve its layout/content; audit local styles after global token and gutter changes. |
| No production equivalents | Books, collage hero, Found Fable panel, shared footer | Add reusable modules and a Books route. |

The mockup is a standalone hash-routed prototype with embedded assets and accumulated CSS overrides. Port its final visual rules into components; do not copy its router, entire stylesheet, preview form handler, or unused gallery scripts.

## 3. Routes and navigation

| Destination | Production URL | Behavior |
|---|---|---|
| Home | `/` | New Playbook overview. |
| Creative work | `/creative-work` | Mockup intro plus preserved mosaic, Found Fable panel, resume link. |
| Books | `/books` | Books introduction, book feature, author narrative, future-work section. |
| Contact | `/contact` | Default creative inquiry. |
| Creative inquiry | `/contact?topic=creative` | Creative topic selected. |
| Book inquiry | `/contact?topic=books` | Books/schools/libraries/events topic selected. |
| Resume | `/resume` | Keep directly accessible, linked from Creative Work and footer. |

Make project pages children of Creative Work. This expresses the site's content hierarchy, makes the parent section clear in shared URLs, and keeps room for Books to develop independently. Nesting itself is not a ranking advantage; consistent links, redirects, and canonical URLs are the migration requirements.

| Existing URL → permanent redirect | Canonical project URL |
|---|---|
| `/harley-davidson` | `/creative-work/harley-davidson` |
| `/city-of-chicago` | `/creative-work/city-of-chicago` |
| `/cox-communications` | `/creative-work/cox-communications` |
| `/converse` | `/creative-work/converse` |
| `/thunder-valley` | `/creative-work/thunder-valley` |
| `/recent-web-projects` | `/creative-work/recent-web-projects` |

Move the six page files under `src/pages/creative-work/` and put the listing in `src/pages/creative-work/index.tsx`. Keep distinct static page files because each existing project has its own composition. Add permanent server-side redirects in `next.config.ts` (Next's permanent redirects use 308), or equivalent hosting redirects if required by the deployment. Do not leave duplicate pages at both URLs. Update the project registry, previews, mosaic, next-project links, canonicals, social metadata URLs, and sitemap entries to the nested destinations. Verify old URLs redirect directly to the final page with no chains and that direct loading/refresh works. Map the mockup's `/cox-mobile` link to `/creative-work/cox-communications`; add an old `/cox-mobile` redirect only if it is an actual published legacy URL.

Change `ProjectFooter`'s “Back to all projects” destination from `/` to `/creative-work`. Keep next-project navigation using nested URLs. Mark Creative Work active for `/creative-work` and paths beginning `/creative-work/`; Home should only be active on `/`. Add a compact Home / Creative Work / Project breadcrumb on case studies.

Implement ordinary Next links, direct URL loading, browser history, and refresh support. If existing review hashes are shared publicly, add a small compatibility redirect for `/#creative`, `/#books`, `/#contact-creative`, and `/#contact-books`; otherwise keep hash routing confined to the mockup.

## 4. Page composition

### Homepage

1. **Shared header:** paper surface, existing AGK logo without black backing or duplicate owner-name block, thin lower rule, four primary destinations. Target the mockup's 90px desktop/76px mobile header heights.
2. **Playbook hero:** coral surface; small role line and rule; oversized, tight heading with a paper highlight; compact Creative Work and Books links; layered portrait, campaign photo, teal backing plate, and decorative asterisk. Keep static rotations and image focal points. Compose the collage responsively rather than shrinking a desktop screenshot.
3. **Selected creative work:** paper section with a prominent section heading and two alternating editorial rows, Harley-Davidson and Converse. Each has a compact description, local case-study link, and two actual campaign executions at natural aspect ratios. Cap individual image widths around the mockup's 280px; retain its modest stagger. Finish with View all creative work.
4. **Found Fable panel:** inset dark teal panel on paper, identity/description/external studio link on one side, services and a full-width creative-inquiry CTA on the other. Use the same component on Creative Work.
5. **Book feature:** teal band; cream-framed, slightly rotated archival image or confirmed cover; date badge; book heading, description, publisher link, and book-inquiry CTA. Reuse on Books.
6. **Compact shared footer:** owner identity, Contact, Creative Work, Books, Resume, Found Fable, and verified social destinations. No giant repeated invitation, duplicate name band, removed routing strip, or second homepage biography/portrait section.

### Creative Work

1. Keep the mockup's large coral introductory hero with descriptive prose and creative-inquiry CTA.
2. Render an extracted `PortfolioMosaic` with the current six tiles and their desktop positions. Keep the existing thumbnail assets initially.
3. Follow with the shared Found Fable panel and resume link, then shared footer.

The desktop mosaic contract is a 12-column, seven-row grid with aspect ratio 1.85:

| Project | Column lines | Row lines |
|---|---|---|
| Harley-Davidson | 1–5 | 1–4 |
| City of Chicago | 8–13 | 1–5 |
| Cox Communications | 5–8 | 1–5 |
| Thunder Valley | 5–8 | 5–8 |
| Recent Web Projects | 8–13 | 5–8 |
| Converse | 1–5 | 4–8 |

Preserve the current two-column square-tile adaptation at ≤1024px and single-column adaptation at ≤640px. This tablet fallback is distinct from the rejected desktop mockup grid. Preserve the current DOM/keyboard order when extracting; do not reorder content just to match coordinates.

Remove the old homepage-specific `100svh - 188px` width calculation from the extracted mosaic. Its new page has a larger hero, so give the grid an independent, centered width capped at 1420px. Keep desktop proportions and placements. Do not squeeze the whole Creative Work page into one viewport.

Use a subtle frame and the existing readable overlay labels. Trial square or minimally rounded corners to fit Playbook, while keeping mosaic geometry. Evaluate each tile's crop individually: use `cover` where intentional cropping works, `contain` on a coordinated background where a complete logo/composition is necessary, and a per-project focal point where needed. Do not force every tile into a new shared thumbnail ratio or add card descriptions that alter the mosaic.

### Books

Build `/books` with the mockup's large opening headline, shared teal book feature, warm soft author-story section, and dark future-work section with book-inquiry link. Let headings and narrative descriptions be placeholders during layout work.

Keep confirmed book identity, publisher, credits, and publication information as structured content. The mockup shows October 3, 2027; treat that as reference content requiring confirmation before launch. Use the existing archival image as the interim visual and record its placeholder status in the content inventory. Do not invent a cover, illustrator credit, purchase link, event schedule, or publication claim.

### Contact

Use coral page background, large headline, introductory text/portrait, and an open form with ruled fields. Stack the content and form on mobile. Remove the current nested rounded panels.

Reuse the existing React Hook Form/Zod implementation and `/.netlify/functions/contact` integration. That endpoint is referenced by the frontend, but its function implementation was not found in the inspected repository; verify the deployed integration before treating delivery as complete.

Add a validated `topic: 'creative' | 'books'` field with two clearly selected options, preferably a native radio group styled like the mockup's buttons. Initialize from the query string after the Pages Router is ready, handle back/forward changes, and use creative as the fallback for unknown values. Include the topic in the request and update the receiving handler/template if necessary.

Keep name/email/message required. Preserve the current optional phone and karaoke fields initially; style them consistently instead of silently removing collected information. Add autocomplete, associated error messages, pending/disabled state, inline recoverable request errors, and an announced success state. Confirm submit/reset button types. Do not port the mockup's “Preview inquiry” behavior into production or show success before a successful request.

### Existing case studies and Resume

Apply a compatibility pass to all existing routes so the new header, footer, fonts, gutters, and palette form one site. Preserve project content and established media structures. Restyle `PageTitle` away from its gradient underline, use flat rules and the new heading face, and align numbered sections/project navigation with semantic tokens. Keep image-fit exceptions, video posters, controls, lightbox behavior, and the Recent Web Projects list intact.

Resume receives typography/color/spacing updates; its timeline and experience facts do not need a new architecture. These pages have no Playbook detail-page mockup, so this is a conservative visual adaptation, not a new case-study design.

## 5. Global design system: tokens, responsive values, and typography

Use `src/styles/tokens.css` for palette/state tokens and responsive sizing variables. Import it first in `src/styles/globals.css`, followed by the reset, global typography, and shared interaction styles. Emotion components consume these properties; they should not introduce independent heading scales, colors, or breakpoint-specific spacing values.

### Color primitives and interaction states

The base palette comes from the mockup's final overrides. Hover, active, and disabled values below are proposed additions to validate in context. Paper and ink need no separate color-state scales. Define state families for coral, teal, sand, soft, and Found Fable teal so a component never invents a new hover shade.

```css
:root {
  --color-coral: #efa17f;
  --color-coral-hover: #e58d68;
  --color-coral-active: #d97850;
  --color-coral-disabled: #dfc5b8;
  --color-teal: #99c2bf;
  --color-teal-hover: #7bafab;
  --color-teal-active: #639b97;
  --color-teal-disabled: #c0ceca;
  --color-sand: #f0debc;
  --color-sand-hover: #e6cfa6;
  --color-sand-active: #d8bc8c;
  --color-sand-disabled: #e5ddd0;
  --color-soft: #f0e7dc;
  --color-soft-hover: #e4d7c7;
  --color-soft-active: #d7c5af;
  --color-soft-disabled: #e9e4dd;
  --color-fable: #243d3c;
  --color-fable-hover: #315350;
  --color-fable-active: #192e2c;
  --color-fable-disabled: #6c7773;
  --color-paper: #f7ebdd;
  --color-ink: #1a1a1a;

  /* Stable text and section roles */
  --text-body: var(--color-ink);
  --text-heading: var(--color-ink);
  --text-inverse: var(--color-paper);
  --text-muted: #514b46;
  --surface-page: var(--color-paper);
  --surface-hero: var(--color-coral);
  --surface-books: var(--color-teal);
  --surface-reading: var(--color-soft);
  --surface-studio: var(--color-fable);
  --surface-inverse: var(--color-ink);

  /* Colored text/link roles: primary is dark teal for legibility */
  --text-primary: var(--color-fable);
  --text-primary-hover: var(--color-fable-hover);
  --text-primary-active: var(--color-fable-active);
  --text-primary-disabled: var(--color-fable-disabled);
  --text-secondary: var(--color-fable);
  --text-secondary-hover: var(--color-fable-hover);
  --text-secondary-active: var(--color-fable-active);
  --text-secondary-disabled: var(--color-fable-disabled);

  /* Brand control roles: foreground and background stay paired */
  --background-primary: var(--color-coral);
  --background-primary-hover: var(--color-coral-hover);
  --background-primary-active: var(--color-coral-active);
  --background-primary-disabled: var(--color-coral-disabled);
  --background-secondary: var(--color-teal);
  --background-secondary-hover: var(--color-teal-hover);
  --background-secondary-active: var(--color-teal-active);
  --background-secondary-disabled: var(--color-teal-disabled);
  --on-primary: var(--color-ink);
  --on-secondary: var(--color-ink);
  --on-disabled: #514b46;
  --border-subtle: #1a1a1a33;
  --border-inverse: #f7ebdd55;
  --border-strong: var(--color-ink);
  --focus-color: currentColor;
  --status-error: #8b2020;
  --status-success: #244d3b;
}
```

Do not use the pale coral/teal palette colors as small text on paper. Text and background roles intentionally have different foreground requirements. On dark sections, override the text-link family locally as a complete set, for example teal/teal-hover/teal-active/teal-disabled, after contrast review. The primary/secondary text families initially share an accessible dark teal; they remain separately editable roles. Add further semantic families only for actual component needs.

State meanings:

- **Default:** normal interactive appearance.
- **Hover:** pointer hover on an enabled control; keyboard focus also receives a visible outline.
- **Active:** pressed during activation (`:active`). A persistent current-page or selected state also uses the active token through `aria-current` or `aria-pressed`, with an underline/border to reinforce it.
- **Disabled:** disabled buttons/native controls or explicitly unavailable actions. Native anchors do not support `disabled`; use `aria-disabled`, suppress navigation/activation, and provide an appropriate unavailable-action experience.
- **Visited:** a link whose destination is in browser history uses `:visited`, separately from pressed/selected. If “clicked” means visited, map it to `--text-primary-active` initially; introduce a distinct visited token later only if it needs a different color. Do not persist arbitrary clicked state in JavaScript.

```css
/* Shared semantic link class; plain prose links inherit this treatment globally. */
:where(.text-link, .prose a) {
  color: var(--text-primary);
  text-decoration: underline;
  text-underline-offset: 0.3em;
  transition: color var(--duration-base) var(--ease-standard);
}
:where(.text-link, .prose a):visited { color: var(--text-primary-active); }
@media (hover: hover) {
  :where(.text-link, .prose a):hover { color: var(--text-primary-hover); }
}
:where(.text-link, .prose a):is(:active, [aria-current="page"], [aria-pressed="true"]) {
  color: var(--text-primary-active);
}
:where(.text-link, .prose a)[aria-disabled="true"] {
  color: var(--text-primary-disabled);
  cursor: not-allowed;
}
:where(a, button, input, textarea, select):focus-visible {
  outline: var(--focus-width) solid var(--focus-color);
  outline-offset: var(--focus-offset);
}
.button--primary {
  background: var(--background-primary);
  color: var(--on-primary);
}
@media (hover: hover) {
  .button--primary:where(:not(:disabled, [aria-disabled="true"])):hover {
    background: var(--background-primary-hover);
  }
}
.button--primary:where(:not(:disabled, [aria-disabled="true"])):active {
  background: var(--background-primary-active);
}
.button--primary:is(:disabled, [aria-disabled="true"]) {
  background: var(--background-primary-disabled);
  color: var(--on-disabled);
  cursor: not-allowed;
}
```

Apply the same state contract to secondary controls and other enabled color variants. Disabled states take precedence and must not animate/activate. Inherited ink/paper links can keep their color and use underline/arrow changes instead of inventing black/white state scales. Validate default, hover, pressed/current, visited, focus, and disabled combinations on every surface; do not rely on opacity alone to communicate availability.

### Explicit desktop, tablet, and mobile tokens

Use one three-tier contract throughout the implementation:

| Tier | Width | Main layout behavior |
|---|---|---|
| Desktop | ≥1025px | Full mosaic, collage split, alternating editorial rows, desktop navigation. |
| Tablet | 641–1024px | Two-column mosaic, compact menu, recomposed collage, stacked editorial rows/panels where necessary. |
| Mobile | ≤640px | Single-column mosaic/content, contained collage, full-width primary actions. |

Use desktop defaults and ordered tablet/mobile overrides of the **same variable names**. This makes each tier independently editable in one place, and components automatically inherit the current sizing. Use the exact thresholds in both CSS and `breakpoints.ts`; use these three tiers for editorial layouts and the mosaic alike. The following explicit starting values replace the earlier mostly-fluid sizing proposal. Preserve the reference's composition while refining them in browser review.

```css
/* Desktop defaults, inherited until overridden below. Sizes use rem for user scaling. */
:root {
  --font-display: "Bricolage Grotesque", system-ui, sans-serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --weight-body: 400;
  --weight-medium: 500;
  --weight-heading: 600;
  --weight-display: 800;

  --font-size-small: 0.875rem;
  --font-size-body: 1rem;
  --font-size-lead: 1.1875rem;
  --font-size-h1: 6rem;
  --font-size-h2: 4.25rem;
  --font-size-h3: 2rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.25rem;
  --font-size-h6: 1rem;
  --font-size-home-hero: clamp(5.75rem, 8.9vw, 8.4375rem);
  --font-size-creative-hero: clamp(6rem, 11vw, 10.625rem);
  --font-size-book: 3.375rem;
  --font-size-contact-hero: clamp(6rem, 14vw, 12.5rem);
  --leading-display: 0.93;
  --leading-heading: 1.05;
  --leading-body: 1.6;
  --tracking-display: -0.04em;
  --measure-body: 65ch;
  --measure-preview: 39ch;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 5rem;
  --space-10: 5.625rem;
  --page-gutter: clamp(2.5rem, 4vw, 4rem);
  --content-max: 1420px;
  --section-space: 5.625rem;
  --section-gap: 2.75rem;
  --layout-gap: 4rem;
  --grid-gap: 1.25rem;
  --heading-gap: 1.5rem;
  --paragraph-gap: 1.5rem;
  --panel-padding: 4.5rem;
  --control-padding-block: 0.875rem;
  --control-padding-inline: 1.375rem;
  --header-height: 90px;
  --control-height: 56px;
  --frame-portrait: 12px;
  --frame-book: 18px;

  --border-width: 1px;
  --radius-control: 0;
  --radius-media: 0;
  --radius-mosaic: 4px;
  --radius-round: 50%;
  --shadow-plate: 0 16px 35px #1a1a1a26;
  --shadow-art: 0 8px 22px #1a1a1a12;
  --focus-width: 3px;
  --focus-offset: 5px;
  --tap-target: 44px;
  --duration-fast: 160ms;
  --duration-base: 250ms;
  --duration-media: 400ms;
  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --layer-art: 1;
  --layer-art-front: 3;
  --layer-header: 20;
  --layer-skip: 100;
  --layer-modal: 1000;
}

/* Tablet: 641–1024px. Mobile intentionally inherits then overrides this block. */
@media (max-width: 1024px) {
  :root {
    --font-size-small: 0.875rem;
    --font-size-body: 1rem;
    --font-size-lead: 1.125rem;
    --font-size-h1: 4.5rem;
    --font-size-h2: 3.5rem;
    --font-size-h3: 1.875rem;
    --font-size-h4: 1.375rem;
    --font-size-h5: 1.125rem;
    --font-size-h6: 1rem;
    --font-size-home-hero: clamp(4.5rem, 9vw, 5.75rem);
    --font-size-creative-hero: clamp(4.5rem, 10vw, 6rem);
    --font-size-book: 3rem;
    --font-size-contact-hero: 6rem;
    --leading-display: 0.98;
    --leading-heading: 1.08;
    --leading-body: 1.6;
    --tracking-display: -0.035em;
    --measure-body: 60ch;
    --measure-preview: 45ch;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.75rem;
    --space-7: 2.5rem;
    --space-8: 3rem;
    --space-9: 4rem;
    --space-10: 4.5rem;
    --page-gutter: 2rem;
    --section-space: 4rem;
    --section-gap: 2rem;
    --layout-gap: 2.5rem;
    --grid-gap: 1.25rem;
    --heading-gap: 1.25rem;
    --paragraph-gap: 1.25rem;
    --panel-padding: 2.5rem;
    --control-padding-block: 0.875rem;
    --control-padding-inline: 1.25rem;
    --header-height: 76px;
    --control-height: 56px;
    --frame-portrait: 10px;
    --frame-book: 14px;
  }
}

/* Mobile: ≤640px. */
@media (max-width: 640px) {
  :root {
    --font-size-small: 0.875rem;
    --font-size-body: 1rem;
    --font-size-lead: 1.0625rem;
    --font-size-h1: 3rem;
    --font-size-h2: 2.875rem;
    --font-size-h3: 1.875rem;
    --font-size-h4: 1.25rem;
    --font-size-h5: 1.125rem;
    --font-size-h6: 1rem;
    --font-size-home-hero: clamp(3rem, 12vw, 4.5rem);
    --font-size-creative-hero: clamp(3rem, 12vw, 4.5rem);
    --font-size-book: 2.25rem;
    --font-size-contact-hero: clamp(3.5rem, 14vw, 5.5rem);
    --leading-display: 1;
    --leading-heading: 1.1;
    --leading-body: 1.6;
    --tracking-display: -0.03em;
    --measure-body: 100%;
    --measure-preview: 100%;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 2rem;
    --space-8: 2.5rem;
    --space-9: 3rem;
    --space-10: 3.5rem;
    --page-gutter: 1.5rem;
    --section-space: 3rem;
    --section-gap: 1.5rem;
    --layout-gap: 1.875rem;
    --grid-gap: 1rem;
    --heading-gap: 1rem;
    --paragraph-gap: 1rem;
    --panel-padding: 1.75rem;
    --control-padding-block: 0.875rem;
    --control-padding-inline: 1rem;
    --header-height: 76px;
    --control-height: 56px;
    --frame-portrait: 8px;
    --frame-book: 12px;
  }
}
```

Keep readable body/form text at 16px across tiers and preserve the 44px minimum action target; smaller viewports do not mean smaller tap targets. Tier-specific `clamp()` values are reserved for oversized hero text and desktop gutters; ordinary type/spacing stays explicitly editable per tier. Components use `var(--font-size-h2)`, `var(--section-space)`, etc., without repeating these values in local media queries. Local media queries change layout (columns, order, collage coordinates), while global overrides change sizing. New layout-specific size tokens must have entries for all three tiers when their values differ.

Keep breakpoint thresholds in `breakpoints.ts` as `tabletMax: 1024` and `mobileMax: 640`, with named desktop/tablet/mobile query helpers. Define desktop as `(min-width: 1025px)`, tablet-only as `(min-width: 641px) and (max-width: 1024px)`, and mobile as `(max-width: 640px)`; retain a clearly named tablet-and-down helper for progressive overrides. CSS variables cannot directly supply ordinary media-query thresholds, so the CSS thresholds must match the TypeScript constants. Remove obsolete query helpers after migrating consumers.

### Global typography rules

Define element defaults and reusable typography classes in `globals.css`. Body copy uses `--text-body` for color and `--font-size-body` for size, avoiding the previous ambiguity where `--text-body` could mean either. All h1–h6 styles are globally defined. A semantic heading can take a deliberate size variant without changing its document hierarchy.

```css
html { font-size: 100%; }
body {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  font-weight: var(--weight-body);
  line-height: var(--leading-body);
  color: var(--text-body);
  background: var(--surface-page);
  -webkit-font-smoothing: antialiased;
}
:where(h1, h2, h3, h4, h5, h6) {
  margin: 0;
  font-family: var(--font-display);
  font-weight: var(--weight-heading);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-display);
  color: var(--text-heading);
  text-wrap: balance;
}
:where(h1) { font-size: var(--font-size-h1); font-weight: var(--weight-display); }
:where(h2) { font-size: var(--font-size-h2); }
:where(h3) { font-size: var(--font-size-h3); }
:where(h4) { font-size: var(--font-size-h4); }
:where(h5) { font-size: var(--font-size-h5); }
:where(h6) { font-size: var(--font-size-h6); }
:where(p) { margin: 0; text-wrap: pretty; }
:where(.prose) { max-width: var(--measure-body); }
:where(.prose > * + *) { margin-block-start: var(--paragraph-gap); }
:where(.prose > :is(h2, h3, h4, h5, h6)) { margin-block-start: var(--heading-gap); }
:where(.type-lead) { font-size: var(--font-size-lead); }
:where(small, .type-small) { font-size: var(--font-size-small); }
:where(.type-home-hero) { font-size: var(--font-size-home-hero); line-height: var(--leading-display); }
:where(.type-creative-hero) { font-size: var(--font-size-creative-hero); line-height: var(--leading-display); }
:where(.type-book) { font-size: var(--font-size-book); }
:where(.type-contact-hero) { font-size: var(--font-size-contact-hero); line-height: var(--leading-display); }
:where(button, input, textarea, select) { font: inherit; }
```

Scope inverse sections by assigning `--text-body`, `--text-heading`, and the complete link state family on the section wrapper. Avoid component rules that overwrite global font family/size/weight unless a named typography variant explicitly requires it. Use global typography on case studies and Resume as well as new overview pages.

### Layout and legacy transition

Define `.container`/`PageContainer` with shared inline padding and an inner maximum width, plus full-width `Section` wrappers that own their backgrounds. Verify the 1420px cap against the reference at desktop. Avoid global `img { height: 100%; object-fit: cover }`: only collage and mosaic frames opt into fill/crop behavior. Editorial ads and book artwork need their own fit rules.

Temporarily retain existing variable scales while migrating existing components, then remove unused variables/compatibility aliases. Update previous `--text-*` sizing references to `--font-size-*` consistently. Audit hardcoded colors, gradient decorations, font sizes, spacing, radii, and undefined variables. Do not mechanically assign pale brand colors to legacy text roles. Test all interactive color states and type/spacing tiers before removing compatibility styles.

## 6. Component and content architecture

Suggested additions, using the repository's existing component conventions:

| Component/module | Responsibility |
|---|---|
| `SiteLayout` + `SiteFooter` | Shared header/footer/skip navigation, one main landmark per page. |
| `PageContainer` + `Section` | Consistent content edges and paired surface/text variants. |
| `ArrowIcon` + `TextLink` | One reusable decorative arrow and accessible text-link treatment. |
| `PlaybookHero` | Home heading/highlight, role line, links, and collage composition. |
| `CreativeIntro` | Creative Work hero, description, inquiry CTA. |
| `PortfolioMosaic` | Extracted grid geometry consuming project data; owns responsive tile placement. |
| `FeaturedProjectRow` | Homepage preview copy and two natural-ratio campaign images; alternating desktop layout. |
| `FoundFablePanel` | Shared studio identity, services, external link, and inquiry CTA. |
| `BookFeature` | Shared image/frame, optional confirmed date badge, book details, publisher, CTA. |
| `InquiryTopicField` | Accessible topic selection controlled by the contact form. |

Keep responsive collage coordinates and rotations local to `PlaybookHero`; they are composition values, not a reason to create dozens of global tokens. Use typed variants/props instead of deeply nested global selectors and `nth-child` color changes.

Extract `src/data/projects.ts` from the current homepage array. Include stable id, client name, local href, thumbnail/alt, placement coordinates, optional object fit/position, and optional homepage-preview media. Preserve all six projects and their assets; change their hrefs to the nested canonical URLs. Reuse this registry for navigation order while retaining the current next-project sequence deliberately. Keep headings/descriptions in `src/content/site.ts` and book facts in `src/content/books.ts` so copy replacement does not require layout changes.

Ensure the document has one meaningful h1 per page. Overview pages can own their main landmark through the layout; migrate existing project/resume/contact wrappers consistently and avoid nesting main elements.

## 7. Assets and typography work

- Inventory `public/assets`, `public/logo`, and `mockups/assets` before adding duplicate files. Identify the exact homepage preview executions by comparing the embedded reference images with existing campaign files; record the mapping.
- The mockup supplies portrait, logo, Ferris-wheel image, and five local font files under `mockups/assets`. Copy only production-used assets into appropriately named public folders, with provenance/license notes. Match existing logo variants against the reference before choosing the production SVG or transparent raster; do not redraw the logo.
- Self-host the needed font faces through local font files or the existing font-loading mechanism. Map each numbered mockup font to its declared family/weight before copying. Remove unused Playfair/Michroma requests once no components depend on them. Review fallback layout and font loading before final screenshot comparison.
- Use existing campaign assets for Harley/Converse previews. Render natural width/height or a ratio-preserving container; reserve layout space. Use responsive image sizes, with priority limited to genuinely critical above-the-fold imagery. Lazy-load lower sections.
- Keep portrait and campaign focal points configurable. Use full artwork visibility for typography-heavy ad executions. Keep the asterisk decorative and hidden from assistive technology.
- Track final cover art, illustrator credit, confirmed publication date, publisher destination, and approved external/social links as launch content dependencies. Do not let unavailable final copy block the visual implementation.

## 8. Responsive, interaction, and accessibility requirements

- **Desktop:** reproduce the home collage's layering, alternating preview rows, inset studio panel, and book composition. Preserve independently sized mosaic geometry on Creative Work.
- **Tablet (641–1024px):** recompose overlapping hero art so it stays inside its section; inherit tablet typography/spacing tokens. Retain the existing two-column mosaic fallback. Use the mockup's Menu/Close navigation treatment and stack editorial rows with text first and Fable/book panels where needed. Maintain keyboard access, Escape-to-close, and focus return. Close the menu on route changes.
- **≤640px:** mosaic becomes one column. At 390px and 320px, check headline wrapping, highlighted text, badges, framed/rotated imagery, long links, form fields, and footer wrapping. No horizontal scrolling or clipped controls.
- Keep visible focus and ≥44px action targets. Underlines/selected borders must supplement color. Provide a functional skip link and sensible route-change focus behavior.
- Use restrained link/arrow movement, button press feedback, and the existing subtle image zoom. Preserve the mockup's static rotations as authored composition. Respect reduced motion; do not hide content pending an animation.
- Do not mask layout defects with body-wide overflow clipping: contain decorative collage overflow locally while keeping focus rings and interactive content visible.
- Check existing lightbox focus/keyboard/scroll-lock behavior against the new global shell and stacking layers.

## 9. Implementation sequence and completion gates

### Phase 1 — Baseline and extraction

- Record current desktop/mobile views, project copy, mosaic crop/placement, navigation order, and form request behavior.
- Extract the project registry and `PortfolioMosaic` with no visual change first.
- Preserve existing untracked `mockups/` and `comhar-301-redirects.csv`; the redirect CSV is unrelated to this redesign.
- **Gate:** six projects, placements, responsive behavior, and destinations match the existing site.

### Phase 2 — Foundation and shared shell

- Add color/state tokens, explicit desktop/tablet/mobile sizing overrides, global h1–h6/body typography, font loading, containers, shared footer, skip navigation, and new header navigation.
- Remove body padding only after project/resume/contact wrappers receive explicit containers.
- Update buttons/links and eliminate undefined link-color defaults.
- **Gate:** old routes remain readable and aligned; new full-width sections have correct content edges; keyboard navigation works.

### Phase 3 — Homepage

- Implement collage hero, two campaign-preview rows, shared Fable panel, and book feature in the exact selected sequence.
- Use length-matched lorem ipsum for replaceable prose. Preserve real project names, destinations, and meaningful controls.
- **Gate:** desktop/mobile composition matches the final reference, including paper header/footer, natural-ratio campaign artwork, and restrained section pacing.

### Phase 4 — Creative Work and Books

- Add `/creative-work`, using the retained intro plus extracted mosaic, shared Fable panel, and resume access.
- Add `/books` and shared book content; wire all inquiry CTAs.
- Move project page files under `src/pages/creative-work/`, update internal destinations to nested routes, and add permanent redirects for the six existing flat URLs.
- **Gate:** no equal-column desktop portfolio-card replacement; all six nested project pages load directly and old URLs redirect; book details render consistently on Home and Books.

### Phase 5 — Contact and route integration

- Restyle contact, implement query-driven topics, extend request/schema/backend handling as needed, and add request-state accessibility.
- Update project return/next links, breadcrumbs, active navigation, canonical URLs, direct-load metadata, and any required hash compatibility. Verify permanent redirects in the deployment environment.
- **Gate:** creative/book links choose the right topic on direct loads and history navigation; validation and controlled success/failure cases work. Verify actual delivery in a suitable environment before launch.

### Phase 6 — Existing page compatibility and cleanup

- Adapt all six project pages and Resume to shared typography, tokens, containers, and footer.
- Preserve narratives, image/video relationships, lightboxes, and responsive media exceptions.
- Remove unused legacy tokens/font requests/styles and prototype-only code. Replace placeholder SEO titles/descriptions with meaningful metadata; keep body placeholders clearly tracked until final copy arrives.
- **Gate:** every existing route remains functional, with no unintended global style regression.

### Phase 7 — Review and release preparation

- Compare final Home and Books to the reference; compare Creative Work to the reference hero plus original mosaic baseline.
- Check representative widths 1440, 1025, 1024, 820, 768, 641, 640, 390, and 320px, plus an ultra-wide pass. Verify both sides of the 1024px and 640px boundaries. Change representative type/spacing variables in each tier and confirm consumers update without component edits.
- Run the existing lint/build commands and TypeScript checking. Review all routes in a real browser, including project media/lightboxes and Resume.
- Add focused behavior tests where useful for topic parsing, form request payload/success/failure, legacy redirects, and nested route mapping. Verify disabled actions cannot activate and current-page state follows the nested hierarchy. Avoid snapshots that merely mirror CSS declarations.
- Check broken local assets/links, keyboard-only operation, reduced motion, contrast, font-loading shifts, image sizing/loading, and direct refresh of every route. Recalculate `next/image` sizes after gutter/layout changes.
- Verify route-specific titles, descriptions, social preview metadata, canonicals as appropriate, and sitemap entries if used by the deployment. Audit deployment routing for new pages and contact function support.
- Finalize replacement copy and confirmed book assets/details, then repeat wrapping/overflow review. Keep a rollback deploy available; publish as a separate release action.

## 10. Definition of done

- [ ] Home uses the final Playbook composition and palette, with the two editorial previews.
- [ ] Creative Work retains the mockup hero and original desktop mosaic placements/proportions.
- [ ] No rejected two-column desktop portfolio-card layout or uniformly undersized thumbnail treatment is introduced.
- [ ] Home, Creative Work, Books, Contact, Resume, and all six case studies use a coherent shared shell and semantic tokens.
- [ ] Nested `/creative-work/[project]` pages are canonical; all six legacy project URLs permanently redirect; return-to-portfolio links lead to `/creative-work`.
- [ ] Brand colors have hover/active/disabled tokens; links correctly distinguish pressed/current/visited states; disabled controls cannot activate.
- [ ] Global typography and desktop/tablet/mobile token overrides control text sizing and spacing throughout the site.
- [ ] Book and creative CTAs select the correct inquiry topic; real submission is verified separately from preview behavior.
- [ ] Images retain intended proportions/crops; no new broken media, layout shifts, overflow, or inaccessible controls remain.
- [ ] Final copy/assets/facts are supplied or explicitly recorded as outstanding before public release.
- [ ] Build, lint, type checking, and browser review pass, with any limitations recorded.

## Review basis

This plan was prepared from the current repository source, the mockup's HTML/CSS and interaction code, and `mockups/DESIGN.md`. No production UI code was modified. No new browser visual verification, build, or contact-delivery test is claimed as part of writing this plan; those are implementation gates above.


