import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import NextImage from "next/image";

interface CardProps {
	client: string;
	imageUrl: string;
	link: string;
	priority?: boolean;
}

const Card = styled(Link)`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;

	padding: 0.5rem;

	background: var(--neutral-100);
	border: 1px solid var(--neutral-300);
	border-radius: 24px;

	overflow: hidden;
	text-decoration: none;

	box-shadow: var(--shadow-soft);

	transition:
		transform 200ms ease,
		box-shadow 200ms ease;

	&:hover {
		box-shadow: var(--shadow-lift);
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 3px solid var(--primary-500);
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
	border-radius: 18px;
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

	padding: 1.25rem;

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
	font-size: clamp(1rem, 1.5vw, 1.35rem);
	font-weight: 700;
	letter-spacing: -0.02em;

	transition: transform 200ms ease;
`;

const DisplayCard = ({ client, imageUrl, link, priority = false }: CardProps) => {
	return (
		<Card href={link}>
			<ImageContainer>
				<CardImage
					className="card__image"
					src={imageUrl}
					alt={client}
					fill
					priority={priority}
					sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) calc(50vw - 34px), 42vw"
				/>

				<Overlay>
					<Title className="card__title">{client}</Title>
				</Overlay>
			</ImageContainer>
		</Card>
	);
};

export default DisplayCard;
