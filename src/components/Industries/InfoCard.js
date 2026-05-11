export default function InfoCard({ icon, title, description }) {
  return (
    <div
      className=" h-full relative
  bg-white
  rounded-2xl
  overflow-hidden
  p-6
  text-center
  border-t-8
  border-blue-200
  min-h-[200px]
  sm:min-h-[250px]

  transition-all
  duration-300
  ease-out

  shadow-[inset_0px_2px_16px_0px_#039BE614,_0px_4px_16px_0px_#00000014]

  lg:shadow-md
  lg:hover:shadow-md"
  //     className="
  //   blue-glow-card p-6 text-center border-t-8 border-blue-200 
  //   min-h-[200px] sm:min-h-[250px]
  //   shadow-[inset_0px_2px_16px_0px_#039BE614,_0px_4px_16px_0px_#00000014]
  //   lg:shadow-md lg:hover:shadow-md
  // "
    >
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="subheading text-center">
          {title}
        </h3>
        {/* <h3 className="font-montserrat font-bold text-base sm:text-lg leading-relaxed text-center">
          {title}
        </h3> */}
        {/* <p className="font-roboto font-normal text-xs sm:text-sm leading-relaxed text-center mt-2">
          {description}
        </p> */}
        <p className="small-text text-center mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
