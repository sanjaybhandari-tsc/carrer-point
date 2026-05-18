import FeatureCard from "./FeatureCard";
import {
  ShieldCheck,
  Database,
  Network,
  UserCheck,
} from "lucide-react";
import { EfficientRequirement } from "@/components/icons/EfficientRequirement";
import { AccurateCareer } from "@/components/icons/AccurateCareer";
import { CommitmentQuality } from "@/components/icons/CommitmentQuality";
import { ConsistentFollowup } from "@/components/icons/ConsistentFollowup";

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
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  // const iconClass = "w-8 h-8 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px]";
  const iconClass = "w-8 h-8 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px]";
  
const features = [
    {
      title: "Experienced Workforce",
      description: "Our recruitment team brings strong industry knowledge and practical expertise to deliver effective hiring solutions and staffing services.",
      icon: <ShieldCheck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Extensive Candidate Database",
      description: "Access to a database of 2,000,000+ candidates, helping organizations connect with skilled professionals faster through efficient talent sourcing.",
      icon: <Database className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Efficient Requirement Fulfillment",
      description: "Focused on understanding client needs and delivering the right candidates within timelines using structured recruitment solutions.",
      icon: <EfficientRequirement className={iconClass} />,

    },
    {
      title: "Robust Infrastructure",
      description: "Strong operational systems that support smooth recruitment processes and reliable staffing service delivery.",
      icon: <Network className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Commitment to Quality",
      description: "We ensure high standards in candidate selection and client satisfaction through consistent evaluation and recruitment expertise.",
      // icon: <BadgeCheck className={iconClass} strokeWidth={1} />,
      icon: <CommitmentQuality className={iconClass} />
    },
    {
      title: "Ethical Hiring Practices",
      description: "Transparent and ethical hiring solutions that build trust with both clients and candidates.",
      icon: <UserCheck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Accurate Career Guidance",
      description: "Helping candidates find the right opportunities aligned with their skills and career goals through expert recruitment support.",
      // icon: <Info className={iconClass} strokeWidth={1} />,
      icon: <AccurateCareer className={iconClass} />
    },
    {
      title: "Consistent Candidate Follow-up",
      description: "Ensuring continuous communication and follow-ups throughout the hiring lifecycle for better recruitment outcomes.",
      // icon: <Activity className={iconClass} strokeWidth={1} />,
      icon: <ConsistentFollowup className={iconClass} />
    },
  ];

  return (
    <section
      ref={ref}
      className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="main-heading text-center mb-6 md:mb-12 lg:mb-[60px]">
          Features
        </h2>
        {/* <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] text-center leading-tight tracking-tight md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-10 lg:mb-12">
          Features
        </h2> */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start">
          {features.map((item, index) => (
            <div
              key={index}
              className={`card-content transform transition-all duration-700 ease-out 
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
