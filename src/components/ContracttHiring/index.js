// import { FeatureCard } from "./FeatureCard";

import Common from "../Home/Common";
import HeaderPart from "./HeaderPart";
import HowWeWork from "./HowWeWork";
import ProjectBasedTalentHiring from "./ProjectBasedTalentHiring";
import WeHelp from "./WeHelp";
import WhyChooseUs from "./WhyChooseUs";

export default function ContractHiring() {
  return (
    <>
      <HeaderPart />
      <ProjectBasedTalentHiring />
      <WhyChooseUs />
      <HowWeWork />
      <WeHelp />
      <Common />
    </>
  );
}
