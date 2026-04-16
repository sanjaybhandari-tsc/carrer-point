import React from "react";

function HowWeWork() {
  const works = [
    {
      srNo: "01",
      heading: "Requirement Understanding",
      desc: "We begin by understanding the job role, required skills, experience level, and organizational expectations",
    },
    {
      srNo: "02",
      heading: "Talent Sourcing",
      desc: "Candidates are sourced through our database, professional networks, and trusted recruitment platforms.",
    },
    {
      srNo: "03",
      heading: "Screening & Shortlisting",
      desc: "Profiles are carefully reviewed and shortlisted based on qualifications, experience, and role suitability.",
    },
    {
      srNo: "04",
      heading: "Interview Coordination",
      desc: "We coordinate interviews between the client and selected candidates and manage feedback efficiently.",
    },
    {
      srNo: "05",
      heading: "Offer & Onboarding Support",
      desc: "Our team assists with offer",
    },
  ];
  return (
    <div className=" h-screen bg-[var(--color-primary-hover)] text-white">
      <h3 className="text-center font-bold text-5xl">How We Work</h3>
      <div>
        <div>
          <h2>01</h2>
          <h3>Requirement Understanding</h3>
          <p>
            We begin by understanding the job role, required skills, experience
            level, and organizational expectations
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
