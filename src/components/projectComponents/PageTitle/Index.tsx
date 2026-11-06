import React from "react";
import styled from "@emotion/styled";
import { media } from "@/styles/breakpoints";

interface PageTitleProps {
	title: string;
	subtitle?: string;
	children?: React.ReactNode;
}

const PageTitleStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 100%;
	overflow-wrap: anywhere;
	hyphens: auto;

	gap: 0.9rem;
	margin: clamp(1.5rem, 3vw, 3rem) 0 0;

	.page-title {
		&__slot {
			display: flex;
			gap: 0.75rem;
			flex-wrap: wrap;
			justify-content: center;
		}

		&__title {
			margin: 0;

			font-family: var(--font-display);
			font-size: var(--font-size-project-title);
			font-weight: var(--weight-display);
			letter-spacing: 0;
			line-height: 1.1;

			color: var(--text-heading, var(--color-ink, #1a1a1a));

			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__title::after {
			content: "";
			width: clamp(6rem, 16vw, 11rem);
			height: 3px;
			margin-top: 0.65rem;

			background: var(--border-strong, currentColor);
		}

		&__subtitle {
			margin: 0;

			font-size: var(--font-size-body);
			font-weight: var(--weight-body);
			line-height: 1.7;
			color: var(--text-muted, #514b46);

			max-width: 65ch;
		}
	}

	${media.tablet} {
		margin-top: 1.5rem;

		.page-title__title { font-size: var(--font-size-project-title); }
	}

	${media.mobile} {
		gap: 0.75rem;
		margin-top: 1rem;

		.page-title {
			&__title {
				font-size: var(--font-size-project-title);
				line-height: var(--leading-heading);
			}

			&__subtitle {
				font-size: var(--font-size-body);
				line-height: var(--leading-body);
			}
		}
	}
`;

export default function PageTitle({
	title,
	subtitle,
	children
}: PageTitleProps) {
	return (
		<PageTitleStyled>
			{children && <div className="page-title__slot">{children}</div>}

			<h1 className="page-title__title">{title}</h1>

			{subtitle && <p className="page-title__subtitle">{subtitle}</p>}
		</PageTitleStyled>
	);
}
