import dynamic from "next/dynamic";
import AboutHerosection from "./AboutHerosection";
import BuildingCarrers from "./BuildingCarrers";

// Above-the-fold: keep static (important for LCP)
const Ourjourney = dynamic(() => import("./Ourjourney"));
const Ourmission = dynamic(() => import("./Ourmission"));
const PeopleCulture = dynamic(() => import("./PeopleCulture"));
const Awards = dynamic(() => import("./Awards"));
const LifeatCPPS = dynamic(() => import("./LifeatCPPS"));
const Common = dynamic(() => import("../Home/Common"));
const Lastmessage = dynamic(() => import("./Lastmessage"));

export default function AboutView() {
  return (
    <>
      <AboutHerosection />
      <BuildingCarrers />

      <Ourjourney />
      <Ourmission />
      <PeopleCulture />
      <Awards />
      <LifeatCPPS />
      <Common />
      <Lastmessage />
    </>
  );
}