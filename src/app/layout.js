import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
