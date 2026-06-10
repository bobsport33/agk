import React from "react";
import styled from "@emotion/styled";

type MediaRatio = "wide" | "tall" | "square";
type MediaType = "image" | "video";

interface MediaItem {
	src: string;
	type: MediaType;
	ratio?: MediaRatio;
	alt?: string;
}

interface MediaGridProps {
	items: MediaItem[];
}

const MediaGridStyled = styled.div`
	display: grid;
	gap: 0.75rem;
	border-radius: 24px;
	overflow: hidden;

	/* 1 item */
	&.media-grid--1 {
		grid-template-columns: 1fr;

		.media-grid__item {
			aspect-ratio: 16 / 9;
		}
	}

	/* 2 items: even split */
	&.media-grid--2 {
		grid-template-columns: 1fr 1fr;

		.media-grid__item {
			aspect-ratio: 4 / 3;
		}
	}

	/* 3 items: large left, two stacked right */
	&.media-grid--3 {
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1fr;

		.media-grid__item:first-of-type {
			grid-row: span 2;
			aspect-ratio: unset;
		}

		.media-grid__item:not(:first-of-type) {
			aspect-ratio: 4 / 3;
		}
	}

	/* 4 items: large banner top, three below */
	&.media-grid--4 {
		grid-template-columns: repeat(3, 1fr);

		.media-grid__item:first-of-type {
			grid-column: span 3;
			aspect-ratio: 21 / 9;
		}

		.media-grid__item:not(:first-of-type) {
			aspect-ratio: 1 / 1;
		}
	}

	/* 5+ items */
	&.media-grid--many {
		grid-template-columns: repeat(3, 1fr);

		.media-grid__item {
			aspect-ratio: 4 / 3;
		}

		.media-grid__item:first-of-type {
			grid-column: span 2;
			aspect-ratio: 16 / 9;
		}
	}

	.media-grid__item {
		width: 100%;
		overflow: hidden;
		background: var(--neutral-300);
		position: relative;

		img,
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
			transition: transform 0.5s ease;
		}

		/* Gradient overlay on hover */
		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to top,
				rgba(31, 27, 27, 0.35),
				transparent
			);
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		&:hover img,
		&:hover video {
			transform: scale(1.05);
		}

		&:hover::after {
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		&.media-grid--2,
		&.media-grid--3,
		&.media-grid--4,
		&.media-grid--many {
			grid-template-columns: 1fr;

			.media-grid__item,
			.media-grid__item:first-of-type {
				grid-column: unset;
				grid-row: unset;
				aspect-ratio: 16 / 9;
			}
		}
	}
`;

const getLayoutClass = (count: number): string => {
	if (count <= 4) return `media-grid--${count}`;
	return "media-grid--many";
};

const MediaGrid: React.FC<MediaGridProps> = ({ items = [] }) => {
	return (
		<MediaGridStyled className={getLayoutClass(items.length)}>
			{items.map((item, i) => (
				<div
					key={i}
					className={`media-grid__item media-grid__item--${item.ratio ?? "wide"}`}
				>
					{item.type === "video" ? (
						<video src={item.src} autoPlay muted loop playsInline />
					) : (
						<img src={item.src} alt={item.alt ?? ""} />
					)}
				</div>
			))}
		</MediaGridStyled>
	);
};

export default MediaGrid;
