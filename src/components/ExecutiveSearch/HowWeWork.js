// "use client";
// import { useRef } from "react";
// import WorkCard from "./WorkCard";

// export default function HowWeWork() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     const scrollAmount = 400;

//     container.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const data = [
//     {
//       id: "01",
//       title: "Leadership Requirement Discussion",
//       desc: "We begin with detailed discussions to understand the leadership expectations...",
//     },
//     {
//       id: "02",
//       title: "Market Mapping",
//       desc: "Potential senior professionals are identified through market research...",
//     },
//     {
//       id: "03",
//       title: "Candidate Engagement",
//       desc: "Targeted candidates are approached confidentially...",
//     },
//     {
//       id: "04",
//       title: "Leadership Requirement Discussion",
//       desc: "We begin with detailed discussions to understand the leadership expectations...",
//     },
//     {
//       id: "05",
//       title: "Market Mapping",
//       desc: "Potential senior professionals are identified through market research...",
//     },
//     {
//       id: "06",
//       title: "Candidate Engagement",
//       desc: "Targeted candidates are approached confidentially...",
//     },
//   ];

//   return (
//     <div className="bg-linear-to-r from-blue-800 to-blue-600 py-16 px-6 ">
      
//       <h2 className="text-4xl font-bold text-center mb-12 text-white ">
//         How We Work
//       </h2>

//       <div className="relative text-white ">
        
        
//         <div
//           ref={scrollRef}
//           className="flex gap-12 overflow-x-hidden"
//         >
//           {data.map((item) => (
//             <WorkCard
//               key={item.id}
//               id={item.id}
//               title={item.title}
//               desc={item.desc}
//             />
//           ))}
//         </div>

        
//         <div className="flex gap-4 mt-10">
//           <button
//             onClick={() => scroll("left")}
//             className="bg-white/20 px-4 py-2 rounded-full"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="bg-white/20 px-4 py-2 rounded-full"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      "We coordinate interviews and ensure smooth communication between candidates and clients.",
  },
  {
    id: "05",
    title: "Final Selection",
    description:
      "We assist in final decision-making and ensure the right candidate is selected.",
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
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
      
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        How We Work
      </h2>

      {/* Slider */}
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

        {/* Buttons */}
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