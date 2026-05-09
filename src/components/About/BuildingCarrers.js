import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BuildingCarrers() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full px-4  sm:px-10 md:px-16 lg:px-20 xl:px-25 py-6 pt-6 pb-5  md:py-20 lg:py-20 m-auto bg-white overflow-hidden"
    >
       <h2 className=" lg:hidden text-center heading-bold leading-[150%] pb-5">
            Building Careers
          </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-15">
        <div
          className={`w-[50%] md:w-[40%] transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <Image
            src="/images/about/buildingCarrers.svg"
            alt="Building Careers"
            width={500}
            height={500}
            className="w-full h-auto md:h-[50%]"
          />
        </div>
        <div
          className={`w-full lg:w-[60%] flex flex-col gap-2 sm:gap-4 md:gap-6 text-[#333333] transition-all duration-700 delay-200 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          <div>
          <h2 className="hidden lg:block heading-bold leading-[150%] xl:pb-6">
            Building Careers
          </h2></div>
          <div className="flex gap-[8px] flex-col">
          <p className=" content !font-roboto leading-relaxed">
            Career Point Placement Services is a trusted recruitment partner helping organizations connect with skilled professionals across industries. With more than 17 years of experience in the recruitment industry, we have successfully supported companies in building strong and capable teams.
          </p>

          <p className=" content !font-roboto leading-relaxed">
            Over the years, we have placed more than 15,000 candidates across India, supporting hiring from junior to senior leadership roles with compensation ranging from 3 LPA to 2 CR.
          </p>

          <p className=" content !font-roboto leading-relaxed">
            Our approach is built on ethical practices, industry expertise, and a strong commitment to helping organizations find the right talent for long-term growth.
          </p></div>

        </div>

      </div>
    </div>
  );
}