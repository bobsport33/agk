# Books HTML review

Scope: a standalone mockup at `mockups/books-review.html`. The Next.js Books route and shared components remain unchanged. User requested a smaller homepage-style hero, existing book copy, a refined launch feature with three images, and the existing more-to-come section. Confirmed: the added feature images should be historical photographs.

## Direction contract

THESIS: An author's compact introduction opens onto the historical world of the first book. The launch feature remains the page's largest visual moment.

OWN-WORLD: Inherit the approved AGK Playbook palette: coral #efa17f, teal #99c2bf, paper #f7ebdd, ink #1a1a1a. Keep Bricolage Grotesque and DM Sans, narrow paper photo frames, fixed collage rotations, northeast arrows, and the existing logo/footer.

STORY: Introduce Anastasia's children's writing, feature Bertha & the Very First Brownie with existing publication/publisher/inquiry details, then retain the three future-book descriptions and contact action. Existing lorem ipsum remains reference copy; no new book claims or invented cover art.

FIRST VIEWPORT: Cream navigation; a compact coral hero with existing headline and author introduction on the left; a smaller author/Chicago photo pair on the right. The teal launch section begins below it. The hero is shorter than the homepage and its photographs are substantially smaller.

FORM: User-specified extension of the selected Playbook. One larger Ferris-wheel photograph and two smaller historical photographs compose the book feature, opposite the book text. Phone layouts stack copy and recompose the collage inside the content edges. No concept roll is needed for this specified extension.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Sources and content

- Existing copy: `src/pages/books.tsx` and `src/content/books.ts`. Preserve the existing headline, Children's books heading, two introductory paragraphs, book summary/title, publisher, date, inquiry label, three future-book descriptions, and Stay tuned.
- Existing images: author portrait and Ferris wheel from `public/assets/playbook/`; Chicago photo from `public/assets/GettyImages-474505518_edited.webp`.
- Bertha Palmer portrait: [Wikimedia Commons file record](https://commons.wikimedia.org/wiki/File:Picture_of_Bertha_Palmer.jpg), dated no later than 1896; published in Famous American Men and Women, digitized by Internet Archive. Record marks the image public domain. The 500px published derivative is used for review.
- Court of Honor, 1893: [University of Chicago photographic archive, apf3-00077](https://photoarchive.lib.uchicago.edu/db.xqy?one=apf3-00077.xml), photographer E. R. Walker. Image source: `https://pi.lib.uchicago.edu/1001/dig/photoarchive/apf3-00077/r`. This is review reference imagery; the archive's rights/reproduction terms remain attached to its source record.
- The existing October 3, 2027 date and book placeholder prose remain mockup reference content, as recorded in `src/content/playbook-assets.ts`.

The mockup embeds its fonts and images for portable review. Source images and review scripts stay in the ignored `.tmp/books-review/` folder. This is an ordinary extension of the incumbent visual system; `mockups/DESIGN.md` is evidence of the chosen world and is not rewritten.

## Review and handoff

- Real headless-browser review covered 320, 390, 768, 1024, 1440, and 1904px. All captures were opened and checked. Clean review images are `.tmp/books-review/desktop.png`, `mobile.png`, `phone-320.png`, `tablet-768.png`, `tablet-1024.png`, and `wide-1904.png`.
- The desktop hero is 398px high at 1440px. The phone collage remains 220px high; stacked text makes the complete hero approximately 526px at 390 and 548px at 320. The launch gallery remains the larger visual moment.
- Browser checks passed for exact existing copy, date, publisher, image counts/loading, shared edges, collage/date containment, readable contact links, approved type/palette, and menu open/Escape focus/outside closing. QA scripts and gray receipts are present only in the ignored review variant, not the deliverable.
- The source detector reported the inherited cream palette and four cramped-padding warnings. These are explained exceptions: the palette is approved, the common content gutter is 24–64px, and the sections have 32–80px vertical spacing. The rendered text is inset; the static warnings do not reflect the actual layout.
- A fresh GPT-6.1 Sol finish reviewer examined all six final captures and returned **ship for mockup review**, with no material visual issues. Existing lorem ipsum and reference publication details are preserved content dependencies.
- The mockup links to sibling Home/Portfolio review files and the existing external contact/publisher destinations. It is a visual review artifact, not a new hosted site. The application source remains unchanged; no app build was needed for this HTML-only task.
- Temporary browser and preview processes were closed; recorded ports were verified released. Cleanup evidence is in `.tmp/books-review/cleanup-verification.json`.
