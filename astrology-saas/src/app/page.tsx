import HeroSection from '@/app/components/HeroSection';
import UserSummary from '@/app/components/UserSummary';
import HoroscopeGenerator from '@/app/components/HoroscopeGenerator';
import EventsBooking from '@/app/components/EventsBooking';

import SubscriptionModel from '@/app/components/SubscriptionModel';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UserSummary />
      <HoroscopeGenerator />
      <EventsBooking />
      <SubscriptionModel />
    </main>
  );
}
