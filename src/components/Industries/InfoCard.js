// components/InfoCard.js

export default function InfoCard({ icon, title, description }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 overflow-hidden">
  
  {/* BLUE BUMP */}
  <div className="absolute top-0 left-0 w-full h-4 bg-blue-200 rounded-t-2xl"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-center">
    {/* <div className="flex justify-center mb-4">
      {icon}
    </div> */}
    <div className="flex justify-center mb-4">
    <img src={icon} alt={title} className="flex justify-center items-center w-6 h-6" m-2/>
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