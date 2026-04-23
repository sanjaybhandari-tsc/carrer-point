import ExecutiveBanner from "./ExecutiveBanner";
import StategicLeaderShipHiring from "./StategicLeaderShipHiring";
import CTASection from "./CTASection";
import Lastmessage from "./Lastmessage";
import WhyChooseUsSection from "./WhyChooseUsSection";
import HowWeWork from "./HowWeWork";
import HeroText from "../commons/HeroText";

export default function RPO() {
  return (
    <>
    {/* <ExecutiveBanner /> */}
    <HeroText headingText={'Recruitment Process Outsourcing'}/>
    <StategicLeaderShipHiring />
    <WhyChooseUsSection />
    <HowWeWork />
    <Lastmessage />
    <CTASection />
    </>
  )
}