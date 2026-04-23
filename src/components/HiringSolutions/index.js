import { FeatureCard } from "./FeatureCard";
import HeroSection from "./HeroSection";
import CandidateNetworkSection from "./CandidateNetworkSection";
import FeatureCardSection from "./FeatureCardSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import HeroText from "./HeroText.js";
import HeroTextModular from "./HeroTextModular.js";
import ModularCTAText from "./ModularCTAText.js";

export default function HiringSolutions() {
  return (
    <>
      <HeroSection />
      <CandidateNetworkSection />
      <FeatureCardSection />
      <TestimonialSection />
      <CTASection />
      <HeroText />
      {/* <ModularCTAText
        text="Our focus is on building capable teams with the right professionals for every industry."
        highlights={["building", "right"]}
      /> */}
      {/* <ModularCTAText
        text="Our focus is on building capable teams with the right professionals for every industry."
        highlights={["building", "right"]}
      /> */}
    </>
  );
}
