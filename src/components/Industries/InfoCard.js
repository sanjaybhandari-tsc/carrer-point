// components/InfoCard.js

export default function InfoCard({ icon, title, description }) {
  return (
    // <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition">
    //   <div className="flex justify-center mb-4 text-blue-500 text-3xl">
    //     {icon}
    //   </div>
    //   <h3 className="text-lg font-semibold text-gray-800 mb-2">
    //     {title}
    //   </h3>
    //   <p className="text-sm text-gray-500 leading-relaxed">
    //     {description}
    //   </p>
    // </div>
    <div className="relative bg-white rounded-2xl shadow-md p-6 overflow-hidden">
  
  {/* BLUE BUMP */}
  <div className="absolute top-0 left-0 w-full h-4 bg-blue-200 rounded-t-2xl"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-center">
    <div className="flex justify-center mb-4">
      {icon}
    </div>

    <h3 className="text-lg font-semibold text-gray-800">
      {title}
    </h3>

    <p className="text-gray-600 mt-2">
      {description}
    </p>
  </div>
</div>
  );
}