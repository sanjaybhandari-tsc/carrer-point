export default function TestimonialCard({ name, role, image, text }) {
  return (
    <div
      className="
        relative
    bg-white
    rounded-2xl
    pt-20 pb-8 px-8 mt-20
    text-center
    flex-shrink-0
    w-[300px]
    sm:w-[340px]
    md:w-[380px]
    lg:w-[400px]
    xl:w-[420px]
    min-h-[420px]
    border border-[#E1EBFF]
shadow-[inset_0px_4px_4px_0px_#0000000A]
      "
    >
      <div
        className=" absolute -top-14 left-1/2 -translate-x-1/2
          bg-[#039BE6]
          p-0.5
          rounded-full flex flex-col"
      >
        <img
          src={image}
          alt={name}
          className="w-28 h-28
  rounded-full
  object-cover
  border-[1.5px] border-[#FBFDFF]
  shadow-[0px_-2px_8px_0px_#00000014]"
        />
      </div>

      <h3 className="font-roboto font-medium text-base sm:text-lg">{name}</h3>

      <p className="font-inter text-sm sm:text-base text-gray-600">{role}</p>

      <div className="flex flex-col items-center justify-between flex-1 mt-4">
        <img
          src="/icons/comma.svg"
          alt="quote"
          className="w-8 h-8 sm:w-10 sm:h-10 mb-3"
        />

        <p className=" mt-auto font-inter font-weight: 600 text-base leading-[150%] tracking-normal text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
