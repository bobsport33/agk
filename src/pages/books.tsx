import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import { BookFeature } from "@/modules/playbook/BookFeature";
const Intro=styled.section`
  padding-block:var(--space-8) var(--space-5);background:var(--surface-reading);
  h1{font-size:var(--font-size-creative-hero);line-height:var(--leading-display);letter-spacing:var(--tracking-display)}
  @media(max-width:1024px){padding-block:var(--space-7) var(--space-4)}
  @media(max-width:640px){padding-block:var(--space-6) var(--space-4)}
`;
const Story=styled.section`
  padding-block:var(--space-8) var(--space-9);display:grid;grid-template-columns:.8fr 1.2fr;gap:var(--layout-gap);
  h2{font-size:var(--font-size-h2);line-height:var(--leading-display);letter-spacing:var(--tracking-display)}
  p{margin-bottom:var(--paragraph-gap);max-width:var(--measure-body)}
  @media(max-width:1024px){gap:var(--space-6);padding-block:var(--space-7)}
  @media(max-width:640px){grid-template-columns:1fr;gap:var(--space-5)}
`;
const More=styled.section`
  background:var(--surface-inverse);color:var(--text-inverse);--text-body:var(--text-inverse);--text-heading:var(--text-inverse);
  padding-block:var(--space-8);h2{font-size:var(--font-size-h2);line-height:var(--leading-display);letter-spacing:var(--tracking-display);margin-bottom:var(--heading-gap)}
  ul{padding-left:var(--space-5);max-width:var(--measure-body)}li{padding-block:var(--space-2)}p{margin-block:var(--space-4)}
  .cta{display:inline-flex;align-items:center;min-height:var(--control-height);padding:var(--control-padding-block) var(--control-padding-inline);border:var(--border-width) solid var(--color-paper);font-weight:var(--weight-medium)}
  .cta:hover{background:var(--color-paper);color:var(--color-ink)}
  @media(max-width:640px){padding-block:var(--space-7)}
`;
export default function Books(){return <><Head><title>Books | Anastasia Guletsky Kelly</title></Head><Intro><div className="container"><h1 className="type-creative-hero">Same storyteller.<br/>New client: kids.</h1></div></Intro><BookFeature/><div style={{background:"var(--surface-reading)"}}><div className="container"><Story><h2>Children’s<br/>books.</h2><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. I write picture books that introduce young readers to overlooked people, unexpected histories, and stories worth sharing.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Through research, humor, and a little wonder, each story opens a door to the past.</p></div></Story></div></div><More><div className="container"><h2>And there’s<br/>more to come!</h2><ul><li>The first Greek woman to immigrate to Chicago in 1885.</li><li>The silly little wiener dog who inspired the Portillo’s Hot Dog empire.</li><li>An art museum, big feelings, and two lions.</li></ul><p>Stay tuned!</p><Link className="cta" href="/contact?topic=books">Books, schools, libraries &amp; events <span aria-hidden="true">↗</span></Link></div></More></>}
