import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head'; // Import Head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brown Creative Company",
  description: "Web application development and design",
  image: "/bccLogoScreenshot.png",
  url: "https://browncreativecompany.com",
  type: "website",
  siteName: "Brown Creative Company",
  date: "2022-01-01",
  keywords: ["web development", "design", "web design", "web development"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}