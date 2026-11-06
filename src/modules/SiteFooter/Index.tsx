import NextLink from "next/link";
import styled from "@emotion/styled";
const FooterFrame = styled.footer`
  background: var(--surface-page);
  border-top: 1px solid var(--border-subtle);
  .footer-inner { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-4) var(--space-6); padding-block: var(--space-6); font-size: var(--font-size-small); }
  .identity { margin-right: auto; }
  a { min-height: var(--tap-target); display: inline-flex; align-items: center; }
  @media (max-width: 640px) { .identity { flex-basis: 100%; } }
`;
export default function SiteFooter() {
  return <FooterFrame><div className="container footer-inner">
    <span className="identity">Anastasia Guletsky Kelly</span>
    <NextLink href="/contact">Contact</NextLink><NextLink href="/creative-work">Creative work</NextLink><NextLink href="/books">Books</NextLink><NextLink href="/resume">Resume</NextLink>
    <a href="https://foundfablecreative.com/" target="_blank" rel="noopener noreferrer">Found Fable</a>
    <a href="https://www.linkedin.com/in/anastasiaguletsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://www.facebook.com/stasiamarie" target="_blank" rel="noopener noreferrer">Facebook</a>
  </div></FooterFrame>;
}
