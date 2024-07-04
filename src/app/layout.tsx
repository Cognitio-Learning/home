
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import React from "react";
import { motion } from 'framer-motion'
import Motion from "@/components/homeMotion";

const inter = Inter({ subsets: ["latin"] });
const imageUrl = process.env.NODE_ENV === 'production'
  ? 'https://cognitiolearning.com/og-image.png'
  : '/og-image.png';

export const metadata: Metadata = {
  title: "Cognitio Learning",
  description: "Cognitio Learning is a platform for learning and teaching.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognitio-learning.com",
    siteName: "Cognitio Learning",
    title: "Cognitio Learning: Simplified learning for the next generation.",
    description: "Cognitio Learning is a platform developed by high schoolers to teach the next generation the fundamentals of computer science and programming.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Cognitio Learning",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth  bg-main-bg", inter.className)}>
      <body className={cn('relative w-full flex flex-col items-center justify-center')}>
        <NavBar className="top-2" />
        <Motion>
          {children}
          <Footer />
        </Motion>
        <GoogleAnalytics gaId="G-9T66WJ0Z2G" />
      </body>
    </html>
  );
}
