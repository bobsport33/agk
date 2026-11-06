import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/modules/Header/Index";
import SiteFooter from "@/modules/SiteFooter/Index";
const pageNames: Record<string, string> = { "/": "Creative Director & Author", "/creative-work": "Creative Work", "/books": "Books", "/contact": "Contact", "/resume": "Resume" };
const legacyHashes: Record<string, string> = { "#creative": "/creative-work", "#books": "/books", "#contact": "/contact", "#contact-creative": "/contact?topic=creative", "#contact-books": "/contact?topic=books" };
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.asPath.split(/[?#]/)[0];
  const title = `${pageNames[route] || route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "Portfolio"} | Anastasia Guletsky Kelly`;
  const canonical = `https://www.anastasiaguletsky.com${route === "/" ? "" : route}`;
  useEffect(() => {
    if (router.isReady && router.pathname === "/" && legacyHashes[window.location.hash]) void router.replace(legacyHashes[window.location.hash]);
  }, [router.isReady, router.pathname, router]);
  useEffect(() => {
    const focusContent = (_url: string, { shallow }: { shallow: boolean }) => { if (!shallow) document.getElementById("main-content")?.focus({ preventScroll: true }); };
    router.events.on("routeChangeComplete", focusContent);
    return () => router.events.off("routeChangeComplete", focusContent);
  }, [router.events]);
  return <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="description" name="description" content="Explore the creative direction, writing, campaign work, and children's books of Anastasia Guletsky Kelly." />
      <link key="canonical" rel="canonical" href={canonical} />
      <meta key="og-title" property="og:title" content={title} />
      <meta key="og-url" property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.anastasiaguletsky.com/logo/AGK-logo-25.png" />
    </Head>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}><Component {...pageProps} /></main>
    <SiteFooter />
  </>;
}
