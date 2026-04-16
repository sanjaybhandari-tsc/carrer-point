import React from "react";
import Image from "next/image";

export default function Lastmessage() {
  return (
    <div className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
      <div className=" flex items-start justify-around">
        <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 ">
          <Image
            src="/images/about/quote.svg" 
            alt="quote"
            width={84}
            height={84}
            className="object-cover"
          />
        </div>
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[150%] text-[#333333] text-[20px] sm:text-[22px] md:text-[30px]">
          We help<span className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[150%] text-[#0277BD]"> organizations </span>, identify experience
          <span className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[150%] text-[#0277BD]"> leaders</span> who bring strong vision and industry <span className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[150%] text-[#0277BD]"> expertise </span>.
        </h2>
      </div>
    </div>
  );
}