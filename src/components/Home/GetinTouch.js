import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Home/Home.module.css";

function GetinTouch() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }, // 20% visible hone par trigger
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div className="flex h-[110vh] mb-25 lg:mb-20 text-white">
      <div
        ref={ref}
        className={`hidden md:hidden lg:block md:block relative bg-[url('/images/homepage/getTouch.svg')] w-[35%] h-full bg-cover bg-center rounded-tr-4xl rounded-br-4xl object-cover overflow-hidden ${isVisible ? style.slideleft : ""}`}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(270deg,rgba(8,15,36,0.61)_1.7%,rgba(3,155,230,0.61)_108.17%)] "
          src="/images/homepage/getTouch.svg"
        ></div>
        <div className="absolute h-full flex flex-col items-center">
          <div className="flex flex-col gap-4 justify-center h-1/2 max-w-[85%]">
            <h3 className="font-bold text-5xl">Get In Touch</h3>
            <p>
              Lorem ipsum porta dictum maece sit amet.porta dictum sit
              amet.porta dictum masas ametamet.porta dictum masas sit amet.porta
              dictum ametamet.porta dictum masas sit amet.porta dictum{" "}
            </p>
          </div>
          <div className="h-1/2  flex flex-col gap-2.5">
            <div className="flex gap-3 items-start">
              <img src="/images/homepage/telephone.svg" />
              <p>+91 9225073111</p>
            </div>
            <div className="flex gap-3 items-start">
              <img src="/images/homepage/location.svg" />
              <div>
                <p>111,abcd enclave , Xyz colony </p>
                <p>, Sector-14 , New Delhi - </p>
                <p>123456</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <img src="/images/homepage/envelope.svg" />
              <p>ramesh.w@cppsjobs.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={`w-[100%] lg:w-[65%] lg:w-[65%] h-full text-black flex flex-col gap-3 justify-between px-7 md:px:10 lg:px-10 py-15  ${isVisible ? style.slideright : ""}`}
      >
        <div className="text-center pb-4">
          <h3 className="font-bold text-2xl">Looking to Hire?</h3>
          <p className="text-lg">
            Tell us your requirements and we’ll connect you with the right
            talent.
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
            <label>Full Name</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
            <label>Company Name</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Enter your company name"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
            <label>Work Email</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Enter your work email"
            />
          </div>
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
            <label>Phone no.</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Enter your Phone number"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2 ">
            <label>Role Hiring For</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Which role are you hiring for?"
            />
          </div>
          <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
            <label>No. of positions</label>
            <input
              className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              type="text"
              placeholder="Enter number of vacant positions"
            />
          </div>
        </div>
        <div className="flex  flex-col gap-1   ">
          <label className="text-lg font-[500]">Any Message for us?</label>
          <textarea
            className="bg-white   h-20 sm:h-24 md:h-28 outline-0 border rounded-lg px-4 py-2 border-[#E9EAEB]"
            type="text"
          />
        </div>

        <div className="flex  justify-center items-center mt-3">
          <button className="hover:cursor-pointer bg-[var(--color-primary)] text-white py-3 px-5 rounded-lg">
            Request hiring support{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetinTouch;
