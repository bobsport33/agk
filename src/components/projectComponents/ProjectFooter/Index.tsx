import NextLink from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const projectOrder = [
	{ href: "/harley-davidson", name: "Harley-Davidson" },
	{ href: "/city-of-chicago", name: "City of Chicago" },
	{ href: "/cox-communications", name: "Cox Communications" },
	{ href: "/converse", name: "Converse" },
	{ href: "/thunder-valley", name: "Thunder Valley" },
	{ href: "/recent-web-projects", name: "Recent Web Projects" }
];

const Footer = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	padding-top: 1.5rem;
	border-top: 1px solid var(--neutral-400);

	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		min-height: 46px;
		padding: 0.75rem 1.1rem;
		border: 1px solid var(--neutral-400);
		border-radius: 999px;
		background: transparent;
		font-size: 0.9rem;
		font-weight: 700;
		transition: background 160ms ease, border-color 160ms ease;

		&:hover,
		&:focus-visible {
			background: var(--neutral-200);
			border-color: var(--primary-400);
		}

		&:focus-visible {
			outline: 2px solid var(--secondary-500);
			outline-offset: 3px;
		}
	}

	@media (max-width: 480px) {
		a {
			flex: 1;
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
			<NextLink href="/">
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
