export default function CTA() {
  return (
    <section 
      className="relative w-full h-160 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url(/ctabg.jpg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-11 lg:px-17 text-center">
        <h2 className="text-[#FFE3C5] font-poppins text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          WANT TO BOOK A TABLE?
        </h2>
        <button className="bg-[#FFE3C5] text-white font-poppins text-lg md:text-xl font-medium px-8 md:px-12 py-4 md:py-5 rounded-full hover:opacity-90 transition-opacity">
          Book a table
        </button>
      </div>
    </section>
  );
}

