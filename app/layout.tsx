import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
