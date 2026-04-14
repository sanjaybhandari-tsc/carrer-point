import React from "react";

function IndustryWeServe() {
  return (
    <div className="py-36 flex flex-col items-center gap-10">
      <div className="text-center flex flex-col gap-5 max-w-[60%]">
        <h3 className="text-3xl font-bold">
          <span className="text-[#0277BD] ">Industries </span>
          <span> We Serve</span>
        </h3>
        <p className="text-md font-[500]">
          Delivering top talent to organizations across fast-growing industries,
          helping businesses build skilled teams that drive innovation and
          long-term growth.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-[90%] mx-auto">
        <img
          src="/images/homepage/Industry1.svg"
          className="col-span-2  row-span-1 rounded-tl-[150px] object-cover w-full h-full"
        />

        <img
          src="/images/homepage/Industry2.svg"
          className="col-span-1  row-span-2 object-cover w-full h-full"
        />

        <img
          src="/images/homepage/Industry3.svg"
          className="col-span-1  row-span-2 object-cover w-full h-full"
        />

        <img
          src="/images/homepage/Industry4.svg"
          className="col-span-1 row-span-1 object-cover w-full h-full"
        />

        <img
          src="/images/homepage/Industry5.svg"
          className="col-span-2 rounded-br-[150px] row-span-1 object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default IndustryWeServe;
