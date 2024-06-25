import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognitio Learning",
  description: "Simplified learning for the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth  bg-main-bg">
      <body className={cn(inter.className, 'relative w-full flex flex-col items-center justify-center')}>
        <NavBar className="top-2" />

        <>
          {children}
          <Footer />
        </>
        <GoogleAnalytics gaId="G-9T66WJ0Z2G"/>
      </body>
    </html>
  );
}
