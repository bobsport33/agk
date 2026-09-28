/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import ImageLightbox from "@/components/projectComponents/ImageLightbox/Index";

type MediaType = "image" | "video" | "youtube";

interface MediaItem {
	type: MediaType;
	src: string;
	alt?: string;
	poster?: string;
	shape?: "square" | "wide" | "portrait" | "landscape";
	fit?: "cover" | "contain";
	position?: "center" | "top-left";
}

interface MediaGridProps {
	title?: string;
	media: MediaItem[];
	columns?: 2 | 3 | 4;
}

const MediaGridStyled = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.media-grid {
		&__header {
			margin-bottom: 0.5rem;
		}

		&__title {
			margin: 0;
			font-size: clamp(1.4rem, 2.5vw, 1.8rem);
			font-weight: 700;
			color: var(--neutral-1000);
		}

		&__grid {
			display: grid;
			gap: 0.75rem;
		}

		&__grid--1 {
			grid-template-columns: minmax(0, 1295px);
			justify-content: center;
		}

		&__grid--2 {
			grid-template-columns: repeat(2, 1fr);
		}

		&__grid--default {
			grid-template-columns: repeat(4, 1fr);
		}

		&__grid--columns-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		&__grid--columns-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		&__grid--columns-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		&__item {
			position: relative;
			aspect-ratio: 1 / 1;
			overflow: hidden;
			border-radius: var(--media-radius);
			background: var(--neutral-200);
			border: 1px solid var(--neutral-300);
		}

		/* Single featured item */
		&__item--single {
			aspect-ratio: 16 / 9;
		}

		/* Two-item layout */
		&__item--double {
			aspect-ratio: 4 / 3;
		}

		&__item--wide {
			grid-column: span 2;
			aspect-ratio: 16 / 7;
		}

		&__item--portrait {
			aspect-ratio: 4 / 5;
		}

		&__item--landscape {
			aspect-ratio: 16 / 9;
		}

		&__item--video-format {
			aspect-ratio: 16 / 9;
		}

		&__image,
		&__video,
		&__iframe {
			width: 100%;
			height: 100%;
			display: block;
		}

		&__image,
		&__video {
			object-fit: cover;
		}

		&__image--contain {
			object-fit: contain;
			padding: 0.75rem;
		}

		&__image--top-left {
			object-position: left top;
		}

		&__iframe {
			border: 0;
		}
	}

	@media (max-width: 1600px) {
		.media-grid__grid--default {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 900px) {
		.media-grid__grid--default,
		.media-grid__grid--2,
		.media-grid__grid--columns-3,
		.media-grid__grid--columns-4 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.media-grid__grid,
		.media-grid__grid--default,
		.media-grid__grid--2,
		.media-grid__grid--1,
		.media-grid__grid--columns-2,
		.media-grid__grid--columns-3,
		.media-grid__grid--columns-4 {
			grid-template-columns: 1fr;
		}

		.media-grid__item--double,
		.media-grid__item--single,
		.media-grid__item--wide {
			aspect-ratio: 16 / 9;
		}
	}
`;

function getYoutubeEmbedUrl(url: string) {
	try {
		const parsed = new URL(url);

		if (parsed.hostname.includes("youtu.be")) {
			const id = parsed.pathname.slice(1);
			return `https://www.youtube.com/embed/${id}`;
		}

		if (parsed.hostname.includes("youtube.com")) {
			if (parsed.pathname.includes("/embed/")) {
				return url;
			}

			const id = parsed.searchParams.get("v");

			if (id) {
				return `https://www.youtube.com/embed/${id}`;
			}
		}
	} catch {
		return url;
	}

	return url;
}

export default function MediaGrid({ title, media, columns }: MediaGridProps) {
	const gridClass = columns
		? `media-grid__grid media-grid__grid--columns-${columns}`
		: media.length === 1
			? "media-grid__grid media-grid__grid--1"
			: media.length === 2
				? "media-grid__grid media-grid__grid--2"
				: "media-grid__grid media-grid__grid--default";

	return (
		<MediaGridStyled className="project-media-grid">
			{title && (
				<header className="media-grid__header">
					<h2 className="media-grid__title">{title}</h2>
				</header>
			)}

			<div className={gridClass}>
				{media.map((item, index) => {
					const sizeClass =
						media.length === 1
							? "media-grid__item--single"
							: media.length === 2
								? "media-grid__item--double"
								: "";
					const shapeClass = item.shape
						? `media-grid__item--${item.shape}`
						: "";
					const formatClass = item.type === "youtube" ? "media-grid__item--video-format" : "";
					const itemClass = `media-grid__item ${sizeClass} ${shapeClass} ${formatClass}`.trim();

					return (
						<div key={`${item.src}-${index}`} className={itemClass}>
							{item.type === "image" && (
								<ImageLightbox src={item.src} alt={item.alt}>
									<img
									className={`media-grid__image${item.fit === "contain" ? " media-grid__image--contain" : ""}${item.position === "top-left" ? " media-grid__image--top-left" : ""}`}
										src={item.src}
										alt={item.alt || ""}
										loading="lazy"
									/>
								</ImageLightbox>
							)}

							{item.type === "video" && (
								<video
									className="media-grid__video"
									src={item.src}
									poster={item.poster}
									muted
									loop
									playsInline
									controls
									preload="metadata"
								/>
							)}

							{item.type === "youtube" && (
								<iframe
									className="media-grid__iframe"
									src={getYoutubeEmbedUrl(item.src)}
									title={item.alt || `youtube-video-${index}`}
									loading="lazy"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							)}
						</div>
					);
				})}
			</div>
		</MediaGridStyled>
	);
}
