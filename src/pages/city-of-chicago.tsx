import React from "react";
import MediaGrid from "@/components/projectComponents/MediaGrid/Index";
import NumberedContentSection from "@/components/projectComponents/NumberedContentSection/Index";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";

const sectionContent = [
	{
		label: "brief",
		body: `It's March 2020. Chicago is scared, and the city needs people to listen. The mask-on message had to cut through fear and division and actually move people to act.`
	},
	{
		label: "approach",
		body: `Chicago has always united around its teams, even when those teams don't agree on much. We borrowed that instinct and turned it into a public health rallying cry: mask up, social distance, play for each other.`
	},
	{
		label: "wins",
		body: `The campaign reached over 2 million Chicagoans. The city earned the title of best-masked city in the country and COVID-19 rates dropped; which, for a public health campaign like this, are the only stats that matter.`
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
		src: "/assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_23.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_25.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_08.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_05.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_27.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_33.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_30.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_32.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/lori waaoht.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_04.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_34.jpg"
	},
	{
		type: "image",
		src: "assets/chicago/-OneHomeTeam_BeSafeCHI_COVID-19_July15_Page_20.jpg"
	}
];

const CityOfChicago = () => {
	return (
		<ProjectPage>
			<PageTitle title="City of Chicago" />
			<NumberedContentSection
				title="One Home Team"
				content={sectionContent}
			/>
			<MediaGrid media={media} />
		</ProjectPage>
	);
};

export default CityOfChicago;
