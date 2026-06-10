import Head from "next/head";
import styled from "@emotion/styled";
import DisplayCards from "@/modules/DisplayCard/Index";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	grid-auto-rows: 100px;
	gap: 1.25rem;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-auto-rows: 280px;
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

	@media (max-width: 900px) {
		grid-column: auto;
		grid-row: auto;
	}
`;

export default function Home() {
	const cards = [
		{
			client: "Harley Davidson",
			link: "/harley-davidson",
			imageUrl: "/assets/HD-logo-folio 2.png",
			colStart: 1,
			colEnd: 5,
			rowStart: 1,
			rowEnd: 4
		},
		{
			client: "City of Chicago",
			link: "/city-of-chicago",
			imageUrl: "/assets/chi-logo-folio-1.png",
			colStart: 8,
			colEnd: 13,
			rowStart: 1,
			rowEnd: 6
		},
		{
			client: "Cox Communications",
			link: "/cox-communications",
			imageUrl: "/assets/cox-logo-folio-1.png",
			colStart: 5,
			colEnd: 8,
			rowStart: 1,
			rowEnd: 5
		},
		{
			client: "Thunder Valley",
			link: "/assets/thunder-valley",
			imageUrl: "/assets/TVCR cover photo logo.png",
			colStart: 5,
			colEnd: 8,
			rowStart: 5,
			rowEnd: 8
		},
		{
			client: "Recent Web Projects",
			link: "/recent-web-projects",
			imageUrl: "/assets/Capture.png",
			colStart: 8,
			colEnd: 13,
			rowStart: 6,
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
					{cards.map((card) => (
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
							/>
						</GridItem>
					))}
				</Grid>
			</main>
		</>
	);
}
