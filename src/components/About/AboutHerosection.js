import Image from "next/image";
import React from 'react'
import styles from '../../styles/About/About.module.css'

export default function AboutHerosection() {
    return (
        <div className="bg-[url('/images/about/aboutHero.svg')] bg-center bg-cover max-h-screen h-auto w-full text-white flex items-center rounded-b-3xl">
            
            <div className={`${styles.heroleftSlidediv} w-full h-[70vh] md:h-[85vh] lg:h-screen 
                ps-6 sm:ps-10 md:ps-16 lg:ps-24 xl:ps-30 
                flex items-start 
                pt-40 sm:pt-48 md:pt-56 lg:pt-64 xl:pt-70 rounded-b-3xl`}>

                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex items-start justify-between flex-col gap-6 sm:gap-2 md:gap-8">
                    <div>
                        <h2 className="
                            font-bold 
                            text-2xl sm:text-3xl md:text-4xl lg:text-[48px] 
                            leading-[100%] tracking-[0%]">
                            About Us
                        </h2>
                    </div>

                    <div>
                        <p className="
                            text-sm sm:text-base md:text-lg lg:text-[22px] 
                            leading-[150%] tracking-[0%]">
                            Connecting organizations with the right talent through structured recruitment solutions and industry-focused expertise. We support businesses in building strong teams that drive long-term growth and success.
                        </p>
                    </div>

                    <button className="
                        relative overflow-hidden 
                        w-40 sm:w-44 md:w-48 lg:w-50 
                        h-10 sm:h-11 md:h-12 
                        flex items-end justify-center gap-2.5 
                        rounded-lg border-[1.5px] border-white 
                        px-4 sm:px-5 md:px-6 
                        py-2 sm:py-2.5 md:py-3 
                        text-white group hover:border-0">

                        <span className="relative z-10 flex items-center gap-2.5 transition">
                            <p className="text-xs sm:text-sm md:text-base">Get in touch</p>
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
        </div>
    )
}