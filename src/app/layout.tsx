import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/ui/footer-section";

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
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body
        className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased min-h-screen flex flex-col font-[family-name:'Share_Tech_Mono'] tracking-wide"
      >
        <Navbar />
        <div className="crt-scanlines" aria-hidden="true" />
        <main className="flex-grow">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
