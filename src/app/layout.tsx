import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denis Filatov",
  description: "Personal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
      <GoogleAnalytics gaId="G-PHE8BEY601"/>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
