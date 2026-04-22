import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Home/Home.module.css";

function GetinTouch() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="flex mb-25 lg:mb-20 text-white overflow-hidden">
      {/* LEFT */}
      <div
        ref={leftRef}
        className={`hidden lg:block w-[35%] relative bg-cover flex flex-col items-center bg-center rounded-tr-4xl rounded-br-4xl overflow-hidden bg-[url('/images/homepage/getTouch.svg')] ${
          isVisible ? style.slideleft : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#080F24]/60 to-[#039BE6]/60"></div>

        <div className="relative z-10 h-full flex flex-col px-15">
          <div className="flex flex-col gap-4 justify-center h-1/2 max-w-[85%]">
            <h3 className="font-bold text-5xl">Get In Touch</h3>
            <p className="text-sm">
              Lorem ipsum porta dictum maece sit amet.porta dictum sit
              amet.porta dictum masas ametamet.porta dictum masas sit amet.porta
              dictum ametamet.porta dictum masas sit amet.porta dictum
            </p>
          </div>

          <div className="h-1/2 flex flex-col gap-2.5">
            <div className="flex gap-3 items-start">
              <img src="/images/homepage/telephone.svg" alt="Phone icon" />
              <p>+91 9225073111</p>
            </div>

            <div className="flex gap-3 items-start">
              <img src="/images/homepage/location.svg" alt="Location icon" />
              <div>
                <p>Address line</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src="/images/homepage/envelope.svg" alt="Email icon" />
              <p>email@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={rightRef}
        className={`w-[100%] lg:w-[65%] h-full text-black flex flex-col gap-3 justify-between px-7 md:px:10 lg:px-10 py-15 ${
          isVisible ? style.slideright : "opacity-0"
        }`}
      >
        <div className="text-center pb-4">
          <h3 className="font-bold text-2xl">Looking to Hire?</h3>
          <p className="text-lg">
            Tell us your requirements and we’ll connect you with the right
            talent.
          </p>
        </div>

        {/* ✅ FORM ADDED */}
        <form className="flex flex-col gap-3">
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your work email"
                required
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label htmlFor="phone">Phone no.</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your Phone number"
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-/2 lg:w-1/2 ">
              <label htmlFor="role">Role Hiring For</label>
              <input
                id="role"
                name="role"
                type="text"
                placeholder="Which role are you hiring for?"
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label htmlFor="positions">No. of positions</label>
              <input
                id="positions"
                name="positions"
                type="number"
                placeholder="Enter number of vacant positions"
                className="border outline-0 rounded-lg px-4 py-2 border-[#E9EAEB]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-lg font-[500]">
              Any Message for us?
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-white h-20 sm:h-24 md:h-28 outline-0 border rounded-lg px-4 py-2 border-[#E9EAEB]"
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <button
              type="submit"
              className="hover:cursor-pointer bg-[var(--color-primary)] text-white py-3 px-5 rounded-lg"
            >
              Request hiring support
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetinTouch;
