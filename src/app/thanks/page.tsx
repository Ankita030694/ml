import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThanksPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFE3C5] min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-md w-full bg-white rounded-lg p-8 md:p-10 shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#3C1E03]"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.75 12L10.58 14.83L16.25 9.17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold mb-4">
            Thank You!
          </h1>
          <p className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-base md:text-lg mb-8 opacity-80">
            Your submission has been received successfully. We will get back to you shortly.
          </p>
          <Link
            href="/"
            className="inline-block w-full py-3 md:py-4 px-6 rounded-lg bg-[#3C1E03] text-white font-[family-name:var(--font-poppins)] text-base md:text-lg font-medium hover:bg-[#512904] transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThanksPage;
