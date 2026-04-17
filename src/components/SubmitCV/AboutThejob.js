import React, { useState,useEffect } from "react";

export default function AboutTheJob() {
  const [showDetails, setShowDetails] = useState(false);
  const [job, setJob] = useState(null);

  useEffect(() => {
    try {
      const storedJob = localStorage.getItem("job");
      if (storedJob) {
        setJob(JSON.parse(storedJob));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (!job) return null;

  // const job = {
  //   id: 1,
  //   title: "Project manager",
  //   experience: "2-3 yrs",
  //   location: "Mumbai",
  //   Buildingimage: "/images/broserJobs/industryIcon.svg",
  //   responsibilities: [
  //     "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida",
  //     "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida",
  //     "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida",
  //   ],
  //   Building: "Building Material",
  //   role: "Project Manager",
  //   industry: "Building Material",
  //   employmentType: "Full Time, Permanent",
  //   time: "2 hours ago",
  //   description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
  //   skills: ["Communication", "Error Handling", "Problem Solving", "Client Handling"],
  // };

  return (
    <>
      <div className="p-5 md:p-10 bg-white">
        <div className="max-w-[1312px] mx-auto pt-16 px-[15px] md:px-6">

          <p className="text-[#0277BD] text-[18px] font-semibold leading-[165%] mb-4">
            You are applying for
          </p>

          <div className="bg-white rounded-xl p-5 md:p-6 border border-[#E9EAEB] shadow-[0px_4px_8px_0px_#00000014]">

            <div className="flex flex-col gap-6">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <h2 className="text-xl md:text-2xl lg:text-[36px] font-semibold text-gray-800">
                  {job.title}
                </h2>

                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <img src="/images/broserJobs/clockone.svg" className="h-6 w-6" />
                    <span className="text-[14px] text-black">
                      {job.time}
                    </span>
                  </div>

                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="bg-[#039BE6] text-white px-5 py-3 rounded-lg text-sm  shadow-[0_4px_8px_#00000029] cursor-pointer"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-2 text-[16px]">
                <div className="flex items-center gap-1">
                  <img src="/images/broserJobs/experienceIcon.svg" className="h-5 w-5" />
                  <span>{job.experience}</span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="/images/broserJobs/locationIcon.svg" className="h-5 w-5" />
                  <span>{job.location}</span>
                </div>

                {job.Building && (
                  <div className="flex items-center gap-1">
                    <img src={job.Buildingimage} className="h-5 w-5" />
                    <span>{job.Building}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-sm text-black flex flex-wrap gap-2 pb-6">
              {job.skills.map((skill, index) => (
                <span key={index} className="flex items-center gap-2 pt-2">
                  <span>•</span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="max-w-[1312px] mx-auto px-[15px] md:px-6 pb-10  ">

          <div className="bg-white border border-[#E9EAEB] rounded-xl p-6 shadow-[0_4px_8px_#00000014] relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-[#B3B3B3]  hover:text-black cursor-pointer "
            >
              <img src="/images/SubmitCv/cross.svg " alt=" icon" className="h-[32px] w-[32px]" />
            </button>
            <div className="py-[52px] px-[20px] sm:px-[30px] md:px-[38px] xl:w-[1075px]">

              <div className="mb-6">
                <h3 className="font-bold text-[20px] leading-[100%] text-black mb-3 ">
                  Overview
                </h3>

                <p className=" font-normal text-[16px] leading-[165%] text-black lg:ps-2">
                  {job.description}
                </p>
              </div>
              <div className="mb-6">
                <h3 className=" font-semibold text-[20px] leading-[100%] text-black mb-3">
                  Responsibilities
                </h3>

                <div className="space-y-3 lg:ps-2">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="mt-[8px] w-[5px] h-[5px] bg-black rounded-full"></span>
                      <p className="text-[16px] leading-[165%] text-black ">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <p className=" text-[16px] leading-[165%] text-black">
                  <span className="font-semibold">Role :</span> {job.role}
                </p>

                <p className="text-[16px] leading-[165%] text-black">
                  <span className="font-semibold">Industry :</span> {job.industry}
                </p>

                <p className="text-[16px] leading-[165%] text-black">
                  <span className="font-semibold">Employement Type :</span> {job.employmentType}
                </p>
              </div>

              <div>
                <h3 className=" font-semibold text-[20px] leading-[100%] text-black mb-3">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3  lg:ps-2 lg:pb-30">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className=" text-[16px] leading-[165%] text-black"
                    >
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}