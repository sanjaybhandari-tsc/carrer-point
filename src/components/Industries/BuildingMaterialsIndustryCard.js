import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function BuildingMaterialsIndustrySec() {
  const cards = [
    {
      title: "Production Management",
      description:
        "Professionals experienced in managing production activities, manufacturing workflows, and operational efficiency in the building materials industry.",
      icon: "/icons/industries/production-management.svg",
    },
    {
      title: "Supply Chain & Distribution",
      description:
        "Talent skilled in supply chain management, logistics operations, and distribution systems across building materials and construction markets.",
      icon: "/icons/industries/supply-chain-distribution.svg",
    },
    {
      title: "Quality & Process Standards",
      description:
        "Experts ensuring consistent product quality through structured processes, inspections, and operational standards in the construction materials sector.",
      icon: "/icons/industries/quality-process-standards.svg",
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pb-24 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">
          Building Materials Industry Recruitment and Staffing Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {cards.map((card, index) => {
            const delay = index * 150;

            return (
              <article
                key={index}
                className={`transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="h-full transition-transform duration-300 hover:-translate-y-2">
                  <InfoCard {...card} />
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}