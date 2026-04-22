import Head from "next/head";
import AboutView from "@/components/About/index";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Career Point Placement Services</title>
        <meta
          name="description"
          content="Career Point Placement Services is a trusted recruitment partner with 17+ years of experience, 15,000+ placements, and expertise in building strong teams across India."
        />
        <meta
          name="keywords"
          content="recruitment agency India, placement services, hiring solutions, job consultancy, career point placement services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://carrer-point.vercel.app/about" />
      </Head>
      <AboutView />
    </>
  );
}
