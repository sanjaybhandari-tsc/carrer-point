import Head from "next/head";
import AboutView from "@/components/About/index";

export default function AboutPage() {
  const title = "About Us | Career Point Placement Services";
  const description =
    "Career Point Placement Services is a trusted recruitment partner with 17+ years of experience, 15,000+ placements, and expertise in building strong teams across India.";
  const url =
    "https://career-point-placement-services.vercel.app/about-us";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="recruitment agency India, placement services, hiring solutions, job consultancy, career point placement services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Career Point Placement Services" />

        <meta name="theme-color" content="#0f172a" />
      </Head>

      <AboutView />
    </>
  );
}