export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
      
      <div className="flex justify-center mb-5">
        <div className="bg-blue-50 p-4 rounded-full text-blue-600">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}