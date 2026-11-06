import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return <Html lang="en" data-type="service"><Head>
    <link rel="icon" href="/favicon.ico" />
    <meta name="page-type" content="service" />
    <meta name="site-kind" content="other" />
    <link rel="preload" href="/fonts/bricolage-800.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/dm-sans-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
  </Head><body><Main /><NextScript /></body></Html>;
}
