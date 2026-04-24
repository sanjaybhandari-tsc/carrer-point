import Head from "next/head";
import BrowserComponent from "@/components/BrowserJobs/Index";
import React from "react";

export default function BrowseJobsPage() {
  const title =
    "Browse Jobs | Career Opportunities Across India";

  const description =
    "Discover roles that align with your skills, ambition, and future goals. Explore 500+ active jobs across industries and take the next step in your career.";

  const url =
    "https://career-point-placement-services.vercel.app/browse-jobs";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="jobs, hiring, career opportunities, BFSI jobs, FMCG jobs, manufacturing jobs, pharmaceutical jobs, job search"
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

      <BrowserComponent />
    </>
  );
}