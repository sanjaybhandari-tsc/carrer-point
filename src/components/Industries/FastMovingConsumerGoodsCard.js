import InfoCard from "@/components/Industries/InfoCard";

export default function FastMovingConsumerGoodsSection() {
  const cards = [
    {
      title: "Sales & Market Operations",
      description:
        "Professionals experienced in managing sales activities, market presence, and business expansion.",
      icon: "/icons/industries/Sales & Market Operations.svg",
    },
    {
      title: "Supply Chain Management",
      description:
        "Talent skilled in handling product movement, distribution systems, and supply chain coordination.",
      icon: "/icons/industries/Supply Chain Management.svg",
    },
    {
      title: "Consumer Market Insights",
      description:
        "Experts focused on understanding consumer behavior, market trends, and product demand analysis.",
      icon: "/icons/industries/Consumer Market Insights.svg",
    },
  ];

  return (
    <section className="w-full bg-white pb-24 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}