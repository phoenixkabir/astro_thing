'use client';
import { useState } from 'react';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const UserSummary = () => {
  const [selectedSign, setSelectedSign] = useState('');

  return (
    <section className="bg-[#1D2B64] text-[#E1D4F1] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Your Astrological Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-4">Zodiac Predictions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {zodiacSigns.map((sign) => (
                <button
                  key={sign}
                  className={`p-4 rounded-lg border ${
                    selectedSign === sign ? 'border-[#FFD700] bg-[#6C3D92]' : 'border-[#E1D4F1] bg-[#2D3B74]'
                  } hover:bg-[#6C3D92] transition duration-300`}
                  onClick={() => setSelectedSign(sign)}
                >
                  {sign}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Daily Power Graph</h3>
            <div className="bg-[#2D3B74] p-4 rounded-lg">
              <ChartBarIcon className="w-full h-32 text-[#FFD700]" />
              <p className="text-center mt-2">Your astrological power levels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSummary;
