import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" p-8 w-auto  bg-[#0B2239] text-white">
      <div className="flex items-center justify-center  flex-col px-20 py-4  gap-10 ">
        <div className="flex items-center justify-between  gap-20">
          <div className="flex items-center w-full h-full">
            {/* <img src="public/" alt="Footer Logo" className=" object-cover object-center" /> */}
            <Image
              src="/footer/footerLogo.png"
              alt="My Image"
              width={50}
              height={30}
              className=" object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className=" font-inter font-medium text-[18px] leading-[150%] tracking-normal">“Career Point Placement Services is committed to connecting organizations with the right talent while helping professionals discover meaningful career opportunities across industries. “</p>
          </div>
        </div>
        <div className="flex items-center w-full "> <hr className="border border-[#fafafaf7] w-full " /></div>

        <div className="text-white px-20 py-10 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-50 tracking-normal">
            <div className="flex flex-col gap-4">
              <h3 className="font-inter font-semibold text-2xl">
                Quick Links
              </h3>

              <div className="  text-[#FFFFFF] text-[16px] tracking-normal">
                <p>Home</p>
                <p>Hiring Solution</p>
                <p>About</p>
                <p>Industries</p>
                <p>Services</p>
                <p>See Jobs</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-inter font-semibold text-2xl">
                Head Office
              </h3>

              <p className="  text-white leading-relaxed w-60 text-[16px] tracking-normal">
                85/A Railway Lines, Samrudhi one 4th floor, Near <br />commissioner Bangalow.
                Solapur 413001
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-semibold text-2xl">
                Contact Info
              </h3>

              <div className="flex items-center gap-3 text-white text-[16px] tracking-normal">
                <img src="/Phone.png" alt="phone" className="w-5 h-5" />
                <p className="font-inter text-base">+91 9225073111</p>
              </div>

              <div className="flex items-center gap-3 text-white text-[16px] tracking-normal">
                <img src="/Email.png" alt="email" className="w-5 h-5" />
                <p className="font-inter text-base">ramesh.w@cppsjobs.com</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <div>
              <img src="" alt="social media icons" className="w-40 h-auto" />
            </div>
            <div>
              <img src="twitter.png" alt="social media icons" className="w-40 h-auto" />
            </div>
            <div>
              <img src="instagram.png" alt="social media icons" className="w-40 h-auto" />
            </div>
            <div>
              <img src="/social.png" alt="social media icons" className="w-40 h-auto" />
            </div>
          </div>
          <div>
            <img src="/social.png" alt="social media icons" className="w-40 h-auto" />
          </div>
        </div>
        <div className="flex items-center w-full "> <hr className="border border-[#fafafaf7] w-full " /></div>
        <div>how are you</div>
      </div>
    </footer>
  );
}

