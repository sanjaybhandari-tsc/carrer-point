export default function WhyChooseUs() {
  const features = [
    {
      title: "Dedicated Recruitment Team",
      description:
        "A focused recruitment team works closely with the client to manage ongoing hiring requirements.",
      icon: "/icons/rpa/Dedicated Recruitment Team.svg",
    },
    {
      title: "Structured Hiring Management",
      description:
        "We streamline sourcing, screening, and interview coordination to improve recruitment efficiency.",
      icon: "/icons/rpa/Structured Hiring Management.svg",
    },
    {
      title: "Recruitment Insights & Reporting",
      description:
        "Regular hiring updates, recruitment trackers, and analytics help maintain transparency throughout the process.",
      icon: "/icons/rpa/Recruitment Insights & Reporting.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
       <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] text-center md:text-4xl text-gray-800 mb-18">
          Why <span className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] text-center text-[var(--color-primary-hover)]">Choose</span> Us ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
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