import Image from "next/image";
import React from "react";

function WorkProcess() {
  const works = [
    {
      img: "/images/homepage/workprocess1.webp",
      srNo: "01",
      heading: " Requirement Understanding",
      desc: " We begin by deeply understanding your hiring needs, businessgoals, role expectations, and company culture to ensure alignmentand define the ideal candidate profile from the very start.",
    },
    {
      img: "/images/homepage/workprocess2.webp",
      srNo: "02",
      heading: "Talent Sourcing",
      desc: " Using multiple channels like databases, job portals, and networks, we identify and attract the most suitable candidates across levels, ensuring quality talent aligned with your requirements.",
    },
    {
      img: "/images/homepage/workprocess3.webp",
      srNo: "03",
      heading: "Screening & Evaluation",
      desc: "Candidates go through detailed screening including profile checks, skill evaluation, and initial discussions to ensure they meet technical, professional, and cultural fit criteria before moving forward.",
    },
    {
      img: "/images/homepage/workprocess4.webp",
      srNo: "04",
      heading: "Shortlisting & Presentation",
      desc: "We share carefully shortlisted candidates with you, providing relevant insights and profiles to help you quickly identify the best-fit talent for your organization.",
    },
    {
      img: "/images/homepage/workprocess5.webp",
      srNo: "05",
      heading: "Interview Coordination",
      desc: " We manage end-to-end interview scheduling, communication, and feedback between you and candidates, ensuring a smooth, efficient, and timely hiring process",
    },
    {
      img: "/images/homepage/workprocess6.webp",
      srNo: "06",
      heading: "Offer & Onboarding Support",
      desc: "From salary negotiation to final onboarding, we assist throughout the process, ensuring seamless joining, documentation, and continuous support for both client and candidate.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-12 lg:gap-15 px-4 py-7 md:py-10 md:py-15">
      <div className="text-center flex flex-col gap-2 md:gap-3 lg:gap-4  max-w-[90%] md:w-[70%]">
        <h3 className="heading !font-bold">
          <span>Our Work </span>{" "}
          <span className="text-[#0277BD] "> Process</span>
        </h3>
        <p className="content font-[500]">
          Delivering top talent to organizations across fast-growing industries,
          helping businesses build skilled teams that drive innovation and
          long-term growth.
        </p>
      </div>

      <div className=" min-h-[200vh] md:pb-10 lg:px-10">
        {works.map((work, idx) => {
          return (
            <>
              {idx % 2 == 0 ? (
                <div
                  key={idx}
                  className="sticky top-[48px] min-h-[calc(100vh-48px) md:top-[60px] md:min-h-[calc(100vh-60px)] lg:top-[80px] lg:min-h-[calc(100vh-80px)] z-10 h-[90vh] lg:h-[95vh] md:mx-13 lg:mx-15 rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex md:flex-row flex-col"
                >
                  <div className="relative w-full h-1/2 md:h-full md:w-1/2  ">
                    <Image
                      src={work.img}
                      alt={work.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 py-4 px-7 md:p-10 flex flex-col justify-center gap-4 md:gap-5  lg:gap-10">
                    <h2 className=" hero-heading !font-bold">{work.srNo}</h2>
                    <div className="flex flex-col gap-2.5">
                      <h2 className=" heading font-semibold lg:mt-4">
                        {work.heading}
                      </h2>
                      <p className="small-text">{work.desc}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="sticky top-[48px] min-h-[calc(100vh-48px)] md:top-[60px] md:min-h-[calc(100vh-60px)] lg:top-[80px] lg:min-h-[calc(100vh-80px)] z-10 h-[90vh] lg:h-[95vh] md:mx-13 lg:mx-15  rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex md:flex-row flex-col"
                >
                  <div className="relative block md:hidden lg:hidden w-full h-1/2 md:h-full md:w-1/2 ">
                    <Image
                      src={work.img}
                      alt={work.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 py-2 px-5  gap-4  md:p-10 flex flex-col justify-center  md:gap-5 md:gap-10">
                    <h2 className="hero-heading !font-bold">{work.srNo}</h2>
                    <div className="flex flex-col gap-2.5">
                      <h2 className=" heading font-semibold lg:mt-4">
                        {work.heading}
                      </h2>
                      <p className="small-text">{work.desc}</p>
                    </div>
                  </div>
                  <div className="relative hidden  md:block w-full h-1/2 md:h-full md:w-1/2 ">
                    <Image
                      src={work.img}
                      alt={work.heading}
                      fill
                      className="object-cover"
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
