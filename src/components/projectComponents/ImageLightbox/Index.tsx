/* eslint-disable @next/next/no-img-element */
import React, { MouseEvent, ReactNode, SyntheticEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

interface ImageLightboxProps {
	src: string;
	alt?: string;
	children: ReactNode;
	className?: string;
}

const Trigger = styled.button`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	padding: 0;
	border: 0;
	border-radius: inherit;
	background: transparent;
	color: inherit;
	cursor: zoom-in;
	overflow: hidden;
`;

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 10000;
	background: rgba(15, 13, 12, 0.92);
	backdrop-filter: blur(8px);

	.project-lightbox {
		&__viewport {
			position: absolute;
			inset: 4.75rem 1.25rem 1.25rem;
			overflow: auto;
			overscroll-behavior: contain;
			scrollbar-gutter: stable;
		}

		&__canvas {
			display: grid;
			width: max-content;
			min-width: 100%;
			min-height: 100%;
			place-items: center;
		}

		&__canvas--zoomed {
			place-items: start center;
		}

		&__image {
			display: block;
			max-width: calc(100vw - 3rem);
			max-height: calc(100vh - 7rem);
			object-fit: contain;
			border-radius: var(--media-radius);
			box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
		}

		&__toolbar {
			position: fixed;
			top: 1rem;
			left: 50%;
			z-index: 1;
			display: flex;
			align-items: center;
			gap: 0.35rem;
			padding: 0.35rem;
			border: 1px solid rgba(255, 255, 255, 0.28);
			border-radius: 999px;
			background: rgba(0, 0, 0, 0.58);
			transform: translateX(-50%);
		}

		&__control {
			display: grid;
			place-items: center;
			min-width: 2.35rem;
			height: 2.35rem;
			padding: 0 0.7rem;
			border: 0;
			border-radius: 999px;
			background: transparent;
			color: #fff;
			font: inherit;
			font-weight: 700;
			cursor: pointer;

			&:hover,
			&:focus-visible {
				background: rgba(255, 255, 255, 0.14);
			}

			&:disabled {
				opacity: 0.35;
				cursor: default;
			}
		}

		&__zoom-level {
			min-width: 3.5rem;
			color: #fff;
			font-size: 0.8rem;
			font-variant-numeric: tabular-nums;
			text-align: center;
		}

		&__close {
			position: fixed;
			top: 1rem;
			right: 1rem;
			display: grid;
			place-items: center;
			width: 2.75rem;
			height: 2.75rem;
			padding: 0;
			border: 1px solid rgba(255, 255, 255, 0.45);
			border-radius: 999px;
			background: rgba(0, 0, 0, 0.45);
			color: #fff;
			font-size: 1.6rem;
			line-height: 1;
			cursor: pointer;
		}
	}

	@media (max-width: 520px) {
		.project-lightbox {
			&__viewport {
				inset: 4.75rem 0.75rem 0.75rem;
			}

			&__image {
				max-width: calc(100vw - 1.5rem);
			}

			&__close {
				right: 0.75rem;
			}
		}
	}
`;

const MIN_ZOOM = 1;
const MAX_ZOOM = 16;

export default function ImageLightbox({
	src,
	alt = "",
	children,
	className
}: ImageLightboxProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [zoom, setZoom] = useState(MIN_ZOOM);
	const [fittedSize, setFittedSize] = useState<{ width: number; height: number } | null>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);

	const changeZoom = (nextZoom: number) => {
		const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
		setZoom(clampedZoom);
		viewportRef.current?.scrollTo({ top: 0, left: 0 });
	};

	const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
		const image = event.currentTarget;
		setFittedSize({ width: image.clientWidth, height: image.clientHeight });
	};

	const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
		const target = event.target as HTMLElement;
		const viewport = viewportRef.current;

		if (viewport && target === viewport) {
			const viewportRect = viewport.getBoundingClientRect();
			const clickedVerticalScrollbar =
				viewport.offsetWidth > viewport.clientWidth &&
				event.clientX >= viewportRect.left + viewport.clientWidth;
			const clickedHorizontalScrollbar =
				viewport.offsetHeight > viewport.clientHeight &&
				event.clientY >= viewportRect.top + viewport.clientHeight;

			if (clickedVerticalScrollbar || clickedHorizontalScrollbar) return;
		}

		if (target.closest("button, img")) return;
		setIsOpen(false);
	};

	useEffect(() => {
		if (!isOpen) return;

		const trigger = triggerRef.current;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
			if (event.key === "+" || event.key === "=") {
				event.preventDefault();
				setZoom((currentZoom) => Math.min(MAX_ZOOM, currentZoom * 2));
			}
			if (event.key === "-") {
				event.preventDefault();
				setZoom((currentZoom) => Math.max(MIN_ZOOM, currentZoom / 2));
			}
			if (event.key === "0") {
				event.preventDefault();
				setZoom(MIN_ZOOM);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
			trigger?.focus();
		};
	}, [isOpen]);

	return (
		<>
			<Trigger
				ref={triggerRef}
				type="button"
				className={className}
				aria-label={alt ? `Open ${alt}` : "Open image"}
				onClick={() => {
					setZoom(MIN_ZOOM);
					setFittedSize(null);
					setIsOpen(true);
				}}
			>
				{children}
			</Trigger>

			{isOpen &&
				typeof document !== "undefined" &&
				createPortal(
					<Overlay
						role="dialog"
						aria-modal="true"
						aria-label={alt || "Image preview"}
						onClick={handleOverlayClick}
					>
						<div
							className="project-lightbox__toolbar"
							onClick={(event) => event.stopPropagation()}
						>
							<button
								type="button"
								className="project-lightbox__control"
								aria-label="Zoom out"
								disabled={!fittedSize || zoom <= MIN_ZOOM}
								onClick={() => changeZoom(zoom / 2)}
							>
								−
							</button>
							<output className="project-lightbox__zoom-level" aria-live="polite">
								{Math.round(zoom * 100)}%
							</output>
							<button
								type="button"
								className="project-lightbox__control"
								aria-label="Zoom in"
								disabled={!fittedSize || zoom >= MAX_ZOOM}
								onClick={() => changeZoom(zoom * 2)}
							>
								+
							</button>
							<button
								type="button"
								className="project-lightbox__control"
								disabled={zoom === MIN_ZOOM}
								onClick={() => changeZoom(MIN_ZOOM)}
							>
								Fit
							</button>
						</div>
						<button
							ref={closeRef}
							type="button"
							className="project-lightbox__close"
							aria-label="Close image preview"
							onClick={() => setIsOpen(false)}
						>
							×
						</button>
						<div
							ref={viewportRef}
							className="project-lightbox__viewport"
						>
							<div className={`project-lightbox__canvas${zoom > MIN_ZOOM ? " project-lightbox__canvas--zoomed" : ""}`}>
								<img
									className="project-lightbox__image"
									src={src}
									alt={alt}
									onLoad={handleImageLoad}
									style={
										zoom > MIN_ZOOM && fittedSize
											? {
												width: fittedSize.width * zoom,
												height: fittedSize.height * zoom,
												maxWidth: "none",
												maxHeight: "none"
											}
											: undefined
									}
								/>
							</div>
						</div>
					</Overlay>,
				document.body
				)}
		</>
	);
}
