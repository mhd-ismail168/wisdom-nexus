import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/ui/footer-section";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "Wisdom Nexus | Elite Admission Architects",
  description: "Strategic admission guidance for elite academic institutions. Career clarity through precision counseling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased min-h-screen flex flex-col font-[family-name:var(--font-body)] font-normal tracking-wide`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
