import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-[#FFE3C5] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-11 lg:px-17">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-14 items-center lg:items-start">
          <div className="w-full max-w-md h-48 sm:h-52 md:h-60 lg:h-90 rounded-lg flex-shrink-0 relative overflow-hidden">
            <Image
              src="/ourst.jpg"
              alt="Masala Library by Jiggs Kalra"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[#3C1E03] font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
              OUR STORY
            </h2>

            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              A pioneer in progressive Indian gastronomy, Masala Library by Jiggs Kalra is the world's first restaurant to showcase the diverse cuisines of the Indian subcontinent—including India, Pakistan, Sri Lanka, Bangladesh, Nepal, Bhutan, and the Maldives.
            </p>
            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              Blending centuries-old culinary heritage with post-modern techniques, it offers a curated gastronomic journey that reinterprets tradition for the modern connoisseur. From ancient customs to forgotten flavors, Masala Library elevates regional cuisine into a contemporary, immersive dining experience.
            </p>

        
          </div>
        </div>
      </div>
    </section>
  );
}
