
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import React from "react";
import { motion } from 'framer-motion'
import Motion from "@/components/homeMotion";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://cognitiolearning.org'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: "Cognitio Learning | Free CS & AI Bootcamps for Kids",
    template: "%s | Cognitio Learning",
  },
  metadataBase: new URL(baseUrl),
  description: "Free computer science and AI bootcamps for middle schoolers (grades 6-8). Learn Python programming and artificial intelligence fundamentals with Cognitio Learning, a nonprofit run by high schoolers.",
  keywords: ["coding for kids", "free coding bootcamp", "python for kids", "AI for kids", "computer science education", "middle school programming", "learn to code", "youth coding program", "nonprofit coding education", "summer coding camp"],
  authors: [{ name: "Cognitio Learning" }],
  creator: "Cognitio Learning",
  publisher: "Cognitio Learning",
  alternates: {
    canonical: "https://cognitiolearning.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognitiolearning.org",
    siteName: "Cognitio Learning",
    title: "Cognitio Learning | Free CS & AI Bootcamps for Kids",
    description: "Free computer science and AI bootcamps for middle schoolers. Learn Python programming and AI fundamentals with our nonprofit, run by high schoolers passionate about tech education.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Cognitio Learning - Free coding bootcamps for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitio Learning | Free CS & AI Bootcamps for Kids",
    description: "Free computer science and AI bootcamps for middle schoolers. Learn Python and AI with our nonprofit run by high schoolers.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Cognitio Learning',
  description: 'Free computer science and AI bootcamps for middle schoolers, run by high schoolers passionate about tech education.',
  url: 'https://cognitiolearning.org',
  logo: 'https://cognitiolearning.org/og-image.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://cognitiolearning.org/about',
  },
  nonprofitStatus: 'Nonprofit501c3',
  areaServed: 'Worldwide',
  serviceType: 'Online Education',
};

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Intro to Python for AI',
  description: 'A free 5-day beginner-friendly bootcamp teaching Python programming and AI fundamentals to kids ages 8-14.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Cognitio Learning',
    url: 'https://cognitiolearning.org',
  },
  educationalLevel: 'Beginner',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Children ages 8-14',
  },
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    duration: 'P5D',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth bg-white", spaceGrotesk.className)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      </head>
      <body className={cn('relative w-full flex flex-col bg-white min-h-screen')}>
        <NavBar />
        <Motion>
          {children}
          <Footer />
        </Motion>
        <GoogleAnalytics gaId="G-9T66WJ0Z2G" />
      </body>
    </html>
  );
}
