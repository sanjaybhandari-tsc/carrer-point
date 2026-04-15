export default function HeroSection() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hiringsolutions/heroSectionHiringSolutions.png')" }}
    >
      
      <div className="min-h-screen bg-black/50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Smart hiring Solutions
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Connecting organizations with skilled professionals through reliable and efficient 
              recruitment support, helping businesses build stronger teams and achieve long-term growth.
            </p>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold 
                             hover:bg-blue-700 transition cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}