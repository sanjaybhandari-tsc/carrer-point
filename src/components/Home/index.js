import styles from "@/styles/Home/Home.module.css";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import MncsEnterPrises from "./MncsEnterPrises";
import MessageFromManagingDirector from "./MessageFromManagingDirector";
import IndustryWeServe from "./IndustryWeServe";
import WorkProcess from "./WorkProcess";
import OurTeam from "./OurTeam";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MncsEnterPrises />
      <MessageFromManagingDirector />
      <IndustryWeServe />
      <WorkProcess />
      <OurTeam />
    </>
  );
}
