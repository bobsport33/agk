import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import ProjectPage from "@/components/projectComponents/ProjectPage/Index";
import PageTitle from "@/components/projectComponents/PageTitle/Index";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";
import { media } from "@/styles/breakpoints";

const ProjectList = styled.section`
	display: flex;
	flex-direction: column;
	border-top: 1px solid var(--neutral-400);

	.web-project {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: center;
		padding: clamp(1.75rem, 3.5vw, 3.25rem) 0;
		border-bottom: 1px solid var(--neutral-400);

		&:nth-of-type(even) {
			grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
		}

		&:nth-of-type(even) .web-project__media {
			order: 2;
		}

		&__media {
			position: relative;
			aspect-ratio: 16 / 10;
			border-radius: var(--media-radius);
			overflow: hidden;
			background: var(--neutral-200);
			border: 1px solid var(--neutral-300);
		}

		&__image {
			object-fit: contain;
			padding: 0.75rem;
		}

		&__title {
			margin-bottom: 1rem;
			font-size: clamp(1.55rem, 2.75vw, 2.4rem);
			line-height: 1.05;
			color: var(--neutral-1000);
		}

		&__body {
			font-size: 1rem;
			line-height: 1.75;
			color: var(--neutral-900);
		}

		&__credit {
			margin-top: 1rem;
			font-size: 0.85rem;
			line-height: 1.6;
			color: var(--neutral-700);
		}
	}

	${media.tablet} {
		.web-project,
		.web-project:nth-of-type(even) {
			grid-template-columns: 1fr;
		}

		.web-project:nth-of-type(even) .web-project__media {
			order: 0;
		}
	}

	${media.mobile} {
		.web-project {
			gap: 1.25rem;
			padding: 1.5rem 0;

			&__media {
				aspect-ratio: 4 / 3;
			}

			&__title {
				margin-bottom: 0.75rem;
				font-size: 1.5rem;
			}

			&__body {
				line-height: 1.65;
			}
		}
	}
`;

const projects = [
	{
		name: "Nicklaus Children's Hospital",
		image: "/assets/whats-new-hero_2x.webp",
		body: "The families who look into Miami-based Nicklaus Children’s Hospital are usually up against some tough health circumstances, so our goal was to make their web experience as warm and comforting as possible. We redeveloped their UX story, lightened the copy and wrapped it all up in playful interaction design. (Rise Interactive, 2019)",
		credit: "Designer: Jon Larsen",
		award: "Award: 2020 Internet Advertising Competition Winner"
	},
	{
		name: "National Dairy Council",
		image: "/assets/dairy/dairygood homepage.webp",
		body: "Big ideas for big dairy. Start to finish UX and creative for U.S. Dairy Checkoff homepage and campaign landing pages (Rise Interactive, 2017-2019)",
		credit: "Designer: Deanna Devlin"
	},
	{
		name: "Michaels",
		image: "/assets/michaels/Screen Shot 2019-01-31 at 2.02.58 PM.webp",
		body: "Inspiring everyday creativity, one campaign at a time. Managed day-to-day social and video ads for Michaels Crafts, and launched the Michaels Weddings web experience. (Rise Interactive, 2017-2019)",
		credit: "Designer: Deanna Devlin"
	},
	{
		name: "Cox Communications",
		image: "/assets/cox/Cox.webp",
		body: "It’s not just writing about internet packages—it’s helping people stay connected to what matters (especially during a pandemic). I write copy and create page storylines for all sorts of education, sales and campaign webpages on Cox.com. (FCB Chicago, 2019 - 2026)",
		credit: "Designers: Ben Ludwig, Peter DeGuzman, Daniel Eggert"
	}
];

const RecentWebProjects = () => {
	return (
		<ProjectPage>
			<PageTitle
				title="Websites, content strategy & digital experience"
				subtitle="I've led many web projects and .COM teams from brief to launch. This includes writing the copy, wireframing the story, partnering with UX and UI and never losing sight of what the page actually needs to do: spark action or education."
			/>
			<ProjectList>
				{projects.map((project, index) => (
					<article className="web-project" key={project.name}>
						<div className="web-project__media">
							<ImageLightbox src={project.image} alt={project.name}>
								<Image
									className="web-project__image"
									src={project.image}
									alt={project.name}
									fill
									priority={index === 0}
									sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) calc(100vw - 48px), 58vw"
								/>
							</ImageLightbox>
						</div>
						<div>
							<h2 className="web-project__title">{project.name}</h2>
							<p className="web-project__body">{project.body}</p>
							<p className="web-project__credit">{project.credit}</p>
							{project.award && <p className="web-project__credit">{project.award}</p>}
						</div>
					</article>
				))}
			</ProjectList>
		</ProjectPage>
	);
};

export default RecentWebProjects;
