export const breakpoints = {
	wide: 1440,
	tablet: 1024,
	mobile: 640,
	compact: 420
} as const;

export const media = {
	wide: `@media (max-width: ${breakpoints.wide}px)`,
	tablet: `@media (max-width: ${breakpoints.tablet}px)`,
	mobile: `@media (max-width: ${breakpoints.mobile}px)`,
	compact: `@media (max-width: ${breakpoints.compact}px)`
} as const;
