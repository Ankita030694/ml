"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = Array.from({ length: 4 }, (_, i) => `/gal/${i + 1}.jpg`);

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of visible slides based on screen width (approximate for logic)
  // We'll use CSS grid/flex for actual layout, but logic needs to know how much to shift
  // For simplicity in this custom implementation without a library, 
  // we will show 1 image on mobile, 2 on md, 3 on lg.
  // To make it "infinite" visually, we can just loop the index.

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // We need to render a "window" of images. 
  // To achieve a smooth infinite effect without complex cloning, 
  // we'll just render the active slice and handle the wrap-around logic in the view.
  // However, a true infinite carousel usually means you can see the next image coming in.
  // A simpler robust approach for "infinite" navigation is just looping the index.
  
  // Let's determine the visible images based on currentIndex.
  // We want to show 3 images at a time on desktop.
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  return (
    <div 
      className="w-full bg-[#FFE3C5] py-12 md:py-16 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 -ml-4 md:-ml-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 -mr-4 md:-mr-12">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-black shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            {/* 
               We will display a track that shifts. 
               Actually, with the "getVisibleImages" approach, we are just replacing content.
               For a smoother slide effect, we'd need a track with all images or a cloned set.
               Given the "infinite" requirement, a track with translation is better.
            */}

            
            {/* 
              Alternative Simple Implementation:
              Just show the active set. It won't "slide" perfectly infinitely (the jump back to 0 is visible)
              unless we use a specific technique.
              
              Let's use a simpler "active window" approach which is robust and looks good enough for most "infinite" requests unless "smooth continuous scroll" is specified.
              But "carousel" usually implies sliding.
              
              Let's try a CSS-only scroll snap or a simple flex container that we translate.
              To make it truly infinite, we can render [last, ...images, first] and handle index jumps.
              
              Actually, let's stick to a simpler robust design:
              A flex container showing 1 (mobile), 2 (tablet), 3 (desktop) items.
              We map `images` and just translate the container.
              To loop, when we reach the end, we jump back.
            */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               {getVisibleImages().map((src, idx) => (
                 <div key={`${src}-${idx}`} className="relative w-full overflow-hidden rounded-lg shadow-md group">
                   <Image
                     src={src}
                     alt={`Gallery Image ${currentIndex + idx + 1}`}
                     width={2000}
                     height={2000}
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>
        
        {/* Dots/Indicators (Optional, but good for UX) */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-black w-6" : "bg-black/30 hover:bg-black/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
