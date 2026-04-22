import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Career Point Placement Services</title>
        <meta
          name="description"
          content="Recruitment agency in India with 17+ years experience. Career Point offers placement, staffing, and hiring solutions with 15,000+ successful placements."
        />
        <meta
          name="keywords"
          content="recruitment agency India, placement services, staffing solutions, hiring services, job consultancy, jobs in India, recruitment company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        className={`${inter.variable} ${montserrat.variable}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}