import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const nudista = localFont({
  src: [
    {
      path: "../../public/fonts/Nudista-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nudista-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nudista-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nudista", // Makes it usable in Tailwind
  display: "swap",
});

const vcr_osd_mono = localFont({
  src: '../../public/fonts/vcr_osd_mono.woff2',
  variable: '--font-vcr-osd-mono',
});

export const metadata = {
  title: "Chris Brown | Full Stack Developer | UI/UX Specialist", // More specific title
  description: "Full stack developer specializing in UI/UX design and frontend development. Building high-performance, user-friendly web applications with React, Next.js, and more.", // Detailed description
  openGraph: {
    title: "Chris Brown | Full Stack Developer | UI/UX Specialist",
    description: "Full stack developer specializing in UI/UX design and frontend development. Building high-performance, user-friendly web applications with React, Next.js, and more.",
    url: "https://cbreazy.com", // Use your domain
    siteName: "Chris Brown Portfolio", // Clear site name
    images: [
      {
        url: "/bccLogoScreenshot.png", // Use absolute URL if possible
        width: 1200, // Recommended OG image size
        height: 630,
        alt: "Chris Brown Portfolio Screenshot",
      },
    ],
    type: "website",
    locale: "en_US", // Specify locale
  },
  twitter: {
    card: "summary_large_image", // Use large image for Twitter
    title: "Chris Brown | Full Stack Developer | UI/UX Specialist",
    description: "Full stack developer specializing in UI/UX design and frontend development. Building high-performance, user-friendly web applications with React, Next.js, and more.",
    images: ["/bccLogoScreenshot.png"], // Use absolute URL if possible
  },
  alternates: {
    canonical: "https://cbreazy.com", // Use your domain
  },
  keywords: ["full stack developer", "ui/ux design", "frontend development", "react", "next.js", "web applications", "portfolio", "javascript", "php", "mysql"], // More relevant keywords
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nudista.variable} ${vcr_osd_mono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}