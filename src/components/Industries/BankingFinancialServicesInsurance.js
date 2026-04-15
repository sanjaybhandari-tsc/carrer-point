export default function PharmaceuticalSalesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">
        <div className="w-full xl:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-5 md:mb-6">
            Banking, Financial Services & Insurance (BFSI)
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            The BFSI sector plays a vital role in supporting economic growth and
            financial stability. Organizations in this industry require
            professionals who understand financial systems, regulatory
            environments, and evolving customer expectations within a rapidly
            changing market landscape.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We support banks, financial institutions, and insurance
            organizations by connecting them with professionals who bring
            analytical expertise, industry awareness, and the ability to
            contribute to efficient operations, risk management, and long-term
            organizational growth.
          </p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/industries/bfsi.png"
              alt="BFSI industry"
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
