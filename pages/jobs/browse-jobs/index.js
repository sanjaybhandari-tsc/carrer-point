import Head from "next/head";
import BrowserComponent from "@/components/BrowserJobs/Index";
import React from "react";

export default function BrowserJobsPage() {
  return (
    <>
      <Head>
        <title>Hiring Solutions | Browse Jobs</title>

        <meta
          name="description"
          content="Discover roles that align with your skills, ambition, and future goals. Explore 500+ active jobs across industries and take the next step in your career."
        />

        <meta
          name="keywords"
          content="jobs, hiring, career opportunities, BFSI jobs, FMCG jobs, manufacturing jobs, pharmaceutical jobs, job search"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        
        <meta property="og:title" content="Hiring Solutions | Browse Jobs" />
        <meta
          property="og:description"
          content="Find your next career opportunity from 500+ active jobs across top industries."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/browse-jobs" />
      </Head>

      <BrowserComponent />
    </>
  );
}