import Link from "next/link";
import styled from "@emotion/styled";
const Panel = styled.section`
  background:var(--surface-studio);color:var(--text-inverse);padding:var(--panel-padding);
  display:grid;grid-template-columns:1fr 1fr;gap:var(--layout-gap);align-items:center;
  --text-body:var(--text-inverse);--text-heading:var(--text-inverse);
  h2{font-size:var(--font-size-h2);font-weight:var(--weight-display);line-height:var(--leading-display);letter-spacing:var(--tracking-display)}
  h2 span{display:block;font-size:var(--font-size-h5);letter-spacing:normal;margin-top:var(--space-2);color:var(--color-teal)}
  p{margin:var(--space-4) 0 var(--space-3)}
  a{color:var(--text-inverse);text-underline-offset:.3em}
  .services{list-style:none;padding:0;margin:0 0 var(--space-4)}
  .services li{padding:var(--space-3) 0;border-bottom:var(--border-width) solid var(--border-inverse);font-size:var(--font-size-service);font-family:var(--font-display);font-weight:var(--weight-medium)}
  .cta{display:flex;min-height:var(--control-height);align-items:center;justify-content:space-between;padding:var(--control-padding-block) var(--control-padding-inline);border:var(--border-width) solid var(--color-paper);background:var(--color-paper);color:var(--color-fable);font-weight:var(--weight-medium)}
  .cta:hover{background:var(--color-teal);color:var(--color-ink)}

  @media(max-width:1024px){grid-template-columns:1fr;}
`;
export function FoundFablePanel(){return <div className="container" style={{paddingBlock:"var(--space-3) var(--space-8)"}}><Panel><div><h2>Found Fable<span>Creative Co.</span></h2><p>For mission-driven organizations.</p><a href="https://foundfablecreative.com/" target="_blank" rel="noreferrer">Found Fable Creative Co. ↗</a></div><div><ul className="services"><li>Brand voice development</li><li>Content strategy</li><li>Storytelling</li></ul><Link className="cta" href="/contact?topic=creative">Discuss a project <span aria-hidden="true">↗</span></Link></div></Panel></div>}
