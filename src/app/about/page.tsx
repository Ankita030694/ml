import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-screen w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Masala Library Restaurant"
          fill
          className="object-cover"
          priority
        />
        {/* ABOUT US text at bottom middle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 md:pb-8 lg:pb-12 xl:pb-16 px-4">
          <h1 className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#FFE3C5] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-black font-[family-name:var(--font-poppins)] text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center">
            A pioneer in progressive Indian gastronomy, Masala Library by Jiggs
            Kalra is the world's first restaurant to showcase the diverse cuisines of
            the Indian subcontinent—including India, Pakistan, Sri Lanka, Bangladesh,
            Nepal, Bhutan, and the Maldives.
          </p>
          <p className="text-black font-[family-name:var(--font-poppins)] text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center mt-6 md:mt-8">
            Blending centuries-old culinary heritage with post-modern techniques, it
            offers a curated gastronomic journey that reinterprets tradition for the
            modern connoisseur. From ancient customs to forgotten flavors, Masala
            Library elevates regional cuisine into a contemporary, immersive dining
            experience
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#893F3F] w-full py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-48 flex items-center justify-center px-4">
        <h2 className="text-white font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          NEWSLETTER
        </h2>
      </div>

      {/* Masala Library Section */}
      <div className="bg-white w-full py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden md:overflow-visible">
        {/* Decorative images - peeping in from corners */}
        <div className="hidden sm:block absolute -top-8 md:-top-12 lg:-top-10 -left-8 md:-left-12 lg:-left-20 w-32 md:w-48 lg:w-64 xl:w-80 h-32 md:h-48 lg:h-64 xl:h-80">
          <Image
            src="/ml1.png"
            alt="Decorative element"
            fill
            className="object-contain rotate-90"
          />
        </div>
        <div className="hidden sm:block absolute -bottom-8 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 -right-8 md:-right-12 lg:-right-16 xl:-right-20 w-32 md:w-48 lg:w-64 xl:w-80 h-32 md:h-48 lg:h-64 xl:h-80">
          <Image
            src="/ml2.png"
            alt="Decorative element"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-black font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 md:mb-6 lg:mb-8">
            MASALA LIBRARY
          </h2>
          <p className="text-black font-[family-name:var(--font-poppins)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <section className="w-full flex flex-col md:flex-row gap-2 md:gap-4 bg-white">
        <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
          <Image
            src="/image1.jpg"
            alt="Gallery image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
          <Image
            src="/image2.jpg"
            alt="Gallery image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
          <Image
            src="/image3.jpg"
            alt="Gallery image 3"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Logos Section */}
      <div className="bg-[#A56565] w-full py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center px-4">
        <h2 className="text-white font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          LOGOS
        </h2>
      </div>
      <Footer />
    </>
  );
}

