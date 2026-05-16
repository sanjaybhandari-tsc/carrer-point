import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home/Home.module.css";

function HowWeWork({ workData }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextSlide = () => {
    if (index < workData.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] overflow-hidden flex flex-col items-center justify-center">
      {/* <h2 className=" text-center text-4xl md:text-5xl font-semibold text-white mb-16"> */}
      <h2 className="main-heading text-center text-white">How We Work</h2>

      <div
        ref={ref}
        className={`relative  ${
          visible ? styles.slideright : "opacity-0 translate-y-10"
        }`}
      >
        <div className="overflow-hidden mt-6 md:mt-12 lg:mt-[60px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {workData.map((item) => (
              <WorkCard key={item.srNo} item={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10 ml-6">
          <button
            onClick={prevSlide}
            className={`border-2 rounded-full w-10 h-10 font-bold ${
              index > 0 ? "text-white" : "text-[#B2B2B252]"
            }`}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className={`border-2 rounded-full w-10 h-10 font-bold ${
              index < workData.length - cardsPerView
                ? "text-white"
                : "text-[#B2B2B252]"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item }) {
  return (
    <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-6">
      <h2 className="main-heading text-white mb-4">{item.srNo}</h2>

      <h3 className="main-subheading !font-bold text-white mb-3">
        {item.heading}
      </h3>

      <p className="main-content  text-white/80 ">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
