import Header from "@/modules/Header/Index";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Anastasia is a creative director specializing in brand strategy, visual storytelling, and design leadership. Explore selected work, creative direction, and collaborations."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Header />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
