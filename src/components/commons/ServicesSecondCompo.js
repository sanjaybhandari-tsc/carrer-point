import React from "react";
import Image from "next/image";

function ServicesSecondCompo({ hiringData }) {
  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6.5 md:py-10 lg:py-15 w-full bg-white">
      {hiringData.map((item, index) => (
        <div
          key={index}
          className="w-full mx-auto flex flex-col xl:flex-row items-center gap-6 md:gap-12 lg:gap-15"
        >
          {/* Image */}
          <div className={`w-full xl:w-1/2 rounded-lg overflow-hidden ${index % 2 !== 0 ? "xl:order-2" : "xl:order-1"}`}>
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={450}
              className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover object-center"
               style={{ objectPosition: item.objectPosition }}
            />
          </div>

          {/* Content */}
          <div className={`w-full xl:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? "xl:order-1" : "xl:order-2"}`}>
            <h2 className="main-heading mb-5 md:mb-6">{item.title}</h2>
            {item.description.map((para, i) => (
              <p key={i} className="main-content mb-4">
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