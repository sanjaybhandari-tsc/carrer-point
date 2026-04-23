import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home/Home.module.css";

function HowWeWork() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }, //mtlb 30% visible hone pr visible true hoga
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
    <div className="h-[100vh] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] py-20 overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-center heading font-semibold md:!bold text-white mb-16">
        How We Work
      </h2>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto ${
          visible ? styles.slideright : "opacity-0 translate-y-10"
        }`}
      >
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
      <h2 className="heading  md:!font-bold text-white/70 mb-4">{item.srNo}</h2>

      <h3 className="subheading font-semibold text-white mb-3">
        {item.heading}
      </h3>

      <p className="content text-white/80 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
