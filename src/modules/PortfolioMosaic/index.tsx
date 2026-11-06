import styled from "@emotion/styled";
import DisplayCard from "@/modules/DisplayCard/Index";
import { projects } from "@/data/projects";
import { media } from "@/styles/breakpoints";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	grid-template-rows: repeat(7, minmax(0, 1fr));
	gap: var(--grid-gap);
	width: min(100%, 1420px);
	 aspect-ratio: 1.85;
	margin: 0 auto;

	${media.tablet} { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; grid-auto-rows: auto; gap: var(--grid-gap); aspect-ratio: auto; }
	${media.mobile} { grid-template-columns: 1fr; gap: var(--grid-gap); }
`;

const Item = styled.div<{ placement: (typeof projects)[number]["placement"] }>`
	grid-column: ${({ placement }) => `${placement.colStart} / ${placement.colEnd}`};
	grid-row: ${({ placement }) => `${placement.rowStart} / ${placement.rowEnd}`};
	${media.tablet} { grid-column: auto; grid-row: auto; aspect-ratio: 1; }
`;

export default function PortfolioMosaic() {
	return <div className="container"><Grid aria-label="Selected creative work">
		{projects.map((project, index) => <Item key={project.id} placement={project.placement}>
			<DisplayCard client={project.client} imageUrl={project.imageUrl} imageAlt={project.alt} link={project.href} priority={index < 3} objectFit={project.objectFit} objectPosition={project.objectPosition} />
		</Item>)}
	</Grid></div>;
}
