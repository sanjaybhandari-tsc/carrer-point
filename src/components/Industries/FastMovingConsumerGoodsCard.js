import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function FastMovingConsumerGoodsSection() {
  const cards = [
    {
      title: "Sales & Market Operations",
      description:
        "Professionals experienced in FMCG sales operations, market expansion, and consumer-driven business growth.",
      icon: "/icons/industries/sales-market-operations.svg",
    },
    {
      title: "Supply Chain Management",
      description:
        "Talent skilled in FMCG supply chain management, product distribution, and logistics coordination across retail networks.",
      icon: "/icons/industries/supply-chain-management.svg",
    },
    {
      title: "Consumer Market Insights",
      description:
        "Experts analyzing FMCG consumer behavior, market trends, and product demand forecasting.",
      icon: "/icons/industries/consumer-market-insights.svg",
    },
  ];

  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white pb-24 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">
          FMCG Recruitment and Fast Moving Consumer Goods Staffing Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {cards.map((card, index) => {
            const delay = index * 150;

            return (
              <article
                key={index}
                className={`transform transition-all duration-700 ease-out
                ${
                  show
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