import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screenWidth;
}


export default function Lastmessage() {
    const screenWidth = useScreenSize();
  
    const iconSize = useMemo(() => {
      if (screenWidth < 768) return 18; // Mobile
      if (screenWidth < 1024) return 24; // Tablet
      return 32; // Laptop
    }, [screenWidth]);
  return (
    <section className="pt-6 md:pt-12 lg:pt-[60px] pb-3 md:pb-6 lg:pb-[30px]">
  <div className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
    <div className="flex items-start ">
      <Image
        src="/images/about/quote.svg"
        alt="Recruitment services"
        width={iconSize}
        height={iconSize}
        className="object-cover flex-shrink-0 -mt-1"
      />
      <h2 className="independent-text">
        We help <span className="text-[var(--color-primary)]">organizations</span> across
        industries <span className="text-[var(--color-primary)]">connect</span> with
        professionals who understand their{" "}
        <span className="text-[var(--color-primary)]">unique</span> challenges.
      </h2>
    </div>
  </div>
</section>
    // <section className="pt-6 md:pt-12 lg:pt-[60px] pb-3 md:pb-6 lg:pb-[30px] ">
    //   <div className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
    //   <div className=" flex items-start justify-around">
    //     <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 ">
    //       <Image
    //         src="/images/about/quote.svg" 
    //         alt="Recruitment services"
    //         width={iconSize}
    //       height={iconSize}
    //         className="object-cover"
    //       />
    //     </div>
    //     {/* <h2 className="font-bold text-[#333333] 
    //       text-[20px] sm:text-[22px] md:text-[30px] lg:text-[50px]">
    //       We help <span className="text-[var(--color-primary)]">organizations</span> across
    //       industries <span className="text-[var(--color-primary)]">connect</span> with
    //       professionals who understand their{" "}
    //       <span className="text-[var(--color-primary)]">unique</span> challenges.
    //     </h2> */}
    //     <h2 className="independent-text">
    //       We help <span className="text-[var(--color-primary)]">organizations</span> across
    //       industries <span className="text-[var(--color-primary)]">connect</span> with
    //       professionals who understand their{" "}
    //       <span className="text-[var(--color-primary)]">unique</span> challenges.
    //     </h2>

    //   </div>
    // </div>
    // </section>
  );
}