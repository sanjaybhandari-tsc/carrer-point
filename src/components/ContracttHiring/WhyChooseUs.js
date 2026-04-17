import React from "react";

function WhyChooseUs() {
  const reasons = [
    {
      img: "/images/permanentHiring/shield-check.svg",
      heading: "Flexible Workforce Solutions",
      desc: "Access skilled professionals for project-based roles, seasonal demand, or temporary assignments.",
    },
    {
      img: "/images/permanentHiring/flask.svg",
      heading: "Efficient Talent Deployment",
      desc: "Our streamlined recruitment approach helps organizations quickly identify and onboard suitable contract professionals.",
    },
    {
      img: "/images/permanentHiring/activity-square.svg",
      heading: "Administrative Support Management",
      desc: "We handle employment documentation and administrative processes while the professional works at the client site.",
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

export default WhyChooseUs;
