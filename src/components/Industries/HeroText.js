import Image from "next/image";

export default function HeroText() {

  // return (
  //   <div className="w-full h-[60vh] px-6 md:px-20 bg-white py-16 md:py-24 border-2 border-amber-400">
  //     <div className=" flex items-start justify-around">
  //       <span className="font-montserrat font-bold
  //          text-gray-300 text-xl md:text-xl lg:text-5xl">“</span>
  //       <h2
  //         className="font-montserrat font-bold text-[#333333]
  //         text-[20px] sm:text-[22px] md:text-[30px] lg:text-[50px]"
  //       >
  //         {" "}
  //         We help <span className="text-[#0277BD]"> organizations</span> across
  //         industries
  //         <span className="text-[#0277BD]"> connect</span> with professionals
  //         who understand their <span className="text-[#0277BD]"> unique </span>{" "}
  //         challenges.
  //         <span className="text-gray-300 text-xl md:text-xl lg:text-5xl">”</span>
  //       </h2>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-full min-h-[40vh] px-4 sm:px-6 md:px-12 lg:px-20 bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-6">
        {/* Left Quote */}
        {/* <span
          className="
        font-montserrat font-bold text-gray-300 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-none
      "
        >
          “
        </span> */}
        {/* Text */}
        <h2
          className="
          font-montserrat font-bold text-[#333333]
          text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl
          leading-snug md:leading-tight
        "
        >
          We help <span className="text-[#0277BD]">organizations</span> across
          industries <span className="text-[#0277BD]">connect</span> with
          professionals who understand their{" "}
          <span className="text-[#0277BD]">unique</span> challenges.
          {/* Right Quote */}
          {/* <span
            className="
        font-montserrat font-bold text-gray-300 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-none self-end md:self-auto
      "
          >
            ”
          </span> */}
        </h2>
      </div>
    </div>
  );
}
