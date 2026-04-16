export default function InfoCard({ icon, title, description }) {
  return (
    <div className="
  relative bg-white rounded-2xl overflow-hidden p-6 text-center
  shadow-md
  border-t-8 border-blue-200
  transition-all duration-300 ease-out
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-1xl
">
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
