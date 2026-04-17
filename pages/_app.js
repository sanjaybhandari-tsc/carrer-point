import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
