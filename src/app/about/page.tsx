import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import NewsletterCarousel from "@/components/NewsletterCarousel";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[90vh] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Masala Library Restaurant"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* ABOUT US text at bottom middle */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-center">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#FFE3C5] w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-8xl mx-auto">
          <p className="text-black font-[family-name:var(--font-poppins)] text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center">
            Masala Library by Jiggs Kalra, a magnum-opus of The Czar of Indian Cuisine & Tastemaker to the Nation – Mr. Jiggs Kalra, aims at showcasing the epicurean lineage of Ancient India, representing culinary excellence from across the geographical landscape of the country.
          
            The culinary offering at Masala Library by Jiggs Kalra, endeavour's to offer its patrons a never-before-undertaken gastronomic voyage, capturing the grandeur of centuries-old traditions and the long-lost essence of one of the oldest known gastronomic traditions in the World, combining it with modern day cooking techniques, whilst retaining the traditional preparation for each dish on offer. It aims at recreating the erstwhile culinary traditions in turn offering a truly gastronomical adventure for the connoisseurs.
         
            The Masala Library by Jiggs Kalra experience is showcased through its unique spread represented by dishes from the key provinces of the country, each elucidating the rich cultural heritage flown down centuries. Each region, represented in the vast menu, is prepared & presented by Chef's with extensive experience and expertise in the cuisine from the same.
          </p>
          <p className="text-black font-[family-name:var(--font-poppins)] text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center mt-6 md:mt-8">
            In addition to this, the menu at Masala Library by Jiggs Kalra takes pride in showcasing its vegetarian fare through a separate and specifically designed Vegetarian menu giving our patrons another reason to rejoice.
          </p>
          <p className="text-black font-[family-name:var(--font-poppins)] text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center mt-6 md:mt-8">
            Through this experience, Jiggs Kalra promises to offer the finest from across the vast historical land of India, retaining the authenticity of each dish while preparing them using their original traditional methods and recipes in collaboration with some of the oldest known artisans in the field from each region. The main focus of Masala Library by Jiggs Kalra is to revive the traditional recipes from across India with an emphasis on tracing the lineage of the Kebab and serving the greatest Curries of India.
          </p>
        </div>
      </div>

      {/* Newsletter Carousel Section */}
      <NewsletterCarousel />

      {/* Masala Library Section */}
      <div className="bg-white w-full py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden md:overflow-visible">
        {/* Decorative images - peeping in from corners */}
        <div className="hidden sm:block absolute top-0 left-0 h-full w-32 md:w-48 lg:w-64 xl:w-80">
          <Image
            src="/ml1.png"
            alt="Decorative element"
            height={1200}
            width={1200}
            className="object-contain rotate-90 h-full w-full"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </div>
        <div className="hidden sm:block absolute -bottom-10 md:-bottom-16 lg:-bottom-21 xl:-bottom-26 -right-10 md:-right-16 lg:-right-21 xl:-right-26 w-40 md:w-62 lg:w-83 xl:w-104 h-40 md:h-62 lg:h-83 xl:h-104">
          <Image
            src="/ml2.png"
            alt="Decorative element"
            height={2600}  // 2000 * 1.3 = 2600
            width={2600}
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
      <div className="bg-white w-full py-12 md:py-16 lg:py-20">
        <div className="w-full mx-auto">
          <LogoCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

