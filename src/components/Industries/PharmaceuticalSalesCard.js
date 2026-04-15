import InfoCard from "@/components/Industries/InfoCard";

export default function PharmaceuticalSection() {
    const cards = [
  {
    title: "Regulatory Compliance",
    description:
      "Professionals familiar with pharmaceutical regulations, compliance standards, and quality control processes across production and operations.",
    icon: "🛡️",
  },
  {
    title: "Research & Innovation",
    description:
      "Talent supporting research, product development, and innovation within evolving pharmaceutical and healthcare environments.",
    icon: "⚗️",
  },
  {
    title: "Quality & Safety Standards",
    description:
      "Experts focused on maintaining strict quality standards, safety protocols, and regulatory guidelines in pharmaceutical operations.",
    icon: "📈",
  },
];
    
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

    </section>
  );
}