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
		</ResumeCont>
	);
};

export default Resume;
