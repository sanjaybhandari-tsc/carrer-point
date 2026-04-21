// import React, { useState, useEffect } from "react";

// function HowWeWork() {
//   const workData = [
//     {
//       id: "01",
//       title: "Hiring Plan Understanding",
//       description:
//         "We begin by understanding the client’s hiring goals, company culture, and role requirements.",
//     },
//     {
//       id: "02",
//       title: "Dedicated Team Assignment",
//       description:
//         "A specialized recruitment team is assigned to manage the hiring process for the client.",
//     },
//     {
//       id: "03",
//       title: "Sourcing & Screening",
//       description:
//         "Candidates are sourced, evaluated, and shortlisted based on role requirements and organizational fit.",
//     },
//     {
//       id: "04",
//       title: "Interview Coordination",
//       description:
//         "We manage interview scheduling, feedback tracking, and communication throughout the evaluation process.",
//     },
//     {
//       id: "05",
//       title: "Offer & Reporting Management",
//       description:
//         "Our team handles offer rollouts, joining follow-ups, and provides regular hiring reports and recruitment insights.",
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(1);

//   useEffect(() => {
//     const updateCards = () => {
//       if (window.innerWidth >= 1024) setCardsPerView(3);
//       else if (window.innerWidth >= 768) setCardsPerView(2);
//       else setCardsPerView(1);
//     };

//     updateCards();
//     window.addEventListener("resize", updateCards);

//     return () => window.removeEventListener("resize", updateCards);
//   }, []);

//   const nextSlide = () => {
//     if (index < workData.length - cardsPerView) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="h-[100vh] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] flex items-center py-20 overflow-hidden">
//       <div className="w-full">
//         <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
//           How We Work
//         </h2>

//         <div className="relative max-w-6xl mx-auto">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${index * (100 / cardsPerView)}%)`,
//               }}
//             >
//               {workData.map((item) => (
//                 <WorkCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>

//           <div className="flex gap-4 mt-10 ml-6">
//             <button
//               onClick={prevSlide}
//               className={`border-2 rounded-full w-10 h-10 font-bold ${
//                 index > 0 ? "text-white" : "text-[#B2B2B252]"
//               }`}
//             >
//               ←
//             </button>

//             <button
//               onClick={nextSlide}
//               className={`border-2 rounded-full w-10 h-10 font-bold ${
//                 index < workData.length - cardsPerView
//                   ? "text-white"
//                   : "text-[#B2B2B252]"
//               }`}
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WorkCard({ item }) {
//   return (
//     <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-6 flex items-center">
//       <div>
//         <h2 className="text-5xl font-bold text-white/70 mb-4">
//           {item.id}
//         </h2>

//         <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
//           {item.title}
//         </h3>

//         <p className="text-white/80 leading-relaxed">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HowWeWork;

import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home/Home.module.css";

function HowWeWork() {
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

  const workData = [
    {
      srNo: "01",
      heading: "Hiring Plan Understanding",
      desc: "We begin by understanding the client’s hiring goals, company culture, and role requirements.",
    },
    {
      srNo: "02",
      heading: "Dedicated Team Assignment",
      desc: "A specialized recruitment team is assigned to manage the hiring process for the client.",
    },
    {
      srNo: "03",
      heading: "Sourcing & Screening",
      desc: "Candidates are sourced, evaluated, and shortlisted based on role requirements and organizational fit.",
    },
    {
      srNo: "04",
      heading: "Interview Coordination",
      desc: "We manage interview scheduling, feedback tracking, and communication throughout the evaluation process.",
    },
    {
      srNo: "05",
      heading: "Offer & Reporting Management",
      desc: "Our team handles offer rollouts, joining follow-ups, and provides regular hiring reports and recruitment insights.",
    },
  ];

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
    <div className="h-[100vh] bg-[linear-gradient(180deg,_#0277BD_0%,_#0E6497_100%)] py-20 overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-16">
        How We Work
      </h2>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto ${
          visible ? styles.slideright : "opacity-0 translate-y-10"
        }`}
      >
        <div className="overflow-hidden">
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
    </div>
  );
}

function WorkCard({ item }) {
  return (
    <div className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-6">
      <h2 className="text-5xl font-bold text-white/70 mb-4">{item.srNo}</h2>

      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
        {item.heading}
      </h3>

      <p className="text-white/80 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default HowWeWork;
