import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/modules/Header/Index";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					key="description"
					name="description"
					content="Anastasia is a creative director specializing in brand strategy, visual storytelling, and design leadership. Explore selected work, creative direction, and collaborations."
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
