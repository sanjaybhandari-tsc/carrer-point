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
    <div className="my-7 md:my-10 lg:my-15  dark:text-white pt-6 text-white bg-[#0B2239] md:h-[90vh] w-full flex flex-col md:gap-10 lg:gap-15  min-[500px]:flex-row sm:flex-row  md:pt-2 overflow-hidden">
      {/* Image div */}
      <div
        ref={ref}
        className={`w-full flex md:h-full items-end md:w-[40%]  ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <Image
          width={100}
          height={100}
          className="w-full h-full md:w-[100%]  object-fit"
          alt="managing director"
          src="/images/homepage/Manager.png"
        />
      </div>

      {/* Content div */}
      <div
        ref={ref}
        className={` w-full md:w-[56%] px-10 py-5 md:pt-5 flex flex-col justify-center gap-3 md:gap-5 lg:gap-10 mt-5 md:mt-0 ${
          isVisible ? styles.slideup : "opacity-0"
        }`}
      >
        <div className="relative">
          <img
            alt="double inverted commas for text"
            className={`absolute md:w-22 md:h-20 w-12 h-12 -left-10 -top-4  md:-top-5 md:-left-20   ${
              isVisible ? styles.slideDown : "opacity-0"
            }`}
            src="../../images/homepage/DoubleEnvertedComma.svg"
          />
          <h3 className="heading font-bold lg:mb-3">
            A Message from Our Managing Director
          </h3>
          <hr
            className={`border-1 md:mt-4 lg:mt-6 ${isVisible ? styles.slideright : "opacity-0"}`}
          />
        </div>

        <div>
          {/* min-[500px]:line-clamp-4 sm:line-clamp-6 md:line-clamp-8   lg:line-clamp-none */}
          <p className="banner-content  font-[500] leading-relaxed">
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
