import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import NextImage from "next/image";

interface CardProps {
	client: string;
	imageUrl: string;
	link: string;
	priority?: boolean;
	imageAlt?: string;
	objectFit?: "cover" | "contain";
	objectPosition?: string;
}

const Card = styled(Link)`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;

	padding: var(--space-2);

	background: var(--surface-page, #f7ebdd);
	border: 1px solid var(--border-subtle, #1a1a1a33);
	border-radius: var(--radius-mosaic);

	overflow: hidden;
	text-decoration: none;

	box-shadow: 0 3px 12px rgba(26, 26, 26, 0.08);

	transition:
		transform 200ms ease,
		box-shadow 200ms ease;

	&:hover {
		box-shadow: 0 8px 20px rgba(26, 26, 26, 0.14);
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 3px solid var(--focus-color, currentColor);
		outline-offset: 3px;
	}

	&:hover .card__image {
		transform: scale(1.03);
	}
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: var(--radius-mosaic);
	overflow: hidden;
`;

const CardImage = styled(NextImage)`
	object-fit: cover;
	display: block;

	transition: transform 300ms ease;
`;

const Overlay = styled.div`
	position: absolute;
	inset: 0;

	display: flex;
	align-items: flex-end;

	padding: var(--space-5);

	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.75),
		rgba(0, 0, 0, 0.25) 35%,
		transparent 65%
	);

	pointer-events: none;
`;

const Title = styled.div`
	color: white;
	font-size: var(--font-size-small);
	font-weight: var(--weight-medium);
	letter-spacing: 0;

	transition: transform 200ms ease;
`;

const DisplayCard = ({ client, imageUrl, link, priority = false, imageAlt = client, objectFit = "cover", objectPosition = "center" }: CardProps) => {
	return (
		<Card href={link}>
			<ImageContainer>
				<CardImage
					className="card__image"
					src={imageUrl}
					alt={imageAlt}
					style={{ objectFit, objectPosition }}
					fill
					priority={priority}
					sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc(50vw - 42px), 42vw"
				/>

				<Overlay>
					<Title className="card__title">{client}</Title>
				</Overlay>
			</ImageContainer>
		</Card>
	);
};

export default DisplayCard;
