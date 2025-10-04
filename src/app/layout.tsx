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
    url: "https://axiomtechlabs.vercel.app",
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
  images: ['/axiom-logo.png'],
}; 

metadata.alternates = { canonical: 'https://axiomtechlabs.vercel.app' };

metadata.robots = { index: true, follow: true, nocache: false };

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
                "url": "https://axiomtechlabs.vercel.app",
                "logo": "https://axiomtechlabs.com/favicon.ico",
                "sameAs": [
                  "https://twitter.com/your",
                  "https://www.linkedin.com/in/your"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://axiomtechlabs.vercel.app",
                "name": "Axiom Tech Labs",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://axiomtechlabs.vercel.app/search?q={search_term_string}",
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
                    "item": "https://axiomtechlabs.vercel.app/"
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
