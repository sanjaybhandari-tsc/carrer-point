import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FastMovingConsumerGoodsSection() {
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
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/industries/Fast Moving Consumer Goods (FMCG).png"
              alt="FMCG recruitment and consumer goods industry workforce distribution"
              width={600}
              height={400}
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>


        <div
          className={`w-full xl:w-1/2 transition-all duration-700 ease-out delay-150
          ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          

          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            The Fast Moving Consumer Goods (FMCG)
          </h2>
          <p className="leading-relaxed mb-4 text-gray-700">
            The Fast Moving Consumer Goods (FMCG) sector operates in a fast-paced
            and highly competitive environment where efficiency, strong distribution
            networks, and market understanding are critical. Companies in this industry
            require skilled professionals who can respond quickly to changing consumer
            demands and evolving retail trends.
          </p>

          <p className="leading-relaxed text-gray-700">
            We provide FMCG recruitment and staffing solutions, helping organizations
            hire experienced professionals in sales, supply chain management, and
            distribution operations. Our focus is on building high-performing teams
            that drive sales growth, optimize product movement, and improve overall
            business performance across competitive consumer markets.
          </p>
        </div>

      </div>
    </section>
  );
}