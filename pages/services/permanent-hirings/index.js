import Head from "next/head";
import PermanentHirings from "@/components/PermanentHirings/index";

export default function PermanentHiringsPage() {
  const title =
    "Permanent Hiring Services | Career Point Placement Services";

  const description =
    "Permanent hiring solutions for long-term talent acquisition. We help organizations find skilled professionals who align with company culture and contribute to sustainable growth.";

  const url =
    "https://career-point-placement-services.vercel.app/services/permanent-hirings";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="permanent hiring, long-term recruitment, full-time staffing, talent acquisition, skilled professionals hiring, career point placement"
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

      <PermanentHirings />
    </>
  );
}