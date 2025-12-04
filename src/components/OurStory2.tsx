import Image from "next/image";

export default function OurStory2() {
  return (
    <section className="bg-[#FFE3C5] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-11 lg:px-17">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-14 items-center lg:items-start">
          <div className="w-full max-w-md h-48 sm:h-52 md:h-60 lg:h-150 rounded-lg flex-shrink-0 relative overflow-hidden">
            <Image
              src="/founder_jigg.jpg"
              alt="Jiggs Kalra, Founder of Masala Library"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[#3C1E03] font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
              Our Founder
            </h2>

            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              Jiggs Kalra, celebrated as the "Czar of Indian Cuisine" and "Tastemaker to the Nation," forged a legendary legacy as a food columnist, gastronome, author, and consultant. Over nearly five decades, he introduced the richness of Indian culinary tradition to the global stage and raised standards of cooking across the country.
            </p>
            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              He became the first Asian to be inducted into the International Food & Beverage Gourmet Hall of Fame, and accumulated numerous national and international awards during his lifetime. He revived long-forgotten royal recipes such as the Galouti kebab and helped establish critically acclaimed restaurants under major hotel groups.
            </p>
            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              He also authored more than eleven definitive works on Indian cuisine, including the seminal cookbook Prashad, and served as Chairman and Managing Director of Bawarchi Tolla.
            </p>

        
          </div>
        </div>
      </div>
    </section>
  );
}

