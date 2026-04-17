"use client";

import { useState } from "react";
import WorkCard from "./WorkCard";

const howWeWorkData = [
  {
    id: "01",
    title: "Hiring Plan Understanding",
    description:
      "We begin by understanding the client’s hiring goals, company culture, and role requirements.",
  },
  {
    id: "02",
    title: "Dedicated Team Assignment",
    description:
      "A specialized recruitment team is assigned to manage the hiring process for the client.",
  },
  {
    id: "03",
    title: "Sourcing & Screening",
    description:
      "Candidates are sourced, evaluated, and shortlisted based on role requirements and organizational fit.",
  },
  {
    id: "04",
    title: "Interview Coordination",
    description:
      "We manage interview scheduling, feedback tracking, and communication throughout the evaluation process.",
  },
  {
    id: "05",
    title: "Offer & Reporting Management",
    description:
      "Our team handles offer rollouts, joining follow-ups, and provides regular hiring reports and recruitment insights.",
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
    <section className="h-[80vh] bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        How We Work
      </h2>

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
            aria-label="Previous step"
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next step"
            className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}