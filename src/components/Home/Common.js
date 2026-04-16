import React from "react";

function Common() {
  return (
    <div className="w-full lg:h-screen h-auto lg:pt-20 lg:px-25 md:p-10 p-10 bg-white">
      <div className="relative bg-[#0B2239] text-white rounded-4xl flex flex-col justify-center items-center gap-7 lg:gap-15 lg:py-25   py-10 px-2.5 w-full">
        <img
          className="hidden lg:block absolute top-0 left-0"
          src="/images/homepage/rightFirst1.svg"
        />
        <img
          className="hidden lg:block absolute top-0 left-0"
          src="/images/homepage/rightfirst.svg"
        />
        <img
          className="hidden lg:block absolute top-0 right-0 "
          src="/images/homepage/lefftsecond.svg"
        />
        <img
          className="hidden lg:block absolute right-0 top-0 "
          src="/images/homepage/leftfirst.svg"
        />

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
            Ready to take your next step?
          </h3>
          <p className="text-md lg:text-lg">
            Connect with highly skilled professionals or discover your next
            career opportunity
          </p>
        </div>
        <div className="flex  flex-col lg:flex-row gap-5 lg:gap-20 justify-center">
          <div className="flex flex-col justify-center items-center w-[200px] lg:w-[250px] lg:h-[130px]  rounded-[24px] border-[1.5px] border-white py-2.5  lg:text-2xl lg:gap-2  hover:bg-[var(--color-primary)] hover:border-0">
            <img src="/images/homepage/chair.svg" />
            <p> View Jobs</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[200px] lg:w-[250px] lg:h-[130px]  rounded-[24px] border-[1.5px] border-white py-2.5  lg:text-2xl lg:gap-2 hover:bg-[var(--color-primary)] hover:border-0 ">
            <img src="/images/homepage/students.svg" />
            <p> Hire Talent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
