import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface PageProps {
	children: ReactNode;
}

const Page = styled("section")`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ProjectPage = ({ children }: PageProps) => {
	return <Page>{children}</Page>;
};

export default ProjectPage;
