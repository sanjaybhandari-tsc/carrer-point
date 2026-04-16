import React, { useState } from "react";

function HowWeWork() {
  const workData = [
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

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < workData.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="h-[100vh] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] py-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        How We Work
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 320}px)`,
            }}
          >
            {workData.map((item) => (
              <WorkCard key={item.srNo} item={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10 ml-6">
          <button
            onClick={prevSlide}
            className={
              index > 0
                ? "btn border-2 rounded-[50%] w-10 h-10 text-white font-bold"
                : "btn border-2 rounded-[50%] w-10 h-10 text-[#B2B2B252] font-bold"
            }
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className={
              index < workData.length - 1
                ? "btn border-2 rounded-[50%] w-10 h-10 text-white font-bold"
                : "btn border-2 rounded-[50%] w-10 h-10 text-[#B2B2B252] font-bold"
            }
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function WorkCard({ item }) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] px-6">
      <h2 className="text-5xl font-bold text-white/70 mb-4">{item.srNo}</h2>

      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
        {item.heading}
      </h3>

      <p className="text-white/80 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
