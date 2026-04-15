export default function BuildingMaterialsIndustrySection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">
        
        <div className="w-full xl:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/industries/buildingMaterialsIndustry.png"
              alt="Building materials industry"
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-5 md:mb-6">
            Building Materials Industry
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The building materials sector plays a significant role in supporting infrastructure development and construction growth. Companies in this industry rely on professionals who understand production processes, supply networks, and evolving market demands within a competitive and fast-moving environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We support organizations in the building materials space by connecting them with professionals who bring industry awareness, operational understanding, and the ability to contribute to efficient production, supply chain management, and distribution systems that support consistent business growth.
          </p>
        </div>

      </div>
    </section>
  );
}