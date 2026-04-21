import React, { useEffect, useRef, useState } from "react";

const categories = [
  { title: "Pharmaceutical", jobs: 1126, img: "/images/broserJobs/pharma.svg" },
  {
    title: "Building Material",
    jobs: 1126,
    img: "/images/broserJobs/building.svg",
  },
  { title: "FMCG", jobs: 1126, img: "/images/broserJobs/fmcg.svg" },
  { title: "BFSI", jobs: 1126, img: "/images/broserJobs/bfsi.svg" },
  {
    title: "Manufacturing",
    jobs: 1126,
    img: "/images/broserJobs/settings.svg",
  },
];

export default function JobsCategory() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-20 overflow-hidden"
    >
      <div
        className={`text-center max-w-7xl mx-auto   transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold lg:mb-10">
          Browse Jobs by <span className="text-blue-500">Category</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-[18px] font-[500]  text-black lg:mb-20  ">
          Explore opportunities across different roles and industries, and find
          positions that align with your skills, interests, and career goals.
        </p>
      </div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 ">
        {categories.slice(0, 3).map((cat, index) => (
          <div
            key={index}
            className="flex justify-center cursor-pointer shadow-[0px_4px_4px_0px_#00000014] rounded-2xl"
          >
            <AnimatedCard cat={cat} visible={visible} delay={index * 120} />
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 ">
        {categories.slice(3).map((cat, index) => (
          <div
            key={index}
            className="w-full lg:w-[30%] flex justify-center cursor-pointer shadow-[0px_5px_5px_0px_#00000014] rounded-2xl"
          >
            <AnimatedCard
              cat={cat}
              visible={visible}
              delay={(index + 3) * 120}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedCard({ cat, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full max-w-lg bg-white border-2 border-blue-400 rounded-2xl p-6 sm:p-8 text-center shadow-[0px_4px_4px_0px_#00000014] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex justify-center mb-3 sm:mb-4">
        <img
          src={cat.img}
          alt={cat.title}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold">
        {cat.title}
      </h3>
      <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-[16px] font-semibold">
        {cat.jobs} Jobs
      </p>
    </div>
  );
}
