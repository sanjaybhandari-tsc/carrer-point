import React from "react";

function WhyChoose({ reasons }) {
  return (
    <div className="w-full flex flex-col gap-7 md:gap-12 lg:gap-15 justify-center items-center py-7 md:py-10 lg:py-15">
      <h3 className="heading md:!font-bold text-center">
        Why <span className="text-[var(--color-primary-hover)]">Choose</span> Us
        ?
      </h3>
      <div className="flex flex-col items-center lg:flex-row w-full lg:w-[80%] justify-between px-7 lg:px-10  gap-5">
        {reasons.map((reasons, idx) => {
          return (
            <div
              className="sm:w-[60%] md:w-[25%] w-full flex flex-col md:flex-row justify-center items-center  text-center gap-2.5 md:gap-4.5 "
              key={idx}
            >
              <img src={reasons.img} alt={reasons.heading} />
              <h4 className="content  md:!semi-bold ">{reasons.heading}</h4>

              <p className="small-text text-[#333333]">{reasons.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChoose;
