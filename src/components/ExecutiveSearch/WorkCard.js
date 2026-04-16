export default function WorkCard({ item }) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] px-6">
      <h2 className="text-5xl font-bold text-white/70 mb-4">
        {item.id}
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
        {item.title}
      </h3>

      <p className="text-white/80 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}