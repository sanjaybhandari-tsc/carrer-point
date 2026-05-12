import React from 'react'
import Image from "next/image";
export default function BroserMessage() {
    return (

        <div className="w-full px-3 py-6 md:px-16 lg:px-[80px] md:py-[40px] lg:py-[60px] bg-white">
            <div className=" flex items-start">
                {/* <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 "> */}
                    <Image
                        src="/images/about/quote.svg"
                        alt="quote"
                        width={84}
                        height={84}
                        className="object-contain flex-shrink-0 -mt-1 md:-mt-1.5 lg:-mt-2"
                    />
                <h2 className=" text-[#333333] independent-text ">
                    Explore<span className="text-[#0277BD]"> opportunities </span>that match your skills and take the next step in
                    <span className="text-[#0277BD]"> building</span> a rewarding<span className="text-[#0277BD]"> career</span>.
                </h2>

            </div>
        </div>

    )
}

