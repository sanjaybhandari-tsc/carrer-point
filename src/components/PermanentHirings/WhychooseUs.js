import React from "react";

function WhychooseUs() {
  const reasons = [
    {
      img: "/images/permanentHiring/shield-check.svg",
      heading: "Industry-Focused Talent Identification",
      desc: "We identify professionals who understand industry expectations and can contribute effectively to organizational goals.",
    },
    {
      img: "/images/permanentHiring/flask.svg",
      heading: "Comprehensive Candidate Evaluation",
      desc: "Our recruitment process includes structured screening and careful assessment to ensure the right professional fit.",
    },
    {
      img: "/images/permanentHiring/activity-square.svg",
      heading: "Efficient Recruitment Approach",
      desc: "We streamline sourcing, shortlisting, and interview coordination to help organizations secure the right talent efficiently.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold text-center">
        Why <span className="text-[var(--color-primary-hover)]">Choose</span> Us
        ?
      </h3>
      <div className="flex flex-col  lg:flex-row w-full lg:w-[80%] justify-between px-7 lg:px-10 py-10 lg:py-18 gap-10">
        {reasons.map((reasons, idx) => {
          return (
            <div
              className="lg:w-[25%] w-full flex flex-col justify-center items-center  text-center gap-5"
              key={idx}
            >
              <img src={reasons.img} />
              <h4 className="font-bold text-lg">{reasons.heading}</h4>

              <p className="font-[500]">{reasons.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhychooseUs;
