/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "@/components/projectComponents/FeaturedMedia/Index";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";

interface SectionItem {
	label: string;
	body: string;
}

interface ImageItem {
	src: string;
	alt?: string;
	fit?: "cover" | "contain";
	background?: string;
}

interface NumberedContentProps {
	title?: string;
	content: SectionItem[];
	images?: ImageItem[];
	reverse?: boolean;
}

const NumberedContentStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.35rem;
	align-items: stretch;

	.numbered-content {
		&__header {
			text-align: center;
		}

		&__title {
			margin: 0;
			font-size: clamp(1.6rem, 3vw, 2.35rem);
			font-weight: 700;
			line-height: 1.1;
			color: var(--neutral-1000);
			text-align: center;
		}

		&__container {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 1.25rem;

			&--reverse {
				flex-direction: column-reverse;
			}
		}

		&__content-container {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			width: 100%;
			border-top: 1px solid var(--neutral-400);
		}

		&__image-container,
		&__gallery {
			width: min(100%, 980px);
			margin: 0 auto;
		}

		&__image-container {
			max-width: 760px;
		}

		&__image {
			width: 100%;
			max-height: 600px;
			object-fit: contain;
			border-radius: var(--media-radius);
			display: block;
		}

		&__gallery {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 12px;
		}

		&__gallery-image {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;

			border-radius: var(--media-radius);

			border: 1px solid var(--neutral-300);

			box-shadow:
				0 4px 12px rgba(0, 0, 0, 0.03),
				0 1px 2px rgba(0, 0, 0, 0.04);
		}

		&__item {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			padding: clamp(1.25rem, 2.25vw, 2rem);
			border-bottom: 1px solid var(--neutral-400);
			border-right: 1px solid var(--neutral-400);
		}

		&__item:last-child {
			border-right: 0;
		}

		&__number {
			font-size: clamp(2rem, 3vw, 2.8rem);
			font-weight: 800;
			line-height: 0.9;

			color: var(--primary-500);

			opacity: 0.85;
		}

		&__content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
		}

		&__label {
			display: inline-block;
			font-size: 0.7rem;
			font-weight: 700;

			text-transform: uppercase;
			letter-spacing: 0.18em;

			color: var(--secondary-700);
		}

		&__body {
			margin: 0;

			font-size: clamp(1rem, 1.2vw, 1.12rem);
			line-height: 1.6;

			color: var(--neutral-900);

			max-width: 65ch;
		}
	}

	@media (max-width: 900px) {
		.numbered-content {
			&__content-container {
				grid-template-columns: 1fr;
			}

			&__item {
				display: grid;
				grid-template-columns: 64px 1fr;
				gap: 0.75rem;
				padding: 1.25rem 0;
				border-right: 0;
			}

			&__container {
				flex-direction: column;
			}

			&__image-container,
			&__gallery {
				flex: none;
				width: 100%;
				max-width: 100%;
				grid-template-columns: repeat(2, minmax(0, 1fr));
			}

			&__item {
				grid-template-columns: 54px 1fr;
				gap: 0.75rem;
				padding: 1.25rem 0;
			}

			&__number {
				font-size: 2.6rem;
			}

			&__body {
				max-width: 100%;
			}
		}
	}

	@media (max-width: 520px) {
		.numbered-content__item {
			grid-template-columns: 64px 1fr;
		}

		.numbered-content__gallery {
			grid-template-columns: 1fr;
		}
	}
`;

export default function NumberedContent({
	title,
	content,
	images = [],
	reverse = false
}: NumberedContentProps) {
	const hasImages = images.length > 0;
	const isGallery = images.length > 1;
	const isFeaturedLayout = images.length === 3;

	return (
		<NumberedContentStyled className={isFeaturedLayout ? "project-numbered-content--featured" : undefined}>
			{title && (
				<div className="numbered-content__header">
					<h2 className="numbered-content__title">{title}</h2>
				</div>
			)}

			<div
				className={
					`${reverse
						? "numbered-content__container numbered-content__container--reverse"
						: "numbered-content__container"}${hasImages ? "" : " numbered-content__container--text-only"}`
				}
			>
				<div className="numbered-content__content-container">
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

								<p className="numbered-content__body">
									{item.body}
								</p>
							</div>
						</div>
					))}
				</div>

				{hasImages &&
					(isFeaturedLayout ? (
						<FeaturedMedia images={images} />
					) : isGallery ? (
						<div className="numbered-content__gallery">
							{images.map((image, index) => (
								<ImageLightbox key={`${image.src}-${index}`} src={image.src} alt={image.alt}>
									<img
										className="numbered-content__gallery-image"
										src={image.src}
										alt={image.alt || ""}
									/>
								</ImageLightbox>
							))}
						</div>
					) : (
						<div className="numbered-content__image-container">
							<ImageLightbox src={images[0].src} alt={images[0].alt}>
								<img
									className="numbered-content__image"
									src={images[0].src}
									alt={images[0].alt || ""}
								/>
							</ImageLightbox>
						</div>
					))}
			</div>
		</NumberedContentStyled>
	);
}
