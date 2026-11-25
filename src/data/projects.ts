/** Grid lines for a tile: columns and rows are 1-based start/end lines. */
export interface TileArea { col: [number, number]; row: [number, number] }

export interface PortfolioProject {
	id: string;
	client: string;
	href: string;
	imageUrl?: string;
	alt: string;
	description: string;
	actionLabel?: string;
	external?: boolean;
	compact?: boolean;
	/** Bento placement: 12-column grid on desktop, 6-column grid on tablet. */
	layout: { desktop: TileArea; tablet: TileArea; mobileAspect: string };
	objectFit?: "cover" | "contain";
	objectPosition?: string;
	/** Inset for contained artwork, so small logos sit inside the tile instead of touching its edges. */
	imagePadding?: string;
	/** Tile background behind contained artwork. */
	background?: string;
}

/*
 * Desktop bento (12 columns × 9 rows):
 *   Harley   ▇▇▇▇▇ | TIME (short, wide) | Cox ▇▇▇
 *   Harley   ▇▇▇▇▇ | Web  ▇▇▇▇ | Cox ▇▇▇
 *   Chicago  ▇▇▇▇ | Thunder Valley ▇▇▇▇▇ | Converse ▇▇▇
 * Tile shapes follow the artwork: square photos get near-square tiles, the Cox phone a tall one,
 * the TIME photo a wide one, and the small Converse logo a contained tile on white.
 */
export const projects: PortfolioProject[] = [
	{ id: "harley-davidson", client: "Harley Davidson", href: "/creative-work/harley-davidson", imageUrl: "/assets/HD-logo-folio 2.webp", alt: "Harley Davidson", description: "Harley's 2024 lineup brought real innovation: new tech, new specs, 12+ bikes.", layout: { desktop: { col: [1, 6], row: [1, 6] }, tablet: { col: [1, 5], row: [1, 5] }, mobileAspect: "1" } },
	{ id: "time-magazine", client: "TIME Magazine", href: "https://time.com/branded-content/target/how-target-backs-growing-brands/", imageUrl: "/assets/time-target.jpg", alt: "TIME100 Creators event with Target", objectPosition: "55% 42%", compact: true, description: "Editorial · Copywriting · Branded Content", actionLabel: "Read article", external: true, layout: { desktop: { col: [6, 10], row: [1, 3] }, tablet: { col: [1, 4], row: [5, 7] }, mobileAspect: "3 / 2" } },
	{ id: "cox-communications", client: "Cox Communications", href: "/creative-work/cox-communications", imageUrl: "/assets/cox-logo-folio-1.webp", alt: "Cox Communications", description: "Cox needed more than a campaign. They needed a brand: new tagline, new voice and a new face to put it all together.", layout: { desktop: { col: [10, 13], row: [1, 6] }, tablet: { col: [5, 7], row: [1, 5] }, mobileAspect: "4 / 5" } },
	{ id: "recent-web-projects", client: "Recent Web Projects", href: "/creative-work/recent-web-projects", imageUrl: "/assets/Capture.webp", alt: "Recent Web Projects", description: "I've led many web projects and .COM teams from brief to launch.", layout: { desktop: { col: [6, 10], row: [3, 6] }, tablet: { col: [4, 7], row: [5, 7] }, mobileAspect: "3 / 2" } },
	{ id: "city-of-chicago", client: "City of Chicago", href: "/creative-work/city-of-chicago", imageUrl: "/assets/chi-logo-folio-1.webp", alt: "City of Chicago", description: "We borrowed that instinct and turned it into a public health rallying cry: mask up, social distance, play for each other.", layout: { desktop: { col: [1, 5], row: [6, 10] }, tablet: { col: [1, 4], row: [7, 10] }, mobileAspect: "1" } },
	{ id: "thunder-valley", client: "Thunder Valley", href: "/creative-work/thunder-valley", imageUrl: "/assets/TVCR cover photo logo.webp", alt: "Thunder Valley", description: '"Live Out Loud" reframed Thunder Valley as a destination for people who show up fully.', objectPosition: "50% 100%", layout: { desktop: { col: [5, 10], row: [6, 10] }, tablet: { col: [4, 7], row: [7, 10] }, mobileAspect: "1" } },
	{ id: "converse", client: "Converse", href: "/creative-work/converse", imageUrl: "/assets/converseLogo.webp", alt: "Converse", description: "The challenge: make it all sound like the same brand without making it all sound the same.", objectFit: "contain", imagePadding: "36px 28px", background: "#ffffff", layout: { desktop: { col: [10, 13], row: [6, 10] }, tablet: { col: [1, 7], row: [10, 12] }, mobileAspect: "3 / 2" } }
];
