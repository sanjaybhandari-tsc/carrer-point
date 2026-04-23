// import { FeatureCard } from "./FeatureCard";

import HowWeWork from "../commons/HowWeWork";
import ServicesSecondCompo from "../commons/ServicesSecondCompo";
import WhyChoose from "../commons/WhyChoose";
import Common from "../commons/CTASection";
import HeaderPart from "./HeaderPart";
// import HowWeWork from "./HowWeWork";
import ProjectBasedTalentHiring from "./ProjectBasedTalentHiring";
import WeHelp from "./WeHelp";
import WhyChooseUs from "./WhyChooseUs";

export default function ContractHiring() {
  const workData = [
    {
      srNo: "01",
      heading: "Requirement Understanding",
      desc: "We begin by understanding the job role, required skills, experience level, and organizational expectations",
    },
    {
      srNo: "02",
      heading: "Talent Sourcing",
      desc: "Candidates are sourced through our database, professional networks, and trusted recruitment platforms.",
    },
    {
      srNo: "03",
      heading: "Screening & Shortlisting",
      desc: "Profiles are carefully reviewed and shortlisted based on qualifications, experience, and role suitability.",
    },
    {
      srNo: "04",
      heading: "Interview Coordination",
      desc: "We coordinate interviews between the client and selected candidates and manage feedback efficiently.",
    },
    {
      srNo: "05",
      heading: "Offer & Onboarding Support",
      desc: "Our team assists with offer",
    },
  ];
  const reasons = [
    {
      img: "/images/permanentHiring/shield-check.svg",
      heading: "Flexible Workforce Solutions",
      desc: "Access skilled professionals for project-based roles, seasonal demand, or temporary assignments.",
    },
    {
      img: "/images/permanentHiring/flask.svg",
      heading: "Efficient Talent Deployment",
      desc: "Our streamlined recruitment approach helps organizations quickly identify and onboard suitable contract professionals.",
    },
    {
      img: "/images/permanentHiring/activity-square.svg",
      heading: "Administrative Support Management",
      desc: "We handle employment documentation and administrative processes while the professional works at the client site.",
    },
  ];
  const hiringData = [
    {
      title: " Project-Based Talent Hiring",
      image: "/images/contractHiring/contract-hiring.webp",
      description: [
        "  Contract staffing enables organizations to hire skilled professionals for specific projects, temporary assignments, or short-term business needs without expanding their permanent workforce. It offers flexibility while ensuring that the right expertise is available when required.",
        "   Our contract staffing solutions help companies quickly access qualified professionals who can contribute to ongoing operations or specialized projects. From sourcing and screening candidates to managing employment documentation and administrative responsibilities, we ensure a smooth and reliable staffing process.",
      ],
    },
  ];
  return (
    <>
      <HeaderPart />
      <ServicesSecondCompo hiringData={hiringData} />
      {/* <ProjectBasedTalentHiring /> */}
      {/* <WhyChooseUs /> */}
      <WhyChoose reasons={reasons} />
      {/* <HowWeWork /> */}
      <HowWeWork workData={workData} />
      <WeHelp />
      <Common />
    </>
  );
}
