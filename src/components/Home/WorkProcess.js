import React from "react";

function WorkProcess() {
  const works = [
    {
      img: "/images/homepage/workprocess1.svg",
      srNo: "01",
      heading: " Requirement Understanding",
      desc: " We begin by deeply understanding your hiring needs, businessgoals, role expectations, and company culture to ensure alignmentand define the ideal candidate profile from the very start.",
    },
    {
      img: "/images/homepage/workprocess2.svg",
      srNo: "02",
      heading: "Talent Sourcing",
      desc: " Using multiple channels like databases, job portals, and networks, we identify and attract the most suitable candidates across levels, ensuring quality talent aligned with your requirements.",
    },
    {
      img: "/images/homepage/workprocess3.svg",
      srNo: "03",
      heading: "Screening & Evaluation",
      desc: "Candidates go through detailed screening including profile checks, skill evaluation, and initial discussions to ensure they meet technical, professional, and cultural fit criteria before moving forward.",
    },
    {
      img: "/images/homepage/workprocess4.svg",
      srNo: "04",
      heading: "Shortlisting & Presentation",
      desc: "We share carefully shortlisted candidates with you, providing relevant insights and profiles to help you quickly identify the best-fit talent for your organization.",
    },
    {
      img: "/images/homepage/workprocess5.svg",
      srNo: "05",
      heading: "Interview Coordination",
      desc: " We manage end-to-end interview scheduling, communication, and feedback between you and candidates, ensuring a smooth, efficient, and timely hiring process",
    },
    {
      img: "/images/homepage/workprocess6.svg",
      srNo: "06",
      heading: "Offer & Onboarding Support",
      desc: "From salary negotiation to final onboarding, we assist throughout the process, ensuring seamless joining, documentation, and continuous support for both client and candidate.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="text-center flex flex-col gap-3 lg:gap-5 max-w-[70%]">
        <h3 className="text-3xl font-bold">
          <span>Our Work </span>{" "}
          <span className="text-[#0277BD] "> Process</span>
        </h3>
        <p className="text-md font-[500]">
          Delivering top talent to organizations across fast-growing industries,
          helping businesses build skilled teams that drive innovation and
          long-term growth.
        </p>
      </div>

      <div className=" min-h-[200vh] py-10 lg:px-10">
        {works.map((work, idx) => {
          return (
            <>
              {idx % 2 == 0 ? (
                <div
                  key={idx}
                  className="sticky top-0 z-10 h-[65vh] lg:h-[95vh] mx-15 rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex lg:flex-row flex-col"
                >
                  <div className="w-full h-1/2 lg:h-full lg:w-1/2  ">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 py-2 px-5 lg:p-10 flex flex-col justify-center  lg:gap-10">
                    <h1 className="text-2xl lg:text-6xl font-bold">
                      {work.srNo}
                    </h1>
                    <h2 className=" text-2xl lg:text-4xl font-semibold lg:mt-4">
                      {work.heading}
                    </h2>
                    <p className="lg:text-lg">{work.desc}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="sticky top-0 z-10 h-[65vh] lg:h-[95vh] mx-15 rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex lg:flex-row flex-col"
                >
                  <div className="block lg:hidden w-full h-1/2 lg:h-full lg:w-1/2 ">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 py-2 px-5 lg:p-10 flex flex-col justify-center  lg:gap-10">
                    <h1 className="text-2xl lg:text-6xl font-bold">
                      {work.srNo}
                    </h1>
                    <h2 className=" text-2xl lg:text-4xl font-semibold lg:mt-4">
                      {work.heading}
                    </h2>
                    <p className="lg:text-lg">{work.desc}</p>
                  </div>
                  <div className="hidden  lg:block w-full h-1/2 lg:h-full lg:w-1/2 ">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default WorkProcess;
