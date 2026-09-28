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

			font-size: clamp(2.25rem, 4vw, 3.75rem);
			font-weight: 800;
			letter-spacing: -0.03em;
			line-height: 1.04;

			color: var(--neutral-1000);

			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__title::after {
			content: "";
			width: clamp(6rem, 16vw, 11rem);
			height: 3px;
			margin-top: 0.65rem;

			border-radius: 999px;

			background: linear-gradient(
				to right,
				var(--primary-500),
				var(--secondary-500)
			);
		}

		&__subtitle {
			margin: 0;

			font-size: 1.05rem;
			line-height: 1.55;
			color: var(--neutral-700);

			max-width: 65ch;
		}
	}

	${media.tablet} {
		margin-top: 1.5rem;

		.page-title__title {
			font-size: clamp(2.1rem, 6vw, 3rem);
		}
	}

	${media.mobile} {
		gap: 0.75rem;
		margin-top: 1rem;

		.page-title {
			&__title {
				font-size: clamp(1.85rem, 9vw, 2.35rem);
				line-height: 1.08;
			}

			&__subtitle {
				font-size: 0.95rem;
				line-height: 1.5;
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
