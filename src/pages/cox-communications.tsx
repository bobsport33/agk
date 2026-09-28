import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";

const sectionContent = [
	{
		label: "brief",
		body: `Cox needed more than a campaign. They needed a brand: new tagline, new voice and a new face to put it all together.`
	},
	{
		label: "approach",
		body: `"A Step Ahead" became the platform, and Iris became the proof of it. We didn't just create a spokesperson; we built a character whose whole existence embodied the idea. The "Who Is Iris" work gave her a world, a personality, and a reason to stick around.`
	},
	{
		label: "wins",
		body: `Brand scores went up. And Cox finally had something they hadn't had before: a spokesperson who connects, informs and inspires.`
	}
];
const sectionContent2 = [
	{
		label: "brief",
		body: `In 2021, Cox Communications entered the mobile market from scratch. No product awareness, no category presence. Just a brief and a deadline.`
	},
	{
		label: "approach",
		body: `We built the launch from the ground up, from TV and digital to a Super Bowl LVII launch. I was there from the start helping guide the brand, but my main focus was .COM: translating a new brand voice into a site that could do real work: explain a new product, earn trust and convert a skeptical audience who already had a carrier.`
	},
	{
		label: "wins",
		body: `Cox Mobile launched with a fully realized brand presence and a web presence that made the case clearly enough to move people. A new product in a crowded category--introduced like they'd always been there.`
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
		src: "/assets/cox/cox-video.mp4",
		poster: "/assets/cox/cox-bilboard.webp"
	}

	// {
	// 	type: "video",
	// 	src: "https://www.youtube.com/watch?v=65OVFamsypA&t=2s",
	// 	alt: "Rider"
	// }
];
const media2: {
	type: "image" | "video" | "youtube";
	src: string;
	alt?: string;
	poster?: string;
	shape?: "landscape";
	position?: "top-left";
}[] = [
	{
		type: "image",
		src: "/assets/cox/cox-lamb.webp",
		alt: "Cox Mobile campaign",
		shape: "landscape",
		position: "top-left"
	},
	{
		type: "youtube",
		src: "https://www.youtube.com/watch?v=65OVFamsypA&t=2s",
		alt: "Rider",
		shape: "landscape"
	},
	{
		type: "video",
		src: "/assets/cox/cox-video-2.mp4",
		poster: "/assets/cox/cox-lamb.webp",
		shape: "landscape"
	}
];

const CoxCommunications = () => {
	return (
		<ProjectPage>
			<PageTitle title="Cox Communications" />
			<NumberedContentSection
				title={"'A Step Ahead' Brand Evolution"}
				content={sectionContent}
				images={[
					{
						src: "/assets/cox/cox-bilboard.webp",
						alt: "Cox billboard",
						fit: "contain"
					},
					{ src: "/assets/cox/Cox_edited.webp", alt: "Cox connected home experience" },
					{ src: "/assets/cox/IMG_186C83E7901C-1_edited.webp", alt: "Cox connected home interface" }
				]}
			/>
			<MediaGrid media={media} />
			<NumberedContentSection
				title="Cox Mobile: Brand Launch"
				content={sectionContent2}
			/>
			<MediaGrid media={media2} columns={3} />
		</ProjectPage>
	);
};

export default CoxCommunications;
