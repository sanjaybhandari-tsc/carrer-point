import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    id: 1,
    name: "Manmeet Singh Bhakshi",
    role: "Area Manager @ Aditya Birla Health Insurance Co Ltd",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "I joined Aditya Birla Health Insurance as Area Manager. Career Point Placement Services handled the entire process efficiently and truly care about candidates. Thank you for this opportunity.",
  },
  
  {
    id: 2,
    name: "Sachin Pandey",
    role: "Manager Sales @ Prism Jonshon Limited",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team clearly understood our needs and delivered the right candidates on time. Highly appreciated and strongly recommended",
  },
  {
    id: 3,
    name: "Pitchai Vivek Ramasamy",
    role: "Zonal Business Manager @ Cipla",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "The consultancy provided clear, practical guidance that helped me secure the right role for my skills. I highly recommend them for honest advice and effective job search support. Highly recommend their support. Thank you for this opportunity.",
  },
  {
    id: 4,
    name: "Rahul Pawar",
    role: "Territory Head @ Hdfc Life Insurance Co Ltd.",
    image: "/images/testimonials/Rahul Pawar.png",
    text: "Thanks to Career Point Placement Agency, I secured a role at HDFC Life Insurance with great growth and culture. They helped me find the right opportunity in my native place, Kolhapur. Thank you for this opportunity.",
  },
  {
    id: 5,
    name: "Somen Roy",
    role: "Chief Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Somen Roy.png",
    text: "Thank you Career Point Placement Services for understanding my requirements and providing excellent support—from interview scheduling to feedback. Everything was handled professionally.",
  },
  {
    id: 6,
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "It was an excellent opportunity through Career Point Placement Services. Their support throughout the process was exceptional. I truly appreciate their efforts and highly recommend their services. Thank you for this opportunity.",
  },
  {
    id: 7,
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team understood our requirements clearly and delivered the right candidates on time. Highly recommended for their consistent support.",
  },
  {
    id: 8,
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance as a Divisional Manager. They guided me to the right opportunity after my 10+ years at Axis Max Life Insurance.",
  },
];
export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-none text-center" */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-none text-center">
            Voices of <span className="text-[var(--color-primary)]">Success</span>
          </h2>
          <p className="font-roboto font-normal text-base sm:text-lg leading-relaxed text-center mt-3">
            Real experiences from candidates who found meaningful career opportunities through our recruitment support.
          </p>
        </div>


        <div
          className="
          flex gap-8
            overflow-x-auto
            no-scrollbar
            snap-x snap-mandatory
            scroll-smooth
            pb-6
          "
        >
          {testimonials.map((item) => (
            <div key={item.id} className="snap-start flex-shrink-0">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}