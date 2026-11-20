import Head from "next/head";
import { HomeHero } from "@/modules/home/HomeHero";
import { HomeSections } from "@/modules/home/HomeSections";
import { HomeSurface } from "@/modules/home/shared";

export default function Home() {
  return <>
    <Head><title>Anastasia Guletsky Kelly | Creative Director &amp; Author</title></Head>
    <HomeSurface>
      <HomeHero />
      <HomeSections />
    </HomeSurface>
  </>;
}
