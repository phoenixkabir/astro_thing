'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/solid';

const EventsBooking = () => {
  const events = [
    { id: 1, name: 'Full Moon Meditation', date: '2023-06-15', time: '20:00' },
    { id: 2, name: 'Astrology Workshop', date: '2023-06-22', time: '18:30' },
    { id: 3, name: 'Tarot Reading Session', date: '2023-06-29', time: '19:00' },
  ];

  return (
    <section className="relative py-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 opacity-70"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Cosmic Events Await You
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="backdrop-blur-lg bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-purple-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="cosmic-swirl absolute inset-0 opacity-20"></div>
              <div className="cosmic-particles absolute inset-0 opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">{event.name}</h3>
                <div className="flex items-center mb-2 text-purple-200">
                  <CalendarIcon className="w-5 h-5 mr-2 text-pink-400" />
                  <p>{event.date}</p>
                </div>
                <div className="flex items-center mb-4 text-purple-200">
                  <ClockIcon className="w-5 h-5 mr-2 text-pink-400" />
                  <p>{event.time}</p>
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
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

export default EventsBooking;
