import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import ProjectFooter from "@/components/projectComponents/ProjectFooter/Index";

interface PageProps {
	children: ReactNode;
}

const Page = styled("section")`
	--project-section-gap: clamp(1.5rem, 3vw, 2.75rem);

	display: flex;
	flex-direction: column;
	gap: var(--project-section-gap);
	max-width: 1420px;
	margin: 20px auto 56px;

	> .project-numbered-content--featured + .project-media-grid {
		margin-top: calc(0.75rem - var(--project-section-gap));
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
