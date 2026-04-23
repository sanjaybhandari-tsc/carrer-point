import React from "react";
import Image from "next/image";

export default function Lastmessage() {
  return (
    <div className="w-full px-2 md:px-16 bg-white  md:py-24 ">
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
        <h2 className=" text-[#333333] message">
          Our journey is driven by<span className="text-[#0277BD]"> trust</span>, experience, and a
          <span className="text-[#0277BD]"> commitment</span> to connecting
          organizations with the<span className="text-[#0277BD]"> right talent</span>.
        </h2>

      </div>
    </div>
  );
}