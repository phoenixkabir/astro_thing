import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CosmicBackground from './components/CosmicBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Astrology SaaS",
  description: "Discover your cosmic destiny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CosmicBackground />
        {children}
      </body>
    </html>
  );
}
