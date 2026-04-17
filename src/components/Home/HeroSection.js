import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center items-center h-full  lg:h-[130vh] w-full overflow-hidden  rounded-b-4xl">
        <img
          src="/images/homepage/HeroImage.png"
          alt="hero"
          className="w-full h-full object-cover lg:scale-125"
        />
        <div className="absolute inset-0  bg-gradient-to-b from-[#66666600] to-[#00000075]"></div>
        <div
          className={`absolute inset-0  w-[110%] h-[110%] -left-[5%]  -top-[35%]     lg:w-[120%] lg:h-[130%]  lg:-top-[60%] lg:-left-[10%] rounded-[50%]  bg-gradient-to-t from-[#080F249C] to-[#039BE69C]  ${styles.slideDown} flex flex-col justify-center items-center`}
        >
          <div
            className={`absolute  inset-0 h-full flex flex-col  md:gap-4 items-center justify-end text-center  px-4 py-3 lg:py-20 ${styles.slideup}`}
          >
            <div className="lg:mb-6 px-4 lg:py-2 border border-white rounded-full backdrop-blur-md text-sm flex justify-center items-center lg:gap-4 bg-transparent">
              <img
                className="w-6 h-6"
                src="/images/homepage/HeroInnerImg.png"
              />
              <div>
                {" "}
                <p className=" text-left  lg:text-xl tracking-wider">
                  <span className="text-white">4.8 </span>{" "}
                  <span className="text-amber-300">★★★★★</span>
                </p>
                <p className="text-[#FFFFFF] text-xs">
                  based on Glassdoor reviews
                </p>{" "}
              </div>
            </div>

            <h1 className="lg:text-8xl md:4xl text-xl font-bold font-[Montserrat, sans-serif] lg:leading-tight text-white">
              Hire Exceptional <span className="lg:block">Talent</span>
            </h1>

            <p className="lg:mt-4 mb-1 max-w-[80%]  md:max-w-[50%] text-sm lg:text-2xl text-white lg:max-w-[60%] max-w-[65%]">
              Connect with skilled professionals across industries and build
              high-performing teams faster and .
            </p>

            <button className="lg:mt-6 md:mb-3 relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-white px-4 py-1 sm:px-6 sm:py-3 text-sm sm:text-base whitespace-nowrap text-white group hover:border-transparent transition-colors">
              <span className="relative z-10 flex items-center gap-2.5">
                <p>Get in touch</p>
                <img
                  src="/images/homepage/HeroSendIcon.png"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </span>
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center relative -top-12  lg:-top-25">
        <div className="w-[90%] lg:py-12 lg:px-20 py-3 px-2 rounded-4xl dark:text-[#333333] flex justify-between bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE] bottom-[-80px] overflow-visible">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              95%
            </h1>
            <p className="text-sm font-[500] lg:text-2xl lg:font-bold ">
              Success Rate
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              50+
            </h1>
            <p className="text-sm font-[500] lg:text-2xl lg:font-bold ">
              Global Clients
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              15K+
            </h1>
            <p className="text-sm font-[500] lg:text-2xl lg:font-bold ">
              Placements
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              48hrs
            </h1>
            <p className="text-sm font-[500] lg:text-2xl lg:font-bold ">
              Total Match
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
