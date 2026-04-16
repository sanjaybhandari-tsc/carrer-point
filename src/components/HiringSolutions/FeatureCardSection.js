//   const features = [
//     {
//       title: "Experienced Workforce",
//       description:
//         "Our recruitment team brings strong industry knowledge and practical expertise to deliver effective hiring solutions.",
//     },
//     {
//       title: "Extensive Candidate Database",
//       description:
//         "Access to a database of 2,000,000+ candidates, helping organizations connect with skilled professionals faster.",
//     },
//     {
//       title: "Efficient Requirement Fulfillment",
//       description:
//         "Focused on understanding client needs and delivering the right candidates within the required timelines.",
//     },
//     {
//       title: "Robust Infrastructure",
//       description:
//         "Strong operational systems that support smooth recruitment processes and reliable service delivery.",
//     },
//     {
//       title: "Commitment to Quality",
//       description: "Ethical Hiring Practices",
//     },
//     {
//       title: "Accurate Career Information",
//       description: "Consistent Candidate Follow-ups",
//     },
//   ];

import FeatureCard from "./FeatureCard";
import {
  ShieldCheck,
  Database,
  Timer,
  Building2,
  BadgeCheck,
  Scale,
  Compass,
  RefreshCcw,
} from "lucide-react";

export default function FeaturesSection() {
const features = [
  {
    title: "Experienced Workforce",
    description:
      "Our recruitment team brings strong industry knowledge and practical expertise to deliver effective hiring solutions.",
    icon: <ShieldCheck size={30} strokeWidth={1} />,
  },
  {
    title: "Extensive Candidate Database",
    description:
      "Access to a database of 2,000,000+ candidates, helping organizations connect with skilled professionals faster.",
    icon: <Database size={30} strokeWidth={1} />,
  },
  {
    title: "Efficient Requirement Fulfillment",
    description:
      "Focused on understanding client needs and delivering the right candidates within the required timelines.",
    icon: <Timer size={30} strokeWidth={1} />,
  },
  {
    title: "Robust Infrastructure",
    description:
      "Strong operational systems that support smooth recruitment processes and reliable service delivery.",
    icon: <Building2 size={30} strokeWidth={1} />,
  },
  {
    title: "Commitment to Quality",
    description:
      "We ensure high standards in candidate selection and client satisfaction through consistent evaluation.",
    icon: <BadgeCheck size={30} strokeWidth={1} />,
  },
  {
    title: "Ethical Hiring Practices",
    description:
      "Transparent and ethical hiring processes that build trust with both clients and candidates.",
    icon: <Scale size={30} strokeWidth={1} />,
  },
  {
    title: "Accurate Career Guidance",
    description:
      "Helping candidates find the right opportunities aligned with their skills and career goals.",
    icon: <Compass size={30} strokeWidth={1} />,
  },
  {
    title: "Consistent Candidate Follow-up",
    description:
      "Ensuring continuous communication and follow-ups throughout the hiring lifecycle.",
    icon: <RefreshCcw size={30} strokeWidth={1} />,
  },
];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          Features
        </h2> */}
        <h2 className="text-center font-semibold leading-tight tracking-tight
  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-10 lg:mb-12">
  Features
</h2>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}