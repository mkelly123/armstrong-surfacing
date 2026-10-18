import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://armstrong.mkelly.info"
  ),
  title: "Armstrong Surfacing Ltd | Northern Ireland Surfacing Contractors",
  description:
    "Commercial surfacing, road construction, car parks, driveways and civil engineering works across Northern Ireland.",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-icon.png",
      shortcut: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}