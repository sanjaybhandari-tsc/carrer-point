import Image from "next/image";

export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Leadership Talent Identification",
      description:
        "We specialize in identifying senior leaders, CXOs, and experienced professionals with strong leadership capabilities & industry expertise.",
      icon: "/icons/executivesearch/Leadership Talent Identification.svg",
    },
    {
      title: "Confidential Executive Search Approach",
      description:
        "Our executive search process ensures complete confidentiality and professionalism in senior-level recruitment and leadership hiring.",
      icon: "/icons/executivesearch/Confidential Search Approach.svg",
    },
    {
      title: "Strategic Talent Evaluation",
      description:
        "Candidates undergo structured screening, leadership assessment, and background evaluation to ensure the right executive fit for your organization.",
      icon: "/icons/executivesearch/Strategic Talent Evaluation.svg",
    },
  ];

  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-20"
      aria-label="Why Choose Our Executive Search Services"
    >
      <div className="max-w-6xl mx-auto mb-6 md:mb-12 lg:mb-[60px]">

        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] text-center md:text-4xl text-gray-800 mb-18">
          Why Choose Our{" "}
          <span className="text-[var(--color-primary-hover)]">
            Executive Search Services
          </span>
          ?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >

              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon for executive search services`}
                  width={56}
                  height={56}
                />
              </div>

              <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-3">
                {item.title}
              </h3>

              <p className="font-roboto font-normal text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}