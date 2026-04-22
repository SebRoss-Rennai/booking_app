import type { Metadata } from "next";
import Script from "next/script";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Réservation",
  description: "Prenez rendez-vous en ligne",
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
