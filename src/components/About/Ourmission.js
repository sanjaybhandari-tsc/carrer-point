

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Ourmission() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.1}
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-white px-4 py-[28px]   md:py-[40px] lg:py-[60px] md:px-16 lg:px-24 overflow-x-hidden"
    >
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 lg:gap-[60px]">
        <div  className={`bg-[#0B2239] text-white rounded-3xl shadow-3xl p-5 md:p-10    transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <div className="flex flex-row items-center gap-3 md:flex-col md:items-start">
          <Image
            src="/images/about/visionIcon.svg"
            alt="Vision Icon"
            width={64}
            height={64}
            className="mb-4 h-10 w-10 md:h-15 md:w-15"
          />

          <h2 className="main-heading mb-4">
            Our Vision
          </h2></div>

          <p className="main-content">
            To build a strong nationwide recruitment presence by 2030, supporting
            organizations with dependable talent solutions and industry expertise.
            The focus is on developing a 200+ skilled workforce, expanding presence
            across major metro cities, and serving 100+ clients across multiple
            industries. A dedicated training center will also be established to help
            individuals build practical skills and prepare for long-term career
            opportunities.
          </p>
        </div>
        <div
          className={`bg-[#e5e5e55e] text-black rounded-3xl shadow-md p-5 md:p-10 border border-gray-200   transition-all duration-700 delay-200 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          <div className="flex flex-row items-center gap-3 md:flex-col md:items-start">
          <Image
            src="/images/about/targeticon.svg"
            alt="Mission Icon"
            width={64}
            height={64}
            className="mb-4 h-10 w-10 md:h-15 md:w-15"
          />

          <h2 className="main-heading mb-4">
            Our Mission
          </h2></div>

          <p className="main-content">
            Deliver reliable recruitment solutions that connect organizations with
            the right talent while creating meaningful opportunities for
            professionals. Guided by integrity, transparency, and ethical practices,
            the approach remains strongly customer-focused, with a collaborative team
            committed to understanding hiring needs, supporting candidate growth, and
            building long-term partnerships with clients.
          </p>
        </div>

      </div>
    </div>
  );
}