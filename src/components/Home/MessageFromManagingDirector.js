import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home/Home.module.css";

function MessageFromManagingDirector() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="dark:text-white text-white bg-[#0B2239] w-full flex flex-col lg:flex-row pt-5 overflow-hidden">
      <div
        ref={ref}
        className={`w-full flex lg:w-1/2 ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <img
          className=" w-full px-2"
          src="../../images/homepage/ManagingDirector.png"
        />
      </div>
      <div
        ref={ref}
        className={`relative w-full lg:w-1/2 px-10 py-15 flex flex-col gap-10 mt-5 ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <img
          ref={ref}
          className={`absolute lg:w-30 lg:h-30 w-12 h-12 -left-1 top-5  lg:-left-17 lg:-top-4 ${isVisible ? styles.slideDown : "opacity-0"}`}
          src="../../images/homepage/DoubleEnvertedComma.svg"
        />
        <div>
          <h3 className="font-bold mb-3 text-3xl">
            {" "}
            A Message from Our Managing Director
          </h3>
          <hr
            ref={ref}
            className={`border-1 mt-6 ${isVisible ? styles.slideright : "opacity-0"}`}
          />
        </div>

        <div>
          <p className="text-2xl text-justify font-[500] leading-relaxed">
            {" "}
            At Career Point Placement Services, we believe the right talent
            drives the success of every organization. For over 17 years, we have
            helped companies across India connect with skilled professionals who
            contribute to their long-term growth. Our experienced recruitment
            team works closely with clients to understand their hiring needs and
            deliver the right talent solutions. We remain committed to ethical
            practices, quality recruitment, and building lasting relationships.
          </p>
        </div>

        <div className="text-2xl py-5">
          <p>— Ramesh Waychal </p>
          <p>Managing Director</p>
        </div>
      </div>
    </div>
  );
}

export default MessageFromManagingDirector;
