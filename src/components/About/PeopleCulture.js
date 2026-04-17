
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PeopleCulture() {
   const ref = useRef(null);
        const [show, setShow] = useState(false);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setShow(true);
              }
            },
            { threshold: 0.1 }
          );
      
          if (ref.current) observer.observe(ref.current);
      
          return () => observer.disconnect();
        }, []);
  
  return (
    <div ref={ref} className="w-full px-6 md:px-10 lg:px-12 py-12 md:py-18 bg-white">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className={`flex  justify-between flex-col gap-5 transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
        
          <h2 className="font-bold text-[#0277BD] 
            text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] 
             tracking-normal mb-6">
            People & Culture
          </h2>
          <div className="space-y-6 text-[#333333] 
            text-[16px] md:text-[18px]   flex flex-col justify-between gap-6">
            
            <p className=" text-[18px]  tracking-normal">
              At Career Point Placement Services, our culture is built on teamwork,
              integrity, and continuous learning. A supportive environment helps
              employees perform at their best while building strong relationships
              with colleagues and clients.
            </p>

            <p>
              Collaboration and mutual respect guide how our teams work every day.
              Employees are encouraged to share ideas, learn from each other, and
              grow professionally in a transparent workplace.
            </p>

            <p>
              Through recognition and growth opportunities, we aim to create a
              workplace where people feel valued, motivated, and inspired to grow
              with the organization.
            </p>

          </div>
        </div>

        <div className={`w-full transition-all duration-700 delay-200 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
          <Image
            src="/images/about/peopleculture.svg" 
            alt="People and Culture"
            width={700}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}