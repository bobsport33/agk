import NextLink from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
const FooterFrame = styled.footer`
  background: var(--surface-page);
  border-top: 1px solid var(--border-subtle);
  .footer-inner { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-4) var(--space-6); padding-block: var(--space-6); font-size: var(--font-size-small); }
  .identity { margin-right: auto; }
  a { min-height: var(--tap-target); display: inline-flex; align-items: center; }
  @media (max-width: 640px) { .identity { flex-basis: 100%; } }
  &[data-homepage="true"] {
    background: var(--color-paper);
    color: var(--color-ink);
    border-top: 0;
    a { text-decoration: none; min-height: 44px; }
    a:hover { text-decoration: underline; }
    .footer-inner { width: min(calc(100% - clamp(24px, 4vw, 64px) * 2), 1420px); margin-inline: auto; display: block; padding: 0; font-size: 14px; }
    .footer-top { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding-block: 40px 12px; }
    .footer-brand { display: block; flex-shrink: 0; width: 136px; }
    .footer-brand img { display: block; width: 100%; height: 64px; object-fit: cover; object-position: 50% 47%; }
    .footer-nav { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 12px 28px; }
    .footer-nav a, .footer-social a { display: inline-flex; align-items: center; min-height: 44px; }
    .footer-bottom { display: flex; align-items: center; justify-content: space-between; gap: 20px 40px; padding-block: 8px 32px; }
    .copyright { font-size: 14px; }
    .footer-social { display: flex; align-items: center; gap: 28px; }
    @media (max-width: 900px) { .footer-top { align-items: flex-start; } .footer-nav { max-width: 460px; } }
    @media (max-width: 600px) {
      .footer-top { display: block; padding-block: 32px 16px; }
      .footer-brand { width: 128px; margin-inline: auto; }
      .footer-nav { justify-content: center; text-align: center; gap: 4px 24px; margin-top: 16px; }
      .footer-bottom { flex-direction: column; gap: 8px; text-align: center; padding-block: 0 24px; }
      .copyright { max-width: 34ch; }
      .footer-social { gap: 28px; }
    }
  }
`;
export default function SiteFooter({ homepage = false }: { homepage?: boolean }) {
  if (homepage) return <FooterFrame data-homepage="true"><div className="container footer-inner">
    <div className="footer-top">
      <NextLink className="footer-brand" href="/" aria-label="AGK home"><Image src="/assets/playbook/logo.png" alt="AGK" width={136} height={64} /></NextLink>
      <nav className="footer-nav" aria-label="Footer navigation">
        <NextLink href="/contact">Contact</NextLink><NextLink href="/creative-work">Creative work</NextLink><NextLink href="/books">Books</NextLink><NextLink href="/resume">Resume</NextLink>
        <a href="https://foundfablecreative.com/" target="_blank" rel="noopener noreferrer">Found Fable</a>
      </nav>
    </div>
    <div className="footer-bottom">
      <span className="copyright">© 2026 Anastasia Guletsky Kelly. All rights reserved.</span>
      <div className="footer-social" aria-label="Social links"><a href="https://www.linkedin.com/in/anastasiaguletsky" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.facebook.com/stasiamarie" target="_blank" rel="noopener noreferrer">Facebook</a></div>
    </div>
  </div></FooterFrame>;
  return <FooterFrame><div className="container footer-inner">
    <span className="identity">Anastasia Guletsky Kelly</span>
    <NextLink href="/contact">Contact</NextLink><NextLink href="/creative-work">Creative work</NextLink><NextLink href="/books">Books</NextLink><NextLink href="/resume">Resume</NextLink>
    <a href="https://foundfablecreative.com/" target="_blank" rel="noopener noreferrer">Found Fable</a>
    <a href="https://www.linkedin.com/in/anastasiaguletsky" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://www.facebook.com/stasiamarie" target="_blank" rel="noopener noreferrer">Facebook</a>
  </div></FooterFrame>;
}
