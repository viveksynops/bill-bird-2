import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billbird.com"),
  title: "BILL BIRD | Eyewear Without Compromise",
  description:
    "A luxury eyewear brand experience focused on craftsmanship, restraint, and enduring design.",
  openGraph: {
    title: "BILL BIRD | Eyewear Without Compromise",
    description:
      "A cinematic luxury eyewear landing page built around craftsmanship, editorial storytelling, and restraint.",
    images: ["/campaign/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#F8F6F2] text-[#111111]">{children}</body>
    </html>
  );
}
