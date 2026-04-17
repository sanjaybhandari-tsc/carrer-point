import Head from "next/head";
import RPO from "@/components/RPO/index";

export default function RPOPage() {
  return (
    <>
      <Head>
        <title>Recruitment Process Outsourcing (RPO) Services | Career Point</title>
        <meta
          name="description"
          content="Our Recruitment Process Outsourcing (RPO) services help organizations streamline hiring with a dedicated recruitment team, structured processes, and transparent reporting."
        />
        <meta
          name="keywords"
          content="RPO services, Recruitment Process Outsourcing, managed hiring solutions, hiring services, recruitment agency, talent acquisition"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://carrer-point.vercel.app/services/rpo" />
      </Head>

      <RPO />
    </>
  );
}