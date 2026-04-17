import React, { useState, useEffect } from "react";

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
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextSlide = () => {
    if (index < workData.length - cardsPerView) {
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
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
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
            className={`border-2 rounded-full w-10 h-10 font-bold ${
              index > 0 ? "text-white" : "text-[#B2B2B252]"
            }`}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className={`border-2 rounded-full w-10 h-10 font-bold ${
              index < workData.length - cardsPerView
                ? "text-white"
                : "text-[#B2B2B252]"
            }`}
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
    <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-6">
      <h2 className="text-5xl font-bold text-white/70 mb-4">{item.srNo}</h2>

      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
        {item.heading}
      </h3>

      <p className="text-white/80 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
