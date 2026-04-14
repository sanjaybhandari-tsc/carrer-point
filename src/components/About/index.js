import styles from "../../styles/About/About.module.css";
import AboutHerosection from "./AboutHerosection";
import BuildingCarrers from "./BuildingCarrers";
import Ourjourney from "./Ourjourney";

export default function AboutView() {
  return (
    <>
    <AboutHerosection/>
    <BuildingCarrers/>
    <Ourjourney/>
    </>
  );
}