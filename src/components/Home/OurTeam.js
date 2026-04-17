import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home/Home.module.css";

function OurTeam() {
  const teams = [
    {
      img: "/images/homepage/ReameshD.svg",
      name: "Ramesh D. Waychal",
      department: "Managing Director",
      desc: "25+ years of expertise in HR",
    },
    {
      img: "/images/homepage/UmakantYelka.svg",
      name: "Umakant Yelka",
      department: "Business Partner - BFSI",
      desc: "17+ years in BFSI Recruitment ",
    },
    {
      img: "/images/homepage/ParveenMulla.svg",
      name: "Parveen Mulla",
      department: "Business Partner - BFSI",
      desc: "15+ Years in BFSI Recruitment",
    },
    {
      img: "/images/homepage/Abhishek.svg",
      name: "Abhishek Gangareddy",
      department: "Business Partner -Pharma Manufacturing",
      desc: "15+ Years in BFSI Recruitment",
    },
    {
      img: "/images/homepage/Karishma.svg",
      name: "Karishma Saifan",
      department: "Business Partner -Pharma",
      desc: "9+ Years in Pharmaceutical Hiring ",
    },
    {
      img: "/images/homepage/KausarMulla.svg",
      name: "Kaursar Mulla",
      department: "Business Partner -Pharma ",
      desc: "9+ Years in Pharma Recruitment",
    },
    {
      img: "/images/homepage/Amruta.svg",
      name: "Amruta Salunke",
      department: "Business Partner -Pharma ",
      desc: "9+ Years in Pharma Hiring",
    },
  ];
  return (
    <div className="py-8 flex flex-col items-center ">
      <div className="flex flex-col justify-center items-center text-center max-w-[80%] gap-4">
        <h2 className="font-semibold text-4xl">
          Meet Our <span className="text-[#000080]">Team</span>
        </h2>
        <p className="text-lg">
          A team of experienced professionals delivering strong hiring solutions
          with deep expertise, strategic thinking, and a people-first approach
          to building high-performing teams.
        </p>
      </div>

      <div className="w-full px-7 mt-5 lg:my-15">
        <div className="h-[70vh] flex flex-nowrap overflow-x-auto overflow-y-hidden gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {teams.map((team, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col group items-center h-full gap-3 lg:min-w-[350px] font-medium"
              >
                <div className="relative  rounded-full w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden ">
                  <img className="object-cover w-full h-full" src={team.img} />

                  <div
                    className={`absolute left-0 right-0 w-full h-full rounded-full bg-[#039BE6] flex justify-center top-50 py-8 gap-4 lg:top-[200%] lg:py-13 lg:gap-13 transition-all duration-700 lg:group-hover:top-60 lg:group-hover:py-8 lg:group-hover:gap-4 ${styles.slideup}`}
                  >
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-9 h-9"
                        src="/images/homepage/brand-linkedin.svg"
                      />
                    </a>
                    <a
                      href="https://twitter.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-9 h-9"
                        src="/images/homepage/brand-x.svg"
                      />
                    </a>
                    <a
                      href="https://facebook.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-9 h-9"
                        src="/images/homepage/brand-facebook.svg"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-center ">
                  <p className="text-[18px]">{team.name}</p>
                  <h3 className="font-[700] text-lg">{team.department}</h3>
                </div>
                <p>{team.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
