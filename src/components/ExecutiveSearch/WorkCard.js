export default function WorkCard({ item }) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] px-6 h-full">
      <div className="min-h-[260px] md:min-h-[300px] flex flex-col justify-start">
        
        <h2 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[165%] text-white mb-4">
          {item.id}
        </h2>

        <h3 className="font-montserrat font-semibold text-xl sm:text-2xl leading-[165%] text-white mb-3">
          {item.title}
        </h3>

        <p className="font-roboto font-normal text-base sm:text-lg leading-relaxed text-white">
          {item.description}
        </p>

      </div>
    </div>
  );
}