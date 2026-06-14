import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";

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
	}
];

const HarleyDavidson: React.FC = () => {
	return (
		<ProjectPage>
			<NumberedContentSection
				title="Model Year 2024 Launch: Ride Into a New Era"
				content={sectionContent}
				images={[{ src: "/assets/Harley/2024HDMY/1x1_Frame3_CA.jpg" }]}
			/>
			<MediaGrid media={media} />
		</ProjectPage>
	);
};

export default HarleyDavidson;
