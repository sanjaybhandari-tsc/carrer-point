import Head from "next/head";
import SubmitCV from "@/components/SubmitCV";
import React from "react";

export default function Submitpage() {
  return (
    <>
      <Head>
        <title>Submit Your CV | Career Point Placement Services</title>

        <meta
          name="description"
          content="Submit your CV to Career Point Placement Services and get discovered by top employers across industries like BFSI, FMCG, Manufacturing, and more."
        />

        <meta
          name="keywords"
          content="submit CV, upload resume, job application, career point jobs, placement services, job portal India"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Submit Your CV | Career Point" />
        <meta
          property="og:description"
          content="Upload your resume and apply for the latest job opportunities across multiple industries."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/browse-jobs" />
      </Head>

      <SubmitCV />
    </>
  );
}