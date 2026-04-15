import InfoCard from "@/components/Industries/InfoCard";

export default function PharmaceuticalSection() {
    const cards = [
  {
    title: "Production & Operations",
    description:
      "Professionals experienced in managing production workflows, operational processes, and manufacturing efficiency.",
    icon: "🛡️",
  },
  {
    title: "Quality Management",
    description:
      "Ensuring consistent product quality through strong standards, inspections, and effective process monitoring.",
    icon: "⚗️",
  },
  {
    title: "Industrial Technology",
    description:
      "Talent familiar with modern manufacturing tools, automation systems, and evolving industrial technologies.",
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