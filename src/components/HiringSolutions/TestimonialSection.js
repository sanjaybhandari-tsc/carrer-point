import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    id: 1,
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/testimonials/Ajay Kumar Pandey.png",
    text: "It was an excellent opportunity through Career Point Placement Services. Their support throughout the process was exceptional. I truly appreciate their efforts and highly recommend their services. Thank you for this opportunity.",
  },
  {
    id: 2,
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/testimonials/Hitesh Dhalawat.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team understood our requirements clearly and delivered the right candidates on time. Highly recommended for their consistent support.",
  },
  {
    id: 3,
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Uday Joshi.png",
    text: "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance as a Divisional Manager. They guided me to the right opportunity after my 10+ years at Axis Max Life Insurance.",
  },
  {
    id: 4,
    name: "Somen Roy",
    role: "Chief Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Somen Roy.png",
    text: "Thank you Career Point Placement Services for understanding my requirements and providing excellent support—from interview scheduling to feedback. Everything was handled professionally.",
  },
  {
    id: 5,
    name: "Sachin Pandey",
    role: "Manager Sales @ Prism Jonshon Limited",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team clearly understood our needs and delivered the right candidates on time. Highly appreciated and strongly recommended",
  },
  {
    id: 6,
    name: "Pitchai Vivek Ramasamy",
    role: "Zonal Business Manager @ Cipla",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "The consultancy provided clear, practical guidance that helped me secure the right role for my skills. I highly recommend them for honest advice and effective job search support. Highly recommend their support. Thank you for this opportunity.",
  },
  {
    id: 7,
    name: "Rahul Pawar",
    role: "Territory Head @ Hdfc Life Insurance Co Ltd.",
    image: "/images/testimonials/Rahul Pawar.png",
    text: "Thanks to Career Point Placement Agency, I secured a role at HDFC Life Insurance with great growth and culture. They helped me find the right opportunity in my native place, Kolhapur. Thank you for this opportunity.",
  },
  {
    id: 8,
    name: "Manmeet Singh Bhakshi",
    role: "Area Manager @ Aditya Birla Health Insurance Co Ltd",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "I joined Aditya Birla Health Insurance as Area Manager. Career Point Placement Services handled the entire process efficiently and truly care about candidates. Thank you for this opportunity.",
  },
];
export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-3xl lg:text-4xl">
            Voices of <span className="text-blue-600">Success</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Real experiences from candidates who found meaningful careers
          </p>
        </div>

        {/* Simple Horizontal Scroll */}
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

// export default function TestimonialSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2
//             className="font-semibold tracking-tight
//             text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
//           >
//             Voices of <span className="text-blue-600">Success</span>
//           </h2>

//           <p className="text-gray-500 mt-3 text-sm sm:text-base">
//             Real experiences from candidates who found meaningful careers
//           </p>
//         </div>

//         {/* Horizontal Scroll */}
//         <div
//           className="
//             flex gap-8
//             overflow-x-auto
//             snap-x snap-mandatory
//             pb-6
//             scroll-smooth

//             max-w-full
//           "
//         >
//           {testimonials.map((item) => (
//             <div key={item.id} className="snap-start flex-shrink-0">
//               <TestimonialCard {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const testimonials = [
//   {
//     name: "Ajay Kumar Pandey",
//     role: "DSM @ Zuventus HC",
//     image: "/images/user1.jpg",
//     message:
//       "It was an excellent opportunity through Career Point Placement Services...",
//   },
//   {
//     name: "Hitesh Dhalawat",
//     role: "Zonal Business Manager @ Cipla Oncology",
//     image: "/images/user2.jpg",
//     message:
//       "Working with Career Point Placement Services was smooth and professional...",
//   },
//   {
//     name: "Uday Joshi",
//     role: "Divisional Manager @ Kotak Life",
//     image: "/images/user3.jpg",
//     message:
//       "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance...",
//   },
//   {
//     name: "Ajay Kumar Pandey",
//     role: "DSM @ Zuventus HC",
//     image: "/images/user1.jpg",
//     message:
//       "It was an excellent opportunity through Career Point Placement Services...",
//   },
//   {
//     name: "Hitesh Dhalawat",
//     role: "Zonal Business Manager @ Cipla Oncology",
//     image: "/images/user2.jpg",
//     message:
//       "Working with Career Point Placement Services was smooth and professional...",
//   },
//   {
//     name: "Uday Joshi",
//     role: "Divisional Manager @ Kotak Life",
//     image: "/images/user3.jpg",
//     message:
//       "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance...",
//   },
// ];

// export default function TestimonialSection() {
//   return (
//     <div className="py-20 bg-gray-100">

//       <h2 className="text-2xl font-bold text-center mb-10">
//         Voice of success
//       </h2>

//       <div className="relative">

//         {/* Scroll Container */}
//         <div className="flex gap-6 overflow-x-auto px-6 scroll-smooth scrollbar-hide">

//           {testimonials.map((item, index) => (
//             <TestimonialCard key={index} {...item} />
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }
{
  /* <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Voices of Success</h2>
        <p className="text-gray-500 mt-2">
          Real experiences from candidates who found meaningful careers
        </p>
      </div> */
}
