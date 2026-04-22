import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function ManufacturingSection() {
  const cards = [
    {
      title: "Production & Operations",
      description:
        "Professionals experienced in managing production workflows, manufacturing operations, and industrial efficiency.",
      icon: "/icons/industries/production-operations.svg",
    },
    {
      title: "Quality Management",
      description:
        "Ensuring consistent product quality through strict standards, inspections, and process control systems.",
      icon: "/icons/industries/quality-management.svg",
    },
    {
      title: "Industrial Technology",
      description:
        "Talent skilled in modern manufacturing technologies, automation systems, and industrial engineering tools.",
      icon: "/icons/industries/industrial-technology.svg",
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
          Manufacturing Recruitment and Staffing Solutions Roles
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
                <div className="h-full transition-transform duration-300">
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