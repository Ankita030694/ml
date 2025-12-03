'use client';

import { useEffect, useState, useRef } from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  zIndex: number;
}

export default function FollowSection() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [sectionHeight, setSectionHeight] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const padding = 20;

      const rawItems: Omit<MediaItem, 'x' | 'y' | 'zIndex'>[] = [
        { id: 1, type: 'image', src: '/insta/IMG_20251203_122656 1.png', width: 300, height: 400 },
        { id: 2, type: 'image', src: '/insta/IMG_20251203_122709 1.png', width: 250, height: 250 },
        { id: 3, type: 'image', src: '/insta/IMG_20251203_122723 1.png', width: 350, height: 300 },
        { id: 4, type: 'video', src: '/insta/mlvid1.mp4', width: 300, height: 530 },
        { id: 5, type: 'image', src: '/insta/IMG_20251203_122742 1.png', width: 280, height: 350 },
        { id: 6, type: 'video', src: '/insta/mlvid2.mp4', width: 400, height: 300 },
        { id: 7, type: 'image', src: '/insta/IMG_20251203_122754 1.png', width: 320, height: 320 },
        { id: 8, type: 'image', src: '/insta/IMG_20251203_122849 1.png', width: 260, height: 380 },
      ];

      // Calculate total area and required height
      const totalItemArea = rawItems.reduce((acc, item) => acc + (item.width * item.height), 0);
      // Use a multiplier (e.g., 2.5) to account for random packing inefficiency and whitespace
      const requiredHeight = Math.max(800, (totalItemArea * 2.5) / containerWidth);
      setSectionHeight(requiredHeight);

      // Sort items by size (largest first) to improve packing success
      const items = [...rawItems].sort((a, b) => (b.width * b.height) - (a.width * a.height));

      const checkOverlap = (
        x1: number,
        y1: number,
        w1: number,
        h1: number,
        positioned: MediaItem[]
      ): boolean => {
        return positioned.some((item) => {
          const x2 = item.x;
          const y2 = item.y;
          const w2 = item.width;
          const h2 = item.height;

          return !(
            x1 + w1 + padding < x2 ||
            x1 > x2 + w2 + padding ||
            y1 + h1 + padding < y2 ||
            y1 > y2 + h2 + padding
          );
        });
      };

      const positionedItems: MediaItem[] = [];

      items.forEach((item) => {
        let positioned = false;
        let attempts = 0;
        const maxAttempts = 5000; // Increased attempts

        while (!positioned && attempts < maxAttempts) {
          const x = Math.random() * (containerWidth - item.width);
          const y = Math.random() * (requiredHeight - item.height);

          if (!checkOverlap(x, y, item.width, item.height, positionedItems)) {
            positionedItems.push({
              ...item,
              x,
              y,
              zIndex: Math.floor(Math.random() * 10),
            });
            positioned = true;
          }

          attempts++;
        }
        
        if (!positioned) {
             // Fallback: Try to place it in a grid-like manner or just append at the bottom if possible?
             // For now, with dynamic height and sorting, this should be very rare.
             // If it fails, we force it at a random position even if it overlaps slightly, 
             // but let's try to avoid that.
             console.warn(`Could not position item ${item.id} without overlap.`);
             // Force place to ensure visibility as requested
             positionedItems.push({
                ...item,
                x: Math.random() * (containerWidth - item.width),
                y: Math.random() * (requiredHeight - item.height),
                zIndex: 50, // Bring to front if forced
             });
        }
      });

      setMediaItems(positionedItems);
    };

    calculateLayout();
    
    // Debounce resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateLayout, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="bg-[#FFF5E6] py-12 md:py-16 lg:py-20 overflow-hidden w-full">
      <div className="w-full px-6">
        <div className="mb-12 md:mb-16 pl-[80px]">
          <h2 className="text-black text-left text-[56px] font-normal leading-[56px] mb-4">
            Follow
          </h2>
          
          <p className="text-[#512904] text-left text-[80px] font-normal italic leading-[80px]">
            @masalalibrary
          </p>
        </div>

        <div 
          ref={containerRef} 
          className="relative w-full transition-all duration-300 ease-in-out"
          style={{ height: `${sectionHeight}px` }}
        >
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="absolute transition-all duration-500 ease-in-out hover:z-50 hover:scale-105"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
                zIndex: item.zIndex,
              }}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt="Gallery image"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ) : (
                <video
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
