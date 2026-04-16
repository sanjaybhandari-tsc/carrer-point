// export default function WorkCard({ id, title, desc }) {
//   return (
//     <div className="min-w-[300px] md:min-w-[400px]">
//       <h3 className="text-5xl font-bold mb-4 opacity-80">
//         {id}
//       </h3>
//       <h4 className="text-xl font-semibold mb-3">
//         {title}
//       </h4>
//       <p className="text-sm text-gray-200 leading-relaxed">
//         {desc}
//       </p>
//     </div>
//   );
// }

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