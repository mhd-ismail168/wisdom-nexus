import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FooterSection } from "@/components/ui/footer-section";

export const metadata: Metadata = {
  metadataBase: new URL("https://wisdomnexus.com"),
  title: {
    default: "Wisdom Nexus | Elite Admission Architects",
    template: "%s | Wisdom Nexus"
  },
  description: "Strategic academic counsel for families seeking admissions to top universities in India and abroad. Specialized guidance for MBBS, Engineering, Study Abroad programs, and DMIT assessments.",
  keywords: [
    "Wisdom Nexus",
    "college admission consultancy",
    "study abroad consultancy India",
    "MBBS admission guidance",
    "engineering admission guidance",
    "DMIT assessment India",
    "career counselling Kerala"
  ],
  authors: [{ name: "Wisdom Nexus" }],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://wisdomnexus.com"
  },
  openGraph: {
    title: "Wisdom Nexus",
    description: "Elite Admission Architects providing strategic academic counseling.",
    url: "https://wisdomnexus.com",
    siteName: "Wisdom Nexus",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Wisdom Nexus"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Nexus",
    description: "Elite Admission Architects",
    images: ["/logo.webp"]
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png" }
    ]
  },
  manifest: "/favicon/site.webmanifest"
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
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Wisdom Nexus",
              "url": "https://wisdomnexus.com",
              "logo": "https://wisdomnexus.com/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thiruvananthapuram",
                "addressRegion": "Kerala",
                "postalCode": "695001",
                "addressCountry": "India"
              },
              "telephone": "+91 90372 21362"
            })
          }}
        />
      </body>
    </html>
  );
}
