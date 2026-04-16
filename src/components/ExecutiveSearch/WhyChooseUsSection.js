export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Leadership Talent Identification",
      description:
        "We focus on identifying experienced professionals with strong leadership capabilities and industry expertise.",
      icon: "/icons/shield.svg",
    },
    {
      title: "Confidential Search Approach",
      description:
        "Senior-level recruitment is handled with complete discretion and professionalism.",
      icon: "/icons/flask.svg",
    },
    {
      title: "Strategic Talent Evaluation",
      description:
        "Candidates are assessed through detailed screening and background evaluation to ensure the right leadership fit.",
      icon: "/icons/heartbeat.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
          Why <span className="text-blue-600">Choose</span> Us ?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}