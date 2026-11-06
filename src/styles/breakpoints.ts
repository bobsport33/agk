export const breakpoints = {
	desktopMin: 1025,
	tabletMax: 1024,
	mobileMax: 640,
	wide: 1440,
	tablet: 1024,
	mobile: 640,
	compact: 420
} as const;

export const media = {
	desktop: `@media (min-width: ${breakpoints.desktopMin}px)`,
	tabletOnly: `@media (min-width: ${breakpoints.mobileMax + 1}px) and (max-width: ${breakpoints.tabletMax}px)`,
	tabletAndDown: `@media (max-width: ${breakpoints.tabletMax}px)`,
	wide: `@media (max-width: ${breakpoints.wide}px)`,
	tablet: `@media (max-width: ${breakpoints.tablet}px)`,
	mobile: `@media (max-width: ${breakpoints.mobile}px)`,
	compact: `@media (max-width: ${breakpoints.compact}px)`
} as const;
