import Image from "next/image";

export default function StategicLeaderShipHiring() {
  return (
    <section
      className="w-full bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24"
      aria-label="Strategic Leadership Hiring Section"
    >
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 md:gap-12">
        <div className="w-full xl:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/executivesearch/Strategic Leadership Hiring.webp"
              alt="Executive search and strategic leadership hiring services"
              width={800}
              height={600}
              priority
              className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[150%] md:text-4xl mb-5 md:mb-6">
            Strategic Leadership Hiring
          </h2>

          <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
            Executive search is a specialized recruitment process focused on
            identifying
            <strong>
              {" "}
              senior leaders, CXOs, and top management professionals
            </strong>{" "}
            for critical organizational roles. These positions demand strong
            industry experience, strategic thinking, and proven leadership
            capability.
          </p>

          <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl leading-relaxed">
            Our executive search approach combines targeted research, market
            mapping, and structured evaluation to connect organizations with
            <strong> high-impact leadership talent</strong> that drives
            long-term strategic growth.
          </p>
        </div>
      </div>
    </section>
  );
}
