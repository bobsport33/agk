export interface PortfolioProject {
	id: string;
	client: string;
	href: string;
	imageUrl: string;
	alt: string;
	placement: { colStart: number; colEnd: number; rowStart: number; rowEnd: number };
	objectFit?: "cover" | "contain";
	objectPosition?: string;
}

export const projects: PortfolioProject[] = [
	{ id: "harley-davidson", client: "Harley Davidson", href: "/creative-work/harley-davidson", imageUrl: "/assets/HD-logo-folio 2.webp", alt: "Harley Davidson", placement: { colStart: 1, colEnd: 5, rowStart: 1, rowEnd: 4 } },
	{ id: "city-of-chicago", client: "City of Chicago", href: "/creative-work/city-of-chicago", imageUrl: "/assets/chi-logo-folio-1.webp", alt: "City of Chicago", placement: { colStart: 8, colEnd: 13, rowStart: 1, rowEnd: 5 } },
	{ id: "cox-communications", client: "Cox Communications", href: "/creative-work/cox-communications", imageUrl: "/assets/cox-logo-folio-1.webp", alt: "Cox Communications", placement: { colStart: 5, colEnd: 8, rowStart: 1, rowEnd: 5 } },
	{ id: "thunder-valley", client: "Thunder Valley", href: "/creative-work/thunder-valley", imageUrl: "/assets/TVCR cover photo logo.webp", alt: "Thunder Valley", placement: { colStart: 5, colEnd: 8, rowStart: 5, rowEnd: 8 } },
	{ id: "recent-web-projects", client: "Recent Web Projects", href: "/creative-work/recent-web-projects", imageUrl: "/assets/Capture.webp", alt: "Recent Web Projects", placement: { colStart: 8, colEnd: 13, rowStart: 5, rowEnd: 8 } },
	{ id: "converse", client: "Converse", href: "/creative-work/converse", imageUrl: "/assets/converseLogo.avif", alt: "Converse", placement: { colStart: 1, colEnd: 5, rowStart: 4, rowEnd: 8 } }
];
