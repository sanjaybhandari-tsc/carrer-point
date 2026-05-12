import dynamic from "next/dynamic";

import HeroSection from "./HeroSection";
import MncsEnterPrises from "./MncsEnterPrises";
import MessageFromManagingDirector from "./MessageFromManagingDirector";

// lazy load only below-the-fold
const IndustryWeServe = dynamic(() => import("./IndustryWeServe"));
const WorkProcess = dynamic(() => import("./WorkProcess"));
const OurTeam = dynamic(() => import("./OurTeam"));
const ReviewsAndRatings = dynamic(() => import("./ReviewsAndRatings"));
const GetinTouch = dynamic(() => import("./GetinTouch"));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MncsEnterPrises />
      <MessageFromManagingDirector />

      <IndustryWeServe />
      <WorkProcess />
      <OurTeam />
      <ReviewsAndRatings />
      <GetinTouch />
    </>
  );
}
