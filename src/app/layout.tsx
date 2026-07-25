import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Parisienne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Alles Gute zum Geburtstag, Jenny",
  description: "Eine Überraschung für Jenny — Paris wartet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${parisienne.variable}`}
    >
      <body className="bg-ivory text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
