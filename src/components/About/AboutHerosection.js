import Image from "next/image";
import React from "react";
import styles from "@/styles/hiring/Hiring.module.css";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-dvh md:min-h-screen flex items-center rounded-b-3xl overflow-hidden">
      <Image
        src="/images/about/aboutHero.webp"
        alt="About Us"
        fill
        priority
        className="object-cover object-center"
      />

      <div className={styles.slideLayer}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/0 z-10 rounded-b-3xl" />

        <div className="relative z-20 w-full max-w-6xl px-6 md:px-20 text-white">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight">
            About Us
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed text-gray-200 max-w-5xl">
            Connecting organizations with the right talent through structured recruitment solutions and industry-focused expertise. We support businesses in building strong teams that drive long-term growth and success.
          </p>
          <button
            className="mt-6 relative overflow-hidden 
            w-40 sm:w-44 md:w-48 lg:w-50 
            h-10 sm:h-11 md:h-12 
            flex items-end justify-center gap-2.5 
            rounded-lg border-[1.5px] border-white 
            px-4 sm:px-5 md:px-6 
            py-2 sm:py-2.5 md:py-3 
            text-white group hover:border-0"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <p className="text-xs sm:text-sm md:text-base">
                Get in touch
              </p>
              <Image
                src="/images/about/sendIcon.svg"
                alt="send Icon"
                width={24}
                height={24}
              />
            </span>

            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1500 origin-center"></span>
          </button>

        </div>
      </div>
    </section>
  );
}