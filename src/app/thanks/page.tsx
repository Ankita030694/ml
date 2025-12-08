import React from "react";
import Link from "next/link";

const ThanksPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#758b6b] mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your reservation request has been received. We look forward to serving you.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-[#758b6b] text-white font-semibold rounded-lg hover:bg-[#5e7056] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThanksPage;
