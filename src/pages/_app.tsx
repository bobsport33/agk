import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Header from "@/modules/Header/Index";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
