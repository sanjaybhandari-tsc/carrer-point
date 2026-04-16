import { useEffect, useRef, useState } from "react";
 
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
          ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/industries/Fast Moving Consumer Goods (FMCG).png"
              alt="FMCG discussion"
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        
        <div
          className={`w-full xl:w-1/2 transition-all duration-700 ease-out delay-150
          ${
            show
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl text-gray-800 mb-5 md:mb-6">
            Fast Moving Consumer Goods (FMCG)
          </h2>

          <p className=" leading-relaxed mb-4">
            The FMCG sector operates in a fast-paced and highly competitive environment where efficiency, strong distribution networks, and market understanding play a crucial role. Companies in this industry require professionals who can respond quickly to changing consumer demands, shifting market trends, and evolving retail landscapes.
          </p>

          <p className=" leading-relaxed">
            We support FMCG organizations by connecting them with professionals who bring industry awareness, operational understanding, and the ability to contribute to sales growth, supply chain efficiency, product movement, and overall business performance across competitive consumer markets.
          </p>
        </div>

      </div>
    </section>
  );
}