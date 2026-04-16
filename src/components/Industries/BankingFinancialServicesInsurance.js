import { useEffect, useRef, useState } from "react";

export default function BankingFinancialServicesInsurance() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">

        
        <div
          className={`w-full xl:w-1/2 transition-all duration-700 ease-out
          ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            Banking, Financial Services & Insurance (BFSI)
          </h2>

          <p className=" leading-relaxed mb-4">
            The BFSI sector plays a vital role in supporting economic growth and
            financial stability. Organizations in this industry require
            professionals who understand financial systems, regulatory
            environments, and evolving customer expectations within a rapidly
            changing market landscape.
          </p>

          <p className=" leading-relaxed">
            We support banks, financial institutions, and insurance
            organizations by connecting them with professionals who bring
            analytical expertise, industry awareness, and the ability to
            contribute to efficient operations, risk management, and long-term
            organizational growth.
          </p>
        </div>

        
        <div
          className={`w-full xl:w-1/2 transition-all duration-700 ease-out delay-150
          ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/industries/bfsi.png"
              alt="BFSI industry"
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}