import type { Metadata } from "next";
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
  title: "BuildCraft - Services de Construction Professionnels",
  description: "BuildCraft offre des services de construction, rénovation et gestion de projets. Découvrez nos réalisations et demandez un devis gratuit.",
  openGraph: {
    title: "BuildCraft - Services de Construction",
    description: "Services professionnels de construction, rénovation et gestion de projets",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
