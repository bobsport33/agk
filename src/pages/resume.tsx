import React from "react";
import styled from "@emotion/styled";

const ResumeCont = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 6rem 2rem;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 125px;
		bottom: 0;
		width: 2px;
		background: linear-gradient(
			to bottom,
			var(--primary-500),
			var(--secondary-500),
			var(--accent-500)
		);
	}

	.resume__heading {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		color: var(--neutral-1000);
		margin-bottom: 4rem;
	}

	.resume__item {
		position: relative;
		display: grid;
		gap: 1.5rem;

		margin-left: 3rem;
		margin-bottom: 2rem;
		padding: 2rem;

		background: var(--neutral-100);
		border-radius: 24px;
		border-left: 8px solid var(--primary-500);

		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.resume__item:hover {
		transform: translateY(-4px);

		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
	}

	.resume__item::before {
		content: "";
		position: absolute;

		width: 16px;
		height: 16px;

		left: -43px;
		top: 42px;

		border-radius: 50%;

		background: var(--neutral-100);
		border: 4px solid var(--primary-500);
	}

	.resume__item--rise {
		border-left-color: var(--secondary-500);
	}

	.resume__item--rise::before {
		border-color: var(--secondary-500);
	}

	.resume__item--rpm {
		border-left-color: var(--accent-500);
	}

	.resume__item--rpm::before {
		border-color: var(--accent-500);
	}

	.resume__item--walgreens {
		border-left-color: var(--primary-700);
	}

	.resume__item--walgreens::before {
		border-color: var(--primary-700);
	}

	.resume__item--early {
		border-left-color: var(--neutral-600);
	}

	.resume__item--early::before {
		border-color: var(--neutral-600);
	}

	.resume__header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.75rem 1rem;
	}

	.resume__company {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 900;
		line-height: 1;
		color: var(--neutral-1000);
	}

	.resume__role {
		font-size: 1rem;
		font-weight: 700;
		color: var(--primary-700);
	}

	.resume__date {
		margin-left: auto;

		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;

		color: var(--neutral-700);
	}

	.resume__section {
		display: grid;
		gap: 0.35rem;
	}

	.resume__label {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.resume__label--clients {
		color: var(--secondary-700);
	}

	.resume__label--work {
		color: var(--primary-700);
	}

	.resume__label--win {
		color: var(--accent-700);
	}

	.resume__label--awards {
		color: var(--primary-800);
	}

	.resume__text {
		line-height: 1.7;
		color: var(--neutral-900);
	}

	.resume__background {
		margin-top: 5rem;
		padding-top: 5rem;

		border-top: 1px solid var(--neutral-300);
	}

	.resume__backgroundHeading {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		margin-bottom: 3rem;

		color: var(--neutral-1000);
	}

	.resume__infoGrid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.resume__infoCard {
		padding: 2rem;

		background: var(--neutral-100);

		border-radius: 24px;

		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
	}

	.resume__infoTitle {
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;

		color: var(--primary-700);

		margin-bottom: 1rem;
	}

	.resume__infoContent {
		line-height: 1.8;
		color: var(--neutral-900);
	}

	.resume__skills {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.resume__skillTitle {
		font-size: 1.5rem;
	}

	.resume__skill {
		padding: 0.85rem 1.25rem;

		background: var(--primary-100);

		border: 1px solid var(--primary-300);

		border-radius: 999px;

		font-weight: 700;

		color: var(--primary-900);

		transition: all 0.2s ease;
	}

	.resume__skill:hover {
		transform: translateY(-2px);

		background: var(--primary-200);
	}

	.resume__skillList {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		padding: 4rem 1.25rem;

		&::before {
			left: 18px;
		}

		.resume__item {
			margin-left: 2rem;
			padding: 1.5rem;
		}

		.resume__item::before {
			left: -31px;
		}

		.resume__date {
			width: 100%;
			margin-left: 0;
		}
	}
`;

const Resume = () => {
	return (
		<ResumeCont>
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
