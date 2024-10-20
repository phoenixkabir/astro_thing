'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SubscriptionModel = () => {
  const plans = [
    { name: 'Basic', price: '$9.99', features: ['Daily Horoscope', 'Weekly Forecast', 'Monthly Overview'] },
    { name: 'Pro', price: '$19.99', features: ['All Basic features', 'Personalized Readings', 'Live Chat Support'] },
    { name: 'Premium', price: '$29.99', features: ['All Pro features', 'Video Consultations', 'Exclusive Workshops'] },
  ];

  return (
    <section className="relative py-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 opacity-70"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Choose Your Cosmic Journey
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-lg border border-purple-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="cosmic-swirl absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">{plan.name}</h3>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6">{plan.price}<span className="text-sm">/month</span></p>
                <ul className="mb-6 text-purple-200">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <span className="mr-2 text-yellow-400">✨</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
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
      `}</style>
    </section>
  );
};

export default SubscriptionModel;
