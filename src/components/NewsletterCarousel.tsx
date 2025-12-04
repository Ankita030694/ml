"use client";

import { useState } from "react";
import Image from "next/image";

const newsletterImages = [
  "/newsletter/1.jpeg",
  "/newsletter/2.jpeg",
  "/newsletter/3.jpeg",
  "/newsletter/4.jpeg",
  "/newsletter/5.jpeg",
  "/newsletter/6.jpeg",
  "/newsletter/7.jpeg",
  "/newsletter/8.jpeg",
];

export default function NewsletterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsletterImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsletterImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#893F3F] w-full py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-48 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#893F3F] p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#893F3F] p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Container with 3 visible images */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 9)}%)`,
                width: `${(newsletterImages.length * 100) / 3}%`,
              }}
            >
              {newsletterImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  style={{ 
                    width: `${120 / newsletterImages.length}%`,
                  }}
                >
                  <Image
                    src={image}
                    alt={`Newsletter image ${index + 1}`}
                    fill
                    className="object-contain p-2"
                    priority={index < 3}
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 400px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {newsletterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8 md:w-12"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

