import ExecutiveBanner from "./ExecutiveBanner";
import StategicLeaderShipHiring from "./StategicLeaderShipHiring";
import WhyChooseUsSection from "./WhyChooseUsSection";
import  HowWeWork  from "./HowWeWork";
import  CTASection  from "./CTASection";
import Lastmessage from "./Lastmessage";
import HeroText from "../commons/HeroText";

export default function ExecutiveSearch() {
  return (
    <>
    {/* <ExecutiveBanner /> */}
    <HeroText headingText={'Executive Search'}/>
    <StategicLeaderShipHiring />
    <WhyChooseUsSection />
    <HowWeWork />
    <Lastmessage />
    <CTASection />
    </>
  )
}