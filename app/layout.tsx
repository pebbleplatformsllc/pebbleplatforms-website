import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'No Loafing - Roblox Gaming Company',
  description: 'Join millions of players in our innovative Roblox games. Experience adventure, creativity, and endless fun!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.className} antialiased dark`}>{children}</body>
    </html>
  );
}