import { useEffect, useRef, useState } from "react";

export default function BuildingMaterialsIndustrySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/industries/buildingMaterialsIndustry.png"
              alt="Building materials industry"
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        
        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out delay-150
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            Building Materials Industry
          </h2>

          <p className=" leading-relaxed mb-4">
            The building materials sector plays a significant role in supporting infrastructure development and construction growth. Companies in this industry rely on professionals who understand production processes, supply networks, and evolving market demands within a competitive and fast-moving environment.
          </p>

          <p className=" leading-relaxed">
            We support organizations in the building materials space by connecting them with professionals who bring industry awareness, operational understanding, and the ability to contribute to efficient production, supply chain management, and distribution systems that support consistent business growth.
          </p>
        </div>

      </div>
    </section>
  );
}