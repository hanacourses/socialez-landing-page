import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
<<<<<<< HEAD
import { Navbar } from "@/components/layout";
=======
import { Navbar, Footer } from "@/components/layout";
>>>>>>> 9fbd035ba7b023d8905ae5a6c1c82524cc39d162
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialEZ",
  description: "SocialEZ landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-landing`}
      >
<<<<<<< HEAD
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 pb-2 sm:px-6">
          <Navbar />
        </header>
        {children}
=======
        <header className="sticky top-0 z-50 px-4 pt-4 pb-2 sm:px-6">
          <Navbar />
        </header>
        {children}
        <Footer />
>>>>>>> 9fbd035ba7b023d8905ae5a6c1c82524cc39d162
      </body>
    </html>
  );
}
