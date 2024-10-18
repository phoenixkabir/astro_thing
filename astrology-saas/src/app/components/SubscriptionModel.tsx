'use client';
import React from 'react';

const SubscriptionModel = () => {
  const plans = [
    { name: 'Basic', price: '$9.99', features: ['Daily Horoscope', 'Weekly Forecast', 'Monthly Overview'] },
    { name: 'Pro', price: '$19.99', features: ['All Basic features', 'Personalized Readings', 'Live Chat Support'] },
    { name: 'Premium', price: '$29.99', features: ['All Pro features', 'Video Consultations', 'Exclusive Workshops'] },
  ];

  return (
    <section className="bg-[#2D3B74] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Astrology Plan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#1D2B64] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#FFD700] mb-6">{plan.price}<span className="text-sm">/month</span></p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-[#FFD700] text-[#1D2B64] font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionModel;
