import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import PortfolioMosaic from "@/modules/PortfolioMosaic";
import { FoundFablePanel } from "@/modules/playbook/FoundFablePanel";

const Intro = styled.section`
	background: var(--surface-hero, #efa17f);
	padding: var(--section-space) var(--page-gutter);
	border-bottom: 1px solid var(--border-subtle, #1a1a1a33);

	> div { max-width: var(--content-max); margin: 0 auto; display: flex; justify-content: space-between; align-items: end; gap: var(--layout-gap); }
	h1 { flex: 1; margin: 0; font-family: var(--font-display); font-size: var(--font-size-creative-hero); line-height: var(--leading-display); letter-spacing: var(--tracking-display); }
	> div > div { width: min(100%, 360px); flex: 0 0 min(100%, 360px); }
	p { margin: 0 0 1.5rem; font-size: var(--font-size-body); line-height: var(--leading-body); }
	@media (max-width: 1024px) { > div { display: block; } > div > div { width: min(100%, 640px); margin-top: 2rem; } }
`;

const MosaicSection = styled.section`
	padding-block: var(--section-space);
`;

const ResumeLink = styled.div`
	max-width: 1420px;
	margin: 0 auto;
	padding: 0 var(--page-gutter) var(--section-space);
	text-align: center;
	font-size: var(--font-size-body, 1rem);
	a { color: var(--text-primary, #243d3c); text-underline-offset: .25em; }
`;

export default function CreativeWorkPage() {
	return <>
		<Head><title>Creative Work | Anastasia Guletsky Kelly</title><meta name="description" content="Selected creative work by Anastasia Guletsky Kelly." /></Head>
		<Intro><div>
			<h1>Creative<br />work.</h1>
			<div><p>👋 I&apos;m Anastasia, an award-winning creative and copy leader with 14 years of experience shaping brand voice, leading multi-channel campaigns, building digital content strategies and growing teams who don&apos;t get the Sunday Scaries.</p>
			<Link className="cta" href="/contact?topic=creative">Brand &amp; creative work <span aria-hidden="true">↗</span></Link></div>
		</div></Intro>
		<MosaicSection><PortfolioMosaic /></MosaicSection>
		<FoundFablePanel />
		<ResumeLink><Link href="/resume">Explore my experience and resume →</Link></ResumeLink>
	</>;
}
