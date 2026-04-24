import Image from "next/image";
import React from "react";

function WeHelp() {
  return (
    <div className="w-full px-2 md:px-16 bg-white  py-8 md:py-16  ">
      <div className=" flex items-start justify-around ">
        <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 ">
          <Image
            src="/images/about/quote.svg"
            alt="quote"
            width={84}
            height={84}
            className="object-cover"
          />
        </div>
        <h2 className=" text-[#333333] message-About">
          We help <span className="text-[#0277BD]">organizations</span> access
          skilled <span className="text-[#0277BD]">professionals </span>for
          project-based and short-term{" "}
          <span className="text-[#0277BD]">staffing</span> needs.
        </h2>
      </div>
    </div>
  );
}

export default WeHelp;
