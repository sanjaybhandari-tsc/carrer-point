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