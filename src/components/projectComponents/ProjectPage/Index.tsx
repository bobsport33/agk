import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import ProjectFooter from "@/components/projectComponents/ProjectFooter/Index";
import { media } from "@/styles/breakpoints";

interface PageProps {
	children: ReactNode;
}

const Page = styled("section")`
	--project-section-gap: var(--section-gap);

	display: flex;
	flex-direction: column;
	gap: var(--project-section-gap);
	max-width: var(--content-max);
	margin: 20px auto 56px;

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
	return (
		<Page>
			{children}
			<ProjectFooter />
		</Page>
	);
};

export default ProjectPage;
