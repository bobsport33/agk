import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import PortfolioMosaic from "@/modules/PortfolioMosaic";
import { FoundFablePanel } from "@/modules/playbook/FoundFablePanel";
import { ClientSheets } from "@/modules/portfolio/ClientSheets";
import { PortfolioArrow, PortfolioContainer, PortfolioSurface } from "@/modules/portfolio/shared";
import { portfolioIntro } from "@/content/portfolio";

const Intro = styled.section`
  background: var(--color-coral);
  padding-block: 44px 48px;
  > div { display: grid; grid-template-columns: .9fr 1.1fr; gap: var(--portfolio-split-gap); align-items: center; }
  h1 { font-size: clamp(58px, 5.3vw, 80px); font-weight: 800; line-height: .96; }
  h1 span { display: block; }
  p { max-width: 64ch; font-size: 18px; line-height: 1.6; }
  .resume-link { display: inline-flex; align-items: center; gap: 16px; min-height: 44px; margin-top: 16px; font-size: 15px; text-decoration: none; }
  .resume-link span { text-decoration: underline; text-underline-offset: .3em; }
  .arrow { width: 22px; height: 22px; }
  .resume-link:hover .arrow { transform: translate(3px, -3px); }
  @media (max-width: 1100px) { h1 { font-size: 58px; } > div { grid-template-columns: .8fr 1.2fr; } }
  @media (max-width: 900px) {
    padding-block: 36px 40px;
    > div { grid-template-columns: 1fr; gap: 28px; }
    h1 { font-size: clamp(46px, 7.1vw, 64px); }
    h1 span { display: inline; }
    p { max-width: 68ch; }
  }
  @media (max-width: 640px) {
    h1 { font-size: clamp(36px, 8.7vw, 52px); line-height: 1.02; }
    p { font-size: 17px; line-height: 1.6; }
    .resume-link { font-size: 14px; gap: 12px; line-height: 1.5; }
    .arrow { width: 20px; height: 20px; }
  }
`;

const MosaicSection = styled.section`
  padding-block: 48px 72px;
  @media (max-width: 900px) { padding-block: 36px 56px; }
`;

export default function CreativePortfolioPage() {
  return <PortfolioSurface>
    <Head>
      <title>Creative Portfolio | Anastasia Guletsky Kelly</title>
      <meta key="description" name="description" content="Creative portfolio of Anastasia Guletsky Kelly." />
    </Head>
    <Intro className="portfolio-hero" aria-labelledby="portfolio-title"><PortfolioContainer>
      <h1 id="portfolio-title"><span>creative</span>{" "}<span>portfolio</span></h1>
      <div><p>{portfolioIntro}</p><Link className="resume-link" href="/resume"><span>Explore my experience and resume</span><PortfolioArrow /></Link></div>
    </PortfolioContainer></Intro>
    <MosaicSection aria-label="Selected projects"><PortfolioMosaic /></MosaicSection>
    <ClientSheets />
    <FoundFablePanel />
  </PortfolioSurface>;
}
