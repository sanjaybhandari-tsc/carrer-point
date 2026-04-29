import React from "react";
import Image from "next/image";
function WeConnect() {
  return (
    <>
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
            We <span className="text-[#0277BD]"> connect</span> organizations
            with professionals who align with their
            <span className="text-[#0277BD]"> goals</span> and culture.
          </h2>
        </div>
      </div>
    </>
  );
}

export default WeConnect;
