import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const HeaderFrame = styled.header`
  position: relative;
  z-index: var(--layer-header);
  background: var(--surface-page);
  border-bottom: 1px solid var(--border-subtle);
  .header-inner { height: var(--header-height); display: flex; align-items: center; justify-content: space-between; gap: var(--space-6); }
  .brand { width: 92px; flex-shrink: 0; }
  .brand img { width: 100%; height: auto; }
  nav { display: flex; align-items: center; gap: var(--space-7); }
  nav a { display: inline-flex; align-items: center; min-height: var(--tap-target); text-decoration: none; font-size: var(--font-size-small); }
  nav a:hover, nav a[aria-current] { text-decoration: underline; }
  nav a[aria-current] { font-weight: var(--weight-heading); }
  .menu-button { display: none; min-height: var(--tap-target); padding: var(--space-2) var(--space-4); border: 1px solid currentColor; background: transparent; color: inherit; }
  @media (max-width: 1024px) {
    .menu-button { display: block; }
    .brand { width: 80px; }
    nav { display: none; position: absolute; inset: var(--header-height) 0 auto; padding: var(--space-5) var(--page-gutter); background: var(--color-ink); color: var(--color-paper); border-bottom: 1px solid var(--border-inverse); flex-direction: column; align-items: stretch; gap: var(--space-2); }
    nav[data-open="true"] { display: flex; }
    nav a { font-size: var(--font-size-lead); }
  }
  &[data-homepage="true"] {
    background: var(--color-paper);
    border-bottom: 0;
    .header-inner { width: min(calc(100% - clamp(24px, 4vw, 64px) * 2), 1420px); max-width: none; margin-inline: auto; padding-inline: 0; height: 90px; gap: 32px; }
    .brand { width: 92px; }
    .brand img { display: block; width: 100%; height: 48px; object-fit: cover; object-position: 50% 47%; }
    .menu-button { display: none; }
    nav { display: flex; position: static; inset: auto; padding: 0; background: transparent; color: inherit; border: 0; flex-direction: row; align-items: center; gap: 40px; }
    nav a { gap: 10px; min-height: 44px; font-size: 14px; }
    .arrow { display: block; flex-shrink: 0; width: 18px; height: 18px; }
    @media (max-width: 900px) {
      .header-inner { height: 76px; }
      .brand { width: 80px; }
      .menu-button { display: block; min-height: 44px; padding: 8px 16px; }
      nav { display: none; position: absolute; inset: 76px 0 auto; padding: 24px clamp(24px, 4vw, 64px); background: var(--color-ink); color: var(--color-paper); border-bottom: 0; flex-direction: column; align-items: stretch; gap: 8px; }
      nav[data-open="true"] { display: flex; }
      nav a { font-size: 18px; }
    }
  }
`;
type NavigationDestination = { href: string; label: string; arrow?: boolean };
const destinations: NavigationDestination[] = [
  { href: "/", label: "Home" },
  { href: "/creative-work", label: "Creative work" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact ↗" }
];
const homepageDestinations: NavigationDestination[] = [
  { href: "/", label: "Home" },
  { href: "/creative-work", label: "Portfolio" },
  { href: "/books", label: "Books" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact", arrow: true }
];
export default function Header({ homepage = false }: { homepage?: boolean }) {
  const [open, setOpen] = useState(false);
  const frame = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!frame.current?.contains(event.target as Node)) setOpen(false); };
    const keyboard = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", keyboard);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", keyboard); };
  }, [open]);
  const links = homepage ? homepageDestinations : destinations;
  return <HeaderFrame ref={frame} data-homepage={homepage ? "true" : undefined}>
    <div className="container header-inner">
      <NextLink className="brand" href="/" aria-label="AGK home"><Image src="/assets/playbook/logo.png" alt="AGK" width={92} height={49} priority /></NextLink>
      <button ref={toggle} className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}>{open ? "Close" : "Menu"}</button>
      <nav id="primary-navigation" aria-label="Primary navigation" data-open={open}>
        {links.map(({ href, label, arrow }) => <NextLink key={href} href={href} aria-current={router.pathname === href || (href === "/creative-work" && router.pathname.startsWith("/creative-work/")) ? "page" : undefined} onClick={() => setOpen(false)}>{label}{arrow && <svg className="arrow" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 26 26 6M6 6h20v20" stroke="currentColor" strokeWidth="2.4"/></svg>}</NextLink>)}
      </nav>
    </div>
  </HeaderFrame>;
}
