import type { Metadata } from "next";
import Script from "next/script";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Rennaï réserve présente l’été en éclat",
  description: "Prenez rendez-vous en ligne",
  openGraph: {
    title: "Rennaï réserve présente l’été en éclat",
    description: "Prenez rendez-vous en ligne",
    images: [
      {
        url: "/rennai_reserve_image.jpg",
        width: 1200,
        height: 630,
        alt: "Rennaï réserve présente l’été en éclat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rennaï réserve présente l’été en éclat",
    description: "Prenez rendez-vous en ligne",
    images: ["/rennai_reserve_image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={raleway.variable}>
      <head>
        <Script
          id="booknowlib"
          src="https://www.booxi.com/booknow/booknow.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
