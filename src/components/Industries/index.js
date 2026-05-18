import HeroSection from "./HeroSection";
import HeroText from "./HeroText";
import IndustryCard from "@/components/Industries/IndustryCard";
import IndustrySection from "@/components/Industries/IndustrySection";
import IndustryCombined from "@/components/Industries/IndustryCombined";

import {
  ShieldCheck, // Regulatory Compliance
  FlaskConical, // Research & Innovation
  Activity, // Quality & Safety Standards
  Settings, // Production & Operations
  BadgeCheck, // Quality Management
  Building2, // Industrial Technology / Production Management
  Truck, // Supply Chain & Distribution / Supply Chain Management
  CheckCircle, // Quality & Process Standards
  Landmark, // Financial Operations
  FileSearch, // Risk & Compliance
  Users, // Customer & Digital Services
  TrendingUp, // Sales & Market Operations
  BarChart3, // Consumer Market Insights
} from "lucide-react";
import { CogIcon  } from "@/components/icons/CogIcon";
import { PulseIcon  } from "@/components/icons/PulseIcon";

export default function Industries() {
  const iconClass = "w-8 h-8 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px]";
  const pharmaSalesData = {
    title: "Pharmaceutical",
    description1:
      "The pharmaceutical and healthcare sector plays a vital role in driving innovation, research, and public health advancement. With constant developments in medicine, technology, and regulatory standards, organizations require skilled professionals who understand this highly regulated and fast-evolving environment.",
    description2:
      "We provide pharmaceutical recruitment and staffing solutions, helping companies hire experienced professionals in sales, regulatory compliance, and healthcare operations. Our focus is on building strong teams that maintain quality standards, support innovation, and drive long-term growth across the healthcare ecosystem.",
    imageSrc: "/images/industries/pharmaceuticalSales.png",
    imageAlt: "Pharmaceutical recruitment and sales professionals",
    imagePosition: "left",
  };

  const pharmaManufacturingData = {
    title: "Pharma Manufacturing",
    description1:
      "The pharmaceutical manufacturing sector plays a critical role in industrial growth, requiring skilled professionals who understand production processes, quality control, and evolving manufacturing technologies. Organizations in this space depend on efficient teams to maintain productivity and meet strict regulatory standards.",
    description2:
      "We provide pharma manufacturing recruitment and staffing solutions, helping companies hire experienced professionals in production, operations, and industrial technology. Our focus is on strengthening manufacturing teams to ensure consistent quality, operational efficiency, and long-term business growth.",
    imageSrc: "/images/industries/pharmaManufacturing.png",
    imageAlt: "Pharma manufacturing recruitment",
    imagePosition: "right",
  };

  const buildingMaterialsData = {
    title: "Building Materials Industry",
    description1:
      "The building materials industry plays a key role in infrastructure development and construction growth. Companies in this sector require skilled professionals who understand production processes, supply chain networks, and evolving market demands in a competitive environment.",
    description2:
      "We provide recruitment and staffing solutions for the building materials industry, helping organizations hire experienced professionals in production management, supply chain, and distribution operations. Our focus is on building strong teams that support efficiency, quality, and long-term business growth.",
    imageSrc: "/images/industries/buildingMaterialsIndustry.png",
    imageAlt:
      "Building materials recruitment and construction industry workforce",
    imagePosition: "left",
  };

  const bfsiData = {
    title: "The Banking, Financial Services & Insurance (BFSI)",
    description1:
      "The Banking, Financial Services, and Insurance (BFSI) sector plays a vital role in supporting economic growth and financial stability. Organizations in this industry require skilled professionals who understand financial systems, regulatory frameworks, and evolving customer expectations in a rapidly changing market.",
    description2:
      "We provide BFSI recruitment and staffing solutions, helping banks, financial institutions, and insurance companies hire experienced professionals in financial operations, risk management, compliance, and digital banking services. Our focus is on building strong teams that drive efficiency, governance, and long-term growth.",
    imageSrc: "/images/industries/bfsi.webp",
    imageAlt:
      "BFSI recruitment banking financial services insurance professionals",
    imagePosition: "right",
  };

  const fmcgData = {
    title: "Fast Moving Consumer Goods (FMCG)",
    description1:
      "The Fast Moving Consumer Goods (FMCG) sector operates in a fast-paced and highly competitive environment where efficiency, strong distribution networks, and market understanding are critical. Companies in this industry require skilled professionals who can respond quickly to changing consumer demands and evolving retail trends.",
    description2:
      "We provide FMCG recruitment and staffing solutions, helping organizations hire experienced professionals in sales, supply chain management, and distribution operations. Our focus is on building high-performing teams that drive sales growth, optimize product movement, and improve overall business performance across competitive consumer markets.",
    imageSrc: "/images/industries/fast-moving-consumer-goods.webp",
    imageAlt:
      "FMCG recruitment and consumer goods industry workforce distribution",
    imagePosition: "left",
  };

  const PharmaceuticalSalesCardData = [
    {
      title: "Regulatory Compliance",
      description:
        "Professionals experienced in pharmaceutical regulatory compliance, quality standards, and production processes.",
      icon: <ShieldCheck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Research & Innovation",
      description:
        "Talent supporting pharmaceutical research, product development, and healthcare innovation.",
      icon: <FlaskConical className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Quality & Safety Standards",
      description:
        "Experts focused on pharmaceutical quality control, safety protocols, and regulatory guidelines.",
      icon: <PulseIcon className={iconClass} strokeWidth={1.5} />,
    },
  ];

  const PharmaceuticalManufacturingCardData = [
    {
      title: "Production & Operations",
      description:
        "Professionals experienced in managing production workflows, manufacturing operations, and industrial efficiency.",
      icon: <CogIcon className={iconClass} strokeWidth={1.5} />

    },
    {
      title: "Quality Management",
      description:
        "Ensuring consistent product quality through strict standards, inspections, and process control systems.",
      icon: <BadgeCheck className={iconClass} strokeWidth={1.5} /> 
    },
    {
      title: "Industrial Technology",
      description:
        "Talent skilled in modern manufacturing technologies, automation systems, and industrial engineering tools.",
      icon: <Building2 className={iconClass} strokeWidth={1.5} />
    },
  ];

  const BuildingMaterialsIndustryCardData = [
    {
      title: "Production Management",
      description:
        "Professionals experienced in managing production activities, manufacturing workflows, and operational efficiency in the building materials industry.",
      icon: <Building2 className={iconClass} strokeWidth={1.5} />,

    },
    {
      title: "Supply Chain & Distribution",
      description:
        "Talent skilled in supply chain management, logistics operations, and distribution systems across building materials and construction markets.",
      icon: <Truck className={iconClass} strokeWidth={1.5} />,
    
    },
    {
      title: "Quality & Process Standards",
      description:
        "Experts ensuring consistent product quality through structured processes, inspections, and operational standards in the construction materials sector.",
      icon: <BadgeCheck className={iconClass} strokeWidth={1.5} />,

    },
  ];
  
  const BankingFinancialServicesInsuranceCardData = [
    {
      title: "Financial Operations",
      description:
      "Professionals experienced in banking financial operations, transactions, and structured financial systems management.",
      icon: <Landmark className={iconClass} strokeWidth={1.5} />,

    },
    {
      title: "Risk & Compliance",
      description:
      "Experts in banking risk management, regulatory compliance, and financial governance frameworks.",
      icon: <FileSearch className={iconClass} strokeWidth={1.5} />,

    },
    {
      title: "Customer & Digital Services",
      description:
      "Talent supporting digital banking platforms, customer service operations, and fintech-driven financial services.",
      icon: <Users className={iconClass} strokeWidth={1.5} />,
    },
  ];
  
  const FastMovingConsumerGoodsCardData = [
    {
      title: "Sales & Market Operations",
      description:
      "Professionals experienced in FMCG sales operations, market expansion, and consumer-driven business growth.",
      icon: <TrendingUp className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Supply Chain Management",
      description:
      "Talent skilled in FMCG supply chain management, product distribution, and logistics coordination across retail networks.",
      icon: <Truck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Consumer Market Insights",
      description:
      "Experts analyzing FMCG consumer behavior, market trends, and product demand forecasting.",
      icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
    },
  ];
  

  return (
    <>
      <HeroSection />
      <HeroText />

      <IndustryCombined
        data={pharmaSalesData}
        cards={PharmaceuticalSalesCardData}
      />

      <IndustryCombined
        data={pharmaManufacturingData}
        cards={PharmaceuticalManufacturingCardData}
      />

      <IndustryCombined
        data={buildingMaterialsData}
        cards={BuildingMaterialsIndustryCardData}
      />

      <IndustryCombined
        data={bfsiData}
        cards={BankingFinancialServicesInsuranceCardData}
      />

      <IndustryCombined
        data={fmcgData}
        cards={FastMovingConsumerGoodsCardData}
      />
    </>
  );
}
