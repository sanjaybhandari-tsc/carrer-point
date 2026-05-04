import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";

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
    <div className="dark:text-white  pt-6 text-white bg-[#0B2239] w-full flex flex-col md:flex-row md:pt-2 overflow-hidden">
      {/* Image div */}
      <div
        ref={ref}
        className={`w-full flex items-end md:w-1/2  ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <Image
          width={100}
          height={100}
          className="w-full md:w-[100%] md:h-[90%] object-fill"
          alt="managing director"
          src="/images/homepage/ManagingDirector.png"
        />
      </div>

      {/* Content div */}
      <div
        ref={ref}
        className={`relative w-full md:w-1/2 px-10 py-5 md:pt-5 flex flex-col gap-3 md:gap-5 lg:gap-10 mt-5 md:mt-0 ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <img
          alt="double inverted commas for text"
          className={`absolute md:w-22 md:h-20 w-12 h-12 left-1  top-9 md:top-4 md:-left-16   ${
            isVisible ? styles.slideDown : "opacity-0"
          }`}
          src="../../images/homepage/DoubleEnvertedComma.svg"
        />
        <div>
          <h3 className="heading font-bold lg:mb-3">
            A Message from Our Managing Director
          </h3>
          <hr
            className={`border-1 md:mt-4 lg:mt-6 ${isVisible ? styles.slideright : "opacity-0"}`}
          />
        </div>

        <div>
          <p className="subheading text-justify font-[500] leading-relaxed">
            At Career Point Placement Services, we believe the right talent
            drives the success of every organization. For over 17 years, we have
            helped companies across India connect with skilled professionals who
            contribute to their long-term growth. Our experienced recruitment
            team works closely with clients to understand their hiring needs and
            deliver the right talent solutions. We remain committed to ethical
            practices, quality recruitment, and building lasting relationships.
          </p>
        </div>

        <div className="content md:pt-3 lg:pt-5">
          <p>— Ramesh Waychal</p>
          <p>Managing Director</p>
        </div>
      </div>
    </div>
  );
}

export default MessageFromManagingDirector;
