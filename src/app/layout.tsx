import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

import { Sour_Gummy } from 'next/font/google';

const notoSans = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://kellysrufflife.com/ || https://localhost:3000/`),
  title: "Kelly's Ruff Life | Dog Walking | Dog Sitting | Indian Wells CA",
  description: "Discover professional and reliable pet care services with Kelly Ruff. Offering dog sitting with overnight care and exhilarating dog walking options, including power walks and two-hour hikes with pick-up and drop-off. Book now to ensure your furry friend gets the care they deserve!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
