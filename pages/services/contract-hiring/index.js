import Head from "next/head";
import ContractHiring from "@/components/ContracttHiring/index";

export default function ContractHiringPage() {
  const title =
    "Contract Staffing Services | Career Point Placement Services";

  const description =
    "Contract staffing solutions for project-based and temporary hiring needs. We help organizations access skilled professionals quickly for short-term assignments and business requirements.";

  const url =
    "https://career-point-placement-services.vercel.app/services/contract-hiring";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="contract staffing, project based hiring, temporary staffing, contract recruitment, workforce solutions, career point placement"
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

      <ContractHiring />
    </>
  );
}