import styles from "@/styles/hiring/Hiring.module.css";
import Image from "next/image";
import HeroWrapper from "@/components/HeroWrapper";
export default function HeroSection() {
  return (
      <section className="relative w-full min-h-dvh md:min-h-screen flex items-center">
        <Image
          src="/images/hiringsolutions/heroSectionHiringSolutions.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10 ${styles.slideOverlay}`}
        />

        <div className="relative z-10 max-w-2xl mx-0 z-20 px-6 md:px-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Smart hiring Solutions
          </h1>
          <p className=" mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
            Connecting organizations with skilled professionals through reliable and efficient 
              recruitment support, helping businesses build stronger teams and achieve long-term growth.
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
      </section>
  );
}