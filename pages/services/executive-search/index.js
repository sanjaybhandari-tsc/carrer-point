import Head from "next/head";
import ExecutiveSearch from "@/components/ExecutiveSearch/index";

export default function ExecutiveSearchPage() {
  return (
    <>
      <Head>

        <title>Executive Search Services | Leadership Hiring | Career Point</title>
        <meta
          name="description"
          content="Executive search services for senior leadership hiring. We identify, assess, and connect organizations with experienced leaders for strategic business growth."
        />
        <meta
          name="keywords"
          content="executive search, leadership hiring, senior recruitment, CXO hiring, top management hiring, career point placement"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://your-domain.com/services/executive-search"
        />
      </Head>

      <ExecutiveSearch />
    </>
  );
}