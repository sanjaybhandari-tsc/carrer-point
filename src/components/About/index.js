import styles from "../../styles/About/About.module.css";
import Common from "../Home/Common";
import AboutHerosection from "./AboutHerosection";
import Awards from "./Awards";
import BuildingCarrers from "./BuildingCarrers";
import Lastmessage from "./Lastmessage";
import LifeatCPPS from "./LifeatCPPS";
import Ourjourney from "./Ourjourney";
import Ourmission from "./Ourmission";
import PeopleCulture from "./PeopleCulture";

export default function AboutView() {
  return (
    <>
    <AboutHerosection/>
    <BuildingCarrers/>
    <Ourjourney/>
    <Ourmission/>
    <PeopleCulture/>
    <Awards/>
    <LifeatCPPS/>
    <Common/>
    <Lastmessage/>
    </>
  );
}