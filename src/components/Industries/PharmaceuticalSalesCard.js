import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function PharmaceuticalSection() {
  const cards = [
    {
      title: "Regulatory Compliance",
      description:
        "Professionals experienced in pharmaceutical regulatory compliance, quality standards, and production processes.",
      icon: "/icons/industries/regulatory-compliance.svg",
    },
    {
      title: "Research & Innovation",
      description:
        "Talent supporting pharmaceutical research, product development, and healthcare innovation.",
      icon: "/icons/industries/research-innovation.svg",
    },
    {
      title: "Quality & Safety Standards",
      description:
        "Experts focused on pharmaceutical quality control, safety protocols, and regulatory guidelines.",
      icon: "/icons/industries/quality-safety-standards.svg",
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
          Pharmaceutical Recruitment Areas and Job Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => {
            const delay = index * 150;

            return (
              <article
                key={index}
                className={`transition-all duration-700 ease-out transform
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="h-full hover:-translate-y-2 transition-transform duration-300">
                  <InfoCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}