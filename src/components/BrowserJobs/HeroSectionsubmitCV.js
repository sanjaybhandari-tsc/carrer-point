import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" md:pb-0">
      <section className="relative w-full flex justify-center overflow-hidden " aria-labelledby="hero-title">
        <div className="relative w-full h-[80vh]  lg:h-[800px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/broserJobs/jobsHero.webp')] bg-cover bg-center" role="img" aria-label="Job search background banner">
            <div className="relative z-10 flex flex-col items-center justify-center h-full  sm:px-6 md:px-10 text-center md:gap-0 gap-4 ">
              <div className="max-w-6xl">
                <h1 className="text-white hero-heading  leading-[1.2]">
                  Step Into Something Bigger
                </h1>
                <p className="text-white  subheading leading-[1.6] lg:mb-20 px-4 md:px-0">
                  Discover roles that align with your skills, ambition, and future goals,
                  and take the next step toward building a career that truly reflects your potential.
                </p>
              </div>

              <div className="w-full max-w-7xl px-2 md:py-1 md:px-8 " role="search" aria-label="Job search form overflow-hidden small-text">
                <div className=" hidden lg:flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0 backdrop-blur-md border-[0.5px]   border-white  bg-white/20 sm:border-none sm:bg-none rounded-2xl lg:rounded-full">

                  <div className="flex flex-col sm:flex-row flex-1 min-w-0 lg:h-16 items-center justify-between subheading gap-1">
                    <div className="w-full small-text sm:flex-1 px-2 bg-transparent sm:border-r border-white">
                      <label htmlFor="jobTitle" className="sr-only">
                        Job Title
                      </label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        placeholder="Job Title"
                        className="w-full  small-text sm:flex-1 px-4 py-3 lg:py-4 bg-transparent text-white placeholder-white outline-none border-b sm:border-b-0"
                      />
                    </div>
                    <div className="w-full small-text sm:flex-1 px-2 bg-transparent sm:border-r border-white">
                      <label htmlFor="experience" className="sr-only">
                        Experience Level
                      </label>
                      <select id="experience" name="experience" className="w-full sm:flex-[1.5] lg:flex-[1.5] lg:min-w-[200px] content px-4 py-3 lg:py-4 bg-transparent text-white outline-none border-b sm:border-b-0">
                        <option value="" disabled hidden  className="small-text">Experience level</option>
                        <option className="text-black small-text" value="fresher">Fresher</option>
                        <option className="text-black small-text" value="1-3">1-3 Years</option>
                        <option className="text-black small-text" value="3+">3+ Years</option>
                      </select>
                    </div>
                    <div className="w-full small-text sm:flex-1 px-2 bg-transparent sm:border-r border-white">
                      <label htmlFor="location" className="sr-only">
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Location"
                        className="w-full small-text sm:flex-1 px-4 py-3 lg:py-4 bg-transparent text-white placeholder-white content outline-none border-b sm:border-b-0 sm:border-r border-white md:border-0"
                      />
                    </div>
                  </div>
                    <button
                      type="submit"
                      aria-label="Search jobs"
                      className=" flex items-center justify-center py-1 lg:m-2 md:border-t md:border-white lg:border-none shrink-0"
                    >
                      <div className="flex w-10 h-10 bg-[var(--color-primary-hover)] items-center justify-center rounded-full">
                        <Image
                          src="/images/broserJobs/searchIcon.svg"
                          alt="search"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>

                      <span className="sr-only">Search Jobs</span>
                    </button>
                </div>

                <div className="flex flex-col gap-3 md:px-8 lg:hidden">
                  <div className="w-full px-4   py-1 rounded-full  bg-white/30">
                    <label htmlFor="jobTitle" className="sr-only">
                      Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="w-full small-text  text-white placeholder-white  outline-none"
                    />
                  </div>
                  <div className="w-full px-4  py-1 rounded-full  bg-white/30">
                    <label htmlFor="experience" className="sr-only">
                      Experience Level
                    </label>
                    <select className="w-full   text-white small-text outline-none">
                      <option value="" disabled hidden  className="small-text">Experience level</option>
                      <option className="text-black" value="fresher">Fresher</option>
                      <option className="text-black" value="1-3">1-3 Years</option>
                      <option className="text-black" value="3+">3+ Years</option>
                    </select>
                  </div>
                  <div className="w-full px-4  py-1 rounded-full  bg-white/30">
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full   text-white placeholder-white small-text outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    aria-label="Search jobs"
                    className="w-full   flex items-center justify-center py-1 shrink-0"
                  >
                    <div className="flex  items-center gap-2 px-6 py-2  bg-[var(--color-primary-hover)] rounded-full text-white">
                      <Image
                        src="/images/broserJobs/searchIcon.svg"
                        alt="search"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <span className="content font-medium">Search</span>
                      <span className="sr-only">Search Jobs</span>
                    </div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center relative -top-10 md:-top-6 lg:-top-30">
        <div className="w-[92%] lg:w-[90%] lg:py-12 lg:px-20 py-6 px-4 rounded-3xl flex flex-wrap md:flex-nowrap justify-between items-center bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE] gap-4">
          <div className="text-center md:w-auto">
            <h2 className="heading-extrabold text-[#0277BD]">500+</h2>
            <p className="content text-[#333333] flex items-start">Active Jobs</p>
          </div>
          <div className="text-center md:w-auto">
            <h2 className="heading-extrabold text-[#0277BD]">100+</h2>
            <p className="content text-[#333333] flex items-start">Companies</p>
          </div>

          <div className="text-center md:w-auto">
            <h2 className="heading-extrabold text-[#0277BD]">15K+</h2>
            <p className="content text-[#333333] flex items-start">Job Seekers</p>
          </div>

          <div className="text-center md:w-auto">
            <h2 className="heading-extrabold text-[#0277BD]">98%</h2>
            <p className="content text-[#333333]  flex items-start">Success Rate</p>
          </div>

        </div>
      </div>
    </div>
  );
}