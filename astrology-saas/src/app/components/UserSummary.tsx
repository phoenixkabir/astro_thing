'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, StarIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const UserSummary = () => {
  const userStats = [
    { icon: StarIcon, label: 'Zodiac Sign', value: 'Leo' },
    { icon: MoonIcon, label: 'Moon Phase', value: 'Waxing Crescent' },
    { icon: SunIcon, label: 'Rising Sign', value: 'Scorpio' },
    { icon: ChartBarIcon, label: 'Compatibility', value: '78%' },
  ];

  return (
    <section className="relative py-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 opacity-70"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Your Cosmic Profile
        </h2>
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-lg border border-purple-500 relative overflow-hidden">
          <div className="cosmic-swirl absolute inset-0 opacity-20"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {userStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-10 h-10 text-yellow-400" />
                <div>
                  <p className="text-sm text-purple-300">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg">
            Update Your Profile
          </button>
        </motion.div>
      </div>
      <div className="cosmic-particles absolute inset-0"></div>
      <style jsx>{`
        .stars, .twinkling, .clouds {
          position: absolute;
          display: block;
          top: 0; bottom: 0; left: 0; right: 0;
          width: 100%; height: 100%;
        }
        .stars {
          z-index: 0;
          background: #000 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat top center;
        }
        .twinkling {
          z-index: 1;
          background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') repeat top center;
          animation: move-twink-back 200s linear infinite;
        }
        .clouds {
          z-index: 2;
          background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds.png') repeat top center;
          animation: move-clouds-back 200s linear infinite;
        }
        @keyframes move-twink-back {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }
        @keyframes move-clouds-back {
          from {background-position: 0 0;}
          to {background-position: 10000px 0;}
        }
        .cosmic-swirl {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 0 C60 40 40 60 0 50 C40 60 60 40 50 100 C40 60 60 40 100 50 C60 40 40 60 50 0" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/></svg>');
          background-size: 100px 100px;
          animation: cosmic-swirl 20s linear infinite;
        }
        @keyframes cosmic-swirl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .cosmic-particles {
          background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
          background-size: 15px 15px;
          animation: cosmic-particles 10s linear infinite;
        }
        @keyframes cosmic-particles {
          0% { background-position: 0 0; }
          100% { background-position: 15px 15px; }
        }
      `}</style>
    </section>
  );
};

export default UserSummary;
