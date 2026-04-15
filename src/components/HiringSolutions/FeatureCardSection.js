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
import { ShieldCheck, FlaskConical, Activity } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Experienced Workforce",
      description:
        "Our recruitment team brings strong industry knowledge and practical expertise to deliver effective hiring solutions.",
      icon: <ShieldCheck size={40} strokeWidth={1.8} />,
    },
    {
      title: "Extensive Candidate Database",
      description:
        "Access to a database of 2,000,000+ candidates, helping organizations connect with skilled professionals faster.",
      icon: <FlaskConical size={40} strokeWidth={1.8} />,
    },
    {
      title: "Efficient Requirement Fulfillment",
      description:
        "Focused on understanding client needs and delivering the right candidates within the required timelines.",
      icon: <Activity size={40} strokeWidth={1.8} />,
    },
    {
      title: "Robust Infrastructure",
      description:
        "Strong operational systems that support smooth recruitment processes and reliable service delivery.",
      icon: <Activity size={40} strokeWidth={1.8} />,
    },
    {
      title: "Commitment to Quality",
      description:
        "We ensure high standards in candidate selection and client satisfaction through consistent evaluation.",
      icon: <ShieldCheck size={40} strokeWidth={1.8} />,
    },
    {
      title: "Ethical Hiring Practices",
      description:
        "Transparent and ethical hiring processes that build trust with both clients and candidates.",
      icon: <FlaskConical size={40} strokeWidth={1.8} />,
    },
    {
      title: "Accurate Career Guidance",
      description:
        "Helping candidates find the right opportunities aligned with their skills and career goals.",
      icon: <Activity size={40} strokeWidth={1.8} />,
    },
    {
      title: "Consistent Candidate Follow-up",
      description:
        "Ensuring continuous communication and follow-ups throughout the hiring lifecycle.",
      icon: <Activity size={40} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="bg-[#F5F7FA] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          Features
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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