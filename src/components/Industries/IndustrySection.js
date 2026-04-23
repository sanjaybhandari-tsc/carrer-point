import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function IndustrySection({ data }) {
  const {
    title,
    description1,
    description2,
    imageSrc,
    imageAlt,
    imagePosition = "left",
  } = data;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const isLeft = imagePosition === "left";

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">

        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${isLeft ? "order-2 xl:order-2" : "order-2 xl:order-1"}
          `}
        >
          <h2 className="heading-bold mb-5 md:mb-6">
            {title}
          </h2>
          {/* <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            {title}
          </h2> */}

          <p className="content mb-4 ">
            {description1}
          </p>
          {/* <p className="leading-relaxed mb-4 text-gray-700">
            {description1}
          </p> */}

          <p className="content">
            {description2}
          </p>
          {/* <p className="leading-relaxed text-gray-700">
            {description2}
          </p> */}
        </div>

        
        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out delay-150
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${isLeft ? "order-1 xl:order-1" : "order-1 xl:order-2"}
          `}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}