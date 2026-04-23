import React from "react";

function ProjectBasedTalentHiring() {
  return (
    <div className="flex w-full lg:flex-row flex-col py-15 px-8 lg:py-30 lg:px-20 gap-8 lg:gap-20">
      <div className=" w-full lg:w-[40%] rounded-3xl overflow-hidden  flex items-center justify-center">
        <img className="" src="/images/contractHiring/contract-hiring.webp" />
      </div>
      <div className="w-full lg:w-[60%] text-[18px] font-[500] text-[#333333] flex flex-col gap-7">
        <h3 className="heading !font-bold  md:!font-extrabold ">
          Project-Based Talent Hiring
        </h3>
        <p className="content">
          Contract staffing enables organizations to hire skilled professionals
          for specific projects, temporary assignments, or short-term business
          needs without expanding their permanent workforce. It offers
          flexibility while ensuring that the right expertise is available when
          required.
        </p>
        <p className="content">
          Our contract staffing solutions help companies quickly access
          qualified professionals who can contribute to ongoing operations or
          specialized projects. From sourcing and screening candidates to
          managing employment documentation and administrative responsibilities,
          we ensure a smooth and reliable staffing process.
        </p>
      </div>
    </div>
  );
}

export default ProjectBasedTalentHiring;
