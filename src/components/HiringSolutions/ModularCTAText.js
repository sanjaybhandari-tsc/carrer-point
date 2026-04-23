import Image from "next/image";

export default function ModularCTAText({
  text,
  highlights = [],
  quoteIcon = "/images/about/quote.svg",
}) {
  const formatText = () => {
    let formatted = text;

    highlights.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      formatted = formatted.replace(
        regex,
        `<span class="text-[var(--color-primary)]">$1</span>`,
      );
    });

    return formatted;
  };

  return (
    <section className="w-full bg-gray-100 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="w-full flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Text with Quote Icon */}
        <h2
          className="
    w-full
    font-bold text-[#333333]
    leading-snug

    text-base
    sm:text-lg
    md:text-2xl
    lg:text-4xl
    xl:text-5xl
    2xl:text-6xl
  "
        >
          {/* Quote Icon */}
          <Image
            src={quoteIcon}
            alt="Quotation icon"
            width={84}
            height={84}
            className="
      inline-block
      align-top
      mr-2 sm:mr-3 md:mr-4

      -translate-y-1 sm:-translate-y-2 md:-translate-y-3

      w-5 h-5
      sm:w-7 sm:h-7
      md:w-10 md:h-10
      lg:w-14 lg:h-14
      xl:w-16 xl:h-16
    "
          />

          <span dangerouslySetInnerHTML={{ __html: formatText() }} />
        </h2>
      </div>
    </section>
  );
}
