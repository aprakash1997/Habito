import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Habito | India's Behavioral Preventive Health Platform",
  description: "You're not sick yet. That's exactly the right time. Habito is India's first behavioral health platform built for urban young professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased text-habito-neutral-dark bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
