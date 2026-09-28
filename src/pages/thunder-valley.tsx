/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";
import { media } from "@/styles/breakpoints";

const sectionContent = [
	{
		label: "brief",
		body: `Thunder Valley was known as a casino. The reality was so much more: world-class dining, entertainment, a full resort experience. The brand needed to catch up to what the place actually was.`
	},
	{
		label: "approach",
		body: `"Live Out Loud" reframed Thunder Valley as a destination for people who show up fully. The campaign ran across TV, radio, social, print and outdoor--all built around the idea that this is a place to be seen, heard and celebrated.`
	},
	{
		label: "wins",
		body: `The TVCR brand transformed from casino to destination, with resort bookings increasing 60% in one year.`
	}
];

const films: {
	type: "youtube";
	src: string;
	alt: string;
}[] = [
	{
		type: "youtube",
		src: "https://www.youtube.com/watch?v=yN0RtNcOOsw",
		alt: "Illusions - Thunder Valley Casino Resort"
	},
	{
		type: "youtube",
		src: "https://www.youtube.com/watch?v=4PV2OSab8ww",
		alt: "Thunder Rewards (2016)"
	},
	{
		type: "youtube",
		src: "https://www.youtube.com/watch?v=ruG9ZLllQmU",
		alt: "TVCR - Illusions Nightclub (2015)"
	},
	{
		type: "youtube",
		src: "https://www.youtube.com/watch?v=nDGrp-YDkbY",
		alt: "TVCR - Brand Ad (2014)"
	}
];

const campaign: {
	src: string;
	alt: string;
}[] = [
	{
		src: "/assets/TVCR cover photo logo.webp",
		alt: "Thunder Valley Casino Resort"
	},
	{
		src: "/assets/thunder-valley/brand-ooh.avif",
		alt: "Thunder Valley Brand OOH, 2015"
	},
	{
		src: "/assets/thunder-valley/rewards-ooh.avif",
		alt: "Thunder Rewards OOH, 2014"
	},
	{
		src: "/assets/thunder-valley/brand-panorama.webp",
		alt: "Thunder Valley Brand OOH, 2016"
	},
	{
		src: "/assets/thunder-valley/dining-ooh.webp",
		alt: "Thunder Cafe Dining OOH, 2016"
	},
	{
		src: "/assets/thunder-valley/dining-ooh-wide.webp",
		alt: "Thunder Cafe Dining OOH, 2016"
	}
];

const Radio = styled.section`
	display: grid;
	grid-template-columns: minmax(220px, 0.4fr) minmax(0, 1fr);
	gap: 1.5rem;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid var(--neutral-400);

	h2 {
		font-size: 1.1rem;
		line-height: 1.4;
	}

	audio {
		width: 100%;
	}

	${media.tablet} {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

const CampaignGallery = styled.section`
	display: grid;
	gap: 0.75rem;
	width: 100%;

	.campaign-gallery {
		&__row {
			display: grid;
			gap: 0.75rem;
			width: 100%;
			align-items: start;
		}

		&__row--lead {
			grid-template-columns: minmax(0, 1.07fr) minmax(0, 1.33fr);
		}

		&__row--dining {
			grid-template-columns: minmax(0, 1.98fr) minmax(0, 1.85fr);
		}

		&__image {
			display: block;
			width: 100%;
			height: auto;
			border-radius: var(--media-radius);
		}
	}

	${media.mobile} {
		.campaign-gallery__row--lead,
		.campaign-gallery__row--dining {
			grid-template-columns: 1fr;
		}
	}
`;

const ThunderValley = () => {
	return (
		<ProjectPage>
			<PageTitle title="Thunder Valley" />
			<NumberedContentSection
				title={'Thunder Valley Casino Resort: "Live Out Loud"'}
				content={sectionContent}
			/>
			<Radio>
				<h2>&quot;Live Out Loud&quot; TVCR Brand Radio - RPM Advertising</h2>
				<audio controls preload="metadata" src="/assets/thunder-valley/live-out-loud-radio.mp3" />
			</Radio>
			<MediaGrid title="Thunder Valley Casino Resort - TV" media={films} columns={2} />
			<CampaignGallery>
				<div className="campaign-gallery__row campaign-gallery__row--lead">
					{campaign.slice(0, 2).map((image) => (
						<ImageLightbox key={image.src} src={image.src} alt={image.alt}>
							<img className="campaign-gallery__image" src={image.src} alt={image.alt} loading="lazy" />
						</ImageLightbox>
					))}
				</div>
				{campaign.slice(2, 4).map((image) => (
					<ImageLightbox key={image.src} src={image.src} alt={image.alt}>
						<img className="campaign-gallery__image" src={image.src} alt={image.alt} loading="lazy" />
					</ImageLightbox>
				))}
				<div className="campaign-gallery__row campaign-gallery__row--dining">
					{campaign.slice(4).map((image) => (
						<ImageLightbox key={image.src} src={image.src} alt={image.alt}>
							<img className="campaign-gallery__image" src={image.src} alt={image.alt} loading="lazy" />
						</ImageLightbox>
					))}
				</div>
			</CampaignGallery>
		</ProjectPage>
	);
};

export default ThunderValley;
