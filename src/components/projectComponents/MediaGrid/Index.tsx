/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";

type MediaType = "image" | "video";

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
			grid-template-columns: repeat(4, 1fr);
			gap: 0.75rem;
		}

		&__item {
			position: relative;
			aspect-ratio: 1 / 1;
			overflow: hidden;
			border-radius: 14px;

			background: var(--neutral-200);
			border: 1px solid var(--neutral-300);
		}

		&__image,
		&__video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}

	@media (max-width: 1600px) {
		.media-grid {
			&__grid {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}

	@media (max-width: 900px) {
		.media-grid {
			&__grid {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}

	@media (max-width: 600px) {
		.media-grid {
			&__grid {
				grid-template-columns: 1fr;
			}
		}
	}
`;

export default function MediaGrid({ title, media }: MediaGridProps) {
	return (
		<MediaGridStyled>
			{title && (
				<header className="media-grid__header">
					<h2 className="media-grid__title">{title}</h2>
				</header>
			)}

			<div className="media-grid__grid">
				{media.map((item, index) => (
					<div
						key={`${item.src}-${index}`}
						className="media-grid__item"
					>
						{item.type === "image" ? (
							<img
								className="media-grid__image"
								src={item.src}
								alt={item.alt || ""}
								loading="lazy"
							/>
						) : (
							<video
								className="media-grid__video"
								src={item.src}
								muted
								loop
								playsInline
								controls
							/>
						)}
					</div>
				))}
			</div>
		</MediaGridStyled>
	);
}
