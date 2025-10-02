import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Axiom Tech Labs",
  description: "High Quality Web Development Services",
  openGraph: {
    title: "Axiom Tech Labs",
    description: "High Quality Web Development Services",
    url: "https://axiomtechlabs.com",
    siteName: "Axiom Tech Labs",
    images: [
      {
  // keep the existing OG image (do not tamper)
  url: "/axiom-logo.png",
  width: 1200,
  height: 630,
        alt: "Axiom Tech Labs",
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

// Additional metadata enhancements for SEO and social previews
metadata.twitter = {
  card: 'summary_large_image',
  site: '@your_twitter_handle',
  title: 'Axiom Tech Labs',
  description: 'High Quality Web Development Services',
  images: ['https://axiomtechlabs.com/og-image.png'],
};

metadata.alternates = { canonical: 'https://axiomtechlabs.com' };

metadata.robots = { index: true, follow: true, nocache: false };

metadata.themeColor = '#f59e0b';

metadata.icons = { icon: '/favicon.ico' };


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
        {children}
        {/* JSON-LD for Organization, WebSite and Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Axiom Tech Labs",
                "url": "https://axiomtechlabs.com",
                "logo": "https://axiomtechlabs.com/favicon.ico",
                "sameAs": [
                  "https://twitter.com/your",
                  "https://www.linkedin.com/in/your"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://axiomtechlabs.com",
                "name": "Axiom Tech Labs",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://axiomtechlabs.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://axiomtechlabs.com/"
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
