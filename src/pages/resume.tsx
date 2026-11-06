import React from "react";
import styled from "@emotion/styled";
import { media } from "@/styles/breakpoints";

const ResumeCont = styled.div`
	width: min(100%, 1100px);
	margin: 0 auto;
	padding: clamp(3rem, 5vw, 4.5rem) var(--page-gutter);

	.resume__timeline {
		position: relative;
	}

	.resume__timeline::before {
		content: "";
		position: absolute;
		left: 0;
		top: 96px;
		bottom: 0;
		width: 2px;
		pointer-events: none;
		background: var(--border-strong);
	}

	.resume__heading {
		font-family: var(--font-display);
		font-size: var(--font-size-h1);
		font-weight: var(--weight-display);
		letter-spacing: 0;
		line-height: var(--leading-heading);
		color: var(--text-heading, var(--color-ink, #1a1a1a));
		margin-bottom: 2.75rem;
	}

	.resume__item {
		position: relative;
		display: grid;
		gap: 1rem;

		margin-left: 3rem;
		margin-bottom: 1.25rem;
		padding: 1.5rem;

		background: var(--surface-page, #f7ebdd);
		border-radius: 16px;
		border-left: 6px solid var(--color-coral, #efa17f);

		box-shadow: 0 5px 18px rgba(0, 0, 0, 0.055);
	}

	.resume__item::before {
		content: "";
		position: absolute;

		width: 16px;
		height: 16px;

		left: -43px;
		top: 42px;

		border-radius: 50%;

		background: var(--surface-page, #f7ebdd);
		border: 4px solid var(--color-coral, #efa17f);
	}

	.resume__item--rise {
		border-left-color: var(--color-teal, #99c2bf);
	}

	.resume__item--rise::before {
		border-color: var(--color-teal, #99c2bf);
	}

	.resume__item--rpm {
		border-left-color: var(--color-sand, #f0debc);
	}

	.resume__item--rpm::before {
		border-color: var(--color-sand, #f0debc);
	}

	.resume__item--walgreens {
		border-left-color: var(--text-primary, #243d3c);
	}

	.resume__item--walgreens::before {
		border-color: var(--text-primary, #243d3c);
	}

	.resume__item--early {
		border-left-color: var(--text-muted, #514b46);
	}

	.resume__item--early::before {
		border-color: var(--text-muted, #514b46);
	}

	.resume__header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.75rem 1rem;
	}

	.resume__company {
		font-family: var(--font-display);
		font-size: var(--font-size-h3);
		font-weight: var(--weight-heading);
		line-height: 1.15;
		color: var(--text-heading, var(--color-ink, #1a1a1a));
	}

	.resume__role {
		font-size: var(--font-size-body);
		font-weight: var(--weight-medium);
		color: var(--text-primary, #243d3c);
	}

	.resume__date {
		margin-left: auto;

		font-size: var(--font-size-small);
		font-weight: var(--weight-medium);
		letter-spacing: 0.08em;
		text-transform: uppercase;

		color: var(--text-muted, #514b46);
	}

	.resume__section {
		display: grid;
		gap: 0.35rem;
	}

	.resume__label {
		font-size: var(--font-size-small);
		font-weight: var(--weight-medium);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.resume__label--clients {
		color: var(--text-secondary, #243d3c);
	}

	.resume__label--work {
		color: var(--text-primary, #243d3c);
	}

	.resume__label--win {
		color: var(--text-primary, #243d3c);
	}

	.resume__label--awards {
		color: var(--text-primary, #243d3c);
	}

	.resume__text {
		font-size: var(--font-size-body);
		line-height: var(--leading-body);
		color: var(--text-body, var(--color-ink, #1a1a1a));
	}

	.resume__background {
		margin-top: 3.5rem;
		padding-top: 3.5rem;

		border-top: 1px solid var(--border-subtle, #1a1a1a33);
	}

	.resume__backgroundHeading {
		font-family: var(--font-display);
		font-size: var(--font-size-h2);
		font-weight: var(--weight-display);
		margin-bottom: 2rem;

		color: var(--text-heading, var(--color-ink, #1a1a1a));
	}

	.resume__infoGrid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		margin-bottom: 2.75rem;
	}

	.resume__infoCard {
		padding: 1.5rem;

		background: var(--surface-page, #f7ebdd);

		border-radius: 16px;

		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
	}

	.resume__infoTitle {
		font-size: var(--font-size-small);
		font-weight: var(--weight-medium);
		letter-spacing: 0.1em;
		text-transform: uppercase;

		color: var(--text-primary, #243d3c);

		margin-bottom: 1rem;
	}

	.resume__infoContent {
		font-size: var(--font-size-body);
		line-height: var(--leading-body);
		color: var(--text-body, var(--color-ink, #1a1a1a));
	}

	.resume__skills {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.resume__skillTitle {
		font-family: var(--font-display);
		font-size: var(--font-size-h4);
		font-weight: var(--weight-heading);
	}

	.resume__skill {
		padding: 0.85rem 1.25rem;

		background: var(--surface-hero, #efa17f);

		border: 1px solid var(--color-coral-disabled, #dfc5b8);

		border-radius: 999px;

		font-weight: var(--weight-medium);

		color: var(--text-primary, #243d3c);

	}

	.resume__skillList {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	${media.tablet} {
	width: min(100%, 900px);
	}

	${media.mobile} {
		width: 100%;
		padding: 2.25rem var(--page-gutter);

		.resume__timeline::before {
			left: 18px;
		}

		.resume__item {
			margin-left: 2rem;
			padding: 1.15rem;
		}

		.resume__item::before {
			left: -31px;
		}

		.resume__date {
			width: 100%;
			margin-left: 0;
		}

		.resume__infoGrid {
			grid-template-columns: 1fr;
		}

		.resume__heading {
			margin-bottom: 2rem;
		}

		.resume__company { font-size: var(--font-size-h3); }

		.resume__infoCard {
			padding: 1.15rem;
		}

		.resume__skillList {
			gap: 0.65rem;
		}

		.resume__skill {
			padding: 0.7rem 1rem;
		}
	}
`;

const Resume = () => {
	return (
		<ResumeCont>
			<div className="resume__timeline">
				<h1 className="resume__heading">Experience</h1>

				<div className="resume__item">
				<div className="resume__header">
					<div className="resume__company">FCB Chicago</div>
					<div className="resume__role">
						Associate Creative Director
					</div>
					<div className="resume__date">Oct 2019 – Jan 2026</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--clients">
						Clients
					</div>
					<div className="resume__text">
						Harley-Davidson, Cox Communications, City of Chicago,
						Volkswagen
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--work">
						The Work
					</div>
					<div className="resume__text">
						Creative team lead across digital campaigns, web & UX
						development, TV & video, social media and brand
						activations.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--win">
						Big Win
					</div>
					<div className="resume__text">
						Spearheaded creative and strategy for Chicago&apos;s “We
						Are All One Home Team” health campaign, quickly
						developing multi-channel content across digital, social,
						OOH, TV and PR that united and informed millions of city
						residents.
					</div>
				</div>
				</div>

				<div className="resume__item resume__item--rise">
				<div className="resume__header">
					<div className="resume__company">Rise Interactive</div>
					<div className="resume__role">
						Sr. Copywriter & Content Strategist
					</div>
					<div className="resume__date">Jan 2017 – Oct 2019</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--clients">
						Clients
					</div>
					<div className="resume__text">
						Converse, Michaels Crafts, National Dairy Council,
						Nicklaus Children’s Hospital, Tempur-Sealy, Atkins,
						Nordstrom, U.S. Foods, SKIL Power Tools
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--work">
						The Work
					</div>
					<div className="resume__text">
						Digital campaigns, social campaigns, web copy and
						strategy, UX copy and strategy, editorial and
						infographics.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--win">
						Big Win
					</div>
					<div className="resume__text">
						Helped lead the digital creative vision and copywriting
						for the Michaels Weddings campaign, successfully
						positioning the brand as a go-to resource and unlocking
						a new online revenue stream.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--awards">
						Awards
					</div>
					<div className="resume__text">
						2020 Internet Advertising Competition Winner,
						NicklausChildrens.org
					</div>
				</div>
				</div>

				<div className="resume__item resume__item--rpm">
				<div className="resume__header">
					<div className="resume__company">RPM Advertising</div>
					<div className="resume__role">Sr. Copywriter</div>
					<div className="resume__date">Jun 2013 – Jan 2017</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--clients">
						Clients
					</div>
					<div className="resume__text">
						Thunder Valley Resort, Penn National Gaming, Hollywood
						Casinos, Terlato Wines, Riondo Prosecco, Gila River
						Casinos
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--work">
						The Work
					</div>
					<div className="resume__text">
						TV, radio, outdoor, print ads, digital banners, web
						copy, social media, direct mail and branding.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--win">
						Big Win
					</div>
					<div className="resume__text">
						Launched the “Live Out Loud” brand campaign for Thunder
						Valley Resort, creating messaging across TV, radio,
						social and outdoor ads that drove a 60% yearly increase
						in resort bookings.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--awards">
						Awards
					</div>
					<div className="resume__text">
						2015 Davey Awards, “Hollywood Casino, All That Glitters”
					</div>
				</div>
				</div>

				<div className="resume__item resume__item--walgreens">
				<div className="resume__header">
					<div className="resume__company">Walgreens Co.</div>
					<div className="resume__role">
						Digital Writer & Strategist
					</div>
					<div className="resume__date">2012 – 2013</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--clients">
						Clients
					</div>
					<div className="resume__text">
						Walgreens private label brands: Well at Walgreens,
						Ology, Well Beginnings Baby, Nice!, Good & Delish
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--work">
						The Work
					</div>
					<div className="resume__text">
						Digital creative, blogging, social media campaigns and
						web copy.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--win">
						Big Win
					</div>
					<div className="resume__text">
						Developed the digital creative campaign for the All-Star
						Celebrity Apprentice integration.
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--awards">
						Awards
					</div>
					<div className="resume__text">
						2013 Store Brands Decisions Innovation Awards — Best
						Television Advertising Campaign, “Walgreens Good &
						Delish, Celebrity Apprentice”
					</div>
				</div>
				</div>

				<div className="resume__item resume__item--early">
				<div className="resume__header">
					<div className="resume__company">
						Copywriting From Way Back
					</div>
				</div>

				<div className="resume__section">
					<div className="resume__label resume__label--clients">
						Early Career
					</div>
					<div className="resume__text">
						ChiCitySports.com, Second City Training Center, Arc
						Worldwide, Illini Athletics
					</div>
				</div>
				</div>
			</div>
			<div className="resume__infoGrid">
				<div className="resume__infoCard">
					<div className="resume__infoTitle">Education</div>

					<div className="resume__infoContent">
						<strong>University of Illinois Urbana-Champaign</strong>
						<br />
						Advertising, Sociology
						<br />
						Graduated 2012
					</div>
				</div>

				<div className="resume__infoCard">
					<div className="resume__infoTitle">Training</div>

					<div className="resume__infoContent">
						ADA Web Compliance
						<br />
						The Refinery Manager Leadership Training
						<br />
						Second City Training Center: Sketch Writing & Improv
					</div>
				</div>
			</div>
			<div className="resume__skills">
				<h3 className="resume__skillTitle">Skills</h3>
				<div className="resume__skillList">
					<div className="resume__skill">Brand Voice Builder</div>
					<div className="resume__skill">Buzzword Decoder</div>
					<div className="resume__skill">Grammar Guru</div>
					<div className="resume__skill">Team Talent Gardener</div>
					<div className="resume__skill">Meeting Energy Reviver</div>
					<div className="resume__skill">#1 Karaoke Partner</div>
				</div>
			</div>
		</ResumeCont>
	);
};

export default Resume;
