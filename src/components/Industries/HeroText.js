export default function HeroText() {
  return (
    <section className="w-full h-[60vh] flex items-center justify-center bg-white px-6 md:px-20 border-2 border-amber-400">
      <div className="max-w-5xl text-center">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl font-semibold leading-tight">
          <span className="text-gray-300 text-xl md:text-xl lg:text-2xl">
            “
          </span>{" "}
          We help <span className="text-blue-500">organizations</span> across
          industries <span className="text-blue-500">connect</span> with
          professionals who understand their{" "}
          <span className="text-blue-500">unique</span> challenges.
          <span className="text-gray-300 text-xl md:text-xl lg:text-2xl">
            ”
          </span>
        </h1>
      </div>
    </section>
  );
}
