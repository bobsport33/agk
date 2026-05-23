import Head from "next/head";

export default function Home() {
	return (
		<>
			{/* Page specific SEO */}
			<Head>
				<title>Anastasia Guletsky Kelly</title>
				<meta
					name="description"
					content="Anastasia is a creative director specializing in brand strategy, visual storytelling, and design leadership. Explore selected work, creative direction, and collaborations."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>page content</main>
		</>
	);
}
