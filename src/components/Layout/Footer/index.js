import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B2239] text-white relative">
      <div className="p-8 w-auto">
      <div className="flex items-center justify-center  flex-col px-20 py-5  gap-5  ">
        <div className="flex items-center justify-between  gap-10 ">
          <div className="flex items-center w-full h-full">
            <Image
              src="/images/footer/footerLogo.png"
              alt="My Image"
              width={184}
              height={93}
              className=" object-contain object-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className=" font-inter font-medium text-[18px] leading-[150%] tracking-normal">
              “Career Point Placement Services is committed to connecting
              organizations with the right talent while helping professionals
              discover meaningful career opportunities across industries. “
            </p>
          </div>
        </div>
        <div className="flex items-center w-full py-5">
          <hr className="border border-[#fafafaf7] w-full " />
        </div>

        <div className="text-white px-20 py-5 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-50 tracking-normal">
            <div className="flex flex-col gap-5">
              <h3 className="font-inter font-semibold text-2xl">Quick Links</h3>

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
            <div className="flex flex-col gap-5">
              <h3 className="font-inter font-semibold text-2xl">Head Office</h3>

              <p className="  text-white  w-60 text-[16px] tracking-normal leading-[120%]">
                85/A Railway Lines, Samrudhi one 4th floor, Near
                commissioner Bangalow. Solapur 413001
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div>
              <h3 className="font-inter font-semibold text-2xl">
                Contact Info
              </h3>
              </div>
              <div>
              <div className="flex items-center gap-3 text-white text-[16px] tracking-normal">
                <Image
                  src="/images/footer/Phone.png"
                  alt="phone"
                  width={20}
                  height={20}
                  className="object-contain object-center"
                />

                <p className="font-inter text-base">+91 9225073111</p>
              </div>

              <div className="flex items-center gap-3  text-[16px] tracking-normal">
                <Image
                  src="/images/footer/email.png"
                  alt="email"
                  width={20}
                  height={20}
                  className="object-contain object-center"
                />
                <p className="font-inter text-base">ramesh.w@cppsjobs.com</p>
              </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex  justify-stat w-full">
        <div className="flex items-center justify-start gap-5">
          <div>
            <a href="https://in.linkedin.com/" target="_blank" >
              <Image
                src="/images/footer/linkedin.png"
                alt="LinkedIn icon"
                width={36}
                height={36}
                className="object-contain object-center"
              />
            </a>
          </div>
          <div>
            <a href="https://x.com/" target="_blank" >
              <Image
                src="/images/footer/twitter.png"
                alt="Twitter icon"
                width={30}
                height={30}
                className="object-contain object-center"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/" target="_blank" >
              <Image
                src="/images/footer/instagram.png"
                alt="instagram icon"
                width={36}
                height={36}
                className="object-contain object-center"
              />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/" target="_blank" >
              <Image
                src="/images/footer/facebook.png"
                alt="Facebook icon"
                width={36}
                height={36}
                className="object-contain object-center"
              />
            </a>
          </div>
        </div></div>

        <div className="flex items-center w-full ">
          <hr className="border border-[#fafafaf7] w-full " />
        </div>


        <div className="w-full flex items-center justify-between  gap-5 pb-5 text-[18px]">
          <p> Copyright</p>
          <div className="flex items-center justify-between  gap-2 ">
            <p>Terms & conditions</p>
            <div className="w-2 h-2  bg-white rounded-full"></div>
            <p>Privacy Policy</p>
          </div>
        </div></div>
        <div className="absolute right-[0%] top-55 pt-10  ">
           <Image
                src="/images/footer/logoFrame.png"
                alt="Facebook icon"
                width={310}
                height={310}
                className="object-contain object-center"
              />
        </div>
      </div>
      
    </footer>
  );
}
