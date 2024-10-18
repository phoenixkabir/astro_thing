'use client';
import React from 'react';

const EventsBooking = () => {
  const events = [
    { id: 1, name: 'Full Moon Meditation', date: '2023-06-15', time: '20:00' },
    { id: 2, name: 'Astrology Workshop', date: '2023-06-22', time: '18:30' },
    { id: 3, name: 'Tarot Reading Session', date: '2023-06-29', time: '19:00' },
  ];

  return (
    <section className="bg-[#1D2B64] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Astrology Events</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-[#2D3B74] p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <button className="mt-4 bg-[#FFD700] text-[#1D2B64] font-semibold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsBooking;
