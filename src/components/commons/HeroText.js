import React from "react";

function HeaderPart({headingText}) {
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-12 lg:py-22 rounded-b-2xl overflow-hidden">
      <img
        className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
        alt="header parmanent hiring"
        src="/images/permanentHiring/permanentTop1.svg"
      />
      <img
        className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
        alt="header parmanent hiring"
        src="/images/permanentHiring/permanentTop2.svg"
      />

      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
        alt="header parmanent hiring"
        src="/images/permanentHiring/permanentTop3.svg"
      />
      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
        alt="header parmanent hiring"
        src="/images/permanentHiring/permanentTop4.svg"
      />
      <h1 className="font-black lg:text-5xl text-3xl text-white">
        {headingText}
      </h1>
    </div>
  );
}

export default HeaderPart;