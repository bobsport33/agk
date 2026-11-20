import styled from "@emotion/styled";
import type { SVGProps } from "react";

/** Page-scoped geometry keeps the approved homepage independent of other routes. */
export const HomeSurface = styled.div`
  --home-gutter: clamp(24px, 4vw, 64px);
  --home-split-gap: clamp(40px, 5vw, 80px);
  --home-section: clamp(64px, 6.25vw, 96px);
  --home-ease: cubic-bezier(.2, .8, .2, 1);
  font: 400 1rem/1.6 var(--font-body);
  color: var(--color-ink);

  h1, h2, h3 { font-family: var(--font-display); letter-spacing: -.04em; text-wrap: balance; }
  h1, h2, h3, p, figure { margin: 0; }
  p { text-wrap: pretty; }
  img { display: block; max-width: 100%; height: auto; }
  a { color: inherit; text-underline-offset: .3em; text-decoration-thickness: 1px; }
  a, button { touch-action: manipulation; }
  a:focus-visible, button:focus-visible { outline: 3px solid currentColor; outline-offset: 6px; }
  .arrow { display: block; flex-shrink: 0; width: 30px; height: 30px; transition: transform 240ms var(--home-ease); }
`;

export const HomeContainer = styled.div`
  width: min(calc(100% - var(--home-gutter) * 2), 1420px);
  margin-inline: auto;
`;

export function HomeArrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <svg {...props} className={className ? `arrow ${className}` : "arrow"} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M6 26 26 6M6 6h20v20" stroke="currentColor" strokeWidth="2.4" />
  </svg>;
}
