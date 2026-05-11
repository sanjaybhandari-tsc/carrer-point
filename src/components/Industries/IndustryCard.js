import { useEffect, useRef, useState } from "react";
import InfoCard from "@/components/Industries/InfoCard";

export default function PharmaceuticalSection({ cards }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // return (
  //   <section
  //     ref={sectionRef}
  //     className="w-full bg-white pb-24 px-4 sm:px-6 md:px-10 lg:px-16"
  //   >
  //     <div className="max-w-7xl mx-auto">
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
  //         {cards.map((card, index) => {
  //           const delay = index * 150;
  //           return (
  //             <article
  //               key={index}
  //               className={`transition-all duration-700 ease-out transform
  //               ${
  //                 isVisible
  //                   ? "opacity-100 translate-y-0"
  //                   : "opacity-0 translate-y-10"
  //               }`}
  //               style={{ transitionDelay: `${delay}ms` }}
  //             >
  //               <div className="h-full hover:-translate-y-2 transition-transform duration-300">
  //                 <InfoCard
  //                   icon={card.icon}
  //                   title={card.title}
  //                   description={card.description}
  //                 />
  //               </div>
  //             </article>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
  <section
    ref={sectionRef}
    className="relative w-full bg-white pb-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
  >
    {/* Ellipse */}

<div
  className="hidden lg:block absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[100%] h-[160px] rounded-[50%] z-0 pointer-events-none"
  style={{
    background: "radial-gradient(ellipse at center, #039BE6 7%, #ffffff 100%)",
       filter: "blur(18px) saturate(100%)",
  opacity: .12,

  }}
/>

    <div className="relative max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {cards.map((card, index) => {
          const delay = index * 150;
          return (
            <article
              key={index}
              className={`transition-all duration-700 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="h-full">
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
}
