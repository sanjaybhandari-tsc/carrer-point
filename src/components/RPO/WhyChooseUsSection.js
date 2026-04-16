export default function WhyChooseUs() {
  const features = [
    {
      title: "Dedicated Recruitment Team",
      description:
        "A focused recruitment team works closely with the client to manage ongoing hiring requirements.",
      icon: "/icons/shield.svg",
    },
    {
      title: "Structured Hiring Management",
      description:
        "We streamline sourcing, screening, and interview coordination to improve recruitment efficiency.",
      icon: "/icons/flask.svg",
    },
    {
      title: "Recruitment Insights & Reporting",
      description:
        "Regular hiring updates, recruitment trackers, and analytics help maintain transparency throughout the process.",
      icon: "/icons/report.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-gray-900">
          Why <span className="text-blue-600">Choose</span> Us ?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}