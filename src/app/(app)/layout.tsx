import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";
import React from "react";
import Motion from "@/components/homeMotion";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://cognitiolearning.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Cognitio Learning",
  metadataBase: new URL(baseUrl),
  description: "Cognitio Learning is a platform developed by high schoolers to teach the next generation the fundamentals of computer science and programming.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognitiolearning.com",
    siteName: "Cognitio Learning",
    title: "Cognitio Learning: Simplified learning for the next generation.",
    description: "Cognitio Learning is a platform developed by high schoolers to teach the next generation the fundamentals of computer science and programming.",
    images: [
      {
        url: '/og-image.png',
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
    <html lang="en" className={cn("scroll-smooth antialiased", inter.className)} suppressHydrationWarning>
      <body className={cn('w-full min-h-screen')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <Motion>
            <main className="">
              {children}
            </main>
            <Footer />
          </Motion>
        </ThemeProvider>
      </body>
    </html>
  );
}
