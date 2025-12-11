'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 md:py-[55px] px-4 md:px-[70px] bg-[#893F3F] w-full h-auto md:h-24 relative z-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-[#FFE3C5] p-2 z-50 relative"
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
        <Link href="/about" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">ABOUT</Link>
        <Link href="/contact" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">CONTACT</Link>
        <a href="#menu" className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[18px] font-medium leading-[18px] no-underline cursor-pointer">MENU</a>
      </div>

      {/* Logo - Hidden on mobile, centered on desktop */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <Link href="/">
          <Image 
            src="/ml-logo.png" 
            alt="Masala Library Logo" 
            width={100} 
            height={100}
            className="object-contain max-h-[100px]"
          />
        </Link>
      </div>

      {/* Mobile Logo - Visible only on mobile */}
      <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <Image 
            src="/ml-logo.png" 
            alt="Masala Library Logo" 
            width={60} 
            height={60}
            className="object-contain max-h-[60px]"
          />
        </Link>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-[22px] lg:gap-[44px]">
        <a href="tel:+918454900900" className="flex py-[14px] px-[20px] lg:px-[25px] justify-center items-center gap-[7px] rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] lg:text-[18px] font-medium leading-[18px] cursor-pointer no-underline">Call Us</a>
        <Link href="/reservation" className="flex py-[14px] px-[20px] lg:px-[25px] justify-center items-center gap-[7px] rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[16px] lg:text-[18px] font-medium leading-[18px] cursor-pointer no-underline">Reservation</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#893F3F] flex flex-col gap-4 p-4 md:hidden z-[100] border-t border-[#893F3F] shadow-lg">
          <Link 
            href="/about" 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] no-underline cursor-pointer py-2"
          >
            ABOUT
          </Link>
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
          <a href="tel:+918454900900" className="flex py-3 px-5 justify-center items-center gap-[7px] rounded-[7px] border-[1.4px] border-[#FFE3C5] bg-transparent text-[#FFE3C5] font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer w-full mt-2 no-underline">
            Call Us
          </a>
          <Link href="/reservation" onClick={() => setIsMenuOpen(false)} className="flex py-3 px-5 justify-center items-center gap-[7px] rounded-[7px] bg-[#FFE3C5] border-none text-black font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-[18px] cursor-pointer w-full no-underline">
            Reservation
          </Link>
        </div>
      )}
    </nav>
  );
}
