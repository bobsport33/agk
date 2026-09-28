import Head from "next/head";
import styled from "@emotion/styled";
import DisplayCards from "@/modules/DisplayCard/Index";
import { media } from "@/styles/breakpoints";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	grid-template-rows: repeat(7, minmax(0, 1fr));
	gap: clamp(0.875rem, 1.4vw, 1.25rem);
	width: min(100%, calc((100vh - 125px) * 1.732));
	max-width: 1420px;
	aspect-ratio: 1.732;
	margin: 30px auto 18px;

	${media.tablet} {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: none;
		grid-auto-rows: auto;
		gap: 1.25rem;
		width: 100%;
		aspect-ratio: auto;
		margin-top: 24px;
		margin-bottom: 80px;
	}

	${media.mobile} {
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-top: 18px;
		margin-bottom: 48px;
	}
`;

const GridItem = styled.div<{
	colStart: number;
	colEnd: number;
	rowStart: number;
	rowEnd: number;
}>`
	grid-column: ${({ colStart, colEnd }) => `${colStart} / ${colEnd}`};

	grid-row: ${({ rowStart, rowEnd }) => `${rowStart} / ${rowEnd}`};

	${media.tablet} {
		grid-column: auto;
		grid-row: auto;
		aspect-ratio: 1;
	}
`;

export default function Home() {
	const cards = [
		{
			client: "Harley Davidson",
			link: "/harley-davidson",
			imageUrl: "/assets/HD-logo-folio 2.webp",
			colStart: 1,
			colEnd: 5,
			rowStart: 1,
			rowEnd: 4
		},
		{
			client: "City of Chicago",
			link: "/city-of-chicago",
			imageUrl: "/assets/chi-logo-folio-1.webp",
			colStart: 8,
			colEnd: 13,
			rowStart: 1,
			rowEnd: 5
		},
		{
			client: "Cox Communications",
			link: "/cox-communications",
			imageUrl: "/assets/cox-logo-folio-1.webp",
			colStart: 5,
			colEnd: 8,
			rowStart: 1,
			rowEnd: 5
		},
		{
			client: "Thunder Valley",
			link: "/thunder-valley",
			imageUrl: "/assets/TVCR cover photo logo.webp",
			colStart: 5,
			colEnd: 8,
			rowStart: 5,
			rowEnd: 8
		},
		{
			client: "Recent Web Projects",
			link: "/recent-web-projects",
			imageUrl: "/assets/Capture.webp",
			colStart: 8,
			colEnd: 13,
			rowStart: 5,
			rowEnd: 8
		},
		{
			client: "Converse",
			link: "/converse",
			imageUrl: "/assets/converseLogo.avif",
			colStart: 1,
			colEnd: 5,
			rowStart: 4,
			rowEnd: 8
		}
	];

	return (
		<>
			{/* Page specific SEO */}
			<Head>
				<title>Anastasia Guletsky Kelly</title>
				<meta
					name="description"
					content="Anastasia is a creative director specializing in brand strategy, visual storytelling, and design leadership. Explore selected work, creative direction, and collaborations."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Grid>
					{cards.map((card, index) => (
						<GridItem
							key={card.client}
							colStart={card.colStart}
							colEnd={card.colEnd}
							rowStart={card.rowStart}
							rowEnd={card.rowEnd}
						>
							<DisplayCards
								client={card.client}
								link={card.link}
								imageUrl={card.imageUrl}
								priority={index < 3}
							/>
						</GridItem>
					))}
				</Grid>
			</main>
		</>
	);
}
