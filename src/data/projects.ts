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
	placement: { colStart: number; colEnd: number; rowStart: number; rowEnd: number };
	objectFit?: "cover" | "contain";
	objectPosition?: string;
}

export const projects: PortfolioProject[] = [
	{ id: "harley-davidson", client: "Harley Davidson", href: "/creative-work/harley-davidson", imageUrl: "/assets/HD-logo-folio 2.webp", alt: "Harley Davidson", description: "Harley's 2024 lineup brought real innovation: new tech, new specs, 12+ bikes.", placement: { colStart: 1, colEnd: 2, rowStart: 1, rowEnd: 3 } },
	{ id: "cox-communications", client: "Cox Communications", href: "/creative-work/cox-communications", imageUrl: "/assets/cox-logo-folio-1.webp", alt: "Cox Communications", description: "Cox needed more than a campaign. They needed a brand: new tagline, new voice and a new face to put it all together.", compact: true, placement: { colStart: 2, colEnd: 3, rowStart: 1, rowEnd: 2 } },
	{ id: "city-of-chicago", client: "City of Chicago", href: "/creative-work/city-of-chicago", imageUrl: "/assets/chi-logo-folio-1.webp", alt: "City of Chicago", description: "We borrowed that instinct and turned it into a public health rallying cry: mask up, social distance, play for each other.", placement: { colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 3 } },
	// Square artwork is pending; keep the existing article destination and service labels.
	{ id: "time-magazine", client: "TIME Magazine", href: "https://time.com/branded-content/target/how-target-backs-growing-brands/", alt: "TIME Magazine", description: "Editorial · Copywriting · Branded Content", actionLabel: "Read article", external: true, placement: { colStart: 2, colEnd: 3, rowStart: 2, rowEnd: 4 } },
	{ id: "converse", client: "Converse", href: "/creative-work/converse", imageUrl: "/assets/converseLogo.avif", alt: "Converse", description: "The challenge: make it all sound like the same brand without making it all sound the same.", placement: { colStart: 1, colEnd: 2, rowStart: 3, rowEnd: 5 } },
	{ id: "thunder-valley", client: "Thunder Valley", href: "/creative-work/thunder-valley", imageUrl: "/assets/TVCR cover photo logo.webp", alt: "Thunder Valley", description: '"Live Out Loud" reframed Thunder Valley as a destination for people who show up fully.', placement: { colStart: 3, colEnd: 4, rowStart: 3, rowEnd: 5 } },
	{ id: "recent-web-projects", client: "Recent Web Projects", href: "/creative-work/recent-web-projects", imageUrl: "/assets/Capture.webp", alt: "Recent Web Projects", description: "I've led many web projects and .COM teams from brief to launch.", compact: true, placement: { colStart: 2, colEnd: 3, rowStart: 4, rowEnd: 5 } }
];
