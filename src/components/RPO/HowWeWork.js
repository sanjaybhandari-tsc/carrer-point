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

  const nextSlide = () => {
    if (index < howWeWorkData.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="h-[100vh] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] py-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        How We Work
      </h2>
      <div className="relative max-w-6xl mx-auto">
        
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 320}px)`,
            }}
          >
            {howWeWorkData.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10 ml-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white/20"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}