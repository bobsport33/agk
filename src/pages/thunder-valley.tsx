import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";

const sectionContent = [
	{
		label: "brief",
		body: `Thunder Valley was known as a casino. The reality was so much more: world-class dining, entertainment, a full resort experience. The brand needed to catch up to what the place actually was.`
	},
	{
		label: "approach",
		body: ` "Live Out Loud" reframed Thunder Valley as a destination for people who show up fully. The campaign ran across TV, radio, social, print and outdoor--all built around the idea that this is a place to be seen, heard and celebrated.`
	},
	{
		label: "wins",
		body: `The TVCR brand transformed from casino to destination, with resort bookings increasing 60% in one year.`
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

const ThunderValley = () => {
	return (
		<ProjectPage>
			<PageTitle title="Thunder Valley Casino Resport" />
			<NumberedContentSection
				title="Live Out Loud"
				content={sectionContent}
				images={[{ src: "/assets/Harley/2024HDMY/1x1_Frame3_CA.jpg" }]}
			/>
			<MediaGrid media={media} />\
		</ProjectPage>
	);
};

export default ThunderValley;
