import React from "react";
import Image from "next/image";

function HeaderPart() {
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-12 lg:py-22 rounded-b-2xl overflow-hidden">
      <Image
        className="absolute -top-13 lg:-top-10 -left-5"
        alt="header permanent hiring decoration"
        src="/images/permanentHiring/permanentTop1.svg"
        width={70}
        height={70}
      />

      <Image
        className="absolute -top-7 -left-0 lg:top-0 lg:left-0 md:-top-4 md:left-0 "
        alt="header permanent hiring decoration"
        src="/images/permanentHiring/permanentTop2.svg"
        width={100}
        height={100}
      />

      <Image
        className="absolute -top-7 -right-0  lg:top-0 lg:right-0 md:-top-4 md:right-0"
        alt="header permanent hiring decoration"
        src="/images/permanentHiring/permanentTop3.svg"
        width={100}
        height={100}
      />

      <Image
        className="absolute  -top-13  lg:-top-10 -right-5"
        alt="header permanent hiring decoration"
        src="/images/permanentHiring/permanentTop4.svg"
        width={70}
        height={70}
      />

      <h1 className="heading  sm:!font-semibold md:!font-bold lg:!font-extrabold text-white">
        Contract Staffing
      </h1>
    </div>
  );
}

export default HeaderPart;
