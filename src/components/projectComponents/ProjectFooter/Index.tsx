import NextLink from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { media } from "@/styles/breakpoints";

const projectOrder = [
	{ href: "/creative-work/harley-davidson", name: "Harley-Davidson" },
	{ href: "/creative-work/city-of-chicago", name: "City of Chicago" },
	{ href: "/creative-work/cox-communications", name: "Cox Communications" },
	{ href: "/creative-work/converse", name: "Converse" },
	{ href: "/creative-work/thunder-valley", name: "Thunder Valley" },
	{ href: "/creative-work/recent-web-projects", name: "Recent Web Projects" }
];

const Footer = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	padding-top: 1.5rem;
	border-top: 1px solid var(--border-subtle, #1a1a1a33);

	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		min-height: 46px;
		padding: 0.75rem 1.1rem;
		border: 1px solid var(--border-subtle, #1a1a1a33);
		border-radius: 999px;
		background: transparent;
		font-size: var(--font-size-small);
		font-weight: var(--weight-medium);
		letter-spacing: 0.08em;
		transition: background 160ms ease, border-color 160ms ease;

		&:hover,
		&:focus-visible {
			background: var(--surface-reading, #f0e7dc);
			border-color: var(--color-coral-hover, #e58d68);
		}

		&:focus-visible {
		outline: var(--focus-width) solid var(--focus-color);
			outline-offset: 3px;
		}
	}

	${media.mobile} {
		flex-direction: column;

		a {
			width: 100%;
			padding-inline: 0.85rem;
		}
	}
`;

export default function ProjectFooter() {
	const { pathname } = useRouter();
	const currentIndex = projectOrder.findIndex((project) => project.href === pathname);
	const nextProject = projectOrder[(currentIndex + 1) % projectOrder.length];

	if (currentIndex === -1) {
		return null;
	}

	return (
		<Footer aria-label="Project navigation">
			<NextLink href="/creative-work">
				<span aria-hidden="true">←</span>
				Back to all projects
			</NextLink>
			<NextLink href={nextProject.href} aria-label={`Next project: ${nextProject.name}`}>
				{nextProject.name}
				<span aria-hidden="true">→</span>
			</NextLink>
		</Footer>
	);
}
