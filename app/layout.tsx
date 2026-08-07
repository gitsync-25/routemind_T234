import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RouteMind Dashboard | AI Enterprise Logistics & Tracking",
  description:
    "Real-time AI-powered fleet management, route optimization, global tracking, and logistics analytics dashboard.",
  keywords: [
    "RouteMind",
    "Fleet Management",
    "Route Optimization",
    "Logistics Dashboard",
    "AI Route Mind",
    "Real-time Tracking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-on-surface font-sans antialiased h-screen overflow-hidden selection:bg-primary-container selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
