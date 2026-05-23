"use client";
import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
	text: string;
	href: string;
	target?: string;
	color?: string;
}

const LinkCont = styled(NextLink)`
	--link-color: var(--secondary);
	font-size: 1.5rem;
	color: var(--link-color);
	text-decoration: none;
	transition: color 0.2s ease;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -2px;
		height: 2px;
		width: 0;
		background-color: var(--link-color);
		transition: width 0.3s;
	}

	&:hover {
		&::after {
			width: 100%;
		}
	}

	&[aria-current="page"]::after {
		width: 100%;
	}
`;

const Link = ({ text, href, color }: LinkProps) => {
	const isExternal = href.startsWith("http");

	const pathname = usePathname();

	const isActive = pathname === href;

	const style = {
		...(color && { "--link-color": color })
	} as React.CSSProperties;

	if (isExternal) {
		return (
			<LinkCont
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-current={isActive ? "page" : undefined}
				style={style}
			>
				{text}
			</LinkCont>
		);
	}

	return (
		<LinkCont
			href={href}
			aria-current={isActive ? "page" : undefined}
			style={style}
		>
			{text}
		</LinkCont>
	);
};

export default Link;
