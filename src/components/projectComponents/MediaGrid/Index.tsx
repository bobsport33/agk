/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";

type MediaType = "image" | "video" | "youtube";

interface MediaItem {
	type: MediaType;
	src: string;
	alt?: string;
	poster?: string;
}

interface MediaGridProps {
	title?: string;
	media: MediaItem[];
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
			font-size: 1.75rem;
			font-weight: 700;
			color: var(--neutral-1000);
			position: relative;
			display: inline-block;

			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -0.4rem;
				width: 2.5rem;
				height: 3px;
				background: var(--primary-500);
				border-radius: 999px;
			}
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

		&__item {
			position: relative;
			aspect-ratio: 1 / 1;
			overflow: hidden;
			border-radius: 14px;
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
		.media-grid__grid--2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.media-grid__grid,
		.media-grid__grid--default,
		.media-grid__grid--2,
		.media-grid__grid--1 {
			grid-template-columns: 1fr;
		}

		.media-grid__item--double,
		.media-grid__item--single {
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

export default function MediaGrid({ title, media }: MediaGridProps) {
	const gridClass =
		media.length === 1
			? "media-grid__grid media-grid__grid--1"
			: media.length === 2
				? "media-grid__grid media-grid__grid--2"
				: "media-grid__grid media-grid__grid--default";

	return (
		<MediaGridStyled>
			{title && (
				<header className="media-grid__header">
					<h2 className="media-grid__title">{title}</h2>
				</header>
			)}

			<div className={gridClass}>
				{media.map((item, index) => {
					const itemClass =
						media.length === 1
							? "media-grid__item media-grid__item--single"
							: media.length === 2
								? "media-grid__item media-grid__item--double"
								: "media-grid__item";

					return (
						<div key={`${item.src}-${index}`} className={itemClass}>
							{item.type === "image" && (
								<img
									className="media-grid__image"
									src={item.src}
									alt={item.alt || ""}
									loading="lazy"
								/>
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
								/>
							)}

							{item.type === "youtube" && (
								<iframe
									className="media-grid__iframe"
									src={getYoutubeEmbedUrl(item.src)}
									title={item.alt || `youtube-video-${index}`}
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
