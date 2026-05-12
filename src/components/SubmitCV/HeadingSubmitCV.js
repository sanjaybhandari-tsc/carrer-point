import React from 'react'

export default function HeadingSubmitCV() {
    return (

        <header className="relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] md:py-12 py-10 rounded-b-2xl overflow-hidden" aria-label="Submit CV header">
            <img
                className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
                src="/images/permanentHiring/permanentTop1.svg"
                aria-hidden="true"
            />
            <img
                className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
                src="/images/permanentHiring/permanentTop2.svg"
                aria-hidden="true"
            />

            <img
                className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
                src="/images/permanentHiring/permanentTop3.svg"
                aria-hidden="true"
            />
            <img
                className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
                src="/images/permanentHiring/permanentTop4.svg"
                aria-hidden="true"
            />
            <h2 className="heading-bold text-white">
                Submit Your CV 
            </h2>
        </header>
    )
}

