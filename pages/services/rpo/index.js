import Head from "next/head";
import RPO from "@/components/RPO/index";

export default function RPOPage() {
  const title =
    "RPO Services | Career Point Placement Services";

  const description =
    "Our Recruitment Process Outsourcing (RPO) services help organizations streamline end-to-end hiring with a dedicated recruitment team, structured processes, and transparent reporting.";

  const url =
    "https://career-point-placement-services.vercel.app/services/rpo";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="RPO services, recruitment process outsourcing, managed hiring solutions, hiring services, talent acquisition, recruitment outsourcing, career point placement"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Career Point Placement Services" />

        <meta name="theme-color" content="#0f172a" />
      </Head>

      <RPO />
    </>
  );
}