import React from "react";

function ServicesSecondCompo({ hiringData }) {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
      {hiringData.map((item, index) => (
        <div
          key={index}
          className="max-w-6xl h-full mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12 mb-12"
        >
          {/* Image */}
          <div className="w-full h-full xl:w-1/2">
            <div className="rounded-2xl h-full overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full xl:w-1/2">
            <h2 className="heading mb-5 md:mb-6">{item.title}</h2>

            {/* Flexible paragraphs */}
            {item.description.map((para, i) => (
              <p key={i} className="content mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ServicesSecondCompo;
