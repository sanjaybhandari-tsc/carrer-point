import React from "react";

function WhyChoose({ reasons }) {
  return (
    <div className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] w-full flex flex-col justify-center items-center">
      <h3 className="main-heading text-center">
        Why <span className="text-[var(--color-primary-hover)]">Choose</span> Us
        ?
      </h3>
      <div className="lg:hidden w-full mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
  {reasons.map((reason, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center text-center gap-2 p-3 md:p-4"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
        <img src={reason.img} alt={reason.heading} className="w-full h-full object-contain" />
      </div>
      <p className="text-[11px] md:text-[13px] font-semibold text-gray-800 leading-tight break-words w-full">
        {reason.heading}
      </p>
      <p className="text-[10px] md:text-[12px] text-gray-500 leading-snug break-words w-full">
        {reason.desc}
      </p>
    </div>
  ))}
</div>
      <div className="hidden lg:flex flex-coll  lg:flex-row w-full justify-between mt-6 md:mt-12 lg:mt-[60px] gap-8">
        {reasons.map((reasons, idx) => {
          return (
            <div
              className="lg:w-[25%] w-full flex flex-col justify-center items-center  text-center gap-5"
              key={idx}
            >
              <img src={reasons.img} alt={reasons.heading} />
              <h4 className="card-heading  md:!semi-bold ">
                {reasons.heading}
              </h4>

              <p className="card-content text-[#333333]">{reasons.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChoose;
