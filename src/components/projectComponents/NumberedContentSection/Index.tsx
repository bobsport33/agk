import React from "react";
import styled from "@emotion/styled";

interface SectionItem {
	label: string;
	body: string;
}

interface NumberedContentProps {
	title?: string;
	content: SectionItem[];
}

const NumberedContentStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.numbered-content {
		&__header {
			margin-bottom: 1rem;
		}

		&__title {
			margin: 0;
			font-size: clamp(1.75rem, 4vw, 3rem);
			font-weight: 700;
			line-height: 1.1;
			color: var(--neutral-1000);

			position: relative;
			display: inline-block;

			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -0.5rem;

				width: 3rem;
				height: 3px;

				border-radius: 999px;
				background: var(--primary-500);
			}
		}

		&__item {
			position: relative;

			display: grid;
			grid-template-columns: 90px 1fr;
			gap: 1.25rem;

			padding: 1.5rem 1.75rem;

			border-radius: 18px;

			background: linear-gradient(
				135deg,
				rgba(255, 255, 255, 0.75),
				rgba(255, 255, 255, 0.45)
			);

			border: 1px solid var(--neutral-300);

			box-shadow:
				0 4px 12px rgba(0, 0, 0, 0.03),
				0 1px 2px rgba(0, 0, 0, 0.04);

			overflow: hidden;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;

				width: 4px;
				height: 100%;

				background: linear-gradient(
					to bottom,
					var(--primary-500),
					var(--secondary-500)
				);
			}
		}

		&__number {
			font-size: clamp(2.75rem, 5vw, 4rem);
			font-weight: 800;
			line-height: 0.9;

			color: var(--primary-500);

			opacity: 0.9;
		}

		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
		}

		&__label {
			display: inline-flex;
			align-items: center;
			gap: 0.75rem;

			font-size: 0.7rem;
			font-weight: 700;

			text-transform: uppercase;
			letter-spacing: 0.18em;

			color: var(--secondary-700);

			&::after {
				content: "";
				width: 32px;
				height: 1px;
				background: var(--secondary-500);
			}
		}

		&__body {
			margin: 0;

			font-size: clamp(0.95rem, 1vw, 1.05rem);
			line-height: 1.65;

			color: var(--neutral-900);

			max-width: 65ch;
		}
	}

	@media (max-width: 768px) {
		.numbered-content {
			&__header {
				margin-bottom: 0.75rem;
			}

			&__item {
				grid-template-columns: 1fr;
				gap: 0.75rem;

				padding: 1.25rem;
			}

			&__number {
				font-size: 3rem;
			}

			&__body {
				max-width: 100%;
			}
		}
	}
`;

export default function NumberedContent({
	title,
	content
}: NumberedContentProps) {
	return (
		<NumberedContentStyled>
			{title && (
				<header className="numbered-content__header">
					<h2 className="numbered-content__title">{title}</h2>
				</header>
			)}

			{content.map((item, index) => (
				<div
					key={`${item.label}-${index}`}
					className="numbered-content__item"
				>
					<div className="numbered-content__number">
						{String(index + 1).padStart(2, "0")}
					</div>

					<div className="numbered-content__content">
						<div className="numbered-content__label">
							{item.label}
						</div>

						<p className="numbered-content__body">{item.body}</p>
					</div>
				</div>
			))}
		</NumberedContentStyled>
	);
}
