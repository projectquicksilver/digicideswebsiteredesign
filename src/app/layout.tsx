import "@/styles/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digicides",
  description: "A product-driven company dedicated exclusively to the agri industry. Our suite of advanced SaaS products and solutions helps businesses enhance marketing, communication, and customer engagement—ultimately leading to better sales and business growth.",
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
