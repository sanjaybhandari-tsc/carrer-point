import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full flex justify-center overflow-hidden">
        <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[909px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/broserJobs/jobsHero.svg')] bg-cover bg-center">
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10 text-center">
              <div className="max-w-4xl">
                <h1 className="text-white font-bold text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.2]">
                  Step Into Something Bigger
                </h1>
                <p className="text-white mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6]">
                  Discover roles that align with your skills, ambition, and future goals,
                  and take the next step toward building a career that truly reflects your potential.
                </p>
              </div>
              <div className="h-8 sm:h-12 md:h-16 lg:h-20" />
              <div className="w-full max-w-5xl">
                <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0
                                backdrop-blur-md border-[0.5px] border-white bg-white/20  rounded-2xl lg:rounded-full
                                overflow-hidden">

                  <div className="flex flex-col sm:flex-row flex-1 lg:h-16 items-center justify-between gap-1">
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="w-full sm:flex-1 px-4 py-3 lg:py-4 bg-transparent text-white placeholder-white outline-none border-b sm:border-b-0 sm:border-r border-white lg:h-12"
                    />
                    <select className="w-full sm:flex-1 px-4 py-3 lg:py-4 bg-transparent text-white outline-none border-b sm:border-b-0 sm:border-r border-white lg:h-12">
                      <option className="text-black">Experience level</option>
                      <option className="text-black">Fresher</option>
                      <option className="text-black">1-3 Years</option>
                      <option className="text-black">3+ Years</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full sm:flex-1 px-4 py-3 lg:py-4 bg-transparent text-white placeholder-white outline-none border-b sm:border-b-0 sm:border-r border-white lg:h-12"
                    />

                  </div>
                  <button className="w-full lg:w-16 lg:h-12 flex items-center justify-center
                                     lg:m-2  md:border-t md:p-2 md:border-white lg:border-none  shrink-0">
                    <Image
                      src="/images/broserJobs/searchIcon.svg"
                      alt="search"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center relative -top-10 md:-top-15 lg:-top-25">

        <div className="w-[92%] lg:w-[90%] lg:py-12 lg:px-20 py-6 px-4 rounded-3xl
                        flex flex-wrap md:flex-nowrap justify-between items-center
                        bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE] gap-4 md:gap-0">

          <div className="text-center w-1/2 md:w-auto">
            <h1 className="text-2xl lg:text-5xl font-black text-[#0277BD]">500+</h1>
            <p className="text-sm lg:text-xl font-semibold">Active Jobs</p>
          </div>

          <div className="text-center w-1/2 md:w-auto">
            <h1 className="text-2xl lg:text-5xl font-black text-[#0277BD]">100+</h1>
            <p className="text-sm lg:text-xl font-semibold">Companies</p>
          </div>

          <div className="text-center w-1/2 md:w-auto">
            <h1 className="text-2xl lg:text-5xl font-black text-[#0277BD]">15K+</h1>
            <p className="text-sm lg:text-xl font-semibold">Job Seekers</p>
          </div>

          <div className="text-center w-1/2 md:w-auto">
            <h1 className="text-2xl lg:text-5xl font-black text-[#0277BD]">98%</h1>
            <p className="text-sm lg:text-xl font-semibold">Success Rate</p>
          </div>

        </div>
      </div>
    </>
  );
}