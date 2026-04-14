import styles from "@/styles/Indusries/Industries.module.css";
export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('images/industries/heroSectionOne.png')",
        }}
      />
      <div className="absolute inset-0 flex z-10">
        <div className={` border-2 border-red-500 w-full h-full bg-gradient-to-r from-black/80 via-black/60 ${styles.slideOverlay}`}/>
      </div>
      <div className="relative z-10 max-w-2xl mx-0 z-20 px-6 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Industries We Serve
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base text-gray-200">
          Supporting businesses across multiple sectors by connecting them with
          skilled professionals who understand industry-specific challenges and
          talent needs.
        </p>
        <button className="mt-6 flex items-center gap-2 px-5 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
          Get in touch
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
