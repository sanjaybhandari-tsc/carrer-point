export default function FeatureCard({ icon, title, description }) {
  return (
    <div className=" bg-white rounded-b-2xl p-6 lg:p-6 xl:p-8 text-center border border-[#B2B2B259] shadow-[inset_0px_2px_16px_0px_#039BE614,_0px_4px_16px_0px_#00000014] min-h-[240px]  sm:min-h-[300px]  lg:min-h-[320px] lg:max-h-[310px] overflow-hidden flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0px_2px_20px_0px_#039BE614,_0px_6px_20px_0px_#00000020]">

      <div className="flex justify-center mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#EBF5FB] flex items-center justify-center text-[var(--color-primary)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
          {icon}
        </div>
      </div>
      <h3 className="card-heading text-center mb-3 ">{title}</h3>
      <p className="card-content text-center ">{description}</p>

    </div>
  );
}
