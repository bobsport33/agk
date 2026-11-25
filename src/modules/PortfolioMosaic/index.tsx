import styled from "@emotion/styled";
import DisplayCard from "@/modules/DisplayCard/Index";
import { projects, type PortfolioProject } from "@/data/projects";
import { media } from "@/styles/breakpoints";
import { PortfolioContainer } from "@/modules/portfolio/shared";

const MosaicContainer = styled(PortfolioContainer)`
	container-type: inline-size;
`;

/*
 * Bento grid: tiles span different numbers of columns and rows, so their shapes vary.
 * Row height is tied to column width, which keeps every tile's aspect ratio stable as the page resizes.
 */
const Grid = styled.div`
	--mosaic-gap: 20px;
	--mosaic-cols: 12;
	--mosaic-row: calc((100cqw - var(--mosaic-gap) * (var(--mosaic-cols) - 1)) / var(--mosaic-cols) * .88);
	display: grid;
	grid-template-columns: repeat(var(--mosaic-cols), minmax(0, 1fr));
	grid-auto-rows: var(--mosaic-row);
	gap: var(--mosaic-gap);

	${media.tablet} { --mosaic-gap: 16px; --mosaic-cols: 6; --mosaic-row: calc((100cqw - var(--mosaic-gap) * 5) / 6 * .9); }
	${media.mobile} { grid-template-columns: 1fr; grid-auto-rows: auto; }
`;

const Item = styled("div", { shouldForwardProp: (prop) => prop !== "layout" })<{ layout: PortfolioProject["layout"] }>`
	min-width: 0;
	min-height: 0;
	grid-column: ${({ layout }) => layout.desktop.col.join(" / ")};
	grid-row: ${({ layout }) => layout.desktop.row.join(" / ")};
	${media.tablet} {
		grid-column: ${({ layout }) => layout.tablet.col.join(" / ")};
		grid-row: ${({ layout }) => layout.tablet.row.join(" / ")};
	}
	${media.mobile} { grid-column: auto; grid-row: auto; aspect-ratio: ${({ layout }) => layout.mobileAspect}; }
`;

export default function PortfolioMosaic() {
	return <MosaicContainer><Grid className="portfolio-mosaic" aria-label="Selected creative portfolio">
		{projects.map((project, index) => <Item key={project.id} layout={project.layout}>
			<DisplayCard project={project} priority={index < 3} />
		</Item>)}
	</Grid></MosaicContainer>;
}
