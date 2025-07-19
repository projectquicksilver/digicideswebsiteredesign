import "@/styles/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  axes: ["opsz"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaS Company for Agri Marketing | Digicides Marketing Services",
  description: "Digicides is a SaaS-powered communication platform offering agriculture-focused marketing services, lead generation tools, and multi-channel engagement for agribusinesses in India.",
  keywords: "agri marketing, SaaS for agriculture, agriculture marketing platform, farmer engagement, agri lead generation, digital marketing for agribusiness, agri SaaS solutions, multi-channel marketing agriculture, Digicides",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  alternates: {
    canonical: "https://www.digicides.com/",
  },
  openGraph: {
    title: "SaaS Company for Agri Marketing | Digicides",
    description: "Empowering agribusinesses with SaaS marketing solutions to connect, engage, and convert farmers through data-driven communication.",
    type: "website",
    url: "https://www.digicides.com/",
    images: [
      {
        url: "https://www.digicides.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Digicides Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digicides Marketing Services Pvt. Ltd.",
              "url": "https://www.digicides.com",
              "logo": "https://www.digicides.com/Logo.png",
              "description": "A SaaS-powered marketing and communication platform for the agriculture industry, helping agribusinesses connect with farmers through data-driven campaigns.",
              "sameAs": [
                "https://www.facebook.com/digicides.in",
                "https://www.instagram.com/digicides",
                "https://www.linkedin.com/company/digicides"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8447302576",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": "en",
                "email": "connect@digicides.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "ZIP Code",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`  bg-background font-sans antialiased overflow-x-hidden ${inter.className}`}
      >
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
