import Image from "next/image";

export default function CandidateNetworkSection() {
  const works = [
    {
      img: "/images/hiringsolutions/Extensive Candidate Network.png",
      srNo: "01",
      heading: "Extensive Candidate Network",
      desc: "Over the years, Career Point Placement Services has developed a large and active network of professionals across multiple industries. Our continuously growing candidate database allows us to connect with individuals from different experience levels and functional areas. This strong network enables us to quickly identify relevant candidates and provide organizations with access to a broader talent pool when hiring for critical roles.",
    },
    {
      img: "/images/hiringsolutions/Multi-Channel Talent Search.png",
      srNo: "02",
      heading: "Multi-Channel Talent Search",
      desc: "Our sourcing strategy uses multiple talent channels to ensure access to the best available candidates. Recruitment efforts include professional networking platforms, trusted job portals, industry references, and employee referrals. By combining these sources, we are able to reach both active job seekers and passive professionals who may be open to the right career opportunity.",
    },
    {
      img: "/images/hiringsolutions/Industry-Focused Hiring.png",
      srNo: "03",
      heading: "Industry-Focused Hiring",
      desc: "With years of recruitment experience across sectors such as Pharmaceutical, Manufacturing, BFSI, FMCG, and Building Materials, our team understands the unique hiring requirements of each industry. This sector-focused approach helps us identify candidates with the right technical knowledge, industry exposure, and professional background needed to succeed in specialized roles.",
    },
    {
      img: "/images/hiringsolutions/Pre-Screened Talent Pool.png",
      srNo: "04",
      heading: "Pre-Screened Talent Pool",
      desc: "Before presenting candidate profiles to clients, we ensure that photential candidates go through an initial screening process. This includes reviewing experience, skill sets, and role compatibility to ensure alignment with the client’s requirements. By recommending only relevant and qualified profiles, we help organizations save time and improve the efficiency of their hiring process.",
    },
  ];
  return (
    <div className="py-10 lg:px-10">
<div className="max-w-6xl mx-auto text-center px-2 sm:px-4 lg:px-6 py-10 sm:py-12 lg:py-14">
  <h1 className="font-bold text-black leading-tight
    text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    
    Our Talent{" "}
    <span className="text-blue-600">Sourcing</span>{" "}
    Strategy
  </h1>
</div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory lg:hidden px-4">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="min-w-full snap-center rounded-3xl overflow-hidden bg-[#0B2239] text-white flex flex-col"
          >
            <div className="w-full h-[220px]">
              <img src={work.img} className="w-full h-full object-cover" />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{work.srNo}</h1>
              <h2 className="text-xl font-semibold">{work.heading}</h2>
              <p className="text-sm text-gray-200">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {works.map((work, idx) => {
          return (
            <>
              {idx % 2 == 0 ? (
                <div
                  key={idx}
                  className="lg:sticky lg:top-0 z-10 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] px-4 sm:px-6 md:px-10 lg:px-16 rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex lg:flex-row flex-col"
                >
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full lg:w-1/2 ">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center  gap-2 lg:gap-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      {work.srNo}
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                      {work.heading}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed ">
                      {work.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="lg:sticky lg:top-0 z-10 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] px-4 sm:px-6 md:px-10 lg:px-16 rounded-[40px] overflow-hidden bg-[#0B2239] text-white flex lg:flex-row flex-col"
                >
                  <div className="block lg:hidden w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full lg:w-1/2">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center  gap-2 lg:gap-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      {work.srNo}
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
                      {work.heading}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      {work.desc}
                    </p>
                  </div>
                  <div className="hidden  lg:block w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full lg:w-1/2 ">
                    <img
                      src={work.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}