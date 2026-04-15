// components/CandidateNetworkSection.tsx
import Image from "next/image";

export default function CandidateNetworkSection() {
  return (
    <section className="bg-[#F5F7FA] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Talent{" "}
            <span className="text-blue-600">Sourcing</span> Strategy
          </h2>
        </div>

        
        <div className="flex flex-col lg:flex-row rounded-[28px] overflow-hidden shadow-md">
          
          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[280px] md:h-[380px] lg:h-auto">
            <Image
              src="/images/candidates.jpg"
              alt="Candidates"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 bg-[#0E2A47] text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              Extensive Candidate Network
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Over the years, Career Point Placement Services has developed a large
              and active network of professionals across multiple industries. Our
              continuously growing candidate database allows us to connect with
              individuals from different experience levels and functional areas.
              This strong network enables us to quickly identify relevant candidates
              and provide organizations with access to a broader talent pool when
              hiring for critical roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}