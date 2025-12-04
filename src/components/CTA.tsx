export default function CTA() {
  return (
    <section 
      className="relative w-full min-h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url(/cta.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-11 lg:px-17 text-center">
        <h2 className="text-[#FFE3C5] font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 md:mb-8">
          WANT TO BOOK A TABLE?
        </h2>
        <button className="bg-[#3c1e03] text-white font-poppins text-base md:text-lg lg:text-xl font-medium px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full hover:opacity-90 transition-opacity">
          Book a table
        </button>
      </div>
    </section>
  );
}



