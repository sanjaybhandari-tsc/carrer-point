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

export default function HeroText() {
  const screenWidth = useScreenSize();

  const iconSize = useMemo(() => {
    if (screenWidth < 768) return 18; // Mobile
    if (screenWidth < 1024) return 24; // Tablet
    return 32; // Laptop
  }, [screenWidth]);
  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] w-full bg-white">
      <div className="flex items-start ">
        <Image
          src="/images/about/quote.svg"
          alt="Quotation icon"
          width={iconSize}
          height={iconSize}
          className="object-cover flex-shrink-0 -mt-1"
        />
        <h2 className="independent-text">
          We help{" "}
          <span className="text-[var(--color-primary)]">organizations</span>{" "}
          across industries{" "}
          <span className="text-[var(--color-primary)]">connect</span> with
          professionals who understand their{" "}
          <span className="text-[var(--color-primary)]">unique</span>{" "}
          challenges.
        </h2>
      </div>
    </section>
  );
}
