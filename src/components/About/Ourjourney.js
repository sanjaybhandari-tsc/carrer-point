
import React, { useEffect, useRef,useState } from 'react'


export default function Ourjourney() {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === topRef.current && entry.isIntersecting) {
                        setShowTop(true);
                    }

                    if (entry.target === bottomRef.current && entry.isIntersecting) {
                        setShowBottom(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (topRef.current) observer.observe(topRef.current);
        if (bottomRef.current) observer.observe(bottomRef.current);

        return () => observer.disconnect();
    }, []);
    return (
        <div className='bg-[linear-gradient(180deg,rgba(250,250,250,0.25)_0%,rgba(3,155,230,0.15)_50%,rgba(250,250,250,0.25)_100%)]'>
        <div className="w-full px-6 md:px-16 lg:px-30  lg:py-25 py-16">
             
            <div ref={topRef} className={`text-center mb-12 transition-all duration-700 ease-out
                ${showTop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}>
                <h2 className=" md:text-4xl  font-bold  text-[36px] leading-none tracking-normal text-center">
                    Our <span className="text-blue-500">Journey</span>
                </h2>
                <p className="text-[#000000] mt-9  md:text-base font-[450] text-[18px] leading-none tracking-normal">
                    A journey of growth, partnerships, and milestones in building successful recruitment solutions
                </p>
            </div>

            <div ref={bottomRef} className={`space-y-10 transition-all duration-700 ease-out fo
                ${showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} `}>
                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2009</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <h3 className=" md:text-2xl sm:text-xl  mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                            The Foundation
                        </h3>

                        <p className="text-[#000000]  md:text-base  text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                            Career Point Placement Services was established with a 150 sq. ft office and a team of 3 recruiters,
                            serving its first insurance client. In the very first year, the company generated <span className='font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'> ₹2.5 lakh </span> in revenue,
                            laying the foundation for a growing recruitment organization.
                        </p>
                    </div>

                </div>

                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2011</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <h3 className=" md:text-2xl  sm:text-xl mb-3 font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                            Momentum Begins
                        </h3>

                        <p className="text-[#000000]  md:text-base  text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                            The company expanded to a 350 sq. ft office with a growing team of 10 recruiters. Client partnerships increased to 7 insurance clients, and annual revenue <span className='font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'> reached ₹11 lakh </span>, reflecting strong early growth.
                        </p>
                    </div>

                </div>

                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2013</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl  sm:text-xl mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Scaling Forward
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base  font-normal text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                Operations expanded to a 750 sq. ft office with 20 recruiters supporting hiring needs. Career Point began serving 15 clients across insurance, banking, and pharmaceutical sectors, reaching
                                <span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'> ₹25 lakh </span>in revenue.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2015</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl  sm:text-xl mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Expanding Horizons
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base  text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                The company  <span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'>launched Excel Financial Solution </span>
                                for loan collection services and expanded to a 1200 sq. ft office. With 25 recruiters and 5 loan collection executives, the client base grew to 25 organizations, generating ₹35 lakh revenue.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black  font-black lg:text-[60px] leading-none tracking-normal'>2017</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Empowering Careers
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base   text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                Career Point formed Excel Career Management, focused on professional career consulting and training for candidates and job seekers, further strengthening its ecosystem around recruitment and career development.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl   text-black  font-black lg:text-[60px] leading-none tracking-normal'>2019</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Strengthening Operations
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base  font-normal text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                The company moved into its own 1500 sq. ft office and expanded its workforce to 30 recruiters, 5 freelancers, and 7 loan collection executives. With <span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'>40 clients</span>  across banking, pharma, FMCG, manufacturing, and insurance, revenue reached ₹50 lakh.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black  font-black lg:text-[60px] leading-none tracking-normal'>2021</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl mb-3 font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Strategic Expansion
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base font-normal text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                Career Point expanded its services by launching  <span className='font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'>Laxmi Financial Solution</span>  and Excel Engineering Solution. The organization grew to 50 recruiters, 10 freelancers, and 10 loan collection executives, continuing to support 40+ clients across multiple industries.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2023</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Growth Milestone
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base  text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                With a strong workforce of 30 recruiters, 10 freelancers, and 15 loan collection executives, the company continued serving 40+ industry clients and achieved a major milestone by<span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'> reaching ₹1 crore </span>in revenue.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="border-b border-gray-300 pb-8 flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black  font-black lg:text-[60px] leading-none tracking-normal'>2024</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl mb-3 font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Quality Recognition
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                Career Point received the  <span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'>ISO 9001:2015 certification</span> , reinforcing its commitment to quality recruitment practices. The company also promoted 6 employees to business partners and onboarded 10 new clients across various industries.
                            </p>
                        </div>

                    </div>

                </div>

                <div className=" flex items-start justify-between   flex-col md:flex-row gap-6">
                    <div className="md:w-[20%] ">
                        <p className='text-4xl md:text-5xl  text-black   font-black lg:text-[60px] leading-none tracking-normal'>2025</p>
                    </div>

                    <div className="md:w-[80%] flex items-start flex-col">
                        <div>
                            <h3 className=" md:text-2xl sm:text-xl  mb-3  font-bold text-[32px] lg:text-[32px] leading-[150%] tracking-normal">
                                Raising Standards
                            </h3>
                        </div>
                        <div>
                            <p className="text-[#000000]  md:text-base text-[20px]  lg:text-[20px] leading-[150%] tracking-normal">
                                The company further strengthened its credibility by achieving
                                <span className=' font-semibold text-[20px] leading-[150%] tracking-normal text-[#0277BD]'> ISO 1002:2018 certification</span>, reflecting its continued commitment to maintaining high standards in recruitment services and client satisfaction.
                            </p>
                        </div>

                    </div>

                </div>


            </div>

        </div></div>
    )
}