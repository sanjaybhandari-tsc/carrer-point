import React, { useState } from "react";

export default function AboutTheJob() {
  const [showDetails, setShowDetails] = useState(false);

  const job = {
    id: 1,
    title: "Project manager",
    experience: "2-3 yrs",
    location: "Mumbai",
    Buildingimage: "/images/broserJobs/industryIcon.svg",
    Building: "Building Material",
    time: "2 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    skills: ["Communication", "Error Handling", "Problem Solving", "Client Handling"],
  };

  return (
    <>
      <div className="p-5 md:p-10 bg-[#f9f9f9]">
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
                      className="bg-[#039BE6] text-white px-5 py-3 rounded-lg text-sm hover:bg-[#0288D1] shadow-[0_4px_8px_#00000029]"
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
        <div className="max-w-[1312px] mx-auto px-[15px] md:px-6 pb-10">

          <div className="bg-white border border-[#E9EAEB] rounded-xl p-6 shadow-[0_4px_8px_#00000014] relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-3">
              Job Details
            </h3>

            <p className="text-sm leading-[165%] text-gray-700">
              {job.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}