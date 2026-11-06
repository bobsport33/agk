import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import ProjectFooter from "@/components/projectComponents/ProjectFooter/Index";
import { media } from "@/styles/breakpoints";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface PageProps {
	children: ReactNode;
}

const Page = styled("section")`
	--project-section-gap: var(--section-gap);

	display: flex;
	flex-direction: column;
	gap: var(--project-section-gap);
	width: min(100%, var(--content-max));
	margin: 20px auto 56px;
	padding-inline: var(--page-gutter);
	box-sizing: border-box;

	> .project-numbered-content--featured + .project-media-grid {
		margin-top: calc(0.75rem - var(--project-section-gap));
	}

	${media.tablet} {
		margin-top: 12px;
		margin-bottom: 40px;
	}

	${media.mobile} {
		--project-section-gap: 1.5rem;
		margin-top: 8px;
		margin-bottom: 32px;
	}
`;

const ProjectPage = ({ children }: PageProps) => {
	const { pathname } = useRouter();
	const projectLabel = ({
		"/creative-work/harley-davidson": "Harley-Davidson",
		"/creative-work/city-of-chicago": "City of Chicago",
		"/creative-work/cox-communications": "Cox Communications",
		"/creative-work/converse": "Converse",
		"/creative-work/thunder-valley": "Thunder Valley",
		"/creative-work/recent-web-projects": "Recent Web Projects"
	} as Record<string, string>)[pathname] ?? "Project";
	return (
		<Page>
			<nav aria-label="Breadcrumb" style={{ fontSize: "var(--font-size-small, .875rem)" }}>
				<NextLink href="/">Home</NextLink> <span aria-hidden="true"> / </span>
				<NextLink href="/creative-work">Creative Work</NextLink> <span aria-hidden="true"> / </span>
				<span aria-current="page">{projectLabel}</span>
			</nav>
			{children}
			<ProjectFooter />
		</Page>
	);
};

export default ProjectPage;
