import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BuildingMaterialsIndustrySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.8 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">
        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/industries/buildingMaterialsIndustry.png"
              alt="Building materials recruitment and construction industry workforce"
              width={600}
              height={400}
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out delay-150
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            Building Materials Industry
          </h2>

          <p className="leading-relaxed mb-4 text-gray-700">
            The building materials industry plays a key role in infrastructure
            development and construction growth. Companies in this sector
            require skilled professionals who understand production processes,
            supply chain networks, and evolving market demands in a competitive
            environment.
          </p>

          <p className="leading-relaxed text-gray-700">
            We provide recruitment and staffing solutions for the building
            materials industry, helping organizations hire experienced
            professionals in production management, supply chain, and
            distribution operations. Our focus is on building strong teams that
            support efficiency, quality, and long-term business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
