import React, { useMemo,useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function Lastmessage() {
 function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screenWidth;
}

  const screenWidth = useScreenSize();

  const iconSize = useMemo(() => {
    if (screenWidth < 768) return 18;
    if (screenWidth < 1024) return 24;
    return 32;
  }, [screenWidth]);

  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] bg-white">
      <div className="flex items-start ">
        <Image
          src="/images/about/quote.svg"
          alt="quote"
          width={iconSize}
          height={iconSize}
          className="object-cover flex-shrink-0 -mt-1"
        />
        <h2 className="independent-text">
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