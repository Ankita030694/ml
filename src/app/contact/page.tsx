"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await addDoc(collection(db, "contact"), {
        ...formData,
        createdAt: new Date(),
      });
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      router.push("/thanks");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#FFE3C5] min-h-screen py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Panel - Contact Us */}
            <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 self-start">
              <h2 className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
                Contact Us
              </h2>
              
              <div className="flex flex-col gap-5 md:gap-6">
                <div>
                  <p className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base lg:text-lg font-normal leading-relaxed">
                    Ground Floor, First International Financial Centre, G Block Bandra- Kurla Complex (BKC) Bandra (E), Mumbai, 400051 (India)
                  </p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 flex-shrink-0"
                  >
                    <path 
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" 
                      stroke="#3C1E03" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a 
                    href="tel:+918452900900" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base lg:text-lg font-normal leading-relaxed hover:text-blue-600 break-words"
                  >
                    <span className="text-blue-600">+91 8452900900</span> / <span className="text-blue-600">8454900900</span>
                  </a>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 flex-shrink-0"
                  >
                    <path 
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                      stroke="#3C1E03" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M22 6L12 13L2 6" 
                      stroke="#3C1E03" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a 
                    href="mailto:reservations@masalalibrary.co.in" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base lg:text-lg font-normal leading-relaxed hover:text-blue-600 underline break-words"
                  >
                    reservations@masalalibrary.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel - Get in Touch Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10">
              <h2 className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="fullName" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-[#3C1E03] bg-white text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3C1E03]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="email" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-[#3C1E03] bg-white text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3C1E03]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="phone" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-[#3C1E03] bg-white text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3C1E03]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="message" 
                    className="text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-[#3C1E03] bg-white text-[#3C1E03] font-[family-name:var(--font-poppins)] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3C1E03] resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-3 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 md:py-4 px-6 rounded-lg bg-[#3C1E03] text-white font-[family-name:var(--font-poppins)] text-base md:text-lg font-medium hover:bg-[#512904] transition-colors duration-200 cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

