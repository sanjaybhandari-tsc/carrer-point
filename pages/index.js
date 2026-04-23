import Head from "next/head";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruitment & Placement Services in India | Career Point</title>
        <meta
          name="description"
          content="Career Point deliverd staffing, hiring and lead recruitment and placement with 15,000+ successful placements across industries and 17+ years of experience."
        />
        <meta
          name="keywords"
          content="recruitment agency India, placement services, staffing solutions, hiring services, job consultancy"
        />
        <link rel="canonical" href="https://carrer-point.vercel.app/" />
        <meta
          property="og:title"
          content="Recruitment & Placement Services in India | Career Point"
        />
        <meta
          property="og:description"
          content="Career Point provides expert recruitment, staffing, and hiring solutions across India with 17+ years experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carrer-point.vercel.app/" />
      </Head>
      <HomePage />
    </>
  );
}
