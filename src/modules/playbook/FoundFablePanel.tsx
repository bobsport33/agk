import styled from "@emotion/styled";
import { PortfolioArrow, PortfolioContainer } from "@/modules/portfolio/shared";

const Panel = styled.section`
  background: var(--portfolio-studio); color: var(--color-ink); padding-block: 64px;
  > div { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--portfolio-split-gap); align-items: center; }
  h2 { font-size: clamp(56px, 5.4vw, 80px); font-weight: 800; line-height: .98; color: inherit; }
  h2 span { display: block; font-size: 24px; font-weight: 600; letter-spacing: -.02em; margin-top: 12px; }
  p { font-size: 18px; margin-top: 24px; max-width: 42ch; }
  .studio-services { display: grid; gap: 8px; list-style: none; padding: 0; margin: 0 0 24px; font-size: 20px; line-height: 1.4; }
  .studio-link { display: inline-flex; align-items: center; gap: 20px; min-height: 64px; text-decoration: none; font-weight: 500; }
  .studio-link > span:first-of-type { text-decoration: underline; text-underline-offset: .3em; }
  .arrow-orb { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: var(--color-paper); transition: background 240ms var(--portfolio-ease), color 240ms var(--portfolio-ease), transform 240ms var(--portfolio-ease); }
  .arrow { width: 32px; height: 32px; }
  .studio-link:hover .arrow-orb { background: var(--color-ink); color: var(--color-paper); transform: translateY(-2px); }
  .studio-link:hover .arrow { transform: translate(3px, -3px); }
  .studio-link:active .arrow-orb { transform: translateY(0); }
  @media (max-width: 900px) { h2 { font-size: 56px; } .studio-services { font-size: 18px; } }
  @media (max-width: 640px) {
    padding-block: 48px;
    > div { grid-template-columns: 1fr; gap: 32px; }
    h2 { font-size: clamp(40px, 10.5vw, 56px); }
    h2 span { font-size: 22px; }
    p { font-size: 17px; margin-top: 20px; }
    .studio-services { margin-bottom: 20px; }
    .studio-link { gap: 20px; }
    .arrow-orb { width: 56px; height: 56px; }
    .arrow { width: 28px; height: 28px; }
  }
`;

export function FoundFablePanel() {
  return <Panel className="portfolio-studio" aria-labelledby="studio-title"><PortfolioContainer>
    <div><h2 id="studio-title">Found Fable<span>Creative Co.</span></h2><p>For mission-driven organizations.</p></div>
    <div><ul className="studio-services"><li>Brand voice development</li><li>Content strategy</li><li>Storytelling</li></ul><a className="studio-link" href="https://foundfablecreative.com/" target="_blank" rel="noopener noreferrer"><span>Visit Found Fable</span><span className="arrow-orb"><PortfolioArrow /></span></a></div>
  </PortfolioContainer></Panel>;
}
