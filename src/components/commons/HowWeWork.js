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

  // Reset index when cardsPerView changes to avoid out-of-bounds
  useEffect(() => {
    setIndex(0);
  }, [cardsPerView]);

  const maxIndex = Math.max(0, workData.length - cardsPerView);

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const cardWidthPercent = 100 / cardsPerView;

  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] overflow-hidden flex flex-col items-center justify-center">
      <h2 className="main-heading text-center text-white">How We Work</h2>

      <div
        ref={ref}
        className={`relative w-full ${
          visible ? styles.slideright : "opacity-0 translate-y-10"
        }`}
      >
        {/* Slider track */}
        <div className="overflow-hidden mt-6 md:mt-12 lg:mt-[60px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidthPercent}%)`,
            }}
          >
            {workData.map((item) => (
              <WorkCard
                key={item.srNo}
                item={item}
                cardsPerView={cardsPerView}
              />
            ))}
          </div>
        </div>

        {/* Controls row: arrows + dot indicators */}
        <div className="flex items-center justify-between mt-8 px-2 sm:px-0">
          {/* Prev/Next buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className={`border-2 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold transition-colors duration-200 ${
                index > 0
                  ? "border-white text-white hover:bg-white/20"
                  : "border-white/30 text-white/30 cursor-not-allowed"
              }`}
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className={`border-2 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold transition-colors duration-200 ${
                index < maxIndex
                  ? "border-white text-white hover:bg-white/20"
                  : "border-white/30 text-white/30 cursor-not-allowed"
              }`}
            >
              →
            </button>
          </div>

          {/* Dot indicators — helpful on mobile */}
          {/* {maxIndex > 0 && (
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-white w-6 h-2"
                      : "bg-white/40 w-2 h-2 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item, cardsPerView }) {
  // Explicit width so Tailwind purge doesn't strip dynamic classes
  const widthStyle = {
    minWidth: `${100 / cardsPerView}%`,
    width: `${100 / cardsPerView}%`,
  };

  return (
    <div style={widthStyle} className="px-4 sm:px-6 flex-shrink-0">
      <h2 className="main-heading text-white mb-4">{item.srNo}</h2>
      <h3 className="main-subheading !font-bold text-white mb-3">
        {item.heading}
      </h3>
      <p className="main-content text-white/80">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
