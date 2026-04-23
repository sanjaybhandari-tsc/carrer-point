import React from "react";

function WhyChoose({ reasons }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="heading md:!font-bold text-center">
        Why <span className="text-[var(--color-primary-hover)]">Choose</span> Us
        ?
      </h3>
      <div className="flex flex-col  lg:flex-row w-full lg:w-[80%] justify-between px-7 lg:px-10 py-10 lg:py-18 gap-10">
        {reasons.map((reasons, idx) => {
          return (
            <div
              className="lg:w-[25%] w-full flex flex-col justify-center items-center  text-center gap-5"
              key={idx}
            >
              <img src={reasons.img} alt={reasons.heading} />
              <h4 className="subheading  md:!semi-bold ">{reasons.heading}</h4>

              <p className="content font-[500] text-[#333333]">
                {reasons.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChoose;
