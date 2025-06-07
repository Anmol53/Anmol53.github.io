import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  title: "Anmol Agrawal - Software Developer",
  description: "Portfolio website of Anmol Agrawal, a passionate Software Developer with expertise in React, Node.js, and cloud technologies. Currently working at Shaadi.com, building scalable web applications.",
  url: "https://anmolagrawal.dev",
  author: "Anmol Agrawal",
  twitterHandle: "@Ag53Anmol",
  image: "https://avatars.githubusercontent.com/u/26030484?v=4", // Make sure to add this image in the public folder
  applicationName: "Anmol Agrawal's Portfolio",
  geo: {
    placename: "Mumbai, Maharashtra, India",
    position: "19.0760;72.8777",
    region: "IN-MH",
    icbm: "19.0760, 72.8777"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.applicationName,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.applicationName,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'Anmol Agrawal',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Web Developer',
    'JavaScript',
    'TypeScript',
    'Mumbai',
    'Maharashtra',
    'India',
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    'application-name': siteConfig.applicationName,
    'geo.placename': siteConfig.geo.placename,
    'geo.position': siteConfig.geo.position,
    'geo.region': siteConfig.geo.region,
    'ICBM': siteConfig.geo.icbm,
    language: 'en',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: siteConfig.author,
              url: siteConfig.url,
              sameAs: [
                'https://github.com/Anmol53',
                `https://twitter.com/${siteConfig.twitterHandle.substring(1)}`,
                'https://www.linkedin.com/in/anmol-53/',
                'https://hashnode.com/@anmol53',
              ],
              jobTitle: 'Software Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'People Interactive (Shaadi.com)',
              },
              image: siteConfig.image,
              description: siteConfig.description,
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
