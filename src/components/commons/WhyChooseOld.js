import React from "react";

function WhyChoose({ reasons }) {
  return (
    <div className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] w-full flex flex-col justify-center items-center">
      <h3 className="main-heading text-center">
        Why <span className="text-[var(--color-primary-hover)]">Choose</span> Us
        ?
      </h3>
      <div className="flex flex-col  lg:flex-row w-full lg:w-[80%] justify-between mt-6 md:mt-12 lg:mt-[60px] gap-10">
        {reasons.map((reasons, idx) => {
          return (
            <div
              className="lg:w-[25%] w-full flex flex-col justify-center items-center  text-center gap-5"
              key={idx}
            >
              <img src={reasons.img} alt={reasons.heading} />
              <h4 className="card-heading  md:!semi-bold ">{reasons.heading}</h4>

              <p className="card-content text-[#333333]">{reasons.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChoose;
