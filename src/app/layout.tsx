import "@/styles/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Company for Agri Marketing | Digicides Marketing Services",
  description: "Digicides is a SaaS-powered communication platform offering agriculture-focused marketing services, lead generation tools, and multi-channel engagement for agribusinesses in India.",
  keywords: "agri marketing, SaaS for agriculture, agriculture marketing platform, farmer engagement, agri lead generation, digital marketing for agribusiness, agri SaaS solutions, multi-channel marketing agriculture, Digicides",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`  bg-background font-sans antialiased ${inter.className}`}
      >
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
