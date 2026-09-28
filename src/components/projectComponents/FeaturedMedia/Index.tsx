/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";

interface FeaturedImage {
	src: string;
	alt?: string;
	fit?: "cover" | "contain";
	background?: string;
}

interface FeaturedMediaProps {
	images: FeaturedImage[];
}

const FeaturedMediaStyled = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr));
	gap: 12px;
	width: 100%;
	height: clamp(320px, 34vw, 440px);

	.featured-media {
		&__item {
			overflow: hidden;
			border: 1px solid var(--neutral-300);
			border-radius: var(--media-radius);
			background: var(--neutral-200);
		}

		&__image {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		&__image--cover {
			object-fit: cover;
		}
	}

	@media (max-width: 700px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: auto;
		height: auto;

		.featured-media__item {
			aspect-ratio: 4 / 3;
		}

		.featured-media__item:first-of-type {
			grid-column: 1 / -1;
			grid-row: auto;
			aspect-ratio: 16 / 10;
		}
	}
`;

export default function FeaturedMedia({ images }: FeaturedMediaProps) {
	return (
		<FeaturedMediaStyled>
			{images.slice(0, 3).map((image, index) => (
				<div
					className="featured-media__item"
					key={`${image.src}-${index}`}
					style={image.background ? { background: image.background } : undefined}
				>
					<ImageLightbox src={image.src} alt={image.alt}>
						<img
							className={`featured-media__image${image.fit === "cover" ? " featured-media__image--cover" : ""}`}
							src={image.src}
							alt={image.alt || ""}
							loading="lazy"
						/>
					</ImageLightbox>
				</div>
			))}
		</FeaturedMediaStyled>
	);
}
