import React from "react";
import styled from "@emotion/styled";

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

	gap: 0.75rem;
	margin-bottom: 3rem;

	.page-title {
		&__slot {
			display: flex;
			gap: 0.75rem;
			flex-wrap: wrap;
			justify-content: center;
		}

		&__title {
			margin: 0;

			font-size: clamp(2.5rem, 5vw, 4rem);
			font-weight: 800;
			letter-spacing: -0.03em;
			line-height: 1.05;

			color: var(--neutral-1000);

			display: inline-block;
			position: relative;
		}

		/* 🔥 underline that matches TEXT width */
		&__title::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.5rem;

			width: 100%;
			height: 4px;

			border-radius: 999px;

			background: linear-gradient(
				to right,
				var(--primary-500),
				var(--secondary-500)
			);
		}

		&__subtitle {
			margin: 0;

			font-size: 1.15rem;
			line-height: 1.6;
			color: var(--neutral-700);

			max-width: 65ch;
		}
	}

	@media (max-width: 768px) {
		.page-title {
			&__title {
				font-size: 2.2rem;
			}

			&__subtitle {
				font-size: 1rem;
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
