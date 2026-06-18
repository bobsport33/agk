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
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.24.57 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-07-30 at 4.19.20 PM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.27.53 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-07-18 at 1.25.14 PM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-07-18 at 1.25.27 PM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.29.56 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.26.26 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.26.08 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.29.30 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.30.53 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.31.06 AM.png"
	},
	{
		type: "image",
		src: "/assets/converse/Screen Shot 2019-08-20 at 11.24.34 AM.png"
	}
];

const Converse = () => {
	return (
		<ProjectPage>
			<PageTitle title="Converse" />
			<NumberedContentSection
				title={"'A Step Ahead' Brand Evolution"}
				content={sectionContent}
				images={[
					{
						src: "/assets/converse/Screen Shot 2019-07-18 at 1.23.13 PM.png"
					}
				]}
			/>
			<MediaGrid media={media} />
		</ProjectPage>
	);
};

export default Converse;
