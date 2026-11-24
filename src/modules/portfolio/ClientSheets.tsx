import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { clientLogos } from "@/content/portfolio";
import { PortfolioContainer } from "./shared";

const sheetSize = 8;
const sheets = Array.from({ length: Math.ceil(clientLogos.length / sheetSize) }, (_, index) => clientLogos.slice(index * sheetSize, (index + 1) * sheetSize));
const range = (index: number) => `${String(index * sheetSize + 1).padStart(2, "0")}—${String(Math.min((index + 1) * sheetSize, clientLogos.length)).padStart(2, "0")}`;

const Section = styled.section`
  padding-block: 72px; background: var(--color-teal); overflow: hidden;
  .clients-layout { display: grid; grid-template-columns: .75fr 1.65fr; gap: var(--portfolio-split-gap); align-items: center; }
  .clients-heading h2 { font-size: clamp(48px, 4.6vw, 68px); font-weight: 800; line-height: .98; max-width: 9ch; }
  .clients-heading > p { margin-top: 24px; font-size: 18px; line-height: 1.5; max-width: 26ch; }
  .client-browser { min-width: 0; padding: 16px 12px 0 0; }
  .logo-deck { position: relative; isolation: isolate; }
  .logo-deck::before, .logo-deck::after { content: ''; position: absolute; inset: 0; background: #d6d7c5; z-index: -2; transform: rotate(3deg); box-shadow: 0 12px 28px #1a1a1a12; }
  .logo-deck::after { background: #ecdfcc; z-index: -1; transform: rotate(-2deg); }
  .logo-sheet { padding: 32px; background: var(--color-paper); box-shadow: 0 16px 35px #1a1a1a1f; animation: sheet-enter 340ms var(--portfolio-ease); }
  .logo-sheet[hidden] { display: none; }
  .logo-grid { display: grid; grid-template-columns: repeat(var(--sheet-cols, 4), minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 284px; column-gap: 24px; row-gap: 20px; align-items: center; }
  .logo-cell { display: flex; justify-content: center; align-items: center; min-width: 0; height: 100%; }
  .logo-cell img { width: var(--mark-width); height: var(--mark-height); max-width: 100%; object-fit: contain; mix-blend-mode: multiply; }
  .logo-sheet-footer { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 24px; font-size: 13px; line-height: 1.4; }
  .logo-sheet-footer span:last-child { font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: -.03em; }
  .client-tabs { display: flex; justify-content: flex-start; gap: 8px; margin-top: 28px; }
  .client-tabs button { display: inline-flex; align-items: center; justify-content: center; min-width: 86px; min-height: 44px; border: 1px solid #1a1a1a55; background: transparent; padding: 8px 16px; font-size: 14px; color: inherit; transition: background 220ms var(--portfolio-ease), color 220ms var(--portfolio-ease); }
  .client-tabs button[aria-selected=true] { background: var(--color-ink); border-color: var(--color-ink); color: var(--color-paper); }
  .client-tabs button:hover { background: var(--color-paper); color: var(--color-ink); }
  .client-tabs button[aria-selected=true]:hover { background: var(--color-ink); color: var(--color-paper); }
  @keyframes sheet-enter { from { opacity: .5; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
  @media (max-width: 1100px) {
    .clients-layout { grid-template-columns: .65fr 1.35fr; gap: 40px; }
    .clients-heading h2 { font-size: 52px; }
    .logo-sheet { padding: 24px; }
    .logo-grid { column-gap: 20px; height: 244px; }
  }
  @media (max-width: 1024px) {
    .clients-layout { grid-template-columns: 1fr; gap: 40px; }
    .clients-heading { display: flex; justify-content: space-between; align-items: center; gap: 32px; }
    .clients-heading h2 { max-width: 12ch; font-size: 56px; }
    .clients-heading > p { display: none; }
    .client-browser { padding-right: 12px; }
    .logo-grid { height: 284px; column-gap: 32px; }
    .logo-sheet { padding: 32px; }
    .client-tabs { justify-content: center; flex-shrink: 0; margin-top: 0; }
  }
  @media (max-width: 640px) {
    padding-block: 48px 56px;
    .clients-layout { gap: 28px; }
    .clients-heading { display: block; }
    .clients-heading h2 { font-size: clamp(36px, 9vw, 48px); max-width: none; }
    .client-browser { padding: 12px 8px 0; }
    .logo-sheet { padding: 20px; }
    .logo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(var(--mobile-rows), minmax(0, 1fr)); height: 432px; gap: 16px 20px; }
    .logo-cell img { max-height: 84px; }
    .logo-sheet-footer { margin-top: 20px; font-size: 12px; gap: 16px; }
    .logo-sheet-footer span:last-child { font-size: 16px; }
    .client-tabs { justify-content: flex-start; margin-top: 24px; }
    .client-tabs button { min-width: 80px; padding-inline: 12px; }
  }
  @media (max-width: 360px) {
    .logo-sheet-footer { min-height: 45px; }
  }
`;

export function ClientSheets() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % sheets.length;
    else if (event.key === "ArrowLeft") next = (index + sheets.length - 1) % sheets.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = sheets.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };
  return <Section className="portfolio-clients" aria-labelledby="clients-title"><PortfolioContainer className="clients-layout">
    <div className="clients-heading"><h2 id="clients-title">previous clients</h2><p>some of my many voices:</p>
      <div className="client-tabs" role="tablist" aria-label="Client logo sheets">{sheets.map((_, index) => <button key={index} ref={element => { tabRefs.current[index] = element; }} id={`client-tab-${index}`} role="tab" aria-controls={`client-sheet-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} type="button" onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}>{range(index)}</button>)}</div>
    </div>
    <div className="client-browser"><div className="logo-deck">{sheets.map((sheet, index) => <div key={index} className="logo-sheet" id={`client-sheet-${index}`} role="tabpanel" aria-labelledby={`client-tab-${index}`} tabIndex={0} hidden={active !== index}>
      <div className="logo-grid" style={{ "--sheet-cols": sheet.length === 6 ? 3 : 4, "--mobile-rows": Math.ceil(sheet.length / 2) } as CSSProperties}>{sheet.map(logo => <div key={logo.file} className="logo-cell" style={{ "--mark-width": `${logo.width}px`, "--mark-height": `${logo.height}px` } as CSSProperties}><Image src={`/assets/image (${logo.file}).webp`} alt={logo.name} width={logo.width} height={logo.height} sizes="(max-width: 640px) 130px, 170px" /></div>)}</div>
      <div className="logo-sheet-footer"><span>{range(index)} / {clientLogos.length}</span><span>Anastasia Guletsky Kelly</span></div>
    </div>)}</div></div>
  </PortfolioContainer></Section>;
}
