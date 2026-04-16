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
        <h2 className="font-bold text-[#333333] 
          text-[20px] sm:text-[22px] md:text-[30px] lg:text-[50px]">
          We<span className="text-[#0277BD]"> support</span>, organizations streamline hiring while building 
          <span className="text-[#0277BD]"> strong</span> and capable team.
        </h2>

      </div>
    </div>
  );
}