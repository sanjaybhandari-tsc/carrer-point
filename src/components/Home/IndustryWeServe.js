import React from "react";
function IndustryWeServe() {
  return (
    <div className="lg:py-36 py-18 w-full flex flex-col items-center gap-10">
      <div className="text-center flex flex-col gap-3 lg:gap-5 max-w-[80%]">
        <h3 className="text-3xl font-bold">
          <span className="text-[#0277BD] ">Industries </span>{" "}
          <span> We Serve</span>
        </h3>
        <p className="text-md font-[500]">
          Delivering top talent to organizations across fast-growing industries,
          helping businesses build skilled teams that drive innovation and
          long-term growth.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 w-full max-w-[90%] mx-auto">
        <div className="col-span-2 row-span-1 rounded-tl-[150px] overflow-hidden">
          <div className="relative group w-full h-full">
            <img
              src="/images/homepage/Industry1.svg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg lg:font-bold lg:text-3xl font-semibold">
                Manufacturing
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-2 overflow-hidden">
          <div className="relative group w-full h-full">
            <img
              src="/images/homepage/Industry2.svg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg lg:font-bold lg:text-3xl font-semibold">
                Pharmaceutical
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden">
          <div className="relative group w-full h-full">
            <img
              src="/images/homepage/Industry3.svg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg lg:font-bold lg:text-3xl font-semibold">
                BFSI
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden">
          <div className="relative group w-full h-full">
            <img
              src="/images/homepage/Industry4.svg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg lg:font-bold lg:text-3xl font-semibold text-center">
                Building Material
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 rounded-br-[150px] overflow-hidden">
          <div className="relative group w-full h-full">
            <img
              src="/images/homepage/Industry5.svg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg lg:font-bold lg:text-3xl  font-semibold">
                FMCG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndustryWeServe;
