import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/user1.jpg",
    message:
      "It was an excellent opportunity through Career Point Placement Services...",
  },
  {
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/user2.jpg",
    message:
      "Working with Career Point Placement Services was smooth and professional...",
  },
  {
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Life",
    image: "/images/user3.jpg",
    message:
      "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance...",
  },
  {
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/user1.jpg",
    message:
      "It was an excellent opportunity through Career Point Placement Services...",
  },
  {
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/user2.jpg",
    message:
      "Working with Career Point Placement Services was smooth and professional...",
  },
  {
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Life",
    image: "/images/user3.jpg",
    message:
      "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance...",
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-20 bg-gray-100">
      
      <h2 className="text-2xl font-bold text-center mb-10">
        Voice of success
      </h2>

      <div className="relative">
        
        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto px-6 scroll-smooth scrollbar-hide">
          
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        
        </div>

      </div>
    </div>
  );
}