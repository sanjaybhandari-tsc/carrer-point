import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[130vh] w-full overflow-hidden  rounded-b-4xl">
        <img
          src="/images/homepage/HeroImage.png"
          alt="hero"
          className="w-full h-full object-cover lg:scale-125"
        />
        <div className="absolute inset-0  bg-[#E1FEEF]/40"></div>
        <div
          className={`absolute inset-0  w-[110%] h-[110%] -left-[5%]  -top-[35%]     lg:w-[120%] lg:h-[130%] lg:-top-[55%] lg:-left-[10%] rounded-[50%]  bg-gradient-to-b from-[#039BE6]/70 to-[#080F24]/70  ${styles.slideDown} flex flex-col justify-center items-center`}
        >
          <div
            className={`absolute  inset-0 h-full flex flex-col items-center justify-end text-center  px-4 py-20 ${styles.slideup}`}
          >
            <div className="mb-6 px-4 py-1 border border-white rounded-full backdrop-blur-md text-sm flex justify-center items-center gap-4 bg-transparent">
              <img
                className="w-6 h-6"
                src="/images/homepage/HeroInnerImg.png"
              />
              <div>
                {" "}
                <p className=" text-left text-xl tracking-wider">
                  <span className="text-white">4.8 </span>{" "}
                  <span className="text-amber-300">★★★★★</span>
                </p>
                <p className="text-[#FFFFFF] text-xs">
                  based on Glassdoor reviews
                </p>{" "}
              </div>
            </div>

            <h1 className="lg:text-8xl text-5xl font-bold font-[Montserrat, sans-serif] leading-tight text-white">
              Hire Exceptional <br /> Talent
            </h1>

            <p className="mt-4 text-2xl text-white lg:max-w-1/2 max-w-[85%]">
              Connect with skilled professionals across industries and build
              high-performing teams faster and smarter.
            </p>

            <button
              className={`mt-6 relative overflow-hidden
                        w-40 sm:w-44 md:w-48 lg:w-50
                        h-10 sm:h-11 md:h-12
                        flex items-end justify-center gap-2.5
                        rounded-lg border-[1.5px] border-white
                        px-4 sm:px-5 md:px-6
                        py-2 sm:py-2.5 md:py-3
                        text-white group hover:border-0`}
            >
              <span className="absolute flex z-10 gap-2.5">
                <p>Get in touch</p>
                <img src="/images/homepage/HeroSendIcon.png" />
              </span>
              <span className=" left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000 origin-center"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center relative -top-25">
        <div className="w-[90%] lg:py-12 lg:px-20 py-5 px-6 rounded-4xl dark:text-[#333333] flex justify-between bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE] bottom-[-80px] overflow-visible">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              95%
            </h1>
            <p className="font-bold lg:text-2xl lg:font-semibold ">
              Success Rate
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              50+
            </h1>
            <p className="font-bold lg:text-2xl lg:font-semibold ">
              Global Clients
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              15K+
            </h1>
            <p className="font-bold lg:text-2xl lg:font-semibold ">
              Placements
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold lg:text-6xl lg:font-black font-montserrat text-[#0277BD] lg:mb-2.5">
              48hrs
            </h1>
            <p className="font-bold lg:text-2xl lg:font-semibold ">
              Total Match
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
