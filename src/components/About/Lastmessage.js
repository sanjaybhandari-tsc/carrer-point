import React from "react";
import Image from "next/image";

export default function Lastmessage() {
  return (
    <div className="w-full px-3 lg:px-2  md:px-16 lg:px-[80px]  md:py-[40px] lg:py-[60px] bg-white ">
      <div className=" flex items-start justify-around ">
        {/* <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 "> */}
          <div className="mb-6  h-4 w-10 md:h-7 md:w-7 lg:h-12 lg:w-10 xl:h-15 xl:w-20">
          <Image
            src="/images/about/quote.svg" 
            alt="quote"
            width={84}
            height={84}
            className="object-cover"
          />
        </div>
        {/* <h2 className=" text-[#333333] message-About"> */}
        <h2 className=" text-[#333333] independent-text">
          Our journey is driven by<span className="text-[#0277BD]"> trust</span>, experience, and a
          <span className="text-[#0277BD]"> commitment</span> to connecting
          organizations with the<span className="text-[#0277BD]"> right talent</span>.
        </h2>

      </div>
    </div>
  );
}