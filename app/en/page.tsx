import type { Metadata } from "next";
import BookingPage from "../_components/BookingPage";

export const metadata: Metadata = {
  title: "Rennaï réserve presents Summer Glow",
  description: "Book your appointment online",
  openGraph: {
    title: "Rennaï réserve presents Summer Glow",
    description: "Book your appointment online",
    images: [
      {
        url: "/rennai_reserve_image.jpg",
        width: 1200,
        height: 630,
        alt: "Rennaï réserve presents Summer Glow",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rennaï réserve presents Summer Glow",
    description: "Book your appointment online",
    images: ["/rennai_reserve_image.jpg"],
  },
};

export default function EnHome() {
  return <BookingPage lang="en" />;
}
