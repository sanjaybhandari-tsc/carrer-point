import React from "react";
import Image from "next/image";

export default function Lastmessage() {
  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] bg-white">
      <div className="flex items-start justify-around gap-4">
        <div className="mb-6 w-20 sm:w-24 md:w-30 lg:w-40 shrink-0">
          <Image
            src="/images/about/quote.svg"
            alt="quote"
            width={84}
            height={84}
            className="object-cover w-full h-auto"
          />
        </div>

        <h2 className="font-montserrat font-bold text-[20px] sm:text-[22px] md:text-[30px] lg:text-[48px] leading-[150%] text-[#333333]">
          We help
          <span className="text-[#0277BD]"> organizations </span>, identify
          experienced
          <span className="text-[#0277BD]"> leaders</span> who bring strong
          vision and industry
          <span className="text-[#0277BD]"> expertise </span>.
        </h2>
      </div>
    </section>
  );
}
