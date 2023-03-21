import Head from "next/head";
import Hero from "../Components/Hero";
import Jobs from "@/Components/Jobs";
import AboutUs from "@/Components/AboutUs";
import Reviews from "@/Components/Reviews";
import FAQ from "@/Components/FAQ";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>CarmoDev</title>
        <meta
          name="description"
          content="Desenvolvedor fullstack com experiência em React.js, Javascript, Typescript, styled components, Material UI, Node.Js, express.js, axios, criação e consumo de API"
        />
        <meta
          name="keywords"
          content="Desenvolvedor de site são paulo, desenvolvedor de site brasil, desenvolvedor fullstack, desenvolvedor de site, website, criação de sites, identidade visual"
        />
        <meta name="robots" content="" />
        <meta name="revisit-after" content="1 day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="next.js" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="rating" content="general" />

        <meta name="copyright" content="© 2022 Carmo.Dev" />

        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Hero />
      <Jobs />
      <AboutUs />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
