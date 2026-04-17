import Head from "next/head";
import Industries from "@/components/Industries/index";

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>Industries We Serve | Career Point Placement Services</title>
        <meta
          name="description"
          content="Explore industries we serve including Pharmaceutical, Manufacturing, BFSI, FMCG, and Building Materials. We provide recruitment and staffing solutions across sectors."
        />
        <meta
          name="keywords"
          content="industries we serve, recruitment agency India, pharmaceutical recruitment, manufacturing staffing, BFSI hiring, FMCG recruitment, building materials hiring"
        />
        <link
          rel="canonical"
          href="https://carrer-point.vercel.app/industries"
        />
      </Head>

      <Industries />
    </>
  );
}