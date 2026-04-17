import styles from "@/styles/Indusries/Industries.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-dvh md:min-h-screen flex items-center">
      

      <Image
        src="/images/industries/heroSectionOne.png"
        alt="Industries we serve recruitment and staffing solutions"
        fill
        priority
        className="object-cover object-center"
      />


      <div
        className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10 ${styles.slideOverlay}`}
      />


      <div className="w-full h-auto gap-6 relative max-w-6xl mx-0 z-20 px-6 md:px-20 text-white">
        

        <h1 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Industries We Serve
        </h1>


        <p className="font-roboto text-lg sm:text-xl leading-relaxed mt-4 text-gray-200 max-w-4xl">
          We provide recruitment and staffing solutions across industries including 
          pharmaceutical, manufacturing, BFSI, FMCG, and building materials—helping 
          businesses hire skilled professionals who understand industry-specific 
          challenges and workforce demands.
        </p>


        <Link
          href="/industries"
          className={`mt-6 relative overflow-hidden
                      w-44 md:w-48 h-11 md:h-12
                      flex items-center justify-center gap-2.5
                      rounded-lg border-[1.5px] border-white
                      px-5 py-2.5
                      text-white group hover:border-0`}
        >
          <span className="absolute flex z-10 gap-2.5">
            <span>Get in touch</span>
            <img
              src="/images/homepage/HeroSendIcon.png"
              alt="Contact recruitment team"
            />
          </span>

          <span className="left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000 origin-center"></span>
        </Link>

      </div>
    </section>
  );
}