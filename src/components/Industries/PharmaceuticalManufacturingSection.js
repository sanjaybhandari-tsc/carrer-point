export default function PharmaceuticalSalesSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Pharma Manufacturing
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The manufacturing sector forms the backbone of industrial growth,
            requiring skilled professionals who understand production processes,
            operational efficiency, and evolving technological advancements.
            Organizations in this sector depend on capable teams that can
            maintain productivity, ensure quality standards, and adapt to modern
            manufacturing practices.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We support manufacturing companies by connecting them with
            professionals who bring the right technical knowledge and practical
            experience, helping businesses strengthen their operations and
            achieve sustainable growth.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="images/industries/pharmaceuticalSales.png"
              alt="Pharmaceutical discussion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
