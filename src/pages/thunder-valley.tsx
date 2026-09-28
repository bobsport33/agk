/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";

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
		src: "/assets/TVCR cover photo logo.png",
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
		src: "/assets/thunder-valley/brand-panorama.jpg",
		alt: "Thunder Valley Brand OOH, 2016"
	},
	{
		src: "/assets/thunder-valley/dining-ooh.jpg",
		alt: "Thunder Cafe Dining OOH, 2016"
	},
	{
		src: "/assets/thunder-valley/dining-ooh-wide.jpg",
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

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

const CampaignGallery = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	.campaign-gallery {
		&__cover {
			width: min(100%, 440px);
		}

		&__pair {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 1rem;
			width: min(100%, 980px);
			align-items: start;
		}

		&__wide {
			width: min(100%, 980px);
		}

		&__image {
			display: block;
			width: 100%;
			height: auto;
			border-radius: var(--media-radius);
		}
	}

	@media (max-width: 640px) {
		.campaign-gallery__pair {
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
				<div className="campaign-gallery__cover">
					<ImageLightbox src={campaign[0].src} alt={campaign[0].alt}>
						<img className="campaign-gallery__image" src={campaign[0].src} alt={campaign[0].alt} loading="lazy" />
					</ImageLightbox>
				</div>
				<div className="campaign-gallery__pair">
					{campaign.slice(1, 3).map((image) => (
						<ImageLightbox key={image.src} src={image.src} alt={image.alt}>
							<img className="campaign-gallery__image" src={image.src} alt={image.alt} loading="lazy" />
						</ImageLightbox>
					))}
				</div>
				{campaign.slice(3).map((image) => (
					<div className="campaign-gallery__wide" key={image.src}>
						<ImageLightbox src={image.src} alt={image.alt}>
							<img className="campaign-gallery__image" src={image.src} alt={image.alt} loading="lazy" />
						</ImageLightbox>
					</div>
				))}
			</CampaignGallery>
		</ProjectPage>
	);
};

export default ThunderValley;
