export default function FeatureCard({ icon, title, description }) {
  return (
    <div
      className=" bg-white rounded-2xl p-6 lg:p-6 xl:p-8 text-center border border-[#B2B2B259] shadow-[inset_0px_2px_16px_0px_#039BE614,_0px_4px_16px_0px_#00000014] min-h-[240px]  sm:min-h-[260px]  lg:min-h-[300px] lg:max-h-[300px] overflow-hidden flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0px_2px_20px_0px_#039BE614,_0px_6px_20px_0px_#00000020]">
      <div className="flex justify-center mb-5">
        <div className="text-sky-500">{icon}</div>
      </div>

      <h3 className="font-montserrat font-semibold text-base sm:text-lg leading-relaxed text-center mb-3">
        {title}
      </h3>

      <p className="font-roboto font-normal text-xs sm:text-sm leading-relaxed text-center ">
        {description}
      </p>
    </div>
  );
}
