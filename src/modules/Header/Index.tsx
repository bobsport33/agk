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
`;
const destinations = [
  { href: "/", label: "Home" },
  { href: "/creative-work", label: "Creative work" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact ↗" }
];
export default function Header() {
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
  return <HeaderFrame ref={frame}>
    <div className="container header-inner">
      <NextLink className="brand" href="/" aria-label="AGK home"><Image src="/assets/playbook/logo.png" alt="AGK" width={92} height={49} priority /></NextLink>
      <button ref={toggle} className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}>{open ? "Close" : "Menu"}</button>
      <nav id="primary-navigation" aria-label="Primary navigation" data-open={open}>
        {destinations.map(({ href, label }) => <NextLink key={href} href={href} aria-current={router.pathname === href || (href === "/creative-work" && router.pathname.startsWith("/creative-work/")) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</NextLink>)}
      </nav>
    </div>
  </HeaderFrame>;
}
