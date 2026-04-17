import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Manmeet Singh Bhakshi",
    role: "Area Manager @ Aditya Birla Health Insurance Co Ltd",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "I joined Aditya Birla Health Insurance as Area Manager. Career Point Placement Services handled the entire recruitment process efficiently and truly care about candidates. Thank you for this opportunity.",
  },
  {
    id: 2,
    name: "Sachin Pandey",
    role: "Manager Sales @ Prism Jonshon Limited",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team clearly understood our hiring needs and delivered the right candidates on time. Highly recommended.",
  },
  {
    id: 3,
    name: "Pitchai Vivek Ramasamy",
    role: "Zonal Business Manager @ Cipla",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "The consultancy provided clear guidance that helped me secure the right role. I highly recommend their recruitment support and job consultancy services.",
  },
  {
    id: 4,
    name: "Rahul Pawar",
    role: "Territory Head @ Hdfc Life Insurance Co Ltd.",
    image: "/images/testimonials/Rahul Pawar.png",
    text: "Thanks to Career Point Placement Services, I secured a role at HDFC Life Insurance with great growth and culture. Their hiring support helped me find the right opportunity.",
  },
  {
    id: 5,
    name: "Somen Roy",
    role: "Chief Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Somen Roy.png",
    text: "Excellent recruitment support from interview scheduling to feedback. Everything was handled professionally.",
  },
  {
    id: 6,
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "It was an excellent opportunity through Career Point Placement Services. Their hiring process and support were exceptional.",
  },
  {
    id: 7,
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "The team understood our recruitment requirements clearly and delivered the right candidates on time. Highly recommended.",
  },
  {
    id: 8,
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Career Point guided me to the right opportunity after 10+ years of experience. Their job consultancy support was very helpful.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-none text-center">
            Voices of Success
          </h2>

          <p className="font-roboto font-normal text-base sm:text-lg leading-relaxed text-center mt-3">
            Real experiences from candidates and companies who benefited from our recruitment, staffing, and hiring solutions.
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