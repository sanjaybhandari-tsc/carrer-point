export default function ExecutiveBanner() {
  return (
    // <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-center">
    <div className="relative overflow-hidden rounded-xl bg-blue-700 py-16 text-center mt-20">
      
      {/* Decorative Circles (Top Left) */}
      <div className="absolute top-0 left-0 w-40 h-40 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Decorative Circles (Top Right) */}
      <div className="absolute top-0 right-0 w-40 h-40 border border-white/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>

      {/* Title */}
      <h2 className="text-white text-4xl md:text-5xl font-bold relative z-10">
        Executive Search
      </h2>

      {/* Dotted Line */}
      <div className="mt-4 mx-auto w-60 border-t border-dashed border-white/30"></div>
    </div>
  );
}