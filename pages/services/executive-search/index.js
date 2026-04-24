import Head from "next/head";
import ExecutiveSearch from "@/components/ExecutiveSearch/index";

export default function ExecutiveSearchPage() {
  const title =
    "Executive Search Services | Career Point Placement Services";

  const description =
    "Executive search services for CXOs and senior leadership hiring. We help organizations identify, assess, and hire top management professionals for strategic growth.";

  const url =
    "https://career-point-placement-services.vercel.app/services/executive-search";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="executive search, leadership hiring, CXO recruitment, senior management hiring, strategic hiring, top management recruitment, career point placement"
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

      <ExecutiveSearch />
    </>
  );
}