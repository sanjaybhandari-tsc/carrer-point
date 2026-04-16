export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 lg:p-6 xl:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300 ">
      
      <div className="flex justify-center mb-5">
        <div className="text-sky-500">
          {icon}
        </div>
      </div>

      <h3 className="font-montserrat font-semibold text-base sm:text-lg leading-relaxed text-center mb-3">
        {title}
      </h3>
      <p className="font-roboto font-normal text-xs sm:text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}