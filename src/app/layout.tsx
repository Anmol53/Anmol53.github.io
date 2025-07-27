import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  title: "Anmol Agrawal - Software Developer",
  description:
    "Portfolio website of Anmol Agrawal, a passionate Software Developer with expertise in React, Node.js, and cloud technologies. Currently working at Shaadi.com, building scalable web applications.",
  url: "https://anmolagrawal.dev",
  author: "Anmol Agrawal",
  email: "anmol.ag53@gmail.com",
  blogsUrl: "https://blogs.anmolagrawal.dev",
  twitterHandle: "@Ag53Anmol",
  image: "https://avatars.githubusercontent.com/u/26030484?v=4",
  applicationName: "Anmol Agrawal's Portfolio",
  geo: {
    placename: "Mumbai, Maharashtra, India",
    position: "19.0760;72.8777",
    region: "IN-MH",
    icbm: "19.0760, 72.8777",
  },
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "Anmol Agrawal",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Mumbai",
    "Maharashtra",
    "India",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "application-name": siteConfig.applicationName,
    "geo.placename": siteConfig.geo.placename,
    "geo.position": siteConfig.geo.position,
    "geo.region": siteConfig.geo.region,
    ICBM: siteConfig.geo.icbm,
    language: "en",
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              name: "Anmol Agrawal – Full Stack Developer Portfolio",
              url: siteConfig.url,
              mainEntity: {
                "@type": "Person",
                name: siteConfig.author,
                alternateName: siteConfig.author
                  .toLowerCase()
                  .split(" ")
                  .join(""),
                image: siteConfig.image,
                url: siteConfig.url,
                jobTitle: "Full Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "People Interactive (Shaadi.com)",
                  url: "https://people-group.com/",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  addressCountry: "India",
                },
                email: `mailto:${siteConfig.email}`,
                sameAs: [
                  "https://github.com/Anmol53",
                  "https://www.linkedin.com/in/anmol-53/",
                  "https://www.x.com/Ag53Anmol",
                  "https://hashnode.com/@anmol53",
                  `mailto:${siteConfig.email}`,
                  siteConfig.blogsUrl,
                ],
                description: siteConfig.description,
                knowsAbout: [
                  "AWS",
                  "Bootstrap",
                  "CSS3",
                  "DataDog",
                  "Docker",
                  "Elasticsearch",
                  "Express",
                  "Git",
                  "GitHub",
                  "GraphQL",
                  "HTML5",
                  "JavaScript",
                  "Jest",
                  "Jira",
                  "Kafka",
                  "Kibana",
                  "MongoDB",
                  "MySQL",
                  "Next.js",
                  "Node.js",
                  "PHP",
                  "PostgreSQL",
                  "Python",
                  "React.js",
                  "Redis",
                  "Redux",
                  "REST APIs",
                  "Sass",
                  "Tailwind CSS",
                  "TypeScript",
                ],
                knowsLanguage: ["English", "Hindi"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Software Engineer",
                  description:
                    "Experienced full stack developer building performant web applications.",
                  estimatedSalary: [
                    {
                      "@type": "MonetaryAmountDistribution",
                      name: "base",
                      currency: "INR",
                      duration: "P1Y",
                      minValue: 1800000,
                      maxValue: 2000000,
                      median: 1900000,
                    },
                  ],
                  occupationLocation: [
                    {
                      "@type": "City",
                      name: "Mumbai, Maharashtra, India",
                    },
                  ],
                },
                worksOn: [
                  {
                    "@type": "CreativeWork",
                    name: "Dual Shades",
                    url: "https://dual-shades.anmolagrawal.dev/?ref=my-portfolio",
                    description:
                      "Web app for color isolation in photos. Built with Next.js.",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "Leafy Cafe",
                    url: "https://www.anmolagrawal.dev/leafy-cafe/?ref=my-portfolio",
                    description:
                      "Responsive website for a vegan restaurant. Built with HTML, CSS, JS.",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "BMI Tracker",
                    url: "https://www.anmolagrawal.dev/bmi-tracker/?ref=my-portfolio",
                    description: "PWA for tracking BMI. Built with React.js.",
                  },
                  {
                    "@type": "CreativeWork",
                    name: "Gradient Generator",
                    url: "https://www.anmolagrawal.dev/gradient-generator/?ref=my-portfolio",
                    description:
                      "CSS gradient generator tool. Built with vanilla JS.",
                  },
                ],
                gender: "Male",
                nationality: {
                  "@type": "Country",
                  name: "India",
                },
              },
              about: {
                "@type": "Thing",
                name: "Software Development Portfolio",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Experience",
                    item: `${siteConfig.url}/#experience`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: `${siteConfig.url}/#projects`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Blogs",
                    item: siteConfig.blogsUrl,
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Contact",
                    item: `${siteConfig.url}/#contact`,
                  },
                ],
              },
              dateCreated: "20211007T000000Z",
              inLanguage: "en",
              potentialAction: {
                "@type": "ReadAction",
                target: siteConfig.url,
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-black text-gray-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
