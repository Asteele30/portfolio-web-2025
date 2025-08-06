import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/header/Navbar";
import Footer from "@/components/sections/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspen Steele Portfolio",
  description: "Creative full-stack developer & designer",
  openGraph: {
    title: "Aspen Steele Portfolio",
    description: "Check out my latest projects, skills & more!",
    url: "https://aspen-steele-teal.vercel.app",
    siteName: "Aspen Steele",
    images: [
      {
        url: "https://aspen-steele-teal.vercel.app/profile1.jpg",
        width: 1200,
        height: 630,
        alt: "Aspen Steele Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspen Steele Portfolio",
    description: "Creative front-end developer & designer",
    images: ["https://aspen-steele-teal.vercel.app/opengraph-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
