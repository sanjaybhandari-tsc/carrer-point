import Image from "next/image";

export default function ModularCTAText({ text, highlights = [], quoteIcon }) {
  const parts = text.split(
    new RegExp(`(${highlights.join("|")})`, "gi")
  );

  return (
    <section className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
      <div className="flex items-start justify-around">
        <div className="mb-6 w-20 sm:w-22 md:w-30 lg:w-40">
          <Image
            src={quoteIcon || "/images/about/quote.svg"}
            alt="Quotation icon"
            width={84}
            height={84}
            className="object-cover"
          />
        </div>

        <h2 className="font-bold text-[#333333] text-[20px] sm:text-[22px] md:text-[30px] lg:text-[50px]">
          {parts.map((part, index) =>
            highlights.some(
              (word) => word.toLowerCase() === part.toLowerCase()
            ) ? (
              <span key={index} className="text-[var(--color-primary)]">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </h2>
      </div>
    </section>
  );
}