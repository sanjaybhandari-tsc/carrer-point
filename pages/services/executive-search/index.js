import Head from "next/head";
import ExecutiveSearch from "@/components/ExecutiveSearch/index";

export default function ExecutiveSearchPage() {
  return (
    <>
      <Head>
        <title>
          Executive Search Services | Strategic Leadership Hiring | Career Point
        </title>

        <meta
          name="description"
          content="Executive search services for CXOs and senior leadership hiring. We help organizations identify, assess, and hire top management professionals for strategic growth."
        />

        <meta
          name="keywords"
          content="executive search, leadership hiring, CXO recruitment, senior management hiring, strategic hiring, top management recruitment, confidential executive search, career point placement"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://carrer-point.vercel.app/services/executive-search"
        />

        <meta
          property="og:title"
          content="Executive Search Services | Strategic Leadership Hiring"
        />

        <meta
          property="og:description"
          content="Specialized executive search services for CXOs and senior leaders. We connect organizations with high-impact leadership talent."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://carrer-point.vercel.app/services/executive-search"
        />

        <meta
          property="og:image"
          content="https://carrer-point.vercel.app/images/executiveSearch/executive-search-1200x630.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Executive Search Services | Career Point"
        />

        <meta
          name="twitter:description"
          content="Strategic leadership hiring for CXOs and senior management roles."
        />

        <meta
          name="twitter:image"
          content="https://carrer-point.vercel.app/images/executiveSearch/executive-search-1200x630.png"
        />
        
        <link rel="canonical" href="https://yourdomain.com/executive-search" />
      </Head>

      <ExecutiveSearch />
    </>
  );
}