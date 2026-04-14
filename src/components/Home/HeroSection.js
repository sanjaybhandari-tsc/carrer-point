import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[120vh] w-full overflow-hidden  rounded-b-4xl">
        <Image
          src="/images/homepage/HeroImage.png"
          alt="hero"
          height={2000}
          width={2200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-[#E1FEEF]/40"></div>
        <div
          className={`absolute inset-0 w-[120%] h-[130%] -top-[50%] -left-[10%] rounded-[50%]  bg-gradient-to-b from-[#039BE6]/70 to-[#080F24]/70  ${styles.slideDown} flex flex-col justify-center items-center`}
        >
          <div
            className={`absolute  inset-0 h-full flex flex-col items-center justify-end text-center  px-4 py-20 ${styles.slideup}`}
          >
            <div className="mb-6 px-4 py-2 border border-white/30 rounded-full backdrop-blur-md text-sm flex justify-center items-center gap-4 bg-transparent">
              <img
                className="w-6 h-7"
                src="/images/homepage/HeroInnerImg.png"
              />
              <div>
                {" "}
                <p className=" text-left text-2xl">
                  <span className="text-white">4.8 </span>{" "}
                  <span className="text-amber-300">★★★★★</span>
                </p>
                <p className="text-white">based on Glassdoor reviews</p>{" "}
              </div>
            </div>

            <h1 className="text-8xl font-bold  leading-tight text-white">
              Hire Exceptional <br /> Talent
            </h1>

            <p className="mt-4 text-2xl text-white max-w-1/2">
              Connect with skilled professionals across industries and build
              high-performing teams faster and smarter.
            </p>

            <button
              className={`mt-6 px-6 py-3 border-2 border-white rounded-lg flex gap-2.5 items-center text-white`}
            >
              <p>Get in touch</p>
              <img src="/images/homepage/HeroSendIcon.png" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center relative -top-25">
        <div className=" w-[90%] p-12 rounded-4xl flex justify-between bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE]  bottom-[-80px] overflow-visible">
          <div className="">
            <h1 className="text-7xl font-extrabold text-[#0277BD] mb-2.5">
              95%
            </h1>
            <p className="text-2xl font-semibold">Success Rate</p>
          </div>
          <div>
            <h1 className="text-7xl font-extrabold text-[#0277BD] mb-2.5">
              50+
            </h1>
            <p className="text-2xl font-font-semibold">Global Clients</p>
          </div>
          <div>
            <h1 className="text-7xl font-extrabold text-[#0277BD] mb-2.5">
              15K+
            </h1>
            <p className="text-2xl font-font-semibold">Placements</p>
          </div>
          <div>
            <h1 className="text-7xl font-extrabold text-[#0277BD] mb-2.5">
              48hrs
            </h1>
            <p className="text-2xl font-font-semibold">Total Match</p>
          </div>
        </div>
      </div>
    </>
  );
}
