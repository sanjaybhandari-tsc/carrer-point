import Head from "next/head";
import SubmitCV from "@/components/SubmitCV";
import React from "react";

export default function SubmitPage() {
  const title =
    "Submit Your CV | Career Point Placement Services";

  const description =
    "Submit your CV to Career Point Placement Services and get discovered by top employers across industries like BFSI, FMCG, Manufacturing, and more.";

  const url =
    "https://career-point-placement-services.vercel.app/submit-your-cv";

  const image =
    "https://career-point-placement-services.vercel.app/og-images/og-image.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="submit CV, upload resume, job application, career point jobs, placement services, job portal India"
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

      <SubmitCV />
    </>
  );
}