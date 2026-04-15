"use client";
import { useRef } from "react";
import WorkCard from "./WorkCard";

export default function HowWeWork() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const data = [
    {
      id: "01",
      title: "Leadership Requirement Discussion",
      desc: "We begin with detailed discussions to understand the leadership expectations...",
    },
    {
      id: "02",
      title: "Market Mapping",
      desc: "Potential senior professionals are identified through market research...",
    },
    {
      id: "03",
      title: "Candidate Engagement",
      desc: "Targeted candidates are approached confidentially...",
    },
    {
      id: "04",
      title: "Leadership Requirement Discussion",
      desc: "We begin with detailed discussions to understand the leadership expectations...",
    },
    {
      id: "05",
      title: "Market Mapping",
      desc: "Potential senior professionals are identified through market research...",
    },
    {
      id: "06",
      title: "Candidate Engagement",
      desc: "Targeted candidates are approached confidentially...",
    },
  ];

  return (
    <div className="bg-linear-to-r from-blue-800 to-blue-600 py-16 px-6 ">
      
      <h2 className="text-4xl font-bold text-center mb-12 text-white ">
        How We Work
      </h2>

      <div className="relative text-white ">
        
        
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-hidden"
        >
          {data.map((item) => (
            <WorkCard
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => scroll("left")}
            className="bg-white/20 px-4 py-2 rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white/20 px-4 py-2 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}