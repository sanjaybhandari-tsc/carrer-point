import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(0); // ✅ SSR-safe

  useEffect(() => {
    setScreenWidth(window.innerWidth); // ✅ set on client only
    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screenWidth;
}

export default function Lastmessage() {
  const screenWidth = useScreenSize();

  const iconSize = useMemo(() => {
    if (screenWidth < 768) return 24;  // Mobile
    if (screenWidth < 1024) return 28; // Tablet
    return 52;                         // Desktop
  }, [screenWidth]);

  return (
    <section className="pt-6 md:pt-12 lg:pt-[60px] pb-3 md:pb-6 lg:pb-[30px]">
      <div className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
        <div className="flex items-start "> {/* ✅ responsive gap */}
          {screenWidth > 0 && ( // ✅ prevent SSR flash
            <Image
              src="/images/about/quote.svg"
              alt="Recruitment services"
              width={iconSize}
              height={iconSize}
              className="object-contain flex-shrink-0 -mt-1 md:-mt-1.5 lg:-mt-2" // ✅ scaled mt, object-contain for SVG
            />
          )}
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
      </div>
    </section>
  );
}