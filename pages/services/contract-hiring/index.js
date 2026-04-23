import Head from "next/head";
import ContractHiring from "@/components/ContracttHiring/index";

export default function ContractHiringPage() {
  return (
    <>
      <Head>
        <title>
          Contract Staffing Services | Project-Based Hiring Solutions | Career
          Point
        </title>

        <meta
          name="description"
          content="Contract staffing solutions for project-based and temporary hiring needs. We help organizations access skilled professionals quickly for short-term assignments and business requirements."
        />

        <meta
          name="keywords"
          content="contract staffing, project based hiring, temporary staffing, contract recruitment, skilled professionals, workforce solutions, career point placement"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://yourdomain.com/contract-hiring" />

        <meta
          property="og:title"
          content="Contract Staffing Services | Project-Based Hiring Solutions"
        />
        <meta
          property="og:description"
          content="Flexible contract staffing solutions to hire skilled professionals for project-based, temporary, and short-term business needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://carrer-point.vercel.app/services/contract-hiring"
        />
        {/* <meta
          property="og:image"
          content="https://carrer-point.vercel.app/og-images/contract-staffing.jpg"
        /> */}

        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="Contract Staffing Services | Career Point"
        />
        <meta
          name="twitter:description"
          content="Hire skilled professionals quickly for project-based and temporary staffing needs."
        />
      </Head>

      <ContractHiring />
    </>
  );
}
