import Head from "next/head";
import RPO from "@/components/RPO/index";

export default function RPOPage() {
  return (
    <>
      <Head>
        <title>
          Recruitment Process Outsourcing (RPO) Services | Managed Hiring Solutions | Career Point
        </title>

        <meta
          name="description"
          content="Our Recruitment Process Outsourcing (RPO) services help organizations streamline end-to-end hiring with a dedicated recruitment team, structured processes, and transparent reporting."
        />

        <meta
          name="keywords"
          content="RPO services, recruitment process outsourcing, managed hiring solutions, hiring services, talent acquisition, recruitment outsourcing, dedicated recruitment team, career point placement"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://carrer-point.vercel.app/services/rpo"
        />

        <meta
          property="og:title"
          content="Recruitment Process Outsourcing (RPO) Services | Managed Hiring Solutions"
        />

        <meta
          property="og:description"
          content="Streamline your hiring process with our RPO services. Dedicated recruitment teams, structured hiring, and full transparency."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://carrer-point.vercel.app/services/rpo"
        />

        <meta
          property="og:image"
          content="https://carrer-point.vercel.app/images/rpo/rpo-1200x630.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="RPO Services | Career Point"
        />

        <meta
          name="twitter:description"
          content="Managed hiring solutions with dedicated recruitment teams and structured processes."
        />

        <meta
          name="twitter:image"
          content="https://carrer-point.vercel.app/images/rpo/rpo-1200x630.png"
        />
      </Head>

      <RPO />
    </>
  );
}