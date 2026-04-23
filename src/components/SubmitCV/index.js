import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeadingSubmitCV from "./HeadingSubmitCV";
import AboutThejob from "./AboutThejob";
import SubmitcvForm from "./SubmitcvForm";

export default function SubmitCV() {
  const [jobExists, setJobExists] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedJob = localStorage.getItem("job");
    setJobExists(!!storedJob);
    const handleRouteChange = (url) => {
      if (!url.includes("/jobs/submit-your-cv")) {
        localStorage.removeItem("job");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <HeadingSubmitCV />
      {jobExists && <AboutThejob />}
      <SubmitcvForm />
    </>
  );
}
