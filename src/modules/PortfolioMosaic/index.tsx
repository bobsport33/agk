import styled from "@emotion/styled";
import DisplayCard from "@/modules/DisplayCard/Index";
import { projects } from "@/data/projects";
import { media } from "@/styles/breakpoints";
import { PortfolioContainer } from "@/modules/portfolio/shared";

const MosaicContainer = styled(PortfolioContainer)`
	container-type: inline-size;
`;

const Grid = styled.div`
	--mosaic-gap: 20px;
	--mosaic-column: calc((100cqw - var(--mosaic-gap) * 2) / 3);
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	/* The middle two tracks reserve one square for TIME; the outer tracks share the remainder. */
	grid-template-rows: minmax(0, 1fr) repeat(2, calc((var(--mosaic-column) - var(--mosaic-gap)) / 2)) minmax(0, 1fr);
	gap: var(--mosaic-gap);
	height: clamp(800px, calc(64cqw + 64px), 960px);

	${media.tablet} { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; grid-auto-rows: auto; height: auto; }
	${media.mobile} { grid-template-columns: 1fr; gap: 20px; }
`;

const Item = styled.div<{ placement: (typeof projects)[number]["placement"] }>`
	min-width: 0;
	min-height: 0;
	grid-column: ${({ placement }) => `${placement.colStart} / ${placement.colEnd}`};
	grid-row: ${({ placement }) => `${placement.rowStart} / ${placement.rowEnd}`};
	${media.tablet} { grid-column: auto; grid-row: auto; aspect-ratio: 1; &:last-child { grid-column: 1 / -1; aspect-ratio: 2.2; } }
	${media.mobile} { &:last-child { grid-column: auto; aspect-ratio: 1; } }
`;

export default function PortfolioMosaic() {
	return <MosaicContainer><Grid className="portfolio-mosaic" aria-label="Selected creative portfolio">
		{projects.map((project, index) => <Item key={project.id} placement={project.placement}>
			<DisplayCard project={project} priority={index < 3} />
		</Item>)}
	</Grid></MosaicContainer>;
}
