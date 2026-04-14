import React from "react";
import styles from "../../styles/Home/Home.module.css";
function MncsEnterPrises() {
  return (
    <div className="py-15">
      <div className="text-center">
        <p className="text-3xl">Trusted by 50+ MNCs,Enterprises,Startups</p>
        <div className="overflow-hidden py-10">
          <div className={`flex gap-10 ${styles.animationScroll}`}>
            <img className="bg-blue-200" src="/images/homepage/PitchLogo.svg" />
            <img className="bg-blue-200" src="/images/homepage/FigmaLogo.svg" />
            <img
              className="bg-blue-200"
              src="/images/homepage/MediumLogo.svg"
            />
            <img
              className="bg-blue-200"
              src="/images/homepage/RedditLogo.svg"
            />
            <img
              className="bg-blue-200"
              src="/images/homepage/GenentechLogo.svg"
            />

            <img className="bg-blue-200" src="/images/homepage/PitchLogo.svg" />
            <img className="bg-blue-200" src="/images/homepage/FigmaLogo.svg" />
            <img
              className="bg-blue-200"
              src="/images/homepage/MediumLogo.svg"
            />
            <img
              className="bg-blue-200"
              src="/images/homepage/RedditLogo.svg"
            />
            <img
              className="bg-blue-200"
              src="/images/homepage/GenentechLogo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MncsEnterPrises;
