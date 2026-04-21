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

import { useState, useRef, useEffect } from "react";

export default function FeaturesSection() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const features = [
    {
      title: "Experienced Workforce",
      description:
        "Our recruitment team brings strong industry knowledge and practical expertise to deliver effective hiring solutions and staffing services.",
      icon: <ShieldCheck size={30} strokeWidth={1} />,
    },
    {
      title: "Extensive Candidate Database",
      description:
        "Access to a database of 2,000,000+ candidates, helping organizations connect with skilled professionals faster through efficient talent sourcing.",
      icon: <Database size={30} strokeWidth={1} />,
    },
    {
      title: "Efficient Requirement Fulfillment",
      description:
        "Focused on understanding client needs and delivering the right candidates within timelines using structured recruitment solutions.",
      icon: <Timer size={30} strokeWidth={1} />,
    },
    {
      title: "Robust Infrastructure",
      description:
        "Strong operational systems that support smooth recruitment processes and reliable staffing service delivery.",
      icon: <Building2 size={30} strokeWidth={1} />,
    },
    {
      title: "Commitment to Quality",
      description:
        "We ensure high standards in candidate selection and client satisfaction through consistent evaluation and recruitment expertise.",
      icon: <BadgeCheck size={30} strokeWidth={1} />,
    },
    {
      title: "Ethical Hiring Practices",
      description:
        "Transparent and ethical hiring solutions that build trust with both clients and candidates.",
      icon: <Scale size={30} strokeWidth={1} />,
    },
    {
      title: "Accurate Career Guidance",
      description:
        "Helping candidates find the right opportunities aligned with their skills and career goals through expert recruitment support.",
      icon: <Compass size={30} strokeWidth={1} />,
    },
    {
      title: "Consistent Candidate Follow-up",
      description:
        "Ensuring continuous communication and follow-ups throughout the hiring lifecycle for better recruitment outcomes.",
      icon: <RefreshCcw size={30} strokeWidth={1} />,
    },
  ];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] text-center leading-tight tracking-tight md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-10 lg:mb-12">
          Features
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {/* {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))} */}
          {features.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out
    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
