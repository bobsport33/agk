import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";

const sectionContent = [
	{
		label: "brief",
		body: `Converse speaks to everyone from NBA players to toddlers to fashion kids in Tokyo. The challenge: make it all sound like the same brand without making it all sound the same.`
	},
	{
		label: "approach",
		body: `We developed a voice framework flexible enough to stretch across audiences: same DNA, different dial settings. Basketball gets heat. Kids get joy. Platform fashion gets edge. But the attitude underneath? Always Converse.`
	},
	{
		label: "wins",
		body: `Consistent brand voice across social content for three distinct product lines—without losing what makes each one resonate with its own crowd.`
	}
];

const media: {
	type: "image" | "video" | "youtube";
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

const ThunderValley = () => {
	return (
		<ProjectPage>
			<PageTitle title="Thunder Valley" />
			<NumberedContentSection
				title={"Social Copy & Tone Guidelines"}
				content={sectionContent}
				images={[
					{
						src: "/assets/converse/Screen Shot 2019-07-18 at 1.23.13 PM.png"
					}
				]}
			/>
			<MediaGrid media={media} />
			<NumberedContentSection
				title="Cox Mobile: Brand Launch"
				content={sectionContent2}
				images={[{ src: "assets/cox/cox-lamb.png" }]}
			/>
			<MediaGrid media={media2} />
		</ProjectPage>
	);
};

export default ThunderValley;
