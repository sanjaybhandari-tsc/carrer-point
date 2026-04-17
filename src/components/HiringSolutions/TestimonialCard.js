export default function TestimonialCard({ name, role, image, text }) {
  return (
    <div
      className="
        relative
        bg-white
        rounded-2xl
        shadow-sm
        border border-gray-100
        pt-20 pb-8 px-8 mt-20
        text-center
        hover:shadow-md transition
        flex-shrink-0
        w-[300px]
        sm:w-[340px]
        md:w-[380px]
        lg:w-[400px]
        xl:w-[420px]
      "
    >

      <div className="absolute -top-14 left-1/2 -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      <h3 className="font-roboto font-medium text-base sm:text-lg leading-none text-center">{name}</h3>

      <p className="font-inter font-normal text-sm sm:text-base leading-none text-center">{role}</p>
      <div className="flex flex-col items-center mb-4">
        <img
    src="/icons/comma.svg"
    alt="quote"
    className="
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
      lg:w-12 lg:h-12
      mb-2 sm:mb-3
    "
  />
        
        <p className="font-inter font-normal text-sm sm:text-base leading-relaxed text-center">
          {text}
        </p>
      </div>
    </div>
  );
}