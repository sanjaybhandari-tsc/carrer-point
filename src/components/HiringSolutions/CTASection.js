import { Briefcase, Users } from "lucide-react";

export default function CTASection() {
  return (
    <div className="px-6 py-20 bg-gray-100">
      
      <div className="max-w-6xl mx-auto bg-[#0c2a44] rounded-3xl py-16 px-6 text-center relative overflow-hidden">
        
        
        <div className="absolute top-0 left-0 w-40 h-40 border border-blue-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border border-blue-400 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to take your next step?
        </h2>

       
        <p className="text-gray-300 text-sm md:text-base mb-10">
          Connect with highly skilled professionals or discover your next career opportunity
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          
          <button className="flex items-center justify-center gap-3 border border-gray-300 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0c2a44] transition">
            <Briefcase size={20} />
            View Jobs
          </button>

          
          <button className="flex items-center justify-center gap-3 border border-gray-300 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0c2a44] transition">
            <Users size={20} />
            Hire Talent
          </button>

        </div>
      </div>
    </div>
  );
}