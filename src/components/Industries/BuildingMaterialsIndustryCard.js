import InfoCard from "@/components/Industries/InfoCard";

export default function BuildingMaterialsIndustrySec() {
  const cards = [
    {
      title: "Production Management",
      description:
        "Professionals experienced in managing production activities and ensuring efficient manufacturing operations.",
      icon: "/icons/industries/Production Management.svg",
    },
    {
      title: "Supply Chain & Distribution",
      description:
        "Talent skilled in managing supply networks, logistics operations, and ensuring smooth distribution efficiency across markets.",
      icon: "/icons/industries/Supply Chain & Distribution.svg",
    },
    {
      title: "Quality & Process Standards",
      description:
        "Ensuring consistent product quality through structured processes, inspections, and operational standards.",
      icon: "/icons/industries/Quality & Process Standards.svg",
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