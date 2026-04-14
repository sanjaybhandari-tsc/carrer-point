import React from 'react'

export default function Ourjourney() {
    return (
        <div className="w-full px-6 md:px-16 lg:px-30  lg:py-25 py-16 bg-white ">

            <div className="text-center mb-12">
                <h2 className=" md:text-4xl font-bold font-montserrat  text-[36px] leading-none tracking-normal text-center">
                    Our <span className="text-blue-500">Journey</span>
                </h2>
                <p className="text-[#000000] mt-9  md:text-base font-roboto font-[450] text-[18px] leading-none tracking-normal">
                    A journey of growth, partnerships, and milestones in building successful recruitment solutions
                </p>
            </div>

            <div className="space-y-10   bg-linear-to-b from-[rgba(250,250,250,0.22)] to-[rgba(3,155,230,0)]">
                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black  font-montserrat font-black lg:text-[60px] leading-none tracking-normal'>2009</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <h3 className=" md:text-2xl  mb-3 font-roboto font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                            The Foundation
                        </h3>

                        <p className="text-[#000000]  md:text-base font-roboto font-normal text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                            Career Point Placement Services was established with a 150 sq. ft office and a team of 3 recruiters,
                            serving its first insurance client. In the very first year, the company generated <span className='font-roboto font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'>₹2.5 lakh</span> in revenue,
                            laying the foundation for a growing recruitment organization.
                        </p>
                    </div>

                </div>


            </div>

        </div>
    )
}