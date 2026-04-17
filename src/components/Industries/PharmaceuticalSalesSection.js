import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PharmaceuticalSalesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/industries/pharmaceuticalSales.png"
              alt="Pharmaceutical recruitment and sales professionals in healthcare industry"
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
            Pharmaceutical Sales
          </h2>
          <p className="leading-relaxed mb-4 text-gray-700">
            The pharmaceutical and healthcare sector plays a vital role in driving
            innovation, research, and public health advancement. With constant
            developments in medicine, technology, and regulatory standards,
            organizations require skilled professionals who understand this highly
            regulated and fast-evolving environment.
          </p>
          <p className="leading-relaxed text-gray-700">
            We provide pharmaceutical recruitment and staffing solutions, helping
            companies hire experienced professionals in sales, regulatory
            compliance, and healthcare operations. Our focus is on building strong
            teams that maintain quality standards, support innovation, and drive
            long-term growth across the healthcare ecosystem.
          </p>
        </div>

      </div>
    </section>
  );
}