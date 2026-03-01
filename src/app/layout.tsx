import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavContainer from "@/components/BottomNavContainer";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-heading',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisdom Consultancy | Top South Indian Universities Admission",
  description: "Expert Admission Guidance. Career Clarity. Trusted Counseling for South Indian Universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${manrope.variable} text-gray-900 bg-[var(--color-bg-light)] antialiased min-h-screen flex flex-col font-[family-name:var(--font-body)] font-medium`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BottomNavContainer />
      </body>
    </html>
  );
}
