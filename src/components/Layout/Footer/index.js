import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B2239] text-white relative py-[28px]   md:py-[40px] lg:py-[60px] !font-inter">
      <div className="px-4 md:px-6 lg:px-8 w-auto">
        
      <div className="flex items-center justify-center flex-col px-4 md:px-10 lg:px-20 py-6 gap-2 md:gap-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full">
          
          <div className="flex items-center w-[40%] sm:w-[30%]  md:w-full md:h-full justify-center lg:justify-start">
            <Image
              src="/images/footer/footerLogo.svg"
              alt="My-Image"
              title="Career Point Logo"
              width={184}
              height={90}
              className="object-contain object-center"
            />
            <span className="sr-only">Logo of the company</span>
          </div>

          <div className="flex items-center justify-center text-center lg:text-left font-inter">
            <p className="content-semibold leading-[150%] tracking-normal">
              “Career Point Placement Services is committed to connecting
              organizations with the right talent while helping professionals
              discover meaningful career opportunities across industries. “
            </p>
          </div>
        </div>

        <div className="flex items-center w-full py-5">
          <hr className="border border-[#fafafaf7] w-full" />
        </div>
        <div className="flex md:hidden justify-center md:justify-start w-full ">
          <div className="flex items-center justify-start gap-5 flex-wrap cursor-pointer">
            <div className="w-7 h-7">
            <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/linkedin.svg" alt="LinkedIn icon" width={36} height={36}  className="object-cover object-center "/>
              <span className="sr-only">LinkedIn</span>
            </a>
            </div>
            <div className="w-6 h-6">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/twitter.svg" alt="Twitter icon" width={30} height={30}  className="object-cover object-center "/>
               <span className="sr-only">Twitter</span>
            </a></div>

            <div className="w-7 h-7" ><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/instagram.svg" alt="instagram icon" width={36} height={36}  className="object-cover object-center "/>
               <span className="sr-only">Instagram</span>
            </a></div>

            <div className="w-7 h-7"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/facebook.svg" alt="Facebook icon" width={36} height={36}  className="object-cover object-center "/>
               <span className="sr-only">Facebook</span>
            </a></div>

          </div>
        </div>

        <div className="text-white px-0 md:px-10 lg:px-20 py-5 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-50 tracking-normal">
            <div className="flex flex-col gap-2 md:gap-5 items-center md:items-start text-center md:text-left">
              <h3 className="subheading-smaller whitespace-nowrap">Quick Links</h3>

              <div className="content tracking-normal whitespace-nowrap ">
                <Link href={"/"}> <p className="cursor-pointer">Home</p></Link>
                <Link href={"/hiring-solutions"}><p className="cursor-pointer">Hiring Solution</p></Link>
                <Link href={"/about-us"}><p className="cursor-pointer">About</p></Link>
                <Link href={"/industries"}><p className="cursor-pointer">Industries</p></Link>
                <Link href={"/services/permanent-hirings"}><p className="cursor-pointer">Services</p></Link>
                <Link href={"/jobs/browse-jobs"}><p className="cursor-pointer">See Jobs</p></Link>
                <Link href={"/about-us"}><p className="cursor-pointer">Contact Us</p></Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-5 items-center md:items-start text-center md:text-left">
              <h3 className="subheading-smaller whitespace-nowrap">Head Office</h3>

              <a href="https://maps.app.goo.gl/sTr4yV4g5m4rm5Hp8"><p className="text-white w-full md:w-60 content tracking-normal leading-[120%] cursor-pointer">
                85/A Railway Lines, Samrudhi one 4th floor,, Near
                commissioner Bangalow. Solapur 413001
              </p></a>
            </div>
            <div className="flex flex-col  gap-2 md:gap-5 items-center md:items-start text-center md:text-left">
              <div>
                <h3 className="subheading-smaller whitespace-nowrap">
                  Contact Info
                </h3>
              </div>

              <div className="flex flex-col items-center md:items-start ">
                <div className="flex items-center gap-3 content tracking-normal">
                  <div >
                  <Image
                    src="/images/footer/Phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                   className="object-cover object-center "
                  /></div>
                  <p className="font-inter content">+91 9225073111</p>
                </div>

                <div className="flex items-center gap-3  tracking-normal">
                  <div className="w-5 h-5">
                  <Image
                    src="/images/footer/email.svg"
                    alt="email"
                    width={20}
                    height={20}
                    className="object-cover object-center  "
                  /></div>
                  <a href="mailto:mailto:ramesh.w@cppsjobs.com hover:underline"><p className="font-inter content">ramesh.w@cppsjobs.com</p></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-start w-full ">
          <div className="flex items-center justify-start gap-5 flex-wrap cursor-pointer">
            <div>
            <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/linkedin.svg" alt="LinkedIn icon" width={36} height={36}  className="object-cover object-center "/>
              <span className="sr-only">LinkedIn</span>
            </a>
            </div>
            <div>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/twitter.svg" alt="Twitter icon" width={30} height={30}  className="object-cover object-center "/>
               <span className="sr-only">Twitter</span>
            </a></div>

            <div><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/instagram.svg" alt="instagram icon" width={36} height={36}  className="object-cover object-center "/>
               <span className="sr-only">Instagram</span>
            </a></div>

            <div><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/facebook.svg" alt="Facebook icon" width={36} height={36}  className="object-cover object-center "/>
               <span className="sr-only">Facebook</span>
            </a></div>

          </div>
        </div>

        <div className="flex items-center w-full">
          <hr className="border border-[#fafafaf7] w-full" />
        </div>
        <div className="w-full flex flex-col md:flex-col lg:flex-row content-semibold items-center justify-between gap-3  text-[16px] md:text-[18px] text-center lg:text-left ">
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
        <div className="hidden lg:block absolute right-0 bottom-22 ">
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