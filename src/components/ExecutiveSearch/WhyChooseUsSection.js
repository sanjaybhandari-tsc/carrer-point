export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Leadership Talent Identification",
      description:
        "We focus on identifying experienced professionals with strong leadership capabilities and industry expertise.",
      icon: "/icons/executivesearch/Leadership Talent Identification.svg",
    },
    {
      title: "Confidential Search Approach",
      description:
        "Senior-level recruitment is handled with complete discretion and professionalism.",
      icon: "/icons/executivesearch/Confidential Search Approach.svg",
    },
    {
      title: "Strategic Talent Evaluation",
      description:
        "Candidates are assessed through detailed screening and background evaluation to ensure the right leadership fit.",
      icon: "/icons/executivesearch/Strategic Talent Evaluation.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] text-center md:text-4xl text-gray-800 mb-18">
          Why <span className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] text-center text-[var(--color-primary-hover)]">Choose</span> Us ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-montserrat font-bold text-lg sm:text-xl leading-relaxed text-center mb-3">
                {item.title}
              </h3>

              <p className="font-roboto font-normal text-base sm:text-lg leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
