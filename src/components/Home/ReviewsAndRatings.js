import React from "react";
import styles from "../../styles/Home/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
function ReviewsAndRatings() {
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
  const Reviews = [
    {
      full: 4,
      half: 1,
      empty: 0,
      desc: "Career Point Placement Services offers an excellent work culture and a great environment to learn and grow. It’s a supportive place with strong opportunities for skill development.",
      position: "Senior Executive",
      address: "Solapur",
    },
    {
      full: 4,
      half: 0,
      empty: 1,
      desc: "A great work environment with excellent career growth opportunities. The culture is supportive, making it a positive place for long-term professional development.",
      position: "Human Resources Business Partner",
      address: "Solapur",
    },
    {
      full: 5,
      half: 0,
      empty: 0,
      desc: "A positive work environment with strong values and a supportive culture. Great opportunities for learning, growth, and overall job satisfaction.",
      position: "Business Development Manager",
      address: "Solapur",
    },
    {
      full: 4,
      half: 0,
      empty: 1,
      desc: "The work environment is supportive and helps in learning new skills. Overall, it’s a decent place to start and gain initial professional experience",
      position: "Executive Trainee",
      address: "Solapur",
    },
    {
      full: 4,
      half: 0,
      empty: 1,
      desc: "A fast-paced and motivating environment where performance is valued. The team is supportive, and the learning exposure here really helped me grow professionally.",
      position: "HR Recruiter",
      address: "Solapur",
    },
    {
      full: 4,
      half: 1,
      empty: 0,
      desc: "A well-structured workplace with clear processes and strong team collaboration. It provides the right balance of responsibility and growth for experienced professionals.",
      position: "Senior Talent Acquisition Manager",
      address: "Solapur",
    },
    {
      full: 5,
      half: 0,
      empty: 0,
      desc: "One of the most balanced workplaces I’ve experienced—great culture, flexibility, and consistent support. It encourages both personal well-being and professional excellence.",
      position: "HR Manager",
      address: "Solapur",
    },
    {
      full: 4,
      half: 1,
      empty: 0,
      desc: "An ideal place to begin your career. The guidance, hands-on learning, and approachable team made my transition into the professional world smooth and confident",
      position: "Executive Talent Acquisition Trainee",
      address: "Solapur",
    },
    {
      full: 5,
      half: 0,
      empty: 0,
      desc: "An ideal place to begin your career. The guidance, hands-on learning, and approachable team made my transition into the professional world smooth and confident",
      position: "Executive Talent Acquisition Trainee",
      address: "Solapur",
    },
  ];
  return (
    <div className="py-6 px-4 flex  flex-col items-center w-full justify-center text-center lg:mb-10 md:mt-3 overflow-hidden">
      <div className="flex flex-col items-center max-w-[80%] justify-center text-center gap-2">
        <h3 className="heading !font-bold ">
          Employee <span className=" text-[#0277BD]">Reviews</span> & Ratings
        </h3>
        <p className="content">
          Real ratings and feedback from professionals, sharing their
          experiences of the workplace, team culture, growth opportunities, and
          overall work environment.
        </p>
      </div>

      <div
        ref={ref}
        className={`w-full md:my-9 ${isVisible ? styles.slideleft : " opacity-0"}`}
      >
        <div className=" flex flex-nowrap w-full overflow-x-auto overflow-y-hidden gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pl-5">
          {Reviews.map((review, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className="relative border rounded-4xl border-[#E1EBFF] shadow px-4 py-10 text-left flex flex-col gap-3 lg:gap-7 lg:min-w-[500px] md:min-w-1/2 min-w-full overflow-hidden"
                >
                  <Image
                    src="/images/homepage/Commas.svg"
                    alt="Quotation mark decoration"
                    width={80}
                    height={80}
                    className="absolute top-[45%] left-[45%] pointer-events-none"
                  />
                  <div className="flex gap-1">
                    {[...Array(review.full)].map((_, i) => (
                      <Image
                        key={`full-${i}`}
                        src="/images/homepage/fullStar.svg"
                        alt="Full star rating"
                        width={20}
                        height={20}
                      />
                    ))}

                    {[...Array(review.half)].map((_, i) => (
                      <Image
                        key={`half-${i}`}
                        src="/images/homepage/halfStar.svg"
                        alt="Half star"
                        width={20}
                        height={20}
                      />
                    ))}

                    {[...Array(review.empty)].map((_, i) => (
                      <Image
                        key={`empty-${i}`}
                        src="/images/homepage/emptyStar.svg"
                        alt="Empty star"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  <h5 className="content font-[500]">{review.desc}</h5>
                  <div>
                    <h2 className="content !font-bold text-[#252B37]">
                      {review.position}
                    </h2>
                    <p className="small-text text-[#535862]">
                      {review.address}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewsAndRatings;
