
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

export const metadata: Metadata = {
  title: "Cognitio Learning",
  description: "Cognitio Learning is a platform for learning and teaching.",
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
