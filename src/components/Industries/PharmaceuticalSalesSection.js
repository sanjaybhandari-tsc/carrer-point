import { useEffect, useRef, useState } from "react";

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
            <img
              src="/images/industries/pharmaceuticalSales.png"
              alt="Pharmaceutical discussion"
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

          <p className="leading-relaxed mb-4">
            The pharmaceutical and healthcare sector plays a vital role in driving
            innovation, research, and public health advancement. With constant
            developments in medicine, technology, and regulatory standards,
            organizations require professionals who understand the industry’s
            dynamic and highly regulated environment.
          </p>

          <p className="leading-relaxed">
            We support pharmaceutical companies in building capable teams by
            connecting them with professionals who bring the right expertise,
            adaptability, and understanding of evolving industry demands. Our focus
            is on helping organizations strengthen their workforce so they can
            maintain quality standards, support innovation, and contribute to
            long-term growth within the healthcare ecosystem.
          </p>
        </div>

      </div>
    </section>
  );
}