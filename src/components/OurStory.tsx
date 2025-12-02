export default function OurStory() {
  return (
    <section className="bg-[#FFE3C5] py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-11 lg:px-17">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-14 items-center lg:items-start">
          <div className="bg-white w-full max-w-md h-48 sm:h-52 md:h-60 lg:h-72 rounded-lg flex-shrink-0"></div>

          <div className="flex-1">
            <h2 className="text-[#3C1E03] font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
              OUR STORY
            </h2>

            <p className="text-black font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 md:mb-8 lg:mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 flex-wrap">
              <button className="flex py-3 px-5 md:py-3.5 md:px-6 justify-center items-center rounded-lg border-2 border-[#3C1E03] bg-transparent text-[#3C1E03] font-poppins text-sm sm:text-base lg:text-lg font-medium leading-normal cursor-pointer hover:bg-[#3C1E03] hover:text-white transition-colors">
                Lorem Ipusm
              </button>
              <button className="flex py-3 px-5 md:py-3.5 md:px-6 justify-center items-center rounded-lg border-2 border-[#3C1E03] bg-transparent text-[#3C1E03] font-poppins text-sm sm:text-base lg:text-lg font-medium leading-normal cursor-pointer hover:bg-[#3C1E03] hover:text-white transition-colors">
                Lorem Ipusm
              </button>
              <button className="flex py-3 px-5 md:py-3.5 md:px-6 justify-center items-center rounded-lg border-2 border-[#3C1E03] bg-transparent text-[#3C1E03] font-poppins text-sm sm:text-base lg:text-lg font-medium leading-normal cursor-pointer hover:bg-[#3C1E03] hover:text-white transition-colors">
                Lorem Ipusm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
