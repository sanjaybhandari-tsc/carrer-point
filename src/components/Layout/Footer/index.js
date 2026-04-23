import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B2239] text-white relative mt-5 font-inter">
      <div className="p-4 md:p-6 lg:p-8 w-auto">
        
      <div className="flex items-center justify-center flex-col px-4 md:px-10 lg:px-20 py-6 gap-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full">
          
          <div className="flex items-center w-full h-full justify-center lg:justify-start">
            <Image
              src="/images/footer/footerLogo.svg"
              alt="My Image"
              width={184}
              height={90}
              className="object-contain object-center"
            />
          </div>

          <div className="flex items-center justify-center text-center lg:text-left font-inter">
            <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[150%] tracking-normal">
              “Career Point Placement Services is committed to connecting
              organizations with the right talent while helping professionals
              discover meaningful career opportunities across industries. “
            </p>
          </div>
        </div>

        <div className="flex items-center w-full py-5">
          <hr className="border border-[#fafafaf7] w-full" />
        </div>

        <div className="text-white px-0 md:px-10 lg:px-20 py-5 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-15 lg:gap-50 tracking-normal">
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <h3 className="font-inter font-semibold text-xl md:text-2xl whitespace-nowrap">Quick Links</h3>

              <div className="text-[16px] tracking-normal whitespace-nowrap ">
                <Link href={"/"}> <p className="cursor-pointer">Home</p></Link>
                <Link href={"/hiring-solutions"}><p className="cursor-pointer">Hiring Solution</p></Link>
                <Link href={"/about"}><p className="cursor-pointer">About</p></Link>
                <Link href={"/industries"}><p className="cursor-pointer">Industries</p></Link>
                <Link href={"/services/permanenthirings"}><p className="cursor-pointer">Services</p></Link>
                <Link href={"/jobs/browseJobs"}><p className="cursor-pointer">See Jobs</p></Link>
                <Link href={"#"}><p className="cursor-pointer">Contact Us</p></Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
              <h3 className="font-inter font-semibold text-xl md:text-2xl whitespace-nowrap">Head Office</h3>

              <a href="https://maps.app.goo.gl/sTr4yV4g5m4rm5Hp8"><p className="text-white w-full md:w-60 text-[16px] tracking-normal leading-[120%] cursor-pointer">
                85/A Railway Lines, Samrudhi one 4th floor,, Near
                commissioner Bangalow. Solapur 413001
              </p></a>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
              <div>
                <h3 className="font-inter font-semibold text-xl md:text-2xl whitespace-nowrap">
                  Contact Info
                </h3>
              </div>

              <div className="flex flex-col ">
                <div className="flex items-center gap-3 text-[16px] tracking-normal">
                  <div >
                  <Image
                    src="/images/footer/Phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                   className="object-cover object-center "
                  /></div>
                  <p className="font-inter text-base">+91 9225073111</p>
                </div>

                <div className="flex items-center gap-3 text-[16px] tracking-normal">
                  <div>
                  <Image
                    src="/images/footer/email.svg"
                    alt="email"
                    width={20}
                    height={20}
                    className="object-cover object-center "
                  /></div>
                  <a href="mailto:mailto:ramesh.w@cppsjobs.com hover:underline"><p className="font-inter text-base">ramesh.w@cppsjobs.com</p></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center md:justify-start w-full">
          <div className="flex items-center justify-start gap-5 flex-wrap cursor-pointer">
            <div>
            <a href="https://in.linkedin.com/" target="_blank">
              <Image src="/images/footer/linkedin.svg" alt="LinkedIn icon" width={36} height={36}  className="object-cover object-center "/>
            </a>
            </div>
            <div>
            <a href="https://x.com/" target="_blank">
              <Image src="/images/footer/twitter.svg" alt="Twitter icon" width={30} height={30}  className="object-cover object-center "/>
            </a></div>

            <div><a href="https://www.instagram.com/" target="_blank">
              <Image src="/images/footer/instagram.svg" alt="instagram icon" width={36} height={36}  className="object-cover object-center "/>
            </a></div>

            <div><a href="https://www.facebook.com/" target="_blank">
              <Image src="/images/footer/facebook.svg" alt="Facebook icon" width={36} height={36}  className="object-cover object-center "/>
            </a></div>

          </div>
        </div>

        <div className="flex items-center w-full">
          <hr className="border border-[#fafafaf7] w-full" />
        </div>
        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between gap-3 pb-5 lg:pb-18 text-[16px] md:text-[18px] text-center lg:text-left ">
          <p> Copyright</p>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p>Terms & conditions</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
        <div className="hidden lg:block absolute right-0 bottom-33 ">
          <Image
            src="/images/footer/logoFrame.svg"
            alt="decor"
            width={314}
            height={334}
            className="object-cover object-center "
          />
        </div>
      </div>
    </footer>
  );
}