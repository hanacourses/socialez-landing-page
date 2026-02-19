import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full min-w-0 antialiased bg-landing overflow-x-hidden`}
      >
        <header className="fixed left-0 right-0 top-0 z-50 w-full px-4 pt-4 pb-2 sm:px-6">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
