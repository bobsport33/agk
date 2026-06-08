import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

interface CardProps {
	imgUrl: string;
	title: string;
}

const CardCont = styled("div")`
	display: flex;

	.card {
		&__image {
		}

		&__title {
			font-size: 1.125rem;
			font-weight: 700;
		}
	}
`;

const Card = ({ imgUrl, title }: CardProps) => {
	return (
		<CardCont>
			<Image src={imgUrl} alt="" className="card__image" />
			<h3 className="card__title">{title}</h3>
		</CardCont>
	);
};

export default Card;
