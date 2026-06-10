import React from "react";
import styled from "@emotion/styled";

interface SectionContent {
	label: string;
	body: string;
}

interface NumberedContentSectionProps {
	title?: string;
	subtitle?: string;
	sectionContent: SectionContent[];
}

const NumberedContentSectionStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.numbered-content-section__header {
		margin-bottom: 1rem;
	}

	.numbered-content-section__title {
		font-size: clamp(2.5rem, 5vw, 4.5rem);
		font-weight: 900;
		line-height: 1.05;
		letter-spacing: -0.04em;
		color: var(--neutral-1000);
	}

	.numbered-content-section__subtitle {
		font-size: 1.1rem;
		font-style: italic;
		font-weight: 500;
		color: var(--primary-600);
		margin-top: 0.5rem;
	}

	/* Section card */
	.numbered-content-section__section {
		display: grid;
		grid-template-columns: 140px 1fr;
		align-items: start;
		background: var(--neutral-100);
		border-radius: 24px;
		border-left: 8px solid var(--primary-500);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		overflow: hidden;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
		}

		/* Alternate border colors per card */
		&:nth-of-type(2) {
			border-left-color: var(--secondary-500);

			.numbered-content-section__number {
				color: var(--secondary-500);
			}

			.numbered-content-section__label {
				color: var(--secondary-700);
			}
		}

		&:nth-of-type(3) {
			border-left-color: var(--accent-500);

			.numbered-content-section__number {
				color: var(--accent-500);
			}

			.numbered-content-section__label {
				color: var(--accent-700);
			}
		}

		&:nth-of-type(4) {
			border-left-color: var(--primary-700);

			.numbered-content-section__number {
				color: var(--primary-700);
			}

			.numbered-content-section__label {
				color: var(--primary-800);
			}
		}
	}

	/* Left panel */
	.numbered-content-section__left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 0.25rem;
		padding: 2rem 1.5rem;
		height: 100%;
		border-right: 1px solid var(--neutral-300);
	}

	.numbered-content-section__number {
		font-size: clamp(2.5rem, 4vw, 3.5rem);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -0.04em;
		color: var(--primary-500);
	}

	.numbered-content-section__label {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--primary-700);
	}

	/* Right panel */
	.numbered-content-section__right {
		padding: 2rem;
	}

	.numbered-content-section__body {
		font-size: 1rem;
		line-height: 1.85;
		color: var(--neutral-900);
	}

	@media (max-width: 768px) {
		.numbered-content-section__section {
			grid-template-columns: 1fr;
		}

		.numbered-content-section__left {
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			border-right: none;
			border-bottom: 1px solid var(--neutral-300);
			padding: 1.25rem 1.5rem;
		}
	}
`;

const NumberedContentSection: React.FC<NumberedContentSectionProps> = ({
	title,
	subtitle,
	sectionContent = []
}) => {
	return (
		<NumberedContentSectionStyled>
			<div className="numbered-content-section__header">
				{title && (
					<h1 className="numbered-content-section__title">{title}</h1>
				)}
				{subtitle && (
					<p className="numbered-content-section__subtitle">
						{subtitle}
					</p>
				)}
			</div>

			{sectionContent.map((section, i) => (
				<div key={i} className="numbered-content-section__section">
					<div className="numbered-content-section__left">
						<span className="numbered-content-section__number">
							{String(i + 1).padStart(2, "0")}
						</span>
						<span className="numbered-content-section__label">
							{section.label}
						</span>
					</div>
					<div className="numbered-content-section__right">
						<p className="numbered-content-section__body">
							{section.body}
						</p>
					</div>
				</div>
			))}
		</NumberedContentSectionStyled>
	);
};

export default NumberedContentSection;
