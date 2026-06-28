import type { Metadata, Viewport } from "next";
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
  title: "Hrishikesh Gaikwad - Performance Creative & Growth Marketing Specialist",
  description: "Creative and growth marketer with 4+ years of experience across content strategy, campaign execution, and AI-assisted creative workflows. Specialized in performance-first creative that converts.",
  keywords: ["Performance Creative", "Growth Marketing", "Content Strategy", "AI-Assisted Creative", "Video Production", "Campaign Execution"],
  authors: [{ name: "Hrishikesh Gaikwad" }],
  openGraph: {
    title: "Hrishikesh Gaikwad - Performance Creative & Growth Marketing Specialist",
    description: "Building performance creative systems that scale—one campaign at a time.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00ff88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-foreground antialiased">{children}</body>
    </html>
  );
}
