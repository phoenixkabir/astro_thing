'use client';
import React, { useState, useEffect } from 'react';
import { MapPinIcon, CalendarIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const HoroscopeGenerator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [horoscope, setHoroscope] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toFixed(4),
            longitude: position.coords.longitude.toFixed(4),
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const generateHoroscope = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setHoroscope('The celestial bodies align in your favor. Jupiter\'s influence brings opportunity, while Venus enhances your relationships. Stay open to the cosmic energies surrounding you, for they guide you towards your true path.');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="relative py-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 opacity-70"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Unveil Your Cosmic Destiny
        </h2>
        <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-lg border border-purple-500 relative overflow-hidden">
          <div className="cosmic-swirl absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label htmlFor="birthDate" className="block mb-2 text-sm font-medium text-purple-300">
                  Birth Date
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-2 pl-10 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-purple-300"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-purple-300">
                  Current Location
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <input
                    id="location"
                    type="text"
                    value={`${location.latitude}, ${location.longitude}`}
                    readOnly
                    className="w-full p-2 pl-10 bg-purple-900 bg-opacity-50 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-purple-300"
                    placeholder="Fetching location..."
                  />
                </div>
              </div>
            </div>
            <motion.button
              onClick={generateHoroscope}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center justify-center overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isGenerating}
            >
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <SparklesIcon className="animate-spin h-5 w-5 mr-3" />
                    Consulting the Stars...
                  </motion.div>
                ) : (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <SparklesIcon className="h-5 w-5 mr-3" />
                    Generate Horoscope
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {horoscope && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-md shadow-inner border border-purple-500 max-w-2xl mx-auto relative overflow-hidden"
            >
              <div className="cosmic-particles absolute inset-0"></div>
              <motion.p 
                className="text-lg leading-relaxed text-purple-100 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {horoscope.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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

export default HoroscopeGenerator;
