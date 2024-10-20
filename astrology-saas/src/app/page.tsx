import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import UserSummary from '@/app/components/UserSummary';
import HoroscopeGenerator from './components/HoroscopeGenerator';
import EventsBooking from '@/app/components/EventsBooking';
import SubscriptionModel from '@/app/components/SubscriptionModel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <UserSummary />
      <HoroscopeGenerator />
      <EventsBooking />
      <SubscriptionModel />
    </main>
  );
}
