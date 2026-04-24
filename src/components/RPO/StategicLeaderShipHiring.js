import Image from "next/image";

export default function StategicLeaderShipHiring() {
  const hiringData = [
    {
      title: "Managed Hiring Solutions",
      image: "/images/rpa/Managed Hiring Solutions.webp",
      description: [
        "   Recruitment Process Outsourcing (RPO) allows organizations to delegate part or the entire recruitment function to a dedicated recruitment partner. This approach helps companies streamline hiring activities while improving efficiency and consistency.",
        "     Our RPO solutions provide organizations with a structured recruitment process supported by a dedicated hiring team. From sourcing and screening candidates to managing interviews, offer rollouts, and reporting, we ensure a smooth and organized recruitment workflow.",
      ],
    },
  ];
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">
        <div className="w-full xl:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/rpa/Managed Hiring Solutions.webp"
              alt="Managed Hiring Solutions"
              width={800}
              height={600}
              priority
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl mb-5 md:mb-6">
            Managed Hiring Solutions
          </h2>

          <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
            Recruitment Process Outsourcing (RPO) allows organizations to
            delegate part or the entire recruitment function to a dedicated
            recruitment partner. This approach helps companies streamline hiring
            activities while improving efficiency and consistency.
          </p>

          <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl leading-relaxed">
            Our RPO solutions provide organizations with a structured
            recruitment process supported by a dedicated hiring team. From
            sourcing and screening candidates to managing interviews, offer
            rollouts, and reporting, we ensure a smooth and organized
            recruitment workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
