import Head from "next/head";
import Industries from "@/components/Industries/index";

export default function IndustriesPage() {
  const title =
    "Industries We Serve | Career Point Placement Services";

  const description =
    "Explore industries we serve including Pharmaceutical, Manufacturing, BFSI, FMCG, and Building Materials. We provide recruitment and staffing solutions across sectors.";

  const url =
    "https://career-point-placement-services.vercel.app/industries";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="industries we serve, recruitment agency India, pharmaceutical recruitment, manufacturing staffing, BFSI hiring, FMCG recruitment, building materials hiring"
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

      <Industries />
    </>
  );
}