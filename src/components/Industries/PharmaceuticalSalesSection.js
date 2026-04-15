
export default function PharmaceuticalSalesSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="images/industries/pharmaceuticalSales.png" 
              alt="Pharmaceutical discussion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Pharmaceutical Sales
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The pharmaceutical and healthcare sector plays a vital role in driving
            innovation, research, and public health advancement. With constant
            developments in medicine, technology, and regulatory standards,
            organizations require professionals who understand the industry’s
            dynamic and highly regulated environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We support pharmaceutical companies in building capable teams by
            connecting them with professionals who bring the right expertise,
            adaptability, and understanding of evolving industry demands. Our focus
            is on helping organizations strengthen their workforce so they can
            maintain quality standards, support innovation, and contribute to
            long-term growth within the healthcare ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}