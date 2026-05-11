import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const awardsData = [
  "Topper in MH, Goa & Gujarat - 'January Ka Josh' Award from HDFC Life Insurance.",
  "Gold Consultant Award from HDFC Life Insurance.",
  "Top in Pan India for LFS Recruitment Award from Birla SunLife Insurance.",
  "Gold Consultant Award from HDFC Life Insurance.",
  "Best Consultant Award from Max Life Insurance.",
  "Best Consultant Award from Abbott Healthcare.",
  "Best Consultant Award from HDFC Bank.",
];

export default function Awards() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div ref={sectionRef} className="mx-auto py-[28px]   md:py-[40px] lg:py-[60px] px-4  rounded-none lg:rounded-lg lg:px-20  overflow-hidden bg-[#0B2239] ">

      <h2
        className={`text-center main-heading text-white mb-6 md:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        Awards And Recognition
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-strich mb-6">
        {/* <div className={`flex lg:gap-6 gap-2 flex-col  transition-all duration-700 lg:max-h-60  xl:max-h-110 overflow-y-auto pr-2 no-scrollbar ${visible  ? "opacity-100 translate-x-0": "opacity-0 -translate-x-16" } order-2 lg:order-1`}
          > */}
        <div className={`flex lg:gap-6 gap-3 flex-col h-full transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          } order-2 lg:order-1`}>
          {awardsData.map((item, index) => (
            <div key={index} className="flex items-center gap-3 ">
              <div className="flex items-start sm:gap-2 justify-center flex-col lg:w-auto  shrink-0 ">
                <Image
                  src="/images/about/awardsIcon.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1 object-contain  shrink-0"
                />
              </div>
              <div className="flex items-start justify-center ">
                <p className=" text-left main-content text-white w-full">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`w-full relative rounded-lg overflow-hidden xl:h-[90%]  transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"} order-1 lg:order-2`}
        >
          <Image
            src="/images/about/awardsImage.webp"
            alt="Awards"
            width={500}
            height={400}
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </div>
  );
}