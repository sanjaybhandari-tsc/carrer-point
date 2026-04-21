import React from "react";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
const logos = [
  {
    src: "/images/homepage/PitchLogo.svg",
    alt: "Pitch",
    weidth: 103.80330657958984,
    height: 36,
  },
  {
    src: "/images/homepage/FigmaLogo.svg",
    alt: "Figma",
    weidth: 101,
    height: 36,
  },
  {
    src: "/images/homepage/MediumLogo.svg",
    alt: "Medium",
    weidth: 235,
    height: 36,
  },
  {
    src: "/images/homepage/RedditLogo.svg",
    alt: "Reddit",
    weidth: 114,
    height: 36,
  },
  {
    src: "/images/homepage/GenentechLogo.svg",
    alt: "Genentech",
    weidth: "254",
    height: "36",
  },
];

function MncsEnterprises() {
  return (
    <div className="text-center">
      <p className="text-xl lg:text-3xl">
        Trusted by 50+ MNCs, Enterprises, Startups
      </p>

      <div className={`py-9 pb-12 lg:py-20 ${styles.marqueeWrapper}`}>
        <div className={styles.marqueeTrack}>
          {/* 3 sets — translateX(-33.333%) loops perfectly */}
          {[...Array(3)].map((_, i) =>
            logos.map((logo) => (
              // <img
              //   key={`${i}-${logo.alt}`}
              //   src={logo.src}
              //   alt={logo.alt}
              //   className="mx-5"
              // />
              <Image
                key={`${i}-${logo.alt}`}
                width={logo.weidth}
                height={logo.height}
                src={logo.src}
                alt={logo.alt}
                className="mx-5"
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default MncsEnterprises;
