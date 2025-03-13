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
  title: "Brown Creative Company",
  description: "Web application development and design",
  image: "/bccLogoScreenshot.png",
  url: "https://browncreativecompany.com",
  type: "website",
  siteName: "Brown Creative Company",
  date: "2022-01-01",
  keywords: ["web development", "design", "web design", "web development", "software development", "software design"],
  icons: {
    icon: '/favicon.ico', // Add the favicon here
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