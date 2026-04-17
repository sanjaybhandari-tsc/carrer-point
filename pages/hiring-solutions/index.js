import Head from "next/head";
import HiringSolutions from "@/components/HiringSolutions/index";

export default function HiringSolutionsPage() {
  return (
    <>
      <Head>
        <title>
          Hiring Solutions & Staffing Services in India | Career Point
        </title>

        <meta
          name="description"
          content="Explore smart hiring solutions by Career Point. We provide staffing, talent sourcing, and recruitment services across industries with pre-screened candidates and 17+ years experience."
        />

        <meta
          name="keywords"
          content="hiring solutions India, staffing services, recruitment solutions, talent sourcing, recruitment agency, workforce solutions, executive search India"
        />

        <link
          rel="canonical"
          href="https://carrer-point.vercel.app/hiring-solutions"
        />

        <meta
          property="og:title"
          content="Hiring Solutions & Staffing Services in India | Career Point"
        />
        <meta
          property="og:description"
          content="Career Point offers expert hiring solutions, staffing services, and talent sourcing strategies to help businesses build strong teams."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://carrer-point.vercel.app/hiring-solutions"
        />
      </Head>

      <HiringSolutions />
    </>
  );
}