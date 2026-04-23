import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      },
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
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            The Banking, Financial Services & Insurance (BFSI)
          </h2>
          <p className="leading-relaxed mb-4 text-gray-700">
            The Banking, Financial Services, and Insurance (BFSI) sector plays a
            vital role in supporting economic growth and financial stability.
            Organizations in this industry require skilled professionals who
            understand financial systems, regulatory frameworks, and evolving
            customer expectations in a rapidly changing market.
          </p>

          <p className="leading-relaxed text-gray-700">
            We provide BFSI recruitment and staffing solutions, helping banks,
            financial institutions, and insurance companies hire experienced
            professionals in financial operations, risk management, compliance,
            and digital banking services. Our focus is on building strong teams
            that drive efficiency, governance, and long-term growth.
          </p>
        </div>

        <div
          className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/industries/bfsi.webp"
              alt="BFSI recruitment banking financial services insurance professionals"
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
