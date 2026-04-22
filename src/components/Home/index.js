// import styles from "@/styles/Home/Home.module.css";
// import HeroSection from "./HeroSection";
// import FeaturesSection from "./FeatureSection";
// import MncsEnterPrises from "./MncsEnterPrises";
// import MessageFromManagingDirector from "./MessageFromManagingDirector";
// import IndustryWeServe from "./IndustryWeServe";
// import WorkProcess from "./WorkProcess";
// import OurTeam from "./OurTeam";
// import ReviewsAndRatings from "./ReviewsAndRatings";
// import GetinTouch from "./GetinTouch";
// import Common from "./Common";

// export default function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <MncsEnterPrises />
//       <MessageFromManagingDirector />
//       <IndustryWeServe />
//       <WorkProcess />
//       <OurTeam />
//       <ReviewsAndRatings />
//       <GetinTouch />
//       {/* <Common /> */}
//     </>
//   );
// }

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