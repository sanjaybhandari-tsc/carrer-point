import React from "react";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
const logos = [
  {
    src: "/images/homepage/AbbottLogo.svg",
    alt: "AbbottLogo",
    weidth: 103.80330657958984,
    height: 36,
    smW: 70,
  },
  {
    src: "/images/homepage/alkemLogo.svg",
    alt: "alkemLogo",
    weidth: 101,
    height: 36,
    smW: 67,
  },
  {
    src: "/images/homepage/ajantaLogo.svg",
    alt: "anjantaLogo",
    weidth: 235,
    height: 36,
    smW: 150,
  },
  {
    src: "/images/homepage/cilpaLogo.svg",
    alt: "cilpaLogo",
    weidth: 114,
    height: 36,
    smW: 67,
  },
  {
    src: "/images/homepage/emcureLogo.svg",
    alt: "emcureLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/ZuventusLogo.svg",
    alt: "ZuventusLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/integraceLogo.svg",
    alt: "integraceLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/UsvLogo.svg",
    alt: "UsvLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/MaxLifeLogo.svg",
    alt: "MaxLifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/bhartiAyaLogo.svg",
    alt: "bhartiAyaLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/hdfc_lifeLogo.svg",
    alt: "hdfc_lifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/LupinLogo.svg",
    alt: "LupinLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/hdfcLogo.svg",
    alt: "MaxLifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/bhartiAyaLogo.svg",
    alt: "bhartiAyaLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/zorviaLogo.svg",
    alt: "zorviaLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/CentaurLogo.svg",
    alt: "CentaurLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/AurobindoLogo.svg",
    alt: "AurobindoLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/EnduringValueLogo.svg",
    alt: "EnduringValueLogo",
    weidth: "254",
    height: "40",
    smW: 157,
  },
  {
    src: "/images/homepage/WanburyLogo.svg",
    alt: "WanburyLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/shilpaLogo.svg",
    alt: "shilpaLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/VibrantLogo.svg",
    alt: "VibrantLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/JohnaonLogo.svg",
    alt: "JohnaonLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/raichemLogo.svg",
    alt: "raichemLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/OcSpecialitiesLogo.svg",
    alt: "OcSpecialitiesLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
];

function MncsEnterprises() {
  return (
    <div className="text-center">
      <p className="py-4 md:py-6 lg:py-12 text-2xl sm:text-[28px] lg:text-[32px] font-semibold  text-[#333333]">
        Trusted by 50+ MNCs, Enterprises, Startups
      </p>

      <div className={` ${styles.marqueeWrapper}`}>
        <div className={`${styles.marqueeTrack} h-5 sm:h-9 md:h-11`}>
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
                width={100}
                height={100}
                src={logo.src}
                alt={logo.alt}
                // style={{ width: logo.smW }}
                className={`mx-1 sm:mx-4 md:mx-9 lg:w-full lg:h-full `}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default MncsEnterprises;
