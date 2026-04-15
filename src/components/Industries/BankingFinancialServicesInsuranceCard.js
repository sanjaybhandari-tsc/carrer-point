import InfoCard from "@/components/Industries/InfoCard";

export default function BankingIndustrySection() {
  const cards = [
    {
      title: "Financial Operations",
      description:
        "Professionals experienced in managing financial operations, transactions, and structured banking processes.",
      icon: "/icons/industries/Financial Operations.svg",
    },
    {
      title: "Risk & Compliance",
      description:
        "Experts focused on regulatory compliance, financial risk monitoring, and operational governance.",
      icon: "/icons/industries/Risk & Compliance.svg",
    },
    {
      title: "Customer & Digital Services",
      description:
        "Talent supporting customer services, financial platforms, and evolving digital banking systems and experiences.",
      icon: "/icons/industries/Customer & Digital Services.svg",
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