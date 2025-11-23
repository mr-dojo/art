import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from 'next/font/google';
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Costantino Art | Contemporary Art Gallery",
  description: "Discover contemporary art by Costantino. Explore unique artworks and creative expression.",
  keywords: "art, contemporary art, gallery, artwork, Costantino",
  authors: [{ name: "Costantino" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
