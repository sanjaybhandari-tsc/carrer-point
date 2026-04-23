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
    <section
      ref={sectionRef}
      className="bg-[#0B2239] py-10 md:py-16 px-4 overflow-hidden"
    >
      <div className="mx-auto p-6 md:p-10 rounded-lg lg:px-30 lg:py-12">

        <h2
          className={`text-center heading-bold leading-[1.5] text-white mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          Awards And Recognition
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-strich mb-5">
          <div className={`flex gap-6 flex-col order-1 transition-all duration-700 lg:max-h-60  xl:max-h-110 overflow-y-auto pr-2 no-scrollbar ${visible  ? "opacity-100 translate-x-0": "opacity-0 -translate-x-16" }`}
          >
            {awardsData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-start sm:gap-3 justify-center flex-col xl:w-auto lg:w-16 shrink-0 ">
                  <Image
                    src="/images/about/awardsIcon.svg"
                    alt="icon"
                    width={24}
                    height={24}
                    className="mt-1 object-contain shrink-0"
                  />
                </div>
                <div className="flex items-start justify-center">
                  <p className=" text-left content leading-[1.5] text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`w-full relative rounded-lg overflow-hidden order-2 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16" }`}
          >
            <Image
              src="/images/about/awardsImage.webp"
              alt="Awards"
              width={500}
              height={400}
              className="object-contain w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}