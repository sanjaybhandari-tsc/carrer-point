"use client";

import { useState } from "react";
import WorkCard from "./WorkCard";

const howWeWorkData = [
  {
    id: "01",
    title: "Leadership Discussion",
    description:
      "We begin with detailed discussions to understand the leadership expectations, responsibilities, and strategic importance of the role.",
  },
  {
    id: "02",
    title: "Market Mapping",
    description:
      "Potential senior professionals are identified through market research and industry talent mapping.",
  },
  {
    id: "03",
    title: "Candidate Engagement",
    description:
      "Targeted candidates are approached confidentially and engaged for potential leadership opportunities.",
  },
  {
    id: "04",
    title: "Screening & Assessment",
    description:
      "Candidates undergo detailed screening and background evaluation to assess leadership suitability.",
  },
  {
    id: "05",
    title: "Client Discussions & Selection",
    description:
      "Shortlisted leaders are presented to the client, followed by discussions, negotiations, and final appointment.",
  },
];

export default function HowWeWork() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = howWeWorkData.length - visibleCards;

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section
      className="h-[80vh] bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-20 overflow-hidden"
      aria-label="Executive Search Process - How We Work"
    >
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        Executive Search Process:{" "}
        <span className="text-white/90">How We Work</span>
      </h2>

      <p className="sr-only">
        Our executive search process includes leadership requirement discussion,
        market mapping, candidate engagement, screening, and final selection of
        senior leadership talent.
      </p>

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {howWeWorkData.map((item) => (
              <div key={item.id} className="w-full md:w-1/3 flex-shrink-0">
                <WorkCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10 ml-6">
          <button
            onClick={prevSlide}
            aria-label="Previous step in executive search process"
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next step in executive search process"
            className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}