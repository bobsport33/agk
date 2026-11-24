import styled from "@emotion/styled";
export { HomeArrow as PortfolioArrow } from "@/modules/home/shared";

export const PortfolioSurface = styled.div`
  --portfolio-gutter: clamp(24px, 4vw, 64px);
  --portfolio-split-gap: clamp(40px, 5vw, 80px);
  --portfolio-ease: cubic-bezier(.2, .8, .2, 1);
  /* Primary peach/orange from Found Fable's current brand palette. */
  --portfolio-studio: #ffb080;
  font: 400 1rem/1.6 var(--font-body);
  color: var(--color-ink);
  h1, h2, h3 { letter-spacing: -.04em; }
  h1, h2, h3, p { margin: 0; }
  a { color: inherit; text-decoration-thickness: 1px; }
  a, button { touch-action: manipulation; }
  a:focus-visible, button:focus-visible, [role="tabpanel"]:focus-visible { outline: 3px solid currentColor; outline-offset: 6px; }
  .arrow { flex-shrink: 0; transition: transform 240ms var(--portfolio-ease); }
`;

export const PortfolioContainer = styled.div`
  width: min(calc(100% - var(--portfolio-gutter) * 2), 1420px);
  margin-inline: auto;
`;
