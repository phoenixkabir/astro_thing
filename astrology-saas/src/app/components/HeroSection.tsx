'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/image.png"
        alt="Cosmic background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        // className="opacity-40 filter blur-sm"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
          Discover Your Personalized Astrology Insights
        </h1>
        <button className="bg-[#FFD700] text-black font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300 flex items-center">
          <StarIcon className="w-6 h-6 mr-2" />
          Generate Horoscope
        </button>
        
        <motion.div
          className="mt-16 relative w-64 h-64"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Simple star map */}
          <div className="absolute inset-0 border-2 border-white rounded-full"></div>
          <SunIcon className="absolute top-1/2 left-1/2 w-8 h-8 text-yellow-400 transform -translate-x-1/2 -translate-y-1/2" />
          <MoonIcon className="absolute top-1/4 left-1/4 w-6 h-6 text-gray-300" />
          <StarIcon className="absolute bottom-1/4 right-1/4 w-6 h-6 text-white" />
        </motion.div>
      </div>
      
      {/* Black fade at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
