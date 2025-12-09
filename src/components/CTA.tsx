"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" as any },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="w-full py-16 relative bg-[#FFE3C5]">
      <div className="w-full bg-white shadow-[0_4px_20px_rgba(233,114,132,0.3)] p-32 relative overflow-hidden">
        {/* Decorative images */}
        <div className="absolute left-20 -top-8 w-80 h-80 -translate-x-1/2 z-10 hidden md:block">
             <Image 
                src="/gal/6.png" 
                alt="Decorative left" 
                fill
                className="object-contain"
             />
        </div>
        <div className="absolute right-20 -bottom-20 w-100 h-100 translate-x-1/2 z-10 hidden md:block">
            <Image 
                src="/gal/5.png" 
                alt="Decorative right" 
                fill
                className="object-contain"
             />
        </div>

        <motion.div
          className="text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] mb-8">
            WANT TO BOOK A TABLE?
          </h2>

          <motion.div className="mt-8">
            <Link href="/reservation">
              <motion.button
                className="px-8 py-4 bg-[#ffffff] text-lg font-semibold text-black rounded-full hover:bg-[#c96476] hover:text-white transition-colors duration-300 shadow-lg border border-gray-200"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Book a Table Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
