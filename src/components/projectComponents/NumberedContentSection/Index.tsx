/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import NextImage from "next/image";
import FeaturedMedia from "@/components/projectComponents/FeaturedMedia/Index";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";
import { media } from "@/styles/breakpoints";

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

const normalizeImageSrc = (src: string) => src.startsWith("/") ? src : `/${src}`;

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
			font-family: var(--font-display);
			font-size: var(--font-size-project-section);
			font-weight: var(--weight-heading);
			line-height: 1.15;
			color: var(--text-heading, var(--color-ink, #1a1a1a));
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
			border-top: 1px solid var(--border-subtle, #1a1a1a33);
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
			border-radius: var(--radius-media);
			display: block;
		}

		&__gallery {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 12px;
		}

		&__gallery-trigger {
			width: 100%;
			aspect-ratio: 1;
			border-radius: var(--radius-media);
			border: 1px solid var(--border-subtle, #1a1a1a33);
			box-shadow:
				0 4px 12px rgba(0, 0, 0, 0.03),
				0 1px 2px rgba(0, 0, 0, 0.04);
		}

		&__gallery-image {
			object-fit: cover;
			border-radius: var(--radius-media);
		}

		&__item {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			padding: clamp(1.25rem, 2.25vw, 2rem);
			border-bottom: 1px solid var(--border-subtle, #1a1a1a33);
			border-right: 1px solid var(--border-subtle, #1a1a1a33);
		}

		&__item:last-child {
			border-right: 0;
		}

		&__number {
			font-family: var(--font-display);
			font-size: var(--font-size-project-section);
			font-weight: var(--weight-display);
			line-height: 1;

			color: var(--color-coral, #efa17f);

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
			font-size: var(--font-size-small);
			font-weight: var(--weight-medium);

			text-transform: uppercase;
			letter-spacing: 0.1em;

			color: var(--text-secondary, #243d3c);
		}

		&__body {
			margin: 0;

			font-size: var(--font-size-body);
			font-weight: var(--weight-body);
			line-height: 1.65;

			color: var(--text-body, var(--color-ink, #1a1a1a));

			max-width: 65ch;
		}
	}

	${media.tablet} {
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
				font-size: var(--font-size-project-section);
			}

			&__body {
				max-width: 100%;
			}
		}
	}

	${media.mobile} {
		.numbered-content__item {
			grid-template-columns: 46px 1fr;
			gap: 0.6rem;
			padding: 1rem 0;
		}

		.numbered-content__gallery {
			grid-template-columns: 1fr;
		}

		.numbered-content__number {
			font-size: var(--font-size-project-section);
		}

		.numbered-content__title {
			font-size: var(--font-size-project-section);
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
							{images.map((image, index) => {
								const normalizedSrc = normalizeImageSrc(image.src);

								return <ImageLightbox
									key={`${image.src}-${index}`}
									src={normalizedSrc}
									alt={image.alt}
									className="numbered-content__gallery-trigger"
								>
									<NextImage
										className="numbered-content__gallery-image"
										src={normalizedSrc}
										alt={image.alt || ""}
										fill
										sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) calc(50vw - 42px), 33vw"
									/>
								</ImageLightbox>;
							})}
						</div>
					) : (
						<div className="numbered-content__image-container">
							<ImageLightbox src={normalizeImageSrc(images[0].src)} alt={images[0].alt}>
								<img
									className="numbered-content__image"
									src={normalizeImageSrc(images[0].src)}
									alt={images[0].alt || ""}
								/>
							</ImageLightbox>
						</div>
					))}
			</div>
		</NumberedContentStyled>
	);
}
