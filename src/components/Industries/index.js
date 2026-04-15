import HeroSection from "./HeroSection";
import HeroText from "./HeroText";
import PharmaceuticalSalesSection from "./PharmaceuticalSalesSection";
import PharmaceuticalSalesCard from "./PharmaceuticalSalesCard";
import PharmaceuticalManufacturingSection from "./PharmaceuticalManufacturingSection";
import BuildingMaterialsIndustrySection from "./BuildingMaterialsIndustrySection";
import BankingFinancialServicesInsurance from "./BankingFinancialServicesInsurance";
import FastMovingConsumerGoods from "./FastMovingConsumerGoods";
import PharmaceuticalManufacturingCard from "./PharmaceuticalManufacturingCard";
import BuildingMaterialsIndustryCard from "./BuildingMaterialsIndustryCard";
import BankingFinancialServicesInsuranceCard from "./BankingFinancialServicesInsuranceCard";
import FastMovingConsumerGoodsCard from "./FastMovingConsumerGoodsCard";


export default function Industries() {
  return (
    <>
    <HeroSection />
    <HeroText />
    <PharmaceuticalSalesSection />
    <PharmaceuticalSalesCard />
    <PharmaceuticalManufacturingSection />
    <PharmaceuticalManufacturingCard />
    <BuildingMaterialsIndustrySection />
    <BuildingMaterialsIndustryCard />
    <BankingFinancialServicesInsurance />
    <BankingFinancialServicesInsuranceCard />
    <FastMovingConsumerGoods />
    <FastMovingConsumerGoodsCard />
    </>
  )
}