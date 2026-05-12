import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Home/Home.module.css";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function GetinTouch() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState("");

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
    // <div className="flex md:mb-18 lg:mb-20 text-white overflow-hidden"></div>
    <div className="py-14 md:py-20 lg:py-30  flex text-white overflow-hidden">
      <div
        ref={leftRef}
        className={`hidden lg:block w-[35%] relative bg-cover flex flex-col items-center bg-center rounded-tr-4xl rounded-br-4xl overflow-hidden bg-[url('/images/homepage/getTouch.svg')] ${
          isVisible ? style.slideleft : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#080F24]/60 to-[#039BE6]/60"></div>

        <div className="relative z-10 h-full flex flex-col px-15">
          <div className="flex flex-col gap-4 justify-center h-1/2 max-w-[85%]">
            <h3 className="heading !font-bold ">Get In Touch</h3>
            <p className="content">
              Helping businesses connect with the right talent through reliable
              support and recruitment solutions designed for long-term growth
              and stronger teams across every hiring stage.
            </p>
          </div>

          <div className="h-1/2 flex flex-col gap-2.5">
            <div className="content flex gap-3 items-start">
              <Image
                src="/images/homepage/telephone.svg"
                alt="Phone icon"
                width={30}
                height={30}
              />
              <p>+91 9225073111</p>
            </div>

            <div className="content flex gap-3 items-start">
              <Image
                src="/images/homepage/location.svg"
                alt="Location icon"
                width={30}
                height={30}
              />
              <div>
                <p>
                  85/A Railway Lines, Samrudhi one 4th floor,, Near commissioner
                  Bangalow. Solapur 413001
                </p>
              </div>
            </div>

            <div className="content flex gap-3 items-start">
              <Image
                src="/images/homepage/envelope.svg"
                alt="Email icon"
                width={30}
                height={30}
              />
              <p>ramesh.w@cppsjobs.com</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={rightRef}
        className={`w-[100%] lg:w-[65%] h-full text-black flex flex-col gap-6 md:gap-12 lg:gap-15 justify-between px-7 md:px:10 lg:px-10 md:py-15 ${
          isVisible ? style.slideright : "opacity-0"
        }`}
      >
        <div className="text-center flex flex-col gap-2 sm:gap-3 lg:gap-4">
          <h3 className="heading !font-bold ">Looking to Hire?</h3>
          <p className="content !font-[300]">
            Tell us your requirements and we’ll connect you with the right
            talent.
          </p>
        </div>

        <form className="content flex flex-col gap-4">
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label
                className="content leading-tight tracking-normal text-[#000000] "
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="small-text w-full h-12  rounded-lg px-3 outline-none focus:outline-none border border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label
                className="content leading-tight tracking-normal text-[#000000] "
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                className="small-text w-full h-12  rounded-lg px-3 outline-none focus:outline-none border border-[#E9EAEB]"
              />
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
              <label
                className="content leading-tight tracking-normal text-[#000000] "
                htmlFor="email"
              >
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your work email"
                required
                className="small-text w-full h-12  rounded-lg px-3 outline-none focus:outline-none border border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
              <label
                className="content leading-tight tracking-normal"
                htmlFor="phone"
              >
                Phone no.
              </label>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => {
                  if (value.length <= 12) {
                    setPhone(value);
                  }
                }}
                containerClass="w-full"
                inputClass="!w-full !h-12 !pl-14 !rounded-lg !border !border-[#E9EAEB] small-text"
                buttonClass="!border-1  !border-[#E9EAEB] !bg-transparent"
              />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 md:gap-7 lg:gap-9">
            <div className="flex flex-col w-full md:w-/2 lg:w-1/2 ">
              <label
                className="content leading-tight tracking-normal text-[#000000] "
                htmlFor="role"
              >
                Role Hiring For
              </label>
              <input
                id="role"
                name="role"
                type="text"
                placeholder="Which role are you hiring for?"
                className="small-text w-full h-12  rounded-lg px-3 outline-none focus:outline-none border border-[#E9EAEB]"
              />
            </div>

            <div className="flex flex-col w-full md:w-/2 lg:w-1/2">
              <label
                className="content leading-tight tracking-normal text-[#000000] "
                htmlFor="positions"
              >
                No. of positions
              </label>
              <input
                id="positions"
                name="positions"
                type="number"
                placeholder="Enter number of vacant positions"
                className="small-text w-full h-12  rounded-lg px-3 outline-none focus:outline-none border border-[#E9EAEB]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="content font-[400]">
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
              className="hover:cursor-pointer bg-[var(--color-primary-hover)] text-white py-3 px-5 rounded-lg"
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
