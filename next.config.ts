import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {
		root: __dirname
	},
	reactStrictMode: true,
	async redirects() {
		return [
			{ source: "/harley-davidson", destination: "/creative-work/harley-davidson", permanent: true },
			{ source: "/city-of-chicago", destination: "/creative-work/city-of-chicago", permanent: true },
			{ source: "/cox-communications", destination: "/creative-work/cox-communications", permanent: true },
			{ source: "/converse", destination: "/creative-work/converse", permanent: true },
			{ source: "/thunder-valley", destination: "/creative-work/thunder-valley", permanent: true },
			{ source: "/recent-web-projects", destination: "/creative-work/recent-web-projects", permanent: true }
		];
	}
};

export default nextConfig;
