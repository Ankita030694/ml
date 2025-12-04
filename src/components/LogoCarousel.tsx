"use client";

import Image from "next/image";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/image018.png",
];

export default function LogoCarousel() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes logoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
      <div className="overflow-hidden w-full">
        <div 
          className="flex gap-6 md:gap-8 lg:gap-12 items-center"
          style={{
            animation: "logoScroll 30s linear infinite",
            width: "fit-content"
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 h-18 w-auto px-5"  
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={80}
                height={80}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 h-12 md:h-16 lg:h-20 xl:h-24 w-auto"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={80}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

