'use client';
import React, { useState } from 'react';

const HoroscopeGenerator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const generateHoroscope = () => {
    // In a real application, this would call an API or use a more complex algorithm
    setHoroscope('Your personalized horoscope will appear here. The stars are aligning to reveal your destiny!');
  };

  return (
    <section className="bg-[#2D3B74] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Generate Your Horoscope</h2>
        <div className="max-w-md mx-auto">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full p-2 mb-4 text-[#1D2B64] rounded"
          />
          <button
            onClick={generateHoroscope}
            className="w-full bg-[#FFD700] text-[#1D2B64] font-semibold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
          >
            Generate Horoscope
          </button>
          {horoscope && (
            <div className="mt-8 p-4 bg-[#1D2B64] rounded">
              <p>{horoscope}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HoroscopeGenerator;
