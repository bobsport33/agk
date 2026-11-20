import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/content/home";
import { HomeArrow, HomeContainer } from "./shared";

const Hero = styled.section`
  background: var(--color-coral);
  overflow: hidden;

  .hero-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--home-split-gap);
    align-items: center;
    min-height: 0;
    padding-block: 48px;
  }
  .hero-copy { grid-column: 1; grid-row: 1; min-width: 0; position: relative; z-index: 2; }
  .eyebrow { font-size: 14px; font-weight: 500; letter-spacing: .08em; margin-bottom: 24px; }
  h1 { font-size: clamp(44px, 4.85vw, 76px); font-weight: 800; line-height: .98; letter-spacing: -.04em; }
  .role-line { display: block; white-space: nowrap; }
  .role-line + .role-line { margin-top: 5px; }
  .role-dot { font: 500 .34em/1 var(--font-body); vertical-align: middle; letter-spacing: 0; }
  .hero-intro { margin-top: 28px; max-width: 40ch; font-size: 24px; font-weight: 500; line-height: 1.4; text-wrap: balance; }
  .collage { grid-column: 2; grid-row: 1; position: relative; isolation: isolate; width: 100%; height: clamp(420px, 35vw, 550px); }
  .plate { position: absolute; inset: 6px 0 32px 17%; background: var(--color-teal); transform: rotate(-7deg); }
  .portrait { position: absolute; right: 5%; top: 16px; width: 70%; height: 82%; border: 12px solid var(--color-paper); object-fit: cover; object-position: 50% 24%; transform: rotate(7deg); box-shadow: 0 16px 35px #1a1a1a26; }
  .city { position: absolute; left: -5%; bottom: 0; width: 52%; height: auto; aspect-ratio: 1; object-fit: cover; border: 12px solid var(--color-paper); transform: rotate(-9deg); box-shadow: 0 16px 35px #1a1a1a26; transition: opacity 140ms var(--home-ease); }
  .city.is-swapping { opacity: 0; }
  .asterisk { position: absolute; right: 0; bottom: 0; width: 104px; height: 104px; fill: var(--color-ink); }
  .hero-paths { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 28px; }
  .path { display: grid; grid-template-columns: minmax(0, 1fr) 28px; column-gap: 12px; row-gap: 16px; align-items: center; padding: 20px; background: var(--color-paper); color: var(--color-ink); text-decoration: none; min-width: 0; transition: transform 240ms var(--home-ease), background 240ms var(--home-ease); }
  .path p { grid-column: 1 / -1; grid-row: 1; font-size: 18px; font-weight: 500; line-height: 1.4; max-width: 24ch; text-wrap: balance; }
  .path strong { grid-column: 1; grid-row: 2; font: 600 24px/1.08 var(--font-display); letter-spacing: -.03em; max-width: 23ch; }
  .arrow-orb { display: grid; place-items: center; grid-column: 2; grid-row: 2; width: 28px; height: 36px; color: var(--color-ink); transition: transform 240ms var(--home-ease); }
  .arrow-orb .arrow { width: 28px; height: 28px; transition: transform 240ms var(--home-ease); }
  .path:hover, .path:focus-visible { background: #fff5e8; transform: translateY(-2px); }
  .path:focus-visible { outline: 3px solid currentColor; outline-offset: 6px; }
  .path:hover .arrow, .path:focus-visible .arrow { transform: translate(3px, -3px); }
  .path:hover strong, .path:focus-visible strong { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .16em; }
  .path:active { transform: translateY(0); }
  .path:active .arrow-orb { transform: scale(.96); }

  @media (min-width: 1600px) {
    .hero-grid { padding-block: 64px; }
    .collage { height: 550px; }
  }
  @media (max-width: 1100px) {
    .hero-grid { padding-block: 44px; }
    .collage { height: 430px; }
    .portrait, .city { border-width: 10px; }
    .city { left: 0; }
    .asterisk { width: 80px; height: 80px; }
    .hero-intro { font-size: 22px; }
    .path { padding: 18px; }
    .path strong { font-size: 22px; }
  }
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: minmax(0, 1fr); gap: 32px; padding-block: 44px 48px; }
    h1 { font-size: clamp(48px, 8vw, 68px); }
    .hero-paths { max-width: 660px; grid-template-columns: 1fr 1fr; }
    .collage { grid-column: 1; grid-row: 2; width: min(100%, 520px); height: 420px; justify-self: center; }
    .city { left: 0; width: 58%; }
    .portrait { right: 5%; width: 64%; }
    .plate { inset: 0 0 32px 22%; }
  }
  @media (max-width: 600px) {
    .hero-grid { padding-block: 32px 40px; gap: 28px; }
    .eyebrow { font-size: 13px; letter-spacing: .055em; margin-bottom: 24px; }
    h1 { font-size: clamp(30px, 9.5vw, 54px); }
    .hero-intro { font-size: 20px; max-width: 32ch; margin-top: 24px; }
    .hero-paths { grid-template-columns: 1fr; gap: 12px; margin-top: 24px; }
    .path { grid-template-columns: minmax(0, 1fr) 24px; padding: 16px; row-gap: 8px; column-gap: 16px; }
    .path p { grid-column: 1; max-width: none; font-size: 16px; line-height: 1.4; text-wrap: pretty; }
    .path strong { font-size: 20px; max-width: none; }
    .path .arrow-orb { grid-row: 1 / 3; width: 24px; height: 28px; }
    .path .arrow-orb .arrow { width: 24px; height: 24px; }
    .collage { width: 100%; height: 340px; }
    .portrait { width: 62%; height: 83%; top: 10px; border-width: 8px; }
    .city { width: 58%; bottom: 0; border-width: 8px; }
    .asterisk { width: 70px; height: 70px; bottom: 2px; }
  }
  @media (max-width: 360px) {
    .path strong { font-size: 19px; }
    .path { column-gap: 12px; }
    .collage { height: 280px; }
  }
  @media (prefers-reduced-motion: reduce) {
    &, *, *::before, *::after { transition: none !important; animation: none !important; }
  }
`;

const previews = {
  original: { src: "/assets/playbook/hero-city.webp", alt: "City of Chicago campaign" },
  portfolio: { src: "/assets/playbook/harley-1.webp", alt: "Harley-Davidson campaign preview" },
  books: { src: "/assets/playbook/ferris.jpg", alt: "Archival Ferris wheel photograph for Bertha & the Very First Brownie" },
};
type PreviewKey = keyof typeof previews;
type DestinationKey = Exclude<PreviewKey, "original">;

export function HomeHero() {
  const hovered = useRef<DestinationKey | null>(null);
  const focused = useRef<DestinationKey | null>(null);
  const [preview, setPreview] = useState<PreviewKey>("original");
  const [isSwapping, setIsSwapping] = useState(false);
  const currentPreview = useRef<PreviewKey>("original");
  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (previewTimer.current !== null) clearTimeout(previewTimer.current);
  }, []);

  const updatePreview = () => {
    const destination = focused.current ?? hovered.current ?? "original";
    if (previewTimer.current !== null) clearTimeout(previewTimer.current);
    if (destination === currentPreview.current) {
      setIsSwapping(false);
      return;
    }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsSwapping(!reducedMotion);
    previewTimer.current = setTimeout(() => {
      currentPreview.current = destination;
      setPreview(destination);
      if (reducedMotion) setIsSwapping(false);
    }, reducedMotion ? 0 : 140);
  };

  return (
    <Hero className="hero" aria-labelledby="hero-title">
      <HomeContainer className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{homeCopy.hero.name}</p>
          <h1 id="hero-title">
            {homeCopy.hero.roles.map((role, index) => (
              <span className="role-line" key={role}>
                {role}{index < homeCopy.hero.roles.length - 1 && <> <b className="role-dot" aria-hidden="true">•</b></>}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{homeCopy.hero.intro}</p>
          <div className="hero-paths">
            {homeCopy.hero.paths.map((path) => (
              <Link
                className="path"
                data-preview={path.key}
                href={path.href}
                key={path.key}
                onPointerEnter={(event) => { if (event.pointerType !== "touch") { hovered.current = path.key; updatePreview(); } }}
                onPointerLeave={() => { hovered.current = null; updatePreview(); }}
                onFocus={() => { focused.current = path.key; updatePreview(); }}
                onBlur={() => { focused.current = null; updatePreview(); }}
              >
                <p>{path.description}</p>
                <strong>{path.label}</strong>
                <span className="arrow-orb" aria-hidden="true"><HomeArrow /></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="collage" role="group" aria-label="Portrait and City of Chicago campaign collage">
          <div className="plate" aria-hidden="true" />
          <Image className="portrait" src="/assets/playbook/portrait.png" alt="Anastasia Guletsky Kelly" width={718} height={983} sizes="(max-width: 600px) 58vw, (max-width: 900px) 333px, 35vw" priority />
          <Image
            key={preview}
            className={`city${isSwapping ? " is-swapping" : ""}`}
            src={previews[preview].src}
            alt={previews[preview].alt}
            width={1000}
            height={1000}
            sizes="(max-width: 600px) 54vw, (max-width: 900px) 302px, 26vw"
            priority
            onLoad={() => { if (currentPreview.current === preview) setIsSwapping(false); }}
            onError={() => setIsSwapping(false)}
          />
          <svg className="asterisk" viewBox="0 0 100 100" aria-hidden="true"><path d="M42 0h16v31L80 9l11 11-22 22h31v16H69l22 22-11 11-22-22v31H42V69L20 91 9 80l22-22H0V42h31L9 20 20 9l22 22Z" /></svg>
        </div>
      </HomeContainer>
    </Hero>
  );
}
