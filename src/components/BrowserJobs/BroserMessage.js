import React from 'react'
import Image from "next/image";
export default function BroserMessage() {
    return (

        <div className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
            <div className=" flex items-start justify-around">
                <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40 ">
                    <Image
                        src="/images/about/quote.svg"
                        alt="quote"
                        width={84}
                        height={84}
                        className="object-cover"
                    />
                </div>
                <h2 className="font-bold text-[#333333] text-[20px] sm:text-[22px] md:text-[30px] lg:text-[50px]">
                    Explore<span className="text-[#0277BD]"> opportunities </span>that match your skills and take the next step in
                    <span className="text-[#0277BD]"> building</span> a rewarding<span className="text-[#0277BD]"> career</span>.
                </h2>

            </div>
        </div>

    )
}

