
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/about/Gallary/Galllaryp-1.jpg" },
  { src: "/images/about/Gallary/Galllaryp-2.jpg" },
  { src: "/images/about/Gallary/Galllaryp-3.jpg" },
  { src: "/images/about/Gallary/Galllaryp-4.jpg" },
  { src: "/images/about/Gallary/Galllaryp-5.jpg" },
  { src: "/images/about/Gallary/Galllaryp-6.jpg" },
  { src: "/images/about/Gallary/Galllaryp-7.jpg" },
  { src: "/images/about/Gallary/Galllaryp-8.jpg" },
  { src: "/images/about/Gallary/Galllaryp-9.jpg" },
  { src: "/images/about/Gallary/Galllaryp-10.jpg" },
  { src: "/images/about/Gallary/Galllaryp-11.jpg" },
  { src: "/images/about/Gallary/Galllaryp-12.jpg" },
  { src: "/images/about/Gallary/Galllaryp-13.jpg" },
  { src: "/images/about/Gallary/Galllaryp-14.jpg" },
  { src: "/images/about/Gallary/Galllaryp-15.jpg" },
  { src: "/images/about/Gallary/Galllaryp-16.jpg" },
  { src: "/images/about/Gallary/Galllaryp-17.jpg" },
  { src: "/images/about/Gallary/Galllaryp-18.jpg" },
  { src: "/images/about/Gallary/Galllaryp-19.jpg" },
];

export default function LifeatCPPS() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const visibleImages = showAll
    ? images
    : images.slice(0, isMobile ? 4 : 9);
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topRef.current && entry.isIntersecting) {
            setShowTop(true);
          }
          if (entry.target === bottomRef.current && entry.isIntersecting) {
            setShowBottom(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (topRef.current) observer.observe(topRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-12">
      <div
        ref={topRef}
        className={`flex items-center justify-center my-12 text-[36px] md:text-[40px] font-bold transition-all duration-700 ease-out
        ${showTop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
      >
        <h2>Life at CPPS</h2>
      </div>

      <div
        ref={bottomRef}
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out
        ${showBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={`gallery-${index}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain transition-transform duration-300 "
              />
            </div>
          ))}

        </div>
      </div>

      {!showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}