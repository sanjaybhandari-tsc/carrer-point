import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function PharmaceuticalSection() {
  const cards = [
    {
      title: "Production & Operations",
      description:
        "Professionals experienced in managing production workflows, operational processes, and manufacturing efficiency.",
      icon: "/icons/industries/Production & Operations.svg",
    },
    {
      title: "Quality Management",
      description:
        "Ensuring consistent product quality through strong standards, inspections, and effective process monitoring.",
      icon: "/icons/industries/Quality Management.svg",
    },
    {
      title: "Industrial Technology",
      description:
        "Talent familiar with modern manufacturing tools, automation systems, and evolving industrial technologies.",
      icon: "/icons/industries/Industrial Technology.svg",
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {cards.map((card, index) => {
            const delay = index * 150;

            return (
              <div
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
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}