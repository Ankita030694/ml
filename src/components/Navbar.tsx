'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 md:py-[25px] px-4 md:px-[70px] bg-[#3C1E03] w-full h-auto md:h-24 relative overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-[#FFE3C5] p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-[22px]">
        <a href="#about" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">ABOUT</a>
        <Link href="/contact" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">CONTACT</Link>
        <a href="#menu" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">MENU</a>
      </div>

      {/* Logo - Hidden on mobile, centered on desktop */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <Image 
          src="/ml-logo.png" 
          alt="Masala Library Logo" 
          width={100} 
          height={100}
          className="object-contain max-h-[100px]"
        />
      </div>

      {/* Mobile Logo - Visible only on mobile */}
      <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image 
          src="/ml-logo.png" 
          alt="Masala Library Logo" 
          width={60} 
          height={60}
          className="object-contain max-h-[60px]"
        />
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-[22px] lg:gap-[44px]">
        <button className="flex py-[14px] px-[20px] lg:px-[25px] justify-center items-center gap-[7px] rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] lg:text-[18px] font-medium leading-[18px] cursor-pointer">Call Us</button>
        <button className="flex py-[14px] px-[20px] lg:px-[25px] justify-center items-center gap-[7px] rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[16px] lg:text-[18px] font-medium leading-[18px] cursor-pointer">Reservation</button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#3C1E03] flex flex-col gap-4 p-4 md:hidden z-50 border-t border-[#512904]">
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] no-underline cursor-pointer py-2"
          >
            ABOUT
          </a>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] no-underline cursor-pointer py-2"
          >
            CONTACT
          </Link>
          <a 
            href="#menu" 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] no-underline cursor-pointer py-2"
          >
            MENU
          </a>
          <button className="flex py-3 px-5 justify-center items-center gap-[7px] rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer w-full mt-2">
            Call Us
          </button>
          <button className="flex py-3 px-5 justify-center items-center gap-[7px] rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer w-full">
            Reservation
          </button>
        </div>
      )}
    </nav>
  );
}
