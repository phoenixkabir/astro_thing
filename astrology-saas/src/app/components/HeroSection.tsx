'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen bg-gradient-to-b from-[#1D2B64] to-[#6C3D92] text-white overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
          Discover Your Personalized Astrology Insights
        </h1>
        <button className="bg-[#FFD700] text-[#1D2B64] font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300">
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
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
