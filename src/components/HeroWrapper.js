export default function HeroWrapper({ children }) {
  return (
    <section className="relative w-full min-h-[100dvh] md:min-h-screen flex items-center -mt-16 md:-mt-20 pt-16 md:pt-20">
      {children}
    </section>
  );
}