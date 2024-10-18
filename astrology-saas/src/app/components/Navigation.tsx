import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-[#1D2B64] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AstroSaaS
        </Link>
        <div className="space-x-4">
          <Link href="/horoscope" className="hover:text-[#FFD700]">
            Horoscope
          </Link>
          <Link href="/events" className="hover:text-[#FFD700]">
            Events
          </Link>
          <Link href="/subscribe" className="hover:text-[#FFD700]">
            Subscribe
          </Link>
          <Link href="/login" className="bg-[#FFD700] text-[#1D2B64] px-4 py-2 rounded-full hover:bg-opacity-90">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
