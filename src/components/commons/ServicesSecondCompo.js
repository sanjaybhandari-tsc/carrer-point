import React from "react";

function ServicesSecondCompo({ hiringData }) {
  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6.5 md:py-10 lg:py-15 w-full bg-white">
      {hiringData.map((item, index) => (
        <div
          key={index}
          className="w-full lg:h-[50vh] mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-15 "
        >
          {/* Image */}
          <div className="w-full h-fit  lg::h-full lg:w-1/2 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover "
            />
          </div>

          {/* Content */}
          <div className="w-full  lg:h-full  lg:w-1/2 flex flex-col justify-center ">
            <h2 className="main-heading  mb-5 md:mb-6">{item.title}</h2>

            {/* Flexible paragraphs */}
            {item.description.map((para, i) => (
              <p key={i} className="main-content  mb-4">
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
