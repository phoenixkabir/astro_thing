'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            Cosmic Insights
          </Link>
          <ul className="flex space-x-6">
            {['Home', 'Horoscope', 'Events', 'Subscribe'].map((item, index) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={`/${item.toLowerCase()}`} className="text-white hover:text-purple-300 transition duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
