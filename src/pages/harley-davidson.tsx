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

const media = [
	{
		type: "image",
		src: "/images/hd-hero.jpg",
		alt: "Harley 2024 Launch",
		size: "large"
	},
	{
		type: "image",
		src: "/images/hd-detail.jpg",
		alt: "Bike detail"
	},
	{
		type: "video",
		src: "/videos/launch.mp4",
		poster: "/images/video-poster.jpg",
		size: "wide"
	},
	{
		type: "image",
		src: "/images/rider.jpg",
		alt: "Rider",
		size: "small"
	}
];

const HarleyDavidson: React.FC = () => {
	return (
		<ProjectPage>
			<NumberedContentSection
				title="Model Year 2024 Launch: Ride Into a New Era"
				content={sectionContent}
			/>
			<MediaGrid media={media} />
		</ProjectPage>
	);
};

export default HarleyDavidson;
