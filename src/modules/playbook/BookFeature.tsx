import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { bookContent } from "@/content/books";
const Band=styled.section`
  background:var(--surface-books);padding-block:var(--section-space);color:var(--text-heading);
  --text-body:var(--color-ink);--text-heading:var(--color-ink);
`;
const Inner=styled.div`
  display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:var(--layout-gap);
  .visual{position:relative;width:min(calc(100% - 24px),520px);margin:auto;transform:rotate(-3deg);background:var(--color-paper);padding:var(--frame-book);box-shadow:var(--shadow-plate)}
  .visual img{width:100%;height:auto;aspect-ratio:1;object-fit:cover;display:block}
  .date{position:absolute;right:-18px;bottom:-12px;width:var(--book-badge-size);height:var(--book-badge-size);border-radius:var(--radius-round);display:grid;place-content:center;text-align:center;background:var(--color-paper);font-size:var(--font-size-small);line-height:1.1}.date strong{font-size:var(--font-size-h3);font-family:var(--font-display);font-weight:var(--weight-display)}
  h2{font-size:var(--font-size-book);font-weight:var(--weight-display);line-height:var(--leading-heading);letter-spacing:var(--tracking-display);margin-bottom:var(--space-4)}
  p{margin-block:var(--space-3)}.publisher{text-decoration:underline;text-underline-offset:.3em;color:var(--text-primary)}
  .publisher:hover{color:var(--text-primary-hover)}.publisher:active{color:var(--text-primary-active)}
  .cta{margin-top:var(--space-4)}
  @media(max-width:1024px){grid-template-columns:1fr;}

`;
export function BookFeature(){return <Band><div className="container"><Inner><div className="visual"><Image src={bookContent.archivalImage} alt={bookContent.archivalImageAlt} width={820} height={580} sizes="(max-width: 640px) calc(100vw - 72px), 520px"/><span className="date"><span>{bookContent.dateBadge[0]}</span><strong>{bookContent.dateBadge[1]}</strong></span></div><div><h2 className="type-book">BERTHA &amp;<br/>THE VERY FIRST<br/>BROWNIE</h2><p>{bookContent.summary}</p><p>Published by <a className="publisher" href={bookContent.publisherUrl} target="_blank" rel="noreferrer">{bookContent.publisher}</a></p><Link className="cta" href="/contact?topic=books">{bookContent.inquiryLabel} <span aria-hidden="true">↗</span></Link></div></Inner></div></Band>}
