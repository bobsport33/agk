import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";

const sectionContent = [
	{
		label: "brief",
		body: `Harley's 2024 lineup brought real innovation: new tech, new specs, 12+ bikes.
           We needed one unifying platform that could scale across all of them without
           flattening what made each model distinct.`
	},
	{
		label: "approach",
		body: `"Ride Into a New Era" worked on two levels: the product evolution riders could
           see in the specs, and the personal one they'd feel on the road. Each execution
           was tuned to its bike's personality while staying anchored to the same idea.`
	},
	{
		label: "wins",
		body: `The campaign scaled seamlessly from launch through programmatic display across
           the massive lineup of digital assets. One platform. Twelve bikes. Zero identity crises.`
	}
];
const sectionContent2 = [
	{
		label: "brief",
		body: `Harley was showing up in inboxes but saying nothing. Product-forward, promo-heavy, and completely disconnected from the brand people actually love.
`
	},
	{
		label: "approach",
		body: `We recentered the CRM content strategy around freedom; not as a tagline, but as a storytelling lens. Every send asked: how does this product, this moment, this offer connect to why riders ride?`
	},
	{
		label: "wins",
		body: `The emails started sounding like Harley again. CTR improved, sales lift followed, and the CRM practice moved forward with soul.`
	}
];

const media: {
	type: "image" | "video";
	src: string;
	alt?: string;
	poster?: string;
}[] = [
	{
		type: "video",
		src: "/assets/Harley/MY24_Tier2_FLHX_Meta_InFeed_Video_1x1_15s_RequestQuote_USEN.mp4"
	},
	{
		type: "video",
		src: "assets/Harley/MY24_Tier2_RA1250SE_Meta_InFeed_Video_1x1_15s_TestRide_USEN.mp4"
	},
	{
		type: "video",
		src: "assets/Harley/MY24_Tier2_RH975S_Meta_InFeed_Video_1x1_15s_TestRide_USEN.mp4"
	},
	{
		type: "image",
		src: "assets/Harley/2024HDMY/1x1_Frame2_CA.jpg",
		alt: "Harley 2024 Launch"
	},
	{
		type: "image",
		src: "assets/Harley/2024HDMY/Screenshot 2024-05-30 at 2.25.52 PM.png",
		alt: "Bike detail"
	},
	{
		type: "image",
		src: "assets/Harley/2024HDMY/Screenshot 2024-05-30 at 2.22.20 PM.png",
		alt: "Rider"
	},
	{
		type: "image",
		src: "assets/Harley/2024HDMY/Screenshot 2024-05-30 at 2.22.57 PM.png",
		alt: "Rider"
	},
	{
		type: "image",
		src: "assets/Harley/2024HDMY/MY24_T2New_RA1250SE_Programmatic_Static_1200x1200_TestRide_USEN.jpg",
		alt: "Rider"
	}
	// {
	// 	type: "image",
	// 	src: "assets/Harley/2024HDMY/Screenshot 2024-05-30 at 2.25.52 PM.png",
	// 	alt: "Rider"
	// }
];

const HarleyDavidson: React.FC = () => {
	return (
		<ProjectPage>
			<PageTitle title="Harley Davidson" />
			<NumberedContentSection
				title="Model Year 2024 Launch: Ride Into a New Era"
				content={sectionContent}
				images={[{ src: "/assets/Harley/2024HDMY/1x1_Frame3_CA.jpg" }]}
			/>
			<MediaGrid media={media} />
			<NumberedContentSection
				title="Brand Email/CRM"
				content={sectionContent2}
			/>
		</ProjectPage>
	);
};

export default HarleyDavidson;
