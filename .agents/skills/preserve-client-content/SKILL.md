---
name: preserve-client-content
description: Preserve approved client copy, typography, brand choices, and scope while redesigning or completing client-facing pages in this portfolio repository.
---

# Preserve Client Content

Treat the client's approved content and brand decisions as locked unless the user explicitly authorizes a specific change.

## Content and scope contract

- Preserve all existing copy exactly, including headlines, punctuation, capitalization, claims, metrics, credits, labels, and calls to action.
- Treat permission to redesign as permission to change presentation and layout only. It does not authorize rewriting, adding marketing copy, changing fonts, rebranding, or expanding the set of pages being edited.
- Preserve established typography and brand choices unless the user explicitly asks to reconsider them.
- Work only on the routes, components, or page types the user placed in scope.
- If a copy, typography, brand, or scope change seems useful, explain the proposed change and obtain approval before implementing it.

## Before editing

1. Inventory the in-scope routes and shared components.
2. Distinguish complete pages from incomplete pages; do not rebuild complete work without a clear reason.
3. Record the current user-visible copy for every page that will be touched.
4. Inspect existing styles and reusable patterns before introducing new visual language.
5. Check the worktree and preserve unrelated or user-owned changes.

## Implementation

- Build continuity through spacing, rhythm, grids, media sequencing, and shared components rather than by inventing new content.
- Keep project narratives visually connected; avoid excessive card or section fragmentation unless the existing design system calls for it.
- Reuse existing assets and page structures when they already solve the problem well.
- For missing assets, use authoritative client sources and do not infer new claims or captions.
- Make the smallest coherent change that fulfills the request.

## Verification

Review every modified route in a real browser at desktop and mobile widths before claiming completion. Check:

- exact copy preservation;
- typography and brand consistency;
- overflow, wrapping, cropping, and broken asset paths;
- empty media states and sensible video posters;
- consistent alignment, spacing, and editorial rhythm;
- decorative shapes containing or aligning with their intended content;
- grid behavior at each breakpoint;
- build, type-check, and lint results.

If browser or build verification is blocked, state exactly what could not be reviewed. Never claim visual QA based only on source inspection.
