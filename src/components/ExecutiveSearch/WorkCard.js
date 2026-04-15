export default function WorkCard({ id, title, desc }) {
  return (
    <div className="min-w-[300px] md:min-w-[400px]">
      
      
      <h3 className="text-5xl font-bold mb-4 opacity-80">
        {id}
      </h3>

      
      <h4 className="text-xl font-semibold mb-3">
        {title}
      </h4>

      
      <p className="text-sm text-gray-200 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}