import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-[#893F3F] p-4 border-t border-[#FFE3C5]/20 shadow-lg">
      <div className="flex gap-4 items-center justify-center w-full">
        <a 
          href="tel:+918454900900" 
          className="flex-1 py-3 px-4 flex justify-center items-center rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer no-underline whitespace-nowrap"
        >
          Call Us
        </a>
        <Link 
          href="/reservation" 
          className="flex-1 py-3 px-4 flex justify-center items-center rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer no-underline whitespace-nowrap"
        >
          Reservation
        </Link>
      </div>
    </div>
  );
}
