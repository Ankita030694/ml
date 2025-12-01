import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-[25px] px-[70px] bg-[#3C1E03] w-full h-24 relative overflow-hidden">
      <div className="flex items-center gap-[22px]">
        <a href="#about" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">ABOUT</a>
        <a href="#contact" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">CONTACT</a>
        <a href="#menu" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">MENU</a>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image 
          src="/ml-logo.png" 
          alt="Masala Library Logo" 
          width={100} 
          height={100}
          className="object-contain max-h-[100px]"
        />
      </div>

      <div className="flex items-center gap-[44px]">
        <button className="flex py-[14px] px-[25px] justify-center items-center gap-[7px] rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] cursor-pointer">Call Us</button>
        <button className="flex py-[14px] px-[25px] justify-center items-center gap-[7px] rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] cursor-pointer">Reservation</button>
      </div>
    </nav>
  );
}
